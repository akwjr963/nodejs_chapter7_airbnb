const express = require('express');
const { createBookings, getBookings } = require('../controllers/bookingController');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const router = express.Router();

router.route('/').post(isLoggedIn, createBookings);

router.route('/').get(isLoggedIn, getBookings);

module.exports = router;
