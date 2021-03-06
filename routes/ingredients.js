/* 
    Ingredients Routes
    host + /api/ingredients
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { createIngredient, showIngredients, ingredientDetail } = require('../controllers/ingredients');

const router = Router();

router.post(
    '/create', 
    [ // middlewares
        check('name', 'Name is required').not().isEmpty(),
        validateFields
    ], 
    createIngredient
);

router.get(
    '/', 
    showIngredients
);

router.get(
    '/:id',
    ingredientDetail
)

module.exports = router;