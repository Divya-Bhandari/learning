// If-else statement
/**
 * if (condition) {
 * // code
 * }
 *
 */

const age = 10;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

const gpa = 0.3;

// If else ladder
if (gpa >= 3.5) {
  console.log("A+");
} else if (gpa < 3.5 && gpa >= 3) {
  console.log("A");
} else if (gpa < 3 && gpa >= 2) {
  console.log("B");
} else if (gpa < 2 && gpa >= 1) {
  console.log("C");
} else {
  console.log("D");
}

const marks = 90;
// Nested if else statement
if (marks > 40) {
  console.log("pass");

  if (marks > 80) {
    console.log("with distinction");
  }
} else {
  console.log("fail");
}

const gender = "gmail";

// Switch statement
switch (gender) {
  case "Male":
    console.log("You are male");

    break;

  case "Female":
    console.log("You are female");

    break;

  default:
    console.log("You are third gender.");

    break;
}

// Ternary operator
const yourAge = 20;
// condition?true:false;
yourAge >= 18
  ? console.log("You are an adult.")
  : console.log("You are not an adult.");

const result = marks > 40 ? "pass" : "fail";

console.log(result);