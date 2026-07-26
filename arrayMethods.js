const list = [
  34, 674, 689, 54, 678, 790, 23, 83, 247, 769, 3254, 97, 345, 75, 20,
];

console.log("Original List:");
console.log(list);

// ================= forEach =================
console.log("========== forEach ==========");

list.forEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});

// ================= Map =================
console.log("========== Map ==========");

const mappedList = list.map((number) => ({
  original: number,
  double: number * 2,
}));

console.log(mappedList);

// ================= Filter =================
console.log("========== Filter ==========");

const filteredList = list.filter((number) => number > 100);

console.log(filteredList);

// ================= Students =================

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

// ================= Find =================
console.log("========== Find ==========");

const foundStudent = students.find(
  (student) => student.name === "Jessica"
);

console.log(foundStudent);

// ================= Includes =================

const values = [4, 6, 7, 9, 23, 56, 86, 58];

console.log("Includes 56:", values.includes(56));

// ================= Some =================

const someResult = values.some((number) => number % 2 === 0);

console.log("Has Even Number:", someResult);

// ================= Every =================

const everyResult = values.every((number) => number > 5);

console.log("Every Number > 5:", everyResult);

// ================= Sort =================

console.log("========== Sort ==========");

values.sort((a, b) => b - a);

console.log(values);

students.sort((a, b) => a.roll - b.roll);

console.log(students);

// ================= Reduce (Sum) =================

const totalSum = list.reduce((total, item) => total + item, 0);

console.log("Total Sum:", totalSum);

// ================= Reduce (Maximum Number) =================

const maxNumber = list.reduce((max, item) => {
  return item > max ? item : max;
}, list[0]);

console.log("Maximum Number:", maxNumber);

// ================= Group Students by Section =================

const groupedStudents = students.reduce((acc, student) => {
  if (!acc[student.section]) {
    acc[student.section] = [];
  }

  acc[student.section].push(student);

  return acc;
}, {});

console.log(groupedStudents);

// ================= City Count =================

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

const cityCount = cities.reduce((acc, city) => {
  acc[city] = (acc[city] || 0) + 1;
  return acc;
}, {});

console.log(cityCount);