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
/*! exports provided: RED, PINK, BRIGHT_PURPLE, DARK_PURPLE, BLUE, COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RED\", function() { return RED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PINK\", function() { return PINK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BRIGHT_PURPLE\", function() { return BRIGHT_PURPLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DARK_PURPLE\", function() { return DARK_PURPLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BLUE\", function() { return BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLORS\", function() { return COLORS; });\nconst RED = \"#FF243D\";\nconst PINK = \"#EB23A5\";\nconst BRIGHT_PURPLE = \"#EB36FF\"; \nconst DARK_PURPLE = \"#9A1CEB\";\nconst BLUE = \"#6723FF\";\n\nconst COLORS = [ RED, PINK, BRIGHT_PURPLE, DARK_PURPLE, BLUE ];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFsZXR0ZS9wYWxldHRlLmpzP2I5MDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNBO0FBQ0EsZ0M7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vYXNzZXRzL3BhbGV0dGUvcGFsZXR0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBSRUQgPSBcIiNGRjI0M0RcIjtcbmV4cG9ydCBjb25zdCBQSU5LID0gXCIjRUIyM0E1XCI7XG5leHBvcnQgY29uc3QgQlJJR0hUX1BVUlBMRSA9IFwiI0VCMzZGRlwiOyBcbmV4cG9ydCBjb25zdCBEQVJLX1BVUlBMRSA9IFwiIzlBMUNFQlwiO1xuZXhwb3J0IGNvbnN0IEJMVUUgPSBcIiM2NzIzRkZcIjtcblxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IFsgUkVELCBQSU5LLCBCUklHSFRfUFVSUExFLCBEQVJLX1BVUlBMRSwgQkxVRSBdOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/palette/palette.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\n// const Matter = require('./matter');\n\nclass Game {\n    constructor(height, width, context) {\n        debugger\n        this.players = [];\n        this.matter = [];\n        this.height = height;\n        this.width = width;\n        this.context = context;\n        this.dpi = window.devicePixelRatio;\n\n        // this.addMatter();\n        // this.draw = this.draw.bind(this);\n        this.fix_dpi = this.fix_dpi.bind(this);\n        this.player = new Player(height, width, this.context);\n        this.draw = this.draw.bind(this);\n    }\n\n    fix_dpi() {\n        debugger\n        let style = {\n            height() {\n                return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);\n            },\n            width() {\n                return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);\n            }\n        }\n\n        canvas.setAttribute('width', style.width() * this.dpi);\n        canvas.setAttribute('height', style.height() * this.dpi);\n    }\n\n    // eventually will clear the canvas and draw everything\n    draw() {\n        debugger\n        this.fix_dpi();\n        this.context.clearRect(0, 0, this.width, this.height);\n        \n        this.player.draw();\n\n        debugger\n        //call the dpi fix every time\n        //canvas is redrawn\n\n        ///\n\n        // this.context.beginPath();\n        // this.context.arc(\n        //     canvas.width / 2,\n        //     canvas.height / 2, \n        //     40, 0, Math.PI * 2,  \n        // );\n        // this.context.closePath();\n        // this.context.fillStyle = \"#9A1CEB\"\n        // this.context.fill();\n\n        ///\n\n        requestAnimationFrame(this.draw);\n    }\n\n    // requestAnimationFrame(draw);\n\n\n\n\n}\n\n\n\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcz83ZGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7OztBQUtBOzs7OztBQUtBIiwiZmlsZSI6Ii4vc3JjL2dhbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuLy8gY29uc3QgTWF0dGVyID0gcmVxdWlyZSgnLi9tYXR0ZXInKTtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCwgY29udGV4dCkge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXR0ZXIgPSBbXTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5kcGkgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgICAgICAvLyB0aGlzLmFkZE1hdHRlcigpO1xuICAgICAgICAvLyB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5maXhfZHBpID0gdGhpcy5maXhfZHBpLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihoZWlnaHQsIHdpZHRoLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBmaXhfZHBpKCkge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICtnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiArZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykuc2xpY2UoMCwgLTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBzdHlsZS53aWR0aCgpICogdGhpcy5kcGkpO1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzdHlsZS5oZWlnaHQoKSAqIHRoaXMuZHBpKTtcbiAgICB9XG5cbiAgICAvLyBldmVudHVhbGx5IHdpbGwgY2xlYXIgdGhlIGNhbnZhcyBhbmQgZHJhdyBldmVyeXRoaW5nXG4gICAgZHJhdygpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5maXhfZHBpKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIC8vY2FsbCB0aGUgZHBpIGZpeCBldmVyeSB0aW1lXG4gICAgICAgIC8vY2FudmFzIGlzIHJlZHJhd25cblxuICAgICAgICAvLy9cblxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5hcmMoXG4gICAgICAgIC8vICAgICBjYW52YXMud2lkdGggLyAyLFxuICAgICAgICAvLyAgICAgY2FudmFzLmhlaWdodCAvIDIsIFxuICAgICAgICAvLyAgICAgNDAsIDAsIE1hdGguUEkgKiAyLCAgXG4gICAgICAgIC8vICk7XG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiIzlBMUNFQlwiXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5maWxsKCk7XG5cbiAgICAgICAgLy8vXG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdyk7XG4gICAgfVxuXG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuXG5cblxuXG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/mass.js":
/*!*********************!*\
  !*** ./src/mass.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst View = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById('canvas'),\n    context = canvas.getContext('2d'),\n    dpi = window.devicePixelRatio;\n\n    let style = {\n        height() {\n            return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);\n        },\n        width() {\n            return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);\n        }\n    }\n\n    canvas.setAttribute('width', style.width() * dpi);\n    canvas.setAttribute('height', style.height() * dpi);\n    \n    height = canvas.height;\n    width = canvas.width;\n\n    const game = new Game(height, width, context);\n    new View(game, height, width, context);\n    game.draw();\n\n    debugger\n});\n\n// export const canvas;\n// export const context;\n// export const game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFzcy5qcz8yMGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QixhQUFhLG1CQUFPLENBQUMsNkJBQVE7Ozs7QUFJN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9tYXNzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL2dhbWVcIik7XG5jb25zdCBWaWV3ID0gcmVxdWlyZShcIi4vdmlld1wiKTtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLFxuICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICBkcGkgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgaGVpZ2h0KCkge1xuICAgICAgICAgICAgcmV0dXJuICtnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpO1xuICAgICAgICB9LFxuICAgICAgICB3aWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiArZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykuc2xpY2UoMCwgLTIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBzdHlsZS53aWR0aCgpICogZHBpKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzdHlsZS5oZWlnaHQoKSAqIGRwaSk7XG4gICAgXG4gICAgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICB3aWR0aCA9IGNhbnZhcy53aWR0aDtcblxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShoZWlnaHQsIHdpZHRoLCBjb250ZXh0KTtcbiAgICBuZXcgVmlldyhnYW1lLCBoZWlnaHQsIHdpZHRoLCBjb250ZXh0KTtcbiAgICBnYW1lLmRyYXcoKTtcblxuICAgIGRlYnVnZ2VyXG59KTtcblxuLy8gZXhwb3J0IGNvbnN0IGNhbnZhcztcbi8vIGV4cG9ydCBjb25zdCBjb250ZXh0O1xuLy8gZXhwb3J0IGNvbnN0IGdhbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mass.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { COLORS } = __webpack_require__(/*! ../assets/palette/palette */ \"./assets/palette/palette.js\");\nconst { Game } = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass Player {\n    constructor(height, width, context) {\n        debugger\n        this.height = height;\n        this.width = width;\n        this.x = width / 2;\n        this.y = height / 2;\n        this.context = context;\n        this.radius = 10;\n        this.consumed = false;\n        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];\n        this.draw = this.draw.bind(this);\n        // this.fix_dpi = this.fix_dpi.bind(this);\n        debugger\n    }\n\n    // fix_dpi() {\n    //     debugger\n    //     let style = {\n    //         height() {\n    //             return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);\n    //         },\n    //         width() {\n    //             return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);\n    //         }\n    //     }\n\n    //     canvas.setAttribute('width', style.width() * this.dpi);\n    //     canvas.setAttribute('height', style.height() * this.dpi);\n    // }\n\n    draw() {\n        debugger\n        // this.fix_dpi();\n        this.context.fillStyle = this.color;\n        this.context.beginPath();\n        this.context.arc(\n            this.x, this.y,\n            this.radius, 0, Math.PI * 2,\n        );\n        this.context.closePath();\n        this.context.fill();\n    }\n\n    \n}\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLEdBQUcsbUJBQU8sQ0FBQyw4REFBMkI7QUFDdEQsT0FBTyxPQUFPLEdBQUcsbUJBQU8sQ0FBQyw2QkFBUTs7O0FBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBIiwiZmlsZSI6Ii4vc3JjL3BsYXllci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ09MT1JTIH0gPSByZXF1aXJlKFwiLi4vYXNzZXRzL3BhbGV0dGUvcGFsZXR0ZVwiKTtcbmNvbnN0IHsgR2FtZSB9ID0gcmVxdWlyZShcIi4vZ2FtZVwiKTtcblxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGhlaWdodCwgd2lkdGgsIGNvbnRleHQpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy54ID0gd2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgPSBoZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDEwO1xuICAgICAgICB0aGlzLmNvbnN1bWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBDT0xPUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ09MT1JTLmxlbmd0aCldO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5maXhfZHBpID0gdGhpcy5maXhfZHBpLmJpbmQodGhpcyk7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgLy8gZml4X2RwaSgpIHtcbiAgICAvLyAgICAgZGVidWdnZXJcbiAgICAvLyAgICAgbGV0IHN0eWxlID0ge1xuICAgIC8vICAgICAgICAgaGVpZ2h0KCkge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiArZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnNsaWNlKDAsIC0yKTtcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB3aWR0aCgpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gK2dldENvbXB1dGVkU3R5bGUoY2FudmFzKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnNsaWNlKDAsIC0yKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgc3R5bGUud2lkdGgoKSAqIHRoaXMuZHBpKTtcbiAgICAvLyAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgc3R5bGUuaGVpZ2h0KCkgKiB0aGlzLmRwaSk7XG4gICAgLy8gfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgLy8gdGhpcy5maXhfZHBpKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoXG4gICAgICAgICAgICB0aGlzLngsIHRoaXMueSxcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMixcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgIH1cblxuICAgIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/player.js\n");

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