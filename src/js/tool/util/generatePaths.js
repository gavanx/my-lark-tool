const generatePaths = (base, pageCount) => {
  const arr = [];
  for (let i = 1; i <= pageCount; i++) {
    arr.push(`${base}-${i}.json`);
  }
  return arr
};

module.exports = generatePaths

const r = generatePaths('../../../../data/tingshu/tingshub-books-200', 8)
console.log(r, r.length)