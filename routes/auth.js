/* 
    User Routes / auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post(
    '/register', 
    [ // middlewares
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Email must be at least 6 characters').isLength( { min: 6 } ),
        validateFields
    ], 
    createUser
);

router.post(
    '/', 
    [ // middlewares
        check('email', 'Email is required').isEmail(),
        check('password', 'Password must be at least 6 characters').isLength( { min: 6 } ),
        validateFields
    ], 
    loginUser
);

router.get('/renew', validateJWT, renewToken);

module.exports = router;