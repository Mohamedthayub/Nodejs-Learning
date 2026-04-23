
const fs = require('fs');
const path = require('path');
/*
🧠 Exercise 10: File Extension Checker
🎯 Goal

Learn how to extract file types from file names.

Examples:

resume.pdf
photo.png
notes.txt

You need to print:

.pdf
.png
.txt
*/
const fileName = "/home/thayub/developer/nodejs-learning/revise-exercises/test.js";
console.log(path.extname(fileName));
console.log(path.basename(fileName));


const exts = ["resume.pdf", "photo.png", "notes.txt","thayub.exe"];
for(let j = 0; j<exts.length; j++){
    const extension = path.extname(exts[j]);
    console.log(extension);
}

console.log(path.join(__dirname,"data","users","profile.json"));//  this is how we join the path using path join function

