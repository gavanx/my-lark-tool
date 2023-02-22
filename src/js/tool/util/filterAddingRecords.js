const filterFiles = require("./filterBookFiles");

const filterAddingRecords = (files, nameSet, strict) => {
  let r = filterFiles(files, nameSet, strict)
  r = r.map(f => (
      {
        "fields": {
          '书名': f.name2,
          "听书": {
            "link": f.url,
            "text": f.name
          },
        }
      }
  ))
  r = r.sort((a,b) => a.fields['书名'] < b.fields['书名'] ? -1 : 1)
  return r
}

module.exports = filterAddingRecords