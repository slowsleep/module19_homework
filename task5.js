// Задание 5.

class ElectricTool {
    constructor(name, powerConsumption) {
        this.name = name;
        this.powerConsumption = powerConsumption;
        this.isPlugged = false;
    }

    turnOn() {
        this.isPlugged = true;
        console.log(`${this.name} is on`);
    }

    turnOff() {
        this.isPlugged = false;
        console.log(`${this.name} is off`);
    }
}


class Smartphone extends ElectricTool {
    constructor(name, powerConsumption) {
        super(name, powerConsumption);
    }

    call(name) {
        console.log(`Smartphone ${this.name} is call to ${name}`);
    }
}

class DeskLamp extends ElectricTool {
    constructor(name, powerConsumption, color = "white") {
        super(name, powerConsumption);
        this.color = color;
    }

    light() {
        console.log(`Desk lamp ${this.name} is light of ${this.color} light`);
    }
}


class Computer extends ElectricTool {
    constructor(name, powerConsumption) {
        super(name, powerConsumption);
    }

    compile() {
        console.log(`Computer ${this.name} is start to compile some code`);
    }
}


function sumPower(...array) {
    return array.reduce(function(acc, currEl) {
        return currEl.isPlugged ? acc + currEl.powerConsumption : acc
    }, 0);
}


function printSumPower() {
    console.log("Общая нагрузка электрической мощности:", sumPower(samsung, littleLamp, middleLamp, lg), "Вт\n");
}


let samsung = new Smartphone("IPhone", 5);
let littleLamp = new DeskLamp("GlowingGhost", 9,);
let middleLamp = new DeskLamp("WarmCircle", 13, "yellow");
let lg = new Computer("Dell", 150);

samsung.turnOn();
littleLamp.turnOn();
middleLamp.turnOn();
lg.turnOn();
console.log("\n");

samsung.call("dad");
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

