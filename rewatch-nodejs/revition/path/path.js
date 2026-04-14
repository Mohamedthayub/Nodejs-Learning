const path  = require('path');

const filePath = "/home/thayub/developer/nodejs-learning/rewatch-nodejs/revition/path/test.js"


console.log("Basename :", path.basename(filePath));
console.log("File Extention :",path.extname(filePath));
console.log("Current Path",path.dirname(filePath));

console.log("Joined Path", path.join(__dirname,"demo", "practice.js")); // this function joins the path;

console.log("This is The path Folder :" + __dirname + "/demo/new.txt"); // this function also join the path;