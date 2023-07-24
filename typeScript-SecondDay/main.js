// **Generic **
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
var Store = /** @class */ (function () {
    function Store() {
        this.items = [];
    }
    Store.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Store.prototype.getItems = function () {
        return this.items;
    };
    return Store;
}());
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var Ali = /** @class */ (function (_super) {
    __extends(Ali, _super);
    function Ali() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ali;
}(Store));
var aliStore = new Ali();
aliStore.addItem(new Product("Laptop", 1000));
aliStore.addItem(new Product("Phone", 500));
var products = aliStore.getItems();
console.log(products); // Output: [Product { name: 'Laptop', price: 1000 },
