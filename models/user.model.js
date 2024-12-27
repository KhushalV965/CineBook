const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'], // Email regex validation
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        phone: {
            type: String,
            required: false,
            unique: true,
            match: [/^[6-9]\d{9}$/, 'Please use a valid Phone number']
        },
        bookings: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Booking', // Reference to BookingModel
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

module.exports = mongoose.model('User', userSchema);
