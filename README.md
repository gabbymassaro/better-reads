# Better Reads App

## Description
The Better Reads app is a simple web application that allows users to search for books by author name. It utilizes the [Open Library API](https://openlibrary.org/developers/api) to fetch book data based on user queries. Better Reads will display book covers along with book details such as title, average rating, and genre. Users can also add and delete books from their own library.  Once books are in the library, a user can click on the book cover and be taken to Amazon.com to purchase that book.

## Features
- Search for books by author name.
- Display all books related to the author name search on screen.
- Display book covers along with title, average rating, and genre when selected.
- Add books to a personal library and store to a db.json file.
- Delete books from the library.
- Toggle library books from seen to hidden.
- Clicking on a book cover in the library opens the corresponding Amazon page for purchase.

## Set Up
- Run `$npm install -g json-server`
- Run `json-server --watch db.json` to start the server.

## Instructions
To use the Better Reads app, follow these steps:

1. Open the `index.html` file in your web browser.
2. Enter the name of the author you want to search for in the provided input field.
3. Press the "Search" button to retrieve book results.
4. Click on a book cover to view more details about the book.
5. In the book details view, you can click the "add to library" button to add the book to your personal library.
6. To hide your library, click on the "My Library" button. Click again to view the library.
7. In the library view, click the "x" button to delete a book from your library.
8. Clicking on a book cover in your library will open the Amazon page for purchasing the book.

## Dependencies
This project relies on the following dependencies:
- [Open Library API - Search](https://openlibrary.org/dev/docs/api/search) for retrieving book data.
- [Open Library API - Covers](https://openlibrary.org/dev/docs/api/covers) for retrieving book cover images.
- `index.html`, `style.css`, and `script.js` for front-end functionality.

## Credits
- This app was created by Gabriella Massaro.
