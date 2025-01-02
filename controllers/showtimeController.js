const movieModel = require('../models/movie.model');
const showtimeModel = require('../models/showtime.model');

exports.createShowtime = async (req, res) => {
    try {
        const { movie, theater, date, time, totalSeats, price } = req.body;

        const showtime = await showtimeModel.create({ movie, theater, date, time, totalSeats, availableSeats: totalSeats, price });
        showtime.save();

        res.status(201).json({ message: 'Showtime created successfully', showtime });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create showtime', details: error.message });
    }
};
exports.getShowtimes = async (req, res) => {
    try {
        const showTimes = await showtimeModel.findOne();
        res.status(201).json({ message: 'Show Times fetched successfully', showTimes });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create showtime', details: error.message });
    }
};
exports.getShowtime = async (req, res) => {
    const { id } = req.params;
    try {
        const showTimes = await showtimeModel.findById(id);
        res.status(201).json({ message: 'Show Time fetched successfully', showTimes });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create showtime', details: error.message });
    }
}; 