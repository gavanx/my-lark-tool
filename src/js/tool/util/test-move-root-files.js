const filterNoteFiles = require('./filterNoteFiles')

const files = require('../../../../data/root/root-files.json').data.files

let r = filterNoteFiles(files)
console.log(r.map(f => f.name).join('\n'))