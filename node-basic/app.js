// console.log("Hello from node JS");
//console.log("PROCESS:",process);

//Import and export
// const helpers = require("./helper");
// //function 
// // var let const
// const total = helpers.sum(10, 200);
// console.log("Total:", total);


//object destructuring
// const { sum, add } = require("./helper");

// const total = sum(10, 200);
// console.log("Total:", total);

//Using node js core modules
// const { sum } = require("./helper");
// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello world from node js");
// });

// server.listen(3000);

// const total = sum(10, 200);
// console.log("Total:", total);

//using npm packages => npm i nodemon (it will automactically reflect changes)

//using express
// const express = require('express');
// const app = express()

// app.get('/', (req, res) => {
//     res.send("hey what's up from express");
// });

// app.listen(3000);

//Node js event loop
// const fs = require('fs');
// const fileName = "target.txt";

// fs.watch(fileName, () => console.log('File changed!'));

const fs = require('fs');
const fileName = "target.txt";

const errHandler = err => console.log(err);

const dataHandler = data => console.log(data.toString())
//Asynchronous programming
fs.readFile(fileName, (err, data) => {
    if(err) errHandler(err)

    dataHandler(data)
});

//synchronous programming
//const data = fs.readFileSync(fileName)

console.log('Node JS async programming...?');