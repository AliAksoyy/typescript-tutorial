// **Generic Examples *************************************1**********************************

// class Store<T> {
//   private items: T[];

//   constructor() {
//     this.items = [];
//   }

//   addItem(item: T) {
//     this.items.push(item);
//   }

//   getItems(): T[] {
//     return this.items;
//   }
// }

// class Product {
//   name: string;
//   price: number;

//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Ali extends Store<Product> {}

// const aliStore = new Ali();
// aliStore.addItem(new Product("Laptop", 1000));
// aliStore.addItem(new Product("Phone", 500));

// const products = aliStore.getItems();
// console.log(products); // Output: [Product { name: 'Laptop', price: 1000 },

// **Generic Examples *************************************2**********************************

interface Product {
  name: string;
  price: number;
}

function update<T extends object, K extends keyof T>(
  obj: T,
  key: K,
  newValue: T[K]
): T {
  return { ...obj, [key]: newValue };
}

let product1: Product = { name: "Laptop", price: 23 };

console.log(update(product1, "name", "7"));
