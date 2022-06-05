const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = []

// /admin/add-product => GET


// /admin/add-product => POST
router.get('/add-user', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add User',
    path: '/admin/add-user',
  });
});

router.post('/add-user', (req, res, next) => {
  users.push({ title: req.body.title });
  res.redirect('/');
});


exports.routes = router
exports.users = users



