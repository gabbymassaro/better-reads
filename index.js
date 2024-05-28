document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById("book-form")
  let titleList = document.getElementById("book-title-list")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    titleList.innerHTML = ""
    queryValue = document.getElementById("search").value

    fetch("https://openlibrary.org/search.json?q=" + queryValue, {
    })
    .then(response => response.json())
    .then(data => {
      createBookTitles(data)
    })
  })

  const createBookTitles = (book) => {
    book.docs.forEach((doc, index) => {
      const title = document.createElement("li")
      title.textContent = `Index ${index}: ${doc.title}`
      titleList.appendChild(title)
    })
  }

})
