'use strict'

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.send('Este es el home del sitio')
  })

}
