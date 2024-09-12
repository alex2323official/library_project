const myLibrary = [];

function Book(author, title, numberOfPages) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
}

function addBookToLibrary() {
  // do stuff here
}

const hobbit = new Book("Tolkien", "Hobbit", 300);

myLibrary.push(hobbit);

console.table(myLibrary);
