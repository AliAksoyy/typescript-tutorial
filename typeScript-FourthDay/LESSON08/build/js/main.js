"use strict";
const stringEcho = (arg) => {
    return arg;
};
const stringEcho1 = (arg) => {
    return arg;
};
console.log(stringEcho("arg"));
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj("arg"));
console.log(isObj(["arg"]));
console.log(isObj({ a: 2 }));
