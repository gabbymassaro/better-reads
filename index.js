document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()
  let form = document.getElementById("book-form")
  let coverImage = document.querySelector(".book-grid")
  let bookDetails = document.querySelector('.book-details-container')
  let library = document.querySelector('.library')

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    coverImage.innerHTML = ""
    queryValue = document.getElementById("search").value.trim();

    fetch(`https://openlibrary.org/search.json?author=${queryValue}&fields=key,title,author_name,cover_i,ratings_average,subject,first_publish_year&limit=20`, {
    })
    .then(response => response.json())
    .then(data => {
      createBookTitles(data)
    })
  })

  const createBookTitles = (book) => {
    book.docs.forEach((doc) => {
      const bookCover = document.createElement("img")
      bookCover.src = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
      bookCover.classList.add('cover')
      coverImage.appendChild(bookCover)

      bookCover.addEventListener("click", (e) => {
        bookDetails.innerHTML = ""
        const detailsCover = document.createElement("img")
        const title = document.createElement("h3")
        const avgRating = document.createElement("p")
        const genre = document.createElement("p")
        const addBtn = document.createElement("button")

        detailsCover.src = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        title.textContent = `Title: ${doc.title}`
        avgRating.textContent = `Average Rating: ${Math.floor(doc.ratings_average)}/5 Stars`
        genre.textContent = `Genre: ${(doc.subject.slice(0,3))}`
        addBtn.textContent = "add to library"

        bookDetails.appendChild(detailsCover)
        bookDetails.appendChild(title)
        bookDetails.appendChild(avgRating)
        bookDetails.appendChild(genre)
        bookDetails.appendChild(addBtn)

        addBtn.addEventListener("click", (e) =>{
          fetch(`http://localhost:3000/books`, {
            method: "POST",
            body: JSON.stringify(doc),
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }
          })
            .then(response => response.json())
            .then(data => {
              createLibrary(data)
            })
        })
      })
    })
  }
  const createLibrary = (book) => {
    book.forEach((book) => {
      const libraryBook = document.createElement("img")
      libraryBook.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      library.appendChild(libraryBook)

      const deleteButton = document.createElement('button')
      deleteButton.classList.add("delete")
      deleteButton.textContent = 'x'
      library.appendChild(deleteButton)

      deleteButton.addEventListener("click", (e) => {
        fetch(`http://localhost:3000/books/${book.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        })
          .then(function (response) {
            return response.json()
          })
          .then(data => {
            deleteButton.parentNode.remove(data)
          })
      })
    })
  }

  const renderLibrary = () => {
    fetch(`http://localhost:3000/books`)
      .then(response => response.json())
      .then(data => {
        createLibrary(data)
      })
  }

  renderLibrary()
})
