#!/usr/bin/env bash
#
# Regenerate the Cleanlist TypeScript SDK from the v2 OpenAPI schema.
#
# Uses openapi-generator-cli (typescript-fetch, pinned in openapitools.json).
# Re-run whenever openapi/cleanse-api-v2.oas.json changes.
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

RAW_SPEC="openapi/cleanse-api-v2.oas.json"
GEN_SPEC="openapi/cleanse-api-v2.clean.json"
BUILD="$ROOT/.build/ts"
PKG_VERSION="${PKG_VERSION:-3.0.0}"
PYTHON="${PYTHON:-python3}"

echo "==> Preparing spec (clean operationIds -> readable method names)"
"$PYTHON" scripts/prepare_spec.py "$RAW_SPEC" "$GEN_SPEC"

echo "==> Generating typescript-fetch client"
rm -rf "$BUILD"
npx --yes @openapitools/openapi-generator-cli generate \
  -i "$GEN_SPEC" \
  -g typescript-fetch \
  -o "$BUILD" \
  --additional-properties=npmName=@cleanlist-ai/sdk,npmVersion="${PKG_VERSION}",supportsES6=true,typescriptThreePlus=true,modelPropertyNaming=original,enumPropertyNaming=original

echo "==> Assembling src/"
rm -rf "$ROOT/src"
cp -R "$BUILD/src" "$ROOT/src"

# Keep the generated markdown reference docs around.
rm -rf "$ROOT/docs"
[ -d "$BUILD/docs" ] && cp -R "$BUILD/docs" "$ROOT/docs" || true

echo "==> Applying hand-authored overlay (Cleanlist convenience facade)"
cp "$ROOT/overlay/client.ts" "$ROOT/src/client.ts"
# Re-export the facade from the barrel. Idempotent: src/index.ts is regenerated
# fresh each run, so this appends exactly once.
printf "export * from './client';\n" >> "$ROOT/src/index.ts"

echo "==> Done. Sources in src/ (run: npm install && npm run build)"
