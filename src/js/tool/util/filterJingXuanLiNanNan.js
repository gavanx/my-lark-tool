const filterJingXuanLiNanNan = files => {
  return files.filter(f => {
    return f.name.match(/^得到精选/g)
  })
}

module.exports = filterJingXuanLiNanNan