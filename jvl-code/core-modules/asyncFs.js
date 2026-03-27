const fs = require('fs');

// here we are going to do asynchronous operation

fs.writeFile('async.txt',"This is for Asynchronous Operation",(err) => {
    if(err){
        throw err;
    }
    console.log("File Written Completed");
    
});
console.log("File Writing  Processing");

// this is how we write file with asynchronous programming .