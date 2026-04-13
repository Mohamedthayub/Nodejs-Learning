const path = require('path');

const filePath = "/home/thayub/developer/nodejs-learning/rewatch-nodejs/path/test.js";

// console.log("Basename  :",path.basename(filePath)); // this function will give the file of the path;
// console.log("Directory :",path.dirname(filePath)); // this function will give the directory of the path;
// console.log("File Extention :",path.extname(filePath)); // this function will give the extention of the file name;
 
console.log("This is the Path Folder :" + __dirname + '/demo/new.txt');
console.log("Joined Path" , path.join(__dirname,"demo","test.txt"));