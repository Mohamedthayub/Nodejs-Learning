const fs = require('fs');

fs.writeFileSync('test.txt',"this is for test");

console.log("The Process is happening...");


fs.readFile('test.txt', {encoding : 'utf-8'},(err,data) => {
    if(err){
        throw err;
    }
    console.log("Read File async -> ",data
    );
})
console.log("The File Writing Processing");

// this is how we read the file ;