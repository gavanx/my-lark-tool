const files = require('../../../../data/root/root-files.json').data.files


const startStr = '《'
const endStr = '》：'
const r = []
files.forEach(f => {
  if(f.name[0] === startStr && f.name.includes(endStr)) {
    // console.log(f.name)
    const name = f.name.substring(1, f.name.indexOf(endStr))
    // console.log(`${name}\t${f.name}`)

    // TODO: 要判别是否有重复的已添加到bitable中的书
    r.push({
      "fields": {
        '书名': name,
        "听书": {
          "link": f.url,
          "text": f.name
        },
      },
    })
  }
})

console.log(r, r.length)
const currentArr = r.slice(0, 1)
console.log(currentArr)

const batchAdd = require('../../http/bitable/batch-add')
batchAdd(currentArr)