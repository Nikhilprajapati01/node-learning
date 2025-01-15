// const { isUtf8 } = require("buffer");
const fs = require("fs");

// fs.writeFileSync("./test.txt", "hello world");

// read file 


// in sync we can store a file in variable
// const res = fs.readFileSync("./test.txt", "utf-8");
// console.log(res);

// in aync we can not store file in a variable

// fs.readFile("./contact.txt", "utf-8",   (err,result) => {
//              if(err) {
//                 console.log("not workking",err);
//              }
//              else{
//                 console.log(result);
//              }
// });



// make folder 


// fs.mkdirSync("./mydocs");

// console.log (fs.statSync("./contact.txt"));

const os =  require("os");

console.log(os.cpus().length);
// console.log(os.freemem());