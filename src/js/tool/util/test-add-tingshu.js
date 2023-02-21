const generatePaths = require("./generatePaths.js");
const loadBookFiles = require("./loadBookFiles");
const filterAddingRecords = require("./filterAddingRecords");
const bookSet = require('../bitable/getAllBookNamesInTable')()

let r = loadBookFiles(
  generatePaths("../../../../data/tingshu/tingshu-books-200", 8)
);
// console.log(r, r.length);


const rawNameSet = new Set(r.map(f => f.name))
console.log(rawNameSet.size)

r = filterAddingRecords(r, bookSet, false)
r = r.slice(1000)
console.log(r.map(r => r.fields['书名']).join('\n'), r.length)

const batchAdd = require('../../http/bitable/batch-add')
batchAdd(r)