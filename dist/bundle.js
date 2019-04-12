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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mass.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/palette/palette.js":
/*!***********************************!*\
  !*** ./assets/palette/palette.js ***!
  \***********************************/
/*! exports provided: RED, PINK, BRIGHT_PURPLE, DARK_PURPLE, BLUE, LIGHT_BLUE, TEAL, GREEN, BRIGHT_GREEN, ORANGE, GOLD, DARK_ORANGE, COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RED\", function() { return RED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PINK\", function() { return PINK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BRIGHT_PURPLE\", function() { return BRIGHT_PURPLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DARK_PURPLE\", function() { return DARK_PURPLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BLUE\", function() { return BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIGHT_BLUE\", function() { return LIGHT_BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEAL\", function() { return TEAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GREEN\", function() { return GREEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BRIGHT_GREEN\", function() { return BRIGHT_GREEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORANGE\", function() { return ORANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GOLD\", function() { return GOLD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DARK_ORANGE\", function() { return DARK_ORANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLORS\", function() { return COLORS; });\nconst RED = \"#FF243D\";\nconst PINK = \"#EB23A5\";\nconst BRIGHT_PURPLE = \"#EB36FF\"; \nconst DARK_PURPLE = \"#9A1CEB\";\nconst BLUE = \"#6723FF\";\nconst LIGHT_BLUE =\"#19D1FF\";\nconst TEAL = \"#17E8DA\";\nconst GREEN = \"#0CE846\";\nconst BRIGHT_GREEN = \"#12FF0D\";\nconst ORANGE = \"#FF9D0E\";\nconst GOLD = \"#FFCC00\";\nconst DARK_ORANGE = \"#FF5100\"\n\nconst COLORS = \n    [ \n        RED, PINK, BRIGHT_PURPLE, \n        DARK_PURPLE, BLUE, LIGHT_BLUE, \n        TEAL, GREEN, BRIGHT_GREEN, \n        ORANGE, GOLD, DARK_ORANGE \n    ];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFsZXR0ZS9wYWxldHRlLmpzP2I5MDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ0E7QUFDQSxnQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2Fzc2V0cy9wYWxldHRlL3BhbGV0dGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUkVEID0gXCIjRkYyNDNEXCI7XG5leHBvcnQgY29uc3QgUElOSyA9IFwiI0VCMjNBNVwiO1xuZXhwb3J0IGNvbnN0IEJSSUdIVF9QVVJQTEUgPSBcIiNFQjM2RkZcIjsgXG5leHBvcnQgY29uc3QgREFSS19QVVJQTEUgPSBcIiM5QTFDRUJcIjtcbmV4cG9ydCBjb25zdCBCTFVFID0gXCIjNjcyM0ZGXCI7XG5leHBvcnQgY29uc3QgTElHSFRfQkxVRSA9XCIjMTlEMUZGXCI7XG5leHBvcnQgY29uc3QgVEVBTCA9IFwiIzE3RThEQVwiO1xuZXhwb3J0IGNvbnN0IEdSRUVOID0gXCIjMENFODQ2XCI7XG5leHBvcnQgY29uc3QgQlJJR0hUX0dSRUVOID0gXCIjMTJGRjBEXCI7XG5leHBvcnQgY29uc3QgT1JBTkdFID0gXCIjRkY5RDBFXCI7XG5leHBvcnQgY29uc3QgR09MRCA9IFwiI0ZGQ0MwMFwiO1xuZXhwb3J0IGNvbnN0IERBUktfT1JBTkdFID0gXCIjRkY1MTAwXCJcblxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IFxuICAgIFsgXG4gICAgICAgIFJFRCwgUElOSywgQlJJR0hUX1BVUlBMRSwgXG4gICAgICAgIERBUktfUFVSUExFLCBCTFVFLCBMSUdIVF9CTFVFLCBcbiAgICAgICAgVEVBTCwgR1JFRU4sIEJSSUdIVF9HUkVFTiwgXG4gICAgICAgIE9SQU5HRSwgR09MRCwgREFSS19PUkFOR0UgXG4gICAgXTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/palette/palette.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\n// const Matter = require('./matter');\n\nclass Game {\n    constructor(height, width, context) {\n        this.players = [];\n        this.matter = [];\n        this.height = height;\n        this.width = width;\n        this.context = context;\n        this.dpi = window.devicePixelRatio;\n\n        // this.addMatter();\n\n        this.fix_dpi = this.fix_dpi.bind(this);\n        this.player = new Player(height, width, this.context);\n        this.draw = this.draw.bind(this);\n    }\n\n    fix_dpi() {\n        let style = {\n            height() {\n                return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);\n            },\n            width() {\n                return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);\n            }\n        }\n\n        canvas.setAttribute('width', style.width() * this.dpi);\n        canvas.setAttribute('height', style.height() * this.dpi);\n    }\n\n\n    draw() {\n    \n        this.fix_dpi();\n        this.context.clearRect(0, 0, this.width, this.height);\n        \n        this.player.draw();\n        this.context.save();\n        this.context.restore();\n\n        requestAnimationFrame(this.draw);\n       \n    }\n\n\n\n\n\n}\n\n\n\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcz83ZGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOzs7OztBQUtBIiwiZmlsZSI6Ii4vc3JjL2dhbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuLy8gY29uc3QgTWF0dGVyID0gcmVxdWlyZSgnLi9tYXR0ZXInKTtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCwgY29udGV4dCkge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXR0ZXIgPSBbXTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5kcGkgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgICAgICAvLyB0aGlzLmFkZE1hdHRlcigpO1xuXG4gICAgICAgIHRoaXMuZml4X2RwaSA9IHRoaXMuZml4X2RwaS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoaGVpZ2h0LCB3aWR0aCwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZml4X2RwaSgpIHtcbiAgICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICAgICAgaGVpZ2h0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiArZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnNsaWNlKDAsIC0yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gK2dldENvbXB1dGVkU3R5bGUoY2FudmFzKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnNsaWNlKDAsIC0yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgc3R5bGUud2lkdGgoKSAqIHRoaXMuZHBpKTtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgc3R5bGUuaGVpZ2h0KCkgKiB0aGlzLmRwaSk7XG4gICAgfVxuXG5cbiAgICBkcmF3KCkge1xuICAgIFxuICAgICAgICB0aGlzLmZpeF9kcGkoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdyk7XG4gICAgICAgXG4gICAgfVxuXG5cblxuXG5cbn1cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/mass.js":
/*!*********************!*\
  !*** ./src/mass.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst View = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById('canvas'),\n    context = canvas.getContext('2d'),\n    dpi = window.devicePixelRatio;\n\n    let style = {\n        height() {\n            return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);\n        },\n        width() {\n            return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);\n        }\n    }\n\n    canvas.setAttribute('width', style.width() * dpi);\n    canvas.setAttribute('height', style.height() * dpi);\n    \n    height = canvas.height;\n    width = canvas.width;\n\n    const game = new Game(height, width, context);\n    new View(game, height, width, context);\n    game.draw();\n\n});\n\n// export const canvas;\n// export const context;\n// export const game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFzcy5qcz8yMGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QixhQUFhLG1CQUFPLENBQUMsNkJBQVE7Ozs7QUFJN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvbWFzcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9nYW1lXCIpO1xuY29uc3QgVmlldyA9IHJlcXVpcmUoXCIuL3ZpZXdcIik7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSxcbiAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgZHBpID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgIGhlaWdodCgpIHtcbiAgICAgICAgICAgIHJldHVybiArZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnNsaWNlKDAsIC0yKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gK2dldENvbXB1dGVkU3R5bGUoY2FudmFzKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnNsaWNlKDAsIC0yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgc3R5bGUud2lkdGgoKSAqIGRwaSk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgc3R5bGUuaGVpZ2h0KCkgKiBkcGkpO1xuICAgIFxuICAgIGhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgd2lkdGggPSBjYW52YXMud2lkdGg7XG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoaGVpZ2h0LCB3aWR0aCwgY29udGV4dCk7XG4gICAgbmV3IFZpZXcoZ2FtZSwgaGVpZ2h0LCB3aWR0aCwgY29udGV4dCk7XG4gICAgZ2FtZS5kcmF3KCk7XG5cbn0pO1xuXG4vLyBleHBvcnQgY29uc3QgY2FudmFzO1xuLy8gZXhwb3J0IGNvbnN0IGNvbnRleHQ7XG4vLyBleHBvcnQgY29uc3QgZ2FtZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/mass.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { COLORS } = __webpack_require__(/*! ../assets/palette/palette */ \"./assets/palette/palette.js\");\nconst { Game } = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass Player {\n    constructor(height, width, context) {\n        this.height = height;\n        this.width = width;\n        this.x = width / 2;\n        this.y = height / 2;\n        this.radius = 15;\n\n        this.dx = 10;\n        this.dy = 5;\n\n        this.context = context;\n\n        this.consumed = false;\n        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];\n\n        this.draw = this.draw.bind(this);\n        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);\n\n        document.addEventListener(\"mousemove\", this.mouseMoveHandler, false);\n    }\n\n    mouseMoveHandler(e) {\n        debugger\n        this.x = e.clientX * 2;\n        this.y = e.clientY * 2;\n        debugger\n        // this.draw();\n        // if (relativeX > 0 && relativeX < this.width) {\n        //     this.x = relativeX - this.radius / 2;\n        // }\n\n        // let relativeY = e.clientY;\n        // if (relativeY > 0 && relativeY < this.height) {\n        //     this.y = relativeY - this.radius / 2;\n        // }\n    }\n\n    draw() {\n        this.context.fillStyle = this.color;\n        this.context.beginPath();\n        this.context.arc(\n            this.x, this.y,\n            this.radius, 0, Math.PI * 2,\n        );\n        this.context.closePath();\n        this.context.fill();\n\n\n        // want to increment x by dx\n        // this.x += 10;\n        // this.y += 2 ;\n\n\n        // UP\n        // if (this.y + -this.dy < this.radius) {\n        //     // hit top border and keep this.y @ radius/2;\n        //     this.y = this.radius/2;\n        // } else {\n        //     // otherwise, travel up at @mouse vector\n        //     this.y += -this.dy;\n        // }\n\n\n        // DOWN\n        // if (this.y + this.dy > this.height - (this.radius / 2)) {\n        //     // hit bottom border and keep this.y @ this.height + some portion of the radius;\n        //     this.y = this.height - (this.radius / 2);\n        // } else {\n        //     // otherwise, travel y @ the mouse vector\n        //     this.y += this.dy;\n        // }\n\n\n        // RIGHT\n        // if (this.x + this.dx > (this.width - this.radius / 2)) {\n        //     this.x = this.width - (this.radius / 2);\n        // } else {\n        //     this.x += this.dx;\n        // }\n\n\n        // LEFT\n        // if (this.x + -this.dx < this.radius) {\n        //     this.x = (this.radius / 2);\n        // } else {\n        //     this.x += -this.dx;\n        // }\n    }\n\n    \n}\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLEdBQUcsbUJBQU8sQ0FBQyw4REFBMkI7QUFDdEQsT0FBTyxPQUFPLEdBQUcsbUJBQU8sQ0FBQyw2QkFBUTs7O0FBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEiLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBDT0xPUlMgfSA9IHJlcXVpcmUoXCIuLi9hc3NldHMvcGFsZXR0ZS9wYWxldHRlXCIpO1xuY29uc3QgeyBHYW1lIH0gPSByZXF1aXJlKFwiLi9nYW1lXCIpO1xuXG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCwgY29udGV4dCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLnggPSB3aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IGhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMucmFkaXVzID0gMTU7XG5cbiAgICAgICAgdGhpcy5keCA9IDEwO1xuICAgICAgICB0aGlzLmR5ID0gNTtcblxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgICAgIHRoaXMuY29uc3VtZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IENPTE9SU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDT0xPUlMubGVuZ3RoKV07XG5cbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgbW91c2VNb3ZlSGFuZGxlcihlKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMueCA9IGUuY2xpZW50WCAqIDI7XG4gICAgICAgIHRoaXMueSA9IGUuY2xpZW50WSAqIDI7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIC8vIHRoaXMuZHJhdygpO1xuICAgICAgICAvLyBpZiAocmVsYXRpdmVYID4gMCAmJiByZWxhdGl2ZVggPCB0aGlzLndpZHRoKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnggPSByZWxhdGl2ZVggLSB0aGlzLnJhZGl1cyAvIDI7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBsZXQgcmVsYXRpdmVZID0gZS5jbGllbnRZO1xuICAgICAgICAvLyBpZiAocmVsYXRpdmVZID4gMCAmJiByZWxhdGl2ZVkgPCB0aGlzLmhlaWdodCkge1xuICAgICAgICAvLyAgICAgdGhpcy55ID0gcmVsYXRpdmVZIC0gdGhpcy5yYWRpdXMgLyAyO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhcbiAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG5cblxuICAgICAgICAvLyB3YW50IHRvIGluY3JlbWVudCB4IGJ5IGR4XG4gICAgICAgIC8vIHRoaXMueCArPSAxMDtcbiAgICAgICAgLy8gdGhpcy55ICs9IDIgO1xuXG5cbiAgICAgICAgLy8gVVBcbiAgICAgICAgLy8gaWYgKHRoaXMueSArIC10aGlzLmR5IDwgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgLy8gICAgIC8vIGhpdCB0b3AgYm9yZGVyIGFuZCBrZWVwIHRoaXMueSBAIHJhZGl1cy8yO1xuICAgICAgICAvLyAgICAgdGhpcy55ID0gdGhpcy5yYWRpdXMvMjtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIC8vIG90aGVyd2lzZSwgdHJhdmVsIHVwIGF0IEBtb3VzZSB2ZWN0b3JcbiAgICAgICAgLy8gICAgIHRoaXMueSArPSAtdGhpcy5keTtcbiAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgLy8gRE9XTlxuICAgICAgICAvLyBpZiAodGhpcy55ICsgdGhpcy5keSA+IHRoaXMuaGVpZ2h0IC0gKHRoaXMucmFkaXVzIC8gMikpIHtcbiAgICAgICAgLy8gICAgIC8vIGhpdCBib3R0b20gYm9yZGVyIGFuZCBrZWVwIHRoaXMueSBAIHRoaXMuaGVpZ2h0ICsgc29tZSBwb3J0aW9uIG9mIHRoZSByYWRpdXM7XG4gICAgICAgIC8vICAgICB0aGlzLnkgPSB0aGlzLmhlaWdodCAtICh0aGlzLnJhZGl1cyAvIDIpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgLy8gb3RoZXJ3aXNlLCB0cmF2ZWwgeSBAIHRoZSBtb3VzZSB2ZWN0b3JcbiAgICAgICAgLy8gICAgIHRoaXMueSArPSB0aGlzLmR5O1xuICAgICAgICAvLyB9XG5cblxuICAgICAgICAvLyBSSUdIVFxuICAgICAgICAvLyBpZiAodGhpcy54ICsgdGhpcy5keCA+ICh0aGlzLndpZHRoIC0gdGhpcy5yYWRpdXMgLyAyKSkge1xuICAgICAgICAvLyAgICAgdGhpcy54ID0gdGhpcy53aWR0aCAtICh0aGlzLnJhZGl1cyAvIDIpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy54ICs9IHRoaXMuZHg7XG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIC8vIExFRlRcbiAgICAgICAgLy8gaWYgKHRoaXMueCArIC10aGlzLmR4IDwgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgLy8gICAgIHRoaXMueCA9ICh0aGlzLnJhZGl1cyAvIDIpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy54ICs9IC10aGlzLmR4O1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import { player } from './mass';\n\n\n\nclass View {\n    constructor(game, canvas, ctx) {\n        this.game = game;\n        this.canvas = canvas;\n        this.ctx = ctx;\n\n        // this.player = this.game.addPlayer();\n    }\n\n    // DOM EVENTS \n    //     - Mouse Tracking\n    //     - Animate?\n    //     - Start?\n    //     - Zoom Out?\n\n}\n\nmodule.exports = View;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy5qcz9mMDc4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsU0FBUzs7OztBQUlwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiIuL3NyYy92aWV3LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi9tYXNzJztcblxuXG5cbmNsYXNzIFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICAvLyB0aGlzLnBsYXllciA9IHRoaXMuZ2FtZS5hZGRQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICAvLyBET00gRVZFTlRTIFxuICAgIC8vICAgICAtIE1vdXNlIFRyYWNraW5nXG4gICAgLy8gICAgIC0gQW5pbWF0ZT9cbiAgICAvLyAgICAgLSBTdGFydD9cbiAgICAvLyAgICAgLSBab29tIE91dD9cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/view.js\n");

/***/ })

/******/ });