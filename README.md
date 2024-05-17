# library


Styling:
    Main Color- #6B240C
    Second Color- #994D1C
    Third Color- #E48F45 --> Top bar background
    Last Color- #F5CCA0  --> Body background


Array to store all Books.
    const myLibrary = [];

Make constructor for Book object
    function Book() {}


Write function that loops through the array and displays each book on the page. 
    Each book will be its own card that you can click on to open more info.
        Have three color Green-Reading, Yellow-Que, Red-Finished

New Book button that brings up a form allowing users to input the details for the new book.
    Author, Title, Number of Pages, Read or not Read
        Modal popup window for this

Add button on each book display to remove the book from the library.
    Give each book "data-attribute" corresponds with index in array.



let removeEntry = removeBtn.parentElement.children[0].innerHTML;