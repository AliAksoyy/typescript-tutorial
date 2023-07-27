"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function idetntityThree(val) {
    return val;
}
function identityFour(values) {
    return values[0];
}
// identityFour< Bootle>({brand:"2",})
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getModeSearchProducts = (products) => {
    // do some database operations
    const myIndex = 2;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo, valThree) {
    return {
        valOne,
        valTwo,
        valThree,
    };
}
console.log(anotherFunction({ name: "ali", id: 2 }, 3, "id"));
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
function detectType(val) {
    if (typeof val === "number") {
        return val + 2;
    }
    else {
        return (val += "ali");
    }
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
    else {
        return strs;
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
let a = new Date();
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim != undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius;
    }
    else if (shape.kind === "square")
        return shape.side * shape.side;
    else {
        return shape.length * shape.width;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
