'use strict';

const mongoose = require('mongoose');

let Contacto = mongoose.model('contacto');

exports.create = function(req, res) {
  let contacto = new Contacto(req.body);

  contacto.save(function(err, contacto) {
    if (err) return res.status(500).send(err.message);
    res.status(200).jsonp(contacto);
  });
};

exports.delete = function(req, res) {
  Contacto.findById(req.params.id, function (err, contacto) {
    if (err) return res.send(500, err.message);
    contacto.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).send();
    });
  });
};

exports.list = function(req, res) {
  Contacto.find({}, function (err, contactos) {
    if (err) return res.send(500, err.message);
    res.status(200).jsonp(contactos);
  });
};
