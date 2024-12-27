const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    showtime: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Showtime',
        required: true,
    },
    seatNumber: {
        type: String,
        required: true, // E.g., 'A1', 'B5'
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    price: {
        type: Number,
        required: true, // Price per seat
    },
});

module.exports = mongoose.model('Seat', seatSchema);
