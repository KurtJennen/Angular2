import { Directive, Input, Output, EventEmitter, SimpleChange, ContentChild, ContentChildren, QueryList } from "@angular/core";
import { PaCellColor } from "./cellColor.directive";
import { LogService } from "./log.service";

@Directive({
    selector: "table",
    providers: [LogService]
})
export class PaCellColorSwitcher {
    @Input("paCellDarkColor")
    modelProperty: Boolean;

    /* @ContentChild(PaCellColor)
    contentChild: PaCellColor; 
    
    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        if (this.contentChild != null) {
            this.contentChild.setColor(changes["modelProperty"].currentValue);
        }
    }*/

    @ContentChildren(PaCellColor)
    contentChildren: QueryList<PaCellColor>;

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        this.updateContentChildren(changes["modelProperty"].currentValue);
    }

    ngAfterContentInit() {
        this.contentChildren.changes.subscribe(() => {
            setTimeout(() => this.updateContentChildren(this.modelProperty), 0);
        });
    }

    private updateContentChildren(dark: Boolean) {
        if (this.contentChildren != null && dark != undefined) {
            this.contentChildren.forEach((child, index) => {
                child.setColor(index % 2 ? dark : !dark);
            });
        }
    }
}