const express = require('express');
const { getNotification, createNotification } = require('../Controllers/NotificationController');
const router = express.Router();

router.get('/', getNotification);
router.post('/', createNotification);

module.exports = router;