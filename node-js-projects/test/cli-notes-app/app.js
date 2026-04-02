const validate = require("./validate_notes.js");

const fs = require("fs");
const path = require("path");


const filePath = path.join(__dirname, "notes.json");


// console.log
const  command = process.argv[2];
const value = process.argv[3];

// fs.writeFile("thayub.txt","this is thayub name");


const readNotes = () => {
    try{
        const data =  fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    }
    catch(err){
        return []; // if the file does not exist we return  empty array;
    }
}
const saveNotes = (notes) => {
    fs.writeFileSync(filePath,JSON.stringify(notes));
};


if(command === "add"){
    const notes = readNotes();
    const isNotes = validate.validateNotes(notes,value);
    if(isNotes){
        notes.push(value);
        saveNotes(notes);
        console.log("Notes Added");   
    }
    else{
        console.log("Note already exist");
        
    }
}
else if (command === "list"){
    const notes = readNotes();
    if(notes.length === 0){
        console.log("No notes found ");
    }
    else{
        console.log("Yout Notes:");
        notes.forEach((item,index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}
else if (command === "delete"){
    const notes = readNotes();
    // if(!validate.validateNotes(notes,value)){
    
    // }
    const filteredNote = notes.filter((note) => note !== value);
    saveNotes(filteredNote);
    console.log("Note deleted..");
}
else{
    console.log("Invalid command");
}