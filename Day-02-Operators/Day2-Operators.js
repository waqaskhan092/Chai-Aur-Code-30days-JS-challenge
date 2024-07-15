// Day 2: Operators
// Tasks/Activities:
// Activity 1: Arithmetic Operations

// • Task 1: Write a program to add two numbers and log the result to the console.
// • Task 2: Write a program to subtract two numbers and log the result to the console.
// • Task 3: Write a program to multiply two numbers and log the result to the console.
// • Task 4: Write a program to divide two numbers and log the result to the console.
// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let firstNumber = 30;
let secondNumber = 20;

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);

// Activity 2: Assignment Operators
// • Task 6: Use the += operator to add a number to a variable and log the result to the console.

firstNumber += 1;
console.log("First Number After += 1 : " + firstNumber);

// • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

firstNumber -= 1;
console.log("First Number After -= 1 : " + firstNumber);

// Activity 3: Comparison Operators
// • Task 8: Write a program to compare two numbers using > and < and log the result to the console.

if (firstNumber > secondNumber) {
  console.log(`${firstNumber} First Number is Greater than ${secondNumber}`);
} else if (firstNumber < secondNumber) {
  console.log(`${firstNumber} is Less than ${secondNumber}`);
} else {
  console.log(`Both Numbers are equal`);
}

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
if (firstNumber >= secondNumber) {
  console.log(`${firstNumber} is greater than or equal to ${secondNumber}`);
}
if (firstNumber <= secondNumber) {
  console.log(`${firstNumber} is less than or equal to ${secondNumber}`);
}

// • Task 10: Write a program to compare two numbers using == and === and log the result to the console.

if (firstNumber == secondNumber) {
  console.log(`${firstNumber} == ${secondNumber} are loosely equal`);
} else {
  console.log(`${firstNumber} == ${secondNumber} are not loosely equal`);
}

if (firstNumber === secondNumber) {
  console.log(`${firstNumber} === ${secondNumber} are strictly equal`);
} else {
  console.log(`${firstNumber} === ${secondNumber} are not strictly equal`);
}

// Activity 4: Logical Operators
// • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
if (firstNumber > 0 && secondNumber > 0) {
  console.log("Both numbers are positive.");
} else {
  console.log("At least one number is not positive.");
}
// • Task 12: Write a program that uses the I I operator to combine two conditions and log the result to the console.

if (firstNumber > 0 || secondNumber > 0) {
  console.log("At least one number is positive.");
} else {
  console.log("Neither number is positive.");
}

// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

if (!firstNumber) {
  console.log("The condition is false.");
} else {
  console.log("The condition is true.");
}

// Activity 5: Ternary Operator
// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

const result =
  firstNumber >= 0 ? "The number is positive." : "The number is negative.";
console.log(result);

// Feature Request:
// 1 . Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

// Addition
const sum = firstNumber + secondNumber;
console.log(`Sum (${firstNumber} + ${secondNumber}):`, sum);

// Subtraction
const difference = firstNumber - secondNumber;
console.log(`Difference (${firstNumber} - ${secondNumber}):`, difference);

// Multiplication
const product = firstNumber * secondNumber;
console.log(`Product (${firstNumber} * ${secondNumber}):`, product);

// Division
if (secondNumber !== 0) {
  const quotient = firstNumber / secondNumber;
  console.log(`Quotient (${firstNumber} / ${secondNumber}):`, quotient);
} else {
  console.log(`Division by zero is undefined.`);
}

// Remainder (Modulus)
const remainder = firstNumber % secondNumber;
console.log(`Remainder (${firstNumber} % ${secondNumber}):`, remainder);

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
// Function to perform comparisons and logical operations

// Greater than operator (>)
console.log(`${firstNumber} > ${secondNumber}:`, firstNumber > secondNumber);

// Less than operator (<)
console.log(`${firstNumber} < ${secondNumber}:`, firstNumber < secondNumber);

// Greater than or equal to operator (>=)
console.log(`${firstNumber} >= ${secondNumber}:`, firstNumber >= secondNumber);

// Less than or equal to operator (<=)
console.log(`${firstNumber} <= ${secondNumber}:`, firstNumber <= secondNumber);

// Equal to operator (loose equality) (==)
console.log(`${firstNumber} == ${secondNumber}:`, firstNumber == secondNumber);

// Equal to operator (strict equality) (===)
console.log(
  `${firstNumber} === ${secondNumber}:`,
  firstNumber === secondNumber
);

// Logical AND operator (&&)
console.log(
  `${firstNumber} > 0 && ${secondNumber} > 0:`,
  firstNumber > 0 && secondNumber > 0
);

// Logical OR operator (||)
console.log(
  `${firstNumber} > 0 || ${secondNumber} > 0:`,
  firstNumber > 0 || secondNumber > 0
);

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

// Same as Question 14
