import AbstractComponent from './abstract-component.js';

const createNoFilmsMessage = () => {
  return `<h2 class="films-list__title">There are no movies in our database</h2>;`
};

export default class NoFulmsMessage extends AbstractComponent {
  constructor () {
    super();
  }
  getTemplate () {
    return createNoFilmsMessage();
  }
}
