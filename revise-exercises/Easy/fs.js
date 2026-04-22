
const fs = require('fs');
/*
🟢 Easy Level (Basics)
1️⃣ Create a file

Create hello.txt and write:

Welcome to Node.js

👉 Use:

fs.writeFileSync()
*/


fs.writeFile('nex.txt' ,"Welcome To Node js",(err) => {
    if(err){
        throw err;
    }
    console.log("File Saved");

});

/*
2️⃣ Read file content

Read hello.txt and print content.

👉 Use:

fs.readFileSync()

*/

fs.readFile('nex.txt',{encoding:'utf-8'},(err,data) => {
    if(err){
        throw err;
    }
    console.log(data);
});

/*
3️⃣ Append content

Add this new line:

Learning fs module

👉 Use:

fs.appendFileSync()
*/
fs.appendFile('nex.txt', "  This data is appended",(err) => {
    if(err){
        throw err;
    }
    console.log("The data is appended to That file");
})


/*
4️⃣ Delete a file

Delete temp.txt

👉 Use:

fs.unlinkSync()
*/

try {
    fs.unlinkSync('./nex.txt');
    console.log("File deleted Successfully");
} catch (err) {
    console.log("Error deleting file",err.message);    
}