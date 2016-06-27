var db = require('./index');
var Sequelize = require('sequelize');
var Place = require('./place');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	num_stars: {
		type: Sequelize.INTEGER,
		validate: {
			min: 1,
			max: 5
		}
	},
	amenities: {
		type: Sequelize.STRING
	}	
})

Hotel.belongsTo(Place);

module.exports = Hotel;