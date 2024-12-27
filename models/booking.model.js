const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    showtime: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Showtime',
        required: true,
    },
    seats: {
        type: [String], // Array of seat numbers (e.g., ['A1', 'A2'])
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true, // Sum of selected seat prices
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Booking', bookingSchema);
