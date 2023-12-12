const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
    console.log('This middleware runs for every request');
    if(req.path=='/premium'){

      next(); // Call the next middleware in the stack
    }else{
      res.send(`not a premium user`)
    }
  });
  
  // Route handler
  app.get('/premium', (req, res) => {
    res.send('Hello, Worldss!');
  });
  
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });