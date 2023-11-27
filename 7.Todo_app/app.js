const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const todoController = require('./controllers/todoController');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/node-crud-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Custom middleware for logging
app.use(logger);

app.get('/todos', todoController.getTodos);
app.post('/todos', todoController.createTodo);
app.put('/todos/:id', todoController.updateTodo);
app.delete('/todos/:id', todoController.deleteTodo);

// Custom middleware for error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
