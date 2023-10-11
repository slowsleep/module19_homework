// Task 4.

function ElectricTool (name, powerConsumption) {
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.isPlugged = false;
}

ElectricTool.prototype.turnOn = function () {
    this.isPlugged = true;
    console.log(`${this.name} is on`);
};

ElectricTool.prototype.turnOff = function () {
    this.isPlugged = false;
    console.log(`${this.name} is off`);
};


function Smartphone(name, powerConsumption, screenSize) {
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.screenSize = screenSize;
}

Smartphone.prototype = new ElectricTool();
Smartphone.prototype.call = function (name) {
    console.log(`Smartphone ${this.name} is call to ${name}`);
}
Smartphone.prototype.getScreenSize = function () {
    console.log(`Screen size of ${this.name} = ${this.screenSize} inch.`);
}


function DeskLamp(name, powerConsumption, color = "white") {
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.color = color;
}

DeskLamp.prototype = new ElectricTool();
DeskLamp.prototype.light = function () {
    console.log(`Desk lamp ${this.name} is light of ${this.color} light`);
}


function Computer(name, powerConsumption, os) {
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.os = os
}

Computer.prototype = new ElectricTool();
Computer.prototype.compile = function () {
    console.log(`Computer ${this.name} try to compile some code on ${this.os}`);
}


function sumPower(...array) {
    return array.reduce(function(acc, currEl) {
        return currEl.isPlugged ? acc + currEl.powerConsumption : acc
    }, 0);
}


let samsung = new Smartphone("Samsung", 6, 6.8);
let littleLamp = new DeskLamp("LittleSun", 8, "green");
let middleLamp = new DeskLamp("MiddleSun", 12, "red");
let lg = new Computer("LG", 200, "Windows");


function printSumPower() {
    console.log("Общая нагрузка электрической мощности:", sumPower(samsung, littleLamp, middleLamp, lg), "Вт\n");
}


samsung.turnOn();
littleLamp.turnOn();
middleLamp.turnOn();
lg.turnOn();
console.log("\n");

samsung.call("mom");
samsung.getScreenSize();
littleLamp.light();
middleLamp.light();
lg.compile();
console.log("\n");

printSumPower();

lg.turnOff();
printSumPower();

littleLamp.turnOff();
printSumPower();

middleLamp.turnOff();
printSumPower();

samsung.turnOff();
printSumPower();

