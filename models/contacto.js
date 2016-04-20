var mongoose = require("mongoose"),
    Schema = mongoose.Schema;


var contacto = new Schema({
    email: String,
    nombres: Number,
    apellidos: String,
    telefono: String,
    direccion: String
});


mongoose.model('contacto',contacto);