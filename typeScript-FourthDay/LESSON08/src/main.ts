const stringEcho = (arg: string): string => {
  return arg;
};

// console.log(stringEcho("arg"));

const stringEcho1 = <T>(arg: T): T => {
  return arg;
};

// console.log(stringEcho1("arg"));
// console.log(stringEcho1(4));

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
// console.log(isObj(true));
// console.log(isObj({ a: 4 }));
// console.log(isObj([{ a: 4 }]));

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

//??????????
const isTrue1 = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(1));
// console.log(isTrue("ali"));
// console.log(isTrue(""));
// console.log(isTrue(null));
// console.log("a", isTrue({}));
// console.log(isTrue(NaN));
// console.log(isTrue(-0));
// console.log("b", isTrue([]));
// console.log(isTrue([1, 2, 3]));
// console.log(isTrue({ a: 4 }));
// console.log(isTrue([{ a: 4 }]));

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here
  return user;
};

console.log(processUser({ id: 3, name: "ali" }));
