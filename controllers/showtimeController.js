const movieModel = require('../models/movie.model');
const showtimeModel = require('../models/showtime.model');

exports.createShowtime = async (req, res) => {
    try {
        const { movieId, date, time, theater, price } = req.body;
        const movie = await movieModel.findById(movieId);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        const showtime = await showtimeModel.create({ movie: movieId, date, time, theater, price });
        showtime.save();

        res.status(201).json({ message: 'Showtime created', showtime });
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}