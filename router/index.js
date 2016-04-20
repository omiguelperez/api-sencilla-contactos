'use strict';

var contacto = require('../controllers/contactoController');

module.exports = function (app) {

  app.route('/api/contacto/')
    .post(contacto.create)

};
