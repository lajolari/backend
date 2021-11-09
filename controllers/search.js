const { respose } = require('express');
const Recipe = require('../models/Recipe');
const Ingredient = require('../models/Ingredient');

const recipeSearchList = async (req, res = response) => {

    const { ingredientList } = req.body; // recipeID = Array
    
    const recipes = await Recipe.find({
        '$and': [
          {
            'ingredients.ingredient_id': {
              '$in': ingredientList
            }
          }, {
            'ingredients': {
              '$size': ingredientList.length
            }
          }
        ]
      })

    console.log(recipes);

    res.json({
        ok: true,
        recipes
    })
    // ingredientList.map((ingredient, i)=>{
    //     const ingredientVerification = await Ingredient.find({
    //         _id: ingredient,
    //     });    
    //     console.log(ingredientVerification);
    // })    

    // try {
    //     const recipes = await Recipe.find({
    //         ''
    //     })

    // res.json({
    //     ok: true,
    //     ingredientList
    // })

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({
    //         ok: false,
    //         msg: 'Contact the tech support or the administrator'
    //     });
    // }

}

module.exports = {
    recipeSearchList
}