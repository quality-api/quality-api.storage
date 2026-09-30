export function nativeSearchParamsToObject(url: string) {
    const nsp = new URL(url).searchParams;

    const result: Record<string, string | string[]> = {};

    for (const k of nsp.keys()) {
        const v = nsp.getAll(k);

        result[k] =
            v.length === 1
                ? v[0]
                : v;
    }

    return result;
}

export function nativeHeadersToObject(headers: Headers) {
    return Object.fromEntries(Array.from(headers.entries()).map(([k, v]) => [k.toLowerCase(), v]));
}