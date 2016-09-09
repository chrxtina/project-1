'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const newGameSuccess = (data) => {
  app.game = data.game;
  console.log(app.game);
};



module.exports = {
  success,
  failure,
  newGameSuccess,
};
