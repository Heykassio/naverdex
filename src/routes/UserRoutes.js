const express = require('express');
const route = express.Router();
const UserController = require('../controllers/UserController');

route.post('/signup', UserController.create);

module.exports = route;