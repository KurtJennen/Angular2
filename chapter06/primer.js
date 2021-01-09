"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";
console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");
var myData1 = {
    name: "Adam",
    weather: "sunny",
    printMessages: function () {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
};
console.log("Hello " + myData1.name + ".");
console.log("Today is " + myData1.weather + ".");
myData1.printMessages();
var MyClass = (function () {
    function MyClass(name, weather) {
        this.name = name;
        this._weather = weather;
    }
    Object.defineProperty(MyClass.prototype, "weather", {
        get: function () {
            return "Today is " + this._weather;
        },
        set: function (value) {
            this._weather = value;
        },
        enumerable: true,
        configurable: true
    });
    MyClass.prototype.printMessages = function () {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this._weather + ".");
        console.log(this.weather);
    };
    return MyClass;
}());
var myData2 = new MyClass("Adam", "sunny");
myData2.printMessages();
var MySubClass = (function (_super) {
    __extends(MySubClass, _super);
    function MySubClass(name, weather, city) {
        _super.call(this, name, weather);
        this.city = city;
    }
    MySubClass.prototype.printMessages = function () {
        _super.prototype.printMessages.call(this);
        console.log("You are in " + this.city);
    };
    return MySubClass;
}(MyClass));
var myData3 = new MySubClass("Adam", "sunny", "London");
myData3.printMessages();
var NameAndWeather_1 = require("./modules/NameAndWeather");
var name = new NameAndWeather_1.Name("Adam", "Freeman");
var loc = new NameAndWeather_1.WeatherLocation("raining", "London");
console.log(name.nameMessage);
console.log(loc.weatherMessage);
var DuplicateName_1 = require("./modules/DuplicateName");
var other = new DuplicateName_1.Name();
console.log(other.message);
var name1 = new NameAndWeather_1.Name("Adam", "Freeman");
var loc1 = new NameAndWeather_1.WeatherLocation("raining", "London");
console.log(name.nameMessage);
console.log(loc.weatherMessage);
var tempConvertor_1 = require("./tempConvertor");
var cTemp = tempConvertor_1.TempConvertor.convertFtoC(38);
console.log("The temp is " + cTemp + "C");
var tuple;
tuple = ["London", "raining", tempConvertor_1.TempConvertor.convertFtoC("38")];
console.log("It is " + tuple[2] + " degrees C and " + tuple[1] + " in " + tuple[0]);
var cities = {};
cities["London"] = ["raining", tempConvertor_1.TempConvertor.convertFtoC("38")];
cities["Paris"] = ["sunny", tempConvertor_1.TempConvertor.convertFtoC("52")];
cities["Berlin"] = ["snowing", tempConvertor_1.TempConvertor.convertFtoC("23")];
for (var key in cities) {
    console.log(key + ": " + cities[key][0] + ", " + cities[key][1]);
}
