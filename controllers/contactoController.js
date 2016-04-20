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
    let contacto = req.contacto
    contacto.remove({},function(err) {
        if (!err) res.json(contacto)
        else console.log("ERROR: " + err)
    })
}

exports.list = function(req, res) {
  Contacto.find({}, function (err, contactos) {
    if (err) res.send(err);
    res.setHeader('Content-Type', 'application/json');
    res.send(contactos);
  });
};


exports.contactoByID = function(req, res, next, id) {
    Contacto.findById(id,function(err, contacto) {
        if (err) return next(err);
        if (!contacto) return next(new Error('Fallo al cargar la serie de tv ' + id));
        // Si una contacto es encontrada usar el objeto 'request' para pasarlo al siguietne middleware
        req.contacto = contacto;
        // Llamar al siguiente middleware
        next();
    });
};