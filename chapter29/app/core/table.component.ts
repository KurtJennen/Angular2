import { Component, Inject, AnimationTransitionEvent } from "@angular/core";
import { Model } from "../model/repository.model";
//import { SharedState, MODES, SHARED_STATE } from "./sharedState.model";
import { Product } from "../model/product.model";
import { ActivatedRoute } from "@angular/router";
import { HighlightTrigger } from "./table.animations";
//import { Observer } from "rxjs/Observer";

@Component({
    selector: "paTable",
    moduleId: module.id,
    templateUrl: "table.component.html",
    animations: [HighlightTrigger]
})
export class TableComponent {
    category: string = null;
    //constructor(private model: Model, private state: SharedState) { }
    //constructor(private model: Model, @Inject(SHARED_STATE) private observer: Observer<SharedState>) { }
    constructor(private model: Model, activeRoute: ActivatedRoute) { 
        activeRoute.params.subscribe(params => {
            this.category = params["category"] || null;
        })
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts().filter(p => this.category == null || p.category == this.category);
    }

    get categories(): string[] {
        return this.model.getProducts()
        .map(p => p.category)
        .filter((category, index, array) => array.indexOf(category) == index);
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }

   /*  editProduct(key: number) {
        //this.state.id = key;
        //this.state.mode = MODES.EDIT;
        this.observer.next(new SharedState(MODES.EDIT, key));
    }

    createProduct() {
        //this.state.id = undefined;
        //this.state.mode = MODES.CREATE;
        this.observer.next(new SharedState(MODES.CREATE));
    } */

    highlightCategory: string = "";

    getRowState(category: string): string {
        return this.highlightCategory == "" ? "" :
            this.highlightCategory == category ? "selected" : "notselected";
    }

    writeAnimationEvent(event: AnimationTransitionEvent, name: string, start: boolean) {
        console.log("Animation " + name + " " + (start ? 'Start' : 'Done')
            + " from: " + event.fromState + " to: " + event.toState + " time: "
            + event.totalTime);
    }
}