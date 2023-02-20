let arr = [];
for (const i of [1, 2, 3]) {
  arr = arr.concat(
    require(`../../../data/bitable/list-500-${i}.json`).data.items
  );
}

arr.filter(item => item.fields['书名'].indexOf('\n') >= 0).forEach(item => console.log(JSON.stringify(item.fields['书名'].trim())))
