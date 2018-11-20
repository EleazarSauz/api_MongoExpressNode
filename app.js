'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

app.get('/hola/:name', (req, res) => {
    res.send({ messenge: `Hola ${req.params.name}!` })
}) // app.METHOD(PATH, HANDLER)
/*    Donde:
app es una instancia de express.
METHOD es un método de solicitud HTTP.(get, post, put, delete)
PATH es la ruta de acceso en el servidor. "/"
HANDLER es la función que se ejecuta cuando se correlaciona la ruta. */

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app
//exports ES6