const generatePaths = require("./generatePaths.js");
const loadBookFiles = require("./loadBookFiles");

const r = loadBookFiles(
  generatePaths("../../../../data/tingshu/tingshu-books-200", 8)
);
console.log(r, r.length);


const rawNameSet = new Set(r.map(f => f.name))
console.log(rawNameSet.size)