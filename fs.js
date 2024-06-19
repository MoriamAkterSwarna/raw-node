/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
const fs = require('fs');

// fs.writeFileSync('myfile.text', 'hello programmers ')  //write file asynchronously
// fs.writeFileSync('myfile.text', 'hello programmers')  //it will replace the previous file
// fs.appendFileSync('myfile.text', 'how are you')  //it will append new text in the previous text

const data = fs.readFileSync('myfile.text');
// console.log(data)  //it will return a buffer
// buffer is a different type of data, it is a binary format

console.log(data.toString()); // it will read the file and return string
