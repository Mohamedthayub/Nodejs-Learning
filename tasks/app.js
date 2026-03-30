const name  = process.argv[2];
const fs = require("fs");


// // if(!name){
// //     throw error;
// // }

fs.writeFile("name.txt",name, (err) => {
    if(err){
        throw err;
    }
    console.log("File Created");
});

console.log("File Writing in Process");

fs.readFile('name.txt', 'utf-8', (err,data) => {
    if(err){
        throw err;
    }
    console.log(data);
});
console.log("File Reading in process");

// path module ;
const path = require("path");
const filePath = path.join(__dirname, "name.txt");
console.log(filePath); // file created  in correct folder;


// http server 

const http  = require("http");


http.createServer((req,res) => {
    res.end("Hello Server");
})

