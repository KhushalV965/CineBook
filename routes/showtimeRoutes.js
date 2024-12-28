const express = require('express');
const { createShowtime } = require('../controllers/showtimeController');
const router = express.Router();


router.post('/api/v1/showtimes',createShowtime);



module.exports = router;