"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Basic Types
let company = "Dalukwa";
//boolean
let isPublished = true;
//Any
let x = "Hello";
x = true;
//tuple
let person = [1, "You", true];
//tuple array
let employee;
employee = [
    [1, "You"],
    [2, "Jim"],
];
//Union
let id;
id = "Hi";
id = 2;
//Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
//
const user = {
    id: 1,
    name: "John",
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid;
// customerId = 1;
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 5));
function log(message) {
    console.log(message);
}
log("Me");
//
const userid = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Implementing interface with class
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const person1 = new Person(2, "John");
console.log(person1.register());
////Extending from another class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    recall() {
        return `${this.name} is our ${this.position}`;
    }
}
const emp = new Employee(2, "Ana", "HR Assistant");
console.log(emp.recall());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "Jason", "Tina"]);
numArray.push(5);
