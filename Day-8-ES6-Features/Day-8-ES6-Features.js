// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = "John Doe";
let age = 30;

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// • Task 2: Create a multi-line string using template literals and log it to the console.

let multiLineString = `This is a multi-line string.
It spans multiple lines
using template literals.`;

console.log(multiLineString);

// Activity 2: Destructuring
// • Task 3:Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arryToDestruct = [10, 20, 30, 40, 50];

let [firstNumber, secondNumber] = arryToDestruct;

console.log(`First Number: ${firstNumber}`);
console.log(`Second Number: ${secondNumber}`);

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let bookObject = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
};

let { title, author } = bookObject;

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];

console.log(newArray);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

let result = sum(1, 2, 3, 4, 5);
console.log(result);

// Activity 4:
// Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function multiply(firstNumber, secondNumber = 1) {
  return firstNumber * secondNumber;
}

// Calling the function with both parameters
let result1 = multiply(5, 3);
console.log(result1); // Output: 15

// Calling the function with only the first parameter
let result2 = multiply(5);
console.log(result2); // Output: 5

// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let objectName = "Enhanced Object";
let year = 2024;

let enhancedObject = {
  objectName,
  year,
  describe() {
    return `${this.name} created in ${this.year}`;
  },
};

console.log(enhancedObject);
console.log(enhancedObject.describe());

// • Task 9: Create an object with computed property names based on variables and log the object to the console.

let propName1 = "firstName";
let propName2 = "lastName";

let person = {
  [propName1]: "John",
  [propName2]: "Doe",
};

console.log(person);
