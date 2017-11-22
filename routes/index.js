const express = require('express');
const router = express.Router();
const models = require('../models/index');


router.get('/', function(req, res, next) {
console.log('hello');
var allAttractions = {};
    models.Hotel.findAll()
        .then(function(hotels) {
            allAttractions.hotels = hotels;
            return models.Restaurant.findAll();
        })
        .then(function(restaurants) {
            allAttractions.restaurants = restaurants;
            return models.Activity.findAll();
        })
        .then(function(activities) {
            allAttractions.activities = activities;
        })
        .then(function() {
            res.json(allAttractions);
        })
        .catch(next);


})


module.exports = router;