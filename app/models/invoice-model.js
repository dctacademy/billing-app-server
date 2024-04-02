const mongoose = require('mongoose')
const { Schema, model } = mongoose 
const invoiceSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    lineItems:[
        { 
            product: {
                type: Schema.Types.ObjectId, 
                ref: 'Product'
            },
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