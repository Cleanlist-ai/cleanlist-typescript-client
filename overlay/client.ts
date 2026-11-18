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
import { DEFAULT_MAX_ATTEMPTS, Mode, ResponseMeta, retryingFetch } from './http';
import {
    PublicAccountsDataApi,
    PublicActionsApi,
    PublicEnrichmentApi,
    PublicExportApi,
    PublicGTMAgentsApi,
    PublicGTMTasksApi,
    PublicInboxApi,
    PublicLeadListsApi,
    PublicPeopleFinderApi,
    PublicPlaysApi,
    PublicSignalsApi,
    PublicSmartAgentsApi,
    PublicWebhooksApi,
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
    /**
     * Total tries per request, the first one included (default 3). 429s and 5xx are
     * retried with backoff, honoring `Retry-After`. Writes carry an `Idempotency-Key`
     * that stays the same across retries. Set 1 to turn retries off.
     */
    maxAttempts?: number;
}

function envKey(): string | undefined {
    return typeof process !== 'undefined' && process.env ? process.env.CLEANLIST_API_KEY : undefined;
}

/**
 * Authenticated entry point exposing every Cleanlist API resource group:
 * `workspace`, `leadLists`, `peopleFinder`, `enrichment`, `smartAgents`, `export`,
 * `actions`, `gtmAgents`, `plays`, `tasks`, `inbox`, `signals`, `accountsData` and `webhooks`.
 */
export class Cleanlist {
    readonly configuration: Configuration;
    readonly workspace: PublicWorkspaceApi;
    readonly leadLists: PublicLeadListsApi;
    readonly peopleFinder: PublicPeopleFinderApi;
    readonly enrichment: PublicEnrichmentApi;
    readonly smartAgents: PublicSmartAgentsApi;
    readonly export: PublicExportApi;
    readonly actions: PublicActionsApi;
    readonly gtmAgents: PublicGTMAgentsApi;
    readonly plays: PublicPlaysApi;
    readonly tasks: PublicGTMTasksApi;
    readonly inbox: PublicInboxApi;
    readonly signals: PublicSignalsApi;
    readonly accountsData: PublicAccountsDataApi;
    readonly webhooks: PublicWebhooksApi;
    /** Rate-limit, mode and replay headers of the most recent response. */
    lastResponse?: ResponseMeta;
    private readonly keyMode: Mode;

    constructor(options: CleanlistOptions | string = {}) {
        const opts: CleanlistOptions = typeof options === 'string' ? { accessToken: options } : options;
        const accessToken = opts.accessToken ?? envKey();
        if (!accessToken) {
            throw new Error(
                'A Cleanlist API key is required. Pass { accessToken } or set the CLEANLIST_API_KEY environment variable.',
            );
        }

        this.keyMode = accessToken.startsWith('clapi_test_') ? 'test' : 'live';
        const baseFetch = opts.fetchApi ?? ((input, init) => fetch(input, init));
        this.configuration = new Configuration({
            basePath: opts.basePath ?? DEFAULT_BASE_PATH,
            accessToken,
            fetchApi: retryingFetch(baseFetch, {
                maxAttempts: opts.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
                onResponse: (meta) => {
                    this.lastResponse = meta;
                },
            }),
        });

        this.workspace = new PublicWorkspaceApi(this.configuration);
        this.leadLists = new PublicLeadListsApi(this.configuration);
        this.peopleFinder = new PublicPeopleFinderApi(this.configuration);
        this.enrichment = new PublicEnrichmentApi(this.configuration);
        this.smartAgents = new PublicSmartAgentsApi(this.configuration);
        this.export = new PublicExportApi(this.configuration);
        this.actions = new PublicActionsApi(this.configuration);
        this.gtmAgents = new PublicGTMAgentsApi(this.configuration);
        this.plays = new PublicPlaysApi(this.configuration);
        this.tasks = new PublicGTMTasksApi(this.configuration);
        this.inbox = new PublicInboxApi(this.configuration);
        this.signals = new PublicSignalsApi(this.configuration);
        this.accountsData = new PublicAccountsDataApi(this.configuration);
        this.webhooks = new PublicWebhooksApi(this.configuration);
    }

    /** `test` when the server says so (`Cleanlist-Mode: test`), else what the key prefix implies. */
    get mode(): Mode {
        return this.lastResponse?.mode ?? this.keyMode;
    }
}
