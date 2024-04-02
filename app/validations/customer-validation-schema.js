const customerValidationSchema = {
    name: {
        notEmpty: {
            errorMessage: 'name is required'
        }
    }
}

module.exports = customerValidationSchema