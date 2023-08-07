class DataStorage<T> {
  
    data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("ali");
textStorage.addItem("beyda");
// textStorage.removeItem("ali");
console.log(textStorage)
console.log(textStorage.getItem());
