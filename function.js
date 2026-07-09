/**
 * Function: Perform specific task
 *
 * function <name> (<optional params>) {
 *  // code
 * }
 */

function greet(name) {
  console.log("Hello " + name);
}

greet("Ram");
greet("Hari");

function sum(value1, value2 = 0) {
  console.log(value1 + value2);
}

sum(12, 15);
sum(20, 50);
sum(5, 6);

function square(value) {
  return value * value;
}

const squaredValue = square(50);

console.log(squaredValue);