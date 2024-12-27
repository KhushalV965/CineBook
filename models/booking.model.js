const mongoose = require('mongoose');

// Define booking schema
const bookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the UserModel
            required: true,
        },
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie', // Reference to the MovieModel (assuming it exists)
            required: true,
        },
        seats: {
            type: Number,
            required: true,
            min: 1,
        },
        bookingDate: {
            type: Date,
            required: true,
            default: Date.now,
        },
        showTime: {
            type: String,
            required: true, // E.g., '6:00 PM', '9:30 PM'
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        paymentStatus: {
            type: String,
            enum: ['Pending', 'Completed', 'Failed'], // Restricting values
            default: 'Pending',
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

module.exports = mongoose.model('Booking', bookingSchema);
