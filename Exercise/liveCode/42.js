function selectionSort(book) {
  for (let i = 0; i < book.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < book.length; j++) {
      if (book[j] < book[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [book[i], book[minIndex]] = [book[minIndex], book[i]];
    }
  }
  return book;
}
let priceBook = [35000, 12000, 70000, 24000, 15000, 56000, 45000];
console.log(selectionSort(priceBook));
