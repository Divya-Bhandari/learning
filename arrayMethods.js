const list = [
  34, 674, 689, 54, 678, 790, 23, 83, 247, 769, 3254, 97, 345, 75, 20,
];

console.log(list);

// Double each number using a loop
const doubleList = [];

for (let i = 0; i < list.length; i++) {
  doubleList.push(list[i] * 2);
}

console.log(doubleList);

/*
 * MAP
 * Creates a new array after modifying each element.
 */
console.log("=============== MAP ===============");

const mappedList = list.map((number) => number * 2);

console.log(mappedList);

/*
 * FILTER
 * Returns only the elements that match the condition.
 */
console.log("============= FILTER ==============");

const filteredList = list.filter((number) => number % 2 === 0);

console.log(filteredList);

/*
 * FIND
 * Returns the first matching element.
 */

const students = [
  { name: "John", class: "9th", section: "A", roll: 1 },
  { name: "Jane", class: "7th", section: "B", roll: 2 },
  { name: "Jack", class: "8th", section: "A", roll: 3 },
  { name: "Jill", class: "10th", section: "B", roll: 4 },
  { name: "Jim", class: "4th", section: "A", roll: 5 },
  { name: "Jenny", class: "10th", section: "B", roll: 6 },
  { name: "Joe", class: "4th", section: "A", roll: 7 },
  { name: "Jessica", class: "9th", section: "B", roll: 8 },
  { name: "Jackie", class: "3rd", section: "A", roll: 9 },
  { name: "Jasmine", class: "7th", section: "B", roll: 10 },
];

const foundStudent = students.find(
  (student) => student.section === "A"
);

console.log(foundStudent);

/*
 * Includes, Some, Every
 */

const values = [4, 6, 7, 9, 23, 56, 86, 58];

console.log(values.includes(24));

const hasNumberGreaterThan10 = values.some((number) => number > 10);
console.log(hasNumberGreaterThan10);

const allGreaterThan10 = values.every((number) => number > 10);
console.log(allGreaterThan10);

/*
 * SORT
 */

// Ascending order
values.sort((a, b) => a - b);
console.log(values);

// Sort students by name (Z-A)
students.sort((a, b) => b.name.localeCompare(a.name));
console.log(students);

/*
 * REDUCE
 */

// Sum using loop
let total = 0;

for (let i = 0; i < list.length; i++) {
  total += list[i];
}

console.log(total);

// Sum using reduce
const totalUsingReduce = list.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(totalUsingReduce);

// Group students by class
const myList = [
  { name: "Ram", class: 2 },
  { name: "Sam", class: 3 },
  { name: "Hari", class: 2 },
  { name: "Mohan", class: 3 },
  { name: "Sita", class: 4 },
];

const groupedList = myList.reduce((result, student) => {
  if (!result[student.class]) {
    result[student.class] = [];
  }

  result[student.class].push(student);
  return result;
}, {});

console.log(groupedList);

// Count how many times each city appears
const cities = [
  "Dharan",
  "Kathmandu",
  "Pokhara",
  "Dharan",
  "Dharan",
  "Pokhara",
  "Dharan",
  "Butwal",
  "Itahari",
  "Kathmandu",
];

const cityCount = cities.reduce((count, city) => {
  count[city] = (count[city] || 0) + 1;
  return count;
}, {});

console.log(cityCount);