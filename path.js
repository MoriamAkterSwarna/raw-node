/* eslint-disable prettier/prettier */
const path = require('path');

const myPath = 'F:/Web_Level-2/learning_node/node-basic-lws/path.js';

// console.log(path.basename(myPath))  // returns files base name

// console.log(path.dirname(myPath))   //full directory total path

// console.log(path.extname(myPath))  //returns the extension name

// console.log(path.parse(myPath))

// output
// {
//   root: 'F:/',
//   dir: 'F:/Web_Level-2/learning_node/node-basic-lws',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }

console.log(path.join(myPath, 'join-path')); // it will join 2 or more path
// output => F:\Web_Level-2\learning_node\node-basic-lws\path.js\join-path
