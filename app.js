'use strict';

const port = process.env.PORT || 8080;

var express = require('./config/express');

var app = express();

app.listen(port);

module.exports = app;

console.log(`Server listening on port ${port}`);
