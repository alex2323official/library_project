const myLibrary = [];
const btn = document.querySelector("#button");
const booksContainerDisplay = document.querySelector("#books-container");

const displayBooksInContainer = function () {
  //  remove all elements from DOM before rendering them again
  booksContainerDisplay.innerHTML = "";

  myLibrary.forEach((book, index) => {
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

    // Create button to remove book and add it to book container
    let btnToRemoveBook = document.createElement("button");
    btnToRemoveBook.textContent = "Delete Book";
    // add data-atribute = to array index of an object
    btnToRemoveBook.setAttribute("data-index", index);
    newBookContainerDiv.appendChild(btnToRemoveBook);

    // Create btn to switch read status
    let btnToSwitchReadStatus = document.createElement("button");
    btnToSwitchReadStatus.textContent = "Test";
    // add data-atribute = to array index of an object
    btnToSwitchReadStatus.setAttribute("data-number", index);
    newBookContainerDiv.appendChild(btnToSwitchReadStatus);

    booksContainerDisplay.appendChild(newBookContainerDiv);
  });
};

function Book(author, title, numberOfPages) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
}

displayBooksInContainer();

btn.addEventListener("click", (element) => {
  // Prevent sending form with pushed btn
  element.preventDefault();

  // Take user input data from form (book)
  const formAuthor = document.querySelector("#author").value;
  const formTitle = document.querySelector("#title").value;
  const formPages = document.querySelector("#pages").value;

  // use constructor here to push data to item
  const createdNewBook = new Book(formAuthor, formTitle, formPages);

  myLibrary.push(createdNewBook);

  displayBooksInContainer();

  // console.log(myLibrary);
});

// Event Listener for Delete Book BTNS
booksContainerDisplay.addEventListener("click", (element) => {
  // Prevent sending form with pushed btn
  element.preventDefault();

  if (element.target.textContent == "Delete Book") {
    // take index of book to delete
    const bookIndexInArray = element.target.dataset.index;

    // delete book from aray
    myLibrary.splice(bookIndexInArray, 1);

    displayBooksInContainer();
  }
});
