(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/[embedded_modules]_@vercel_turbopack-next_internal_page-server-handler.tsx.js", {

"[project-with-next]/[embedded_modules]/@vercel/turbopack-next/internal/page-server-handler.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>startHandler
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f5b$embedded_modules$5d2f40$vercel$2f$turbopack$2d$next$2f$ipc$2f$index$2e$ts__ = __turbopack_import__("[project-with-next]/[embedded_modules]/@vercel/turbopack-next/ipc/index.ts (ecmascript)");
var __TURBOPACK__external__next$2f$dist$2f$server$2f$node$2d$polyfill$2d$fetch$2e$js__ = __turbopack_external_require__("next/dist/server/node-polyfill-fetch.js", true);
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f5b$embedded_modules$5d2f40$vercel$2f$turbopack$2d$next$2f$internal$2f$shims$2e$ts__ = __turbopack_import__("[project-with-next]/[embedded_modules]/@vercel/turbopack-next/internal/shims.ts (ecmascript)");
var __TURBOPACK__external__next$2f$dist$2f$server$2f$render__ = __turbopack_external_require__("next/dist/server/render", true);
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f5b$embedded_modules$5d2f40$vercel$2f$turbopack$2d$next$2f$internal$2f$http$2e$ts__ = __turbopack_import__("[project-with-next]/[embedded_modules]/@vercel/turbopack-next/internal/http.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const ipc = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f5b$embedded_modules$5d2f40$vercel$2f$turbopack$2d$next$2f$ipc$2f$index$2e$ts__["IPC"];
function startHandler({ isDataReq , App , Document , Component , otherExports , chunkGroup  }) {
    (async ()=>{
        while(true){
            const msg = await ipc.recv();
            let renderData;
            switch(msg.type){
                case "headers":
                    {
                        renderData = msg.data;
                        break;
                    }
                default:
                    {
                        console.error("unexpected message type", msg.type);
                        process.exit(1);
                    }
            }
            let res = await runOperation(renderData);
            if (isDataReq) {
                if (res === undefined) {
                    res = {};
                }
                ipc.send({
                    type: "result",
                    result: {
                        contentType: "application/json",
                        body: JSON.stringify(res)
                    }
                });
            } else {
                if (res == null) {
                    throw new Error("no render result returned");
                }
                if (typeof res !== "string") {
                    throw new Error("Non-string render result returned");
                }
                ipc.send({
                    type: "result",
                    result: {
                        contentType: undefined,
                        body: res
                    }
                });
            }
        }
    })().catch((err)=>{
        ipc.sendError(err);
    });
    async function runOperation(renderData) {
        const buildManifest = {
            pages: {
                "/_app": [],
                [renderData.path]: chunkGroup || []
            },
            devFiles: [],
            ampDevFiles: [],
            polyfillFiles: [],
            lowPriorityFiles: [],
            rootMainFiles: [],
            ampFirstPages: []
        };
        const comp = typeof Component === "undefined" || typeof Component === "object" && Object.keys(Component).length === 0 ? ()=>{} : Component;
        const renderOpts = {
            Component: comp,
            App,
            Document,
            pageConfig: {},
            buildManifest,
            reactLoadableManifest: createReactLoadableManifestProxy(),
            ComponentMod: {
                default: comp,
                ...otherExports
            },
            pathname: renderData.path,
            buildId: "development",
            isDataReq,
            runtimeConfig: {},
            assetPrefix: "",
            canonicalBase: "",
            previewProps: {
                previewModeId: "",
                previewModeEncryptionKey: "",
                previewModeSigningKey: ""
            },
            basePath: "",
            resolvedUrl: renderData.url,
            optimizeFonts: false,
            optimizeCss: false,
            nextScriptWorkers: false,
            images: {
                deviceSizes: [],
                imageSizes: [],
                loader: "default",
                path: "",
                loaderFile: "",
                domains: [],
                disableStaticImages: false,
                minimumCacheTTL: 0,
                formats: [],
                dangerouslyAllowSVG: false,
                contentSecurityPolicy: "",
                remotePatterns: [],
                unoptimized: true
            }
        };
        if ("getStaticPaths" in otherExports) {
            renderOpts.getStaticPaths = otherExports.getStaticPaths;
        }
        if ("getStaticProps" in otherExports) {
            renderOpts.getStaticProps = otherExports.getStaticProps;
        }
        if ("getServerSideProps" in otherExports) {
            renderOpts.getServerSideProps = otherExports.getServerSideProps;
        }
        const req = {
            url: renderData.url,
            method: "GET",
            headers: renderData.headers
        };
        const res = new __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f5b$embedded_modules$5d2f40$vercel$2f$turbopack$2d$next$2f$internal$2f$http$2e$ts__["ServerResponseShim"](req);
        const query = {
            ...renderData.query,
            ...renderData.params
        };
        const renderResult = await __TURBOPACK__external__next$2f$dist$2f$server$2f$render__["renderToHTML"](req, res, renderData.path, query, renderOpts);
        if (isDataReq) {
            const pageData = renderOpts.pageData;
            return pageData;
        }
        if (!renderResult) {
            return null;
        }
        const body = renderResult.toUnchunkedString();
        return body;
    }
}
function createReactLoadableManifestProxy() {
    return new Proxy({}, {
        get: (_target, prop, _receiver)=>{
            const { id , chunks  } = JSON.parse(prop);
            return {
                id,
                files: chunks.map((chunk)=>{
                    if (chunk.startsWith("_next/")) {
                        return chunk.slice("_next/".length);
                    }
                    return chunk;
                })
            };
        }
    });
}

})()),
"[project-with-next]/[embedded_modules]/@vercel/turbopack-next/internal/shims.ts (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

process.env.__NEXT_REACT_ROOT = "true";

}.call(this) }),
"[project-with-next]/[embedded_modules]/@vercel/turbopack-next/internal/http.ts (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "ServerResponseShim": ()=>ServerResponseShim
});
class ServerResponseShim {
    headersSent = false;
    #headers = new Map();
    constructor(req){
        this.req = req;
    }
    setHeader(name, value) {
        this.#headers.set(name.toLowerCase(), value);
        return this;
    }
    getHeader(name) {
        return this.#headers.get(name.toLowerCase());
    }
    getHeaderNames() {
        return Array.from(this.#headers.keys());
    }
    getHeaders() {
        return Object.fromEntries(this.#headers);
    }
    hasHeader(name) {
        return this.#headers.has(name.toLowerCase());
    }
    removeHeader(name) {
        this.#headers.delete(name.toLowerCase());
    }
    get statusCode() {
        throw new Error("statusCode is not implemented");
    }
    set statusCode(code) {
        throw new Error("set statusCode is not implemented");
    }
    get statusMessage() {
        throw new Error("statusMessage is not implemented");
    }
    set statusMessage(message) {
        throw new Error("set statusMessage is not implemented");
    }
    get socket() {
        throw new Error("socket is not implemented");
    }
    get sendDate() {
        throw new Error("sendDate is not implemented");
    }
    flushHeaders() {
        throw new Error("flushHeaders is not implemented");
    }
    end() {
        throw new Error("end is not implemented");
    }
    cork() {
        throw new Error("cork is not implemented");
    }
    uncork() {
        throw new Error("uncork is not implemented");
    }
    addTrailers() {
        throw new Error("addTrailers is not implemented");
    }
    setTimeout(_msecs, _callback) {
        throw new Error("setTimeout is not implemented");
    }
    get writableEnded() {
        throw new Error("writableEnded is not implemented");
    }
    get writableFinished() {
        throw new Error("writableFinished is not implemented");
    }
    write(_chunk, _encoding, _callback) {
        throw new Error("write is not implemented");
    }
    writeContinue() {
        throw new Error("writeContinue is not implemented");
    }
    writeHead(_statusCode, _statusMessage, _headers) {
        throw new Error("writeHead is not implemented");
    }
    writeProcessing() {
        throw new Error("writeProcessing is not implemented");
    }
}

})()),
}]);


//# sourceMappingURL=[embedded_modules]_@vercel_turbopack-next_internal_page-server-handler.tsx.js.map