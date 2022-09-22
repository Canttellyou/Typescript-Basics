import { array } from "yup";

//Basic Types
let company: string = "Dalukwa";
//boolean
let isPublished: boolean = true;
//Any
let x: any = "Hello";
x = true;
//tuple
let person: [number, string, boolean] = [1, "You", true];
//tuple array
let employee: [number, string][];
employee = [
  [1, "You"],
  [2, "Jim"],
];
//Union
let id: string | number;
id = "Hi";
id = 2;
//Enum
enum Direction1 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
//Objects
type User = {
  id: number;
  name: string;
};
//
const user: User = {
  id: 1,
  name: "John",
};
//Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
// customerId = 1;
let customerId = cid as number;

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(2, 5));
function log(message: string | number) {
  console.log(message);
}
log("Me");
///Interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
//
const userid: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//Classes with interface
interface PersonId {
  id: number;
  name: string;
  register(): string;
}
//Implementing interface with class
class Person implements PersonId {
  id: number;
  name: string;
  constructor(id: number, name: string) {
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
  position: string;
  constructor(id: number, name: string, position: string) {
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
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "John", "Jason", "Tina"]);
numArray.push(5);
