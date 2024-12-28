const movieModel = require('../models/movie.model');
const showtimeModel = require('../models/showtime.model');

exports.createShowtime = async (req, res) => {
    try {
        const { movie, theater, date, time, totalSeats, price } = req.body;

        const showtime =await showtimeModel.create({ movie, theater, date, time, totalSeats, availableSeats: totalSeats, price });
        showtime.save();

        res.status(201).json({ message: 'Showtime created successfully', showtime });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create showtime', details: error.message });
    }
};