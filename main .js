// var prompt = require('prompt-sync')();
// const math  =  require("./server")

// console.log(math);

import fs from "fs"

const file = fs.createReadStream('./index.text');
let outputstream = process.stdout;
file.pipe(outputstream)


