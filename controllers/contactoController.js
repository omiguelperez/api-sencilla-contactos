var mongoose = require('mongoose'),
    contacto = mongoose.model('contacto');


exports.create = function(req,res) {
    console.log("POST");
    console.log(req.body);
    var serietv = new contacto(req.boby);
    serietv.save(function(err) {
        if (!err) res.send(serietv);
        else res.send(err)
    })
};