const files = require('../../../data/root-files.json').data.files

files.forEach(f => {
  if(f.name.includes(f.name[0] === "《" && '》：')) {
    console.log(f.name)
  }
})