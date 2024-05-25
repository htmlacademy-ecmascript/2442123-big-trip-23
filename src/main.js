import Presenter from './presenter/presenter.js';

const tripMainElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');
const boardPresenter = new Presenter({boardContainer: tripEventsElement, headerContainer:tripMainElement});

boardPresenter.init();
