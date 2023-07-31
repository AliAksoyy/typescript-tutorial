const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(1, 2));

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg([1, 2]);
logMsg({ a: 3 });
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

console.log(subtract(1, 2));

type mathFunction = (a: number, b: number) => number;

let mutiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(mutiply(4, 2));

interface mathFunction1 {
  (c: number, d: number): number;
}

let carpma: mathFunction1 = (a, b) => {
  return a * b;
};

console.log(carpma(4, 2));

// optional parametres

const addAll = (a: number, b: number, c?: number): number => {
  if (c) {
    return a + b + c;
  }
  return a + b;
};

// default param value
const addAll1 = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll1(1, 2, 3));
logMsg(addAll1(1, 2));

// Rest Parameters

const total = (a: number, ...nums: Array<number>): number => {
  console.log(nums);
  return (
    a +
    nums.reduce((prev, cur) => {
      console.log(prev);
      console.log(cur);
      return prev + cur;
    })
  );
};

logMsg(total(5, 2, 3, 4, 6, 7));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

logMsg(createError("aa"));

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

infinite();

// custom  type guard

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happened");
};

console.log(numberOrString("a"));
