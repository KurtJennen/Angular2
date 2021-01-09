"use strict";
var Name = (function () {
    //first: string;
    //second: string;
    function Name(first, second) {
        this.first = first;
        this.second = second;
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Name.prototype, "nameMessage", {
        get: function () {
            return "Hello " + this.first + " " + this.second;
        },
        enumerable: true,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;
var WeatherLocation = (function () {
    //weather: string;
    //city: string;
    function WeatherLocation(weather, city) {
        this.weather = weather;
        this.city = city;
        this.weather = weather;
        this.city = city;
    }
    Object.defineProperty(WeatherLocation.prototype, "weatherMessage", {
        get: function () {
            return "Hello " + this.weather + " " + this.city;
        },
        enumerable: true,
        configurable: true
    });
    return WeatherLocation;
}());
exports.WeatherLocation = WeatherLocation;
