const loadBookFile = (path) => {
  return require(path).data.files;
};

const loadBookFiles = (paths) => {
  let arr = [];
  if (Array.isArray(paths)) {
    paths.forEach((p) => {
      arr = arr.concat(loadBookFile(p));
    });
  } else {
    arr = loadBookFile(paths);
  }
  return arr;
};

module.exports = loadBookFiles;
