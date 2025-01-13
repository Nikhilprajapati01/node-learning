// make a httt server in node 

// const http = require('http');

import http from 'http';
const port = 3000;

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url === '/home'){
        res.end('Welcome to our home page');
    }
    else if(req.url==='/about'){
        res.end('Welcome to our about page');
    }
res.end('Hello World');
})

server.listen(port, ()=>{
    console.log(`Server is running on port`, port);
}); // this will create a server on port 3000