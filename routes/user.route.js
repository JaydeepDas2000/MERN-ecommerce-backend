const express = require('express');
const { createUser, getUsers } = require('../controller/users.controller');
const router = express.Router();

// create user (Register)
router.post('/register', createUser);

// Get all users
router.get('/users', getUsers);


module.exports = router;