'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const playEvents = require('./game/logic.js');
const gameEvents = require('./game/events.js');
const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();
  playEvents.addHandlers();
});
