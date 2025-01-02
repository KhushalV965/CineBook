const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post('/create/orderId', async (req, res) => {
    const options = {
        amount: 5000 * 100,
        currency: "INR",
    };
    try {
        const order = await razorpay.orders.create(options);
        res.send(order);

        const newPayment = await Payment.create({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            status: 'pending',
        });

    } catch (error) {
        res.status(500).send('Error creating order');
    }
});



module.exports = router;