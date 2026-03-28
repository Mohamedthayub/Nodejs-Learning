const fs = require('fs');

// console.log(fs);
// fs.writeFile('new.txt',"this is for practice",(err) => {
//     if(err){
//         throw err;
//     }
//     console.log("File creating done...");
// })
// console.log("File Processing happening..");

fs.readFile('new.txt',{encoding : 'utf-8'}, (err,data) => {
    if(err){
        throw err;
    }
    console.log("Reading file -> ",data);
} )
console.log("File Reading  Processing");;