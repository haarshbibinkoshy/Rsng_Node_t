// Blocking example
const fs = require('fs');

// Synchronous file read
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
// Program won't proceed until the file is read
console.log(`Hi`)