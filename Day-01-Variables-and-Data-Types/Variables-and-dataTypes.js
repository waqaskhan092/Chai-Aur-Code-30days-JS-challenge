// Activity 1: Variable Declaration
//  • Task 1: Declare a variable using var , assign it a number, and log the value to the console.
var number = 7;
console.log(number);

//  • Task 2: Declare a variable using let , assign it a string, and log the value to the console.
let string = "I'm a String";
console.log(string);

// Activity 2: Constant Declaration
// • Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
const boleanValue = true;
console.log(boleanValue);

// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

//Object
const obj = {
  course: "3O Days Of Javascript Challenge",
  days: 30,
};

// Array
const arr = ["Chair Aur Code", "3O Days Of Javascript Challenge", 30, true];

console.table([
  "typeof number = " + typeof number,
  "typeof string = " + typeof string,
  "typeof Const / Bolean Assigned = " + typeof boleanValue,
  "typeof Object = " + typeof obj,
  "typeof Array = " + typeof arr,
]);

// Activity 4: Reassigning Variables
// • Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.

let letVariable = 5;
console.log("Initial Value = " + letVariable);
{
  letVariable = 25;
  console.log("Reassighned Value = " + letVariable);
}

// Activity 5: Understanding const
// • Task 6: Try reassigning a variable declared with const and observe the error.
const test = 5;
console.log(test);

// Reassigning the value to the const
//test = 6;
//console.log(test);

// Feature Request:
// 1 . Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let nullVar = null; // Null
let undefinedVar; // Undefined (implicitly declared)
let symbolVar = Symbol("symbol"); // Symbol
let bigintVar = BigInt(9007199254740991); // BigInt

// Logging the value and type of each variable to the console
console.log("stringVar: ", string, " - type: ", typeof string);
console.log("numberVar: ", number, " - type: ", typeof number);
console.log("booleanVar: ", boleanValue, " - type: ", typeof boleanValue);
console.log("objectVar: ", obj, " - type: ", typeof obj);
console.log("arrayVar: ", arr, " - type: ", typeof arr);
console.log("nullVar: ", nullVar, " - type: ", typeof nullVar);
console.log("undefinedVar: ", undefinedVar, " - type: ", typeof undefinedVar);
console.log("symbolVar: ", symbolVar, " - type: ", typeof symbolVar);
console.log("bigintVar: ", bigintVar, " - type: ", typeof bigintVar);
