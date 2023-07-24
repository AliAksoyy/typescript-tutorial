// **Generic **

class Store<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  addItem(item: T) {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Ali extends Store<Product> {}

const aliStore = new Ali();
aliStore.addItem(new Product("Laptop", 1000));
aliStore.addItem(new Product("Phone", 500));

const products = aliStore.getItems();
console.log(products); // Output: [Product { name: 'Laptop', price: 1000 },
