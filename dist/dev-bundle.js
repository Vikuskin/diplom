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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/carousel */ \"./src/modules/carousel.js\");\n/* harmony import */ var _modules_send__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/send */ \"./src/modules/send.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_upArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/upArrow */ \"./src/modules/upArrow.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n\n\n\n\n\n\n\n\n\n\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_send__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_upArrow__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_7__.default)();\n\n//# sourceURL=webpack://diplom_light(new)/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeon = document.querySelector('.accordeon'),\n      accordeonElem = accordeon.querySelectorAll('.element'),\n      accordeonTitle = accordeon.querySelectorAll('.title'),\n      accordeonContent = accordeon.querySelectorAll('.element-content');\n  accordeonElem[0].classList.add('active');\n  accordeonContent[0].classList.add('active');\n\n  var deleteElem = function deleteElem() {\n    accordeonElem.forEach(function (item) {\n      item.classList.remove('active');\n    });\n    accordeonContent.forEach(function (item, i) {\n      item.classList.remove('active');\n    });\n  };\n\n  var _loop = function _loop(i) {\n    accordeonTitle[i].addEventListener('click', function () {\n      deleteElem();\n      accordeonElem[i].classList.add('active');\n      accordeonContent[i].classList.add('active');\n    });\n  };\n\n  for (var i = 0; i < accordeonElem.length; i++) {\n    _loop(i);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://diplom_light(new)/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar carousel = function carousel() {\n  var services = document.querySelector('.services-elements'),\n      servicesElem = services.querySelectorAll('.card'),\n      arrowRight = document.querySelector('.arrow-right'),\n      arrowLeft = document.querySelector('.arrow-left');\n  var currentSlide = 0;\n\n  var startCarousel = function startCarousel() {\n    for (var i = 3; i < servicesElem.length; i++) {\n      servicesElem[i].style.display = 'none';\n    }\n\n    for (var _i = 0; _i < 2; _i++) {\n      servicesElem[_i].style.display = 'block';\n    }\n  };\n\n  var endCarousel = function endCarousel() {\n    for (var i = 3; i < servicesElem.length; i++) {\n      servicesElem[i].style.display = 'block';\n    }\n\n    for (var _i2 = 0; _i2 < 4; _i2++) {\n      servicesElem[_i2].style.display = 'none';\n    }\n  };\n\n  startCarousel();\n  arrowRight.addEventListener('click', function () {\n    servicesElem[currentSlide].style.display = 'none';\n    currentSlide++;\n\n    if (currentSlide > 2) {\n      startCarousel();\n      currentSlide = 0;\n    }\n\n    servicesElem[currentSlide + 3].style.display = 'block';\n  });\n  arrowLeft.addEventListener('click', function () {\n    if (currentSlide <= 0) {\n      endCarousel();\n      currentSlide = 3;\n    } else {\n      servicesElem[currentSlide + 3].style.display = 'none';\n    }\n\n    currentSlide--;\n    servicesElem[currentSlide].style.display = 'block';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://diplom_light(new)/./src/modules/carousel.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar getMenu = function getMenu() {\n  var topMenu = document.querySelector('.top-menu'),\n      link = topMenu.querySelectorAll('ul>li>a');\n  link.forEach(function (item) {\n    return item.addEventListener('click', function (e) {\n      e.preventDefault();\n      var id = item.getAttribute('href').slice(1);\n      document.getElementById(id).scrollIntoView({\n        behavior: 'smooth'\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMenu);\n\n//# sourceURL=webpack://diplom_light(new)/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar getModal = function getModal() {\n  var modal = document.querySelector('.modal-callback'),\n      modalApp = document.getElementById('application'),\n      inputApp = document.getElementById('applicationInput'),\n      modalOverlay = document.querySelector('.modal-overlay');\n  modal.style.display = 'none';\n  modalOverlay.style.display = 'none';\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.getAttribute('href') === '#application') {\n      inputApp.value = target.dataset.application;\n      modalApp.style.display = 'block';\n      modalOverlay.style.display = 'block';\n    }\n\n    if (target.classList.contains('callback-btn') || target.classList.contains('modal-close') || target.getAttribute('href') === '#feedback') {\n      modal.style.display = modal.style.display === 'none' ? 'block' : 'none';\n      modalOverlay.style.display = modalOverlay.style.display === 'none' ? 'block' : 'none';\n    } else if (target.classList.contains('modal-overlay')) {\n      modalOverlay.style.display = modalOverlay.style.display === 'none' ? 'block' : 'none';\n      modalApp.style.display = 'none';\n      modal.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getModal);\n\n//# sourceURL=webpack://diplom_light(new)/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/send.js":
/*!*****************************!*\
  !*** ./src/modules/send.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar send = function send() {\n  var form = document.getElementsByTagName('form'),\n      statusMessage = document.createElement('div'),\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо, мы скоро свяжемся с вами',\n      errorMessage = 'Что-то пошло не так',\n      mistakeMessage = 'Некорректные данные';\n  statusMessage.style.cssText = 'font-size: 2rem;';\n\n  var closeModal = function closeModal() {\n    var modal = document.querySelector('.modal-callback'),\n        modalApp = document.getElementById('application'),\n        modalOverlay = document.querySelector('.modal-overlay');\n    modal.style.display = 'none';\n    modalApp.style.display = 'none';\n    modalOverlay.style.display = 'none';\n  };\n\n  var _loop = function _loop(i) {\n    form[i].addEventListener('submit', function (event) {\n      event.preventDefault();\n      form[i].appendChild(statusMessage);\n      var formName = form[i].getElementsByTagName('input').fio,\n          formPhone = form[i].getElementsByTagName('input').tel;\n      console.log(formName);\n      console.log(formPhone);\n\n      if (formName.value === '' || formPhone.value === '' || formPhone.value.length < 7 || formPhone.value.length > 12) {\n        statusMessage.textContent = mistakeMessage;\n        return;\n      }\n\n      var request = new XMLHttpRequest();\n      request.addEventListener('readystatechange', function () {\n        statusMessage.textContent = loadMessage;\n\n        if (request.readyState !== 4) {\n          return;\n        }\n\n        if (request.status === 200) {\n          statusMessage.textContent = successMessage;\n        } else {\n          statusMessage.textContent = errorMessage;\n        }\n      });\n      request.open('POST', './server.php');\n      request.setRequestHeader('Content-Type', 'application/json');\n      var formData = new FormData(form[i]);\n      var data = {};\n\n      var _iterator = _createForOfIteratorHelper(formData.entries()),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var val = _step.value;\n          data[val[0]] = val[1];\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      request.send(JSON.stringify(data));\n      var inputValue = Array.prototype.slice.call(document.getElementsByTagName('input'));\n      inputValue.map(function (input) {\n        return input.value = '';\n      });\n      setTimeout(closeModal, 4000);\n    });\n  };\n\n  for (var i = 0; i < form.length; i++) {\n    _loop(i);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (send);\n\n//# sourceURL=webpack://diplom_light(new)/./src/modules/send.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slider = document.querySelector('.top-slider'),\n      slide = slider.querySelectorAll('.item'),\n      table = slider.querySelectorAll('.table');\n  var slickDots = document.createElement('div');\n  slickDots.classList.add('slick-dots');\n  slider.append(slickDots);\n  slide.forEach(function () {\n    var dot = document.createElement('li');\n    dot.classList.add('dot');\n    slickDots.append(dot);\n  });\n  var dot = slickDots.querySelectorAll('li');\n  dot[0].classList.add('slick-active');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'item-active');\n    prevSlide(table, currentSlide, 'active');\n    prevSlide(dot, currentSlide, 'slick-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'item-active');\n    nextSlide(table, currentSlide, 'active');\n    nextSlide(dot, currentSlide, 'slick-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (!target.matches('.dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'item-active');\n    prevSlide(table, currentSlide, 'active');\n    prevSlide(dot, currentSlide, 'slick-active');\n\n    if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    nextSlide(slide, currentSlide, 'item-active');\n    nextSlide(table, currentSlide, 'active');\n    nextSlide(dot, currentSlide, 'slick-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://diplom_light(new)/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/upArrow.js":
/*!********************************!*\
  !*** ./src/modules/upArrow.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar upArrow = function upArrow() {\n  var arrow = document.querySelector('.up');\n  var servicesSection = document.querySelector('.services-section');\n  var clientServSection = servicesSection.getBoundingClientRect();\n  arrow.style.display = 'none';\n  window.addEventListener('scroll', function () {\n    var scrolled = window.pageYOffset || document.documentElement.scrollTop;\n\n    if (scrolled >= clientServSection.top) {\n      arrow.style.display = 'block';\n    } else {\n      arrow.style.display = 'none';\n    }\n  });\n  arrow.addEventListener('click', function () {\n    var start = document.querySelector('.main-wrapper');\n    start.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upArrow);\n\n//# sourceURL=webpack://diplom_light(new)/./src/modules/upArrow.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validation = function validation() {\n  var formName = document.getElementsByName('fio'),\n      formPhone = document.getElementsByName('tel');\n  formName.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^а-яА-ЯёЁ' ']/g, '');\n    });\n  });\n  formPhone.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^0-9+]/, '');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://diplom_light(new)/./src/modules/validation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;