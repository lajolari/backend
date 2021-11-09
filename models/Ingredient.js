const { Schema, model } = require('mongoose');

const IngredientSchema = Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
    },
    spec_cond: {
        type: Boolean
    }
})

module.exports = model('Ingredient', IngredientSchema);