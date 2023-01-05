const express = require('express');

const notesRouter = require('./api/notes');
const feedbackRouter = require('./api/router');

const app = express();

app.use('./api/notes', notesRouter);
app.use('/feedback', feedbackRouter);

module.exports = app;