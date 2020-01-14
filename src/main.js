import {createFilmCardTemplate} from './components/film-card';
import {createFilmDetailsCardTemplate} from './components/film-details-card';
import {createFilmsContainerTemplate} from './components/films-container';
import {createLoadMoreBtnTemplate} from './components/load-more-btn';
import {createMainNavigationTemplate} from './components/main-navigation';
import {createProfileRatingTemplate} from './components/profile-rating';
import {createSortTemplate} from './components/sort';
const FILMS_COUNT = 3;
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const header = document.querySelector('.header');
const main = document.querySelector('.main');
render(header, createProfileRatingTemplate());
render(main, createMainNavigationTemplate());
render(main, createSortTemplate());
render(main, createFilmsContainerTemplate());
var filmsContainer = document.querySelector('.films-list__container');
for (let i = 0; i < FILMS_COUNT; i++){
  render(filmsContainer, createFilmCardTemplate());
}
render(main, createLoadMoreBtnTemplate());

