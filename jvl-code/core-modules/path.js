const path = require("path");

// here we are going to learn about file path;

const filePath = 'users/logesh/projects/demo/app.js';

console.log("Base name :", path.basename(filePath)); // basename function will get the file of given path; 
console.log("Directory name :",path.dirname(filePath)); // dirname function will get the  directory name of the path;
console.log("Extension name : ",path.extname(filePath)); // extname function will get the extension of the given file;

// this will be output of this code 
/*
Base name : app.js
Directory name : users/logesh/projects/demo
Extension name :  .js
*/

// --------------------------------------------------------------------------------


console.log(__dirname +'/test.txt'); //  this is how we join path using  __dirname function;
// /home/thayub/developer/nodejs-learning/jvl-code/core-modules/test.txt

console.log("Joined Path",path.join(__dirname,"demo","test.js")); // here we use join function to join the two path;
// Joined Path /home/thayub/developer/nodejs-learning/jvl-code/core-modules/demo/test.js

// we use path for working in diffrent platform ;