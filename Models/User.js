const mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
  Nombre: {
    type: String,
    required: true
  },
  Edad: {
    type: Number,
    required: true
  },
  Username: {
    type: String,
    required: true
  },
  Avatar: {
    type: String,
    required: false
  },
  Correo: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Admin: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('user', UserSchema)
