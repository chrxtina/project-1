'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const showGameSuccess = (data) => {
  console.log(data);
};


module.exports = {
  success,
  failure,
  showGameSuccess,
};
