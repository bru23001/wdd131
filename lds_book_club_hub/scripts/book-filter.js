// book-filter.js
const searchInput = document.getElementById('search-input');
const books = document.querySelectorAll('.book-item');
const noResultsMessage = document.getElementById('no-results');

searchInput.addEventListener('keyup', () => {
    const filter = searchInput.value.toLowerCase();
    let matchesFound = false;

    books.forEach((book) => {
        const title = book.querySelector('.book-title').textContent.toLowerCase();
        const author = book.querySelector('.book-author').textContent.toLowerCase();
        const genre = book.querySelector('.book-genre').textContent.toLowerCase();

        if (title.includes(filter) || author.includes(filter) || genre.includes(filter)) {
            book.style.display = 'block';
            matchesFound = true;
        } else {
            book.style.display = 'none';
        }
    });

    noResultsMessage.style.display = matchesFound ? 'none' : 'block';
});