module.exports = (app) => {
	const messages = require('../controllers/messages_controller.js')

	var router = require('express').Router()

	// Create a new User
	router.post('/', messages.create)

	router.get('/', messages.findAll)

	router.get('/:id', messages.findOne)

	app.use('/messages', router)
}
