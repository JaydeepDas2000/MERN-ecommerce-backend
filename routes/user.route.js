const express = require('express');
const { createUser, getUsers, loginUser } = require('../controller/users.controller');
const router = express.Router();

// create user (Register)
router.post('/register', createUser);

// Get all users
router.get('/users', getUsers);

// login user
router.post('/login', loginUser);

module.exports = router;