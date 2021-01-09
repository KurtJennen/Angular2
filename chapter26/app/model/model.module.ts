import { NgModule } from "@angular/core";
//import { StaticDataSource } from "./static.datasource";
import { Model } from "./repository.model";
import { HttpModule, JsonpModule } from "@angular/http";
import { RestDataSource, REST_URL } from "./rest.datasource";

@NgModule({
    imports: [HttpModule, JsonpModule],
    //providers: [Model, StaticDataSource]
    providers: [Model, RestDataSource, { provide: REST_URL, useValue: `http://${location.hostname}:3500/products` }]
})
export class ModelModule { }