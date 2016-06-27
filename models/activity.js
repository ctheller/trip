var db = require('./index');
var Sequelize = require('sequelize');
var Place = require('./place');

var Activity = db.define('activity', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	age_range: {
		type: Sequelize.STRING
	}
})

Activity.belongsTo(Place);

module.exports = Activity;