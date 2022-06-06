const path = require('path');

const express = require('express');

const router = express.Router();

const userControllers = require('../controllers/users')

router.get('/add-user', userControllers.getAddUsers)

router.post('/add-user', userControllers.postAddUsers)


module.exports = router


