const list = [
  34, 674, 689, 54, 678, 790, 23, 83, 247, 769, 3254, 97, 345, 75, 20,
];

console.log(list);
const doubleList = [];

for (let i = 0; i < list.length; i++) {
  const item = list[i] * 2;

  doubleList.push(item);
}

console.log(doubleList);

/**
 * Map: array.map() => array
 * [a,b,c]=>map=>[x,y,z]
 */

console.log("=================== Map =======================");

const mappedList = list.map((number, index) => number * 2);

console.log(mappedList);

/**
 * Filter: [a,b,a,a,b,b,a] => filter(a) => [a,a,a,a]
 */
console.log("=================== Filter =======================");

const filteredList = list.filter((number, index) => number % 2 == 0);

console.log(filteredList);

/**
 * Find: [a,v,b,d,f,g,h] => find(a) => a
 */

// list of 10 students with name, class, section and roll
const students = [
  { name: "John", class: "9th", section: "A", roll: 1 },
  { name: "Jane", class: "7th", section: "B", roll: 2 },
  { name: "Jack", class: "8th", section: "A", roll: 3 },
  { name: "Jill", class: "10th", section: "B", roll: 4 },
  { name: "Jim", class: "4th", section: "A", roll: 5 },
  { name: "Jenny", class: "10th", section: "B", roll: 6 },
  { name: "Joe", class: "4th", section: "A", roll: 7 },
  { name: "Jessica", class: "9th", section: "B", roll: 8 },
  { name: "Jackie", class: "3th", section: "A", roll: 9 },
  { name: "Jasmine", class: "7th", section: "B", roll: 10 },
];

const foundStudent = students.find((student, index) => student.section == "A");

console.log(foundStudent);

/**
 * Includes : array.includes(a) => boolean
 * Some : array.some(()=>condition) => boolean
 * Every : array.every(()=>condition) => boolean
 */

const values = [4, 6, 7, 9, 23, 56, 86, 58];

console.log(values.includes(24));

const someResult = values.some((number, index) => number > 10);

console.log(someResult); //true

const everyResult = values.every((number, index) => number > 10);

console.log(everyResult); // false

// Sort

values.sort((a, b) => a - b); // asc

console.log(values);

students.sort((a, b) => b.name.localeCompare(a.name));

console.log(students);

// Reduce
let totalSum = 0;

for (let i = 0; i < list.length; i++) {
  const item = list[i];

  totalSum = totalSum + item;
}

console.log(totalSum);

const reducedTotalSum = list.reduce((total, item) => {
  total = total + item;

  return total;
}, 0);

console.log(reducedTotalSum);

const myList = [
  {
    name: "ram",
    class: 2,
  },
  {
    name: "sam",
    class: 3,
  },
  {
    name: "hari",
    class: 2,
  },
  {
    name: "mohan",
    class: 3,
  },
  {
    name: "sita",
    class: 4,
  },
];

const groupedList = myList.reduce((acc, item) => {
  acc[item.class] = acc[item.class] || [];
  acc[item.class].push(item);

  return acc;
}, {});

console.log(groupedList);

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

const citiesCount = cities.reduce((acc, city) => {
  acc[city] = (acc[city] ?? 0) + 1;

  return acc;
}, {});

console.log(citiesCount);
// {
//   "Dharan":4,
//   "Kathmandu":1
//   "Pokhara":2,
//   "Butwal":1
// }