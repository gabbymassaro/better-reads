document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById("book-form")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    queryValue = document.getElementById("search").value

    fetch("https://openlibrary.org/search.json?q=" + queryValue, {
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  })

})
