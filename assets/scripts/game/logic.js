'use strict';

const api = require('./api');
// const ui = require('./ui');

let player = '';
let board = ['','','','','','','','','',];
let turn = 0;
let gameOver = false;
let winner;

const setMessage = function(msg) {
  document.getElementById("message").innerHTML = msg;
  $('#message').fadeIn('fast').delay(4000).fadeOut('fast');
};

const stopPlay = function(){
  $('.cell').off('click');
};

const displayDoneButton = function () {
  $('.reset-board').css('display', 'block');
};

const hideDoneButton = function () {
  $('.reset-board').css('display', 'none');
};

const removeBoard = function () {
  $('.board-wrapper').css('display', 'none');
};

const showNewGameButton = function() {
  $('#new-game').show();
};

const checkWinner = function (){
  if (
    board[0]===player && board[1]===player && board[2]===player ||
    board[3]===player && board[4]===player && board[5]===player ||
    board[6]===player && board[7]===player && board[8]===player ||
    board[0]===player && board[3]===player && board[6]===player ||
    board[1]===player && board[4]===player && board[7]===player ||
    board[2]===player && board[5]===player && board[8]===player ||
    board[0]===player && board[4]===player && board[8]===player ||
    board[2]===player && board[4]===player && board[6]===player
  )
    {
      winner = player;
      gameOver = true;
      setMessage('Winner is '+ winner + '!');
    }
  else if (turn === 9){
    gameOver = true;
    setMessage('Tie game!');
  }
  if (gameOver === true){
    stopPlay();
    displayDoneButton();
  }
};

const onClickCell= function (event) {
  event.preventDefault();
  let cell = $(event.target);
  let id = cell.data('id');

  if($(this).html() === '') {
    if (turn % 2 === 0){
      player = 'X';
    } else {
      player = 'O';
    }
    $(this).text(player);
    board[id] = player;
    turn++;
    api.updateGame(id, player, gameOver);
    checkWinner();
  }
  else {
    setMessage('Spot already taken!');
  }
};

const resumePlay = function(){
  $('.cell').on('click', onClickCell);
};

const resetBoard = function (){
  $('.cell').empty();
  player = '';
  board = ['','','','','','','','','',];
  turn = 0;
  gameOver = false;
  winner = null;
  hideDoneButton();
  removeBoard();
  resumePlay();
  showNewGameButton();
};

const addHandlers = () => {
  $('.cell').on('click', onClickCell);
  $('.reset-board').on('click', resetBoard);
};

module.exports = {
  addHandlers
};
