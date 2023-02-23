const moveFile = require("../../http/moveFile");
const wait = require("./wait");

const moveFiles = (arr, folder_token, i = 0) => {
  if (i >= arr.length) {
    return;
  }
  const item = arr[i];
  console.log("moveFiles moving", i, item.name);
  moveFile(item.type, item.token, folder_token).then(() => {
    wait(1);
    moveFiles(arr, folder_token, i + 1);
  });
};

module.exports = moveFiles