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
// interface Product {
//   name: string;
//   price: number;
// }
// function update<T extends object, K extends keyof T>(
//   obj: T,
//   key: K,
//   newValue: T[K]
// ): T {
//   return { ...obj, [key]: newValue };
// }
// let product1: Product = { name: "Laptop", price: 23 };
// console.log(update(product1, "name", "7"));
// **Generic Examples *************************************3**********************************
// const arr1: Array<string> = ["name", "price", "id"];
// const arr2 = [1, 2, 3];
// const x = arr1.pop();
// const y = arr2.pop();
// const p1 = Promise.resolve("hello");
// const p2 = Promise.resolve(3.14);
// (async () => {
//   const x = await p1;
//   const y = await p2;
// })();
// type Job = {
//   name: string;
//   start: () => void;
//   state: "inComplete" | "success" | "failure";
// };
// type JobRun<T extends Job> = {
//   job: T;
//   state: "queued" | "running" | "completed";
//   onComplete: (cb: (job: T) => void) => void;
// };
// type SendEmailJob = Job & {
//   recipentEmail: string;
//   subject: string;
// };
// function enqueueJob<T extends Job>(job: T): JobRun<typeof job> {
//   job.name;
//   return {
//     job,
//     state: "queued",
//     onComplete: (cb: (job: T) => void) => cb(job),
//   };
// }
// const j: SendEmailJob = {
//   recipentEmail: "alice@gmail",
//   subject: "hii",
//   name: "send-email",
//   start: () => null,
//   state: "inComplete",
// };
// const run = enqueueJob(j);
// console.log(run);
// run.onComplete((job) => {
//   console.log(job);
// });
// ???? arrow ile yazılımı
// const ali = <J>(job: J): Ali<typeof job> => ({
//   job,
//   state: "b",
//   onCompleted: (cb: (job: J) => void) => cb(job),
// });
// **Generic Examples *************************************4**********************************
// type Dropdownoption = {
//   value: string;
// };
// type DropdownProps<T extends ReadonlyArray<Dropdownoption>> = {
//   options: T;
//   onSelect: (arg: T[number]) => void;
// };
// declare function DropDown<T extends ReadonlyArray<Dropdownoption>>(
//   props: DropdownProps<T>
// ): void;
// DropDown({
//   options: [
//     { value: "gadget" as const },
//     { value: "widgets" as const },
//   ] as const,
//   onSelect: (arg) => {
//     console.log(arg.value);
//   },
// });
// **Generic Examples *************************************5**********************************
// function loggingIdentify<Type>(arg: Array<Type>): Type[] {
//   console.log(arg.length);
//   return arg;
// }
// interface Bootle {
//   brand: string;
//   type: number;
// }
// function getSearchProducts<T>(products: T[]): T {
//   //do some database operations
//   const myIndex = 3;
//   return products[myIndex];
// }
// const getMoreSearchProducts = <T>(products: Array<T>): T => {
//   const myIndex = 4;
//   return products[myIndex];
// };
// **Generic Examples *************************************6**********************************
