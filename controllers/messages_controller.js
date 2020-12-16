const db = require('../models')
const Message = db.messages
const Op = db.Sequelize.Op

exports.create = (req, res) => {
	console.log(req.body)
	// Create a Message
	const messages = {
		text: req.body.text,
		userId: req.body.userId,
	}

	// Save User in the database
	Message.create(messages)
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

	Message.findAll()
		.then((data) => {
			res.send(data)
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving message.',
			})
		})
}

exports.findOne = (req, res) => {
	const id = req.params.id

	Message.findByPk(id)
		.then((data) => {
			res.send(data)
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving message with id=' + id,
			})
		})
}

exports.findOneMessages = (req, res) => {
	const id = req.params.id
	Message.findAll({
		where: {
			userId: id,
		},
	})
		.then((data) => {
			res.send(data)
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving message.',
			})
		})
}
