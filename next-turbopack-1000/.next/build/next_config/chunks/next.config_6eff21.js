(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/next.config_6eff21.js", {

"[project]/next.config.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
};
module.exports = nextConfig;

}.call(this) }),
"[turbopack-node]/ipc/evaluate.ts/evaluate.js (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

var __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$ipc$2f$evaluate$2e$ts__ = __turbopack_import__("[turbopack-node]/ipc/evaluate.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
__TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$ipc$2f$evaluate$2e$ts__["run"]((...args)=>__turbopack_require__("[project]/next.config.js/load-next-config.js (ecmascript)").default(...args));

})()),
}, ({ loadedChunks, instantiateRuntimeModule }) => {
    if(!(true && loadedChunks.has("chunks/next.config.js_load-next-config.js") && loadedChunks.has("chunks/[turbopack-node]_ipc_evaluate.ts.js") && loadedChunks.has("chunks/[turbopack-node]_compiled_stacktrace-parser_index.js"))) return true;
    instantiateRuntimeModule("[project]/next.config.js (ecmascript)");
instantiateRuntimeModule("[turbopack-node]/ipc/evaluate.ts/evaluate.js (ecmascript)");
}]);
(() => {
if (!Array.isArray(globalThis.TURBOPACK)) {
    return;
}
/** @typedef {import('../types/backend').RuntimeBackend} RuntimeBackend */

/** @type {RuntimeBackend} */
const BACKEND = {
  loadChunk(chunkPath, from) {
    return new Promise((resolve, reject) => {
      const fromPath = getFirstModuleChunk(from);
      if (fromPath == null) {
        reject(
          `Module ${from} that requested chunk ${chunkPath} has been removed`
        );
        return;
      }

      // We'll only mark the chunk as loaded once the script has been executed,
      // which happens in `registerChunk`. Hence the absence of `resolve()`.
      const path = require("path");
      const resolved = require.resolve(
        "./" + path.relative(path.dirname(fromPath), chunkPath)
      );
      delete require.cache[resolved];
      require(resolved);
    });
  },

  restart: () => {
    throw new Error("restart not implemented for the Node.js backend");
  },
};
/* eslint-disable @next/next/no-assign-module-variable */

/** @typedef {import('../types').ChunkRegistration} ChunkRegistration */
/** @typedef {import('../types').ModuleFactory} ModuleFactory */

/** @typedef {import('../types').ChunkPath} ChunkPath */
/** @typedef {import('../types').ModuleId} ModuleId */
/** @typedef {import('../types').GetFirstModuleChunk} GetFirstModuleChunk */

/** @typedef {import('../types').Module} Module */
/** @typedef {import('../types').Exports} Exports */
/** @typedef {import('../types').EsmInteropNamespace} EsmInteropNamespace */
/** @typedef {import('../types').Runnable} Runnable */

/** @typedef {import('../types').Runtime} Runtime */

/** @typedef {import('../types').RefreshHelpers} RefreshHelpers */
/** @typedef {import('../types/hot').Hot} Hot */
/** @typedef {import('../types/hot').HotData} HotData */
/** @typedef {import('../types/hot').AcceptCallback} AcceptCallback */
/** @typedef {import('../types/hot').AcceptErrorHandler} AcceptErrorHandler */
/** @typedef {import('../types/hot').HotState} HotState */
/** @typedef {import('../types/protocol').EcmascriptChunkUpdate} EcmascriptChunkUpdate */
/** @typedef {import('../types/protocol').HmrUpdateEntry} HmrUpdateEntry */

/** @typedef {import('../types/runtime').Loader} Loader */
/** @typedef {import('../types/runtime').ModuleEffect} ModuleEffect */

/** @type {Array<Runnable>} */
let runnable = [];
/** @type {Object.<ModuleId, ModuleFactory>} */
const moduleFactories = { __proto__: null };
/** @type {Object.<ModuleId, Module>} */
const moduleCache = { __proto__: null };
/**
 * Contains the IDs of all chunks that have been loaded.
 *
 * @type {Set<ChunkPath>}
 */
const loadedChunks = new Set();
/**
 * Maps a chunk ID to the chunk's loader if the chunk is currently being loaded.
 *
 * @type {Map<ChunkPath, Loader>}
 */
const chunkLoaders = new Map();
/**
 * Maps module IDs to persisted data between executions of their hot module
 * implementation (`hot.data`).
 *
 * @type {Map<ModuleId, HotData>}
 */
const moduleHotData = new Map();
/**
 * Maps module instances to their hot module state.
 *
 * @type {Map<Module, HotState>}
 */
const moduleHotState = new Map();
/**
 * Module IDs that are instantiated as part of the runtime of a chunk.
 *
 * @type {Set<ModuleId>}
 */
const runtimeModules = new Set();
/**
 * Map from module ID to the chunks that contain this module.
 *
 * In HMR, we need to keep track of which modules are contained in which so
 * chunks. This is so we don't eagerly dispose of a module when it is removed
 * from chunk A, but still exists in chunk B.
 *
 * @type {Map<ModuleId, Set<ChunkPath>>}
 */
const moduleChunksMap = new Map();
const hOP = Object.prototype.hasOwnProperty;
const _process =
  typeof process !== "undefined"
    ? process
    : {
        env: {},
        // Some modules rely on `process.browser` to execute browser-specific code.
        // NOTE: `process.browser` is specific to Webpack.
        browser: true,
      };

const toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag;

/**
 * @param {any} obj
 * @param {PropertyKey} name
 * @param {PropertyDescriptor & ThisType<any>} options
 */
function defineProp(obj, name, options) {
  if (!hOP.call(obj, name)) Object.defineProperty(obj, name, options);
}

/**
 * Adds the getters to the exports object
 *
 * @param {Exports} exports
 * @param {Record<string, () => any>} getters
 */
function esm(exports, getters) {
  defineProp(exports, "__esModule", { value: true });
  if (toStringTag) defineProp(exports, toStringTag, { value: "Module" });
  for (const key in getters) {
    defineProp(exports, key, { get: getters[key], enumerable: true });
  }
}

/**
 * Adds the getters to the exports object
 *
 * @param {Exports} exports
 * @param {Record<string, any>} props
 */
function cjs(exports, props) {
  for (const key in props) {
    defineProp(exports, key, { get: () => props[key], enumerable: true });
  }
}

/**
 * @param {Module} module
 * @param {any} value
 */
function exportValue(module, value) {
  module.exports = value;
}

/**
 * @param {Record<string, any>} obj
 * @param {string} key
 */
function createGetter(obj, key) {
  return () => obj[key];
}

/**
 * @param {Exports} raw
 * @param {EsmInteropNamespace} ns
 * @param {boolean} [allowExportDefault]
 */
function interopEsm(raw, ns, allowExportDefault) {
  /** @type {Object.<string, () => any>} */
  const getters = { __proto__: null };
  for (const key in raw) {
    getters[key] = createGetter(raw, key);
  }
  if (!(allowExportDefault && "default" in getters)) {
    getters["default"] = () => raw;
  }
  esm(ns, getters);
}

/**
 * @param {Module} sourceModule
 * @param {ModuleId} id
 * @param {boolean} allowExportDefault
 * @returns {EsmInteropNamespace}
 */
function esmImport(sourceModule, id, allowExportDefault) {
  const module = getOrInstantiateModuleFromParent(id, sourceModule);
  const raw = module.exports;
  if (raw.__esModule) return raw;
  if (module.interopNamespace) return module.interopNamespace;
  const ns = (module.interopNamespace = {});
  interopEsm(raw, ns, allowExportDefault);
  return ns;
}

/**
 * @param {Module} sourceModule
 * @param {ModuleId} id
 * @returns {Exports}
 */
function commonJsRequire(sourceModule, id) {
  return getOrInstantiateModuleFromParent(id, sourceModule).exports;
}

function externalRequire(id, esm) {
  let raw;
  try {
    raw = require(id);
  } catch (err) {
    // TODO(alexkirsz) This can happen when a client-side module tries to load
    // an external module we don't provide a shim for (e.g. querystring, url).
    // For now, we fail semi-silently, but in the future this should be a
    // compilation error.
    throw new Error(`Failed to load external module ${id}: ${err}`);
  }
  if (!esm || raw.__esModule) {
    return raw;
  }
  const ns = {};
  interopEsm(raw, ns, true);
  return ns;
}

/**
 * @param {ModuleId} from
 * @param {string} chunkPath
 * @returns {Promise<any> | undefined}
 */
function loadChunk(from, chunkPath) {
  if (loadedChunks.has(chunkPath)) {
    return Promise.resolve();
  }

  const chunkLoader = getOrCreateChunkLoader(chunkPath, from);

  return chunkLoader.promise;
}

/**
 * @param {string} chunkPath
 * @param {ModuleId} from
 * @returns {Loader}
 */
function getOrCreateChunkLoader(chunkPath, from) {
  let chunkLoader = chunkLoaders.get(chunkPath);
  if (chunkLoader) {
    return chunkLoader;
  }

  let resolve;
  let reject;
  const promise = new Promise((innerResolve, innerReject) => {
    resolve = innerResolve;
    reject = innerReject;
  });

  const onError = (error) => {
    chunkLoaders.delete(chunkPath);
    reject(
      new Error(
        `Failed to load chunk from ${chunkPath}${error ? `: ${error}` : ""}`
      )
    );
  };

  const onLoad = () => {
    loadedChunks.add(chunkPath);
    chunkLoaders.delete(chunkPath);
    resolve();
  };

  chunkLoader = {
    promise,
    onLoad,
  };
  chunkLoaders.set(chunkPath, chunkLoader);

  BACKEND.loadChunk(chunkPath, from).then(onLoad, onError);

  return chunkLoader;
}

/**
 * @enum {number}
 */
const SourceType = {
  /**
   * The module was instantiated because it was included in an evaluated chunk's
   * runtime.
   */
  Runtime: 0,
  /**
   * The module was instantiated because a parent module imported it.
   */
  Parent: 1,
  /**
   * The module was instantiated because it was included in a chunk's hot module
   * update.
   */
  Update: 2,
};

/**
 *
 * @param {ModuleId} id
 * @param {SourceType} sourceType
 * @param {ModuleId} [sourceId]
 * @returns {Module}
 */
function instantiateModule(id, sourceType, sourceId) {
  const moduleFactory = moduleFactories[id];
  if (typeof moduleFactory !== "function") {
    // This can happen if modules incorrectly handle HMR disposes/updates,
    // e.g. when they keep a `setTimeout` around which still executes old code
    // and contains e.g. a `require("something")` call.
    let instantiationReason;
    switch (sourceType) {
      case SourceType.Runtime:
        instantiationReason = "as a runtime entry";
        break;
      case SourceType.Parent:
        instantiationReason = `because it was required from module ${sourceId}`;
        break;
      case SourceType.Update:
        instantiationReason = "because of an HMR update";
        break;
    }
    throw new Error(
      `Module ${id} was instantiated ${instantiationReason}, but the module factory is not available. It might have been deleted in an HMR update.`
    );
  }

  const hotData = moduleHotData.get(id);
  const { hot, hotState } = createModuleHot(hotData);

  /** @type {Module} */
  const module = {
    exports: {},
    loaded: false,
    id,
    parents: [],
    children: [],
    interopNamespace: undefined,
    hot,
  };
  moduleCache[id] = module;
  moduleHotState.set(module, hotState);

  if (sourceType === SourceType.Runtime) {
    runtimeModules.add(id);
  } else if (sourceType === SourceType.Parent) {
    module.parents.push(sourceId);

    // No need to add this module as a child of the parent module here, this
    // has already been taken care of in `getOrInstantiateModuleFromParent`.
  }

  runModuleExecutionHooks(module, () => {
    moduleFactory.call(module.exports, {
      e: module.exports,
      r: commonJsRequire.bind(null, module),
      x: externalRequire,
      i: esmImport.bind(null, module),
      s: esm.bind(null, module.exports),
      j: cjs.bind(null, module.exports),
      v: exportValue.bind(null, module),
      m: module,
      c: moduleCache,
      l: loadChunk.bind(null, id),
      p: _process,
      g: globalThis,
      __dirname: module.id.replace(/(^|\/)[\/]+$/, ""),
    });
  });

  module.loaded = true;
  if (module.interopNamespace) {
    // in case of a circular dependency: cjs1 -> esm2 -> cjs1
    interopEsm(module.exports, module.interopNamespace);
  }

  return module;
}

/**
 * NOTE(alexkirsz) Webpack has an "module execution" interception hook that
 * Next.js' React Refresh runtime hooks into to add module context to the
 * refresh registry.
 *
 * @param {Module} module
 * @param {() => void} executeModule
 */
function runModuleExecutionHooks(module, executeModule) {
  const cleanupReactRefreshIntercept =
    typeof globalThis.$RefreshInterceptModuleExecution$ === "function"
      ? globalThis.$RefreshInterceptModuleExecution$(module.id)
      : () => {};

  executeModule();

  if ("$RefreshHelpers$" in globalThis) {
    // This pattern can also be used to register the exports of
    // a module with the React Refresh runtime.
    registerExportsAndSetupBoundaryForReactRefresh(
      module,
      globalThis.$RefreshHelpers$
    );
  }

  cleanupReactRefreshIntercept();
}

/**
 * Retrieves a module from the cache, or instantiate it if it is not cached.
 *
 * @param {ModuleId} id
 * @param {Module} sourceModule
 * @returns {Module}
 */
function getOrInstantiateModuleFromParent(id, sourceModule) {
  if (!sourceModule.hot.active) {
    console.warn(
      `Unexpected import of module ${id} from module ${sourceModule.id}, which was deleted by an HMR update`
    );
  }

  const module = moduleCache[id];

  if (sourceModule.children.indexOf(id) === -1) {
    sourceModule.children.push(id);
  }

  if (module) {
    if (module.parents.indexOf(sourceModule.id) === -1) {
      module.parents.push(sourceModule.id);
    }

    return module;
  }

  return instantiateModule(id, SourceType.Parent, sourceModule.id);
}

/**
 * This is adapted from https://github.com/vercel/next.js/blob/3466862d9dc9c8bb3131712134d38757b918d1c0/packages/react-refresh-utils/internal/ReactRefreshModule.runtime.ts
 *
 * @param {Module} module
 * @param {RefreshHelpers} helpers
 */
function registerExportsAndSetupBoundaryForReactRefresh(module, helpers) {
  const currentExports = module.exports;
  const prevExports = module.hot.data.prevExports ?? null;

  helpers.registerExportsForReactRefresh(currentExports, module.id);

  // A module can be accepted automatically based on its exports, e.g. when
  // it is a Refresh Boundary.
  if (helpers.isReactRefreshBoundary(currentExports)) {
    // Save the previous exports on update so we can compare the boundary
    // signatures.
    module.hot.dispose((data) => {
      data.prevExports = currentExports;
    });
    // Unconditionally accept an update to this module, we'll check if it's
    // still a Refresh Boundary later.
    module.hot.accept();

    // This field is set when the previous version of this module was a
    // Refresh Boundary, letting us know we need to check for invalidation or
    // enqueue an update.
    if (prevExports !== null) {
      // A boundary can become ineligible if its exports are incompatible
      // with the previous exports.
      //
      // For example, if you add/remove/change exports, we'll want to
      // re-execute the importing modules, and force those components to
      // re-render. Similarly, if you convert a class component to a
      // function, we want to invalidate the boundary.
      if (
        helpers.shouldInvalidateReactRefreshBoundary(
          prevExports,
          currentExports
        )
      ) {
        module.hot.invalidate();
      } else {
        helpers.scheduleUpdate();
      }
    }
  } else {
    // Since we just executed the code for the module, it's possible that the
    // new exports made it ineligible for being a boundary.
    // We only care about the case when we were _previously_ a boundary,
    // because we already accepted this update (accidental side effect).
    const isNoLongerABoundary = prevExports !== null;
    if (isNoLongerABoundary) {
      module.hot.invalidate();
    }
  }
}

/**
 * @param {ModuleId[]} dependencyChain
 * @returns {string}
 */
function formatDependencyChain(dependencyChain) {
  return `Dependency chain: ${dependencyChain.join(" -> ")}`;
}

/**
 * @param {HmrUpdateEntry} factory
 * @returns {ModuleFactory}
 * @private
 */
function _eval({ code, url, map }) {
  code += `\n\n//# sourceURL=${location.origin}${url}`;
  if (map) code += `\n//# sourceMappingURL=${map}`;
  return eval(code);
}

/**
 * @param {EcmascriptChunkUpdate} update
 * @returns {{outdatedModules: Set<any>, newModuleFactories: Map<any, any>}}
 */
function computeOutdatedModules(update) {
  const outdatedModules = new Set();
  const newModuleFactories = new Map();

  for (const [moduleId, factory] of Object.entries(update.added)) {
    newModuleFactories.set(moduleId, _eval(factory));
  }

  for (const [moduleId, factory] of Object.entries(update.modified)) {
    const effect = getAffectedModuleEffects(moduleId);

    switch (effect.type) {
      case "unaccepted":
        throw new Error(
          `cannot apply update: unaccepted module. ${formatDependencyChain(
            effect.dependencyChain
          )}.`
        );
      case "self-declined":
        throw new Error(
          `cannot apply update: self-declined module. ${formatDependencyChain(
            effect.dependencyChain
          )}.`
        );
      case "accepted":
        newModuleFactories.set(moduleId, _eval(factory));
        for (const outdatedModuleId of effect.outdatedModules) {
          outdatedModules.add(outdatedModuleId);
        }
        break;
      // TODO(alexkirsz) Dependencies: handle dependencies effects.
    }
  }

  return { outdatedModules, newModuleFactories };
}

/**
 * @param {Iterable<ModuleId>} outdatedModules
 * @returns {{ moduleId: ModuleId, errorHandler: true | Function }[]}
 */
function computeOutdatedSelfAcceptedModules(outdatedModules) {
  const outdatedSelfAcceptedModules = [];
  for (const moduleId of outdatedModules) {
    const module = moduleCache[moduleId];
    const hotState = moduleHotState.get(module);
    if (module && hotState.selfAccepted && !hotState.selfInvalidated) {
      outdatedSelfAcceptedModules.push({
        moduleId,
        errorHandler: hotState.selfAccepted,
      });
    }
  }
  return outdatedSelfAcceptedModules;
}

/**
 * @param {ChunkPath} chunkPath
 * @param {Iterable<ModuleId>} outdatedModules
 * @param {Iterable<ModuleId>} deletedModules
 */
function disposePhase(chunkPath, outdatedModules, deletedModules) {
  for (const moduleId of outdatedModules) {
    const module = moduleCache[moduleId];
    if (!module) {
      continue;
    }

    const data = disposeModule(module);

    moduleHotData.set(moduleId, data);
  }

  for (const moduleId of deletedModules) {
    const module = moduleCache[moduleId];
    if (!module) {
      continue;
    }

    const noRemainingChunks = removeModuleFromChunk(moduleId, chunkPath);

    if (noRemainingChunks) {
      disposeModule(module);

      moduleHotData.delete(moduleId);
    }
  }

  // TODO(alexkirsz) Dependencies: remove outdated dependency from module
  // children.
}

/**
 * Disposes of an instance of a module.
 *
 * Returns the persistent hot data that should be kept for the next module
 * instance.
 *
 * @param {Module} module
 * @returns {{}}
 */
function disposeModule(module) {
  const hotState = moduleHotState.get(module);
  const data = {};

  // Run the `hot.dispose` handler, if any, passing in the persistent
  // `hot.data` object.
  for (const disposeHandler of hotState.disposeHandlers) {
    disposeHandler(data);
  }

  // This used to warn in `getOrInstantiateModuleFromParent` when a disposed
  // module is still importing other modules.
  module.hot.active = false;

  delete moduleCache[module.id];
  moduleHotState.delete(module);

  // TODO(alexkirsz) Dependencies: delete the module from outdated deps.

  // Remove the disposed module from its children's parents list.
  // It will be added back once the module re-instantiates and imports its
  // children again.
  for (const childId of module.children) {
    const child = moduleCache[childId];
    if (!child) {
      continue;
    }

    const idx = child.parents.indexOf(module.id);
    if (idx >= 0) {
      child.parents.splice(idx, 1);
    }
  }

  return data;
}

/**
 *
 * @param {ChunkPath} chunkPath
 * @param {{ moduleId: ModuleId, errorHandler: true | Function }[]} outdatedSelfAcceptedModules
 * @param {Map<string, ModuleFactory>} newModuleFactories
 */
function applyPhase(
  chunkPath,
  outdatedSelfAcceptedModules,
  newModuleFactories
) {
  // Update module factories.
  for (const [moduleId, factory] of newModuleFactories.entries()) {
    moduleFactories[moduleId] = factory;
    addModuleToChunk(moduleId, chunkPath);
  }

  // TODO(alexkirsz) Run new runtime entries here.

  // TODO(alexkirsz) Dependencies: call accept handlers for outdated deps.

  // Re-instantiate all outdated self-accepted modules.
  for (const { moduleId, errorHandler } of outdatedSelfAcceptedModules) {
    try {
      instantiateModule(moduleId, SourceType.Update);
    } catch (err) {
      if (typeof errorHandler === "function") {
        try {
          errorHandler(err, { moduleId, module: moduleCache[moduleId] });
        } catch (_) {
          // Ignore error.
        }
      }
    }
  }
}

/**
 *
 * @param {ChunkPath} chunkPath
 * @param {EcmascriptChunkUpdate} update
 */
function applyUpdate(chunkPath, update) {
  const { outdatedModules, newModuleFactories } =
    computeOutdatedModules(update);

  const deletedModules = new Set(update.deleted);

  const outdatedSelfAcceptedModules =
    computeOutdatedSelfAcceptedModules(outdatedModules);

  disposePhase(chunkPath, outdatedModules, deletedModules);
  applyPhase(chunkPath, outdatedSelfAcceptedModules, newModuleFactories);
}

/**
 *
 * @param {ModuleId} moduleId
 * @returns {ModuleEffect}
 */
function getAffectedModuleEffects(moduleId) {
  const outdatedModules = new Set();

  /** @typedef {{moduleId?: ModuleId, dependencyChain: ModuleId[]}} QueueItem */

  /** @type {QueueItem[]} */
  const queue = [
    {
      moduleId,
      dependencyChain: [],
    },
  ];

  while (queue.length > 0) {
    const { moduleId, dependencyChain } =
      /** @type {QueueItem} */ queue.shift();
    outdatedModules.add(moduleId);

    // We've arrived at the runtime of the chunk, which means that nothing
    // else above can accept this update.
    if (moduleId === undefined) {
      return {
        type: "unaccepted",
        dependencyChain,
      };
    }

    const module = moduleCache[moduleId];
    const hotState = moduleHotState.get(module);

    if (
      // The module is not in the cache. Since this is a "modified" update,
      // it means that the module was never instantiated before.
      !module || // The module accepted itself without invalidating globalThis.
      // TODO is that right?
      (hotState.selfAccepted && !hotState.selfInvalidated)
    ) {
      continue;
    }

    if (hotState.selfDeclined) {
      return {
        type: "self-declined",
        dependencyChain,
        moduleId,
      };
    }

    if (runtimeModules.has(moduleId)) {
      queue.push({
        moduleId: undefined,
        dependencyChain: [...dependencyChain, moduleId],
      });
      continue;
    }

    for (const parentId of module.parents) {
      const parent = moduleCache[parentId];

      if (!parent) {
        // TODO(alexkirsz) Is this even possible?
        continue;
      }

      // TODO(alexkirsz) Dependencies: check accepted and declined
      // dependencies here.

      queue.push({
        moduleId: parentId,
        dependencyChain: [...dependencyChain, moduleId],
      });
    }
  }

  return {
    type: "accepted",
    moduleId,
    outdatedModules,
  };
}

/**
 * @param {ChunkPath} chunkPath
 * @param {import('../types/protocol').ServerMessage} update
 */
function handleApply(chunkPath, update) {
  switch (update.type) {
    case "partial":
      applyUpdate(chunkPath, update.instruction);
      break;
    case "restart":
      BACKEND.restart();
      break;
    default:
      throw new Error(`Unknown update type: ${update.type}`);
  }
}

/**
 * @param {HotData} [hotData]
 * @returns {{hotState: HotState, hot: Hot}}
 */
function createModuleHot(hotData) {
  /** @type {HotState} */
  const hotState = {
    selfAccepted: false,
    selfDeclined: false,
    selfInvalidated: false,
    disposeHandlers: [],
  };

  /**
   * TODO(alexkirsz) Support full (dep, callback, errorHandler) form.
   *
   * @param {string | string[] | AcceptErrorHandler} [dep]
   * @param {AcceptCallback} [_callback]
   * @param {AcceptErrorHandler} [_errorHandler]
   */
  function accept(dep, _callback, _errorHandler) {
    if (dep === undefined) {
      hotState.selfAccepted = true;
    } else if (typeof dep === "function") {
      hotState.selfAccepted = dep;
    } else {
      throw new Error("unsupported `accept` signature");
    }
  }

  /** @type {Hot} */
  const hot = {
    // TODO(alexkirsz) This is not defined in the HMR API. It was used to
    // decide whether to warn whenever an HMR-disposed module required other
    // modules. We might want to remove it.
    active: true,

    data: hotData ?? {},

    accept: accept,

    decline: (dep) => {
      if (dep === undefined) {
        hotState.selfDeclined = true;
      } else {
        throw new Error("unsupported `decline` signature");
      }
    },

    dispose: (callback) => {
      hotState.disposeHandlers.push(callback);
    },

    addDisposeHandler: (callback) => {
      hotState.disposeHandlers.push(callback);
    },

    removeDisposeHandler: (callback) => {
      const idx = hotState.disposeHandlers.indexOf(callback);
      if (idx >= 0) {
        hotState.disposeHandlers.splice(idx, 1);
      }
    },

    invalidate: () => {
      hotState.selfInvalidated = true;
      // TODO(alexkirsz) The original HMR code had management-related code
      // here.
    },

    // NOTE(alexkirsz) This is part of the management API, which we don't
    // implement, but the Next.js React Refresh runtime uses this to decide
    // whether to schedule an update.
    status: () => "idle",

    // NOTE(alexkirsz) Since we always return "idle" for now, these are no-ops.
    addStatusHandler: (_handler) => {},
    removeStatusHandler: (_handler) => {},
  };

  return { hot, hotState };
}

/**
 * Adds a module to a chunk.
 *
 * @param {ModuleId} moduleId
 * @param {ChunkPath} chunkPath
 */
function addModuleToChunk(moduleId, chunkPath) {
  let moduleChunks = moduleChunksMap.get(moduleId);
  if (!moduleChunks) {
    moduleChunks = new Set([chunkPath]);
    moduleChunksMap.set(moduleId, moduleChunks);
  } else {
    moduleChunks.add(chunkPath);
  }
}

/**
 * Returns the first chunk that included a module.
 *
 * @type {GetFirstModuleChunk}
 */
function getFirstModuleChunk(moduleId) {
  const moduleChunkPaths = moduleChunksMap.get(moduleId);
  if (moduleChunkPaths == null) {
    return null;
  }

  return moduleChunkPaths.values().next().value;
}

/**
 * Removes a module from a chunk. Returns true there are no remaining chunks
 * including this module.
 *
 * @param {ModuleId} moduleId
 * @param {ChunkPath} chunkPath
 * @returns {boolean}
 */
function removeModuleFromChunk(moduleId, chunkPath) {
  const moduleChunks = moduleChunksMap.get(moduleId);
  moduleChunks.delete(chunkPath);

  if (moduleChunks.size > 0) {
    return false;
  }

  moduleChunksMap.delete(moduleId);
  return true;
}

/**
 * Instantiates a runtime module.
 */
/**
 *
 * @param {ModuleId} moduleId
 * @returns {Module}
 */
function instantiateRuntimeModule(moduleId) {
  return instantiateModule(moduleId, SourceType.Runtime);
}

/**
 * Subscribes to chunk updates from the update server and applies them.
 *
 * @param {ChunkPath} chunkPath
 */
function subscribeToChunkUpdates(chunkPath) {
  // This adds a chunk update listener once the handler code has been loaded
  globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS.push([
    chunkPath,
    handleApply.bind(null, chunkPath),
  ]);
}

function markChunkAsLoaded(chunkPath) {
  const chunkLoader = chunkLoaders.get(chunkPath);
  if (!chunkLoader) {
    loadedChunks.add(chunkPath);

    // This happens for all initial chunks that are loaded directly from
    // the HTML.
    return;
  }

  // Only chunks that are loaded via `loadChunk` will have a loader.
  chunkLoader.onLoad();
}

/** @type {Runtime} */
const runtime = {
  loadedChunks,
  modules: moduleFactories,
  cache: moduleCache,
  instantiateRuntimeModule,
};

/**
 * @param {ChunkRegistration} chunkRegistration
 */
function registerChunk([chunkPath, chunkModules, ...run]) {
  markChunkAsLoaded(chunkPath);
  subscribeToChunkUpdates(chunkPath);
  for (const [moduleId, moduleFactory] of Object.entries(chunkModules)) {
    if (!moduleFactories[moduleId]) {
      moduleFactories[moduleId] = moduleFactory;
    }
    addModuleToChunk(moduleId, chunkPath);
  }
  runnable.push(...run);
  runnable = runnable.filter((r) => r(runtime));
}

globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS =
  globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS || [];

globalThis.TURBOPACK.forEach(registerChunk);
globalThis.TURBOPACK = {
  push: registerChunk,
};
})();


//# sourceMappingURL=next.config_6eff21.js.map