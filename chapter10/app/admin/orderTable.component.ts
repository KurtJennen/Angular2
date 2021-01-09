import { Component } from "@angular/core";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";

@Component({
    moduleId: module.id,
    //template: `<div class="bg-primary p-a-1"><h3>Order Table Placeholder</h3></div>`
    templateUrl: "orderTable.component.html"
})
export class OrderTableComponent {

    includeShipped = false;

    constructor(private repository: OrderRepository) {}

    getOrders(): Order[] {
        return this.repository.getOrders().filter(o => this.includeShipped || !o.shipped);
    }

    markShipped(order: Order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    }
    
    delete(id: number) {
        this.repository.deleteOrder(id);
    }

 }