## MVP 
### Feature 1: Search Books
**User Story**: As a user, I want to search for books by title or author. <br>
**Details**: Implement a search bar to fetch book data from https://openlibrary.org/dev/docs/api/search and display them.
### Feature 2: Display Search Results as Book Covers (Limit 20)
**User Story**: As a user, I just want to see the first 20 book covers after a search. <br>
**Details**: Limit the results displayed to 20, use the olid to fetch book covers.
### Feature 3: Show Books Details onClick
**User Story**: As a user, when I click on a book cover, I want to see the book details displayed on the page. Example: Author, Title, Publication Date, Page Count, Avg. Rating. <br>
**Details**: Create an on-click event forEach book cover displayed. On-click should display book details above the search results (between search bar and results). Use innerHTML = "" to wipe the previous book data (if any) away so only one book's details are displayed at a time.
### Feature 4: Show Published Year on Mouseover
**User Story**: As a user, if I mouseover over a book cover, I want to see the published date. <br>
**Details**: Create a mouseover event for the books displayed in the details section after onClick. Mouseover should show the publishing year, mouseout should hide it. 

## STRETCH STORIES
5. **User Story**: As a user, I want to store books that I'm interested in reading to a database. <br>
   **Details**: In the display book section, add a button that will store the selected book's information to a db.json server.
7. **User Story**: As a user, I want to add and display books to "My Library". <br>
   **Details**: Books stored to the db should be rendered on the right hand side of the page with a new "My Library" section.
8. **User Story**: As a user, I want the ability to delete books from my "Want to Read" list. <br>
   **Details**: forEach Book Cover stored in the "Want to Read" list, add a 'delete' button on the cover. On click, 'delete' should remove that book from the list.
