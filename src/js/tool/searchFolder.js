const files = require('../../../data/root-files.json').data.files

const r = files.filter(f => f.type === 'folder')

console.log(r)