const express = require('express')
const router = express.Router()
const authorization = require('../middlewares/authorization')
const TasksController = require('../controllers/tasksController')

router.get('/', TasksController.getTasks)
router.post('/', TasksController.postTask)

router.use('/:id', authorization)
router.get('/:id', TasksController.getTaskById)
router.put('/:id', TasksController.updateTaskById)
router.patch('/:id', TasksController.patchTaskById)
router.delete('/:id', TasksController.deleteTaskById)

module.exports = router