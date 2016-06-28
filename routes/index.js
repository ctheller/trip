var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Place = require('../models/place');

router.get('/', function(req,res,next){
	var findingHotels = Hotel.findAll();
	var findingRestaurants = Restaurant.findAll();
	var findingActivities = Activity.findAll();
	var findingPlaces = Place.findAll();
	Promise.all([findingHotels,findingRestaurants,findingActivities,findingPlaces])
	.spread(function(hotels, restaurants, activities, places){
		res.render('index', {hotels: hotels, restaurants: restaurants, activities: activities, places: places});
	})
	.catch(next);
})



module.exports = router;