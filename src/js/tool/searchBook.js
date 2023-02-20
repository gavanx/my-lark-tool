const files = require('../../../data/root/root-files.json').data.files

const startStr = '《'
const endStr = '》：'
const r = []
files.forEach(f => {
  if(f.name[0] === startStr && f.name.includes(endStr)) {
    // console.log(f.name)
    const name = f.name.substring(1, f.name.indexOf(endStr))
    // console.log(`${name}\t${f.name}`)

    if(f.name.substring(f.name.indexOf(endStr) + 2).includes("》")) {
      r.push({
        name,
        raw: f.name
      })
    }
  }
})

console.log(r, r.length)