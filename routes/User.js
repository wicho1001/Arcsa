const express = require('express')
const router = express.Router()
const userControllers = require('../Controllers/User')
const app = express()

app.set('secretKey', 'nodeRestApi')

router.get('/', userControllers.verify, userControllers.findAll)
router.post('/', userControllers.createUser)
router.post('/login', userControllers.authenticate)

module.exports = router
