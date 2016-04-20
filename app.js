'use strict'

const port = process.env.PORT || 8080

const express = require('express')

const app = express()

function onListening() {
  console.log(`Server listening on port ${port}`)
}

require('./router')(app)

app.listen(port, onListening)
