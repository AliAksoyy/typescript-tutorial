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
