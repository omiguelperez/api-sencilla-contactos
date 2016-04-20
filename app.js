'use strict';

const port = process.env.PORT || 8080;

const express = require('./config/express');
const mongoose = require('./config/mongoose');

let db = mongoose(),
    app = express();

app.listen(port, onListening);

module.exports = app;

function onListening() {
  console.log(`Server listening on port ${port}`)
}
