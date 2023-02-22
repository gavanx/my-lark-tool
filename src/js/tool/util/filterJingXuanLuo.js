const filterJingXuanLuo = files => {
  return files.filter(f => {
    return f.name.match(/^罗胖精选/g)
  })
}

module.exports = filterJingXuanLuo