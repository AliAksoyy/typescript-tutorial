var Ali = /** @class */ (function () {
    function Ali(name, id) {
        this.name = name;
        this.id = id;
    }
    Ali.prototype.getAli = function () {
        console.log("".concat(this.name, " ").concat(this.id));
    };
    return Ali;
}());
var a = new Ali("s", 3);
a.getAli();
