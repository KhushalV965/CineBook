const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getHomePage } = require('../controllers/indexController');

router.get('/home', auth, getHomePage);



module.exports = router;