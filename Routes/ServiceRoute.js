const express = require('express');
const { getService, createService, updateService, deleteService, getSingleService } = require('../Controllers/ServiceController');
const router = express.Router();

router.get('/', getService);
router.post('/', createService);
router.get('/:id', getSingleService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

module.exports = router;