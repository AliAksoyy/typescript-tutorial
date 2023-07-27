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
