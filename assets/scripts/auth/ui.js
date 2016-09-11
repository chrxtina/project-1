'use strict';

const app = require('../app');

const signUpSuccess = () => {
  $('#signInModal').modal('show');
};

const signInSuccess = (data) => {
  app.user = data.user;
};

const signOutSuccess = () => {
  app.user = null;
  $('#signInModal').modal('show');
};

const changePasswordSuccess = () => {
  console.log("Password successfully changed");
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
