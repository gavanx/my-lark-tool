const generatePaths = require("./generatePaths.js");
const loadBookFiles = require("./loadBookFiles");
const filterBookFiles = require("./filterAddingBooks.js");
const moveFiles = require("./moveFiles.js");
const bookSet = require("../bitable/getAllBookNamesInTable")();

let r = loadBookFiles("../../../../data/root/root-files.json");
console.log(r, r.length);

r = filterBookFiles(r, bookSet, true);
// console.log(r, r.length)

const arr = r.slice(200, 300);
console.log(arr);

moveFiles(arr, "fldcn787S4hqjStjLXEWHk42PWd");
