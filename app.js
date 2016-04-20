'use strict';

const port = process.env.PORT || 8000;

const express = require('./config/express');
const mongoose = require('./config/mongoose');

let db = mongoose(),
    app = express();

app.listen(port);

module.exports = app;

console.log(`Server listening on port ${port}`)
