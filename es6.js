/**
 * Template literals
 * Spread operator
 * Destructing (Array/Object)
 * Rest operator
 * Arrow function
 * Array Methods
 */

const name = "Rohan";
const address = "Kathmandu";

const result = "Hello my name is " + name + " and I live in " + address + ".";

console.log(result);

const templateResult = `Hello my name is ${name}.
I live in ${address}.`;

console.log(templateResult);

// Spread operator

const user = {
  name: "Ram",
  age: 20,
  address: "Biratnagar",
};

const profile = {
  phone: 9876543210,
  gender: "M",
  isMarried: true,
};

const userProfile = { ...user, ...profile };

console.log(userProfile);

const list1 = [12343, 1234, 1234, 1243, 2134, 214, 1234, 214, 2];

const list2 = [546, 5467, 4567, 4567, 4567, 4567, 4567, 55678, 687];

const finalList = [...list1, ...list2];

console.log(finalList);

// Object destructuring

const student = {
  name: "Ram",
  grade: 5,
  roll: 34,
  section: "A",
};

// const grade = student.grade;
// const roll = student.roll;
// const studentName = student.name;
// const section = student.section;

// console.log(grade);
// console.log(roll);

const { grade, roll, name: studentName, section } = student;

console.log(grade);
console.log(roll);
console.log(section);
console.log(studentName);

// Array destructing

const students = ["Ramesh", "Mahesh", "Mohan", "Rajesh"];

const [student2, student1, student3, student4, student5] = students;

console.log(student1);

// Rest operator
const { phone, ...hello } = userProfile;

console.log(phone);
console.log(hello);

// Arrow function
// () => {};

// function sum(a, b) {
//   return a + b;
// }

const sum = (a, b) => a + b;

console.log(sum(18, 23));