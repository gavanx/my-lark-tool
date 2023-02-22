const generatePaths = require("./generatePaths.js");
const loadBookFiles = require("./loadBookFiles");
const filterFiles = require("./filterFiles.js");
const moveFile = require("../../http/moveFile.js");
const wait = require("./wait.js");
const bookSet = require("../bitable/getAllBookNamesInTable")();

let r = loadBookFiles("../../../../data/root/root-files.json");
console.log(r, r.length);

r = filterFiles(r, bookSet, true);
// console.log(r, r.length)

const arr = r.slice(100, 200);
console.log(arr);

const moveFiles = (arr, folder_token, i = 0) => {
  if (i >= arr.length) {
    return;
  }
  const item = arr[i];
  console.log("test moving", i, item.name);
  moveFile(item.type, item.token, folder_token).then(() => {
    wait(2);
    moveFiles(arr, folder_token, i + 1);
  });
};

moveFiles(arr, "fldcn787S4hqjStjLXEWHk42PWd");
