/* 
    Recipe Routes 
    host + /api/recipes
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { createRecipe, showRecipeList, recipeDetail } = require('../controllers/recipe');

const router = Router();

router.post(
    '/create', 
    [ // middlewares
        check('name', 'Name is required').not().isEmpty(),
        validateFields
    ], 
    createRecipe
);

router.get(
    '/', 
    showRecipeList
);

router.get(
    '/:id',
    recipeDetail
);

module.exports = router;