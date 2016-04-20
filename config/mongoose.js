'use strict';

const mongoose = require('mongoose');

module.exports = function() {

  let db = mongoose.connect('mongodb://localhost/contacto');

  require('../models/contacto');
  return db;

};
