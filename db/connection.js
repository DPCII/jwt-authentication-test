const mongoose = require('mongoose')

mongoose.Promise = Promise

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/walk-it-out";
  }

mongoose.connect(mongoURI)
    .then(connection => console.log('Connection established!'))
    .catch(err => console.log('Connection failed!', err))

module.exports = mongoose