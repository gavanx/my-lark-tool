const files = require('../../../data/root-files.json').data.files

const s = new Set()
files.forEach(f => {
  s.add(f.type)
})

console.log(s)

/***

{
  'docx',
  'mindnote',
  'doc',
  'file',
  'bitable',
  'sheet',
  'folder'
}

 */