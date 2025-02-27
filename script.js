const bodyMid = document.querySelector('.bodyMid');
const newBookBtn = document.querySelector('.newBookBtn');
const modal = document.querySelector('.modal');
const addBtn = document.querySelector('.close');
const deleteBTN = document.querySelectorAll('.deleteBTN');

// Elements from modal for the book
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

// Array for 'Book'
const myLibrary = [];

// Book object 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Book constructor, then add to the 'myLibrary'
function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function showBooks(){
    myLibrary.forEach(function(book) {
        // 'bookContainer' is each book. Then append to the 'bodyMid'.
        let bookContainer = document.createElement('div');
        bookContainer.classList.add('book');
        bodyMid.appendChild(bookContainer);

        // Add property, then append to bookContainer
        let title = document.createElement('h3')
        title.classList.add('title');
        title.textContent = book.title;
        bookContainer.appendChild(title);

        let author = document.createElement('h4');
        author.classList.add('author');
        author.textContent = book.author;
        bookContainer.appendChild(author);

        let pages = document.createElement('p');
        pages.classList.add('pages');
        pages.textContent = book.pages;
        bookContainer.appendChild(pages);

        let read = document.createElement('p');
        read.classList.add('read');
        read.textContent = book.read;
        bookContainer.appendChild(read);

        // This will be for the delete button and option to switch read
        let bookBottom = document.createElement('div');
        bookBottom.classList.add('bookBottom');
        bookContainer.appendChild(bookBottom);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBTN');
        deleteBtn.textContent = 'Delete';
        bookBottom.appendChild(deleteBtn);
    })
}

// Open modal by changing the display to flex for style reasons
newBookBtn.onclick = function() {
    modal.style.display = 'flex';
}

// Btn on bottom of modal to close modal and add the book to library.
addBtn.onclick = () => {
    // Gather the info from modal input's
    let titleInput = title.value;
    let authorInput = author.value;
    let pagesInput = pages.value;
    if (read.value != 'Read') {
        read.value = 'Not Read';
    }
    let readInput = read.value;

    // add book based upon the info in modal
    addBookToLibrary(titleInput, authorInput, pagesInput, readInput);

    // close modal and show new book 
    modal.style.display = 'none';
    showBooks();

}


deleteBTN.forEach((btn) => {
    btn.onclick = (event) => {
        let test = event.target;
        console.log(test);
    }
})


addBookToLibrary('cheyenne', 'payne', 29, 'read');
showBooks()

