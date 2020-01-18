function fetchBooks() {
<<<<<<< HEAD
  const gotUrl = "https://anapioficeandfire.com/api/books"
  // Variable that will store the api URL
  return fetch(gotUrl)
  .then(response => response.json())
  .then(json => renderBooks(json))
=======
  // Variable that will store the api URL
  const gotUrl = "'https://anapioficeandfire.com/api/books"
  fetch(gotUrl)
  .then(response => {
    return response.json();
  })
  .then(renderBooks(json) {
  });
>>>>>>> 056211c11ecd39e7ac601622e184dbbde25bed6c
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
