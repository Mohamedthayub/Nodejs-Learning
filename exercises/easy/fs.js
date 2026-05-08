const fs = require('fs');


/*
🟢 Easy Level (Basics)
1️⃣ Create a file

Create hello.txt and write:

Welcome to Node.js

👉 Use:

fs.writeFileSync()
*/

fs.writeFileSync('greet.txt', "WelCome to Node js");

/*
2️⃣ Read file content

Read hello.txt and print content.

👉 Use:

fs.readFileSync()
// */
const file = fs.readFileSync('hello.txt',{encoding:'utf-8'});
console.log(file);

/*
3️⃣ Append content

Add this new line:

Learning fs module

👉 Use:

fs.appendFileSync()
*/

fs.appendFile('greet.txt', "This data come from appendFile",(err) => {
    if(err){
        throw err;
    }
    console.log("The data was appended to File");
});
/*
4️⃣ Delete a file

Delete temp.txt

👉 Use:

fs.unlinkSync()
*/



try{
    fs.unlinkSync('./hello.txt')
    console.log("File deleted Successfully");
}
catch(err){
    console.log("Error deleting File",err.message);
}
