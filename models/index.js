const Sequelize = require('sequelize')

const sequelize = new Sequelize(
	'postgres://rgkxgygl:K3l0h9e1hkKR_5M8TIgJLWemhbT2i0p5@suleiman.db.elephantsql.com:5432/rgkxgygl'
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.users = require('./users_model.js')(sequelize, Sequelize)
db.messages = require('./messages_model.js')(sequelize, Sequelize)

db.users.hasMany(db.messages)

module.exports = db
