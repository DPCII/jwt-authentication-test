const mongoose = require('mongoose')

mongoose.Promise = Promise

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/walk-it-out";
  }

mongoose.connect(mongoURI, { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
    .catch(err => console.log('Connection failed!', err))

module.exports = mongoose