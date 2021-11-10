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

const updateIngredient = async (req, res = response ) => {

    let { name, description, spec_cond } = req.body;

    const ingredientOld = await Ingredient.findById(req.params.id);

    if(!name){
        name = ingredientOld.name
    }

    if(!description){
        description = ingredientOld.description
    }

    try {
        await Ingredient.findByIdAndUpdate({"_id":req.params.id}, {"$set": { "name": name, "description": description, "spec_cond": spec_cond}});

        res.status(201).json({
            ok: true,
            msg: "Ingredient Updated"
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
    ingredientDetail,
    updateIngredient
}