const path = require('path');


const filePath = '/home/thayub/developer/nodejs-learning/jvl-code/';

console.log(path.basename(filePath))
console.log(path.dirname(filePath));
console.log(path.extname(filePath));


console.log(__dirname + '  '  +"This is a directory name");

console.log("Joined Path",path.join(__dirname)+"test.js");