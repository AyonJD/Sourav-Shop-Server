const express = require('express');
const { getPayment, createPayment, updatePayment, getSinglePayment, getMyOrders } = require('../Controllers/PaymentController');
const router = express.Router();

router.get('/', getPayment);
router.post('/', createPayment);
router.get('/:id', getSinglePayment);
router.put('/:id', updatePayment);
router.post('/my-orders', getMyOrders)

module.exports = router;