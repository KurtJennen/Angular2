let myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";
console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");

let myData1 = {
    name: "Adam",
    weather: "sunny",
    printMessages: function() {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
};
console.log("Hello " + myData1.name + ".");
console.log("Today is " + myData1.weather + ".");
myData1.printMessages();

class MyClass {
    constructor(name, weather) {
        this.name = name;
        this._weather = weather;
    }

    set weather(value) {
        this._weather = value;
    }

    get weather() {
        return `Today is ${this._weather}`;
    }

    printMessages() {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this._weather + ".");
        console.log(this.weather);
    }
}
let myData2 = new MyClass("Adam", "sunny");
myData2.printMessages();

class MySubClass extends MyClass {
    constructor(name, weather, city) {
        super(name, weather);
        this.city = city;
    }

    printMessages() {
        super.printMessages();
        console.log(`You are in ${this.city}`);
    }
}
let myData3 = new MySubClass("Adam", "sunny", "London");
myData3.printMessages();

import {Name, WeatherLocation} from "./modules/NameAndWeather";
let name = new Name("Adam", "Freeman");
let loc = new WeatherLocation("raining", "London");
console.log(name.nameMessage);
console.log(loc.weatherMessage);

import {Name as OtherName} from "./modules/DuplicateName";
let other = new OtherName();
console.log(other.message);

import * as NameAndWeatherLocation from "./modules/NameAndWeather";
let name1 = new Name("Adam", "Freeman");
let loc1 = new WeatherLocation("raining", "London");
console.log(name.nameMessage);
console.log(loc.weatherMessage);

import {TempConvertor} from "./tempConvertor";
let cTemp = TempConvertor.convertFtoC(38);
console.log(`The temp is ${cTemp}C`);

let tuple: [string, string, string];
tuple = ["London", "raining", TempConvertor.convertFtoC("38")];
console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`);

let cities: {[index: string]: [string, string]} = {};
cities["London"] = ["raining",  TempConvertor.convertFtoC("38")];
cities["Paris"] = ["sunny",  TempConvertor.convertFtoC("52")];
cities["Berlin"] = ["snowing",  TempConvertor.convertFtoC("23")];
for (let key in cities) {
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}