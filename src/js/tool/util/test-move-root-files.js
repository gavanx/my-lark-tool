const filterNoteFiles = require('./filterNoteFiles')
const filterJingXuanLuo = require('./filterJingXuanLuo')

const moveFiles = require('./moveFiles')

const files = require('../../../../data/root/root-files.json').data.files

// let r = filterNoteFiles(files)
let r = filterJingXuanLuo(files)
// r = r.filter(f => f.name.includes('《'))
r = r.filter(f => !f.name.includes('解读') && !f.name.includes('匏瓜》') && !f.name.includes('是古老的藏宝图'))
r = r.slice(10, 100)
console.log(r.map(f => f.name).join('\n'), r.length)

moveFiles(r, 'fldcnEdTce80DhcD3h93sXogE8e')