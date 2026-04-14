const fs = require('fs');


fs.writeFile('new.txt', "This is a File", (err) => {
    if(err){
        throw err;
    }
    console.log("File Creating done..");
    fs.readFile('new.txt',{encoding:'utf-8'},(err,data) => {
        if(err){
            throw err;
        }
        console.log("This is a data of the  file -> " + " " + data);
    })

});

console.log("File Creating process in happening");
 