import type { Json, Method } from "./types";
import Request from "./Request";

class MiddlewareRequest<
    Params extends Json,
    SearchParams extends Json,
    Body,
    Data extends Json,
    Modified_Params extends boolean,
    Modified_SearchParams extends boolean,
    Modified_Body extends boolean,
    Modified_Data extends boolean
> extends Request<Params, SearchParams, Body, Data> {

    /**
     * Sets the parameters of the incoming request.
     * These come as a JSON object by default.
     * 
     * @param v The new value of the parameters.
     */
    public setParams<T extends Json>(v: T) {
        return new MiddlewareRequest<
            T,
            SearchParams,
            Body,
            Data,
            true,
            Modified_SearchParams,
            Modified_Body,
            Modified_Data
        >(
            this.url,
            v,
            this.searchParams,
            this.method as Method,
            this.headers,
            this.body,
            this.data
        );
    }



    /**
     * Sets the search/query parameters of the incoming request.
     * These come as a JSON object by default.
     * 
     * @param v The new value of the search/query parameters.
     */
    public setSearchParams<T extends Json>(v: T) {
        return new MiddlewareRequest<
            Params,
            T,
            Body,
            Data,
            Modified_Params,
            true,
            Modified_Body,
            Modified_Data
        >(
            this.url,
            this.params,
            v,
            this.method as Method,
            this.headers,
            this.body,
            this.data
        );
    }



    /**
     * Sets the body of the incoming request.
     * This has, by default, the value of the given content type when the builder chain was initialized.
     * 
     * @param v The new value of the body.
     */
    public setBody<T>(v: T) {
        return new MiddlewareRequest<
            Params,
            SearchParams,
            T,
            Data,
            Modified_Params,
            Modified_SearchParams,
            true,
            Modified_Data
        >(
            this.url,
            this.params,
            this.searchParams,
            this.method as Method,
            this.headers,
            v,
            this.data
        );
    }



    /**
     * Sets the data of the incoming request.
     * This can be used as a transport for example session data.
     * This is an empty JSON object by default, but is only set by key-value pairs - not object directly.
     * 
     * @param key The key of the value to be set.
     * @param v The actual value.
     */
    public setData<Key extends string, T>(key: Key, v: T) {
        return new MiddlewareRequest<
            Params,
            SearchParams,
            Body,
            Record<Key, T>,
            Modified_Params,
            Modified_SearchParams,
            Modified_Body,
            true
        >(
            this.url,
            this.params,
            this.searchParams,
            this.method as Method,
            this.headers,
            this.body,
            { ...this.data, [key]: v }
        );
    }

}

export default MiddlewareRequest;