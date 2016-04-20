'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var contacto = new Schema({
  correo: String,
  nombres: String,
  apellidos: String,
  telefono: String,
  direccion: String
});

mongoose.model('contacto', contacto);
