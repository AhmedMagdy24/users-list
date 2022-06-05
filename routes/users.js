const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  const users = adminData.users;
  res.render('users', {
    prods: users,
    pageTitle: 'Add User',
    path: '/',
    hasUsers: users.length > 0,
  });
});

module.exports = router;
