document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById("book-form")
  let titleList = document.getElementById("book-title-list")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    titleList.innerHTML = ""
    queryValue = document.getElementById("search").value.trim();

    fetch(`https://openlibrary.org/search.json?author=${queryValue}&fields=key,title,author_name,editions,cover_i&limit=20`, {
    })
    .then(response => response.json())
    .then(data => {
      createBookTitles(data)
    })
  })

  const createBookTitles = (book) => {
    book.docs.forEach((doc, index) => {
      const title = document.createElement("li")
      const bookCover = document.createElement("img")

      bookCover.src = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
      title.textContent = `Book Title: ${doc.title} | Author: ${doc.author_name}`

      titleList.appendChild(bookCover)
      titleList.appendChild(title)
    })
  }

})
