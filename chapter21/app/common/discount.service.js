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
var log_service_1 = require("./log.service");
var DiscountService = (function () {
    //private logger: LogService;
    //constructor(@Inject(LOG_SERVICE) private logger: LogService){};
    /*  constructor(@Inject(LOG_SERVICE) private loggers: LogService[]){
         this.logger = loggers.find(l => l.minimumLevel == LogLevel.DEBUG);
     }; */
    function DiscountService(logger) {
        this.logger = logger;
        this.discountValue = 10;
    }
    ;
    Object.defineProperty(DiscountService.prototype, "discount", {
        get: function () {
            return this.discountValue;
        },
        set: function (newValue) {
            this.discountValue = newValue || 0;
        },
        enumerable: true,
        configurable: true
    });
    DiscountService.prototype.applyDiscount = function (price) {
        this.logger.logInfoMessage("Discount " + this.discount + " applied to price: " + price);
        return Math.max(price - this.discountValue, 5);
    };
    DiscountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [log_service_1.LogService])
    ], DiscountService);
    return DiscountService;
}());
exports.DiscountService = DiscountService;
