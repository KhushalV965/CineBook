const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const { findUserByEmail, HashPassword, comparePasswords, generateToken } = require('../utils/user.util');

exports.renderLoginPage = (req, res) => {
    res.render('login');
};
exports.renderRegisterPage = (req, res) => {
    res.render('register');
};
exports.registerUser = async (req, res) => {
    const { fullname, email, phone, password } = req.body;

    try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashPassword = await HashPassword(password);

        // Create new user
        const newUser = await userModel.create({
            fullname,
            email,
            phone,
            password: hashPassword
        });

        res.status(201).json({ message: 'User registered successfully', newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(400).json({
                message: 'Invalid email or password'
            })
        }

        // Compare password
        const isMatch = await comparePasswords(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid email or password'
            });
        }

        // generate token
        const token = generateToken(user);

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });
        res.redirect('/home');

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }


}



