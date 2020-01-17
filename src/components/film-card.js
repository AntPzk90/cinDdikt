import {createElement} from './../utils.js'
export const createFilmCardTemplate = (card) => {
  const {filmInfo, comments} = card;
  const {title, totalRating, poster, description, release, runtime,genre} = filmInfo;
  const yearProduction = new Date(release.date).getFullYear();
  const transformTimeDuration = () => {
    let time = runtime;
    let hours = time / 60 ^ 0;
    if (hours) {
        let minutes = time % 60;
        if (minutes < 10) minutes = `0` + minutes;
      time = hours + ` h ` + minutes + ` m`;
    } else {
      time = time + ` m`;
    }
    return time;
  }
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
export default class FilmCard {
  constructor (card) {
    this._element = null;
    this._card = card;
  }
  getTemplate () {
    return createFilmCardTemplate(this._card);
  }
  getElement () {
    if(!this._element){
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement () {
    this._element = null;
  }
}
