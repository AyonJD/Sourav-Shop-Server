const express = require('express');
const { getNumber, createNumber, updateNumber } = require('../Controllers/NumberController');
const router = express.Router();

router.get('/', getNumber);
router.post('/', createNumber);
router.patch('/:id', updateNumber);

module.exports = router;