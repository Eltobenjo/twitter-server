const db = require('../models')
const Users = db.users
const Op = db.Sequelize.Op

exports.create = (req, res) => {
	console.log(req.body)
	// Create a User
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	}

	// Save User in the database
	Users.create(user)
		.then((data) => {
			res.send(data)
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the User .',
			})
		})
}

exports.findAll = (req, res) => {
	console.log(req.body)

	Users.findAll()
		.then((data) => {
			res.send(data)
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving users.',
			})
		})
}

exports.findOne = (req, res) => {
	const id = req.params.id

	Users.findByPk(id)
		.then((data) => {
			res.send(data)
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving User with id=' + id,
			})
		})
}
