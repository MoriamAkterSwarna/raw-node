/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-multi-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
const http = require('http');

const server = http.createServer((req, res) =>  {
    if(req.url === '/'){ 
    res.write('<html> <head><title>Form</title></head>');
    res.write(`<body><form method="post" action="/process"><input name="message" type="text"><input type="submit" value="submit"></form></body>`);
    
    res.end();
    }else if(req.url === '/process' && req.method === 'POST'){
        // console.log(req.data) //it will return undefined
        req.on('data', (chunk) => {
            // console.log(chunk)
            console.log(chunk.toString())
        })

        res.write('submitted successfully');
        res.end();
    }else{
        res.write('404 not found');
        res.end();
    }
});  

server.listen(3000);  //server listen's in port number 3000 
console.log('listening on port 3000...');