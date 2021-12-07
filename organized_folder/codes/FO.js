//First Activity with Node.js

//We'll be creating a File System Organizer
// Features of the Project -
// If you have numerous files in a folder and they r not properly organised
// So, you can use this tool to arrange them in specific directory acc. to thier extension
// like text files will go into text files, .exe files will go to application folder & so on
// so at the end you will have a arranged set of files in specific folder

//We'll be using builtin node modules like fs & path to create this project

// In CLI, inputs goes in the form of array - nodejs treats CLI as an array and that array is your process array
//example
// let input = process.argv[1]
// console.log(input);

const fs = require("fs");
const path = require("path");
let inputArr = process.argv.slice(2);
// console.log(inputArr)

let command = inputArr[0];

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
    treefn();
    break;
  case "organize":
    organizefn(inputArr[1]); // 0 - command, 1 - path
    break;
  case "help":
    helpfn();
    break;
  default:
    console.log("Please enter a valid command");
    break;
}

function treefn() {
  console.log("Tree Function Implemented");
}
function organizefn(dirpath) {
  //1. input of a directory path
  let destpath; //destination path
  if (dirpath == undefined) {
    console.log("Please enter a directory path");
    return;
  } else {
    // to check if the given path exist or not?
    let doesExist = fs.existsSync(dirpath);
    // console.log(desExist);
    if (doesExist) {
      //2. create a organised files directory
      destpath = path.join(dirpath, "organized_files");
      // example - C:\Users\sushant\Desktop\Dev\Project 1\random\organized_files
      if (fs.existsSync(destpath) == false) {
        fs.mkdirSync(destpath);
      } else {
        console.log("Folder already exists");
      }
    } else {
      console.log("Please enter a valid path");
    }
  }
  organizeHelper(dirpath);
}

function organizeHelper(src, dest) {
  // files under folder or child under folder
  let childNames = fs.readdirSync(src);
  // console.log(childNames);
  for (let i = 0; i < childNames.length; i++) {
    let childAddress = path.join(src, childNames[i]);
    let isFile = fs.lstatSync(childAddress).isFile();

    if (isFile) {
      let fileCategory = getCategory(childNames[i]);
    //   console.log(childNames[i] + " belongs to " + fileCategory);
    }
  }
}

//for getting extension
function getCategory(name) {
  let ext = path.extname(name);
//   console.log(ext);
  ext = ext.slice(1); // for removing dot
//   console.log(ext);

  //1-1 type k lie array return kia
  for (let type in types) {
    let cTypeArr = types[type];
    console.log(cTypeArr);

    for (let i = 0; i < cTypeArr.length; i++) {
      if (ext == cTypeArr[i]) {
        return type;
      }
    }
  }
}

function helpfn() {
  console.log(`
    List all the commands - 
        1) tree command - node FO.js tree
        2) organize command - node FO.js organize
        3) help command - node FO.js help
    `);
}
