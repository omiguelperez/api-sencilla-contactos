var mongoose = require('mongoose');


module.exports = function() {
    var db = mongoose.connect('mongodb://localhost/contacto');
    require('../models/contacto');
    return db
};