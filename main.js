const myLibrary = [];

// Display Books in Container
const booksContainerDisplay = document.querySelector("#books-container");

// Loop trough array and display every book
const displayBooksInContainer = function () {
  //  remove all elements from DOM before rendering them again
  booksContainerDisplay.innerHTML = "";

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
};

// Add some testing data
const hobbit = new Book("Tolkien", "Hobbit", 300);
const opowiesciMasla = new Book("Maslo", "Opowiesci masla", 300);

myLibrary.push(hobbit);
myLibrary.push(opowiesciMasla);

const btn = document.querySelector("#button");

function Book(author, title, numberOfPages) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
}

displayBooksInContainer();

btn.addEventListener("click", (event) => {
  // Prevent sending form with pushed btn
  event.preventDefault();

  // Take user input data from form (book)
  const formAuthor = document.querySelector("#author").value;
  const formTitle = document.querySelector("#title").value;
  const formPages = document.querySelector("#pages").value;

  // use constructor here to push data to item
  const createdNewBook = new Book(formAuthor, formTitle, formPages);

  myLibrary.push(createdNewBook);

  // Remove all elements from DOM before uploading new

  displayBooksInContainer();
});
