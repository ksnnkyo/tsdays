class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

class Animal {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);


/*
class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
*/


class Animal2 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends Animal2 {
    constructor() {
        super("Rhino");
    }
}

class Employee2 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animal = new Animal2("Goat");
let rhino = new Rhino();
let employee = new Employee2("Bob");

animal = rhino;
animal = employee;

class Person {
    protected name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John");

class Octopus {
    readonly numberOfLegs: number = 8;

    constructor(readonly name: string) {
    }
}

let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit";

class Employee3 {
    fullName: string;
}

let employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    console.log(employee3.fullName);
}

const fullNameMaxLength = 10;

class Employee4 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }
        this._fullName = newName;
    }
}

let employee4 = new Employee4();
employee4.fullName = "Bob Smith";
if (employee4.fullName) {
    console.log(employee4.fullName);
}

class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

abstract class dongwu {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

abstract class Department {
    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name)
    }

    // 在派生类中必须实现
    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        // 派生类的构造函数必须嗲用super
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

// 尽管不能创建抽象类的实例，但是可以创建引用
let department: Department;
// Error: 无法创建抽象类的实例。
department = new Department();
// 创建一个非抽象类的实例，分配给department，因为继承自department
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// Error: 类型“Department”上不存在属性“generateReports”。
department.generateReports();

class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        } else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greetMaker: typeof Greeter = Greeter;
greetMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greetMaker();
console.log(greeter2.greet());

let Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();

let greeter;
greeter = new Greeter("world");
console.log(greeter.greet());

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
