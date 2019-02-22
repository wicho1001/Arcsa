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
    data: Buffer,
    required: false
  },
  Correo: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    minlength: 10,
    maxlength: 60,
    required: true
  },
  Admin: {
    type: Boolean,
    default: false,
    required: true
  }
})

module.exports = mongoose.model('user', UserSchema)
