"use strict";
(self["webpackChunk_jupyterlite_p5_kernel_extension"] = self["webpackChunk_jupyterlite_p5_kernel_extension"] || []).push([["lib_index_js"],{

/***/ "./style/icons/p5js.png":
/*!******************************!*\
  !*** ./style/icons/p5js.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "49bd0f07faea7cc6679aff248db41a5a.png");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlite/kernel */ "webpack/sharing/consume/default/@jupyterlite/kernel");
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlite_p5_kernel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlite/p5-kernel */ "webpack/sharing/consume/default/@jupyterlite/p5-kernel/@jupyterlite/p5-kernel");
/* harmony import */ var _jupyterlite_p5_kernel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlite_p5_kernel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_icons_p5js_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/icons/p5js.png */ "./style/icons/p5js.png");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.




/**
 * The default CDN fallback for p5.js
 */
const P5_CDN_URL = 'https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.js';
/**
 * A plugin to register the p5.js kernel.
 */
const kernel = {
    id: '@jupyterlite/p5-kernel-extension:kernel',
    autoStart: true,
    requires: [_jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_1__.IKernelSpecs],
    activate: (app, kernelspecs) => {
        const url = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.PageConfig.getOption('p5Url') || P5_CDN_URL;
        const p5Url = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.URLExt.isLocal(url)
            ? _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.URLExt.join(window.location.origin, url)
            : url;
        kernelspecs.register({
            spec: {
                name: 'p5js',
                display_name: 'p5.js',
                language: 'javascript',
                argv: [],
                spec: {
                    argv: [],
                    env: {},
                    display_name: 'p5.js',
                    language: 'javascript',
                    interrupt_mode: 'message',
                    metadata: {}
                },
                resources: {
                    'logo-32x32': 'TODO',
                    'logo-64x64': _style_icons_p5js_png__WEBPACK_IMPORTED_MODULE_3__["default"]
                }
            },
            create: async (options) => {
                return new _jupyterlite_p5_kernel__WEBPACK_IMPORTED_MODULE_2__.P5Kernel({
                    ...options,
                    p5Url
                });
            }
        });
    }
};
const plugins = [kernel];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugins);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.77f81e60a5c93cf8bad2.js.map