'use strict'

const mongoose = require('mongoose')
const app = require('./app')


const mongo = process.env.DB || 'mongodb://localhost:27017/accounts'
mongoose.connect(mongo, { useNewUrlParser: true }, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a mongo ): ${err}`);
    }
    console.log('Conexión a mongo establecida :)');
const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log('API corriendo')
        
    })
})
