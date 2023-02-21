const filterFiles = (files, nameSet, strict) => {
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
            console.log('filterFiles added: ', ++addedIndex, name, book)
            return true
          }
          return false
        }).length === 0){
          f.name2 = name
          r.push(f)
        }
      }
    } else {
      console.log('filterFiles exception: ', f.name)
    }
  })

  return r
}

module.exports = filterFiles