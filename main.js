// print in console
console.log("Hello world");
console.error("Error from server");
console.warn("Warning: Code deprecated.");
console.info("Hi");

// Variable: memory element | const, let, var
// Syntax: let/const/var <variableName> = <value>

// Never use var
var name = "Ram";
var name = "Hari";

console.log(name);

let username = "sam";
username = "rohan";
username = "sita";

console.log(username);

const email = "sam@gmail.com";

console.log(email);

// Data types
/**
 * 1. String: "Ram", "Hari"
 * 2. Number: 200, 30, -15, 2.3
 * 3. Boolean: true, false
 * 4. Object: {key:value}
 * 5. Array: [1,23,456,7,687,12]
 */

const studentName = "Jack Sparrow"; // String
const studentEmail = "jack@gmail.com"; // String
const roll = 10; // Number
const gpa = 3.5; // Number
const isPass = true; // Boolean
const marks = "70"; // String

console.log({ studentName, studentEmail, roll, gpa, isPass, marks });

// Object
const profile = {
  phoneNumbers: ["987654310", "9812230151"],
  gender: "M",
  section: 3,
  address: {
    city: "Itahari",
    province: "Koshi",
  },
  class: 8,
  isMorningShift: true,
};

console.log(profile);
console.log(profile.class);
console.log(profile.address.city);
console.log(profile.phoneNumbers[0]);

// Array: List | index = 0 (First position)
const students = [
  "hari",
  "sita",
  "rohan",
  "ram",
  "sam",
  true,
  false,
  2031,
  -1561,
  2.32,
  {
    user: "admin",
  },
  [12, 12, 21, 12, 21, 32, "asdf", { room: "123" }],
];

console.log(students);
console.log(students[0]);
console.log(students[10].user);
console.log(students[11][2]);
console.log(students[-1]); // undefined

// Operators
/**
 * 1. Arithmetic operators: +, -, *, /, %
 * 2. Relational operators: ==, ===, !=, >, <, >=, <=
 * 3. Logical operators: && (AND), || (OR), !(NOT)
 * 4. Ternary operator: condition ? true: false;
 */

console.log(60 + 30);
console.log(40 - 52);
console.log(2 * 24);
console.log(456 / 43);
console.log(20 % 7); // Remainder

console.log("6" + 7); // 67
console.log("9" - 5);

// Relational operators
console.log(10 == 10); // true
console.log(10 == 5); // false
console.log(10 != 5); // true
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 > 10); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true
console.log(10 == "10"); // true
console.log(10 === "10"); // false

// Logical operator
/**
 * AND: If any one input is false, then result is false.
 * OR: If any one input is true, then result is true.
 * NOT: If input is true, result is false, and vice-versa.
 */

// AND
console.log(true && false); // false
console.log(true && true); // true

// OR
console.log(true || false); // true
console.log(true || true); // true
console.log(false || false); // false

// NOT
console.log(!true); //false