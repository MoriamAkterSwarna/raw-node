/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
ourReadStream.on('data', (chunk) => {
    console.log(chunk) //it will return buffer
    // console.log(chunk.toString()) //it will return data
})
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
// ourReadStream.on('data', (data) => {
//     console.log(data) //it will return data
// })

console.log('Hello')