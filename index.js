const { dir } = require("console");
const fs = require("fs");
const path = require("path");
const helpObj = require('./commands/help')
const treeObj = require('./commands/tree')
const organizeObj = require('./commands/organize')
let inputArr = process.argv.slice(2); //! this will give the command name
// console.log(inputArr);
let command = inputArr[0];
// console.log(command);

let types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
  images: ["jpeg", "gif", "png"],
  codes: ["htm", "js", "cpp", "css", "html"],
};

switch (command) {
    case "tree":
        treeObj.treeFnKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeFnKey(inputArr[1]); // ?path
        break;
    case "help":
        helpObj.helpFnKey();
        break;
    default:
        console.log("Please Enter A Valid Command!");
        break;
}
