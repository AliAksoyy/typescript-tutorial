"use strict";
let stringArray = ["ali", "beyda"];
let guitars = ["Strat", "Les"];
let arrayData1 = [1, 2, "ali", "beyda"];
let arrayData2 = [false, 2];
let mixedData = ["strat", 3, false];
let arrayData = ["ali", 3, false];
// arrayData2 = guitars; //?? Type 'string' is not assignable to type 'number | boolean'
let test = [];
let bands = [];
bands.push("Ali Aksoy");
//Tuple
let myTuple = ["Ali Aksoy", 2, false, 2];
myTuple.push("asd");
// Object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "ali",
    prop2: true,
};
exampleObj.prop2 = false;
let a = [{ a: 3 }, { v: false }];
let evh = {
    name: "ali",
    active: false,
    albums: [12, "ali"],
    cb: (type) => console.log(`${type}`),
};
evh.cb("a");
let jp = {
    name: "ali",
    albums: ["I", "II", "III"],
};
const greetGuitarist = (guitarist) => {
    return guitarist.name;
};
console.log(greetGuitarist(jp));
