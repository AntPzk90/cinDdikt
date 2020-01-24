import {render, RenderPosition}from './../utils.js'
import FilmCard from './../components/film-card.js';
import FilmCardDetails from './../components/film-details-card.js';


export default class MovieController {
  constructor(container, film) {
    this._container = container;
    this._film = new FilmCard(film);
    this._detailsFilm = new FilmCardDetails(film);
  }

  renderCardFilm () {

    const removeCardFilmDetails = () => {
      this._detailsFilm.getElement().remove();
      //this._detailsFilm.removeElement();
    };
    const onEscPress = (evt) => {
      if(evt.key === `Escape` || evt.key === `Esc`){
        removeCardFilmDetails();
        document.removeEventListener(`keydown`, onEscPress);
      }
    };

    const cardPoster = this._film.getElement().querySelector(`.film-card__poster`);

    cardPoster.addEventListener(`click`,() => {
      render(this._container, this._detailsFilm.getElement(),RenderPosition.BEFOREEND);
      document.addEventListener(`keydown`,onEscPress);
    });

    const filmDetailsCloseBtn = this._detailsFilm.getElement().querySelector(`.film-details__close-btn`);
    filmDetailsCloseBtn.addEventListener(`click`, () => {
      removeCardFilmDetails();
    });

    render(this._container, this._film.getElement(), RenderPosition.BEFOREEND);
  }
}
