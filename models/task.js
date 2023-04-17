const mongoose = require('mongoose');


const taskSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }
});

const Task = mongoose.model('Task',taskSchema);

module.exports=Task;