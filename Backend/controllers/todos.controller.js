const Todo = require("../models/todo.model");

const todoController = {
          createTodo : async (req, res) => {
    try {
      
      const todo = new Todo({
        title: req.body.title,
        tasks: req.body.tasks
      });
  
      const result = await todo.save();
  
      res.status(201).json({
        message: "Todo created successfully",
        todo: result,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  getAllTodos: async (req, res) => {
    try {
      // Query the todos collection using the Todo model
      const todos = await Todo.find();
  
      // Send the list of todos as the response to the client
      res.status(200).json(todos);
    } catch (error) {
      // If an error occurs, send a 500 status code and the error message as the response to the client
      res.status(500).json({ message: error.message });
    }
  },
  getOneTodo : async (req, res) => {
    try {
      // find the todo by its ID
      const todo = await Todo.findById(req.params.id);
  
      // if the todo doesn't exist, send a 404 response
      if (!todo) {
        res.status(404).send('Todo not found');
      }
  
      // otherwise, send the todo in the response
      res.json(todo);
    } catch (error) {
      // if an error occurs, send a 500 response
      res.status(500).json({ message: error.message });
    }
  },
  
  updateATodo: async (req, res) => {
    try {
      // find the todo by its ID
      const todo = await Todo.findById(req.params.id);
  
      // if the todo doesn't exist, send a 404 response
      if (!todo) {
        res.status(404).send('Todo not found');
      }
  
      // update the todo with the new data
      todo.title = req.body.title;
      todo.tasks = req.body.tasks;
  
      // save the updated todo to the database
      const updatedTodo = await todo.save();
  
      // send the updated todo in the response
      res.json(updatedTodo);
    } catch (error) {
      // if an error occurs, send a 500 response
      res.status(500).json({ message: error.message });
    }
  },
  
  deleteATodo: async (req, res) => {
    try {
      // find the todo by its ID
      const todo = await Todo.findById(req.params.id);
  
      // if the todo doesn't exist, send a 404 response
      if (!todo) {
        res.status(404).send('Todo not found');
      }
  
      // delete the todo from the database
      await todo.deleteOne();
  
      // send a 204 response to indicate that the todo was deleted successfully
      res.sendStatus(204);
    } catch (err) {
      // if an error occurs, send a 500 response
      res.status(500).send(err);
    }
  }
  
};


module.exports = todoController