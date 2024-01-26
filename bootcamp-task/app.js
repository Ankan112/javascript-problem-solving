//! Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "John", age: 30, gender: "male" },
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 40, gender: "male" },
  { name: "Jane", age: 35, gender: "female" },
  { name: "David", age: 20, gender: "male" },
];
const males = people.filter((person) => person.gender === "male");
const names = males.map((person) => person.name);
// console.log(names); // Output
