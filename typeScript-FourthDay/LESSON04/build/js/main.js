"use strict";
const add = (a, b) => {
    return a + b;
};
console.log(add(1, 2));
const logMsg = (message) => {
    console.log(message);
};
logMsg([1, 2]);
logMsg({ a: 3 });
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
console.log(subtract(1, 2));
let mutiply = function (c, d) {
    return c * d;
};
logMsg(mutiply(4, 2));
let carpma = (a, b) => {
    return a * b;
};
console.log(carpma(4, 2));
// optional parametres
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
// default param value
const addAll1 = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll1(1, 2, 3));
logMsg(addAll1(1, 2));
// Rest Parameters
const total = (a, ...nums) => {
    console.log(nums);
    return (a +
        nums.reduce((prev, cur) => {
            console.log(prev);
            console.log(cur);
            return prev + cur;
        }));
};
logMsg(total(5, 2, 3, 4, 6, 7));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
logMsg(createError("aa"));
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
infinite();
// custom  type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happened");
};
console.log(numberOrString("a"));
