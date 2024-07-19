// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
  title: "The Chai Aur Code",
  author: "Hites Choudhry",
  year: 2024,
};

console.log(book);

// • Task 2: Access and log the title and author properties of the book object.

console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

let bookGetDetail = {
  title: "The Chai Aur Code",
  author: "Hites Choudhry",
  year: 2024,
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },
};

console.log(bookGetDetail.getDetails());

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

let bookYearUpdate = {
  title: "The Chai Aur Code",
  author: "Hites Choudhry",
  year: 2020,
  getDetails: function () {
    return `${this.title} by ${this.author} Published in ${this.year}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

bookYearUpdate.updateYear(2024);
console.log(bookYearUpdate.getDetails());

// Activity 3:
// Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = {
  name: "The Chai Aur Code Library",
  books: [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      year: 2011,
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      year: 2015,
    },
  ],
};

console.log(library);

// • Task 6 : Access and log the name of the library and the titles of all the books in the library.

console.log(`Library Name: ${library.name}`);

library.books.forEach((book, index) => {
  console.log(`Book ${index + 1} Title: ${book.title}`);
});

// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

let libraryThisCall = {
  name: "The Chai Aur Code",
  books: [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
      getTitleAndYear: function () {
        return `${this.title} (${this.year})`;
      },
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      year: 2011,
      getTitleAndYear: function () {
        return `${this.title} (${this.year})`;
      },
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      year: 2015,
      getTitleAndYear: function () {
        return `${this.title} (${this.year})`;
      },
    },
  ],
};

libraryThisCall.books.forEach((book) => {
  console.log(book.getTitleAndYear());
});

// Activity 5: Object Iteration
// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.

let bookFor = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
};

for (let property in bookFor) {
  console.log(`${property}: ${book[property]}`);
}

// • Task 9 : Use Object. keys and Object. values methods to log all the keys and values of the book object.

console.log("Keys:", Object.keys(bookFor));
console.log("Values:", Object.values(bookFor));
