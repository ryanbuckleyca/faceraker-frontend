webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_apinrise_Code_ryanbuckleyca_louwer_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_DisplayContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/DisplayContext */ \"./components/DisplayContext.js\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/apinrise/Code/ryanbuckleyca/louwer/frontend/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_apinrise_Code_ryanbuckleyca_louwer_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Louwer(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      dimensions = _useState[0],\n      setDimensions = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var handleResize = function handleResize() {\n      var _window = window,\n          width = _window.innerWidth,\n          height = _window.innerHeight;\n      return {\n        width: width,\n        height: height\n      };\n    };\n\n    setDimensions(handleResize);\n    window.addEventListener('resize', dimensions);\n    return window.removeEventListener('resize', dimensions);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_DisplayContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n    value: dimensions,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Louwer, \"x7bPLMh0MmaYrH3+3oh1pjg9yg0=\");\n\n_c = Louwer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Louwer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Louwer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkxvdXdlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwiZGltZW5zaW9ucyIsInNldERpbWVuc2lvbnMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBMEM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUFBLGtCQUNGQyxzREFBUSxFQUROO0FBQUEsTUFDaENDLFVBRGdDO0FBQUEsTUFDcEJDLGFBRG9COztBQUd4Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBLG9CQUMwQkMsTUFEMUI7QUFBQSxVQUNMQyxLQURLLFdBQ2pCQyxVQURpQjtBQUFBLFVBQ2VDLE1BRGYsV0FDRUMsV0FERjtBQUV6QixhQUFRO0FBQUVILGFBQUssRUFBTEEsS0FBRjtBQUFTRSxjQUFNLEVBQU5BO0FBQVQsT0FBUjtBQUNELEtBSEQ7O0FBSUFOLGlCQUFhLENBQUNFLFlBQUQsQ0FBYjtBQUNBQyxVQUFNLENBQUNLLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDVCxVQUFsQztBQUVBLFdBQU9JLE1BQU0sQ0FBQ00sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNWLFVBQXJDLENBQVA7QUFDRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBWUEsc0JBQ0EscUVBQUMsaUVBQUQsQ0FBZ0IsUUFBaEI7QUFBeUIsU0FBSyxFQUFFQSxVQUFoQztBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQUtEOztHQXBCUUYsTTs7S0FBQUEsTTtBQXNCTUEscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERpc3BsYXlDb250ZXh0IGZyb20gJ2NvbXBvbmVudHMvRGlzcGxheUNvbnRleHQnXG5pbXBvcnQgJ3N0eWxlcy9nbG9iYWxzLmNzcydcblxuZnVuY3Rpb24gTG91d2VyKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgeyBcbiAgY29uc3QgWyBkaW1lbnNpb25zLCBzZXREaW1lbnNpb25zIF0gPSB1c2VTdGF0ZSgpICBcblxuICB1c2VFZmZlY3QoKCkgPT4geyBcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGlubmVyV2lkdGg6IHdpZHRoLCBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB3aW5kb3dcbiAgICAgIHJldHVybiAoeyB3aWR0aCwgaGVpZ2h0IH0pXG4gICAgfVxuICAgIHNldERpbWVuc2lvbnMoaGFuZGxlUmVzaXplKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkaW1lbnNpb25zKVxuXG4gICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkaW1lbnNpb25zKVxuICB9LCBbXSlcbiAgXG4gICBcbiAgcmV0dXJuIChcbiAgPERpc3BsYXlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaW1lbnNpb25zfT5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDwvRGlzcGxheUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG91d2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})