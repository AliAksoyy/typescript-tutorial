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
