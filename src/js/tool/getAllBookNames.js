
let books = new Set();
for (const i of [1, 2, 3]) {
  require(`../../../data/bitable/list-500-${i}.json`).data.items.forEach(item => books.add(item.fields['书名'].trim()))
}
console.log(books, books.size)