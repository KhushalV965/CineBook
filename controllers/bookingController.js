const movieModel = require('../models/movie.model');
const bookingModel = require('../models/booking.model');

exports.renderBookMoviePage = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await movieModel.findById(id); // Fetch movie details
        if (!movie) {
            return res.status(404).send('Movie not found');
        }
        res.render('bookmovie', { movie });
    } catch (error) {
        console.error('Error fetching movie:', error);
        res.status(500).send('Server Error');
    }
};



