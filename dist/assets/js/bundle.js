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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/bar.js":
/*!******************************!*\
  !*** ./src/assets/js/bar.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var menu = document.querySelector(".menu");
var btn = menu.querySelector(".nav-tgl");
btn.addEventListener("click", function (evt) {
  menu.classList.toggle("active");
});

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_styles_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sass/styles.sass */ "./src/assets/sass/styles.sass");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/assets/js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar */ "./src/assets/js/bar.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bar__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var left = document.querySelector(".left");
var sliderIamge = document.querySelector(".slider_image");
var choose = document.querySelector(".choose");
var slides = {
  firstSlide: {
    h1: "Nike <span class='blue'>Air</span> Max",
    p: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "<img src='./assets/img/shoes1.png' class='slider_inside' />",
    ico: "<img id='0' src='./assets/img/mini3.png'  />"
  },
  secondSlide: {
    h1: "Nike <span class='grey'>Air</span> Max",
    p: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "<img src='./assets/img/shoes2.png' class='slider_inside' />",
    ico: "<img id='1' src='./assets/img/mini1.png'   />"
  },
  thirdSlide: {
    h1: "Nike <span class='orange'>Air</span> Max",
    p: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "<img src='./assets/img/shoes3.png' class='slider_inside' />",
    ico: "<img id='2' src='./assets/img/mini2.png'  />"
  }
};
console.log(slides);
var i = 0;
Object.keys(slides).forEach(function (item) {
  console.log(slides[item].ico);
  var newImg = document.createElement("div");
  newImg.className = "image_ico ".concat(i++);
  newImg.innerHTML = slides[item].ico;
  choose.appendChild(newImg);
});
var h1 = document.createElement("h1");
h1.innerHTML = slides.firstSlide.h1;
left.appendChild(h1);
var p = document.createElement("p");
p.innerHTML = slides.firstSlide.p;
left.appendChild(p);
sliderIamge.innerHTML = slides.firstSlide.img;
choose.addEventListener("click", function (e) {
  console.log(e.target.id);

  if (e.target.id === "0") {
    h1.innerHTML = slides.firstSlide.h1;
    left.appendChild(h1);
    p.innerHTML = slides.firstSlide.p;
    left.appendChild(p);
    sliderIamge.innerHTML = slides.firstSlide.img;
  } else if (e.target.id === "1") {
    h1.innerHTML = slides.secondSlide.h1;
    left.appendChild(h1);
    p.innerHTML = slides.secondSlide.p;
    left.appendChild(p);
    sliderIamge.innerHTML = slides.secondSlide.img;
  } else if (e.target.id === "2") {
    h1.innerHTML = slides.thirdSlide.h1;
    left.appendChild(h1);
    p.innerHTML = slides.thirdSlide.p;
    left.appendChild(p);
    sliderIamge.innerHTML = slides.thirdSlide.img;
  }
});

/***/ }),

/***/ "./src/assets/sass/styles.sass":
/*!*************************************!*\
  !*** ./src/assets/sass/styles.sass ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map