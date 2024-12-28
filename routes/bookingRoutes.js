const express = require('express');
const { renderBookMoviePage } = require('../controllers/bookingController');
const router = express.Router();

router.get('/movies/:id/book', renderBookMoviePage);


module.exports = router;