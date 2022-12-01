const express = require('express');
const { getPayment, createPayment, updatePayment, getSinglePayment } = require('../Controllers/PaymentController');
const router = express.Router();

router.get('/', getPayment);
router.post('/', createPayment);
router.get('/:id', getSinglePayment);
router.put('/:id', updatePayment);

module.exports = router;