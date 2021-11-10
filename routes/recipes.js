/* 
    Recipe Routes 
    host + /api/recipes
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { createRecipe, showRecipeList, recipeDetail, updateRecipe } = require('../controllers/recipe');

const router = Router();

router.post(
    '/create', 
    [ // middlewares
        check('name', 'Name is required').not().isEmpty(),
        validateFields
    ], 
    createRecipe
);

router.put(
    '/update/:id',
    updateRecipe
)

router.get(
    '/', 
    showRecipeList
);

router.get(
    '/:id',
    recipeDetail
);

module.exports = router;