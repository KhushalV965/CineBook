const movieModel = require('../models/movie.model');

// Get all movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await movieModel.find(); // Fetch all movies from the database
        res.status(200).json({
            success: true,
            data: movies
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// Create Movie
exports.listMovie = async (req, res) => {
    const { title, description, genre, releaseDate, duration, language, posterUrl } = req.body;
    try {
        const movie = await movieModel.create({
            title,
            description,
            genre, 
            releaseDate,
            language,
            duration,
            posterUrl
        });
        res.status(201).json({ message: 'movie listed successfully', movie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


