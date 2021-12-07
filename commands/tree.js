const fs = require("fs");
const path = require("path");

function treefn(dirpath) {
  // console.log("Function Tree!");
  if (dirpath == undefined) {
    console.log("Please enter a directory path");
    return;
  } else {
    let doesExist = fs.existsSync(dirpath);
    if (doesExist) {
      treeHelper(dirpath, " ");
    }
  }
}

function treeHelper(dirpath, indent) {
  let isFile = fs.lstatSync(dirpath).isFile();
  if (isFile == true) {
    let fileName = path.basename(dirpath);
    console.log(indent + "├──" + fileName);
  } else {
    let dirName = path.basename(dirpath);
    console.log(indent + "└─╴" + dirName);
    let children = fs.readdirSync(dirpath);
    // console.log(children); // ! [ 'archives', 'codes', 'documents', 'images' ]
    for (let child = 0; child < children.length; child++) {
      let childPath = path.join(dirpath, children[child]);
      //   console.log(childPath);
      treeHelper(childPath, indent + "\t");
    }
  }
}

module.exports = {
    treeFnKey : treefn
}