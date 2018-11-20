'use strict'

const express = require('express')
const api = express.Router()

const transactionCtrl = require('../controller/transaction')

api.get('/transaction', transactionCtrl.getTransactions)
api.get('/transaction/:id', transactionCtrl.getTransaction)
api.post('/transaction', transactionCtrl.saveTransaction)
api.put('/transaction/:id', transactionCtrl.updateTransaction)
api.delete('/transaction/:id', transactionCtrl.deleteTransaction)

module.exports = api