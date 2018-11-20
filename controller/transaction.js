'use strict'
const Transaction = require('../models/transaction')

function getTransaction(req, res) {
    let id = req.params.id

    Transaction.findById(id, (err, transaction) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!transaction) return res.status(404).send({ message: `La transación no existe` })

        res.status(200).send({ transaction })
    })
}

function getTransactions(req, res) {
    Transaction.find({}, (err, transactions) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!transactions) return res.status(404).send({ message: `La transación no existe` })

        //res.send(200, { transactions }) 
        res.status(200).send({ transactions })
    })
}

function saveTransaction(req, res) {
    console.log('POST/api/transaction');
    console.log(req.body)
    let transaction = new Transaction()
    transaction.description = req.body.description
    transaction.amount = req.body.amount
    transaction.date = req.body.date
    transaction.type = req.body.type
    transaction.sku = req.body.sku
    
    transaction.save((err, trasactionAcount) => {
        if (err) res.status(500).send({ message: `Error al salvar en la base de datos ${err} ` })
        res.status(200).send({ transaction: trasactionAcount })
    })
}

function updateTransaction(req, res) {
    let id = req.params.id
    let update = req.body
    Transaction.findByIdAndUpdate(id, update, (err, trasactionUpdated) => {
        if (err) res.status(500).send({ message: `Error al salvar en la base de datos ${err} ` })

        res.status(200).send({ transaction: trasactionUpdated })
    })
}

function deleteTransaction(req, res) {
    let id = req.params.id

    Transaction.findById(id, (err, transaction) => {
        if (err) res.status(500).send({ message: `Error al borrar la transación ${err} ` })

        transaction.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar la transación ${err} ` })
            res.status(200).send({ message: 'La transación ah sido eliminada' })
        })
    })
}

module.exports = {
    getTransaction,
    getTransactions,
    saveTransaction,
    updateTransaction,
    deleteTransaction,
}