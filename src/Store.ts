const GLOBALTHIS_NAMESPACE_KEY = "__quality-api/storage__";

namespace Store {

    function ensureNamespace() {
        if (!(GLOBALTHIS_NAMESPACE_KEY in globalThis))
            // @ts-expect-error
            globalThis[GLOBALTHIS_NAMESPACE_KEY]
                = {};
    }

    /** Gets a value from the storage namespace in `globalThis`. If none, it returns `null`. */
    export function get<T>(key: string) {
        ensureNamespace();

        const value =
            // @ts-expect-error
            globalThis[GLOBALTHIS_NAMESPACE_KEY][key] ?? null;

        return value as T;
    }

    /** Sets a value in the storage namespace in `globalThis`. */
    export function set<T>(key: string, value: T) {
        ensureNamespace();

        // @ts-expect-error
        globalThis[GLOBALTHIS_NAMESPACE_KEY][key] =
            value;
    }

}

export default Store;