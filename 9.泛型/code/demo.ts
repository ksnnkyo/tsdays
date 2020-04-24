interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity4: GenericIdentityFn<number> = identity;

let myIdentity: <T>(arg: T) => T = identity;
let myIdentity2: <U>(arg: U) => U = identity;
let myIdentity3: { <T>(arg: T): T } = identity;

let output = identity<string>("myString");

let output2 = identity("myString");

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};

let stringNumber = new GenericNumber<string>();
stringNumber.zeroValue = "";
stringNumber.add = function (x, y) {
    return x + y;
};
console.log(stringNumber.add(stringNumber.zeroValue, "test"));

interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity2(2);

loggingIdentity2({ length: 10, value: 3 });

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "m");

function create<T>(c: { new(): T }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag; // typechecks
createInstance(Bee).keeper.hasMask; // typechecks

