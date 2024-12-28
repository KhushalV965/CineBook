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



exports.bookings= async (req, res) => {
    const { movieId, showtime, seats, name, email, phone } = req.body;

    try {
        // Find the movie using the provided movieId
        const movie = await movieModel.findById(movieId);

        // Create a new booking object
        const booking = new Booking({
            movieId,
            showtime,
            seats,
            userDetails: { name, email, phone }
        });

        // Save the booking to the database
        await booking.save();

        // Pass both the movie and the booking objects to the EJS template
        res.render('bookmovie', { movie, booking });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while booking.');
    }
};
