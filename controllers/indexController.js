const movieModel = require("../models/movie.model");

exports.getHomePage = async (req, res) => {
    try {
        // Fetch all movies
        const movies = await movieModel.find();
        const randomMovie = movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null;
        res.render('home', { movies, randomMovie }); 
       
    } catch (error) {
        console.error('Error fetching movies for home page:', error);
        res.status(500).send('An error occurred while loading the home page.');
    }
};