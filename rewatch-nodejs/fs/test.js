// console.log("Hello This is node js");
// setTimeout(() => {
//     console.log("This is SetTimeout function");
// },5000);
// console.log("This is End");

//  this is what non-blocking this code will not wait for anything . it will keep  running;

const fs = require('fs');


fs.writeFileSync('new.js', "this file is written by Writefile Function");

const data = fs.readFileSync('test.txt',({encoding: 'utf-8'}))
console.log(data);

const fileReading = fs.readFileSync('code.js',({encoding: 'utf-8'}));
console.log(fileReading);

const fileReading2 = fs.readFileSync('new.js',{encoding:'utf-8'});
console.log(fileReading2);


