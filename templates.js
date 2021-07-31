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
/******/ 	return __webpack_require__(__webpack_require__.s = "./templates/templates.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../fonts/Montserrat-Bold.ttf":
/*!************************************!*\
  !*** ../fonts/Montserrat-Bold.ttf ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ade91f473255991f410f61857696434b.ttf");

/***/ }),

/***/ "../fonts/Montserrat-Regular.ttf":
/*!***************************************!*\
  !*** ../fonts/Montserrat-Regular.ttf ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ee6539921d713482b8ccd4d0d23961bb.ttf");

/***/ }),

/***/ "../fonts/Verdana-Regular.ttf":
/*!************************************!*\
  !*** ../fonts/Verdana-Regular.ttf ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3ba52ab1fa0cd726e7868e9c6673902c.ttf");

/***/ }),

/***/ "../icons/globe 1.svg":
/*!****************************!*\
  !*** ../icons/globe 1.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/globe 1.svg");

/***/ }),

/***/ "../icons/globe 2.svg":
/*!****************************!*\
  !*** ../icons/globe 2.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/globe 2.svg");

/***/ }),

/***/ "../icons/menu 1.svg":
/*!***************************!*\
  !*** ../icons/menu 1.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/menu 1.svg");

/***/ }),

/***/ "../icons/menu 2.svg":
/*!***************************!*\
  !*** ../icons/menu 2.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/menu 2.svg");

/***/ }),

/***/ "../icons/moon 1.svg":
/*!***************************!*\
  !*** ../icons/moon 1.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/moon 1.svg");

/***/ }),

/***/ "../icons/sun.svg":
/*!************************!*\
  !*** ../icons/sun.svg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/sun.svg");

/***/ }),

/***/ "../icons/sun2.png":
/*!*************************!*\
  !*** ../icons/sun2.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/sun2.png");

/***/ }),

/***/ "../images/brick.png":
/*!***************************!*\
  !*** ../images/brick.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/brick.png");

/***/ }),

/***/ "../images/ghotic.png":
/*!****************************!*\
  !*** ../images/ghotic.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/ghotic.png");

/***/ }),

/***/ "../images/high tech.png":
/*!*******************************!*\
  !*** ../images/high tech.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/high tech.png");

/***/ }),

/***/ "../images/townhouses.png":
/*!********************************!*\
  !*** ../images/townhouses.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/townhouses.png");

/***/ }),

/***/ "../images/village.png":
/*!*****************************!*\
  !*** ../images/village.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/village.png");

/***/ }),

/***/ "../images/wooden_house.png":
/*!**********************************!*\
  !*** ../images/wooden_house.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/wooden_house.png");

/***/ }),

/***/ "./common-files/change-mode.js":
/*!*************************************!*\
  !*** ./common-files/change-mode.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function () {
  var body = document.body;
  var textsElements = document.getElementsByClassName('should-change-color');
  var menuLinks = document.getElementsByClassName('animate-link');
  var anchors = document.getElementsByClassName('anchors');
  var menu1 = document.getElementById('open-btn-light');
  var menu2 = document.getElementById('open-btn-dark');
  var globe1 = document.getElementById('globe-light');
  var globe2 = document.getElementById('globe-dark');
  var sun = document.getElementById('sun');
  var moon = document.getElementById('moon');
  var lightText = document.getElementById('light-text');
  var darkText = document.getElementById('dark-text');
  var i;

  if (body.classList.contains('body-light')) {
    for (i = 0; i < textsElements.length; i++) {
      var textsElement = textsElements[i];
      textsElement.classList.add('text-black');
    }

    for (i = 0; i < textsElements.length; i++) {
      var _textsElement = textsElements[i];

      _textsElement.classList.remove('text-white');
    }
  } else if (body.classList.contains('body-dark')) {
    for (i = 0; i < textsElements.length; i++) {
      var _textsElement2 = textsElements[i];

      _textsElement2.classList.add('text-white');
    }

    for (i = 0; i < textsElements.length; i++) {
      var _textsElement3 = textsElements[i];

      _textsElement3.classList.remove('text-black');
    }

    for (i = 0; i < menuLinks.length; i++) {
      var menuLink = menuLinks[i];
      menuLink.classList.add('menu-link');
    }

    menu1.style.display = "none";
    menu2.style.display = "block";
    globe1.style.display = "none";
    globe2.style.display = "block";
    moon.style.display = "none";
    sun.style.display = "block";
  } else {
    body.classList.add('body-light');

    for (i = 0; i < textsElements.length; i++) {
      var _textsElement4 = textsElements[i];

      _textsElement4.classList.add('text-black');
    }

    for (i = 0; i < textsElements.length; i++) {
      var _textsElement5 = textsElements[i];

      _textsElement5.classList.remove('text-white');
    }
  }

  for (i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];

    anchor.onclick = function () {
      if (body.classList.contains('body-light')) {
        sun.style.display = 'block';
        lightText.style.display = 'block';
        moon.style.display = 'none';
        darkText.style.display = 'none';
        body.classList.remove('body-light');
        body.classList.add('body-dark');

        for (i = 0; i < textsElements.length; i++) {
          var _textsElement6 = textsElements[i];

          _textsElement6.classList.add('text-white');
        }

        for (i = 0; i < textsElements.length; i++) {
          var _textsElement7 = textsElements[i];

          _textsElement7.classList.remove('text-black');
        }

        for (i = 0; i < menuLinks.length; i++) {
          var _menuLink = menuLinks[i];

          _menuLink.classList.add('menu-link');
        }

        menu1.style.display = "none";
        menu2.style.display = "block";
        globe1.style.display = "none";
        globe2.style.display = "block";
        moon.style.display = "none";
        sun.style.display = "block";
      } else if (body.classList.contains('body-dark')) {
        moon.style.display = 'block';
        darkText.style.display = 'block';
        sun.style.display = 'none';
        lightText.style.display = 'none';
        body.classList.remove('body-dark');
        body.classList.add('body-light');

        for (i = 0; i < textsElements.length; i++) {
          var _textsElement8 = textsElements[i];

          _textsElement8.classList.add('text-black');
        }

        for (i = 0; i < textsElements.length; i++) {
          var _textsElement9 = textsElements[i];

          _textsElement9.classList.remove('text-white');
        }

        for (i = 0; i < menuLinks.length; i++) {
          var _menuLink2 = menuLinks[i];

          _menuLink2.classList.remove('menu-link');
        }

        menu1.style.display = "block";
        menu2.style.display = "none";
        globe1.style.display = "block";
        globe2.style.display = "none";
        moon.style.display = "block";
        sun.style.display = "none";
      }
    };
  }
};

/***/ }),

/***/ "./common-files/common-imports.js":
/*!****************************************!*\
  !*** ./common-files/common-imports.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonts_Montserrat_Bold_ttf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fonts/Montserrat-Bold.ttf */ "../fonts/Montserrat-Bold.ttf");
/* harmony import */ var _fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fonts/Montserrat-Regular.ttf */ "../fonts/Montserrat-Regular.ttf");
/* harmony import */ var _fonts_Verdana_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fonts/Verdana-Regular.ttf */ "../fonts/Verdana-Regular.ttf");
/* harmony import */ var _icons_globe_1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/globe 1.svg */ "../icons/globe 1.svg");
/* harmony import */ var _icons_globe_2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/globe 2.svg */ "../icons/globe 2.svg");
/* harmony import */ var _icons_menu_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/menu 1.svg */ "../icons/menu 1.svg");
/* harmony import */ var _icons_menu_2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/menu 2.svg */ "../icons/menu 2.svg");
/* harmony import */ var _icons_moon_1_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/moon 1.svg */ "../icons/moon 1.svg");
/* harmony import */ var _icons_sun_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../icons/sun.svg */ "../icons/sun.svg");
/* harmony import */ var _icons_sun2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../icons/sun2.png */ "../icons/sun2.png");
/* harmony import */ var _images_brick_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/brick.png */ "../images/brick.png");
/* harmony import */ var _images_ghotic_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/ghotic.png */ "../images/ghotic.png");
/* harmony import */ var _images_high_tech_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/high tech.png */ "../images/high tech.png");
/* harmony import */ var _images_townhouses_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/townhouses.png */ "../images/townhouses.png");
/* harmony import */ var _images_village_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/village.png */ "../images/village.png");
/* harmony import */ var _images_wooden_house_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/wooden_house.png */ "../images/wooden_house.png");

















/***/ }),

/***/ "./common-files/common.scss":
/*!**********************************!*\
  !*** ./common-files/common.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./common-files/nav.js":
/*!*****************************!*\
  !*** ./common-files/nav.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var el = document.getElementById('navBlock');
var btn1 = document.getElementById('open-btn-light');
var btn2 = document.getElementById('open-btn-dark');
var offerBlock = document.getElementById('offerBlock');
var delzone = document.getElementsByClassName('delzone');

btn1.onclick = function () {
  el.classList.toggle('open-menu');

  if (el.classList.contains('open-menu')) {
    disableScroll();
  } else {
    enableScroll();
  }
};

btn2.onclick = function () {
  el.classList.toggle('open-menu');

  if (el.classList.contains('open-menu')) {
    disableScroll();
  } else {
    enableScroll();
  }
};

if (document.getElementById('offerBlock')) {
  offerBlock.onclick = function () {
    el.classList.remove('open-menu');
    enableScroll();
  };
}

if (document.getElementsByClassName('delzone')) {
  var i;

  for (i = 0; i < delzone.length; i++) {
    delzone[i].onclick = function () {
      el.classList.remove('open-menu');
      enableScroll();
    };
  }
} // left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36


var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
} // modern Chrome requires { passive: false } when adding event


var supportsPassive = false;

try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  }));
} catch (e) {}

var wheelOpt = supportsPassive ? {
  passive: false
} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'; // call this to Disable

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF

  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop

  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile

  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
} // call this to Enable


function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

/***/ }),

/***/ "./templates/templates.js":
/*!********************************!*\
  !*** ./templates/templates.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_files_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-files/common.scss */ "./common-files/common.scss");
/* harmony import */ var _common_files_common_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_files_common_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates.scss */ "./templates/templates.scss");
/* harmony import */ var _templates_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_files_common_imports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-files/common-imports */ "./common-files/common-imports.js");
/* harmony import */ var _common_files_change_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-files/change-mode */ "./common-files/change-mode.js");
/* harmony import */ var _common_files_change_mode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_files_change_mode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_files_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-files/nav */ "./common-files/nav.js");
/* harmony import */ var _common_files_nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_files_nav__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./templates/templates.scss":
/*!**********************************!*\
  !*** ./templates/templates.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

/******/ });
//# sourceMappingURL=templates.js.map