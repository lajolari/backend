/* 
    Search Routes
    host + /api/search
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { recipeSearchList } = require('../controllers/search');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/', recipeSearchList)

module.exports = router;