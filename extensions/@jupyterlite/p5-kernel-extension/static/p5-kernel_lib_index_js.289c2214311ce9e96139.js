"use strict";
(self["webpackChunk_jupyterlite_p5_kernel_extension"] = self["webpackChunk_jupyterlite_p5_kernel_extension"] || []).push([["p5-kernel_lib_index_js"],{

/***/ "../p5-kernel/lib/index.js":
/*!*********************************!*\
  !*** ../p5-kernel/lib/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P5Kernel": () => (/* reexport safe */ _kernel__WEBPACK_IMPORTED_MODULE_0__.P5Kernel)
/* harmony export */ });
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernel */ "../p5-kernel/lib/kernel.js");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.



/***/ }),

/***/ "../p5-kernel/lib/kernel.js":
/*!**********************************!*\
  !*** ../p5-kernel/lib/kernel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P5Kernel": () => (/* binding */ P5Kernel)
/* harmony export */ });
/* harmony import */ var _jupyterlite_javascript_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlite/javascript-kernel */ "webpack/sharing/consume/default/@jupyterlite/javascript-kernel");
/* harmony import */ var _jupyterlite_javascript_kernel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlite_javascript_kernel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lumino_coreutils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * The mimetype for mime bundle results
 */
const MIME_TYPE = 'text/html-sandboxed';
/**
 * A kernel that executes code in an IFrame.
 */
class P5Kernel extends _jupyterlite_javascript_kernel__WEBPACK_IMPORTED_MODULE_0__.JavaScriptKernel {
    /**
     * Instantiate a new P5Kernel.
     *
     * @param options The instantiation options for a new P5Kernel.
     */
    constructor(options) {
        super(options);
        this._bootstrap = '';
        this._inputs = [];
        this._p5Ready = new _lumino_coreutils__WEBPACK_IMPORTED_MODULE_1__.PromiseDelegate();
        const { p5Url } = options;
        this._bootstrap = `
      import('${p5Url}').then(() => {
        // create the p5 global instance
        window.__globalP5 = new p5();
        return Promise.resolve();
      })
    `;
        // wait for the parent IFrame to be ready
        super.ready.then(() => {
            this._eval(this._bootstrap);
            this._p5Ready.resolve();
        });
    }
    /**
     * A promise that is fulfilled when the kernel is ready.
     */
    get ready() {
        return this._p5Ready.promise;
    }
    /**
     * Handle a kernel_info_request message
     */
    async kernelInfoRequest() {
        const content = {
            implementation: 'p5.js',
            implementation_version: '0.1.0',
            language_info: {
                codemirror_mode: {
                    name: 'javascript'
                },
                file_extension: '.js',
                mimetype: 'text/javascript',
                name: 'p5js',
                nbconvert_exporter: 'javascript',
                pygments_lexer: 'javascript',
                version: 'es2017'
            },
            protocol_version: '5.3',
            status: 'ok',
            banner: 'A p5.js kernel',
            help_links: [
                {
                    text: 'p5.js Kernel',
                    url: 'https://github.com/jupyterlite/p5-kernel'
                }
            ]
        };
        return content;
    }
    /**
     * Handle an `execute_request` message
     *
     * @param msg The parent message.
     */
    async executeRequest(content) {
        const { code } = content;
        if (code.startsWith('%')) {
            const res = await this._magics(code);
            if (res) {
                this.publishExecuteResult(res);
                return {
                    status: 'ok',
                    execution_count: this.executionCount,
                    user_expressions: {}
                };
            }
        }
        const res = super.executeRequest(content);
        this._inputs.push(code);
        return res;
    }
    /**
     * Handle magics coming from execute requests.
     *
     * @param code The code block to handle.
     */
    async _magics(code) {
        var _a, _b;
        if (code.startsWith('%show')) {
            const input = this._inputs.map(c => `window.eval(\`${c}\`);`).join('\n');
            const script = `
        ${this._bootstrap}.then(() => {
          ${input}
          window.__globalP5._start();
        })
      `;
            // add metadata
            const re = /^%show(?: (.+)\s+(.+))?\s*$/;
            const matches = code.match(re);
            const width = (_a = matches === null || matches === void 0 ? void 0 : matches[1]) !== null && _a !== void 0 ? _a : undefined;
            const height = (_b = matches === null || matches === void 0 ? void 0 : matches[2]) !== null && _b !== void 0 ? _b : undefined;
            return {
                execution_count: this.executionCount,
                data: {
                    [MIME_TYPE]: [
                        '<body style="overflow: hidden;">',
                        `<script>${script}</script>`,
                        '</body>'
                    ].join('\n')
                },
                metadata: {
                    [MIME_TYPE]: {
                        width,
                        height
                    }
                }
            };
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=p5-kernel_lib_index_js.289c2214311ce9e96139.js.map