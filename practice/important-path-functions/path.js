

const path = require('path');

const filePath = "/home/thayub/developer/nodejs-learning/practice/important-path-functions/path.js";


console.log(__dirname); //  get the current directory path;


const baseName = path.basename(filePath);
console.log(baseName);

// get the base name of the file  without extension


console.log(path.extname(filePath));
//  get the extension of the file 


console.log(path.resolve("files","test.txt"));
// ✅ Used when you need full path.

console.log(path.join("public","images","photo.jpg"));
/*
✅ Output:

/home/user/project/public/images/photo.jpg
*/
/*
Most Important for Backend

Learn these first:

path.join()
path.resolve()
path.basename()
path.extname()
path.dirname()
*/