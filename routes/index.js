var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/', function(req,res,next){
	var findingHotels = Hotel.findAll();
	var findingRestaurants = Restaurant.findAll();
	var findingActivities = Activity.findAll();
	Promise.all([findingHotels,findingRestaurants,findingActivities])
	.spread(function(hotels, restaurants, activities){
		res.render('index', {hotels: hotels, restaurants: restaurants, activities: activities});
	})
	.catch(next);
})



module.exports = router;