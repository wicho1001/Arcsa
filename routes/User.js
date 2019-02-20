const express = require('express')
const router = express.Router()
const userControllers = require('../Controllers/User')

router.get('/', userControllers.findAll)
router.post('/', userControllers.createUser)

module.exports = router
