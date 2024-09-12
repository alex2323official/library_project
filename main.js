const myLibrary = [];

const btn = document.querySelector("#button");

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
const opowiesciMasla = new Book("Maslo", "Opowiesci masla", 300);
const hobbit2 = new Book("Tolkien", "Hobbit", 300);
const hobbit3 = new Book("Tolkien", "Hobbit", 300);
const hobbit4 = new Book("Tolkien", "Hobbit", 300);
const hobbit5 = new Book("Tolkien", "Hobbit", 300);

myLibrary.push(hobbit);
myLibrary.push(hobbit2);
myLibrary.push(hobbit3);
myLibrary.push(hobbit4);
myLibrary.push(hobbit5);
myLibrary.push(opowiesciMasla);

// Display Books in Container
const booksContainerDisplay = document.querySelector("#books-container");

// Loop trough array and display every book
myLibrary.forEach((book) => {
  // Create new html element with book
  let newBookContainerDiv = document.createElement("div");

  let authorSpan = document.createElement("span");
  authorSpan.textContent = `Author: ${book.author}`;

  let titleSpan = document.createElement("span");
  titleSpan.textContent = `Title: ${book.title}`;

  let numberOfPagesSpan = document.createElement("span");
  numberOfPagesSpan.textContent = `Pages: ${book.numberOfPages}`;

  newBookContainerDiv.appendChild(authorSpan);
  newBookContainerDiv.appendChild(titleSpan);
  newBookContainerDiv.appendChild(numberOfPagesSpan);

  booksContainerDisplay.appendChild(newBookContainerDiv);
});
