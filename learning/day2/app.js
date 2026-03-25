const fs = require('fs'); // fs is  file system module package;

const http = require('http');

const path = require('path');

const os  = require('os');

const url = require('url');

const crypto = require('crypto');

const sayHello = require('./greetings');

console.log(sayHello("thayub")); // this is how we create custom module in node js 

const math = require('./math'); // here we have created multiple module in single file 

console.log(math.add(12,12));

console.log(math.subtract(10,5));  // these are the two file modules  add , subtract

fs.readFile('example.txt','utf8',(err,data)=> {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});
const content = "This is Thayub Content";

fs.writeFile('output.txt',content,(err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("File Written Successfully");
});
const server = http.createServer((req,res) => {
    req.statusCode = 200;
    res.setHeader('Content-Type' ,'text/plain')
    res.end('Hello , World');
});

server.listen(3000,() => {
    console.log("Server Running at http://localhost:3000")
});

const  directory = '/user/local';
const  fileName =  'example.txt';

const fullPath = path.join(directory,fileName);

console.log(fullPath);


console.log("Platform",os.platform()); // what platform your computer is working
console.log("CPU Architecture",os.arch()); // what processor runs in your computer;
console.log("Total Memory", os.totalmem()) // what is totalmemory in your computer
console.log("Free Memory",os.freemem()); // available memory in your computer;


const myUrl = new URL('https://example.com:8080/path/name?query=hello#hash');

console.log("This is my url " + myUrl.host);
console.log("This is my PathName " + myUrl.pathname);
console.log("Search Params " + myUrl.searchParams.get('query'));


const hash = crypto.createHash('sha256');
hash.update('hello, World!');
// hash.digest('hex');
console.log(hash.digest('hex'));