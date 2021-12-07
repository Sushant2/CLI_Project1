const fs = require("fs");
const path = require("path");

function helpfn() {
  console.log(`
    List All The Commands:
        1) tree command - node index.js tree
        2) organize command - node index.js organize
        3) help command - node index.js help
    `);
}

module.exports = {
    helpFnKey : helpfn
}