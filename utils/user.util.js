const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

// Hash the password
exports.HashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

// Check if a user exists by email
exports.findUserByEmail = async (email) => {
    return await userModel.findOne({ email });
}

// Compare passwords
exports.comparePasswords = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

// Generate Token
exports.generateToken = (user) => {
    return jwt.sign({ userId: user._id, email: user.email, fullname: user.fullname },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
}