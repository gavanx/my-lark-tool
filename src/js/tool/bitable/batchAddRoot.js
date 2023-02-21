const files = require('../../../../data/root/root-files.json').data.files
const books = require('./getAllBookNamesInTable')()
const bookArr = [...books]

const startStr = '《'
const endStr = '》：'
let r = []
files.forEach(f => {
  if(f.name[0] === startStr && f.name.includes(endStr)) {
    // console.log(f.name)
    const name = f.name.substring(1, f.name.indexOf(endStr))
    // console.log(`${name}\t${f.name}`)

    if(!books.has(name)) {
      if(bookArr.filter(book => {
        if(book.startsWith(name + '：') || book.startsWith(name + '（') ){
          console.log(name, book)
          return true
        }
        return false
      }).length === 0){
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
    }
  }
})

r = r.sort((a,b) => a.fields['书名'] < b.fields['书名'] ? -1 : 1)
console.log(r, r.length)
const currentArr = r.slice(0, 1)
// console.log(currentArr)

const batchAdd = require('../../http/bitable/batch-add')
batchAdd(r)