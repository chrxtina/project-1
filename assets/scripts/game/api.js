'use strict';

const app = require('../app.js');

const newGame = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const indexGame = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const showGame = (data) => {
  let token = app.user.token;
  let game_id = data.game.id;
  return $.ajax({
    url: app.host + '/games/' + game_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    },
  });
};

const joinGame = (data) => {
  let token = app.user.token;
  let game_id = data.game.id;
  return $.ajax({
    url: app.host + '/games/' + game_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + token,
    },
  });
};

const updateGame = (index, value, over) => {
  let token = app.user.token;
  let game_id = app.game.id;
  return $.ajax({
    url: app.host + '/games/' + game_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value,
        },
        'over': over,
      }
    }
  });
};


module.exports = {
  newGame,
  indexGame,
  showGame,
  joinGame,
  updateGame
};
