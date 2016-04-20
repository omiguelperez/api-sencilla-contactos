'use strict';

var contacto = require('../controllers/contacto');

module.exports = function (app) {

  app.route('api/contacto/')
    .post(contacto.create)

};
