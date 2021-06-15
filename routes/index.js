const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')
const CategoryController = require('../controllers/categoryController')
const tasksRoute = require('./tasksRoute')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/googleLogin', UserController.googleLogin)

router.use('/tasks', authentication, tasksRoute)
router.use('/category', authentication, CategoryController.getCategory)


module.exports = router