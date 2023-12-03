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

// const server = http.createServer();  //server is an event emitter 
const server = http.createServer((req, res) =>  {
    if(req.url === '/'){ 
    res.write('hello world from nodejs!');
    res.write("How's going on?")
    res.end();
    }else if(req.url === '/about'){
        res.write('about page');
        res.end();
    }else{
        res.write('404 not found');
        res.end();
    }
});  

//when a new connection comes in a server it emitts this server
// server.on('connection', (socket) => {
//     console.log('new connection...');

// })

server.listen(3000);  //server listen's in port number 3000 
console.log('listening on port 3000...');