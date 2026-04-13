const fs = require('fs');

fs.writeFile('asyncTxt.txt',"This is Asynchronous Operation",(err) => {
    if(err){
        throw err;
    }
    console.log("File Writing Process Complete..");
    fs.readFile('asyncTxt.txt',{encoding:'utf-8'},(err,data) => {
        if(err){
            throw err;
        }
        console.log("The file Data is :",data);
    })
})
console.log("Processing Writing File..");


// this readFile writing and reading file asynchronously and it without waiting  for anything;
