'use strict'

const mongoose = require('mongoose')
const app = require('./app')



mongoose.connect('mongodb://localhost:27017/accounts', { useNewUrlParser: true }, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a mongo ): ${err}`);
    }
    console.log('Conexión a mongo establecida :)');
    
    app.listen(3000, () => {
        console.log('API corriendo')
        
    })
})
