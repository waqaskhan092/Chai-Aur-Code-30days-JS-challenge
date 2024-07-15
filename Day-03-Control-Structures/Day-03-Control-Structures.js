// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements

// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let myNumber = 0;

if (myNumber > 0) {
  console.log(`${myNumber} is a Positive number`);
} else if (myNumber < 0) {
  console.log(`${myNumber} is a Negative number`);
} else {
  console.log(`Given number is a Zero`);
}
// • Task 2: Write a program to check if a person is eligible to vote (age 18) and log the result to the console.

const personAge = 20;
if (personAge >= 18) {
  console.log(`Age is ${personAge} and eligible for vote`);
} else {
  console.log(`Age is ${personAge} and not eligible for vote`);
}

// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let firstNumber = 20;
let secondNumber = 10;
let thirdNumber = 30;
let largest = 0;

if (firstNumber > secondNumber) {
  if (firstNumber > thirdNumber) {
    largest = firstNumber;
  } else {
    largest = thirdNumber;
  }
} else {
  if (secondNumber > thirdNumber) {
    largest = secondNumber;
  } else {
    largest = thirdNumber;
  }
}
console.log(`${largest} is largest number`);

// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayNumber = 5;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day number";
}

console.log(`Day number ${dayNumber} is ${dayName}.`);

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D, 'F) based on a score and log the grade to the console.

let score = 55;
let grade;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score >= 0 && score < 60:
    grade = "F";
    break;
  default:
    grade = "Invalid score";
}
console.log(`The grade for score ${score} is ${grade}.`);

// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let number = 35;
const result =
  number % 2 === 0
    ? console.log(`${number} is even.`)
    : console.log(`${number} is odd.`);

// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

// feature requests are solved above
