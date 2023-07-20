export {};
console.log("hello typescript");

interface Product {
  name: string;
  price: number;
  brand?: string;
}

function update<T extends object, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
) {
  return { ...obj, [key]: value };
}

let pro: Product = { name: "ali", price: 2 };

console.log(update(pro, "price", 2));
