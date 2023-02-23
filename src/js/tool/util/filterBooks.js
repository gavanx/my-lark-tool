module.exports = files => {
  return files.filter(f => {
    return f.name.match(/^《.*》：/g)
  }).sort((a,b) => a.name < b.name ? -1 : 1)
}
