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
