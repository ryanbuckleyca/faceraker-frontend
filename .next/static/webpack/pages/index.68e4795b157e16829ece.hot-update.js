webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Mapbox/PopUpCard.js":
/*!****************************************!*\
  !*** ./components/Mapbox/PopUpCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_DisplayContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/DisplayContext */ \"./components/DisplayContext.js\");\n/* harmony import */ var components_Post_PriceTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Post/PriceTag */ \"./components/Post/PriceTag.js\");\n/* harmony import */ var components_Post_Images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Post/Images */ \"./components/Post/Images.js\");\n/* harmony import */ var components_Post_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Post/Title */ \"./components/Post/Title.js\");\n/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Button */ \"./components/Button.js\");\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n\n\nvar _jsxFileName = \"/Users/apinrise/Code/ryanbuckleyca/louwer/frontend/components/Mapbox/PopUpCard.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar PopupCard = function PopupCard(_ref) {\n  _s();\n\n  var post = _ref.post,\n      refs = _ref.refs;\n  if (!post) return false;\n  var display = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(components_DisplayContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  var trunc = display.width / 18;\n\n  var scrollToRef = function scrollToRef(id) {\n    return refs[id].current.scrollIntoView({\n      behavior: 'smooth',\n      block: 'end'\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n    className: \"pop-up rounded-sm shadow-xl p-4 bg-white top-1/2 w-64 mx-auto text-sm sm:h-60\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative w-full text-center -top-12 -mb-12 text-white text-5xl\",\n      children: \"\\u25B2\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"sm:h-full sm:overflow-scroll\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        className: \"relative flex items-center h-10 text-sm\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Post_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          trunc: trunc,\n          linkTo: post.link,\n          className: \"p-0 flex-1 mr-2 text-md\",\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Post_PriceTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"w-10 h-10 text-sm\",\n          children: post.price\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Post_Images__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"hidden sm:block\",\n        children: post.images\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"hidden sm:block sm:my-3\",\n        children: post.text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"flex\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          type: \"primary\",\n          className: \"flex-1\",\n          onClick: function onClick() {\n            return window.open(post.link);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"flex items-center justify-center space-x-2\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_feather__WEBPACK_IMPORTED_MODULE_7__[\"Facebook\"], {\n              size: 16\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 13\n            }, _this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: \"voir/view post\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 36\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          type: \"secondary\",\n          className: \"pl-4 pr-5\",\n          onClick: function onClick() {\n            return scrollToRef(post.id);\n          },\n          children: \"show\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PopupCard, \"lTmhAi7khv7qL00sc34zXyTLhQ0=\");\n\n_c = PopupCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopupCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"PopupCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBib3gvUG9wVXBDYXJkLmpzP2FmZTQiXSwibmFtZXMiOlsiUG9wdXBDYXJkIiwicG9zdCIsInJlZnMiLCJkaXNwbGF5IiwidXNlQ29udGV4dCIsIkRpc3BsYXlDb250ZXh0IiwidHJ1bmMiLCJ3aWR0aCIsInNjcm9sbFRvUmVmIiwiaWQiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwibGluayIsInRpdGxlIiwicHJpY2UiLCJpbWFnZXMiLCJ0ZXh0Iiwid2luZG93Iiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDcEMsTUFBSSxDQUFDRCxJQUFMLEVBQVcsT0FBTyxLQUFQO0FBRVgsTUFBTUUsT0FBTyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUExQjtBQUNBLE1BQU1DLEtBQUssR0FBR0gsT0FBTyxDQUFDSSxLQUFSLEdBQWdCLEVBQTlCOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEVBQUU7QUFBQSxXQUNwQlAsSUFBSSxDQUFDTyxFQUFELENBQUosQ0FBU0MsT0FBVCxDQUFpQkMsY0FBakIsQ0FBZ0M7QUFDOUJDLGNBQVEsRUFBRSxRQURvQjtBQUU5QkMsV0FBSyxFQUFFO0FBRnVCLEtBQWhDLENBRG9CO0FBQUEsR0FBdEI7O0FBT0Esc0JBQ0U7QUFBTyxhQUFTLEVBQUMsK0VBQWpCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsZ0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLDhCQUFmO0FBQUEsOEJBQ0U7QUFBUSxpQkFBUyxFQUFDLHlDQUFsQjtBQUFBLGdDQUNFLHFFQUFDLDZEQUFEO0FBQU8sZUFBSyxFQUFFUCxLQUFkO0FBQXFCLGdCQUFNLEVBQUdMLElBQUksQ0FBQ2EsSUFBbkM7QUFBMEMsbUJBQVMsRUFBQyx5QkFBcEQ7QUFBQSxvQkFBZ0ZiLElBQUksQ0FBQ2M7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLGdFQUFEO0FBQVUsbUJBQVMsRUFBQyxtQkFBcEI7QUFBQSxvQkFBMENkLElBQUksQ0FBQ2U7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFLHFFQUFDLDhEQUFEO0FBQVEsaUJBQVMsRUFBQyxpQkFBbEI7QUFBQSxrQkFBc0NmLElBQUksQ0FBQ2dCO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU1FO0FBQUcsaUJBQVMsRUFBQyx5QkFBYjtBQUFBLGtCQUNJaEIsSUFBSSxDQUFDaUI7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFTRTtBQUFNLGlCQUFTLEVBQUMsTUFBaEI7QUFBQSxnQ0FDQSxxRUFBQyx5REFBRDtBQUNFLGNBQUksRUFBQyxTQURQO0FBRUUsbUJBQVMsRUFBQyxRQUZaO0FBR0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWW5CLElBQUksQ0FBQ2EsSUFBakIsQ0FBSjtBQUFBLFdBSFg7QUFBQSxpQ0FLRTtBQUFNLHFCQUFTLEVBQUMsNENBQWhCO0FBQUEsb0NBQ0UscUVBQUMsc0RBQUQ7QUFBVSxrQkFBSSxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsb0JBQ3lCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBVUEscUVBQUMseURBQUQ7QUFBUSxjQUFJLEVBQUMsV0FBYjtBQUF5QixtQkFBUyxFQUFDLFdBQW5DO0FBQ0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFJTixXQUFXLENBQUNQLElBQUksQ0FBQ1EsRUFBTixDQUFmO0FBQUEsV0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZCRCxDQTFDRDs7R0FBTVQsUzs7S0FBQUEsUztBQTRDU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcGJveC9Qb3BVcENhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRGlzcGxheUNvbnRleHQgZnJvbSBcImNvbXBvbmVudHMvRGlzcGxheUNvbnRleHRcIjtcbmltcG9ydCBQcmljZVRhZyBmcm9tICdjb21wb25lbnRzL1Bvc3QvUHJpY2VUYWcnXG5pbXBvcnQgSW1hZ2VzIGZyb20gJ2NvbXBvbmVudHMvUG9zdC9JbWFnZXMnXG5pbXBvcnQgVGl0bGUgZnJvbSAnY29tcG9uZW50cy9Qb3N0L1RpdGxlJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuY29uc3QgUG9wdXBDYXJkID0gKHsgcG9zdCwgcmVmcyB9KSA9PiB7XG4gIGlmICghcG9zdCkgcmV0dXJuIGZhbHNlXG4gIFxuICBjb25zdCBkaXNwbGF5ID0gdXNlQ29udGV4dChEaXNwbGF5Q29udGV4dCk7XG4gIGNvbnN0IHRydW5jID0gZGlzcGxheS53aWR0aCAvIDE4XG5cbiAgY29uc3Qgc2Nyb2xsVG9SZWYgPSBpZCA9PiAoXG4gICAgcmVmc1tpZF0uY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICBibG9jazogJ2VuZCcsXG4gICAgfSlcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cInBvcC11cCByb3VuZGVkLXNtIHNoYWRvdy14bCBwLTQgYmctd2hpdGUgdG9wLTEvMiB3LTY0IG14LWF1dG8gdGV4dC1zbSBzbTpoLTYwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCB0ZXh0LWNlbnRlciAtdG9wLTEyIC1tYi0xMiB0ZXh0LXdoaXRlIHRleHQtNXhsXCI+JiM5NjUwOzwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoLWZ1bGwgc206b3ZlcmZsb3ctc2Nyb2xsXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgaC0xMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgPFRpdGxlIHRydW5jPXt0cnVuY30gbGlua1RvPXsgcG9zdC5saW5rIH0gY2xhc3NOYW1lPVwicC0wIGZsZXgtMSBtci0yIHRleHQtbWRcIj57IHBvc3QudGl0bGUgfTwvVGl0bGU+XG4gICAgICAgICAgPFByaWNlVGFnIGNsYXNzTmFtZT1cInctMTAgaC0xMCB0ZXh0LXNtXCI+eyBwb3N0LnByaWNlIH08L1ByaWNlVGFnPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPEltYWdlcyBjbGFzc05hbWU9XCJoaWRkZW4gc206YmxvY2tcIj57IHBvc3QuaW1hZ2VzIH08L0ltYWdlcz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrIHNtOm15LTNcIj5cbiAgICAgICAgICB7IHBvc3QudGV4dCB9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTFcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpPT53aW5kb3cub3Blbihwb3N0LmxpbmspfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICA8RmFjZWJvb2sgc2l6ZT17MTZ9IC8+IDxkaXY+dm9pci92aWV3IHBvc3Q8L2Rpdj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9XCJwbC00IHByLTVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpPT5zY3JvbGxUb1JlZihwb3N0LmlkKX0+c2hvd1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cENhcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Mapbox/PopUpCard.js\n");

/***/ })

})