import type { ContentType, ContentTypeMap, Json } from "./types";
import Builder from "./Builder";
import type { Middleware } from "./Middleware";

namespace QualityApi {

    /**
     * Starts a builder chain.
     * 
     * @param contentType The desired content type of the incoming request. The according method in the Node.js native `globalThis.Request` class is run on every received request. If this can't be parsed, a 422 "unprocessable entity" response will be automatically returned.
     */
    export function start<CT extends ContentType | undefined = undefined>(contentType?: CT) {
        return new Builder<
            Json,
            Json,
            CT extends ContentType
                ? ContentTypeMap[CT]
                : unknown,
            Json
        >(contentType);
    }

    /**
     * Creates a middleware.
     * 
     * @param fn The executed function on every middleware run. This should return a native Node.js response (`globalThis.Response`) or the received, possibly modified, request.
     */
    export function createMiddleware<
        Start_Params extends Json,
        Start_SearchParams extends Json,
        Start_Body,
        Start_Data extends Json,
        End_Params extends Json,
        End_SearchParams extends Json,
        End_Body,
        End_Data extends Json,
        Modified_Params extends boolean,
        Modified_SearchParams extends boolean,
        Modified_Body extends boolean,
        Modified_Data extends boolean
    >(
        fn: Middleware<
            Start_Params,
            Start_SearchParams,
            Start_Body,
            Start_Data,
            End_Params,
            End_SearchParams,
            End_Body,
            End_Data,
            Modified_Params,
            Modified_SearchParams,
            Modified_Body,
            Modified_Data
        >
    ) {
        return fn;
    }

}

export default QualityApi;