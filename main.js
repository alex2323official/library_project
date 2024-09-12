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

myLibrary.push(hobbit);
myLibrary.push(opowiesciMasla);

console.table(myLibrary);

// Display Books in Container
const booksContainerDisplay = document.querySelector("#books-container");

// Create new html element with book
let newBookContainerDiv = document.createElement("div");

let authorSpan = document.createElement("span");
authorSpan.textContent = `${myLibrary[0].author}`;

let titleSpan = document.createElement("span");
titleSpan.textContent = `${myLibrary[0].title}`;

let numberOfPagesSpan = document.createElement("span");
numberOfPagesSpan.textContent = `${myLibrary[0].numberOfPages}`;

newBookContainerDiv.appendChild(authorSpan);
newBookContainerDiv.appendChild(titleSpan);
newBookContainerDiv.appendChild(numberOfPagesSpan);

booksContainerDisplay.appendChild(newBookContainerDiv);
