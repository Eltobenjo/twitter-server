require('dotenv').config()
const express = require('express')
const db = require('./models')
db.sequelize.sync()
const port = procces.env.PORT || 4000;
const pg = require('pg')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.json({ message: 'This works!.' })
})
require('./routes/users_routes')(app)
require('./routes/messages_routes')(app)

app.listen(port, () => console.log(`${port}`))
