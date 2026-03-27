const fs = require("fs");

// fs.writeFileSync('../test.txt',"This is for test");
// // this is how we write file 
// console.log("File Written Successfully...");

// Read file and  this is synchronous;
// const data = fs.readFileSync('test.txt',{encoding : "utf-8"});
// console.log('file Readed done..', data);




fs.readFile('async.txt',{encoding : 'utf-8'},(err,data) => {
    if(err){
        throw err;
    }
    console.log("Read file async",data);
});
console.log("File Writing Processing.."); 

// this is  we read file asynchronously