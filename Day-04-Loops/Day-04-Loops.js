// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop
// • Task 1:
// Write a program to print numbers from 1 to 1O using a for loop.
for (let index = 1; index <= 10; index++) {
  console.log(index);
}
// • Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let index = 1; index <= 10; index++) {
  console.log(`5 x ${index} = ${index * 5}`);
}

// Activity 2: While Loop
// • Task 3: Write a program to calculate the sum of numbers from 1 to 1O using a while loop.

let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log(`The sum of numbers from 1 to 10 is ${sum}.`);

// • Task 4:
// Write a program to print numbers from 10 to 1 using a while loop.

let n = 10;

while (n >= 1) {
  console.log(n);
  n--;
}

// Activity 3: Do...While Loop
// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let dw = 1;

do {
  console.log(dw);
  dw++;
} while (dw <= 5);

// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let number = 7;
let factorial = 1;
let x = 1;

do {
  factorial *= x;
  x++;
} while (x <= number);

console.log(`The factorial of ${number} is ${factorial}.`);

// Activity 4: Nested Loops
// • Task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****
// *****

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
