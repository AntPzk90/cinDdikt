import AbstractComponent from './abstract-component.js';

export const createLoadMoreBtnTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class ShowMoreBtn extends AbstractComponent{
  constructor () {
    super();
  }
  getTemplate () {
    return createLoadMoreBtnTemplate();
  }
  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
