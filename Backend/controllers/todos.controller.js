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
  getTodos: async (req, res) => {
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
  // getAllTodos: (req, res) => {
  //   // business logic for getting all todo items
  // },
  // updateTodo: (req, res) => {
  //   // business logic for updating a todo item
  // },
  // deleteTodo: (req, res) => {
  //   // business logic for deleting a todo item
  // },
};


module.exports = todoController







// const todosController = {
  // getTodos: async (req, res) => {
  //   // find all todos and send it
  //   // log error
  //   try {
  //     const todos = await Todo.find();
  //     res.status(200).json(todos);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // },

//   createTodo: async (req, res) => {
//     // collect info from req.body
//     // save it to db
//     // send it

//     try {
//       const { title, tasks } = req.body;
//       const todo = new Todo({title , tasks});
//       const newTodo = await todo.save();
//       res.status(201).json({
//         success: true,
//         newTodo,
//       });
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   },

//   getTodoById: async (req, res) => {
//     try {
//       const todo = await Todo.findById(req.params.id);
//       if (todo) {
//         res.status(200).json(todo);
//       } else {
//         res.status(404).json({ message: "Todo not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   updateTodo: async (req, res) => {
//     try {
//       const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//       });
//       if (todo) {
//         res.status(200).json(todo);
//       } else {
//         res.status(404).json({ message: "Todo not found" });
//       }
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   },
//   deleteTodo: async (req, res) => {
//     try {
//       const todo = await Todo.findByIdAndDelete (req.params.id, req.body, {
//         new: true,
//       });
//       if (todo) {
//         res.status(200).json(todo);
//       } else {
//         res.status(404).json({ message: "Todo not found" });
//       }
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   },
// };


// module.exports = todosController