const express = require('express');
const { createShowtime, getShowtimes, getShowtime } = require('../controllers/showtimeController');
const router = express.Router();


router.post('/api/v1/showtimes', createShowtime);
router.get('/api/v1/getallshowtimes', getShowtimes);
router.get('/api/v1/getshowtime/:id', getShowtime);



module.exports = router;