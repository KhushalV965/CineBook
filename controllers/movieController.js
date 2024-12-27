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
};

// get single Movie details
exports.getMovieById = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await movieModel.findById(id);
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: 'Movie not found',
            });
        }

        // Send movie details as response
        return res.status(200).json({
            success: true,
            data: movie,
        });

    }
    catch (error) {
        console.error(`Error fetching movie with ID: ${id}`, error);

        // Handle invalid ID or other errors
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch movie details. Please try again later.',
        });
    }

};

// delete movie 
exports.deleteMovieById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedMovie = await movieModel.findByIdAndDelete(id);
        // If movie not found
        if (!deletedMovie) {
            return res.status(404).json({ success: false, message: 'Movie not found' });
        }

        // Respond with success message
        return res.status(200).json({ success: true, message: 'Movie deleted successfully' });


    } catch (error) {
        console.error(`Error deleting movie with ID: ${id}`, error);
        return res.status(500).json({ success: false, message: 'Failed to delete movie' });
    }
}


