const { respose } = require('express');
const Recipe = require('../models/Recipe');
const Ingredient = require('../models/Ingredient');

const recipeSearchList = async (req, res = response) => {

    const { ingredientList } = req.body; // recipeID = Array

    try {
      /* 
        Search all the ingredient_id of the ingredients of this recipe
        and only the ones that match in ingredient's list length
      */
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

module.exports = {
    recipeSearchList
}