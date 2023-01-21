import {createElement} from "../render";

const createMainNavigationMarkup = (filter, active) => {
  const {name, count} = filter;
  return `<a href="#${name.toLowerCase()}" class="main-navigation__item ${ active ? `main-navigation__item--active` : ``}">
  ${name === `All` ? `All movies` : name}  ${ name === `All` ? `` : `<span class="main-navigation__item-count"> ${count} </span>`}</a>`;
};
export const createMainNavigationTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createMainNavigationMarkup(it, i === 0)).join(`\n`);
  return (
    `<nav class="main-navigation">
      ${filtersMarkup}
    </nav>`
  );
};

export default class MainNavigationView {
  #element = null;
  #filters = null;

  constructor(filters) {
    this.#filters = filters
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template)
    }

    return this.#element
  }

  get template() {
    return createMainNavigationTemplate(this.#filters);
  }

  removeElement() {
    this.#element = null
  }
}
