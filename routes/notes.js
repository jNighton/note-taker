const notes = require('express').Router();
const fs = require ('fs');
const db = require('../db/db.json');
const uuid = require ('../helpers/uuid');

notes.get('/notes', (req, res) => {
  res.json(db);
});

notes.post('/notes', (req, res) => {

  if (req.body) {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      note_id: uuid(),
    };

    db.push(newNote);
    fs.writeFileSync('.db/db.json', JSON.stringify(db))
    res.json(db);
  } else {
    res.error('Error in adding Note');
  }
});

module.exports = notes;