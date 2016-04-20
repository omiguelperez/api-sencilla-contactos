'use strict';

var concatoCtl = require('../controllers/contactoController');


module.exports = function (app) {
  app.route('api/contacto/')
      .post(concatoCtl.create)
};
