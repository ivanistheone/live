"use strict";
(self["webpackChunkjupyter_wren_syntax"] = self["webpackChunkjupyter_wren_syntax"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/codemirror */ "webpack/sharing/consume/default/@jupyterlab/codemirror");
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__);

function registerWrenFileType(app) {
    app.docRegistry.addFileType({
        name: 'wren',
        displayName: 'wren',
        extensions: ['wren'],
        mimeTypes: ['text/x-wren']
    });
}
function defineWrenCodeMirrorMode(code_mirror_singleton) {
    code_mirror_singleton.defineSimpleMode('wren', {
        // The start state contains the rules that are initially used
        start: [
            // The regex matches the token, the token property contains the type
            { regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: 'string' },
            // You can match multiple tokens at once. Note that the captured
            // groups must span the whole string in this case
            {
                regex: /(function)(\s+)([a-z$][\w$]*)/,
                token: ['keyword', null, 'variable-2']
            },
            // Rules are matched in the order in which they appear, so there is
            // no ambiguity between this one and the one above
            {
                regex: /(?:function|as|break|class|construct|continue|else|false|for|foreign|if|import|in|is|null|return|static|super|this|true|var|while)\b/,
                token: 'keyword'
            },
            { regex: /true|false|null/, token: 'atom' },
            {
                regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
                token: 'number'
            },
            { regex: /\/\/.*/, token: 'comment' },
            { regex: /\/(?:[^\\]|\\.)*?\//, token: 'variable-3' },
            // A next property will cause the mode to move to a different state
            { regex: /\/\*/, token: 'comment', next: 'comment' },
            { regex: /[-+/*=<>!~.%?:]+/, token: 'operator' },
            // indent and dedent properties guide autoindentation
            { regex: /[{[(]/, indent: true },
            { regex: /[}]\)]/, dedent: true },
            { regex: /[a-z$][\w$]*/, token: 'variable' }
        ],
        // The multi-line comment state.
        comment: [
            { regex: /.*?\*\//, token: 'comment', next: 'start' },
            { regex: /.*/, token: 'comment' }
        ],
        // The meta property contains global information about the mode. It
        // can contain properties like lineComment, which are supported by
        // all modes, and also directives like dontIndentStates, which are
        // specific to simple modes.
        meta: {
            dontIndentStates: ['comment'],
            lineComment: '//'
        }
    });
    code_mirror_singleton.defineMIME('text/x-wren', 'wren');
    code_mirror_singleton.modeInfo.push({
        ext: ['wren'],
        mime: 'text/x-wren',
        mode: 'wren',
        name: 'wren'
    });
}
/**
 * Initialization data for the jupyter-wren-syntax extension.
 */
const plugin = {
    id: 'jupyter-wren-syntax:plugin',
    autoStart: true,
    requires: [_jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__.ICodeMirror],
    activate: (app, codeMirror) => {
        console.log('JupyterLab extension jupyter-wren-syntax is activated!');
        registerWrenFileType(app);
        defineWrenCodeMirrorMode(codeMirror.CodeMirror);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.257e7af93ee618f7d9c5.js.map