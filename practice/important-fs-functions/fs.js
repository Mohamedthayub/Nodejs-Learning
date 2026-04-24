const { SlowBuffer } = require("buffer");
const { clear } = require("console");
const  fs = require("fs");

fs.readFile('../greet.txt','utf-8',(err,data) => {
    if(err){
        throw err;
    }
    console.log(data);
})
/*
✅ Used for:

Reading config files
JSON files
Templates
*/

fs.writeFile("./greet.js","console.log(Hello_world)",(err) => {
    if(err){
        throw err;
    }
    
})

/*
✅ Used for:

Saving user data
Logs
Reports
*/

fs.appendFile('./greet.js','let a = 10\n',(err) => {
    if(err){
        throw err;
    }
});
/*
✅ Used for:

Logs
Tracking activity
// */
fs.unlink('./greet.js',(err) => {
    if(err){
        throw err;
    }
    console.log("File Deleted Successfully");
});

/*
✅ Used for:

Removing temp files
Deleting uploads
*/    
fs.rename('thayub.txt','thayub-renamed.txt',(err) => {
    if(err){
        throw err;
    }
});

/*
✅ Used for:

Rename uploads
Move files
// */

fs.mkdir('new-folder',(err) => {
    if(err){
        throw err;
    }

});

/*
✅ Used for:

Upload folders
Project directories
*/

fs.readdir('./new-folder',(err,files) => {
    if(err){
        throw err;
    }
    console.log(files);
})

/*
✅ Used for:

List uploaded files
Read folder contents
*/

fs.stat('./greet.js',(err,stats) => {
    if(err){
        throw err;
    }
    console.log(stats);
})
/*
✅ Used for:

File size
Created date
Is file/folder
*/


fs.rmdir('./test',(err) => {
    if(err){
        throw err;
    }
})
/*
✅ Used for:

Remove directories
*/


if(fs.existsSync('./greet.js')){
    console.log("File Exists");
}
else{
    console.log("File Does Not Exist");
}

/*
✅ Used for:

Validation
Prevent errors
*/