'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = Schema ({
    description: String,
    amount: Number,
    date: String,
    type: {type: String, enum: ['E', 'P', 'M', 'I', 'F']},
    sku: String,
})

module.exports = mongoose.model('Transaction', TransactionSchema)