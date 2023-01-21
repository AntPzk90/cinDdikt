import FilmCardView from './view/film-card-view';
import FilmsContainerView from './view/films-container-view';
import ShowMoreButtonView from './view/load-more-btn-view';
import MainNavigationView from './view/main-navigation-view';
import ProfileRatingView from './view/profile-rating-view';
import SortListView from './view/sort-list-view';
import FilmDetailsCardView from './view/film-details-card-view';
import {filmsCardsMok} from "./mock/card";
import {filmsFiltersMok} from "./mock/main-navigation";
import {render, RenderPosition} from "./render";

const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;
let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;
const filters = filmsFiltersMok();
const films = filmsCardsMok();

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

const showMoreButtonView = new ShowMoreButtonView();

render(header, new ProfileRatingView().element, RenderPosition.BEFOREEND);
render(main, new MainNavigationView(filters).element, RenderPosition.BEFOREEND);
render(main, new SortListView().element, RenderPosition.BEFOREEND);
render(main, new FilmsContainerView().element, RenderPosition.BEFOREEND);
const filmsContainer = document.querySelector(`.films-list__container`);
render(main, showMoreButtonView.element, RenderPosition.BEFOREEND);

const renderFilms = (countStart, countAll) => {
  films.slice(countStart, countAll)
    // eslint-disable-next-line new-cap
    .forEach((film) => {
      const filmCard = new FilmCardView(film);
      const filmCardDetails = new FilmDetailsCardView(film);

      const filmCardDetailsRemoveHandler = () => {
        filmCardDetails.element.remove();
        filmCardDetails.removeElement();
      };

      const onEscKeyDown = (evt) => {
        if (evt.key === `Escape` || evt.key === `Esc`) {
          evt.preventDefault();
          filmCardDetailsRemoveHandler();
          document.removeEventListener(`keydown`, onEscKeyDown);
        }
      };

      filmCard.element.addEventListener(`click`, () => {
        document.body.addEventListener(`keydown`, onEscKeyDown);
        filmCardDetails.element.querySelector(`.film-details__close-btn`).addEventListener(`click`, filmCardDetailsRemoveHandler);
        render(main, filmCardDetails.element, RenderPosition.AFTEREND);
      });

      render(filmsContainer, filmCard.element, RenderPosition.BEFOREEND);
    });
};

renderFilms(0, showingFilmsCount);

showMoreButtonView.element.addEventListener(`click`, () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount = showingFilmsCount + SHOWING_FILMS_COUNT_BY_BUTTON;

  renderFilms(prevFilmsCount, showingFilmsCount);

  if (showingFilmsCount >= films.length) {
    showMoreButtonView.element.remove();
    showMoreButtonView.removeElement();
  }
});

