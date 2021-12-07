const { dir } = require("console");
const fs = require("fs");
const path = require("path");
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
        treefn(inputArr[1]);
        break;
    case "organize":
        organizefn(inputArr[1]); // ?path
        break;
    case "help":
        helpfn();
        break;
    default:
        console.log("Please Enter A Valid Command!");
        break;
}

function treefn(dirpath){
    // console.log("Function Tree!");
    if(dirpath == undefined){
        console.log("Please enter a directory path")
        return;
    }
    else{
        let doesExist = fs.existsSync(dirpath)
        if(doesExist){
            treeHelper(dirpath, " ");
        }
    }
}

function treeHelper(dirpath,  indent) {
    let isFile = fs.lstatSync(dirpath).isFile()
    if(isFile){
        let fileName = path.basename(dirpath)
        console.log(indent + "├──" + filName);
    }else{
        let dirName = path.basename(dirpath)
        console.log(indent + "└─╴" + dirName);
    }
    let children = fs.readdirSync(dirpath)
    console.log(children);
    for(let child = 0;child<children.length;child++){

    }
}

function organizefn(dirpath){
    // console.log("Function Organize!");
    let destpath; //!destination path
    if(dirpath == undefined){
        console.log("Please enter a directory path!");
        return;
    }else{
      //!to check if th given path exist or not?
      let doesExist = fs.existsSync(dirpath); //?Returns true if the path exists, false otherwise.
      if(doesExist){
        //? create a organized files directory
        destpath = path.join(dirpath, "organized_folder")
        if(fs.existsSync(destpath)==false){
            fs.mkdirSync(destpath);
        }else{
            console.log("Folder already exists!");
        }
      }else{
          console.log("Please enter a valid path!");
      }
    }
    organizeHelper(dirpath, destpath)
}

function organizeHelper(src, destpath){
    //!all files, folders i.e, all child files/folders under main path
    let childNames = fs.readdirSync(src);
    // console.log(childNames);
    for(let items = 0;items<childNames.length;items++){
        //? getting path of evrey individual child files/folders
        let childAddress = path.join(src, childNames[items]);
        // console.log(childAddress);
        //! now check which one is file 
        let isFile = fs.lstatSync(childAddress).isFile(); //!lstatSync - accepts path as a parameter
        // console.log(isFile);
        if(isFile){
            //? is it is file, we'll separate it to its category types
            let fileCategory = getCategory(childNames[items]);
                // console.log(childNames[items] + " belongs to " + fileCategory);
                sendFiles(childAddress, destpath, fileCategory)
        }
    }
}

//? function which will return category type of each file
function getCategory(name){
    //! we need separate them on the bases of extensions
    let ext = path.extname(name);
    // ? console.log(ext); // ? return extemsions inlcuding "."
    ext = ext.slice(1); //!removing dot
    // console.log(ext);
    for(let type in types){
        let cTypeArr = types[type];
        // console.log(cTypeArr);
        // console.log(type);
        for(let i=0;i<cTypeArr.length;i++){
            if(ext==cTypeArr[i]){
                return type
            }
        }
    }
}

//! sendFiles function accepts 3 parameter - srcFilePath(child's path), destpath, fileCategory
function sendFiles(src, dest, fileCategory){
    let catPath = path.join(dest, fileCategory);
    // console.log(catPath);
    if(fs.existsSync(catPath)==false)
        fs.mkdirSync(catPath);
    let fileName = path.basename(src)
    // console.log(fileName); 
    let destFilePath = path.join(catPath, fileName)
    // console.log(destFilePath);
    fs.copyFileSync(src, destFilePath);
    //fs.unlinkSync(src); //? commented this - because it will move "index.js" to organize_folder
    // console.log(fileName + " copied to " + fileCategory);
}


function helpfn(){
    console.log(`
    List All The Commands:
        1) tree command - node index.js tree
        2) organize command - node index.js organize
        3) help command - node index.js help
    `);
}

