"use strict";
const stringEcho = (arg) => {
    return arg;
};
const stringEcho1 = (arg) => {
    return arg;
};
// console.log(stringEcho("arg"));
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj("arg"));
console.log(isObj(["arg"]));
console.log(isObj({ a: 2 }));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false,
        };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
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
