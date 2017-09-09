//Generics

//a
function printType<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
}

let test1 = printType<string>("Hello");

//b
function printTypes<T, Y, U>(argOne: T, argTwo: Y, argThree: U) {
    let arrArg = [typeof argOne, typeof argTwo, typeof argThree];
    return arrArg;
}

let newTest = printTypes<string, number, Date>("Testing", 23, new Date(23, 12, 1999));
console.log(newTest);

//c
function reverseArr<T>(arg: T[]): T[] {

    let arrayOfT: T[] = [];    // Create empty array of type T.
    arrayOfT = arg.reverse();
    return arrayOfT;

}

console.log(reverseArr<string>(["a", "b", "c"]));
console.log(reverseArr<number>([1, 2, 3]));
console.log(reverseArr<boolean>([true, true, false]));
//console.log(reverseArr<number>(["a", "b", "c"]));

//d
class DataHolder<T>{
    arg: any;
    constructor(arg: any) {
        this.arg = arg;
    }

    getValue(): T {
        return this.arg;
    }

    setValue(value: any): T {
        this.arg = value;
        return this.arg;
    }

}

let d = new DataHolder<string>("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());

let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());

//e
interface Owner {
    owner: String;
}

function printOwner<T extends Owner>(arg: T){
    console.log(arg.owner);
}

let theOwnerer = {
    owner: "Jeremy",
    computers: 1337
}

printOwner(theOwnerer);
