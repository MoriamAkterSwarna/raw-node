/* eslint-disable prettier/prettier */
const fs = require('fs');

fs.writeFile('myfile2.txt', 'this is file 2 with asynchronous fs', (err) => {
    if (err) {
        console.log(err);
    }
});

fs.readFile('myfile.text', (err, data) => {
    console.log(data.toString());
});

console.log('hi');
