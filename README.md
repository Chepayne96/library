# library

Make a library app. Show all the books in the library on there own "card". Have a way to delete the book. Have a way to add books to the library.

SHOW all the books in the library on there own cards
    Each book gets it's own card
        Author, Title, Pages, Read/Not read

ADD a way to add books to the library
    Button to add book to library
        Open modal to collect information
        Button to submit book (New Book)
        Auto update the displayed library

ADD a way to delete books from the library

ADD way to change book from Not read to Read
    Switch on card to swap between choices
        Check box change the color of READ (red= Not green= Read)

This will be a blueprint for what I want the 'Book' object to look like
            <div class="book">
                <h3 class="title">The Hobbit</h3>
                <h4 class="author">J.R.R Tolkein</h4>
                <p class="pages">Pages: 369</p>
                <p class="read">Read</p>
                <div class="bookBottom">
                    <button>Delete</button>
                    <select name="read" id="read">
                        <option value="read">Read</option>
                        <option value="not">Not Read</option>
                    </select>
                </div>
            </div>