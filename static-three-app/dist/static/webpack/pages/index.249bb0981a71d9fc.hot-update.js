"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/three/BackgroundCanvas/index.js":
/*!********************************************************!*\
  !*** ./src/components/three/BackgroundCanvas/index.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Box */ \"./src/components/three/Box/index.js\");\n/* harmony import */ var _Dinosaur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dinosaur */ \"./src/components/three/Dinosaur/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/daniel.allott/Documents/GitHub/brighthr-fed2/static-three-app/src/components/three/BackgroundCanvas/index.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar radius = 15;\nvar scrollRate = 0.005;\n\nvar getX = function getX(i) {\n  return Math.cos(i) * radius;\n};\n\nvar getY = function getY(i) {\n  return Math.sin(i) * radius;\n};\n\nvar BackgroundCanvas = function BackgroundCanvas(_ref) {\n  var scrollY = _ref.scrollY;\n  var modScroll = scrollY * scrollRate;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"fixed top-0 left-0 z-0 w-full h-full\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.Canvas, {\n      shadows: true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera, {\n        makeDefault: true,\n        position: [getY(modScroll), 0, getX(modScroll)],\n        rotation: [0, modScroll, 0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ambientLight\", {\n        intensity: 0.5\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"spotLight\", {\n        position: [10, 10, 10],\n        angle: 0.15,\n        penumbra: 1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        position: [0, 0, 0],\n        scale: 5\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        position: [0, 0, -5],\n        scale: 2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = BackgroundCanvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackgroundCanvas);\n\nvar _c;\n\n$RefreshReg$(_c, \"BackgroundCanvas\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90aHJlZS9CYWNrZ3JvdW5kQ2FudmFzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxNQUFNLEdBQUcsRUFBZjtBQUNBLElBQU1DLFVBQVUsR0FBRyxLQUFuQjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxDQUFEO0VBQUEsT0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLENBQVQsSUFBY0gsTUFBckI7QUFBQSxDQUFiOztBQUNBLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNILENBQUQ7RUFBQSxPQUFPQyxJQUFJLENBQUNHLEdBQUwsQ0FBU0osQ0FBVCxJQUFjSCxNQUFyQjtBQUFBLENBQWI7O0FBRUEsSUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFlO0VBQUEsSUFBYkMsT0FBYSxRQUFiQSxPQUFhO0VBQ3BDLElBQU1DLFNBQVMsR0FBR0QsT0FBTyxHQUFHUixVQUE1QjtFQUNBLG9CQUNJO0lBQUssU0FBUyxFQUFDLHNDQUFmO0lBQUEsdUJBQ0ksOERBQUMsc0RBQUQ7TUFDSSxPQUFPLE1BRFg7TUFBQSx3QkFHSSw4REFBQyxnRUFBRDtRQUNJLFdBQVcsTUFEZjtRQUVJLFFBQVEsRUFBRSxDQUFDSyxJQUFJLENBQUNJLFNBQUQsQ0FBTCxFQUFrQixDQUFsQixFQUFxQlIsSUFBSSxDQUFDUSxTQUFELENBQXpCLENBRmQ7UUFHSSxRQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUdBLFNBQUgsRUFBYSxDQUFiO01BSGQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUhKLGVBUUk7UUFBYyxTQUFTLEVBQUU7TUFBekI7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVJKLGVBU0k7UUFBVyxRQUFRLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FBckI7UUFBbUMsS0FBSyxFQUFFLElBQTFDO1FBQWdELFFBQVEsRUFBRTtNQUExRDtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBVEosZUFVSSw4REFBQyw0Q0FBRDtRQUFLLFFBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFmO1FBQTBCLEtBQUssRUFBRTtNQUFqQztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBVkosZUFXSSw4REFBQyw0Q0FBRDtRQUFLLFFBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLENBQWY7UUFBMkIsS0FBSyxFQUFFO01BQWxDO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FYSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFESjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREo7QUFrQkgsQ0FwQkQ7O0tBQU1GO0FBc0JOLCtEQUFlQSxnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90aHJlZS9CYWNrZ3JvdW5kQ2FudmFzL2luZGV4LmpzPzBkMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0IHsgUGVyc3BlY3RpdmVDYW1lcmEgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94J1xuaW1wb3J0IERpbm9zYXVyIGZyb20gXCIuLi9EaW5vc2F1clwiO1xuXG5jb25zdCByYWRpdXMgPSAxNTtcbmNvbnN0IHNjcm9sbFJhdGUgPSAwLjAwNVxuY29uc3QgZ2V0WCA9IChpKSA9PiBNYXRoLmNvcyhpKSAqIHJhZGl1cztcbmNvbnN0IGdldFkgPSAoaSkgPT4gTWF0aC5zaW4oaSkgKiByYWRpdXM7XG5cbmNvbnN0IEJhY2tncm91bmRDYW52YXMgPSAoe3Njcm9sbFl9KSA9PiB7XG4gICAgY29uc3QgbW9kU2Nyb2xsID0gc2Nyb2xsWSAqIHNjcm9sbFJhdGVcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB6LTAgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICAgICAgPENhbnZhcyBcbiAgICAgICAgICAgICAgICBzaGFkb3dzXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBlcnNwZWN0aXZlQ2FtZXJhIFxuICAgICAgICAgICAgICAgICAgICBtYWtlRGVmYXVsdCBcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e1tnZXRZKG1vZFNjcm9sbCksIDAsIGdldFgobW9kU2Nyb2xsKV19IFxuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbj17WzAsbW9kU2Nyb2xsLDBdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezAuNX0gLz5cbiAgICAgICAgICAgICAgICA8c3BvdExpZ2h0IHBvc2l0aW9uPXtbMTAsIDEwLCAxMF19IGFuZ2xlPXswLjE1fSBwZW51bWJyYT17MX0gLz5cbiAgICAgICAgICAgICAgICA8Qm94IHBvc2l0aW9uPXtbMCwgMCwgMF19IHNjYWxlPXs1fSAvPlxuICAgICAgICAgICAgICAgIDxCb3ggcG9zaXRpb249e1swLCAwLCAtNV19IHNjYWxlPXsyfSAvPlxuICAgICAgICAgICAgPC9DYW52YXM+XG4gICAgICAgIDwvZGl2PlxuICAgXG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZENhbnZhczsiXSwibmFtZXMiOlsiQ2FudmFzIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJCb3giLCJEaW5vc2F1ciIsInJhZGl1cyIsInNjcm9sbFJhdGUiLCJnZXRYIiwiaSIsIk1hdGgiLCJjb3MiLCJnZXRZIiwic2luIiwiQmFja2dyb3VuZENhbnZhcyIsInNjcm9sbFkiLCJtb2RTY3JvbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/three/BackgroundCanvas/index.js\n"));

/***/ })

});