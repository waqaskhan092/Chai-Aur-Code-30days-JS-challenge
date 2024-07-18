// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let fiveNumbersArray = [1, 2, 3, 4, 5];
console.log(fiveNumbersArray);

// • Task 2.Access the first and last elements of the array and log them to the console.

let numbers = [1, 2, 3, 4, 5];

// First element Log
let firstElement = numbers[0];
console.log(`First element: ${firstElement}`);

// Last element Log
let lastElement = numbers[numbers.length - 1];
console.log(`First element: ${lastElement}`);

// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.

let arrayToPush = [1, 2, 3, 4, 5];

arrayToPush.push(6);
console.log(arrayToPush);

// • Task 4:
// Use the pop method to remove the last element from the array and log the updated array.

let arrayToPop = [1, 2, 3, 4, 5];

arrayToPop.pop();
console.log(arrayToPop);

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
let arrayToShift = [1, 2, 3, 4, 5];

arrayToShift.shift();
console.log(arrayToShift);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

let arrayToUnshift = [1, 2, 3, 4, 5];

arrayToUnshift.unshift(0);
console.log(arrayToUnshift);

// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let arrayToDouble = [1, 2, 3, 4, 5];

let doubledNumbers = arrayToDouble.map((num) => num * 2);
console.log(doubledNumbers);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let arrayToFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = arrayToFilter.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let arrayToReduce = [1, 2, 3, 4, 5];

let sum = arrayToReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log("Sum of all numbers:", sum);

// Activity 4: Array Iteration
// • Task 1O: Use a for loop to iterate over the array and log each element to the console.

let arrayForForLoop = [1, 2, 3, 4, 5];

for (let i = 0; i < arrayForForLoop.length; i++) {
  console.log(arrayForForLoop[i]);
}

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
// Activity 5: Multi-dimensional Arrays

let arrayForForeach = [1, 2, 3, 4, 5];

arrayForForeach.forEach((element) => {
  console.log(element);
});

// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);

// • Task 13: Access and log a specific element from the two-dimensional array.

let matrixToAccess = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// indexing is zero-based

let matrixX = 2;
let matrixY = 2;

console.log(
  `Element at matrix[${matrixX}][${matrixY}]: ${matrixToAccess[matrixX][matrixY]}`
);
