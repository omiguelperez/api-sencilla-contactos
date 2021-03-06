'use strict';

var contacto = require('../controllers/contactoController');

module.exports = function (app) {

    app.route('/api/contactos/')
      .post(contacto.create)
      .get(contacto.list);

    app.route('/api/contactos/:id')
      .delete(contacto.delete)
      .put(contacto.update);

};
