/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_dom_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dom-loader */ \"./src/js/dom-loader.js\");\n\r\n\r\nvar showSecret = false;\r\n\r\n_js_dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].addEventListener('click', toggleSecretState);\r\nupdateSecret();\r\n\r\nfunction toggleSecretState() {\r\n    showSecret = !showSecret;\r\n    updateSecret();\r\n    updateSecretButton();\r\n}\r\n\r\nfunction updateSecretButton() {\r\n    if (showSecret) {\r\n        _js_dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].textContent = \"Hide it!\";\r\n    } else {\r\n        _js_dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].textContent = \"Show it!\";\r\n    }\r\n}\r\n\r\nfunction updateSecret() {\r\n    if (showSecret) {\r\n        _js_dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secret\"].style.display = 'block';\r\n    } else {\r\n        _js_dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secret\"].style.display = 'none';\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZWNyZXRCdXR0b24sIHNlY3JldCB9IGZyb20gJy4vanMvZG9tLWxvYWRlcic7XHJcblxyXG52YXIgc2hvd1NlY3JldCA9IGZhbHNlO1xyXG5cclxuc2VjcmV0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2VjcmV0U3RhdGUpO1xyXG51cGRhdGVTZWNyZXQoKTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVNlY3JldFN0YXRlKCkge1xyXG4gICAgc2hvd1NlY3JldCA9ICFzaG93U2VjcmV0O1xyXG4gICAgdXBkYXRlU2VjcmV0KCk7XHJcbiAgICB1cGRhdGVTZWNyZXRCdXR0b24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2VjcmV0QnV0dG9uKCkge1xyXG4gICAgaWYgKHNob3dTZWNyZXQpIHtcclxuICAgICAgICBzZWNyZXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkhpZGUgaXQhXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlY3JldEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2hvdyBpdCFcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2VjcmV0KCkge1xyXG4gICAgaWYgKHNob3dTZWNyZXQpIHtcclxuICAgICAgICBzZWNyZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlY3JldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/dom-loader.js":
/*!******************************!*\
  !*** ./src/js/dom-loader.js ***!
  \******************************/
/*! exports provided: secretButton, secret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secretButton\", function() { return secretButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secret\", function() { return secret; });\nvar secretButton = document.querySelector('#secret-button');\r\nvar secret = document.querySelector('#secret');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZG9tLWxvYWRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9kb20tbG9hZGVyLmpzPzlhMGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBzZWNyZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VjcmV0LWJ1dHRvbicpO1xyXG5leHBvcnQgdmFyIHNlY3JldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWNyZXQnKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/dom-loader.js\n");

/***/ })

/******/ });