const express = require('express');
const router = express.Router();
// tell router to use tasks.js for /tasks api
router.use('/tasks',require('./tasks'));

module.exports = router;