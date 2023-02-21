const filterAddingRecords = (files, nameSet, strict) => {
  const startStr = '《'
  const endStr = strict ? '》：' : '》'
  let r = []
  const bookArr = [...nameSet]
  let addedIndex = 0
  files.forEach(f => {
    if(f.name[0] === startStr && f.name.includes(endStr)) {
      const name = f.name.substring(1, f.name.indexOf(endStr))
      if(!nameSet.has(name)) {
        if(bookArr.filter(book => {
          if(book.startsWith(name + '：') || book.startsWith(name + '（') ){
            console.log('filterAddingRecords added: ', ++addedIndex, name, book)
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
    } else {
      console.log('filterAddingRecords exception: ', f.name)
    }
  })

  r = r.sort((a,b) => a.fields['书名'] < b.fields['书名'] ? -1 : 1)
  return r
}

module.exports = filterAddingRecords