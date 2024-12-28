const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true, // Show timing (e.g., '6:00 PM')
    },
    totalSeats: {
        type: Number,
        required: true,
    },
    availableSeats: {
        type: Number,
        required: true,
        default: function () {
            return this.totalSeats; // Initially, all seats are available
        },
    },
});

module.exports = mongoose.model('Showtime', showtimeSchema);
