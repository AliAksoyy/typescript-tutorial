import { ProductService } from "./ProductService";
import { Product } from "./Products";

let _productService = new ProductService();

let result;

result = _productService.getProducts();
result = _productService.getById(2);

let p = new Product();

p.id = 3;
p.name = "Iphone 6";
p.price = 400;
p.category = "telefon";

_productService.saveProduct(p);
_productService.deleteProduct(result);

console.log(result);
