import fs from "fs";
import chalk from "chalk";

const notes = () => "notes ...";

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("new note added");
  } else {
    console.log("note title taken!");
  }
};

const saveNotes = (notes) => {
  const notesJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const removeNotes = (title) => {
  const noteArray = loadNotes();

  const removeNote = noteArray.filter((note) => note.title !== title);
  if (removeNote.length !== noteArray.length) {
    console.log(chalk.green.inverse("note is removed"));
    saveNotes(removeNote);
  } else {
    console.log(chalk.red.inverse("no note found"));
  }
};

const listNotes = () => {
  const noteArray = loadNotes();
  if (noteArray.length !== 0) {
    console.log(chalk.green.inverse("all titles are: "));
    return noteArray.forEach((note) => console.log(note.title));
  } else {
    console.log(chalk.red.inverse("no notes found!"));
  }
};

const readNotes = (title) => {
  const allNotes = loadNotes();
  const readNote = allNotes.find((note) => note.title === title);
  if (allNotes.length === 0) {
    console.log(chalk.red.bold("notes file is empty"));
  } else {
    if (readNote) {
      console.log(
        chalk.blue.inverse(
          "note with title: " + title + " is: " + readNote.body
        )
      );
    } else {
      console.log(chalk.red.inverse("note not found"));
    }
  }
};
// module.exports.notes = notes;
export default { notes, addNotes, removeNotes, listNotes, readNotes };
