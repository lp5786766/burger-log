// TODO:

// Inside the burgers_controller.js file, import the following:

// Express
const express = require("express");
// burger.js
const burger = require("../models/burger");



// Create the router for the app, and export the router at the end of your file.
const router = require("express").Router();

router.get("/", (req, res) => {


    burger.findAll(function(data) {
        console.log(res)
        res.render("index", data);
      });




   
});

router.post("/api/burgers/:id", (req, res) => {
    console.log(res)
});


module.exports = router;