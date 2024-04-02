const mongoose = require('mongoose')
const { Schema, model } = mongoose 
const invoiceSchema = new Schema({
    customer: Schema.Types.ObjectId,
    lineItems:[
        { 
            product: Schema.Types.ObjectId,
            price: Number,
            quantity: Number 
        }
    ],
    grossTotal: Number,
    taxes: Number,
    discount: Number,
    status: {
        type: String, 
        default: "unpaid"
    },
    netTotal: Number,
    outstandingBalance: Number,
    payments: []
}, { timestamps: true }) 

const Invoice = model('Invoice', invoiceSchema) 
module.exports = Invoice 