const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
    console.log('This middleware runs for every request');
    next(); // Call the next middleware in the stack
  });
  
  // Route handler
  app.get('/', (req, res) => {
    res.send('Hello, Worldss!');
  });
  
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });