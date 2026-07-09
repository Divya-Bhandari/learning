/**
 * Loop: repeating over and over, round and round
 * 1. for
 * 2. while
 * 3. do while - exit control
 *
 * Array methods
 * 1. forEach
 * 2. map
 * 3. filter
 * 4. find
 * 5. sort
 * 6. reduce
 */

console.log(1 * 1);
console.log(2 * 2);
console.log(3 * 3);

/** For loop
 *
 * for (start point; condition ; increment/decrement) {
 *  // code
 * }
 *
 */

console.log("================ For Loop =============");

for (let i = 1; i <= 10; i = i + 2) {
  console.log(i);
}

console.log("================ While Loop =============");

let i = 1;

while (i <= 10) {
  console.log(i);

  i++;
}

console.log("================ Do While Loop =============");

let j = 11;

do {
  console.log(j);

  j++;
} while (j <= 10);

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

for (let x = 0; x < students.length; x++) {
  console.log(students[x]);
}