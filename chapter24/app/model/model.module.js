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
//import { StaticDataSource } from "./static.datasource";
var repository_model_1 = require("./repository.model");
var http_1 = require("@angular/http");
var rest_datasource_1 = require("./rest.datasource");
var ModelModule = (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule],
            //providers: [Model, StaticDataSource]
            providers: [repository_model_1.Model, rest_datasource_1.RestDataSource, { provide: rest_datasource_1.REST_URL, useValue: "http://" + location.hostname + ":3500/products" }]
        }), 
        __metadata('design:paramtypes', [])
    ], ModelModule);
    return ModelModule;
}());
exports.ModelModule = ModelModule;
