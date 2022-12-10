const express = require('express')
const { createUser, getUser, loginUser, getSingleUser, updateUser } = require('../Controllers/UserController.js');
const router = express.Router();

router.get('/', getUser);
router.post('/signup', createUser)
router.post('/login', loginUser)
router.get('/:id', getSingleUser)
router.patch('/:id', updateUser)

module.exports = router;