"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./components/header.pug":
/*!*******************************!*\
  !*** ./components/header.pug ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Logo.png */ \"./img/Logo.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<body><div class=\\\"logo\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"Лого\\\"/></div><ul class=\\\"navigation\\\"> <li class=\\\"list-item\\\"><a class=\\\"link-item\\\" href=\\\"#\\\"> О нас</a></li><li class=\\\"list-item\\\"><a class=\\\"link-item dropdown\\\" href=\\\"#\\\">Услуги</a></li><li class=\\\"list-item\\\"><a class=\\\"link-item\\\" href=\\\"#\\\">Вакансии</a></li><li class=\\\"list-item\\\"><a class=\\\"link-item\\\" href=\\\"#\\\">Новости</a></li><li class=\\\"list-item\\\"><a class=\\\"link-item dropdown\\\" href=\\\"#\\\">Соглашения</a></li><li class=\\\"list-item buttons\\\"><a href=\\\"#\\\"><button class=\\\"in\\\">Войти</button></a><a href=\\\"#\\\"><button class=\\\"reg\\\">Зарегестрироваться</button></a></li></ul></body>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./components/header.pug?");

/***/ }),

/***/ "./layout/default.pug":
/*!****************************!*\
  !*** ./layout/default.pug ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Logo.png */ \"./img/Logo.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE js><html><head> <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\"/><style> </style></head><body><div class=\\\"default-container\\\"> <body><div class=\\\"logo\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"Лого\\\"/></div><ul class=\\\"navigation\\\"> <li class=\\\"list-item\\\"><a class=\\\"link-item\\\" href=\\\"#\\\"> О нас</a></li><li class=\\\"list-item\\\"><a class=\\\"link-item dropdown\\\" href=\\\"#\\\">Услуги</a></li><li class=\\\"list-item\\\"><a class=\\\"link-item\\\" href=\\\"#\\\">Вакансии</a></li><li class=\\\"list-item\\\"><a class=\\\"link-item\\\" href=\\\"#\\\">Новости</a></li><li class=\\\"list-item\\\"><a class=\\\"link-item dropdown\\\" href=\\\"#\\\">Соглашения</a></li><li class=\\\"list-item buttons\\\"><a href=\\\"#\\\"><button class=\\\"in\\\">Войти</button></a><a href=\\\"#\\\"><button class=\\\"reg\\\">Зарегестрироваться</button></a></li></ul></body></div></body></html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./layout/default.pug?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./styles/components/header.scss":
/*!***************************************!*\
  !*** ./styles/components/header.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/components/header.scss?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout_default_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/default.pug */ \"./layout/default.pug\");\n/* harmony import */ var _components_header_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header.pug */ \"./components/header.pug\");\n/* harmony import */ var _styles_components_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/components/header.scss */ \"./styles/components/header.scss\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./img/Logo.png":
/*!**********************!*\
  !*** ./img/Logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0cfbc29822204bbeaaaf.png\";\n\n//# sourceURL=webpack:///./img/Logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./main.js"));
/******/ }
]);