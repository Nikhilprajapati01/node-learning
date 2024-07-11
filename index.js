// const { log } = require("console")

const http = require("http")

const myserver = http.createServer((req, res)=> {
    // const name = prompt("enter name:")
    console.log(req.headers);
    res.end("hello from server");
});


 myserver.listen(8000 , ()=> console.log("server start"));
