require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { checkSchema } = require('express-validator')
const app = express()
const port = process.env.PORT || 3099
const configureDB = require('./config/db')
const productsCltr = require('./app/controllers/products-cltr')
const customersCltr = require('./app/controllers/customers-cltr')
const invoicesCltr = require('./app/controllers/invoices-cltr')

const productValidationSchema = require('./app/validations/product-validation-schema')
const customerValidationSchema = require('./app/validations/customer-validation-schema')
const invoiceValidationSchema = require('./app/validations/invoice-validation-schema')

configureDB()

app.use(express.json())
app.use(cors())

app.post('/api/products', checkSchema(productValidationSchema), productsCltr.create)
app.get('/api/products', productsCltr.list)
app.put('/api/products/:id', checkSchema(productValidationSchema), productsCltr.update)
app.delete('/api/products/:id', productsCltr.remove)

app.post('/api/customers', checkSchema(customerValidationSchema), customersCltr.create)
app.get('/api/customers', customersCltr.list)
app.put('/api/customers/:id', checkSchema(customerValidationSchema), customersCltr.update)
app.delete('/api/customers/:id', customersCltr.remove)

app.post('/api/invoices', checkSchema(invoiceValidationSchema), invoicesCltr.create)
app.get('/api/invoices', invoicesCltr.list)
app.put('/api/invoices/:id', checkSchema(invoiceValidationSchema), invoicesCltr.update)
app.delete('/api/invoices/:id', invoicesCltr.remove)


app.listen(port, () => {
    console.log('server running on port', port)
})

