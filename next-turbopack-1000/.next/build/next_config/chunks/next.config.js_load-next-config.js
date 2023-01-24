(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/next.config.js_load-next-config.js", {

"[project]/next.config.js/load-next-config.js (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>loadNextConfig
});
var __TURBOPACK__external__next$2f$dist$2f$server$2f$config__ = __turbopack_external_require__("next/dist/server/config", true);
var __TURBOPACK__external__next$2f$dist$2f$shared$2f$lib$2f$constants__ = __turbopack_external_require__("next/dist/shared/lib/constants", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const loadNextConfig = async ()=>{
    const nextConfig = await __TURBOPACK__external__next$2f$dist$2f$server$2f$config__["default"](__TURBOPACK__external__next$2f$dist$2f$shared$2f$lib$2f$constants__["PHASE_DEVELOPMENT_SERVER"], process.cwd());
    nextConfig.generateBuildId = await nextConfig.generateBuildId?.();
    nextConfig.headers = await nextConfig.headers?.();
    nextConfig.redirects = await nextConfig.redirects?.();
    nextConfig.rewrites = await nextConfig.rewrites?.();
    nextConfig.exportPathMap = nextConfig.exportPathMap && {};
    nextConfig.webpack = nextConfig.webpack && {};
    return nextConfig;
};
;

})()),
}]);


//# sourceMappingURL=next.config.js_load-next-config.js.map