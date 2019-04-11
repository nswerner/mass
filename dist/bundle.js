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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Player = require('./player');\n// const Matter = require('./matter');\n\nclass Game {\n    constructor(context) {\n        this.players = [];\n        this.matter = [];\n        this.context = context;\n        this.dpi = window.devicePixelRatio;\n        // this.addMatter();\n        // this.fix_dpi = this.fix_dpi.bind(this);\n        // this.draw = this.draw.bind(this);\n    }\n\n    fix_dpi() {\n        let style = {\n            height() {\n                return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);\n            },\n            width() {\n                return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);\n            }\n        }\n\n        canvas.setAttribute('width', style.width() * this.dpi);\n        canvas.setAttribute('height', style.height() * this.dpi);\n    }\n\n    draw() {\n        //call the dpi fix every time\n        //canvas is redrawn\n        this.fix_dpi();\n\n        //draw stuff!\n        // context.strokeRect(100, 100, 200, 200);\n\n        this.context.beginPath();\n        this.context.arc(\n            canvas.width / 2,\n            canvas.height / 2, \n            40, 0, Math.PI * 2,  \n        );\n        this.context.closePath();\n        this.context.fillStyle = \"#9A1CEB\"\n        this.context.fill();\n\n        requestAnimationFrame(draw);\n    }\n\n    // requestAnimationFrame(draw);\n}\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcz83ZGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiIuL3NyYy9nYW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcbi8vIGNvbnN0IE1hdHRlciA9IHJlcXVpcmUoJy4vbWF0dGVyJyk7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW107XG4gICAgICAgIHRoaXMubWF0dGVyID0gW107XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuZHBpID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIC8vIHRoaXMuYWRkTWF0dGVyKCk7XG4gICAgICAgIC8vIHRoaXMuZml4X2RwaSA9IHRoaXMuZml4X2RwaS5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBmaXhfZHBpKCkge1xuICAgICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICtnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0Jykuc2xpY2UoMCwgLTIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiArZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykuc2xpY2UoMCwgLTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBzdHlsZS53aWR0aCgpICogdGhpcy5kcGkpO1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzdHlsZS5oZWlnaHQoKSAqIHRoaXMuZHBpKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvL2NhbGwgdGhlIGRwaSBmaXggZXZlcnkgdGltZVxuICAgICAgICAvL2NhbnZhcyBpcyByZWRyYXduXG4gICAgICAgIHRoaXMuZml4X2RwaSgpO1xuXG4gICAgICAgIC8vZHJhdyBzdHVmZiFcbiAgICAgICAgLy8gY29udGV4dC5zdHJva2VSZWN0KDEwMCwgMTAwLCAyMDAsIDIwMCk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKFxuICAgICAgICAgICAgY2FudmFzLndpZHRoIC8gMixcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLCBcbiAgICAgICAgICAgIDQwLCAwLCBNYXRoLlBJICogMiwgIFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIiM5QTFDRUJcIlxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbiAgICB9XG5cbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/mass.js":
/*!*********************!*\
  !*** ./src/mass.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n// const View = require(\"./view\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById('canvas'),\n        context = canvas.getContext('2d'),\n        dpi = window.devicePixelRatio;\n\n        function fix_dpi() {\n            let style = {\n                height() {\n                    return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);\n                },\n                width() {\n                    return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);\n                }\n            }\n    \n            canvas.setAttribute('width', style.width() * dpi);\n            canvas.setAttribute('height', style.height() * dpi);\n        }\n        \n        const game = new Game(context);\n        game.draw();\n        // new View(game, context).start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFzcy5qcz8yMGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL3NyYy9tYXNzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL2dhbWVcIik7XG4vLyBjb25zdCBWaWV3ID0gcmVxdWlyZShcIi4vdmlld1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyksXG4gICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgICAgZHBpID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICAgICAgZnVuY3Rpb24gZml4X2RwaSgpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiArZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnNsaWNlKDAsIC0yKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdpZHRoKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gK2dldENvbXB1dGVkU3R5bGUoY2FudmFzKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnNsaWNlKDAsIC0yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHN0eWxlLndpZHRoKCkgKiBkcGkpO1xuICAgICAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgc3R5bGUuaGVpZ2h0KCkgKiBkcGkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY29udGV4dCk7XG4gICAgICAgIGdhbWUuZHJhdygpO1xuICAgICAgICAvLyBuZXcgVmlldyhnYW1lLCBjb250ZXh0KS5zdGFydCgpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mass.js\n");

/***/ })

/******/ });