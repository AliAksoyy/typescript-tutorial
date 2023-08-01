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
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: true };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return {
        value: arg,
        is: !!arg,
    };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "ali" }));
const getUsersProperty = (users, key) => {
    return [users, key];
};
console.log(getUsersProperty({ name: "ali", id: 2 }, "ali"));
