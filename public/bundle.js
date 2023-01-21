/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock/card.js":
/*!**************************!*\
  !*** ./src/mock/card.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filmsCardsMok": () => (/* binding */ filmsCardsMok)
/* harmony export */ });
const FilmsTitle = [`Coming To America `, `Dead Poets Society`, `The Shawshank Redemption`, `Good Will Hunting`, `Knockin' On Heaven's Door`, `What Dreams May Come`, `The Legend of Bagger Vance`, `Snatch`, `Big Fish`, `Peaceful warrior`, `The Ultimate Gift`, `Freedom Writers`, `Bridge to Terabithia`, `Giuseppe Moscati: L'amore che guarisce`, `Seven Pounds`];
const FilmsPosters = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];
const FilmsDescription = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, `Cras aliquet varius magna, non porta ligula feugiat eget.`, `Fusce tristique felis at fermentum pharetra.`, `Aliquam id orci ut lectus varius viverra.`, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`, `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`];
const generateRandomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};
const generateFilmsCard = index => {
  return {
    "id": (index + 1).toString(),
    "comments": [`Good film`, `Bad Film`, `So-so film`],
    "filmInfo": {
      "title": FilmsTitle[index],
      "alternativeTitle": `Laziness Who Sold Themselves`,
      "totalRating": generateRandomInteger(2, 8),
      "poster": `./images/posters/` + FilmsPosters[generateRandomInteger(0, FilmsPosters.length - 1)],
      "ageRating": 0,
      "director": `Tom Ford`,
      "writers": [`Takeshi Kitano`],
      "actors": [`Morgan Freeman`],
      "release": {
        "date": 1475924187819,
        "releaseCountry": `Finland`
      },
      "runtime": generateRandomInteger(70, 90),
      "genre": [`Comedy`, `Detective`],
      "description": FilmsDescription.sort().slice(generateRandomInteger(0, 3), generateRandomInteger(3, 7)).join(``)
    },
    "user_details": {
      "personal_rating": generateRandomInteger(4, 9),
      "watchlist": false,
      "already_watched": true,
      "watching_date": `2019-05-11T16:12:32.554Z`,
      "favorite": false
    }
  };
};
const generateFilmCards = count => {
  return new Array(count).fill(``).map((el, i) => generateFilmsCard(i));
};
const filmsCardsMok = () => {
  return generateFilmCards(15);
};

/***/ }),

/***/ "./src/mock/main-navigation.js":
/*!*************************************!*\
  !*** ./src/mock/main-navigation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filmsFiltersMok": () => (/* binding */ filmsFiltersMok)
/* harmony export */ });
const filterNames = [`All`, `Watchlist`, `History`, `Favorites`, `Stats`];
const generateFilters = () => {
  return filterNames.map(it => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10)
    };
  });
};
const filmsFiltersMok = () => {
  return generateFilters();
};

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
const RenderPosition = {
  BEFOREBEGIN: `beforebegin`,
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`
};
const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      container.before(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};

// Принцип работы прост:
// 1. создаём пустой div-блок
// 2. берём HTML в виде строки и вкладываем в этот div-блок, превращая в DOM-элемент
// 3. возвращаем этот DOM-элемент
const createElement = template => {
  const newElement = document.createElement(`div`); // 1
  newElement.innerHTML = template; // 2

  return newElement.firstChild; // 3
};
// Единственный нюанс, что HTML в строке должен иметь общую обёртку,
// то есть быть чем-то вроде <nav><a>Link 1</a><a>Link 2</a></nav>,

/***/ }),

/***/ "./src/view/film-card-view.js":
/*!************************************!*\
  !*** ./src/view/film-card-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmCardTemplate": () => (/* binding */ createFilmCardTemplate)
/* harmony export */ });
const createFilmCardTemplate = task => {
  const {
    filmInfo,
    comments
  } = task;
  const {
    title,
    totalRating,
    poster,
    description,
    release,
    runtime,
    genre
  } = filmInfo;
  const yearProduction = new Date(release.date).getFullYear();
  const transformTimeDuration = () => {
    let time = runtime;
    let hours = time / 60 ^ 0;
    if (hours) {
      let minutes = time % 60;
      if (minutes < 10) {
        minutes = `0` + minutes;
      }
      time = hours + ` h ` + minutes + ` m`;
    } else {
      time = time + ` m`;
    }
    return time;
  };
  const cardDuration = transformTimeDuration();
  const filmGenre = genre.join(` `);
  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${totalRating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${yearProduction}</span>
      <span class="film-card__duration">${cardDuration}</span>
      <span class="film-card__genre">${filmGenre}</span>
    </p>
    <img src=${poster} alt="${title}" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
    </form>
  </article>`;
};

/***/ }),

/***/ "./src/view/films-container-view.js":
/*!******************************************!*\
  !*** ./src/view/films-container-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmsContainerTemplate": () => (/* binding */ createFilmsContainerTemplate)
/* harmony export */ });
const createFilmsContainerTemplate = () => {
  return `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container">


      </div>
    </section>
  </section>`;
};

/***/ }),

/***/ "./src/view/load-more-btn-view.js":
/*!****************************************!*\
  !*** ./src/view/load-more-btn-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLoadMoreBtnTemplate": () => (/* binding */ createLoadMoreBtnTemplate),
/* harmony export */   "default": () => (/* binding */ ShowMoreButtonView)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

const createLoadMoreBtnTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};
var _element = /*#__PURE__*/new WeakMap();
class ShowMoreButtonView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }
  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }
    return _classPrivateFieldGet(this, _element);
  }
  get template() {
    return createLoadMoreBtnTemplate();
  }
  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }
}

/***/ }),

/***/ "./src/view/main-navigation-view.js":
/*!******************************************!*\
  !*** ./src/view/main-navigation-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainNavigationTemplate": () => (/* binding */ createMainNavigationTemplate)
/* harmony export */ });
const createMainNavigationMarkup = (filter, active) => {
  const {
    name,
    count
  } = filter;
  return `<a href="#${name.toLowerCase()}" class="main-navigation__item ${active ? `main-navigation__item--active` : ``}">
  ${name == `All` ? `All movies` : name}  ${name == `All` ? `` : `<span class="main-navigation__item-count"> ${count} </span>`}</a>`;
};
const createMainNavigationTemplate = filters => {
  const filtersMarkup = filters.map((it, i) => createMainNavigationMarkup(it, i === 0)).join(`\n`);
  return `<nav class="main-navigation">
      ${filtersMarkup}
    </nav>`;
};

/***/ }),

/***/ "./src/view/profile-rating-view.js":
/*!*****************************************!*\
  !*** ./src/view/profile-rating-view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProfileRatingTemplate": () => (/* binding */ createProfileRatingTemplate)
/* harmony export */ });
const createProfileRatingTemplate = () => {
  return `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

/***/ }),

/***/ "./src/view/sort-list-view.js":
/*!************************************!*\
  !*** ./src/view/sort-list-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSortTemplate": () => (/* binding */ createSortTemplate)
/* harmony export */ });
const createSortTemplate = () => {
  return `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_film_card_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/film-card-view */ "./src/view/film-card-view.js");
/* harmony import */ var _view_films_container_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/films-container-view */ "./src/view/films-container-view.js");
/* harmony import */ var _view_load_more_btn_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/load-more-btn-view */ "./src/view/load-more-btn-view.js");
/* harmony import */ var _view_main_navigation_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/main-navigation-view */ "./src/view/main-navigation-view.js");
/* harmony import */ var _view_profile_rating_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/profile-rating-view */ "./src/view/profile-rating-view.js");
/* harmony import */ var _view_sort_list_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/sort-list-view */ "./src/view/sort-list-view.js");
/* harmony import */ var _mock_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/card */ "./src/mock/card.js");
/* harmony import */ var _mock_main_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/main-navigation */ "./src/mock/main-navigation.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./render */ "./src/render.js");









const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;
const renderF = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);
renderF(header, (0,_view_profile_rating_view__WEBPACK_IMPORTED_MODULE_4__.createProfileRatingTemplate)());
const filters = (0,_mock_main_navigation__WEBPACK_IMPORTED_MODULE_7__.filmsFiltersMok)();
renderF(main, (0,_view_main_navigation_view__WEBPACK_IMPORTED_MODULE_3__.createMainNavigationTemplate)(filters));
renderF(main, (0,_view_sort_list_view__WEBPACK_IMPORTED_MODULE_5__.createSortTemplate)());
renderF(main, (0,_view_films_container_view__WEBPACK_IMPORTED_MODULE_1__.createFilmsContainerTemplate)());
const filmsContainer = document.querySelector(`.films-list__container`);
const films = (0,_mock_card__WEBPACK_IMPORTED_MODULE_6__.filmsCardsMok)();

// renderF(main, createLoadMoreBtnTemplate());

(0,_render__WEBPACK_IMPORTED_MODULE_8__.render)();
let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;
films.slice(0, showingFilmsCount).forEach(film => renderF(filmsContainer, (0,_view_film_card_view__WEBPACK_IMPORTED_MODULE_0__.createFilmCardTemplate)(film)));
const showMoreButton = document.querySelector(`.films-list__show-more`);
showMoreButton.addEventListener(`click`, () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount = showingFilmsCount + SHOWING_FILMS_COUNT_BY_BUTTON;
  films.slice(prevFilmsCount, showingFilmsCount).forEach(film => renderF(filmsContainer, (0,_view_film_card_view__WEBPACK_IMPORTED_MODULE_0__.createFilmCardTemplate)(film)));
  if (showingFilmsCount >= films.length) {
    showMoreButton.remove();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map