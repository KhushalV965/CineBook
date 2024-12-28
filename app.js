const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const dbConnect = require('./config/db');
const { urlencoded } = require('body-parser');
dbConnect();
app.set('view engine', 'ejs');
const indexRoutes = require('./routes/indexRoutes');
const movieRoutes = require('./routes/movieRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const showtimeRoutes = require('./routes/showtimeRoutes');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use('/', userRoutes);
app.use('/', indexRoutes);
app.use('/', movieRoutes);
app.use('/', bookingRoutes);



// Home route
app.get('/', (req, res) => {
    res.render('index');
});



// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log('Application is running at port:', process.env.PORT || 3000);
});
