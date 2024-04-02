const invoiceValidationSchema = {
    customer: {
        notEmpty: {
            errorMessage: 'customer should be selected'
        },
        isMongoId: {
            errorMessage: 'should be a valid mongodb id'
        }
    }
}

module.exports = invoiceValidationSchema