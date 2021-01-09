"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var repository_model_1 = require("../model/repository.model");
var rest_datasource_1 = require("../model/rest.datasource");
var FirstComponent = (function () {
    function FirstComponent(datasource) {
        this.datasource = datasource;
        //constructor(private repository: Model) {}
        this._category = "Soccer";
        this._products = [];
        this.highlighted = false;
    }
    FirstComponent.prototype.ngOnInit = function () {
        this.updateData();
    };
    FirstComponent.prototype.getProducts = function () {
        //return this.repository.getProducts().filter(p => p.category == this.category);
        //return this.model == null ? [] : this.model.getProducts().filter(p => p.category == this.category);
        return this._products;
    };
    Object.defineProperty(FirstComponent.prototype, "category", {
        /* @HostListener("mouseenter", ["$event.type"])
        @HostListener("mouseleave", ["$event.type"])
        setHighlight(type: string) {
            this.highlighted = type == "mouseenter";
            this.change.emit(this.highlighted);
        } */
        set: function (newValue) {
            this._category;
            this.updateData();
        },
        enumerable: true,
        configurable: true
    });
    FirstComponent.prototype.updateData = function () {
        var _this = this;
        this.datasource.getData()
            .subscribe(function (data) { return _this._products = data.filter(function (p) { return p.category == _this._category; }); });
    };
    __decorate([
        core_1.Input("pa-model"), 
        __metadata('design:type', repository_model_1.Model)
    ], FirstComponent.prototype, "model", void 0);
    FirstComponent = __decorate([
        core_1.Component({
            selector: "first",
            //template: `<div class="bg-primary p-a-1">First Component</div>`
            /* template: `<div class="bg-primary p-a-1">
                        There are
                            <span class="strong"> {{getProducts().length}} </span>
                        products
                        </div>` */
            moduleId: module.id,
            templateUrl: "first.component.html"
        }), 
        __metadata('design:paramtypes', [rest_datasource_1.RestDataSource])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
