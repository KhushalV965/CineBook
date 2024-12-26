const express = require('express');
const router = express.Router();
const { renderLoginPage, renderRegisterPage, registerUser, loginUser } = require('../controllers/userController')

router.get('/login', renderLoginPage);
router.get('/register', renderRegisterPage);
router.post('/user/register', registerUser);
router.post('/user/login', loginUser);




module.exports = router;