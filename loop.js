/**
 * Loops
 * A loop is used to run the same code again and again.
 *
 * Types of loops:
 * 1. for loop
 * 2. while loop
 * 3. do...while loop
 *
 * Some useful array methods:
 * - forEach()
 * - map()
 * - filter()
 * - find()
 * - sort()
 * - reduce()
 */

// Without using a loop
console.log(1 * 1);
console.log(2 * 2);
console.log(3 * 3);

console.log("===== For Loop =====");

/*
Syntax:

for (initialization; condition; increment/decrement) {
   // code
}
*/

// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("===== While Loop =====");

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

console.log("===== Do While Loop =====");

let j = 11;

// This loop runs at least one time
do {
  console.log(j);
  j++;
} while (j <= 10);

console.log("===== Array Example =====");

const students = [
  "Ram",
  "Hari",
  "Shyam",
  "Sita",
  "Rita",
  "Mohan",
  "Ramesh",
  "Bhim",
];

// Print all student names
for (let k = 0; k < students.length; k++) {
  console.log(students[k]);
}