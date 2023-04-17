const express = require('express');
const router = express.Router();
// require task controller file
const tasksApi = require('../../../controllers/api/v1/tasks_api');

//direct router to taskslist controller action
router.get('/',tasksApi.taskslist);//Returns a list of all tasks.
//direct router to findtask controller action
router.get('/:id',tasksApi.findtask);// Returns the details of a single task with the given id.
//direct router to create controller action
router.post('/',tasksApi.create);//Creates a new task.
//direct router to update controller action
router.put('/:id',tasksApi.update);//Updates the task with the given id.
//direct router to delete controller action
router.delete('/:id',tasksApi.delete);//Deletes the task with the given id.


module.exports = router;