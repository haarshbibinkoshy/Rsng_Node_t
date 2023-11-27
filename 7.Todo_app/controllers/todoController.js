const Todo = require('../models/todoModel');

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({ title, description });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { title, description }, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
   let resp= await Todo.findByIdAndDelete(id);
    res.json({ message: 'Todo deleted successfully',resp });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
