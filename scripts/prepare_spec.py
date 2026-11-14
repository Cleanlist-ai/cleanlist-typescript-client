#!/usr/bin/env python3
"""Prepare the raw backend v2 OpenAPI export for client generation.

FastAPI emits verbose default operationIds of the form
``<function_name>_api_v2_<path>_<method>`` (e.g. ``whoami_api_v2_whoami_get``).
Fed straight into openapi-generator those become unusable method names.

The clean, human-authored part is always the segment *before* ``_api_v2_``
(the route function name), so we recover a tidy snake_case method name from it.
The result is written to a build-only spec that the generator consumes; the
pristine backend export at ``openapi/cleanse-api-v2.oas.json`` is left untouched.

Usage:
    python scripts/prepare_spec.py <input.json> <output.json>
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

_HTTP_METHODS = {"get", "put", "post", "delete", "options", "head", "patch", "trace"}


def clean_operation_id(operation_id: str) -> str:
    """`create_list_api_v2_lead_lists_post` -> `create_list`."""
    name = operation_id.split("_api_v2_", 1)[0]
    # A few routes carry an `_endpoint` suffix on the function name; drop it so
    # the method reads naturally (`list_api_keys_endpoint` -> `list_api_keys`).
    if name.endswith("_endpoint"):
        name = name[: -len("_endpoint")]
    return name


def collapse_freeform_anyof(node) -> int:
    """Collapse ``anyOf`` schemas that contain the empty (free-form) schema.

    Pydantic emits free-form nullable fields as ``{"anyOf": [{}, {"type":
    "null"}]}``. The empty ``{}`` branch already matches *anything* (including
    null), so the whole ``anyOf`` is equivalent to a plain free-form schema.
    Some generators (notably typescript-fetch 7.x) mis-handle that shape and
    emit references to undefined ``FromJSON``/``ToJSON`` helpers. Dropping the
    redundant ``anyOf`` (while keeping title/description/examples) is
    semantically identical and generates cleanly as ``any``/``object``.

    Recurses through the whole document; returns the number of collapses.
    """
    count = 0
    if isinstance(node, dict):
        any_of = node.get("anyOf")
        if isinstance(any_of, list) and any(branch == {} for branch in any_of):
            node.pop("anyOf", None)
            count += 1
        for value in node.values():
            count += collapse_freeform_anyof(value)
    elif isinstance(node, list):
        for value in node:
            count += collapse_freeform_anyof(value)
    return count


def collapse_numeric_anyof(node) -> int:
    """Collapse ``anyOf`` branches ``{"type": "integer"}`` + ``{"type": "number"}``.

    Pydantic emits ``int | float`` fields as ``anyOf: [integer, number]``. Every
    integer is already a number, so the integer branch is redundant. Generators
    turn that ``anyOf`` into an opaque wrapper type (an empty interface in
    typescript-fetch, an uncompilable default in java okhttp-gson), so drop the
    integer branch and unwrap a lone remaining branch into a plain ``number``.

    Recurses through the whole document; returns the number of collapses.
    """
    count = 0
    if isinstance(node, dict):
        any_of = node.get("anyOf")
        if isinstance(any_of, list) and {"type": "integer"} in any_of and {"type": "number"} in any_of:
            rest = [b for b in any_of if b != {"type": "integer"}]
            if len(rest) == 1:
                node.pop("anyOf")
                node.update(rest[0])
            else:
                node["anyOf"] = rest
            count += 1
        for value in node.values():
            count += collapse_numeric_anyof(value)
    elif isinstance(node, list):
        for value in node:
            count += collapse_numeric_anyof(value)
    return count


def preview_union_to_oneof(spec) -> int:
    """Turn response ``anyOf: [X, LivePreview]`` into ``oneOf: [LivePreview, X]``.

    Live calls without ``commit: true`` answer with a ``LivePreview`` instead of
    their result. typescript-fetch merges an ``anyOf`` of objects into one
    interface whose decoder reads every branch's required fields, so a preview
    crashes on the other branch's arrays (``skillRefs.map`` on undefined) and a
    committed free-form result is dropped. ``oneOf`` generates a real union that
    picks the branch with ``instanceOf``; LivePreview's required fields
    (``action``, ``credits_max``, ``estimate`` ...) only appear on a preview.
    When the other branch is a free-form object the generated union would fall
    back to ``{}`` and drop the committed result, so the schema becomes that
    free-form object instead and callers tell a preview by ``committed === false``.

    Returns the number of response schemas rewritten.
    """
    ref = "#/components/schemas/LivePreview"
    count = 0
    for item in (spec.get("paths") or {}).values():
        for operation in item.values():
            if not isinstance(operation, dict):
                continue
            for response in (operation.get("responses") or {}).values():
                for media in ((response or {}).get("content") or {}).values():
                    schema = (media or {}).get("schema") or {}
                    any_of = schema.get("anyOf")
                    if not isinstance(any_of, list) or {"$ref": ref} not in any_of:
                        continue
                    rest = [b for b in any_of if b != {"$ref": ref}]
                    schema.pop("anyOf")
                    freeform = next((b for b in rest if b.get("type") == "object" and "properties" not in b), None)
                    if freeform is not None:
                        # Bare, untitled: a titled free-form response changes how the
                        # generator types every other free-form map in the spec.
                        media["schema"] = dict(freeform)
                    else:
                        schema["oneOf"] = [{"$ref": ref}, *rest]
                    count += 1
    return count


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__)
        return 2

    src, dst = Path(sys.argv[1]), Path(sys.argv[2])
    spec = json.loads(src.read_text())

    seen: dict[str, str] = {}
    for path, item in (spec.get("paths") or {}).items():
        for method, operation in item.items():
            if method.lower() not in _HTTP_METHODS or not isinstance(operation, dict):
                continue
            original = operation.get("operationId")
            if not original:
                continue
            cleaned = clean_operation_id(original)
            if cleaned in seen and seen[cleaned] != original:
                raise SystemExit(
                    f"operationId collision: '{cleaned}' from both "
                    f"'{seen[cleaned]}' and '{original}' ({method.upper()} {path})"
                )
            seen[cleaned] = original
            operation["operationId"] = cleaned

    collapsed = collapse_freeform_anyof(spec)
    collapsed += collapse_numeric_anyof(spec)
    previews = preview_union_to_oneof(spec)

    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(json.dumps(spec, indent=2))
    print(
        f"Prepared spec: {len(seen)} cleaned operationIds, "
        f"{collapsed} free-form/numeric anyOf collapsed, "
        f"{previews} preview unions -> {dst}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
