const express = require('express');
const router = express.Router();
const { getAllMovies, listMovie, getMovieById, deleteMovieById, updateMovieById } = require('../controllers/movieController')


// Get all movies
router.get('/api/v1/movies', getAllMovies);
// Post new movie
router.post('/api/v1/movie', listMovie);
// Get movie by id
router.get('/api/v1/movie/:id', getMovieById);
// delete movie 
router.delete('/api/v1/movie/:id',deleteMovieById);
// update movie by id
router.put('/api/v1/movie/:id',updateMovieById);





module.exports = router;