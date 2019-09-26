const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()

const userController = require('./controllers/users.js')
const dogController = require('./controllers/dogs.js')

const app = express()

app.use(cors())
app.use(parser.json())
app.use(passport.initialize())

app.use('/users', userController)
app.use('/api/dogs', dogController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))