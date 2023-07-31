"use strict";
// convert to more or less spesific
let a = "hello";
let b = a;
b = 4;
b = "hello"; // les spesific
let c = a; // more spesific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// ??Be careful TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "add");
// 10 as string;
10;
// The DOM
const img = document.querySelector("img"); // ?? HTMLImageElement | null
const img1 = document.querySelector("#ali"); // ?? Element | null
const myImg = document.getElementById("#img"); // ?? HTMLElement | null
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
