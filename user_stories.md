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
### Feature 4: Show Book Title on Hover
**User Story**: As a user, if I hover over a book cover, I want to see the title of the book displayed overtop the image. <br>
**Details**: Create a hover event forEach book cover displayed. On hover, display the book's title within the image. Lower opacity but still display the image for readability.

## STRETCH STORIES
5. **User Story**: As a user, I want the ability to scroll through my book results without the results taking over the whole page. <br>
   **Details**: Remove the 20 result page limit and wrap the results in rows of 5 books. The scroll should be within set width/height within the webpage.
6. **User Story**: As a user, I want to store books that I'm interested in reading to a "Want to Read" list. <br>
   **Details**: Create a side bar area to the left of the webpage. Fixed width that is the length of the webpage. Add title "Want to Read" that will house an unorderd list
7. **User Story**: As a user, I want to add books to my "Want to Read" list. <br>
   **Details**: Create a 'save' button on search result book covers. On 'save', just the book cover should be displayed in the "Want to Read" as a list item.
8. **User Story**: As a user, I want the ability to delete books from my "Want to Read" list. <br>
   **Details**: forEach Book Cover stored in the "Want to Read" list, add a 'delete' button on the cover. On click, 'delete' should remove that book from the list.
