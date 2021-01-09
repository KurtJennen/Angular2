import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model"
import { ActivatedRoute, Router } from "@angular/router";
// import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
// import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/filter";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/distinctUntilChanged";
// import "rxjs/add/operator/skipWhile";

@Component({
    selector: "paForm",
    moduleId: module.id,
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})
export class FormComponent {
    product: Product = new Product();
    //lastId: number;
    editing: boolean = false;

    //constructor(private model: Model, private state: SharedState) { }
    //constructor(private model: Model, @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) { 
    constructor(private model: Model, activeRoute: ActivatedRoute, private router: Router) { 
        //this.editing = activeRoute.snapshot.url[1].path == "edit";
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        let id = activeRoute.snapshot.params["id"];
        if (id != null) {
            let name = activeRoute.snapshot.params["name"];
            let category = activeRoute.snapshot.params["category"];
            let price = activeRoute.snapshot.params["price"];
            
            if (name != null && category != null && price != null) {
                this.product.id = id;
                this.product.name = name;
                this.product.category = category;
                this.product.price = Number.parseFloat(price);
            } else {
                 Object.assign(this.product, model.getProduct(id) || new Product());
            }
        }
      /*  stateEvents
            //.map(state => new SharedState(state.mode, state.id == 5 ? 1 : state.id))
            //.filter(state => state.id != 3)
            //.skipWhile(state => state.mode == MODES.EDIT)
            //.distinctUntilChanged((firstState, secondState) => firstState.mode == secondState.mode && firstState.id == secondState.id)
            .subscribe((update) => {
                this.product = new Product();
                if(update.id != undefined) {
                    Object.assign(this.product, this.model.getProduct(update.id));
                }
                this.editing = update.mode == MODES.EDIT;
            }) */
        /* stateEvents
            .map(state => state.mode == MODES.EDIT ? state.id : -1)
            .distinctUntilChanged()
            .filter(id => id != 3)
            .subscribe((id) => {
                this.editing = id != -1;
                this.product = new Product();
                if(id != -1) {
                    Object.assign(this.product, this.model.getProduct(id));
                }
            }) */
    }

    /* get editing(): boolean {
        return this.state.mode == MODES.EDIT;
    } */

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            //this.product = new Product();
            //form.reset();
            this.router.navigateByUrl("/");
        }
    }
    
    resetForm() {
        this.product = new Product();
    }

    /* ngDoCheck() {
        if(this.lastId != this.state.id) {
            this.product = new Product();
            if(this.state.mode == MODES.EDIT) {
                Object.assign(this.product, this.model.getProduct(this.state.id));
            }
            this.lastId = this.state.id;
        }
    } */
}