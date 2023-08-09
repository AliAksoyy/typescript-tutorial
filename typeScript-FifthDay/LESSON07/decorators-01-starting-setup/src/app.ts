// function merge<T, U>(a: T, b: U): T & U {
//   return { ...a, ...b };
// }

// let obj = merge<{ name: string; hobi: Array<string> }, { age: number }>(
//   { name: "ali", hobi: ["2"] },
//   { age: 2 }
// );
// console.log(obj);

let a = 1000;
let b = "ali";
let d = Object.assign(
  [...a.toString()],
  { 9: a },
  { d: Object.assign([...b], { 3: 2 }) }
);
console.log(d);

d.map((a, i) => {
  console.log("a", a);
  console.log("index", i);
});
