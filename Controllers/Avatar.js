const multer = require('multer')
const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const express = require('express')
const router = express.Router()
const UserModel = require('../Models/User')

cloudinary.config({
  cloud_name: 'dyr7bwojb',
  api_key: 267579327674675,
  api_secret: '6DZEMTufzMnEUF2sYyyJ-Be3s0U'
})

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'demo',
  allowedFormats: ['jpg', 'png'],
  transformation: [{ width: 40, height: 40, crop: 'limit' }],
  bytes: 2000
})

const parser = multer({ storage: storage })

router.post('/', parser.single('image'), (req, res, next) => {
  console.log(req.file)
  const image = {}
  image.url = req.file.url
  image.id = req.file.public_id
  UserModel.Avatar.create(image)
    .then(newAvatar => res.json(newAvatar))
    .catch(err => console.log(err))
})

module.exports = router
