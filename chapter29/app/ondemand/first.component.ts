import { Component, HostListener, EventEmitter, Output, Input } from "@angular/core";
import { Model } from "../model/repository.model";
import { Product } from "../model/product.model";
import { RestDataSource } from "../model/rest.datasource";

@Component({
    selector: "first",
    //template: `<div class="bg-primary p-a-1">First Component</div>`
    /* template: `<div class="bg-primary p-a-1">
                There are
                    <span class="strong"> {{getProducts().length}} </span>
                products
                </div>` */
    moduleId: module.id,
    templateUrl: "first.component.html"
})
export class FirstComponent {
    //constructor(private repository: Model) {}

    _category: string = "Soccer";
    _products: Product[] = [];
    highlighted: boolean = false;

    //@Output("pa-highlight")
    //change = new EventEmitter<boolean>();

    @Input("pa-model")
    model: Model;

    constructor(public datasource: RestDataSource) {}

    ngOnInit() {
        this.updateData();
    }

    getProducts(): Product[] {
        //return this.repository.getProducts().filter(p => p.category == this.category);
        //return this.model == null ? [] : this.model.getProducts().filter(p => p.category == this.category);
        return this._products;
    }

    /* @HostListener("mouseenter", ["$event.type"])
    @HostListener("mouseleave", ["$event.type"])
    setHighlight(type: string) {
        this.highlighted = type == "mouseenter";
        this.change.emit(this.highlighted);
    } */

    set category(newValue: string) {
        this._category;
        this.updateData();
    }

    updateData() {
        this.datasource.getData()
        .subscribe(data => this._products = data.filter(p => p.category == this._category));
    }
 }