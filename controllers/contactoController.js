'use strict';

const mongoose = require('mongoose');

let Contacto = mongoose.model('contacto');

exports.create = function(req, res) {
  let contacto = new Contacto(req.body);

  contacto.save(function(err) {
    if (err) req.send(err);
    res.send(contacto);
  });
};

exports.delete = function(req, res) {
  let contacto = Contacto.find({ _id: req.body.id });

  Contacto.remove({ _id: contacto._id }, function(err) {
    if (err) res.send(err);
    res.send(contacto);
  });
};

exports.list = function(req, res) {
  Contacto.find({}, function (err, contactos) {
    if (err) res.send(err);
    res.setHeader('Content-Type', 'application/json');
    res.send(contactos);
  });
};
