let arr = [];
for (const i of [3]) {
  arr = arr.concat(
    require(`../../../../data/bitable/list-500-${i}.json`).data.items.filter(item => item.fields['书名'].indexOf('\n') >= 0)
  );
}

arr.forEach(item => {
  item.fields['书名'] = item.fields['书名'].trim()
  delete item.id
})

// console.log(arr)

const currentArr = arr.slice(0, 1)
// console.log(currentArr)

const batchUpdate = require('../../http/bitable/batch-update')
batchUpdate(arr)