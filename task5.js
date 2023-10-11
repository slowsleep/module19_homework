// Task 5.

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
    constructor(name, powerConsumption, screenSize) {
        super(name, powerConsumption);
        this.screenSize = screenSize;
    }

    call(name) {
        console.log(`Smartphone ${this.name} is call to ${name}`);
    }

    getScreenSize() {
        console.log(`Screen size of ${this.name} = ${this.screenSize} inch.`);
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
    constructor(name, powerConsumption, os) {
        super(name, powerConsumption);
        this.os = os;
    }

    compile() {
        console.log(`Computer ${this.name} try to compile some code on ${this.os}`);
    }
}


function sumPower(...array) {
    return array.reduce(function(acc, currEl) {
        return currEl.isPlugged ? acc + currEl.powerConsumption : acc
    }, 0);
}


let iphone = new Smartphone("IPhone", 5, 5.4);
let littleLamp = new DeskLamp("GlowingGhost", 9,);
let middleLamp = new DeskLamp("WarmCircle", 13, "yellow");
let dell = new Computer("Dell", 150, "Linux");


function printSumPower() {
    console.log("Общая нагрузка электрической мощности:", sumPower(iphone, littleLamp, middleLamp, dell), "Вт\n");
}


iphone.turnOn();
littleLamp.turnOn();
middleLamp.turnOn();
dell.turnOn();
console.log("\n");

iphone.call("dad");
iphone.getScreenSize();
littleLamp.light();
middleLamp.light();
dell.compile();
console.log("\n");

printSumPower();

dell.turnOff();
printSumPower();

littleLamp.turnOff();
printSumPower();

middleLamp.turnOff();
printSumPower();

iphone.turnOff();
printSumPower();

