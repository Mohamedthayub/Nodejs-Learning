const fs = require('fs');



/*
5️⃣ Create notes folder automatically

Check if folder notes exists.

If not:

Create folder

👉 Use:

fs.existsSync()
fs.mkdirSync()


*/


if(!fs.existsSync('./new-folder')){
    fs.mkdirSync("./new-folder");
}
else{
    console.log("Directory is Already exist");   
}



/*

6️⃣ Count words in file

Read story.txt

Print:

Number of words
Number of lines
*/

fs.readFile('story.txt', {encoding : 'utf-8'},(err,data) => {
    if(err){
        throw err;
    }
   const wordCounts = data.split(" ");
   const lines = data.split("\n").filter(line => line.trim() !== "");

   console.log("The Total Words :" + wordCounts.length);
   console.log("The Total Lines :" + lines.length);
})


/*
7️⃣ Copy file content

Copy content from:

source.txt

to:

backup.txt
*/

fs.copyFile('story.txt', 'new-story.txt', (err ) => {
    if(err){
        throw err;
    }
    console.log("File Content Copied Succesfully");
})


/*

8️⃣ Rename file

Rename:

old.txt → new.txt
*/

fs.rename('script.js','test.js', (err) => {
    if(err){
        throw err;
        return;
    }
    console.log("Rename Copied");
})