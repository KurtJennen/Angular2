"use strict";
var TempConvertor = (function () {
    function TempConvertor() {
    }
    //static convertFtoC(temp: number | string) : string {
    TempConvertor.convertFtoC = function (temp) {
        //let value: number = (<number>temp).toPrecision ? <number>temp : parseFloat(<string>temp);
        //let value: number = (temp as number).toPrecision ? temp as number: parseFloat(temp as string);
        var value;
        if (temp.toPrecision) {
            value = temp;
        }
        else if (temp.indexOf) {
            value = parseFloat(temp);
        }
        else {
            value = 0;
        }
        //return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
        return this.performCalculation(value).toFixed(1);
    };
    TempConvertor.performCalculation = function (value) {
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8);
    };
    return TempConvertor;
}());
exports.TempConvertor = TempConvertor;
