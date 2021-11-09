const { respose } = require('express');
const Ingredient = require('../models/Ingredient');

const createIngredient = async (req, res = response ) => {

    const { name } = req.body;

    try {

        let ingredient = await Ingredient.findOne({ name });

        if ( ingredient ) {
            return res.status(400).json({
                ok: false,
                msg: 'An ingredient is already registered with that name'
            })
        }

        ingredient  = new Ingredient( req.body );

        await ingredient.save();

        res.status(201).json({
            ok: true,
            ingredient: {
                id: ingredient.id,
                name: ingredient.name
            }
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact the tech support or the administrator'
        });
    }

} 

const showIngredients = async (req, res = response) => {

    try {
        const ingredients = await Ingredient.find({});

        res.json({
            ok: true,
            ingredients
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact the tech support or the administrator'
        });
    }
}

const ingredientDetail = async (req, res = response) => {

    const ingredientID = req.params.id;

    try {

        const ingredient = await Ingredient.findById(ingredientID);

        res.json({
            ok: true,
            ingredient
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact the tech support or the administrator'
        });
    }

}

module.exports = {
    createIngredient,
    showIngredients,
    ingredientDetail
}