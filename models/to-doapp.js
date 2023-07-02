const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
 
  taskid:{
    type:Number,
    required:true,
  },
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: false,
  },
});

const Todo = mongoose.model('to-doapp', todoSchema);

module.exports = Todo;
