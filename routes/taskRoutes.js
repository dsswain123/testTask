const express = require('express')
const router = express.Router()

const taskController = require('../controller/taskcontroller')

router.post('/tasks',taskController.createTask)
router.get('/tasks',taskController.getAllTasks)
router.put('/tasks',taskController.updateTask)
router.delete('/tasks',taskController.deleteTask)

module.exports = router;