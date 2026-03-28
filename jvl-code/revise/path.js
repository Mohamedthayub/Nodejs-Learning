const path = require("path");
// console.log(path);

const filePath = 'home/thayub/developer/programming/practice.py';

console.log("Basename",path.basename(filePath));
console.log("Directory name ", path.dirname(filePath));
console.log("File Extension name",path.extname(filePath)); 

// this is how we will access directory and file path using  path module


console.log(__dirname + '/new.txt'); //  this is how we join using __dirname function;;

console.log("Joined Path", path.join(__dirname,"demo","test.js"));
// this is how we join with the folder and file using dirname function ;
