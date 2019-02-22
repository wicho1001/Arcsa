const express = require('express')
const router = express.Router()
const userControllers = require('../Controllers/User')

router.get('/', userControllers.verify, userControllers.findAll)
router.post('/', userControllers.createUser)
router.delete('/:id', userControllers.verifyAdmin, userControllers.deleteUser)
router.post('/login', userControllers.authenticate)
router.patch('/:id', userControllers.verifyAdmin, userControllers.update)

module.exports = router
