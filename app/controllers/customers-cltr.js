const Customer = require('../models/customer-model')
const { validationResult } = require('express-validator')
const customersCltr = {}

customersCltr.create = async (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    try {
        const body = req.body 
        const customer = await Customer.create(body)
        res.status(201).json(customer)
    } catch(err) {
        res.status(500).json({ error: 'something went wrong'})
    }
}

customersCltr.list = async (req, res) => {
    try {
        const customers = await Customer.find()
        res.json(customers)
    } catch(err) {
        res.status(500).json({ error: 'something went wrong'})
    }
}

customersCltr.update = async (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    const id = req.params.id 
    const body = req.body 
    try {
        const customer = await Customer.findByIdAndUpdate(id, body, { new: true })
        res.json(customer)
    } catch(err) {
        res.status(500).json({ error: 'something went wrong'})
    }
}

customersCltr.remove = async (req, res) => {
    const id = req.params.id 
    try {
        const customer = await Customer.findByIdAndDelete(id) 
        res.json(customer) 
    } catch(err) {

    }
}

customersCltr.show = async (req, res) => {
    const id = req.params.id 
    try {
        const customer = await Customer.findById(id).populate('purchaseHistory.invoice')
        res.json(customer) 
    } catch(err) {

    }
}

module.exports = customersCltr 