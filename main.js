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

    // @@@@ TODO @@@@
    // Create btn to switch read status
    let btnToSwitchReadStatus = document.createElement("button");
    btnToSwitchReadStatus.textContent = `${book.status}`;
    // add data-atribute = to array index of an object
    btnToSwitchReadStatus.setAttribute("data-number", index);
    newBookContainerDiv.appendChild(btnToSwitchReadStatus);

    booksContainerDisplay.appendChild(newBookContainerDiv);
  });
};

function Book(author, title, numberOfPages, status) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.status = status;
}

displayBooksInContainer();

btn.addEventListener("click", (element) => {
  // Prevent sending form with pushed btn
  element.preventDefault();

  // Take user input data from form (book)
  const formAuthor = document.querySelector("#author").value;
  const formTitle = document.querySelector("#title").value;
  const formPages = document.querySelector("#pages").value;
  const formReadStatus = document.querySelector(
    'input[name="status"]:checked'
  ).value;

  // use constructor here to push data to item
  const createdNewBook = new Book(
    formAuthor,
    formTitle,
    formPages,
    formReadStatus
  );

  myLibrary.push(createdNewBook);

  displayBooksInContainer();
});

// Event Listener for Delete Book BTNS
booksContainerDisplay.addEventListener("click", (element) => {
  // Prevent sending form with pushed btn
  element.preventDefault();

  // Delete Book behaviour
  if (element.target.textContent == "Delete Book") {
    // take index of book to delete
    const bookIndexInArray = element.target.dataset.index;

    // delete book from aray
    myLibrary.splice(bookIndexInArray, 1);

    displayBooksInContainer();
  }

  if (element.target.textContent != "Delete Book") {
    // take index of book to delete
    const statusIndexInArray = element.target.dataset.number;

    console.log(statusIndexInArray);

    // switch status of read in book
    if (myLibrary[statusIndexInArray].status == "noread") {
      myLibrary[statusIndexInArray].status = "read";
      displayBooksInContainer();
    } else {
      myLibrary[statusIndexInArray].status = "noread";
      displayBooksInContainer();
    }
  }
});
