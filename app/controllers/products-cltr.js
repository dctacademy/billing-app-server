const Product = require('../models/product-model')
const { validationResult } = require('express-validator')
const productsCltr = {}

productsCltr.create = async (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    try {
        const body = req.body 
        const product = await Product.create(body)
        res.status(201).json(product)
    } catch(err) {
        res.status(500).json({ error: 'something went wrong'})
    }
}

productsCltr.list = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch(err) {
        res.status(500).json({ error: 'something went wrong'})
    }
}

productsCltr.update = async (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    const id = req.params.id 
    const body = req.body 
    try {
        const product = await Product.findByIdAndUpdate(id, body, { new: true })
        res.json(product)
    } catch(err) {
        res.status(500).json({ error: 'something went wrong'})
    }
}

productsCltr.remove = async (req, res) => {
    const id = req.params.id 
    try {
        const product = await Product.findByIdAndDelete(id) 
        res.json(product) 
    } catch(err) {

    }
}

module.exports = productsCltr 