document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("book-form")
  const header = document.getElementById('header')
  const pageHeader = document.getElementById('better-reads')
  const collapsibleLibrary = document.querySelector(".my-library")
  const searchInput = document.getElementById("search")
  let bookGrid = document.querySelector(".book-grid")
  let bookDetailsContainer = document.querySelector('.book-details-container')
  let placeHolderImage = document.createElement('img')
  let libraryBooksContainer = document.querySelector('.image-container')
  let libraryImageContainer

  placeHolderImage.src = "./bookshelf.png"
  placeHolderImage.setAttribute('id', 'place-holder')
  searchInput.value = ""

  header.appendChild(pageHeader)
  header.appendChild(placeHolderImage)

  placeHolderImage.addEventListener("mouseover", () => {
    placeHolderImage.src = "./welcome.png"
  })
  placeHolderImage.addEventListener("mouseout", () => {
    placeHolderImage.src = "./bookshelf.png"
  })


  form.addEventListener("submit", (e) => {
    e.preventDefault()
    bookGrid.innerHTML = ""
    bookDetailsContainer.innerHTML = ""
    queryValue = document.getElementById("search").value.trim();

    fetch(`https://openlibrary.org/search.json?author=${queryValue}&fields=key,title,author_name,cover_i,ratings_average,subject,first_publish_year,id_amazon`, {
    })
    .then(response => response.json())
    .then(data => {createBookCovers(data.docs)})
  })

  const createBookCovers = (docs) => {
    docs.forEach((doc) => {
      const bookCover = document.createElement("img")
      bookCover.src = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
      bookCover.classList.add('cover')
      bookGrid.appendChild(bookCover)

      bookCover.addEventListener("click", () => {
        onBookCover(doc)
      })
    })
  }

  function onBookCover(doc) {
    bookDetailsContainer.innerHTML = ""
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

    bookDetailsContainer.appendChild(detailsCover)
    bookDetailsContainer.appendChild(title)
    bookDetailsContainer.appendChild(avgRating)
    bookDetailsContainer.appendChild(genre)
    bookDetailsContainer.appendChild(addBtn)

    addBtn.addEventListener("click", () => {
      onAddBtnClick(doc)
    })
  }

  function onAddBtnClick(doc) {
    fetch(`http://localhost:3000/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(doc)
    })
      .then(response => response.json())
      .then(data => {addBookToLib(data)})
  }

  const addBookToLib = (doc) => {
    libraryImageContainer = document.createElement("div")
    const libraryBook = document.createElement("img")
    const deleteButton = document.createElement('button')

    libraryImageContainer.setAttribute('id', 'library-image-container')
    libraryBook.setAttribute('id', 'image')
    deleteButton.setAttribute("id", "delete-button")

    libraryImageContainer.appendChild(libraryBook)
    libraryBook.src = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
    deleteButton.textContent = 'x'

    libraryImageContainer.appendChild(deleteButton)
    libraryBooksContainer.appendChild(libraryImageContainer)

    deleteButton.addEventListener("click", (e) => {
      onDeleteButton(e, doc)
    })

    libraryBook.addEventListener("click", () => {
      onLibraryBook(doc)
    })
  }

  function onDeleteButton(e, doc) {
    fetch(`http://localhost:3000/books/${doc.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
      .then(response => {
        if(response.ok) {
          const libraryImageContainer = e.target.parentElement;
          libraryImageContainer.remove()
        }
      })
  }

  function onLibraryBook(doc) {
    window.open(`https://www.amazon.com/dp/${doc.id_amazon[0]}`)
  }

  const createLibrary = (bookData) => {
    bookData.forEach((doc) => {
      addBookToLib(doc)
    })
  }

  fetch(`http://localhost:3000/books`)
    .then(response => response.json())
    .then(data => {createLibrary(data)})

  collapsibleLibrary.addEventListener("click", () => {
    libraryBooksContainer.classList.toggle("hidden")
  })
})
