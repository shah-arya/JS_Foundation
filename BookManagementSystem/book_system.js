let books = [];

// Creates addBook function to add book details in the management system.
function addBook(){
    
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;

    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book ={
            name: bookName,
            author: authorName,
            book_description: bookDescription,
            page_num: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else{
        alert("Kindly fill in all the fields correctly.");
    }
} 

// Create a showBook function to show book details in the management system.
function showbooks(){
    const booksDiv = books.map((book, index)=> `<h1>book Number: ${index+1} </h1>
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name: </strong>${book.author}</p>
    <p><strong>Book Description: </strong>${book.book_description}</p>
    <p><strong>No. of Pages: </strong>${book.page_num} page(s) </p>
    <button onclick="editbook(${index})">Edit</button>`      
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

//Editbook function to populate form foelds with the selected book's data
function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.author;
    document.getElementById('bookDescription').value = book.book_description;
    document.getElementById('pagesNumber').value = book.page_num;
    books.splice(index, 1); // Remove old entry
    showbooks(); // Refresh list
}

// clearInputs function to clear the book details in the management system.
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

