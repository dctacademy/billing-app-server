

// name, contact - { email, mobile }, purchaseHistory - [ ],paymentHistory - []
const mongoose = require('mongoose')
const { Schema, model } = mongoose 

const customerSchema = new Schema({
    name: String,
    contact: {
        email: String, 
        mobile: String 
    }, 
    outstandingBalance: {
        type: Number, 
        default: 0 
    }, 
    purchaseHistory: [{
        invoice: {
            type: Schema.Types.ObjectId,
            ref: 'Invoice'
        } 
    }],
    
    paymentHistory: [Schema.Types.ObjectId]
}, { timestamps: true })

const Customer = model('Customer', customerSchema) 
module.exports = Customer 