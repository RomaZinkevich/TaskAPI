const express = require('express');
const validateTask = require('../middleware/validateTask');
const authenticate = require('../middleware/authValidation');

const {getAllTasks, getTaskById, postTask, putTask, deleteTask} = require('../controllers/taskController');

const router = express.Router();

//define routes
router.get('/', authenticate(['admin', 'regular']), getAllTasks);
router.get('/:id', authenticate(['admin', 'regular']), getTaskById);
router.post('/', authenticate(['admin']), validateTask, postTask);
router.put('/:id', authenticate(['admin']), validateTask, putTask);
router.delete('/:id', authenticate(['admin']), deleteTask);

module.exports = router;