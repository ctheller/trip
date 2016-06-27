var db = require('./index');
var Sequelize = require('sequelize');

var Place = db.define('place', {
	address: {
		type: Sequelize.STRING,
		allowNull: false
	},	
	city: {
		type: Sequelize.STRING,
		allowNull: false
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING,
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT),
		allowNull: false
	}
});

module.exports = Place;