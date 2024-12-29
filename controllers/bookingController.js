const showtimeModel = require('../models/showtime.model'); 
const movieModel = require('../models/movie.model'); 

exports.renderBookMoviePage = async (req, res) => {
    const { id } = req.params;
    try {
        // Fetch movie details
        const movie = await movieModel.findById(id);
        if (!movie) {
            return res.status(404).send('Movie not found');
        }

        // Fetch showtimes associated with this movie
        const showtimes = await showtimeModel.find({ movie: id }).select('time date');

        // Generate seat data (e.g., 100 seats, all unbooked by default)
        const seats = generateSeats(100);

        // Pass movie, showtimes, and seats to the template
        res.render('bookmovie', { movie, showtimes, seats });
    } catch (error) {
        console.error('Error fetching movie or showtimes:', error);
        res.status(500).send('Server Error');
    }
};

// Helper function to generate seats
const generateSeats = (totalSeats) => {
    return Array.from({ length: totalSeats }, (_, index) => ({
        seatNumber: index + 1,
        isBooked: false, // You can replace this logic if you have booking data
    }));
};
