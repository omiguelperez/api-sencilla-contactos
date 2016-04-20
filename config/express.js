'use strict';

const express = require('express');

module.exports = function() {

  const app = express();

  require('../router')(app);
  return app;

};
