import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";
//import { StaticDataSource } from "./static.datasource";

@Injectable()
export class Model {
    //private products: Product[];
    private products: Product[] = new Array<Product>();

    private locator = (p: Product, id: number) => p.id == id;

    //constructor(private dataSource: StaticDataSource) {
    constructor(private dataSource: RestDataSource) {
        //this.products = new Array<Product>();
        //this.dataSource.getData().forEach(p => this.products.push(p));
        this.dataSource.getData().subscribe(data => this.products = data);
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(p => this.locator(p, id));
    }

    saveProduct(product: Product) {
        if (product.id == 0 || product.id == null) {
            //product.id = this.generateID();
            //this.products.push(product);
            this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
        } else {
            //let index = this.products.findIndex(p => this.locator(p, product.id));
            //this.products.splice(index, 1, product);
            this.dataSource.updateProduct(product).subscribe(p => {
                let index = this.products.findIndex(item => this.locator(item, p.id));
                this.products.splice(index, 1, p);
            });
        }
    }

    deleteProduct(id: number) {
        /* let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        } */
        this.dataSource.deleteProduct(id).subscribe(() => {
            let index = this.products.findIndex(p => this.locator(p, id));
            if (index > -1) {
                this.products.splice(index, 1);
            }
        });
    }
    
    private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}