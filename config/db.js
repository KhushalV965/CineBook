const mongoose = require('mongoose');

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, console.log('database connected successfully'))
    }
    catch (error) {
        console.error('Database connection error:', error.message);
    }
}


module.exports = dbConnect;