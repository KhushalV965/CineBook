const express = require('express');
const router = express.Router();
const { getAllMovies, listMovie } = require('../controllers/movieController')


// Get all movies
router.get('/api/v1/movies', getAllMovies);


// Post new movie
router.post('/api/v1/movie', listMovie);




module.exports = router;