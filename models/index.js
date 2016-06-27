var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/tripplanner', {
		logging: true});

module.exports = db;