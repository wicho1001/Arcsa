const UserModel = require('../Models/User')

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
      throw err
    }
    res.send(user)
  })
}

module.exports = {
  findAll,
  createUser
}
