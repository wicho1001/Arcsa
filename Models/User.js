const mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
  Nombre: {
    type: String,
    require: true
  },
  Edad: {
    type: Number,
    require: true
  },
  Username: {
    type: String,
    require: true
  },
  Avatar: {
    type: String,
    require: false
  },
  Correo: {
    type: String,
    require: true
  },
  Password: {
    type: String,
    require: true
  },
  Admin: {
    type: Boolean,
    require: true
  }
})

module.exports = mongoose.model('user', UserSchema)
