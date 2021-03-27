const express = require('express');
const app = express();

const UserRoute = require('./routes/UserRoutes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', UserRoute);

module.exports = app;
