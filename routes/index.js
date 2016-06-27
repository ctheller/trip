var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');
var Hotel = models.Hotel; 
var Restaurant = models.Restaurant;
var Activity = models.Activity;



router.get('/', function(req,res,next){
	var findingHotels = Hotel.findAll();
	var findingRestaurants = Restaurant.findAll();
	var findingActivities = Activity.findAll();
	Promise.all([findingActivities,findingRestaurants,findingHotels])
	.then(function(hotels, restaurants, activities){
		res.render('index', {hotels: hotels, restaurants: restaurants, activities: activities});
	})
})



module.exports = router;