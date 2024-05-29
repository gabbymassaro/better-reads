document.addEventListener("DOMContentLoaded", (e) => {
  let form = document.getElementById("book-form")
  let coverImage = document.querySelector(".book-grid")
  let bookDetails = document.querySelector('.book-details-container')

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    coverImage.innerHTML = ""
    queryValue = document.getElementById("search").value.trim();

    fetch(`https://openlibrary.org/search.json?author=${queryValue}&fields=key,title,author_name,editions,cover_i,ratings_average,subject,first_publish_year&limit=20`, {
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
        const detailsCover = document.createElement("img")
        const title = document.createElement("h3")
        const avgRating = document.createElement("p")
        const genre = document.createElement("p")

        detailsCover.src = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        title.textContent = `Title: ${doc.title}`
        avgRating.textContent = `Average Rating: ${doc.ratings_average}`
        genre.textContent = `Genre: ${(doc.subject.slice(0,3))} `

        bookDetails.appendChild(detailsCover)
        bookDetails.appendChild(title)
        bookDetails.appendChild(avgRating)
        bookDetails.appendChild(genre)

        detailsCover.addEventListener("mouseover", (e) => {
          const overlayText = document.createElement("div");
          overlayText.textContent = `First published in ${doc.first_publish_year}.`;
          detailsCover.classList.add('overlay-hover')
          overlayText.classList.add("overlay-text");
          e.currentTarget.parentElement.appendChild(overlayText);

        })
        detailsCover.addEventListener("mouseout", (e) => {
          detailsCover.classList.remove('overlay-hover');
          const overlayText = e.currentTarget.parentElement.querySelector(".overlay-text");
          if (overlayText) {
            overlayText.remove();
          }
        })
      })
    })
  }


})
