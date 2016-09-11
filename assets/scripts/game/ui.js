'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const displayBoard = function (){
  $('.board-wrapper').css('display', 'block');
};

const newGameSuccess = (data) => {
  app.game = data.game;
  displayBoard();
  console.log(app.game);
};

const onIndexGameSuccess = (data) => {
  console.log(data);
  document.getElementById("index-game-result").innerHTML = '# Games: '+ data.games.length;
  $('#index-game-result').fadeIn('fast').delay(3000).fadeOut('fast');
};

module.exports = {
  success,
  failure,
  newGameSuccess,
  // onShowGameSuccess,
  onIndexGameSuccess
};
