import {render} from '../render.js';
import TripMain from '../view/trip-main.js';
import Filters from '../view/filters.js';
import CreateButton from '../view/createButton.js';
import Sorting from '../view/sorting.js';
import Events from '../view/events.js';
import CreationFormForm from '../view/creation-form.js';
import Edit from '../view/editing-form.js';
import Waypoint from '../view/waypoint.js';

export default class Presenter {
  eventListComponent = new Events();
  constructor({boardContainer,headerContainer}) {
    this.boardContainer = boardContainer;
    this.headerContainer = headerContainer;
  }

  init() {
    render(new TripMain(), this.headerContainer);
    render(new Filters(), this.headerContainer);
    render(new CreateButton(), this.headerContainer);
    render(new Sorting(),this.boardContainer);
    render(this.eventListComponent,this.boardContainer);
    for (let i = 0; i < 5;i++) {
      if (i === 0) {
        render(new CreationFormForm(), this.eventListComponent.getElement());
        continue;
      }
      if (i === 1) {
        render(new Edit(), this.eventListComponent.getElement());
        continue;
      }

      render(new Waypoint(), this.eventListComponent.getElement());
    }
  }
}
