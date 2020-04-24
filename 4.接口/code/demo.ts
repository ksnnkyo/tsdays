interface LabeledValue {
    label: string;
}

function printLable(labledObj: LabeledValue) {
    console.log(labledObj.label)
}

let myObj = { size: 10, label: "Size 10 object" };
printLable(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let squareOptions = { colour: "black" };
let mySquare2 = createSquare(squareOptions);

let mySquare = createSquare({ color: "black" });

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a;
a = ro as number[];

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
let mySearch2: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

mySearch2 = function (src: string, sub: string) {
    let result = src.search(sub);
    return result > -1;
}

let mySearch3: SearchFunc;
mySearch3 = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

interface Okay {
    [x: number]: Dog;
    [x: string]: Animal;
}

interface NumberDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myReadOnlyArray: ReadonlyStringArray = ["Alice", "Bob"];
//myReadOnlyArray[2] = "Malloy";

interface ClockInterface2 {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface2 {
    currentTime: Date = new Date();
    constructor(h: number, m: number) { }
    setTime(d: Date): void {
        this.currentTime = d;
    }
}

interface ClockInterface {
    tick(): void;
}

interface ClockConstruct {
    new(hour: number, minute: number): ClockInterface;
}

function createClock(
    ctor: ClockConstruct,
    hour: number,
    minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digtial = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

const TheClock: ClockConstruct = class TheClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number) { } as Counter;
    counter.interval = 10;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

class ImageBox implements SelectableControl {
    private state: any;
    select() { }
}

class LocationBox { }