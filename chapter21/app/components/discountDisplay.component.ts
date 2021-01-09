import { Component, Input } from "@angular/core";
import { DiscountService } from "../common/discount.service";

@Component({
    selector: "paDiscountDisplay",
    template: `<div class="bg-info p-a-1">
                    The discount is {{discounter.discount}}
                </div>`
})
export class PaDiscountDisplayComponent {
    /* @Input("discounter")
    discounter: DiscountService; */

    constructor(private discounter: DiscountService){}
}