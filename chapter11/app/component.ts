import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { ProductFromGroup } from "./form.model";

@Component({
    selector: "app",
    //templateUrl: "app/template.html"
    //templateUrl: "app/template1.html"
    //templateUrl: "app/template2.html"
    //templateUrl: "app/template3.html"
    //templateUrl: "app/template4.html"
    templateUrl: "app/template5.html"
})
export class ProductComponent {
    model: Model = new Model();
    form: ProductFromGroup = new ProductFromGroup();

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    selectedProduct: string;

    getSelected(product: Product): boolean {
        return product.name == this.selectedProduct;
    }

    newProduct: Product = new Product();

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct)
    }

    /* getValidationMessages(state: any, thingName?: string) {
        let thing: string = state.path || thingName;
        let messages: string[] = [];
        if (state.errors) {
            for (let errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`You must enter a ${thing}`);
                        break;
                    case "minlength":
                        messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
                        break;
                    case "pattern":
                        messages.push(`The ${thing} contains illegal characters`);
                        break;
                }
            }
        }
        return messages;
    } */

    formSubmitted: boolean = false;

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }

    /* getFormValidationMessages(form: NgForm): string[] {
        let messages: string[] = [];
        Object.keys(form.controls).forEach(k => {
            this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
        });

        return messages;
    } */

    /* constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    getClasses(): String {
        return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
    }

    getClasses1(key: number): string {
        let product = this.model.getProduct(key);
        return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getClassMap(key: number): Object {
        let product = this.model.getProduct(key);
        return {
            "text-xs-center bg-danger": product.name == "Kayak",
            "bg-info": product.price < 50
        }
    }
    
    fontSizeWithUnits: string= "30px";
    fontSizeWithoutUnits: string= "30";

    getStyles(key: number) {
        let product = this.model.getProduct(key);
        return {
            fontSize: "30px",
            "margin.px": 100,
            color: product.price > 50 ? "red" : "green"
        }
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }
    
    getProductCount(): number {
        console.log("getProductCount invoked");
        return this.getProducts().length;
    }

    targetName: string = "Kayak";

    getKey(index: number, product: Product) {
        return product.id;
    }

    counter: number = 1;

    get nextProduct(): Product {
        return this.model.getProducts().shift();
    }

    getProductPrice(index: number): number {
        return Math.floor(this.getProduct(index).price);
    } */
}