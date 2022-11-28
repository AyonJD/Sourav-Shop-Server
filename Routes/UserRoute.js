const express = require('express')
const { createUser, getUser, loginUser, getSingleUser } = require('../Controllers/UserController.js');
const router = express.Router();

router.get('/', getUser);
router.post('/signup', createUser)
router.post('/login', loginUser)
router.get('/:id', getSingleUser)

module.exports = router;