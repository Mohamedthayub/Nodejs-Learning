const fs = require('fs');
const path = require('path');
const { report } = require('process');


const filePath = path.join("/data","users","profile.json");
console.log(filePath);

const filePath2 = path.resolve("data","users","profile.json");
console.log(filePath2);

/*
the diffrence between path.join() and path.resolve 

path.join()

Combines path segments into a normalized path.

path.resolve()

Builds an absolute path starting from current working directory (unless already absolute).
*/

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

const exts = ["resume.pdf", "photo.png", "notes.txt","thayub.exe"];

for(let i = 0; i<exts.length; i++){
    const extension = path.extname(exts[i]);
    if(extension != '.exe'){
        console.log(exts[i] + " -> " + extension);
    
    }
}
// chatgpt task 1
/*
1. Build path: documents/work/report.pdf
2. Get extension from report.pdf
3. Print full absolute path of that file
*/
let buildPath = "documents/work/report.pdf"
console.log(path.resolgve(buildPath)); // here i join path using resolve function ;
console.log(path.join(__dirname ,"documents","work","report.pdf")); // here i join path using join function 
console.log(path.extname("report.pdf")); // it extname function gets  the extension of the file name ;


