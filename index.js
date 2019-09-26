const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()

app.use(cors())

app.use(parser.urlencoded({extended: true}))
app.use(parser.json());

const userController = require('./controllers/users.js')
const dogController = require('./controllers/dogs.js')

app.use(parser.json())
app.use(passport.initialize())

app.use('/users', userController)
app.use('/api/dogs', dogController)

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});