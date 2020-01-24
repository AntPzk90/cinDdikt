import {FilmsCardsMok} from './mock/card';
import {FilmsFiltersMok} from './mock/main-navigation';
//
import ProfileRating from './components/profile-rating';
import MainMenuComponent from './components/main-navigation';
import {render, RenderPosition}from './utils.js'
import PageController from './controllers/page-controller.js';
import MovieController from './controllers/movie-controller.js';

const filters = FilmsFiltersMok();
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const films = FilmsCardsMok();
const filmsList = main.querySelector(`.films-list__container`);

render(header, new ProfileRating().getElement(), RenderPosition.BEFOREEND);
render(main, new MainMenuComponent(filters).getElement(), RenderPosition.BEFOREEND);

const pageController = new PageController(main);
pageController.render(films);
const movieController =  new MovieController(filmsList);
movieController.renderCardFilm(films)


