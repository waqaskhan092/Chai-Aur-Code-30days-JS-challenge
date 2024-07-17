// Day 5: Functions
// Tasks/Activities:

// Activity 1:
// Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.

function EvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is an even number`);
  } else {
    console.log(`${number} is an odd number`);
  }
}

EvenOrOdd(7);
EvenOrOdd(12);

// • Task 2: Write a function to calculate the square of a number and return the result.

function getSquare(number) {
  return number * number;
}

const square = getSquare(5);
console.log(square);

// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMaxNumber = function (a, b) {
  return a > b ? a : b;
};

const maxNumber = findMaxNumber(5, 10);
console.log(`The maximum number is ${maxNumber}`);

// • Task 4: Write a function expression to concatenate two strings and return the result.

const concatenateStrings = function (string1, string2) {
  return string1 + string2;
};

const concatenatedStrings = concatenateStrings("Hello ", "World!");
console.log(concatenatedStrings);

// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (num1, num2) => num1 + num2;

const result = sum(9, 6);
console.log(result);

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsCharacter = (str, char) => str.includes(char);

const containsResult = containsCharacter("hello", "o");
console.log(containsResult);

// Function Parameters and Default Values
// Activity 4:
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function multiply(firstNumber, secondNumber = 1) {
  return firstNumber * secondNumber;
}

const result1 = multiply(7, 5);
console.log(result1);

const result2 = multiply(7);
console.log(result2);

// • Task 8:
// Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old.`;
}

const message1 = greet("WAQAS", 25);
console.log(message1);

// Activity 5:
// Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function callNTimes(func, n) {
  for (let i = 0; i < n; i++) {
    func(); // Call the function passed as 'func'
  }
}

function sayHello() {
  console.log("Hello!");
}

callNTimes(sayHello, 3);

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function composeFunctions(func1, func2, value) {
  const resultFromFunc1 = func1(value);
  const finalResult = func2(resultFromFunc1);
  return finalResult;
}

function double(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const inputValue = 5;

const finalResult = composeFunctions(double, addTen, inputValue);
console.log(finalResult);
