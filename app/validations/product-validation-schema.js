const productValidationSchema = {
    name: {
        notEmpty: {
            errorMessage: 'name is required'
        }
    },
    price: {
        notEmpty: {
            errorMessage: 'price is required'
        },
        isFloat: {
            errorMessage: 'price should be a number',
            options: { min: 1}
        }
    },
    stockLevel: {
        notEmpty: {
            errorMessage: 'stock level is required'
        },
        isInt: {
            errorMessage: 'stock level should be a number',
            options: { min: 1 }
        }
    },
    reorderLevel: {
        notEmpty: {
            errorMessage: 'reorder level is required'
        },
        isInt: {
            errorMessage: 'reorder level should be a number',
            options: { min: 1 }
        }
    }
}

module.exports = productValidationSchema