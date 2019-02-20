const express = require('express')
const app = express()
const Bodyparser = require('body-parser')
const PORT = 3000

const mongoose = require('mongoose')

const User = require('./routes/User')

mongoose.connect('mongodb://localhost:27017/appArcsa', { useNewUrlParser: true },() => console.log('Escuchando DB'))

app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({ extended: true }))

// rutas

app.use('/user', User)

app.listen(PORT, () => console.log(`Conectado a Localhost:${PORT}`))
