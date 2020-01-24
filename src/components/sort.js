import AbstractComponent from './abstract-component.js';

export const SortType = {
  DATE: `date`,
  RATING: `rating`,
  DEFAULT: `default`,
};

export const createSortTemplate = () => {
  return `<ul class="sort">
    <li><a href="#" data-sort-type="${SortType.DEFAULT}" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" data-sort-type="${SortType.DATE}" class="sort__button">Sort by date</a></li>
    <li><a href="#" data-sort-type="${SortType.RATING}"class="sort__button">Sort by rating</a></li>
  </ul>`;
};

export default class Sort extends AbstractComponent{
  constructor () {
    super();
    this._currenSortType = SortType.DEFAULT;
  }
  getTemplate () {
    return createSortTemplate();
  }
  setSortTypeChangeHandler(handler) {

    this.getElement().addEventListener(`click`, (evt) => {

      evt.preventDefault();

      this.getElement().querySelectorAll(`.sort__button`).forEach((el) => {
        el.classList.remove(`sort__button--active`);
      });
      evt.target.classList.add(`sort__button--active`);

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;
      if (this._currenSortType === sortType) {
        return;
      }

      this._currenSortType = sortType;
      console.log(this._currenSortType)
      handler(this._currenSortType);
    });
  }
}
