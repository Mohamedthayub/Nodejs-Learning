const fs = require('fs');


fs.writeFile("greet.txt","this is Test File",(err) => {
    if(err){
        throw err;
    }
    console.log("File Created Successfully");
});
console.log("File Creation Process Going");



fs.readFile("greet.txt",{encoding:'utf-8'},(err,data) => {
    if(err){
        throw err;
    }
    console.log(data);
})

console.log("File Reading Process Going ..");

// These Both asynchoronous Functions;