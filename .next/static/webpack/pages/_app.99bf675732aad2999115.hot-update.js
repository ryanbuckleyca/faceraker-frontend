webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_apinrise_Code_ryanbuckleyca_louwer_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_DisplayContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/DisplayContext */ \"./components/DisplayContext.js\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/apinrise/Code/ryanbuckleyca/louwer/frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_apinrise_Code_ryanbuckleyca_louwer_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Louwer(_ref) {\n  var _s = $RefreshSig$();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var getWindow = function getWindow() {\n    _s();\n\n    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n        dimensions = _useState[0],\n        setDimensions = _useState[1]; // default width, detect on server.\n\n\n    var handleResize = function handleResize() {\n      var _window = window,\n          width = _window.innerWidth,\n          height = _window.innerHeight;\n      return {\n        width: width,\n        height: height\n      };\n    };\n\n    Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n      window.addEventListener('resize', handleResize);\n      return function () {\n        return window.removeEventListener('resize', handleResize);\n      };\n    }, [handleResize]);\n    return width;\n  };\n\n  _s(getWindow, \"mJLvBTnf+xo7bN0aoKZjLKJGRWo=\");\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_DisplayContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n    value: dimensions,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, this);\n}\n\n_c = Louwer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Louwer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Louwer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkxvdXdlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldFdpbmRvdyIsInVzZVN0YXRlIiwiZGltZW5zaW9ucyIsInNldERpbWVuc2lvbnMiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQTBDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFFeEMsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLG9CQUNjQyxzREFBUSxDQUFDLENBQUQsQ0FEdEI7QUFBQSxRQUNmQyxVQURlO0FBQUEsUUFDSEMsYUFERyxpQkFDMkI7OztBQUNqRCxRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUEsb0JBQzBCQyxNQUQxQjtBQUFBLFVBQ0xDLEtBREssV0FDakJDLFVBRGlCO0FBQUEsVUFDZUMsTUFEZixXQUNFQyxXQURGO0FBRXpCLGFBQVE7QUFBRUgsYUFBSyxFQUFMQSxLQUFGO0FBQVNFLGNBQU0sRUFBTkE7QUFBVCxPQUFSO0FBQ0QsS0FIRDs7QUFJQUUsMkRBQVMsQ0FBQyxZQUFNO0FBQ2RMLFlBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NQLFlBQWxDO0FBQ0EsYUFBTztBQUFBLGVBQU1DLE1BQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNSLFlBQXJDLENBQU47QUFBQSxPQUFQO0FBQ0QsS0FIUSxFQUdOLENBQUNBLFlBQUQsQ0FITSxDQUFUO0FBSUEsV0FBT0UsS0FBUDtBQUNELEdBWEQ7O0FBRndDLEtBRWxDTixTQUZrQzs7QUFnQnhDLHNCQUNBLHFFQUFDLGlFQUFELENBQWdCLFFBQWhCO0FBQXlCLFNBQUssRUFBRUUsVUFBaEM7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFLRDs7S0FyQlFGLE07QUF1Qk1BLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBEaXNwbGF5Q29udGV4dCBmcm9tICdjb21wb25lbnRzL0Rpc3BsYXlDb250ZXh0J1xuaW1wb3J0ICdzdHlsZXMvZ2xvYmFscy5jc3MnXG5cbmZ1bmN0aW9uIExvdXdlcih7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHsgXG5cbiAgY29uc3QgZ2V0V2luZG93ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtkaW1lbnNpb25zLCBzZXREaW1lbnNpb25zXSA9IHVzZVN0YXRlKDApOyAvLyBkZWZhdWx0IHdpZHRoLCBkZXRlY3Qgb24gc2VydmVyLlxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGgsIGlubmVySGVpZ2h0OiBoZWlnaHQgfSA9IHdpbmRvd1xuICAgICAgcmV0dXJuICh7IHdpZHRoLCBoZWlnaHQgfSlcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIH0sIFtoYW5kbGVSZXNpemVdKTtcbiAgICByZXR1cm4gd2lkdGg7XG4gIH07XG4gIFxuICAgXG4gIHJldHVybiAoXG4gIDxEaXNwbGF5Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGltZW5zaW9uc30+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L0Rpc3BsYXlDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvdXdlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})