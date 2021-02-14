webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Post/index.js":
/*!**********************************!*\
  !*** ./components/Post/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_DisplayContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/DisplayContext */ \"./components/DisplayContext.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./components/Post/Header.js\");\n/* harmony import */ var _Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Images */ \"./components/Post/Images.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Title */ \"./components/Post/Title.js\");\n/* harmony import */ var _PriceTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PriceTag */ \"./components/Post/PriceTag.js\");\n/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Location */ \"./components/Post/Location.js\");\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n\n\nvar _jsxFileName = \"/Users/apinrise/Code/ryanbuckleyca/louwer/frontend/components/Post/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var data = _ref.data,\n      setShowPopup = _ref.setShowPopup;\n  if (!data) return false;\n  var title = data.title,\n      price = data.price,\n      images = data.images,\n      text = data.text,\n      link = data.link;\n  var dimensions = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(components_DisplayContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  var w = dimensions.width;\n  var trunc = w < 640 ? w / 8 : w / 22;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    className: \"relative border-solid border-2 border-red-400 bg-white rounded-xl p-5\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        trunc: trunc,\n        linkTo: link,\n        className: \"mb-1 p-0 text-2xl flex-1\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_PriceTag__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        className: \"w-20 h-20 text-xl flex-0\",\n        children: price\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Location__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        post: data,\n        setShowPopup: setShowPopup\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Images__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: images\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"my-3\",\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"bg-teal flex justify-center space-x-2 align-center rounded text-white w-full p-2\",\n      onClick: function onClick() {\n        return window.open(link);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_feather__WEBPACK_IMPORTED_MODULE_8__[\"Facebook\"], {\n        size: 20\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"voir/view facebook post\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 32\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Post, \"TFrMZ06n/vAeqwDByyZsd8keWQQ=\");\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L2luZGV4LmpzPzYzMjQiXSwibmFtZXMiOlsiUG9zdCIsImRhdGEiLCJzZXRTaG93UG9wdXAiLCJ0aXRsZSIsInByaWNlIiwiaW1hZ2VzIiwidGV4dCIsImxpbmsiLCJkaW1lbnNpb25zIiwidXNlQ29udGV4dCIsIkRpc3BsYXlDb250ZXh0IiwidyIsIndpZHRoIiwidHJ1bmMiLCJ3aW5kb3ciLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDdkMsTUFBRyxDQUFDRCxJQUFKLEVBQVUsT0FBTyxLQUFQO0FBRDZCLE1BRy9CRSxLQUgrQixHQUdNRixJQUhOLENBRy9CRSxLQUgrQjtBQUFBLE1BR3hCQyxLQUh3QixHQUdNSCxJQUhOLENBR3hCRyxLQUh3QjtBQUFBLE1BR2pCQyxNQUhpQixHQUdNSixJQUhOLENBR2pCSSxNQUhpQjtBQUFBLE1BR1RDLElBSFMsR0FHTUwsSUFITixDQUdUSyxJQUhTO0FBQUEsTUFHSEMsSUFIRyxHQUdNTixJQUhOLENBR0hNLElBSEc7QUFLdkMsTUFBTUMsVUFBVSxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUE3QjtBQUNBLE1BQU1DLENBQUMsR0FBR0gsVUFBVSxDQUFDSSxLQUFyQjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsQ0FBQyxHQUFHLEdBQUosR0FBVUEsQ0FBQyxHQUFHLENBQWQsR0FBa0JBLENBQUMsR0FBRyxFQUFwQztBQUVBLHNCQUNFO0FBQU0sYUFBUyxFQUFDLHVFQUFoQjtBQUFBLDRCQUNFLHFFQUFDLCtDQUFEO0FBQUEsOEJBQ0UscUVBQUMsOENBQUQ7QUFBTyxhQUFLLEVBQUVFLEtBQWQ7QUFBcUIsY0FBTSxFQUFHTixJQUE5QjtBQUFxQyxpQkFBUyxFQUFDLDBCQUEvQztBQUFBLGtCQUE0RUo7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsaURBQUQ7QUFBVSxpQkFBUyxFQUFDLDBCQUFwQjtBQUFBLGtCQUFpREM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UscUVBQUMsaURBQUQ7QUFBVSxZQUFJLEVBQUVILElBQWhCO0FBQXNCLG9CQUFZLEVBQUVDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLHFFQUFDLCtDQUFEO0FBQUEsZ0JBQVVHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0U7QUFBRyxlQUFTLEVBQUMsTUFBYjtBQUFBLGdCQUNJQztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVVFO0FBQ0UsZUFBUyxFQUFDLGtGQURaO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBSVEsTUFBTSxDQUFDQyxJQUFQLENBQVlSLElBQVosQ0FBSjtBQUFBLE9BRlg7QUFBQSw4QkFJRSxxRUFBQyxzREFBRDtBQUFVLFlBQUksRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsb0JBSXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBNUJEOztHQUFNUCxJOztLQUFBQSxJO0FBK0JTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBEaXNwbGF5Q29udGV4dCBmcm9tIFwiY29tcG9uZW50cy9EaXNwbGF5Q29udGV4dFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBJbWFnZXMgZnJvbSAnLi9JbWFnZXMnXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSdcbmltcG9ydCBQcmljZVRhZyBmcm9tICcuL1ByaWNlVGFnJ1xuaW1wb3J0IExvY2F0aW9uIGZyb20gJy4vTG9jYXRpb24nXG5pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5cbmNvbnN0IFBvc3QgPSAoeyBkYXRhLCBzZXRTaG93UG9wdXAgfSkgPT4ge1xuICBpZighZGF0YSkgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgeyB0aXRsZSwgcHJpY2UsIGltYWdlcywgdGV4dCwgbGluayB9ID0gZGF0YVxuXG4gIGNvbnN0IGRpbWVuc2lvbnMgPSB1c2VDb250ZXh0KERpc3BsYXlDb250ZXh0KVxuICBjb25zdCB3ID0gZGltZW5zaW9ucy53aWR0aFxuICBjb25zdCB0cnVuYyA9IHcgPCA2NDAgPyB3IC8gOCA6IHcgLyAyMlxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1yZWQtNDAwIGJnLXdoaXRlIHJvdW5kZWQteGwgcC01XCI+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8VGl0bGUgdHJ1bmM9e3RydW5jfSBsaW5rVG89eyBsaW5rIH0gY2xhc3NOYW1lPVwibWItMSBwLTAgdGV4dC0yeGwgZmxleC0xXCI+eyB0aXRsZSB9PC9UaXRsZT5cbiAgICAgICAgPFByaWNlVGFnIGNsYXNzTmFtZT1cInctMjAgaC0yMCB0ZXh0LXhsIGZsZXgtMFwiPnsgcHJpY2UgfTwvUHJpY2VUYWc+XG4gICAgICAgIDxMb2NhdGlvbiBwb3N0PXtkYXRhfSBzZXRTaG93UG9wdXA9e3NldFNob3dQb3B1cH0gLz5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPEltYWdlcz57IGltYWdlcyB9PC9JbWFnZXM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgIHsgdGV4dCB9XG4gICAgICA8L3A+XG4gICAgICA8YnV0dG9uIFxuICAgICAgICBjbGFzc05hbWU9XCJiZy10ZWFsIGZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC0yIGFsaWduLWNlbnRlciByb3VuZGVkIHRleHQtd2hpdGUgdy1mdWxsIHAtMlwiXG4gICAgICAgIG9uQ2xpY2s9eygpPT53aW5kb3cub3BlbihsaW5rKX1cbiAgICAgID5cbiAgICAgICAgPEZhY2Vib29rIHNpemU9ezIwfSAvPiA8ZGl2PnZvaXIvdmlldyBmYWNlYm9vayBwb3N0PC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21haW4+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Post/index.js\n");

/***/ })

})