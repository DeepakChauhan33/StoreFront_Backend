const express = require('express');
const router = express.Router();


const { placeOrder, createOrder, getOrders } = require("../controllers/orderController");

router.get('/order', placeOrder);


router.post('/createOrder', createOrder);


router.get('/orders', getOrders);






module.exports = router;