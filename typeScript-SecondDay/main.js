var Person = /** @class */ (function () {
    function Person(a, b) {
        this.firstName = a;
        this.lastName = b;
    }
    Person.prototype.getFullName = function (a) {
        return this.firstName + " " + this.lastName + " " + a.join(" ");
    };
    return Person;
}());
var a = new Person("s", "2");
console.log(a.getFullName(["1", "2"]));
console.log(a);
