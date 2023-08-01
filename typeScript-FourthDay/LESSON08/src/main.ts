const stringEcho = (arg: string): string => {
  return arg;
};

console.log(stringEcho("arg"));

const stringEcho1 = <T>(arg: T): T => {
  return arg;
};

console.log(stringEcho1("arg"));
console.log(stringEcho1(4));

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj({ a: 4 }));
console.log(isObj([{ a: 4 }]));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};


console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(1));
console.log(isTrue("ali"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log("a",isTrue({}));
console.log(isTrue(NaN));
console.log(isTrue(-0));
console.log("b",isTrue([]));
console.log(isTrue([1,2,3]));
console.log(isTrue({ a: 4 }));
console.log(isTrue([{ a: 4 }]));

