const filterNoteFiles = require('./filterNoteFiles')
const filterJingXuanLuo = require('./filterJingXuanLuo')
const filterJingXuanLiNanNan = require('./filterJingXuanLiNanNan')
const moveFiles = require('./moveFiles')
const filterTouTiaoOld = require('./filterTouTiaoOld')
const filterTouTiaoNanNan = require('./filterTouTiaoNanNan')
const filterBooks = require('./filterBooks')

const files = require('../../../../data/root/root-files.json').data.files

// let r = filterNoteFiles(files)
// let r = filterJingXuanLuo(files)
// let r = filterTouTiaoOld(files)
// let r = filterTouTiaoNanNan(files)
let r = filterBooks(files)

// r = r.filter(f => f.name.includes('《'))
// r = r.filter(f => !f.name.includes('解读') && !f.name.includes('匏瓜》') && !f.name.includes('是古老的藏宝图'))

// r = r.slice(0, 10)
r = r.slice(20, 100)
// r = r.slice(100, 200)

console.log(r.map(f => f.name).join('\n'), r.length)

moveFiles(r, 'fldcn787S4hqjStjLXEWHk42PWd')//文稿2