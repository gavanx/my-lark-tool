const filterNoteFiles = files => {
  return files.filter(f => {
    return f.name.match(/^《.*》整理\d{4}\.\d{1,2}\.\d{1,2}/g)
  })
}

module.exports = filterNoteFiles