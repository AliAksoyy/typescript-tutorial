import { IProductService } from "./IproductService";
import { Product } from "./Products";
class ProductService implements IProductService {
    getById(id: number): Product {
        throw new Error("Method not implemented.");
    }
    getProducts(): Product[] {
        throw new Error("Method not implemented.");
    }
    saveProduct(product: Product): void {
        throw new Error("Method not implemented.");
    }
    deleteProduct(product: Product): void {
        throw new Error("Method not implemented.");
    }
}
