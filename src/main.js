
import {createFilmDetailsCardTemplate} from './components/film-details-card';

import {createLoadMoreBtnTemplate} from './components/load-more-btn';

//
import {FilmsCardsMok} from './mock/card';
import {FilmsFiltersMok} from './mock/main-navigation';
//
import ProfileRating from './components/profile-rating';
import MainMenuComponent from './components/main-navigation';
import Sort from './components/sort';
import FilmsContainer from './components/films-container';
import FilmCard from './components/film-card';
import ShowMoreBtn from './components/load-more-btn.js';

import {render, RenderPosition}from './utils.js'

const filters = FilmsFiltersMok();
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const films = FilmsCardsMok();
const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;
let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;
// const render = (container, template, place = `beforeend`) => {
//   container.insertAdjacentHTML(place, template);
// };

render(header, new ProfileRating().getElement(), RenderPosition.BEFOREEND);
render(main, new MainMenuComponent(filters).getElement(), RenderPosition.BEFOREEND);
render(main, new Sort().getElement(), RenderPosition.BEFOREEND);
render(main, new FilmsContainer().getElement(), RenderPosition.BEFOREEND)

const filmsContainer = document.querySelector('.films-list__container');

films.slice(0, showingFilmsCount)
  .forEach((film) => render(filmsContainer, new FilmCard(film).getElement(), RenderPosition.BEFOREEND));
render(main, new ShowMoreBtn().getElement(), RenderPosition.BEFOREEND);

const showMoreButton = document.querySelector(`.films-list__show-more`);

showMoreButton.addEventListener(`click`, () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount = showingFilmsCount + SHOWING_FILMS_COUNT_BY_BUTTON;

  films.slice(prevFilmsCount, showingFilmsCount)
    .forEach((film) => render(filmsContainer, new FilmCard(film).getElement(), RenderPosition.BEFOREEND));
  if (showingFilmsCount >= films.length) {
    showMoreButton.remove();
  }
});

