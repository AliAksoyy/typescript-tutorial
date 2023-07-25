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

// const last = <T>(arr: T[]): T => {
//   return arr[arr.length - 1];
// };

// let l = last([1, 2, 3]);

// console.log(l); //number

// let l2 = last(["2", "3"]);

// console.log(l2); // string

// //

// const makeArr = <T, Y>(arr1: T, arr2: Y): [T, Y] => {
//   return [arr1, arr2];
// };

// let a = makeArr("2", 4);

// let a1 = makeArr<string | null, number>("a", 5);

// //

// const makeFullName = <T extends { firstName: string; lastName: string }>(
//   obj: T
// ) => {
//   return { ...obj, fullName: obj.firstName + " " + obj.lastName };
// };

// let v4 = makeFullName({ firstName: "ali", lastName: "akosy" });

// console.log(v4);

// interface Tab<T> {
//   id: string;
//   position: number;
//   data: T;
// }

// type NumberTab = Tab<number>;
// type StringTab = Tab<string>;

//

// **Generic Examples *************************************7**********************************

// type MyGenericType<TData> = {
//   data: TData;
// };

// type Example1 = MyGenericType<{ firstName: string }>;

// type Example2 = MyGenericType<string>;

// //

// const makeFetch = <TData>(url: string): Promise<TData> => {
//   return fetch(url).then((res) => res.json());
// };

// makeFetch<{ firstName: string; lastName: string }>(
//   "https://randomuser.me/api/"
// ).then((res) => console.log(res));

//

// const addIdToObject = <T>(obj: T): T & { id: string } => {
//   return {
//     ...obj,
//     id: "123",
//   };
// };

// const result = addIdToObject<{ firstName: string; lastName: string }>({
//   firstName: "ali",
//   lastName: "aksoy",
// });

// console.log(result)

// const getValue = <TObj>(obj: TObj, key: keyof TObj): TObj[keyof TObj] => {
//   if (key == "bad") {
//     throw Error("Don't accesss the bad key");
//   }
//   return obj[key];
// };

// const result = getValue({ a: 1, b: "3", c: false }, "b");

// console.log(result);

// const getValue1 = <TObj, TKey extends keyof TObj>(
//   obj: TObj,
//   key: TKey
// ): TObj[TKey] => {
//   if (key == "bad") {
//     throw Error("Don't accesss the bad key");
//   }
//   return obj[key];
// };

// const result1 = getValue({ a: 1, b: "3", c: false }, "b");

// console.log(result1);

// **Generic Examples *************************************8**********************************

// interface Database {
//   conn: string;
//   username: string;
//   password: number;
// }
// function getProperty<Type, Key extends Database>(
//   valOne: Type,
//   valTwo: Key
// ): object {
//   return {
//     valOne,
//     valTwo,
//   };
// }

// getProperty({ a: 2 }, { conn: "localhost", username: "s", password: 2 });

// interface Quiz {
//   name: string;
//   type: string;
// }

// interface Course {
//   name: string;
//   author: string;
//   subject: string;
// }

// **Generic Examples *************************************9**********************************

interface ISetState<T> {
  (newStore: T): T;
}

const useState = <T>(initStore: T): [T, ISetState<T>] => {
  let store: T = initStore;

  function setState(newStore: T): T {
    store = newStore;

    return store;
  }

  return [store, setState];
};

const [state, setState] = useState<{ email: string; password: string }>({
  email: "",
  password: "",
});

console.log(state);
console.log(setState({ email: "emre", password: "emre" }));


