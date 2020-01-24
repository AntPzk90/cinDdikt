import {render, RenderPosition}from './../utils.js'
import FilmCard from './../components/film-card.js';
import FilmCardDetails from './../components/film-details-card.js';
import ShowMoreBtn from './../components/load-more-btn.js';
//import MainMenuComponent from './components/main-navigation';
import Sort,{SortType} from './../components/sort';
import FilmsContainer from './../components/films-container';

const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;
let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

export default class PageController {
  constructor(container){
    this._container = container;
    this._showMoreBtn = new ShowMoreBtn();
    this._sortComponent = new Sort();
  }


  render(films) {

    render(this._container, this._sortComponent.getElement(), RenderPosition.BEFOREEND);
    render(this._container, new FilmsContainer().getElement(), RenderPosition.BEFOREEND);
    const container = this._container.querySelector(`.films-list__container`);

    // функция рендера карточек фильма
    const renderCardFilm = (film) => {

      const cardComponent = new FilmCard(film);
      const cardDetailsComponent = new FilmCardDetails(film);

      const removeCardFilmDetails = () => {
        cardDetailsComponent.getElement().remove();
        //cardDetailsComponent.removeElement();
      };
      const onEscPress = (evt) => {
        if(evt.key === `Escape` || evt.key === `Esc`){
          removeCardFilmDetails();
          document.removeEventListener(`keydown`, onEscPress);
        }
      };

      const cardPoster = cardComponent.getElement().querySelector(`.film-card__poster`);

      cardPoster.addEventListener(`click`,() => {
        render(container, cardDetailsComponent.getElement(),RenderPosition.BEFOREEND);
        document.addEventListener(`keydown`,onEscPress);
      });

      const filmDetailsCloseBtn = cardDetailsComponent.getElement().querySelector(`.film-details__close-btn`);
      filmDetailsCloseBtn.addEventListener(`click`, () => {
        removeCardFilmDetails();
      });

      render(container, cardComponent.getElement(), RenderPosition.BEFOREEND);
    }
    //конец рендера
    if(films.length == 0){
      render(filmsContainer, new NofilmsMessage().getElement(), RenderPosition.BEFOREEND);
    } else {
      films.slice(0, showingFilmsCount)
        .forEach((film) => renderCardFilm(film));

      const createShowMoreBtn = () => {
        if (showingFilmsCount >= films.length) {
          return;
        }

        const showMoreButton = this._showMoreBtn;

        render(this._container, showMoreButton.getElement(), RenderPosition.BEFOREEND);

        const showMoreBtnClickHendler = () => {
          const prevFilmsCount = showingFilmsCount;
          showingFilmsCount = showingFilmsCount + SHOWING_FILMS_COUNT_BY_BUTTON;

          films.slice(prevFilmsCount, showingFilmsCount)
            .forEach((film) => renderCardFilm(film));
          if (showingFilmsCount >= films.length) {
            showMoreButton.getElement().remove();
            showMoreButton.removeElement();
          }
        };

        showMoreButton.setClickHandler(showMoreBtnClickHendler);

        if (showingFilmsCount >= films.length) {
          showMoreButton.getElement().remove();
        }
      };

      createShowMoreBtn();

      this._sortComponent.setSortTypeChangeHandler((sortType) => {
        let sortedFilms = [];

        switch (sortType) {
          case SortType.RATING:

            sortedFilms = films.slice().sort((a, b) => a.filmInfo.totalRating - b.filmInfo.totalRating);
            break;
          case SortType.DATE:
            sortedFilms = films.slice().sort((a, b) => a.filmInfo.release.date - a.filmInfo.release.date );
            break;
          case SortType.DEFAULT:
            sortedFilms = films.slice(0, showingFilmsCount);
            break;
        }

        container.innerHTML = ``;
        console.log(showingFilmsCount)
        sortedFilms.slice(0, showingFilmsCount)
        .forEach((film) => renderCardFilm(film));
      });
    }
  }
}
