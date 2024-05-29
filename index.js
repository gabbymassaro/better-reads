document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById("book-form")
  let coverImage = document.querySelector(".book-grid")
  let bookDetails = document.querySelector('.book-details-container')

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    coverImage.innerHTML = ""
    queryValue = document.getElementById("search").value.trim();

    fetch(`https://openlibrary.org/search.json?author=${queryValue}&fields=key,title,author_name,editions,cover_i,ratings_average,subject&limit=20`, {
    })
    .then(response => response.json())
    .then(data => {
      createBookTitles(data)
    })
  })

  const createBookTitles = (book) => {
    book.docs.forEach((doc, index) => {
      const bookCover = document.createElement("img")
      bookCover.src = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
      coverImage.appendChild(bookCover)

      bookCover.addEventListener("click", (e) => {
        e.preventDefault()
        bookDetails.innerHTML = ""
        const smCover = document.createElement("img")
        const title = document.createElement("h3")
        const avgRating = document.createElement("p")
        const genre = document.createElement("p")

        smCover.src = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        title.textContent = `Title: ${doc.title}`
        avgRating.textContent = `Average Rating: ${doc.ratings_average}`
        genre.textContent = `Genre: ${(doc.subject.slice(0,3))}`

        bookDetails.appendChild(smCover)
        bookDetails.appendChild(title)
        bookDetails.appendChild(avgRating)
        bookDetails.appendChild(genre)
      })
    })
  }
})
