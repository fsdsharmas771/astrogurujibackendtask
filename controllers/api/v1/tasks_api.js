const Task = require('../../../models/task');

//controller action for adding new product
module.exports.taskslist = async function (req, res) {
    let tasks = await Task.find({});
    // if we find a list
    if (tasks) {
        return res.status(200).json({
            data: { tasks },
            message: 'tasks fetched sucessfully'
        });
    } else {
        // if we dont find list
        return res.status(404).json({
            message: 'No task found'
        });
    }

};
module.exports.findtask = async function (req, res) {
    let task = await Task.findById(req.params.id);
    //if we find task with given id 
    if (task) {
        return res.status(200).json({
            data: { task },
            message: 'Task with given id fetched'
        });
    } else {
        //if we dont find any task with the given id in database
        return res.status(404).json({
            message: 'No task find with the given Id'
        });
    }

};
module.exports.create = async function (req, res) {
    let task = await Task.create(req.body);
    return res.status(200).json({
        data: { task },
        message: 'task created'
    });
};
module.exports.update = async function (req, res) {
    let task = await Task.findByIdAndUpdate(req.params.id, req.body);
    // if task is updated 
    if (task) {
        let uptask = await Task.findById(req.params.id);
        return res.status(200).json({
            data: { task },
            message: 'Task is Updated to',
            newdata: { uptask }
        });
    }else{
        // if no task is found and updated then
        return res.status(404).json({
            message: 'No such task exist'
        });
    }

};
module.exports.delete = async function (req, res) {
    let task = await Task.findByIdAndDelete(req.params.id);
    if(task){
        // if task found and deleted 
        return res.status(200).json({
            data: { task },
            message: 'This Task Is Deleted'
        });
    }else{
        // if no task is found
        return res.status(404).json({
            message: 'No Such Task Found So Cant Delete'
        });
    }
    
};
