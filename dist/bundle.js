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

eval("const Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\n// const Matter = require('./matter');\n\nclass Game {\n    constructor(height, width, context, dpi) {\n        this.players = [];\n        this.matter = [];\n        this.height = height;\n        this.width = width;\n        this.context = context;\n        this.dpi = dpi;\n\n        // this.addMatter();\n\n        this.fix_dpi = this.fix_dpi.bind(this);\n        this.player = new Player(height, width, this.context, this.dpi);\n        this.draw = this.draw.bind(this);\n    }\n\n    fix_dpi() {\n        let style = {\n            height() {\n                return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);\n            },\n            width() {\n                return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);\n            }\n        }\n\n        canvas.setAttribute('width', style.width() * this.dpi);\n        canvas.setAttribute('height', style.height() * this.dpi);\n    }\n\n\n    draw() {\n        this.fix_dpi();\n        this.context.clearRect(0, 0, this.width, this.height);\n        \n        this.player.draw();\n\n        requestAnimationFrame(this.draw);\n    }\n\n\n\n\n\n}\n\n\n\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcz83ZGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7OztBQU1BOzs7OztBQUtBIiwiZmlsZSI6Ii4vc3JjL2dhbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuLy8gY29uc3QgTWF0dGVyID0gcmVxdWlyZSgnLi9tYXR0ZXInKTtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCwgY29udGV4dCwgZHBpKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLm1hdHRlciA9IFtdO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmRwaSA9IGRwaTtcblxuICAgICAgICAvLyB0aGlzLmFkZE1hdHRlcigpO1xuXG4gICAgICAgIHRoaXMuZml4X2RwaSA9IHRoaXMuZml4X2RwaS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoaGVpZ2h0LCB3aWR0aCwgdGhpcy5jb250ZXh0LCB0aGlzLmRwaSk7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGZpeF9kcGkoKSB7XG4gICAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgICAgIGhlaWdodCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gK2dldENvbXB1dGVkU3R5bGUoY2FudmFzKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKS5zbGljZSgwLCAtMik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGgoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICtnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKS5zbGljZSgwLCAtMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHN0eWxlLndpZHRoKCkgKiB0aGlzLmRwaSk7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHN0eWxlLmhlaWdodCgpICogdGhpcy5kcGkpO1xuICAgIH1cblxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5maXhfZHBpKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpO1xuICAgIH1cblxuXG5cblxuXG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/mass.js":
/*!*********************!*\
  !*** ./src/mass.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst View = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById('canvas'),\n    context = canvas.getContext('2d'),\n    dpi = window.devicePixelRatio;\n\n    let style = {\n        height() {\n            return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);\n        },\n        width() {\n            return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);\n        }\n    }\n\n    canvas.setAttribute('width', style.width() * dpi);\n    canvas.setAttribute('height', style.height() * dpi);\n    \n    height = canvas.height;\n    width = canvas.width;\n\n    const game = new Game(height, width, context, dpi);\n    new View(game, height, width, context, dpi);\n    game.draw();\n\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFzcy5qcz8yMGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QixhQUFhLG1CQUFPLENBQUMsNkJBQVE7Ozs7QUFJN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiIuL3NyYy9tYXNzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL2dhbWVcIik7XG5jb25zdCBWaWV3ID0gcmVxdWlyZShcIi4vdmlld1wiKTtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLFxuICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICBkcGkgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgaGVpZ2h0KCkge1xuICAgICAgICAgICAgcmV0dXJuICtnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpO1xuICAgICAgICB9LFxuICAgICAgICB3aWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiArZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykuc2xpY2UoMCwgLTIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBzdHlsZS53aWR0aCgpICogZHBpKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzdHlsZS5oZWlnaHQoKSAqIGRwaSk7XG4gICAgXG4gICAgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICB3aWR0aCA9IGNhbnZhcy53aWR0aDtcblxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShoZWlnaHQsIHdpZHRoLCBjb250ZXh0LCBkcGkpO1xuICAgIG5ldyBWaWV3KGdhbWUsIGhlaWdodCwgd2lkdGgsIGNvbnRleHQsIGRwaSk7XG4gICAgZ2FtZS5kcmF3KCk7XG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mass.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { COLORS } = __webpack_require__(/*! ../assets/palette/palette */ \"./assets/palette/palette.js\");\nconst { Game } = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass Player {\n    constructor(height, width, context, dpi) {\n        this.dpi = dpi;\n        this.height = height;\n        this.width = width;\n        this.x = width / 2;\n        this.y = height / 2;\n        this.radius = 15;\n\n        this.dx = 0.5;\n        this.dy = 0.5;\n        this.speed = [this.dx, this.dy];\n\n        this.context = context;\n\n        this.consumed = false;\n        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];\n\n        this.draw = this.draw.bind(this);\n        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);\n        // this.move = this.move.bind(this);\n\n        document.addEventListener(\"mousemove\", this.mouseMoveHandler, false);\n    }\n\n    mouseMoveHandler(e) {\n        debugger\n        let currentPos = [this.x, this.y];\n        let mousePos = [e.clientX * this.dpi, e.clientY * this.dpi];\n        const middle = [this.width / 2, this.height / 2];\n\n        let xDistance;\n        let yDistance;\n        \n        let distanceArray = [xDistance, yDistance];\n\n        for (let idx = 0; idx < 2; idx += 1) {\n            if (mousePos[idx] < middle[idx]) {\n                distanceArray[idx] = mousePos[idx] - currentPos[idx];\n            } else if (mousePos[idx] > middle[idx]) {\n                distanceArray[idx] = mousePos[idx] - currentPos[idx];\n            } else {\n                distanceArray[idx] = 0;\n            }\n        }\n\n        // let xDistance = mousePos[0] - this.x;\n        // let yDistance = mousePos[1] - this.y;\n\n        let distance = Math.sqrt(distanceArray[0] * distanceArray[0] + distanceArray[1] * distanceArray[1]);\n\n        if (distance > 1) {\n            this.x += distanceArray[0] * this.dx;\n            this.y += distanceArray[1] * this.dy;\n        }\n    \n    }\n\n    // mouseMoveHandler(e) {\n    //     const speed = [this.dx, this.dy];\n    //     let currentPos = [this.x, this.y];\n    //     let mousePos = [e.clientX * this.dpi, e.clientY * this.dpi];\n\n    //     debugger\n\n    //     let nextPos = [];\n\n    //     for (let idx = 0; idx < 2; idx += 1) {\n    //         if (currentPos[idx] < mousePos[idx]) {\n    //             nextPos[idx] = currentPos[idx] + speed[idx];\n    //         } else if (currentPos[idx] > mousePos[idx]) {\n    //             nextPos[idx] = currentPos[idx] - speed[idx];\n    //         } else {\n    //             nextPos[idx] = currentPos[idx];\n    //         }\n    //     }\n\n    //     this.x = nextPos[0];\n    //     this.y = nextPos[1];\n\n    //     debugger\n    // }\n\n//     move() {\n//         let xDistance = (e.clientX * this.dpi) - this.x;\n//         let yDistance = (e.clientY * this.dpi) - this.y;\n//         let distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);\n\n//         if (distance > 1) {\n//             this.x += xDistance * easingAmount;\n//             this.y += yDistance * easingAmount;\n//         }\n// }\n\n\n\n    draw() {\n        this.context.fillStyle = this.color;\n        this.context.beginPath();\n        this.context.arc(\n            this.x, this.y,\n            this.radius, 0, Math.PI * 2,\n        );\n        this.context.closePath();\n        this.context.fill();\n    \n\n\n        // UP\n        // if (this.y + -this.dy < this.radius) {\n        //     // hit top border and keep this.y @ radius/2;\n        //     this.y = this.radius/2;\n        // } else {\n        //     // otherwise, travel up at @mouse vector\n        //     this.y += -this.dy;\n        // }\n\n\n        // DOWN\n        // if (this.y + this.dy > this.height - (this.radius / 2)) {\n        //     // hit bottom border and keep this.y @ this.height + some portion of the radius;\n        //     this.y = this.height - (this.radius / 2);\n        // } else {\n        //     // otherwise, travel y @ the mouse vector\n        //     this.y += this.dy;\n        // }\n\n\n        // RIGHT\n        // if (this.x + this.dx > (this.width - this.radius / 2)) {\n        //     this.x = this.width - (this.radius / 2);\n        // } else {\n        //     this.x += this.dx;\n        // }\n\n\n        // LEFT\n        // if (this.x + -this.dx < this.radius) {\n        //     this.x = (this.radius / 2);\n        // } else {\n        //     this.x += -this.dx;\n        // }\n    }\n\n    \n}\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLEdBQUcsbUJBQU8sQ0FBQyw4REFBMkI7QUFDdEQsT0FBTyxPQUFPLEdBQUcsbUJBQU8sQ0FBQyw2QkFBUTs7O0FBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7OztBQUdBOztBQUVBIiwiZmlsZSI6Ii4vc3JjL3BsYXllci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ09MT1JTIH0gPSByZXF1aXJlKFwiLi4vYXNzZXRzL3BhbGV0dGUvcGFsZXR0ZVwiKTtcbmNvbnN0IHsgR2FtZSB9ID0gcmVxdWlyZShcIi4vZ2FtZVwiKTtcblxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGhlaWdodCwgd2lkdGgsIGNvbnRleHQsIGRwaSkge1xuICAgICAgICB0aGlzLmRwaSA9IGRwaTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy54ID0gd2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgPSBoZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDE1O1xuXG4gICAgICAgIHRoaXMuZHggPSAwLjU7XG4gICAgICAgIHRoaXMuZHkgPSAwLjU7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBbdGhpcy5keCwgdGhpcy5keV07XG5cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgICB0aGlzLmNvbnN1bWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBDT0xPUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ09MT1JTLmxlbmd0aCldO1xuXG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSBbdGhpcy54LCB0aGlzLnldO1xuICAgICAgICBsZXQgbW91c2VQb3MgPSBbZS5jbGllbnRYICogdGhpcy5kcGksIGUuY2xpZW50WSAqIHRoaXMuZHBpXTtcbiAgICAgICAgY29uc3QgbWlkZGxlID0gW3RoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDJdO1xuXG4gICAgICAgIGxldCB4RGlzdGFuY2U7XG4gICAgICAgIGxldCB5RGlzdGFuY2U7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGlzdGFuY2VBcnJheSA9IFt4RGlzdGFuY2UsIHlEaXN0YW5jZV07XG5cbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgMjsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChtb3VzZVBvc1tpZHhdIDwgbWlkZGxlW2lkeF0pIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZUFycmF5W2lkeF0gPSBtb3VzZVBvc1tpZHhdIC0gY3VycmVudFBvc1tpZHhdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtb3VzZVBvc1tpZHhdID4gbWlkZGxlW2lkeF0pIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZUFycmF5W2lkeF0gPSBtb3VzZVBvc1tpZHhdIC0gY3VycmVudFBvc1tpZHhdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZUFycmF5W2lkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IHhEaXN0YW5jZSA9IG1vdXNlUG9zWzBdIC0gdGhpcy54O1xuICAgICAgICAvLyBsZXQgeURpc3RhbmNlID0gbW91c2VQb3NbMV0gLSB0aGlzLnk7XG5cbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRpc3RhbmNlQXJyYXlbMF0gKiBkaXN0YW5jZUFycmF5WzBdICsgZGlzdGFuY2VBcnJheVsxXSAqIGRpc3RhbmNlQXJyYXlbMV0pO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMueCArPSBkaXN0YW5jZUFycmF5WzBdICogdGhpcy5keDtcbiAgICAgICAgICAgIHRoaXMueSArPSBkaXN0YW5jZUFycmF5WzFdICogdGhpcy5keTtcbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIC8vIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgIC8vICAgICBjb25zdCBzcGVlZCA9IFt0aGlzLmR4LCB0aGlzLmR5XTtcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRQb3MgPSBbdGhpcy54LCB0aGlzLnldO1xuICAgIC8vICAgICBsZXQgbW91c2VQb3MgPSBbZS5jbGllbnRYICogdGhpcy5kcGksIGUuY2xpZW50WSAqIHRoaXMuZHBpXTtcblxuICAgIC8vICAgICBkZWJ1Z2dlclxuXG4gICAgLy8gICAgIGxldCBuZXh0UG9zID0gW107XG5cbiAgICAvLyAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgMjsgaWR4ICs9IDEpIHtcbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50UG9zW2lkeF0gPCBtb3VzZVBvc1tpZHhdKSB7XG4gICAgLy8gICAgICAgICAgICAgbmV4dFBvc1tpZHhdID0gY3VycmVudFBvc1tpZHhdICsgc3BlZWRbaWR4XTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBvc1tpZHhdID4gbW91c2VQb3NbaWR4XSkge1xuICAgIC8vICAgICAgICAgICAgIG5leHRQb3NbaWR4XSA9IGN1cnJlbnRQb3NbaWR4XSAtIHNwZWVkW2lkeF07XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIG5leHRQb3NbaWR4XSA9IGN1cnJlbnRQb3NbaWR4XTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHRoaXMueCA9IG5leHRQb3NbMF07XG4gICAgLy8gICAgIHRoaXMueSA9IG5leHRQb3NbMV07XG5cbiAgICAvLyAgICAgZGVidWdnZXJcbiAgICAvLyB9XG5cbi8vICAgICBtb3ZlKCkge1xuLy8gICAgICAgICBsZXQgeERpc3RhbmNlID0gKGUuY2xpZW50WCAqIHRoaXMuZHBpKSAtIHRoaXMueDtcbi8vICAgICAgICAgbGV0IHlEaXN0YW5jZSA9IChlLmNsaWVudFkgKiB0aGlzLmRwaSkgLSB0aGlzLnk7XG4vLyAgICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCh4RGlzdGFuY2UgKiB4RGlzdGFuY2UgKyB5RGlzdGFuY2UgKiB5RGlzdGFuY2UpO1xuXG4vLyAgICAgICAgIGlmIChkaXN0YW5jZSA+IDEpIHtcbi8vICAgICAgICAgICAgIHRoaXMueCArPSB4RGlzdGFuY2UgKiBlYXNpbmdBbW91bnQ7XG4vLyAgICAgICAgICAgICB0aGlzLnkgKz0geURpc3RhbmNlICogZWFzaW5nQW1vdW50O1xuLy8gICAgICAgICB9XG4vLyB9XG5cblxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhcbiAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG4gICAgXG5cblxuICAgICAgICAvLyBVUFxuICAgICAgICAvLyBpZiAodGhpcy55ICsgLXRoaXMuZHkgPCB0aGlzLnJhZGl1cykge1xuICAgICAgICAvLyAgICAgLy8gaGl0IHRvcCBib3JkZXIgYW5kIGtlZXAgdGhpcy55IEAgcmFkaXVzLzI7XG4gICAgICAgIC8vICAgICB0aGlzLnkgPSB0aGlzLnJhZGl1cy8yO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgLy8gb3RoZXJ3aXNlLCB0cmF2ZWwgdXAgYXQgQG1vdXNlIHZlY3RvclxuICAgICAgICAvLyAgICAgdGhpcy55ICs9IC10aGlzLmR5O1xuICAgICAgICAvLyB9XG5cblxuICAgICAgICAvLyBET1dOXG4gICAgICAgIC8vIGlmICh0aGlzLnkgKyB0aGlzLmR5ID4gdGhpcy5oZWlnaHQgLSAodGhpcy5yYWRpdXMgLyAyKSkge1xuICAgICAgICAvLyAgICAgLy8gaGl0IGJvdHRvbSBib3JkZXIgYW5kIGtlZXAgdGhpcy55IEAgdGhpcy5oZWlnaHQgKyBzb21lIHBvcnRpb24gb2YgdGhlIHJhZGl1cztcbiAgICAgICAgLy8gICAgIHRoaXMueSA9IHRoaXMuaGVpZ2h0IC0gKHRoaXMucmFkaXVzIC8gMik7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAvLyBvdGhlcndpc2UsIHRyYXZlbCB5IEAgdGhlIG1vdXNlIHZlY3RvclxuICAgICAgICAvLyAgICAgdGhpcy55ICs9IHRoaXMuZHk7XG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIC8vIFJJR0hUXG4gICAgICAgIC8vIGlmICh0aGlzLnggKyB0aGlzLmR4ID4gKHRoaXMud2lkdGggLSB0aGlzLnJhZGl1cyAvIDIpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnggPSB0aGlzLndpZHRoIC0gKHRoaXMucmFkaXVzIC8gMik7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgLy8gTEVGVFxuICAgICAgICAvLyBpZiAodGhpcy54ICsgLXRoaXMuZHggPCB0aGlzLnJhZGl1cykge1xuICAgICAgICAvLyAgICAgdGhpcy54ID0gKHRoaXMucmFkaXVzIC8gMik7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLnggKz0gLXRoaXMuZHg7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import { player } from './mass';\n\n\n\nclass View {\n    constructor(game, canvas, ctx, dpi) {\n        this.game = game;\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.dpi = dpi;\n\n        // this.player = this.game.addPlayer();\n    }\n\n    // DOM EVENTS \n    //     - Mouse Tracking\n    //     - Animate?\n    //     - Start?\n    //     - Zoom Out?\n\n}\n\nmodule.exports = View;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy5qcz9mMDc4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsU0FBUzs7OztBQUlwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6Ii4vc3JjL3ZpZXcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBwbGF5ZXIgfSBmcm9tICcuL21hc3MnO1xuXG5cblxuY2xhc3MgVmlldyB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgY2FudmFzLCBjdHgsIGRwaSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZHBpID0gZHBpO1xuXG4gICAgICAgIC8vIHRoaXMucGxheWVyID0gdGhpcy5nYW1lLmFkZFBsYXllcigpO1xuICAgIH1cblxuICAgIC8vIERPTSBFVkVOVFMgXG4gICAgLy8gICAgIC0gTW91c2UgVHJhY2tpbmdcbiAgICAvLyAgICAgLSBBbmltYXRlP1xuICAgIC8vICAgICAtIFN0YXJ0P1xuICAgIC8vICAgICAtIFpvb20gT3V0P1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/view.js\n");

/***/ })

/******/ });