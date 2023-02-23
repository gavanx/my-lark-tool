module.exports = files => {
  return files.filter(f => {
    return f.name.match(/^\d{3}｜/g)
  }).sort((a,b) => a.name < b.name ? -1 : 1).filter(f => f.name < '100')
}
