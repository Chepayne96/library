const body = document.querySelector('.bodyContainer');
const openBtn = document.querySelector('.addBook');
const dialog = document.querySelector('.modalContainer');
const refreshBtn = document.querySelector('.refresh');
const submitBtn = document.querySelector('#submitBook');


// Array for all books in the library
const myLibrary = [];

// Constructor for the Books
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}
// Two sample books then pushed into the Array
const sample1 = new Book('J.R.R Tolken', 'Lord of the Rings', 1137, 'read');
const sample2 = new Book('Frank Herbert', 'Dune', 896, 'notRead');
myLibrary.push(sample1, sample2);

// Cycle through the array to display the library
refreshBtn.addEventListener('click', refreshDisplay);
function refreshDisplay() {
    myLibrary.forEach(book => { //Each book is one part of the array (sample1, sample2...)
        let bookAuthor = book.author;
        let bookTitle = book.title;
        let bookPages = book.pages;
        let bookRead = book.read;
        // console.log(bookAuthor, bookTitle, bookPages, bookRead);
        const bookCard = document.createElement('div');
        bookCard.classList.add('cardContainer');
        body.appendChild(bookCard);

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('title');
        cardTitle.textContent = bookTitle;
        bookCard.appendChild(cardTitle);

        const cardAuthor = document.createElement('p');
        cardAuthor.textContent = bookAuthor;
        bookCard.appendChild(cardAuthor);

        const cardPages = document.createElement('p');
        cardPages.textContent = bookPages;
        bookCard.appendChild(cardPages);

        const cardRead = document.createElement('p');
        cardRead.textContent = bookRead;
        bookCard.appendChild(cardRead);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('removeBook');
        removeBtn.textContent = 'Remove';
        bookCard.appendChild(removeBtn);

        const removeButton = document.querySelector('.removeBook');
        removeButton.addEventListener('click', remove);
    })
}
// Function for the button(#openModal) to open the form 
openBtn.addEventListener('click', () => {
    dialog.showModal();
});
// Function for the button(#submitBook) that creates Book and add to library
submitBtn.addEventListener('click', () => {
    let newTitle = document.querySelector('#titleVal').value;
    let newAuthor = document.querySelector('#authorVal').value;
    let newPages = document.querySelector('#pagesVal').value;
    let newRead = document.querySelector('#haveRead').value;
    let entry = new Book(newAuthor, newTitle, newPages, newRead);
    myLibrary.push(entry);
    refreshDisplay();
    document.querySelector('#titleVal').value = "";
    document.querySelector('#authorVal').value = "";
    document.querySelector('#pagesVal').value = "";
    document.querySelector('#haveRead').value = "";
    document.querySelector('.removeBook').value = myLibrary.indexOf('entry');
    dialog.close();
})
// Add button on each Book card to remove the book from the library
function remove() {
    let bookEntry = document.querySelector('.removeBook').parentElement.children[0].innerHTML;
    myLibrary.forEach(book => {
        if (book.title == bookEntry) {
            let bookIndex = myLibrary.indexOf(book);
            myLibrary.splice(bookIndex);
            refreshDisplay();
            console.log(bookIndex);
        }
    })
}
