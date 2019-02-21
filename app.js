const express = require('express')
const app = express()
const Bodyparser = require('body-parser')
const PORT = 3000

const mongoose = require('mongoose')

const User = require('./routes/User')

mongoose.connect('mongodb://localhost:27017/appArcsa', { useNewUrlParser: true }, () => console.log('Escuchando DB'))

app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Content-Type', 'application/x-www-form-urlencoded')
  res.header('Access-Control-Request-Method: POST')
  next()
})


// rutas
app.use('/user', User)

app.listen(PORT, () => console.log(`Conectado a Localhost:${PORT}`))
