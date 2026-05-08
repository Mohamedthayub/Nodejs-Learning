/*
🔥 Mini Project 1: File Manager CLI

Commands:

node app.js create test.txt
node app.js read test.txt
node app.js delete test.txt
node app.js rename old.txt new.txt

👉 This will make you strong fast.
*/
const fs =  require('fs');
const path = require('path');
// const { comma } = require('postcss/lib/list');
const command = process.argv[2];
const fileName = process.argv[3];
const newFileName = process.argv[4];
const filePath = path.join(__dirname , "files",fileName);


// if(!fileName){
//     console.log("you should enter filename");
//     process.exit();
// }
if(command == "create"){
    if(!fs.existsSync(filePath)){
        console.log("File Already exist");
    }
    else{
        fs.writeFileSync(filePath,"This file  was created using Node js");        
    }
}

else if (command == "read"){
    const data = fs.readFileSync(filePath,{encoding:'utf-8'});
    console.log(data);

}
else if (command == "delete"){
    try{
        fs.unlinkSync(filePath);
        console.log("File deleted SuccessFully");   
    }
    catch(err){
        console.log("Error deleting File",err.message);
    }
}
else if(command == "rename"){
    const newFilePath  = path.join(__dirname , "files", newFileName);
    
    fs.rename(filePath, newFilePath, (err) => {
       if (err) throw err;
       console.log('File renamed successfully');
    });

}
else{
    console.log("Invalid command");
}