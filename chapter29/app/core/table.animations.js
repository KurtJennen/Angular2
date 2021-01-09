"use strict";
var core_1 = require("@angular/core");
var animationUtils_1 = require("./animationUtils");
var commonStyles = {
    border: "black solid 4px",
    color: "white"
};
exports.HighlightTrigger = core_1.trigger("rowHighlight", [
    /* state("selected", style({
        backgroundColor: "lightgreen",
        fontSize: "20px"
    })),
    state("notselected", style({
        backgroundColor: "lightsalmon",
        fontSize: "12px",
        color: "black"
    })), */
    core_1.state("selected", core_1.style(animationUtils_1.getStylesFromClasses(["bg-success", "h2"]))),
    core_1.state("notselected", core_1.style(animationUtils_1.getStylesFromClasses("bg-info"))),
    /* state("*", style({
        border: "solid black 2px"
    })), */
    core_1.state("void", core_1.style({
        //opacity: 0
        transform: "translateX(-50%)"
    })),
    //transition("selected => notselected", animate("200ms")),
    //transition("notselected => selected", animate("400ms"))
    core_1.transition("* => notselected", core_1.animate("200ms")),
    /* transition("* => selected",
        [animate("400ms 200ms ease-in", style({
                backgroundColor: "lightBlue",
                fontSize: "25px"
            })),
        group([
            animate("250ms", style({
                backgroundColor: "lightcoral"
            })),
            animate("450ms", style({
                fontSize: "30px"
            }))
        ]),
        animate("200ms")
        ]
    ), */
    core_1.transition("* => selected", core_1.animate("400ms 200ms ease-in")),
    core_1.transition("void => *", core_1.animate("500ms"))
]);
