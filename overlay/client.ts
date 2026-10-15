/* tslint:disable */
/* eslint-disable */
/**
 * High-level convenience client for the Cleanlist API.
 *
 * Hand-authored (not generated) and re-applied on every regeneration by
 * `scripts/generate.sh`. It wires an authenticated `Configuration` to every
 * resource group so you can write:
 *
 * ```ts
 * import { Cleanlist } from '@cleanlist-ai/sdk';
 *
 * const cl = new Cleanlist({ accessToken: 'clapi_live_...' });
 * const me = await cl.workspace.whoami();
 * const list = await cl.leadLists.createList({ createListRequest: { name: 'Q3 outbound' } });
 * ```
 *
 * Prefer the generated API classes directly? They're all exported too
 * (`PublicWorkspaceApi`, `Configuration`, …); this is just sugar.
 */
import { Configuration, ConfigurationParameters } from './runtime';
import {
    PublicEnrichmentApi,
    PublicExportApi,
    PublicLeadListsApi,
    PublicPeopleFinderApi,
    PublicSmartAgentsApi,
    PublicWorkspaceApi,
} from './apis/index';

/** Production API base URL. */
export const DEFAULT_BASE_PATH = 'https://api.cleanlist.ai';

export interface CleanlistOptions {
    /** Your Cleanlist API key (sent as `Authorization: Bearer <key>`). Falls back to `process.env.CLEANLIST_API_KEY`. */
    accessToken?: string;
    /** API base URL. Defaults to production; use `http://localhost:8000` for local dev. */
    basePath?: string;
    /** Custom `fetch` implementation (e.g. for Node < 18, or a test double). */
    fetchApi?: ConfigurationParameters['fetchApi'];
}

function envKey(): string | undefined {
    return typeof process !== 'undefined' && process.env ? process.env.CLEANLIST_API_KEY : undefined;
}

/**
 * Authenticated entry point exposing every Cleanlist API resource group:
 * `workspace`, `leadLists`, `peopleFinder`, `enrichment`, `smartAgents`, and `export`.
 */
export class Cleanlist {
    readonly configuration: Configuration;
    readonly workspace: PublicWorkspaceApi;
    readonly leadLists: PublicLeadListsApi;
    readonly peopleFinder: PublicPeopleFinderApi;
    readonly enrichment: PublicEnrichmentApi;
    readonly smartAgents: PublicSmartAgentsApi;
    readonly export: PublicExportApi;

    constructor(options: CleanlistOptions | string = {}) {
        const opts: CleanlistOptions = typeof options === 'string' ? { accessToken: options } : options;
        const accessToken = opts.accessToken ?? envKey();
        if (!accessToken) {
            throw new Error(
                'A Cleanlist API key is required. Pass { accessToken } or set the CLEANLIST_API_KEY environment variable.',
            );
        }

        this.configuration = new Configuration({
            basePath: opts.basePath ?? DEFAULT_BASE_PATH,
            accessToken,
            fetchApi: opts.fetchApi,
        });

        this.workspace = new PublicWorkspaceApi(this.configuration);
        this.leadLists = new PublicLeadListsApi(this.configuration);
        this.peopleFinder = new PublicPeopleFinderApi(this.configuration);
        this.enrichment = new PublicEnrichmentApi(this.configuration);
        this.smartAgents = new PublicSmartAgentsApi(this.configuration);
        this.export = new PublicExportApi(this.configuration);
    }
}
