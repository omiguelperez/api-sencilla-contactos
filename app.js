'use strict';

const port = process.env.PORT || 8080;

var express = require('./config/express'),
    mongoose = require('./config/mongoose');

var db = mongoose(),
    app = express();

app.listen(port);

module.exports = app;

console.log(`Server listening on port ${port}`);
