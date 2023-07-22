"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Products_1 = require("./Products");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Products_1.Product(1, "Samsung S5", "Telefon", 1000), new Products_1.Product(2, "Samsung S6", "Telefon", 2000), new Products_1.Product(3, "Samsung S6", "Telefon", 3000), new Products_1.Product(4, "Samsung S7", "Telefon", 4000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
var p = new SimpleDataSource();
