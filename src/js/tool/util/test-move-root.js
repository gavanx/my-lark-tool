const generatePaths = require("./generatePaths.js");
const loadBookFiles = require("./loadBookFiles");
const filterFiles = require("./filterFiles.js");
const bookSet = require('../bitable/getAllBookNamesInTable')()

let r = loadBookFiles('../../../../data/root/root-files.json');
console.log(r, r.length);


r = filterFiles(r, bookSet, true)
console.log(r, r.length)
