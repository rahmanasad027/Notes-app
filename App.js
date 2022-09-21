// const validator = require("validator");
// const fs = require("fs");
import notes from "./notes.js";
import chalk from "chalk";
import yargs from "yargs";
// const yargs = require("yargs");
// const getNotes = require("./notes");
// import notes from "./notes";

// const command = process.argv[2];

// console.log(process.argv);

// customizing yargs version
// yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      describe: "Note remove title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});
debugger;
yargs.command({
  command: "list",
  describe: "listing all notes",
  // builder: {
  //   title: {
  //     describe: "All notes list",
  //     demandOption: true,
  //     type: "string",
  //   },
  // },
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "reading a note",
  builder: {
    title: {
      describe: "Reading a note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();
// if (command === "add") {
//   console.log("adding files");
// } else if (command === "remove") {
//   console.log("removing files");
// }
// console.log(chalk.red.inverse.bold("error"));
// const show = notes();
// console.log(show);
// console.log(validator.isEmail("rahmanasad222@gmail.com"));
// console.log(validator.isURL(".com"));
// const fs = require("fs");
// fs.writeFileSync("notes.txt", "Hello my name is Asad");
// fs.appendFileSync("notes.txt", ", hi there you are a good boy");
// const firstname = require("./utils");
// const lastname = "Rahman";
// console.log(firstname);
// console.log(lastname);

// const add = require("./utils");

// const sum = add(2, 4);
// console.log(sum);
