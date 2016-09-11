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
  document.getElementById("message").innerHTML = 'Password successfully changed';
  $('#message').fadeIn('fast').delay(4000).fadeOut('fast');
};

const failure = (error) => {
  document.getElementById("message").innerHTML = 'Error: ' + error.statusText;
  $('#message').fadeIn('fast').delay(4000).fadeOut('fast');
};

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
