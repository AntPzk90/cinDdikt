import {createElement} from "../render";

export const createLoadMoreBtnTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class ShowMoreButtonView {
  #element = null;

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template)
    }

    return this.#element
  }

  get template() {
    return createLoadMoreBtnTemplate();
  }

  removeElement() {
    this.#element = null
  }
}
