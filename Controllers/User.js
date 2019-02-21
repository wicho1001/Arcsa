const UserModel = require('../Models/User')
const jwt = require('jsonwebtoken')

function findAll (req, res, next) {
  UserModel.find({}, (err, users) => {
    if (err) {
      throw err
    }
    res.send(users)
  })
}

function createUser (req, res, next) {
  let newUser = new UserModel(req.body)
  newUser.save((err, user) => {
    if (err) {
      res.status(404).json({ status: 'error', message: 'manda los datos requeridos' })
    }
    res.send(user)
  })
}

function update (req, res, next) {
  UserModel.findByIdAndUpdate(req.params.id, { Admin: req.body.Admin }, (err, userInfo) => {
    if (err) {
      res.status(404).json({ status: 'error', message: err }, { data: null })
    } else {
      res.status(200).json({ status: 'success', message: 'usuario modificado', data: { user: userInfo } })
    }
  })
}

function verifyAdmin (req, res, next) {
  console.log(req.headers.admin)
  if (req.headers.admin === 'true') {
    next()
  } else {
    res.status(400).json({ status: 'error', message: 'No eres admin no puedes hacer eso' })
  }
}

function authenticate (req, res, next) {
  UserModel.find({ Correo: req.headers.correo }, (err, UserInfo) => {
    if (err) {
      res.status(404).json({ status: 'error', message: err }, { data: null })
    } else {
      if (req.headers.password === UserInfo[0].Password) {
        const token = jwt.sign({ id: UserInfo._id }, 'publicKey', { expiresIn: '8hr' })
        res.status(200).json({ status: 'success', message: 'usuario encontrado', data: { user: UserInfo[0], token: token } })
      } else {
        res.status(404).json({ status: 'error', message: err }, { data: null })
      }
    }
  })
}

function verify (req, res, next) {
  jwt.verify(req.headers['x-token'],
    'publicKey', (err, decoded) => {
      if (err) {
        res.status(400).json({ status: 'error', message: err.message, data: null })
      } else {
        req.body.userId = decoded.id
        next()
      }
    })
}
module.exports = {
  findAll,
  createUser,
  authenticate,
  verify,
  update,
  verifyAdmin
}
