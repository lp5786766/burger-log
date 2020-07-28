// TODO:

// Inside the burgers_controller.js file, import the following:

// Express
const express = require('express');
// burger.js
const burger = require('../models/burger');

// Create the router for the app, and export the router at the end of your file.
const router = require('express').Router();

router.get('/', (req, res) => {
  burger.findAll((data) => {
    res.render('index', {
      burgers: data,
    });
  });
});

router.post('/api/burgers', (req, res) => {
  burger.insertOne(
    ['name', 'eaten'],
    [req.body.name, req.body.eaten],
    (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put('/api/burgers/:id', (req, res) => {
  let condition = `id=${req.params.id}`;

  burger.updateOne({
    eaten: req.body.eaten
  }, condition, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.delete("/api/burgers/:id", (req, res) => {
//   const id = req.params.id;
//   burger.delete(id, (result) => {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

module.exports = router;
