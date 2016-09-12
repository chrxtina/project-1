'use strict';

const app = require('../app');

// const success = (data) => {
//   console.log(data);
// };

const joinGameSuccess = function (data) {
  document.getElementById("message").innerHTML = 'Successfully joined game '+ data.game.id;
  $('#message').fadeIn('fast').delay(4000).fadeOut('fast');
};

const failure = (error) => {
  console.log(error);
  document.getElementById("message").innerHTML = 'Error: ' + error.statusText;
  $('#message').fadeIn('fast').delay(4000).fadeOut('fast');
};

const displayBoard = function (){
  $('.board-wrapper').css('display', 'block');
};

const hideNewGameButton = function() {
  $('#new-game').hide();
};

const newGameSuccess = (data) => {
  app.game = data.game;
  displayBoard();
  hideNewGameButton();
};

const onIndexGameSuccess = (data) => {
  document.getElementById("message").innerHTML = 'Games played: '+ data.games.length;
  $('#message').fadeIn('fast').delay(4000).fadeOut('fast');
};

module.exports = {
  // success,
  failure,
  joinGameSuccess,
  newGameSuccess,
  // onShowGameSuccess,
  onIndexGameSuccess
};
