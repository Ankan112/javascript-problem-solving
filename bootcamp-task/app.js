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

//! Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967,
  },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

function extractTitles(bookList) {
  return bookList.map((book) => book.title);
}

const bookTitles = extractTitles(books);
// console.log(bookTitles); // Output

//! Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

function addFive(x) {
  return x + 5;
}

const combinedFunction = (x) => addFive(double(square(x)));

const number = 2;
const result = combinedFunction(number);

// console.log(`Number: ${number}, Result: ${result}`); // Output

//! Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2023 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2018 },
  { make: "Chevrolet", model: "Corvette", year: 2022 },
];

function sortCarsByYear(carList) {
  return carList.sort((carA, carB) => carA.year - carB.year);
}

const sortedCars = sortCarsByYear(cars);
// console.log(sortedCars); //Output

//! Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 28 },
];

function findAndModifyPerson(peopleList, nameToFind, newAge) {
  const foundPerson = peopleList.find((person) => person.name === nameToFind);

  if (foundPerson) {
    foundPerson.age = newAge;
    // console.log(`Person ${nameToFind} found and age updated to ${newAge}`);
  } else {
    // console.log(`Person ${nameToFind} not found`);
  }

  return peopleList;
}

const updatedPeople = findAndModifyPerson(people2, "Bob", 31);
// console.log("Updated array:", updatedPeople); // Output

//! Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [12, 5, 8, 130, 44, 9, 30];

function sumEvenNumbers(numArray) {
  return numArray.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0); // Initial value of accumulator is 0
}

const sumOfEvens = sumEvenNumbers(numbers);
// console.log("Sum of even numbers:", sumOfEvens); //Output

//! Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// console.log("isLeapYear", isLeapYear(2040)); //Output

//! Task: Count Vowels:
// Write a function that counts the number of vowels in a given string.
// Example: Happy New Year

const string = "Happy New Year";
const result2 = string.match(/[aeiou]/gi).length;

// console.log("Total vowels are:", result2); //Output

//! Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers2 = [1, 2, 3, 1, 4, 5, 2, 6, 7, 3];

function getUniqueNumbers(numArray) {
  return Array.from(new Set(numArray));
}

const uniqueNumbers = getUniqueNumbers(numbers2);
// console.log("Unique numbers:", uniqueNumbers); //Output

//! Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const numbers3 = [5, 10, 15, 2, 7];

function findMaxValue(numbers) {
  return Math.max(...numbers);
}

const maxValue = findMaxValue(numbers3);
// console.log("The maximum value is:", maxValue); //Output

//! Task: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

function sortStudentsByAvgGrade(students) {
  return students.reduce((sorted, student) => {
    const avgGrade =
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length;
    const insertPos = sorted.findIndex((s) => s.avgGrade < avgGrade);
    return sorted.splice(insertPos === -1 ? sorted.length : insertPos, 0, {
      ...student,
      avgGrade,
    });
  }, []);
}

// Example usage:
const students = [
  { name: "Alice", grades: [80, 90, 75] },
  { name: "Bob", grades: [75, 85, 95] },
  { name: "Charlie", grades: [95, 80, 85] },
];

const sortedStudents = sortStudentsByAvgGrade(students);
// console.log(sortedStudents); // Output

//! Task: Functional Programming - Reduce
// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

function calculateTotalValue(items) {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
}

// Example usage:
const items = [
  { name: "Apple", quantity: 5, price: 30 },
  { name: "Banana", quantity: 3, price: 10 },
  { name: "Orange", quantity: 2, price: 25 },
];

const totalValue = calculateTotalValue(items);
// console.log("Total value:", totalValue); // Output

//! Task: Array Intersection
// Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.

function arrayIntersection(arr1, arr2) {
  return [...new Set(arr1.filter((value) => arr2.includes(value)))];
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const intersection = arrayIntersection(arr1, arr2);
// console.log(intersection); // Output: [3, 4, 5]
