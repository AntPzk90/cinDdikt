import {createFilmCardTemplate} from './components/film-card';
import {createFilmDetailsCardTemplate} from './components/film-details-card';
import {createFilmsContainerTemplate} from './components/films-container';
import {createLoadMoreBtnTemplate} from './components/load-more-btn';
import {createMainNavigationTemplate} from './components/main-navigation';
import {createProfileRatingTemplate} from './components/profile-rating';
import {createSortTemplate} from './components/sort';

import {FilmsCardsMok} from './mock/card';
import {FilmsFiltersMok} from './mock/main-navigation';

const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const header = document.querySelector('.header');
const main = document.querySelector('.main');

render(header, createProfileRatingTemplate());

const filters = FilmsFiltersMok();

render(main, createMainNavigationTemplate(filters));
render(main, createSortTemplate());
render(main, createFilmsContainerTemplate());

const filmsContainer = document.querySelector('.films-list__container');
const films = FilmsCardsMok();

render(main, createLoadMoreBtnTemplate());

let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;
films.slice(0, showingFilmsCount)
  .forEach((film) => render(filmsContainer, createFilmCardTemplate(film)));

const showMoreButton = document.querySelector(`.films-list__show-more`);

showMoreButton.addEventListener(`click`, () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount = showingFilmsCount + SHOWING_FILMS_COUNT_BY_BUTTON;

  films.slice(prevFilmsCount, showingFilmsCount)
    .forEach((film) => render(filmsContainer, createFilmCardTemplate(film)));
  if (showingFilmsCount >= films.length) {
    showMoreButton.remove();
  }
});

