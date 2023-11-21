// Non-blocking example
const fs = require('fs');

// Asynchronous file read
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
// Program continues executing other tasks without waiting for the file read to finish
console.log(`Hi`)