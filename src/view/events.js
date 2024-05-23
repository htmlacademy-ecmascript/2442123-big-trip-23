import {createElement} from '../render.js';

function createEventsTemplate() {
  return (`
  <ul class="trip-events__list">
  <ul>
  `);
}

export default class Events {
  getTemplate = () => createEventsTemplate();

  getElement = () => {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  };

  removeElement = () => {
    this.element = null;
  };
}
