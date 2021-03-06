const { respose } = require('express');
const Recipe = require('../models/Recipe');

const createRecipe = async (req, res = response ) => {

    const { name } = req.body;

    try {

        let recipe = await Recipe.findOne({ name });

        if ( recipe ) {
            return res.status(400).json({
                ok: false,
                msg: 'A recipe is already registered with that name'
            })
        }

        recipe  = new Recipe( req.body );

        await recipe.save();

        res.status(201).json({
            ok: true,
            recipe: {
                id: recipe.id,
                name: recipe.name
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

const showRecipeList = async (req, res = response ) => {

    try {
        const recipes = await Recipe.find({});

        res.json({
            ok: true,
            recipes
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact the tech support or the administrator'
        });
    }
}

const recipeDetail = async (req, res = response) => {

    const recipeID = req.params.id;

    try {

        const recipe = await Recipe.findById(recipeID);

        res.json({
            ok: true,
            recipe
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
    createRecipe,
    showRecipeList,
    recipeDetail
}