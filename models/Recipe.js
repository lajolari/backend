const { Schema, model } = require('mongoose');

const RecipeSchema = Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    ingredients: {
        type: Array,
    },
    flexible: {
        type: Boolean
    },
    preparation: {
        type: String,
        require: true
    }
})

module.exports = model('Recipe', RecipeSchema);

/* 
    ingredients' Array should be something like:
    ingredients: {
        "name": "name:String",
        "ingredient_id": "ingredient_id:String", // This would be added by the system, not the user
        "qty": "quantity:String",
        "unit": "unit:String>>WIP: Maybe a select list from another collection of units"
    }
*/