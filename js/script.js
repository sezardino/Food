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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
 // import forms from './modules/forms';






window.addEventListener('DOMContentLoaded', () => {
  const showModalId = setTimeout(() => openModal('[data-modal]', showModalId), 500000);
  Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('2020-06-26', '.timer');
  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_3__["default"])('[data-modal]', '[data-modalClose]', '.modal', showModalId);
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_5__["default"])('.tabheader__item', '.tabheader__items', '.tabcontent', 'tabheader__item_active'); // forms('form', showModalId);

  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCouner: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
});

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calculator() {
  const result = document.querySelector('.calculating__result span');
  let sex = 'female',
      weight,
      height,
      age,
      ratio = 1.335;

  const calculateCalories = () => {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = `****`;
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
    } else {
      result.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    }
  };

  calculateCalories();

  const getStaticInfo = (parentSelector, activityClass) => {
    const elements = document.querySelectorAll(`${parentSelector} div`);
    elements.forEach(element => {
      element.addEventListener('click', evt => {
        const target = evt.target;

        if (target.getAttribute('data-ratio')) {
          ratio = +target.getAttribute('data-ratio');
        } else {
          sex = target.getAttribute('id');
        }

        elements.forEach(element => element.classList.remove(activityClass));
        target.classList.add(activityClass);
        calculateCalories();
      });
    });
  };

  getStaticInfo('#gender', 'calculating__choose-item_active');
  getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');

  const getDinamickInfo = selector => {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
      input.getAttribute('id') === 'height' ? height = input.value : input.getAttribute('id') === 'weight' ? weight = input.value : age = input.value;
      calculateCalories();
    });
  };

  getDinamickInfo('#height');
  getDinamickInfo('#weight');
  getDinamickInfo('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function cards() {
  class MenuCard {
    constructor(img, alt, title, text, price, parentSelector) {
      this.img = img;
      this.altimg = alt;
      this.title = title;
      this.text = text;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const elementHtml = () => {
        return `<div class="menu__item">
                  <img src=${this.img} alt=${this.altimg}>
                  <h3 class="menu__item-subtitle">${this.title}</h3>
                  <div class="menu__item-descr">${this.text}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                      <div class="menu__item-cost">Цена:</div>
                      <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                  </div>
              </div>`;
      };

      this.parent.insertAdjacentHTML('beforeend', elementHtml());
    }

  }

  const render = (container, element, place = 'beforeEnd') => {
    parent = document.querySelector(container);
    parent.insertAdjacentHTML(place, element);
  };

  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResorces"])('http://localhost:3000/menu').then(data => {
    data.forEach(({
      img,
      altimg,
      title,
      descr,
      price
    }) => {
      const transfer = 27;
      price = transfer * price;

      const cardTemplate = () => {
        return `<div class="menu__item">
                          <img src=${img} alt=${altimg}>
                          <h3 class="menu__item-subtitle">${title}</h3>
                          <div class="menu__item-descr">${descr}</div>
                          <div class="menu__item-divider"></div>
                          <div class="menu__item-price">
                              <div class="menu__item-cost">Цена:</div>
                              <div class="menu__item-total"><span>${price}</span> грн/день</div>
                          </div>
                      </div>`;
      };

      render('.menu .container', cardTemplate());
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: openModal, closeModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
const openModal = (modalSelector, timerId) => {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  clearTimeout(timerId);
};
const closeModal = modalSelector => {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'none';
  document.body.style.overflow = '';
};

function modals(trigerSelector, modalCloseBtnSelector, modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector),
        modalBtns = document.querySelectorAll(trigerSelector),
        modalCloseBtn = document.querySelector(modalCloseBtnSelector);

  const onModalBtnClick = () => {
    openModal(modalSelector);
  };

  const onModalCloseBtnClick = () => {
    closeModal(modalSelector);
  };

  modalBtns.forEach(btn => {
    btn.addEventListener('click', onModalBtnClick);
  });
  modalCloseBtn.addEventListener('click', onModalCloseBtnClick);

  const onWindowScroll = () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelector);
      window.removeEventListener('scroll', onWindowScroll);
    }
  };

  window.addEventListener('scroll', onWindowScroll);
}

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCouner,
  wrapper,
  field
}) {
  const sliderContainer = document.querySelector(container),
        sliderWrapper = document.querySelector(wrapper),
        sliderInner = sliderContainer.querySelector(field),
        slides = sliderContainer.querySelectorAll(slide),
        prev = sliderContainer.querySelector(prevArrow),
        next = sliderContainer.querySelector(nextArrow),
        total = sliderContainer.querySelector(totalCounter),
        current = sliderContainer.querySelector(currentCouner),
        width = window.getComputedStyle(sliderWrapper).width;
  let slideIndex = 1,
      offset = 0;
  current.textContent = `0${slideIndex}`;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  const checkIndex = n => {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  };

  sliderContainer.style.position = 'relative';
  const indicators = document.createElement('ol'),
        dots = [];
  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
  sliderContainer.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `;

    if (i === 0) {
      dot.style.opacity = 1;
    }

    indicators.append(dot);
    dots.push(dot);
  }

  sliderInner.style.width = 100 * slides.length + '%';
  sliderInner.style.display = 'flex';
  sliderWrapper.style.overflow = 'hidden';
  sliderInner.style.transition = '0.5s all';
  next.addEventListener('click', () => {
    offset += +width.slice(0, width.length - 2);

    if (offset == width.slice(0, width.length - 2) * slides.length) {
      offset = 0;
    }

    slideIndex += 1;
    checkIndex(slideIndex);
    sliderInner.style.transform = `translateX(-${offset}px)`;
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  });
  prev.addEventListener('click', () => {
    offset -= +width.slice(0, width.length - 2);

    if (offset < 0) {
      offset = width.slice(0, width.length - 2) * (slides.length - 1);
    }

    slideIndex -= 1;
    checkIndex(slideIndex);
    sliderInner.style.transform = `translateX(-${offset}px)`;
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  });
  dots.forEach(dot => {
    dot.addEventListener('click', evt => {
      const slideTo = evt.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = width.slice(0, width.length - 2) * (slideIndex - 1);
      sliderInner.style.transform = `translateX(-${offset}px)`;
      checkIndex(slideIndex);
      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsParent, tabContentSelector, tabActiveClass) {
  const tabsContent = document.querySelectorAll(tabContentSelector),
        tabs = document.querySelectorAll(tabsSelector),
        tabsContainer = document.querySelector(tabsParent);

  const hideTabContent = () => {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');
    });
    tabs.forEach(item => {
      item.classList.remove(tabActiveClass);
    });
  };

  const showTabContent = (i = 0) => {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabsContent[i].classList.add('fade');
    tabsContent[i].classList.remove('fade');
    tabs[i].classList.add(tabActiveClass);
  };

  hideTabContent();
  showTabContent();
  tabsContainer.addEventListener('click', evt => {
    const target = evt.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (item === target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(deadline, selector) {
  let deadlineTimer = deadline => {
    let total = Date.parse(deadline) - Date.parse(new Date()),
        seconds = total / 1000 % 60,
        minutes = Math.floor(total / (1000 * 60) % 60),
        hours = Math.floor(total / (1000 * 60 * 60) % 24),
        days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      seconds,
      minutes,
      hours,
      days
    };
  };

  const updateClock = (selector, deadline) => {
    const container = document.querySelector(selector),
          days = container.querySelector('#days'),
          hours = container.querySelector('#hours'),
          minutes = container.querySelector('#minutes'),
          seconds = container.querySelector('#seconds');

    const update = () => {
      const info = deadlineTimer(deadline);
      info.days.toString().length === 1 ? days.textContent = `0${info.days}` : days.textContent = info.days;
      info.hours.toString().length === 1 ? hours.textContent = `0${info.hours}` : hours.textContent = info.hours;
      info.minutes.toString().length === 1 ? minutes.textContent = `0${minutes.days}` : minutes.textContent = info.minutes;
      info.seconds.toString().length === 1 ? seconds.textContent = `0${info.seconds}` : seconds.textContent = info.seconds;
      const timer = setTimeout(update, 1000);

      if (info.total <= 0) {
        clearTimeout(timer);
        days.textContent = `00`;
        hours.textContent = `00`;
        minutes.textContent = `00`;
        seconds.textContent = `00`;
      }
    };

    update();
  };

  updateClock(selector, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: getResorces, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResorces", function() { return getResorces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
const getResorces = async url => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Error');
  }

  return await response.json();
};
const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  });
  return await response.json();
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map