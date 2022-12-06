require('dotenv').config();
const express = require('express');
const todoRoutes = require('./routes/todos.route');
const app = express();

const dbConnect = require('./config/config');
dbConnect()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/todos', todoRoutes)


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});


// const dbConnect = require('./config/config');
// require('dotenv').config();
// const express = require('express');

// const todoRoutes = require('./routes/todos.route')

// const app = express();
// dbConnect

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // define the routes for the app
// app.use('/todos', todoRoutes);

// const {PORT = 3002} = process.env
// // start the server on port 3001
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}.`);
// });

