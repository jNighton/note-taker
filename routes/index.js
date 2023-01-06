const express = require('express');

const notesRouter = require('./notes');
const router = require('./router');

const app = express();

app.use('./notes', notesRouter);
app.use('/router', router);

module.exports = app;