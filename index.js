document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById("book-form")
  let titleList = document.getElementById("book-title-list")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    titleList.innerHTML = ""
    queryValue = document.getElementById("search").value.trim();

    fetch(`https://openlibrary.org/search.json?author=${queryValue}&fields=key,title,author_name,editions&limit=20`, {
    })
    .then(response => response.json())
    .then(data => {
      createBookTitles(data)
    })
  })

  const createBookTitles = (book) => {
    book.docs.forEach((doc, index) => {
      const title = document.createElement("li")
      title.textContent = `Book Title: ${doc.title} | Author: ${doc.author_name}`
      titleList.appendChild(title)
    })
  }

})
