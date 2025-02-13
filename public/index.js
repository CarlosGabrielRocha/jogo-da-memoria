/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-elements.ts":
/*!********************************!*\
  !*** ./src/create-elements.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   createMidiaElement: () => (/* binding */ createMidiaElement),\n/* harmony export */   newAnchorElement: () => (/* binding */ newAnchorElement),\n/* harmony export */   newButton: () => (/* binding */ newButton),\n/* harmony export */   newImg: () => (/* binding */ newImg),\n/* harmony export */   newTextElement: () => (/* binding */ newTextElement)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nfunction createElement(tag, id) {\n    var _a;\n    var className = [];\n    for (var _i = 2; _i < arguments.length; _i++) {\n        className[_i - 2] = arguments[_i];\n    }\n    var element = document.createElement(tag);\n    if (id)\n        element.id = id;\n    if (className) {\n        (_a = element.classList).add.apply(_a, className);\n    }\n    return element;\n}\nfunction createMidiaElement(tag, src) {\n    var attributes = [];\n    for (var _i = 2; _i < arguments.length; _i++) {\n        attributes[_i - 2] = arguments[_i];\n    }\n    var element = createElement(tag);\n    attributes.forEach(function (pair) { return element.setAttribute(pair[0], pair[1]); });\n    if (tag === 'img') {\n        return element;\n    }\n    else {\n        return element;\n    }\n}\nfunction newImg(src, className, alt) {\n    var attributes = [];\n    for (var _i = 3; _i < arguments.length; _i++) {\n        attributes[_i - 3] = arguments[_i];\n    }\n    var img = document.createElement('img');\n    img.src = src;\n    img.className = className;\n    img.alt = alt;\n    attributes.forEach(function (pair) { return img.setAttribute(pair[0], pair[1]); });\n    return img;\n}\nfunction newTextElement(tag, text, id) {\n    var className = [];\n    for (var _i = 3; _i < arguments.length; _i++) {\n        className[_i - 3] = arguments[_i];\n    }\n    var element = createElement.apply(void 0, __spreadArray([tag, id], className, false));\n    element.innerText = text;\n    return element;\n}\nfunction newButton(text, id) {\n    var className = [];\n    for (var _i = 2; _i < arguments.length; _i++) {\n        className[_i - 2] = arguments[_i];\n    }\n    var btn = createElement.apply(void 0, __spreadArray(['button', id], className, false));\n    btn.innerText = text;\n    return btn;\n}\nfunction newAnchorElement(href) {\n    var a = createElement('a');\n    a.href = href;\n    return a;\n}\n\n\n//# sourceURL=webpack://jogo-da-memoria/./src/create-elements.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _meteor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meteor */ \"./src/meteor.ts\");\n\nsetInterval(_meteor__WEBPACK_IMPORTED_MODULE_0__.restartMeteorAnimation, 15000);\nvar typingH1 = document.querySelector('h1.typing');\n/* Animação de digitação */\nfunction typingEffect(element, text, interval, pause) {\n    element.innerText = '';\n    element.style.height = window.getComputedStyle(element).fontSize;\n    var textArray = text.split('');\n    var _loop_1 = function (index) {\n        setTimeout(function () {\n            element.innerText += textArray[index - 1];\n            element.classList.toggle('caret');\n        }, index * (interval * 1000));\n    };\n    for (var index = 1; index <= textArray.length; index++) {\n        _loop_1(index);\n    }\n    setTimeout(function () {\n        typingEffect(element, text, interval, pause);\n    }, textArray.length * (interval * 1000) + (pause * 1000));\n}\ntypingEffect(typingH1, 'Welcome!', 0.4, 1);\n\n\n//# sourceURL=webpack://jogo-da-memoria/./src/index.ts?");

/***/ }),

/***/ "./src/meteor.ts":
/*!***********************!*\
  !*** ./src/meteor.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   restartMeteorAnimation: () => (/* binding */ restartMeteorAnimation)\n/* harmony export */ });\n/* harmony import */ var _create_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-elements */ \"./src/create-elements.ts\");\n\nvar containerForMeteor = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', '', 'meteor-container');\nvar meteor = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'meteor');\ndocument.body.appendChild(containerForMeteor);\ncontainerForMeteor.appendChild(meteor);\nfunction restartMeteorAnimation() {\n    meteor.classList.toggle('meteor');\n}\n\n\n//# sourceURL=webpack://jogo-da-memoria/./src/meteor.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;