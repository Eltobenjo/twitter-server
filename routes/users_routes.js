module.exports = (app) => {
	const users = require('../controllers/users_controller.js')

	var router = require('express').Router()

	// Create a new User
	router.post('/', users.create)

	router.get('/', users.findAll)

	router.get('/:id', users.findOne)

	//router.get('/:id/messages', users.findOneMessages)

	app.use('/users', router)
}
