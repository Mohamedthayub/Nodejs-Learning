const fs = require("fs");
const path = require("path");

// create file path safely
const filePath = path.join(__dirname, "notes.json");

// get command & value
const command = process.argv[2];
const value = process.argv[3];

// helper: read notes
const readNotes = () => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return []; // if file not exist
  }
};

// helper: save notes
const saveNotes = (notes) => {
  fs.writeFileSync(filePath, JSON.stringify(notes));
};

// ADD NOTE
if (command === "add") {
  const notes = readNotes();
  notes.push(value);
  saveNotes(notes);
  console.log("Note added ✅");
}

// LIST NOTES
else if (command === "list") {
  const notes = readNotes();

  if (notes.length === 0) {
    console.log("No notes found ❌");
  } else {
    console.log("Your Notes:");
    notes.forEach((note, index) => {
      console.log(`${index + 1}. ${note}`);
    });
  }
}

// DELETE NOTE
else if (command === "delete") {
  const notes = readNotes();
  const newNotes = notes.filter((note) => note !== value);

  saveNotes(newNotes);
  console.log("Note deleted ❌");
}

// INVALID COMMAND
else {
  console.log("Invalid command ⚠️");
}