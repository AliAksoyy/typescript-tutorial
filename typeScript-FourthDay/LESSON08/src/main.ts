const stringEcho = (arg: string): string => {
  return arg;
};
const stringEcho1 = <T>(arg: T): T => {
  return arg;
};

console.log(stringEcho("arg"));

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj("arg"));
console.log(isObj(["arg"]));
console.log(isObj({ a: 2 }));
