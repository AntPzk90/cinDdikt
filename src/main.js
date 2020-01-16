import {createFilmCardTemplate} from './components/film-card';
import {createFilmDetailsCardTemplate} from './components/film-details-card';
import {createFilmsContainerTemplate} from './components/films-container';
import {createLoadMoreBtnTemplate} from './components/load-more-btn';
import {createMainNavigationTemplate} from './components/main-navigation';
import {createProfileRatingTemplate} from './components/profile-rating';
import {createSortTemplate} from './components/sort';

import {FilmsCardsMok} from './mock/card';
import {FilmsFiltersMok} from './mock/main-navigation';

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const header = document.querySelector('.header');
const main = document.querySelector('.main');
render(header, createProfileRatingTemplate());
const filters = FilmsFiltersMok();
console.log(filters)
render(main, createMainNavigationTemplate(filters));
render(main, createSortTemplate());
render(main, createFilmsContainerTemplate());
const filmsContainer = document.querySelector('.films-list__container');
const films = FilmsCardsMok();
for (let i = 0; i < films.length; i++){
  render(filmsContainer, createFilmCardTemplate(films[i]));
}
render(main, createLoadMoreBtnTemplate());

