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
console.log(bookTitles); // Output
