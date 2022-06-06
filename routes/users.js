const path = require('path');

const express = require('express');

const router = express.Router();

const userControllers = require('../controllers/users')

router.get('/', userControllers.getUsers)

module.exports = router;
