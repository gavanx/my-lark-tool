let arr = [];
for (const i of [1, 2, 3]) {
  arr = arr.concat(
    require(`../../../data/bitable/list-500-${i}.json`).data.items
  );
}

function duplicates(arr) {
  return arr.filter(
    (e, i) => arr.indexOf(e) !== arr.lastIndexOf(e) && arr.indexOf(e) === i
  );
}

console.log(duplicates(arr.map(item => item.fields['书名'])));

