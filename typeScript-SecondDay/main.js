// **Generic Examples *************************************1**********************************
function getProperty(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo,
    };
}
getProperty({ a: 2 }, { conn: "localhost", username: "s", password: 2 });
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
