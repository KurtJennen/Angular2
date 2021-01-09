import { Injectable, Inject, OpaqueToken } from "@angular/core";
import { Http, Request, RequestMethod, Jsonp, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

export const REST_URL = new OpaqueToken("rest_url");

@Injectable()
export class RestDataSource {
    constructor(private http: Http, @Inject(REST_URL) private url: string) { }
    //constructor(private http: Http, private jsonp: Jsonp, @Inject(REST_URL) private url: string) { }

    getData(): Observable<Product[]> {
        return this.http.get(this.url).map(response => response.json());
        //return this.sendRequest(RequestMethod.Get, this.url);
        //return this.jsonp.get(this.url + "?callback=JSONP_CALLBACK").map(response => response.json())
    }

    saveProduct(product: Product): Observable<Product> {
        //return this.http.post(this.url, product).map(response => response.json());
        return this.sendRequest(RequestMethod.Post, this.url, product);
    }

    updateProduct(product: Product): Observable<Product> {
        //return this.http.put(`${this.url}/${product.id}`, product).map(response => response.json());
        return this.sendRequest(RequestMethod.Put, `${this.url}/${product.id}`, product);
    }
    
    deleteProduct(id: number): Observable<Product> {
        //return this.http.delete(`${this.url}/${id}`).map(response => response.json());
        return this.sendRequest(RequestMethod.Delete, `${this.url}/${id}`);
    }

    private sendRequest(verb: RequestMethod, url: string, body?: Product): Observable<Product> {
        let headers = new Headers();
        headers.set("Access-Key", "<secret>");
        headers.set("Application-Name", ["exampleApp", "proAngular"]);

        return this.http.request(new Request({method: verb, url: url, body: body, headers: headers}))
            .map(response => response.json()).catch((error: Response) => Observable.throw(`Network Error: ${error.statusText} (${error.status})`));
    }
}