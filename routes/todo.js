const express = require('express');
const router = express.Router();
const Todo = require('../models/to-doapp');
// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Error fetching todos' });
  }
});

// Add a new todo
router.post('/', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).json({ error: 'Error adding todo' });
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
    try {
      const taskid = req.params.id;
      const updatedTask = req.body;
  
      const todo = await Todo.findOne({ taskid: taskid }); // Find the document based on taskid
  
      if (!todo) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      // Update the fields of the found document
      todo.title = updatedTask.title;
      todo.status = updatedTask.status;
  
      const updatedTodo = await todo.save(); // Save the updated document
  
      res.json(updatedTodo);
    } catch (error) {
      console.error('Error updating todo:', error);
      res.status(500).json({ error: 'Error updating todo' });
    }
  });
  
  

// Delete a todo
router.delete('/:id', async (req, res) => {
    try {
      const taskid = req.params.id;
      const todo = await Todo.findOneAndRemove({ taskid: taskid });
      
      if (!todo) {
        return res.status(404).json({ error: 'Task not found' });
      }
      
      res.json(todo);
    } catch (error) {
      console.error('Error deleting todo:', error);
      res.status(500).json({ error: 'Error deleting todo' });
    }
  });
  

module.exports = router;
