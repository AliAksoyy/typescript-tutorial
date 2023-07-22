var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log("oluşturuldu");
    }
    Person.prototype.showInfos = function () {
        console.log("".concat(this.name, " ").concat(this.age, " ").concat(this.phone));
    };
    return Person;
}());
var person1 = new Person("s", 2, "3");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, salary) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.showInfos = function () {
        _super.prototype.showInfos.call(this);
        console.log(this.salary);
    };
    Employee.prototype.changeDepartment = function () {
        console.log("departmant değiştirliyoe");
    };
    return Employee;
}(Person));
var a = new Employee("11", 2, "3", 4);
a.changeDepartment();
a.showInfos();
console.log(a);
