console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");
var myFunc = function () {
    console.log("This is a statement");
};
myFunc();
myFunc1();
function myFunc1() {
    console.log("This is a statement");
}
//error
//myFunc3();
var myFunc3 = function () {
    console.log("This is a statement");
};
//no error
myFunc3();
var myFunc4 = function (name, weather) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
};
myFunc4("Adam", "sunny");
var myFunc5 = function (name, weather) {
    if (weather === void 0) { weather = "raining"; }
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
};
myFunc5("Adam");
var myFunc6 = function (name, weather) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
    for (var i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
};
myFunc6("Adam", "sunny", "one", "two", "three");
var myFunc7 = function (name) {
    return ("Hello " + name + ".");
};
console.log(myFunc7("Adam"));
var myFunc8 = function (nameFunction) {
    return ("Hello " + nameFunction() + ".");
};
console.log(myFunc8(function () {
    return "Adam";
}));
var myFunc9 = function (nameFunction) {
    return ("Hello " + nameFunction() + ".");
};
var printName = function (nameFunction, printFunction) {
    printFunction(myFunc9(nameFunction));
};
printName(function () { return "Adam"; }, console.log);
var myFunc10 = function (nameFunction) { return ("Hello " + nameFunction() + "."); };
var printName1 = function (nameFunction, printFunction) { return printFunction(myFunc10(nameFunction)); };
printName1(function () { return "Adam"; }, console.log);
var messageFunction = function (name, weather) {
    var message = "Hello, Adam";
    if (weather == "sunny") {
        var message_1 = "It is a nice day";
        console.log(message_1);
    }
    else {
        var message_2 = "It is " + weather + " today";
        console.log(message_2);
    }
    console.log(message);
};
messageFunction("Adam", "raining");
var messageFunction2 = function (name, weather) {
    var message = "Hello, Adam";
    if (weather == "sunny") {
        var message = "It is a nice day";
        console.log(message);
    }
    else {
        var message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
};
messageFunction2("Adam", "raining");
var myGlobalVar = "apples";
var myFunc11 = function (name) {
    var myLocalVar = "sunny";
    var innerFunction = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + ".");
    };
    return innerFunction();
};
console.log(myFunc11("Adam"));
var firstBool = true;
var secondBool = false;
var firstString = "This is a string";
var secondString = 'And so is this';
var messageFunction3 = function (weather) {
    var message = "It is " + weather + " today";
    console.log(message);
};
messageFunction3("raining");
var daysInWeek = 7;
var pi = 3.14;
var hexValue = 0xFFFF;
var name1 = "Adam";
if (name1 == "Adam") {
    console.log("Name is Adam");
}
else if (name1 == "Jacqui") {
    console.log("Name is Jacqui");
}
else {
    console.log("Name is neither Adam or Jacqui");
}
switch (name1) {
    case "Adam":
        console.log("Name is Adam");
        break;
    case "Jacqui":
        console.log("Name is Jacqui");
        break;
    default:
        console.log("Name is neither Adam or Jacqui");
        break;
}
var firstVal = 5;
var secondVal = "5";
if (firstVal == secondVal) {
    console.log("They are the same");
}
else {
    console.log("They are NOT the same");
}
var firstVal1 = 5;
var secondVal1 = "5";
if (firstVal1 === secondVal1) {
    console.log("They are the same");
}
else {
    console.log("They are NOT the same");
}
var myData1 = 5 + 5;
var myData2 = 5 + "5";
console.log("Result 1: " + myData1);
console.log("Result 2: " + myData2);
var myData3 = (5).toString() + String(5);
console.log("Result: " + myData2);
var myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;
var myArray1 = [100, "Adam", true];
var myArray3 = [100, "Adam", true];
console.log("Index 0: " + myArray3[0]);
var myArray4 = [100, "Adam", true];
myArray4[0] = "Tuesday";
console.log("Index 0: " + myArray4[0]);
var myArray5 = [100, "Adam", true];
for (var i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}
console.log("---");
myArray5.forEach(function (value, index) { return console.log("Index " + index + ": " + value); });
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
var totalValue = products
    .filter(function (item) { return item.stock > 0; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value: $" + totalValue.toFixed(2));
