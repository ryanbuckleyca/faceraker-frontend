webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_apinrise_Code_ryanbuckleyca_louwer_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_DisplayContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/DisplayContext */ \"./components/DisplayContext.js\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/apinrise/Code/ryanbuckleyca/louwer/frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_apinrise_Code_ryanbuckleyca_louwer_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Louwer(_ref) {\n  var _s = $RefreshSig$();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var getWindow = function getWindow() {\n    _s();\n\n    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n        dimensions = _useState[0],\n        setDimensions = _useState[1];\n\n    var handleResize = function handleResize() {\n      var _window = window,\n          width = _window.innerWidth,\n          height = _window.innerHeight;\n      setDimensions({\n        width: width,\n        height: height\n      });\n    };\n\n    Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n      window.addEventListener('resize', handleResize);\n      return function () {\n        return window.removeEventListener('resize', handleResize);\n      };\n    }, [handleResize]);\n    console.log('dimensions are: ', dimensions);\n    return dimensions;\n  };\n\n  _s(getWindow, \"mJLvBTnf+xo7bN0aoKZjLKJGRWo=\");\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_DisplayContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n    value: getWindow,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 3\n  }, this);\n}\n\n_c = Louwer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Louwer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Louwer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkxvdXdlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldFdpbmRvdyIsInVzZVN0YXRlIiwiZGltZW5zaW9ucyIsInNldERpbWVuc2lvbnMiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUEwQztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBRXhDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxvQkFDY0Msc0RBQVEsQ0FBQyxDQUFELENBRHRCO0FBQUEsUUFDZkMsVUFEZTtBQUFBLFFBQ0hDLGFBREc7O0FBRXRCLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQSxvQkFDMEJDLE1BRDFCO0FBQUEsVUFDTEMsS0FESyxXQUNqQkMsVUFEaUI7QUFBQSxVQUNlQyxNQURmLFdBQ0VDLFdBREY7QUFFekJOLG1CQUFhLENBQUU7QUFBRUcsYUFBSyxFQUFMQSxLQUFGO0FBQVNFLGNBQU0sRUFBTkE7QUFBVCxPQUFGLENBQWI7QUFDRCxLQUhEOztBQUlBRSwyREFBUyxDQUFDLFlBQU07QUFDZEwsWUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1AsWUFBbEM7QUFDQSxhQUFPO0FBQUEsZUFBTUMsTUFBTSxDQUFDTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1IsWUFBckMsQ0FBTjtBQUFBLE9BQVA7QUFDRCxLQUhRLEVBR04sQ0FBQ0EsWUFBRCxDQUhNLENBQVQ7QUFJQVMsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NaLFVBQWhDO0FBQ0EsV0FBT0EsVUFBUDtBQUNELEdBWkQ7O0FBRndDLEtBRWxDRixTQUZrQzs7QUFpQnhDLHNCQUNBLHFFQUFDLGlFQUFELENBQWdCLFFBQWhCO0FBQXlCLFNBQUssRUFBRUEsU0FBaEM7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFLRDs7S0F0QlFGLE07QUF3Qk1BLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBEaXNwbGF5Q29udGV4dCBmcm9tICdjb21wb25lbnRzL0Rpc3BsYXlDb250ZXh0J1xuaW1wb3J0ICdzdHlsZXMvZ2xvYmFscy5jc3MnXG5cbmZ1bmN0aW9uIExvdXdlcih7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHsgXG5cbiAgY29uc3QgZ2V0V2luZG93ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtkaW1lbnNpb25zLCBzZXREaW1lbnNpb25zXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBpbm5lcldpZHRoOiB3aWR0aCwgaW5uZXJIZWlnaHQ6IGhlaWdodCB9ID0gd2luZG93XG4gICAgICBzZXREaW1lbnNpb25zICh7IHdpZHRoLCBoZWlnaHQgfSlcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgICB9LCBbaGFuZGxlUmVzaXplXSlcbiAgICBjb25zb2xlLmxvZygnZGltZW5zaW9ucyBhcmU6ICcsIGRpbWVuc2lvbnMpXG4gICAgcmV0dXJuIGRpbWVuc2lvbnNcbiAgfTtcbiAgXG4gICBcbiAgcmV0dXJuIChcbiAgPERpc3BsYXlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtnZXRXaW5kb3d9PlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC9EaXNwbGF5Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb3V3ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})