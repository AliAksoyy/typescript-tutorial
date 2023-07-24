var Square = /** @class */ (function () {
    function Square(c, a) {
        this.color = c;
        this.area = a;
    }
    Square.prototype.ali = function () {
        console.log("object");
    };
    return Square;
}());
var a = new Square({ r: 0, g: 0, b: 0 }, 2);
console.log(a);
