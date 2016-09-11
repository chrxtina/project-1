'use strict';
const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onNewGame = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};

const onIndexGame = function (event) {
  event.preventDefault();
  api.indexGame()
    .done(ui.onIndexGameSuccess)
    .fail(ui.failure);
};

// const onShowGame= function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.showGame(data)
//     .done(ui.onShowGameSuccess)
//     .fail(ui.failure);
// };

const onJoinGame= function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.joinGame(data)
    .done(ui.success)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#new-game').on('submit', onNewGame);
  $('#index-game').on('submit', onIndexGame);
  // $('#show-game').on('submit', onShowGame);
  $('#join-game').on('submit', onJoinGame);
};

module.exports = {
  addHandlers,
};
