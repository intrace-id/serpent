const userRouter = require('express').Router()
const UserController = require('../controllers/user-controllers')

userRouter.post('/signin', UserController.signIn)
userRouter.post('/signup', UserController.signUp)

module.exports = userRouter