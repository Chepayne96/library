const bodyMid = document.querySelector('.bodyMid');


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
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'Delete';
        bookBottom.appendChild(deleteBtn);
    })
}

addBookToLibrary('cheyenne', 'cheyenne', 1, 'read');

showBooks()