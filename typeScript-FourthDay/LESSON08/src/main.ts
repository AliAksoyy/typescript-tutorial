const stringEcho = (arg: string): string => {
  return arg;
};
const stringEcho1 = <T>(arg: T): T => {
  return arg;
};

// console.log(stringEcho("arg"));

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj("arg"));
console.log(isObj(["arg"]));
console.log(isObj({ a: 2 }));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return {
      arg,
      is: false,
    };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return {
    arg,
    is: !!arg,
  };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue({}));
console.log(isTrue(NaN));
