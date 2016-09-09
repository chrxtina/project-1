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
    .done(ui.success)
    .fail(ui.failure);
};

const onShowGame= function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.showGame(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onJoinGame= function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.joinGame(data)
    .done(ui.success)
    .fail(ui.failure);
};

// let cell = function(idx) {
//   return $('#'+ idx);
// };
//
// let checkWin = function(a,b,c){
//   if (cell(a).text() === game.player &&
//   cell(b).text() === game.player &&
//   cell(c).text() === game.player){
//     return true;
//   } else {
//     return false;
//   }
// };
//
// let checkWinner = function (){
//   if (checkWin(0, 1, 2) ||
//     checkWin(3, 4, 5) ||
//     checkWin(6, 7, 8) ||
//     checkWin(0, 3, 6) ||
//     checkWin(1, 4, 7) ||
//     checkWin(2, 5, 8) ||
//     checkWin(0, 4, 8) ||
//     checkWin(2, 4, 6)) {
//       game.winner = game.player;
//       game.gameOver = true;
//     }
//     else {
//       return false;
//     }
//     clearBoard();
// };

let game = {
  player: '',
  board: ['','','','','','','','','',],
  turn: 0,
  gameOver: false,
  winner: undefined
};

let clearBoard = function (){
  $('.cell').empty();
  game.board = ['','','','','','','','','',];
  game.turn = 0;
};

const checkWinner = function (){
  let board = game.board;
  let player = game.player;
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
      game.winner = game.player;
      game.gameOver = true;
      //Freeze but don't reset yet?
      clearBoard();
      console.log('Winner is', game.winner);
    }
    else if (game.turn === 9){
      game.gameOver = true;
      clearBoard();
      alert('Tie game!');
    }
};

const onClickCell= function (event) {
  event.preventDefault();
  let cell = $(event.target);
  let id = cell.data('id');
  if($(this).html() === '') {         // if spot empty
    if (game.turn % 2 === 0){         // x's turn on even num
      game.player = 'x';              // set player
    } else {
      game.player = 'o';
    }
    $(this).text(game.player);
    game.board[id] = game.player;
    game.turn++;
    checkWinner();
    // console.log(game);
    // api.updateGame(id,'x', game.gameOver); //update api
  }
  else {
    console.log('Spot already taken!');
  }
  // let cell = $(event.target);
  // let id = cell.data('id');
      // if ($(this).html() === '') {
      //   if (game.turn % 2 === 0) {
      //     $(this).text('X');
      //     game.player = 'X';
      //     game.board[game.lastPos] = 'X';
      //     // api.updateGame(id, game.player, game.gameOver);
      //     game.turn ++;
      //   } else {
      //     $(this).text('O');
      //     game.player = 'O';
      //     game.board[game.lastPos] = 'O';
          // api.updateGame(id, game.player, game.gameOver)
          //   .done()
          //   .fail(ui.failure);
          // game.turn ++;
      //   }
      // }
      // checkWinner();
      // if (game.turn === 9) {
      //   alert('Tie Game!');
      //   clearBoard();
      // }
};

const addHandlers = () => {
  $('#new-game').on('submit', onNewGame);
  $('#index-game').on('submit', onIndexGame);
  $('#show-game').on('submit', onShowGame);
  $('#join-game').on('submit', onJoinGame);
  $('.cell').on('click', onClickCell);
};

module.exports = {
  addHandlers,
};
