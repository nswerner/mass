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

eval("const Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\nconst Matter = __webpack_require__(/*! ./matter */ \"./src/matter.js\");\nconst { COLORS } = __webpack_require__(/*! ../assets/palette/palette */ \"./assets/palette/palette.js\");\n\nclass Game {\n    constructor(height, width, context, dpi) {\n        this.players = [];\n        this.matter = [];\n        this.height = height;\n        this.width = width;\n        this.context = context;\n        this.dpi = dpi;\n\n        this.createMatter(50);\n\n        this.player = new Player(height, width, this.context, this.dpi);\n        this.fix_dpi = this.fix_dpi.bind(this);\n        this.draw = this.draw.bind(this);\n        this.createMatter = this.createMatter.bind(this);\n    }\n\n    createMatter(n) {\n        for (let idx = 0; idx < n; idx += 1) {\n            let localMatter = new Matter(this.height, this.width, this.context, this.dpi, COLORS[Math.floor(Math.random() * COLORS.length)]);\n            this.matter.push(localMatter);\n        } \n    }\n\n    fix_dpi() {\n        let style = {\n            height() {\n                return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);\n            },\n            width() {\n                return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);\n            }\n        }\n\n        canvas.setAttribute('width', style.width() * this.dpi);\n        canvas.setAttribute('height', style.height() * this.dpi);\n    }\n\n\n    draw() {\n        this.fix_dpi();\n        this.context.clearRect(0, 0, this.width, this.height);\n        \n        let matter;\n        for (let idx = 0; idx < this.matter.length; idx += 1) {\n            matter = this.matter[idx];\n\n            if (matter.isCollidedWith(this.player) === true) {\n                this.matter.splice(idx, 1);\n            } else {\n                matter.draw();\n            }\n        }\n\n        this.player.draw();\n\n        requestAnimationFrame(this.draw);\n    }\n\n\n\n\n\n}\n\n\n\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcz83ZGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQyxlQUFlLG1CQUFPLENBQUMsaUNBQVU7QUFDakMsT0FBTyxTQUFTLEdBQUcsbUJBQU8sQ0FBQyw4REFBMkI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0E7QUFDQSxTO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7OztBQU1BOzs7OztBQUtBIiwiZmlsZSI6Ii4vc3JjL2dhbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuY29uc3QgTWF0dGVyID0gcmVxdWlyZSgnLi9tYXR0ZXInKTtcbmNvbnN0IHsgQ09MT1JTIH0gPSByZXF1aXJlKCcuLi9hc3NldHMvcGFsZXR0ZS9wYWxldHRlJyk7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGhlaWdodCwgd2lkdGgsIGNvbnRleHQsIGRwaSkge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXR0ZXIgPSBbXTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5kcGkgPSBkcGk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVNYXR0ZXIoNTApO1xuXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihoZWlnaHQsIHdpZHRoLCB0aGlzLmNvbnRleHQsIHRoaXMuZHBpKTtcbiAgICAgICAgdGhpcy5maXhfZHBpID0gdGhpcy5maXhfZHBpLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1hdHRlciA9IHRoaXMuY3JlYXRlTWF0dGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlTWF0dGVyKG4pIHtcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbjsgaWR4ICs9IDEpIHtcbiAgICAgICAgICAgIGxldCBsb2NhbE1hdHRlciA9IG5ldyBNYXR0ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMuY29udGV4dCwgdGhpcy5kcGksIENPTE9SU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDT0xPUlMubGVuZ3RoKV0pO1xuICAgICAgICAgICAgdGhpcy5tYXR0ZXIucHVzaChsb2NhbE1hdHRlcik7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgZml4X2RwaSgpIHtcbiAgICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICAgICAgaGVpZ2h0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiArZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnNsaWNlKDAsIC0yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gK2dldENvbXB1dGVkU3R5bGUoY2FudmFzKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnNsaWNlKDAsIC0yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgc3R5bGUud2lkdGgoKSAqIHRoaXMuZHBpKTtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgc3R5bGUuaGVpZ2h0KCkgKiB0aGlzLmRwaSk7XG4gICAgfVxuXG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmZpeF9kcGkoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgbWF0dGVyO1xuICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCB0aGlzLm1hdHRlci5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgICAgICAgICBtYXR0ZXIgPSB0aGlzLm1hdHRlcltpZHhdO1xuXG4gICAgICAgICAgICBpZiAobWF0dGVyLmlzQ29sbGlkZWRXaXRoKHRoaXMucGxheWVyKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0dGVyLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXR0ZXIuZHJhdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpO1xuICAgIH1cblxuXG5cblxuXG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/mass.js":
/*!*********************!*\
  !*** ./src/mass.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst View = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById('canvas'),\n    context = canvas.getContext('2d'),\n    dpi = window.devicePixelRatio;\n\n    let style = {\n        height() {\n            return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);\n        },\n        width() {\n            return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);\n        }\n    }\n\n    canvas.setAttribute('width', style.width() * dpi);\n    canvas.setAttribute('height', style.height() * dpi);\n    \n    height = canvas.height;\n    width = canvas.width;\n\n    const game = new Game(height, width, context, dpi);\n    new View(game, height, width, context, dpi);\n    game.draw();\n\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFzcy5qcz8yMGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QixhQUFhLG1CQUFPLENBQUMsNkJBQVE7Ozs7QUFJN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiIuL3NyYy9tYXNzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL2dhbWVcIik7XG5jb25zdCBWaWV3ID0gcmVxdWlyZShcIi4vdmlld1wiKTtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLFxuICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICBkcGkgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgaGVpZ2h0KCkge1xuICAgICAgICAgICAgcmV0dXJuICtnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpO1xuICAgICAgICB9LFxuICAgICAgICB3aWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiArZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykuc2xpY2UoMCwgLTIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBzdHlsZS53aWR0aCgpICogZHBpKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzdHlsZS5oZWlnaHQoKSAqIGRwaSk7XG4gICAgXG4gICAgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICB3aWR0aCA9IGNhbnZhcy53aWR0aDtcblxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShoZWlnaHQsIHdpZHRoLCBjb250ZXh0LCBkcGkpO1xuICAgIG5ldyBWaWV3KGdhbWUsIGhlaWdodCwgd2lkdGgsIGNvbnRleHQsIGRwaSk7XG4gICAgZ2FtZS5kcmF3KCk7XG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mass.js\n");

/***/ }),

/***/ "./src/matter.js":
/*!***********************!*\
  !*** ./src/matter.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { COLORS } = __webpack_require__(/*! ../assets/palette/palette */ \"./assets/palette/palette.js\");\nconst { Game } = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass Matter {\n    constructor(height, width, context, dpi, color, consumed = false) {\n        this.context = context;\n        this.dpi = dpi;\n        this.height = height;\n        this.width = width;\n\n        this.x = Math.floor(Math.random() * this.width);\n        this.y = Math.floor(Math.random() * this.height);\n\n        this.mass = 1;\n\n        this.consumed = false;\n        this.color = color;\n        this.draw = this.draw.bind(this);\n        this.draw();\n    }\n\n    isCollidedWith(object) {\n        var playerHitbox = { radius: object.radius, x: object.x, y: object.y };\n        var matterHitbox = { radius: 5, x: this.x, y: this.y };\n\n        var dx = playerHitbox.x - matterHitbox.x;\n        var dy = playerHitbox.y - matterHitbox.y;\n        var distance = Math.sqrt(dx * dx + dy * dy);\n\n        if (distance < playerHitbox.radius + matterHitbox.radius) {\n            this.consumed = true;\n            //\n            object.consumeMatter(this);\n            //\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    draw() {\n        this.context.fillStyle = this.color;\n        this.context.fillRect(this.x, this.y, 10, 10);\n        this.context.save();\n    }\n\n    \n\n\n}\n\nmodule.exports = Matter;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWF0dGVyLmpzPzJkNzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLEdBQUcsbUJBQU8sQ0FBQyw4REFBMkI7QUFDdEQsT0FBTyxPQUFPLEdBQUcsbUJBQU8sQ0FBQyw2QkFBUTs7O0FBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUIsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBIiwiZmlsZSI6Ii4vc3JjL21hdHRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ09MT1JTIH0gPSByZXF1aXJlKFwiLi4vYXNzZXRzL3BhbGV0dGUvcGFsZXR0ZVwiKTtcbmNvbnN0IHsgR2FtZSB9ID0gcmVxdWlyZShcIi4vZ2FtZVwiKTtcblxuXG5jbGFzcyBNYXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGhlaWdodCwgd2lkdGgsIGNvbnRleHQsIGRwaSwgY29sb3IsIGNvbnN1bWVkID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5kcGkgPSBkcGk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG5cbiAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLm1hc3MgPSAxO1xuXG4gICAgICAgIHRoaXMuY29uc3VtZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgaXNDb2xsaWRlZFdpdGgob2JqZWN0KSB7XG4gICAgICAgIHZhciBwbGF5ZXJIaXRib3ggPSB7IHJhZGl1czogb2JqZWN0LnJhZGl1cywgeDogb2JqZWN0LngsIHk6IG9iamVjdC55IH07XG4gICAgICAgIHZhciBtYXR0ZXJIaXRib3ggPSB7IHJhZGl1czogNSwgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcblxuICAgICAgICB2YXIgZHggPSBwbGF5ZXJIaXRib3gueCAtIG1hdHRlckhpdGJveC54O1xuICAgICAgICB2YXIgZHkgPSBwbGF5ZXJIaXRib3gueSAtIG1hdHRlckhpdGJveC55O1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA8IHBsYXllckhpdGJveC5yYWRpdXMgKyBtYXR0ZXJIaXRib3gucmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN1bWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBvYmplY3QuY29uc3VtZU1hdHRlcih0aGlzKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIDEwLCAxMCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG4gICAgfVxuXG4gICAgXG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdHRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/matter.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { COLORS } = __webpack_require__(/*! ../assets/palette/palette */ \"./assets/palette/palette.js\");\nconst { Game } = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass Player {\n    constructor(height, width, context, dpi) {\n        this.dpi = dpi;\n        this.height = height;\n        this.width = width;\n        this.x = width / 2;\n        this.y = height / 2;\n        this.radius = 15;\n\n        this.dx = 0.5 - (0.025 * this.radius);\n        this.dy = 0.5 - (0.025 * this.radius);\n\n        this.speed = [this.dx, this.dy];\n\n        this.context = context;\n\n        this.consumed = false;\n        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];\n\n        this.draw = this.draw.bind(this);\n        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);\n        // this.move = this.move.bind(this);\n\n        document.addEventListener(\"mousemove\", this.mouseMoveHandler, false);\n    }\n\n    consumeMatter(object) {\n        this.radius += object.mass / 1.25;\n    }\n\n    mouseMoveHandler(e) {\n\n        let currentPos = [this.x, this.y];\n        let mousePos = [e.clientX * this.dpi, e.clientY * this.dpi];\n        const middle = [this.width / 2, this.height / 2];\n\n        let xDistance;\n        let yDistance;\n        \n        let distanceArray = [xDistance, yDistance];\n\n        for (let idx = 0; idx < 2; idx += 1) {\n            if (mousePos[idx] < middle[idx]) {\n                distanceArray[idx] = mousePos[idx] - currentPos[idx];\n            } else if (mousePos[idx] > middle[idx]) {\n                distanceArray[idx] = mousePos[idx] - currentPos[idx];\n            } else {\n                distanceArray[idx] = 0;\n            }\n        }\n\n        let distance = Math.sqrt(distanceArray[0] * distanceArray[0] + distanceArray[1] * distanceArray[1]);\n\n        if (distance > 1) {\n            this.x += distanceArray[0] * this.dx;\n            this.y += distanceArray[1] * this.dy;\n        }\n    \n    }\n\n    // mouseMoveHandler(e) {\n    //     const speed = [this.dx, this.dy];\n    //     let currentPos = [this.x, this.y];\n    //     let mousePos = [e.clientX * this.dpi, e.clientY * this.dpi];\n\n    //   \n\n    //     let nextPos = [];\n\n    //     for (let idx = 0; idx < 2; idx += 1) {\n    //         if (currentPos[idx] < mousePos[idx]) {\n    //             nextPos[idx] = currentPos[idx] + speed[idx];\n    //         } else if (currentPos[idx] > mousePos[idx]) {\n    //             nextPos[idx] = currentPos[idx] - speed[idx];\n    //         } else {\n    //             nextPos[idx] = currentPos[idx];\n    //         }\n    //     }\n\n    //     this.x = nextPos[0];\n    //     this.y = nextPos[1];\n\n    //   \n    // }\n\n//     move() {\n//         let xDistance = (e.clientX * this.dpi) - this.x;\n//         let yDistance = (e.clientY * this.dpi) - this.y;\n//         let distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);\n\n//         if (distance > 1) {\n//             this.x += xDistance * easingAmount;\n//             this.y += yDistance * easingAmount;\n//         }\n// }\n\n\n\n    draw() {\n        this.context.fillStyle = this.color;\n        this.context.beginPath();\n        this.context.arc(\n            this.x, this.y,\n            this.radius, 0, Math.PI * 2,\n        );\n        this.context.closePath();\n        this.context.fill();\n    \n\n\n        // UP\n        // if (this.y + -this.dy < this.radius) {\n        //     // hit top border and keep this.y @ radius/2;\n        //     this.y = this.radius/2;\n        // } else {\n        //     // otherwise, travel up at @mouse vector\n        //     this.y += -this.dy;\n        // }\n\n\n        // DOWN\n        // if (this.y + this.dy > this.height - (this.radius / 2)) {\n        //     // hit bottom border and keep this.y @ this.height + some portion of the radius;\n        //     this.y = this.height - (this.radius / 2);\n        // } else {\n        //     // otherwise, travel y @ the mouse vector\n        //     this.y += this.dy;\n        // }\n\n\n        // RIGHT\n        // if (this.x + this.dx > (this.width - this.radius / 2)) {\n        //     this.x = this.width - (this.radius / 2);\n        // } else {\n        //     this.x += this.dx;\n        // }\n\n\n        // LEFT\n        // if (this.x + -this.dx < this.radius) {\n        //     this.x = (this.radius / 2);\n        // } else {\n        //     this.x += -this.dx;\n        // }\n    }\n\n    \n}\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLEdBQUcsbUJBQU8sQ0FBQyw4REFBMkI7QUFDdEQsT0FBTyxPQUFPLEdBQUcsbUJBQU8sQ0FBQyw2QkFBUTs7O0FBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEiLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBDT0xPUlMgfSA9IHJlcXVpcmUoXCIuLi9hc3NldHMvcGFsZXR0ZS9wYWxldHRlXCIpO1xuY29uc3QgeyBHYW1lIH0gPSByZXF1aXJlKFwiLi9nYW1lXCIpO1xuXG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCwgY29udGV4dCwgZHBpKSB7XG4gICAgICAgIHRoaXMuZHBpID0gZHBpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLnggPSB3aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IGhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMucmFkaXVzID0gMTU7XG5cbiAgICAgICAgdGhpcy5keCA9IDAuNSAtICgwLjAyNSAqIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5keSA9IDAuNSAtICgwLjAyNSAqIHRoaXMucmFkaXVzKTtcblxuICAgICAgICB0aGlzLnNwZWVkID0gW3RoaXMuZHgsIHRoaXMuZHldO1xuXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5jb25zdW1lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbG9yID0gQ09MT1JTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENPTE9SUy5sZW5ndGgpXTtcblxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZU1vdmVIYW5kbGVyLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3VtZU1hdHRlcihvYmplY3QpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgKz0gb2JqZWN0Lm1hc3MgLyAxLjI1O1xuICAgIH1cblxuICAgIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuXG4gICAgICAgIGxldCBjdXJyZW50UG9zID0gW3RoaXMueCwgdGhpcy55XTtcbiAgICAgICAgbGV0IG1vdXNlUG9zID0gW2UuY2xpZW50WCAqIHRoaXMuZHBpLCBlLmNsaWVudFkgKiB0aGlzLmRwaV07XG4gICAgICAgIGNvbnN0IG1pZGRsZSA9IFt0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyXTtcblxuICAgICAgICBsZXQgeERpc3RhbmNlO1xuICAgICAgICBsZXQgeURpc3RhbmNlO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRpc3RhbmNlQXJyYXkgPSBbeERpc3RhbmNlLCB5RGlzdGFuY2VdO1xuXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IDI7IGlkeCArPSAxKSB7XG4gICAgICAgICAgICBpZiAobW91c2VQb3NbaWR4XSA8IG1pZGRsZVtpZHhdKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VBcnJheVtpZHhdID0gbW91c2VQb3NbaWR4XSAtIGN1cnJlbnRQb3NbaWR4XTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW91c2VQb3NbaWR4XSA+IG1pZGRsZVtpZHhdKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VBcnJheVtpZHhdID0gbW91c2VQb3NbaWR4XSAtIGN1cnJlbnRQb3NbaWR4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VBcnJheVtpZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydChkaXN0YW5jZUFycmF5WzBdICogZGlzdGFuY2VBcnJheVswXSArIGRpc3RhbmNlQXJyYXlbMV0gKiBkaXN0YW5jZUFycmF5WzFdKTtcblxuICAgICAgICBpZiAoZGlzdGFuY2UgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnggKz0gZGlzdGFuY2VBcnJheVswXSAqIHRoaXMuZHg7XG4gICAgICAgICAgICB0aGlzLnkgKz0gZGlzdGFuY2VBcnJheVsxXSAqIHRoaXMuZHk7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICAvLyBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcbiAgICAvLyAgICAgY29uc3Qgc3BlZWQgPSBbdGhpcy5keCwgdGhpcy5keV07XG4gICAgLy8gICAgIGxldCBjdXJyZW50UG9zID0gW3RoaXMueCwgdGhpcy55XTtcbiAgICAvLyAgICAgbGV0IG1vdXNlUG9zID0gW2UuY2xpZW50WCAqIHRoaXMuZHBpLCBlLmNsaWVudFkgKiB0aGlzLmRwaV07XG5cbiAgICAvLyAgIFxuXG4gICAgLy8gICAgIGxldCBuZXh0UG9zID0gW107XG5cbiAgICAvLyAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgMjsgaWR4ICs9IDEpIHtcbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50UG9zW2lkeF0gPCBtb3VzZVBvc1tpZHhdKSB7XG4gICAgLy8gICAgICAgICAgICAgbmV4dFBvc1tpZHhdID0gY3VycmVudFBvc1tpZHhdICsgc3BlZWRbaWR4XTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBvc1tpZHhdID4gbW91c2VQb3NbaWR4XSkge1xuICAgIC8vICAgICAgICAgICAgIG5leHRQb3NbaWR4XSA9IGN1cnJlbnRQb3NbaWR4XSAtIHNwZWVkW2lkeF07XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIG5leHRQb3NbaWR4XSA9IGN1cnJlbnRQb3NbaWR4XTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHRoaXMueCA9IG5leHRQb3NbMF07XG4gICAgLy8gICAgIHRoaXMueSA9IG5leHRQb3NbMV07XG5cbiAgICAvLyAgIFxuICAgIC8vIH1cblxuLy8gICAgIG1vdmUoKSB7XG4vLyAgICAgICAgIGxldCB4RGlzdGFuY2UgPSAoZS5jbGllbnRYICogdGhpcy5kcGkpIC0gdGhpcy54O1xuLy8gICAgICAgICBsZXQgeURpc3RhbmNlID0gKGUuY2xpZW50WSAqIHRoaXMuZHBpKSAtIHRoaXMueTtcbi8vICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHhEaXN0YW5jZSAqIHhEaXN0YW5jZSArIHlEaXN0YW5jZSAqIHlEaXN0YW5jZSk7XG5cbi8vICAgICAgICAgaWYgKGRpc3RhbmNlID4gMSkge1xuLy8gICAgICAgICAgICAgdGhpcy54ICs9IHhEaXN0YW5jZSAqIGVhc2luZ0Ftb3VudDtcbi8vICAgICAgICAgICAgIHRoaXMueSArPSB5RGlzdGFuY2UgKiBlYXNpbmdBbW91bnQ7XG4vLyAgICAgICAgIH1cbi8vIH1cblxuXG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKFxuICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksXG4gICAgICAgICAgICB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbiAgICBcblxuXG4gICAgICAgIC8vIFVQXG4gICAgICAgIC8vIGlmICh0aGlzLnkgKyAtdGhpcy5keSA8IHRoaXMucmFkaXVzKSB7XG4gICAgICAgIC8vICAgICAvLyBoaXQgdG9wIGJvcmRlciBhbmQga2VlcCB0aGlzLnkgQCByYWRpdXMvMjtcbiAgICAgICAgLy8gICAgIHRoaXMueSA9IHRoaXMucmFkaXVzLzI7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAvLyBvdGhlcndpc2UsIHRyYXZlbCB1cCBhdCBAbW91c2UgdmVjdG9yXG4gICAgICAgIC8vICAgICB0aGlzLnkgKz0gLXRoaXMuZHk7XG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIC8vIERPV05cbiAgICAgICAgLy8gaWYgKHRoaXMueSArIHRoaXMuZHkgPiB0aGlzLmhlaWdodCAtICh0aGlzLnJhZGl1cyAvIDIpKSB7XG4gICAgICAgIC8vICAgICAvLyBoaXQgYm90dG9tIGJvcmRlciBhbmQga2VlcCB0aGlzLnkgQCB0aGlzLmhlaWdodCArIHNvbWUgcG9ydGlvbiBvZiB0aGUgcmFkaXVzO1xuICAgICAgICAvLyAgICAgdGhpcy55ID0gdGhpcy5oZWlnaHQgLSAodGhpcy5yYWRpdXMgLyAyKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIC8vIG90aGVyd2lzZSwgdHJhdmVsIHkgQCB0aGUgbW91c2UgdmVjdG9yXG4gICAgICAgIC8vICAgICB0aGlzLnkgKz0gdGhpcy5keTtcbiAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgLy8gUklHSFRcbiAgICAgICAgLy8gaWYgKHRoaXMueCArIHRoaXMuZHggPiAodGhpcy53aWR0aCAtIHRoaXMucmFkaXVzIC8gMikpIHtcbiAgICAgICAgLy8gICAgIHRoaXMueCA9IHRoaXMud2lkdGggLSAodGhpcy5yYWRpdXMgLyAyKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgICAgICAvLyB9XG5cblxuICAgICAgICAvLyBMRUZUXG4gICAgICAgIC8vIGlmICh0aGlzLnggKyAtdGhpcy5keCA8IHRoaXMucmFkaXVzKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnggPSAodGhpcy5yYWRpdXMgLyAyKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMueCArPSAtdGhpcy5keDtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/player.js\n");

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