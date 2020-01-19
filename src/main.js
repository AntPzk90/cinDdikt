import {FilmsCardsMok} from './mock/card';
import {FilmsFiltersMok} from './mock/main-navigation';
//
import ProfileRating from './components/profile-rating';
import MainMenuComponent from './components/main-navigation';
import Sort from './components/sort';
import FilmsContainer from './components/films-container';
import FilmCard from './components/film-card';
import FilmCardDetails from './components/film-details-card';
import ShowMoreBtn from './components/load-more-btn.js';
import NofilmsMessage from './components/no-fims.js';

import {render, RenderPosition}from './utils.js'

const filters = FilmsFiltersMok();
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const films = FilmsCardsMok();
const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;
let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

const renderCardFilm = (film) => {
  const cardComponent = new FilmCard(film);
  const cardDetailsComponent = new FilmCardDetails(film);

  const removeCardFilmDetails = () => {
    cardDetailsComponent.getElement().remove();
    cardDetailsComponent.removeElement();
  };
  const onEscPress = (evt) => {
    if(evt.key === `Escape` || evt.key === `Esc`){
      removeCardFilmDetails();
      document.removeEventListener(`keydown`, onEscPress);
    }
  };

  const cardPoster = cardComponent.getElement().querySelector(`.film-card__poster`);

  cardPoster.addEventListener(`click`,() => {
    render(main, cardDetailsComponent.getElement(),RenderPosition.BEFOREEND);
    document.addEventListener(`keydown`,onEscPress);
  });

  const filmDetailsCloseBtn = cardDetailsComponent.getElement().querySelector(`.film-details__close-btn`);
  filmDetailsCloseBtn.addEventListener(`click`, () => {
    removeCardFilmDetails();
  });

  render(filmsContainer, cardComponent.getElement(), RenderPosition.BEFOREEND);
}

render(header, new ProfileRating().getElement(), RenderPosition.BEFOREEND);
render(main, new MainMenuComponent(filters).getElement(), RenderPosition.BEFOREEND);
render(main, new Sort().getElement(), RenderPosition.BEFOREEND);
render(main, new FilmsContainer().getElement(), RenderPosition.BEFOREEND)

const filmsContainer = document.querySelector('.films-list__container');

if(films.length == 0){
  render(filmsContainer, new NofilmsMessage().getElement(), RenderPosition.BEFOREEND);
} else {
  films.slice(0, showingFilmsCount)
    .forEach((film) => renderCardFilm(film));

  const showMoreButton = new ShowMoreBtn();

  render(main, showMoreButton.getElement(), RenderPosition.BEFOREEND);

  showMoreButton.getElement().addEventListener(`click`, () => {
    const prevFilmsCount = showingFilmsCount;
    showingFilmsCount = showingFilmsCount + SHOWING_FILMS_COUNT_BY_BUTTON;

    films.slice(prevFilmsCount, showingFilmsCount)
      .forEach((film) => renderCardFilm(film));
    if (showingFilmsCount >= films.length) {
      showMoreButton.getElement().remove();
      showMoreButton.removeElement();
    }
  });
}


