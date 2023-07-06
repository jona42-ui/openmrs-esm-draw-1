(globalThis["webpackChunk_openmrs_esm_draw_app"] = globalThis["webpackChunk_openmrs_esm_draw_app"] || []).push([["src_index_ts"],{

/***/ "./src/config-schema.ts":
/*!******************************!*\
  !*** ./src/config-schema.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configSchema: () => (/* binding */ configSchema)
/* harmony export */ });
var configSchema = {};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawPage: () => (/* binding */ drawPage),
/* harmony export */   importTranslation: () => (/* binding */ importTranslation),
/* harmony export */   startupApp: () => (/* binding */ startupApp)
/* harmony export */ });
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-schema */ "./src/config-schema.ts");


var moduleName = "@openmrs/esm-draw-app";
var options = {
    featureName: "draw",
    moduleName: "@openmrs/esm-draw-app"
};
var importTranslation = __webpack_require__("./translations lazy .json$");
var drawPage = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.getAsyncLifecycle)(function() {
    return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-7ffacf"), __webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_-src_draw-page_component_tsx-webpack_sharing_consum-486f21")]).then(__webpack_require__.bind(__webpack_require__, /*! ./draw-page.component */ "./src/draw-page.component.tsx"));
}, options);
function startupApp() {
    (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_0__.defineConfigSchema)(moduleName, _config_schema__WEBPACK_IMPORTED_MODULE_1__.configSchema);
}


/***/ }),

/***/ "./translations lazy .json$":
/*!************************************************!*\
  !*** ./translations/ lazy nonrecursive .json$ ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.json": [
		"./translations/en.json",
		"translations_en_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./translations lazy .json$";
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=src_index_ts.js.map