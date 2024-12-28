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
        
        // Pass both movie and showtimes to the template
        res.render('bookmovie', { movie, showtimes });
    } catch (error) {
        console.error('Error fetching movie or showtimes:', error);
        res.status(500).send('Server Error');
    }
};
