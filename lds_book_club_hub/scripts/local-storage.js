// local-storage.js
const favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];

function addFavorite(bookId) {
    if (!favoriteBooks.includes(bookId)) {
        favoriteBooks.push(bookId);
        localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
        alert('Book added to favorites!');
        updateFavorites();
    } else {
        alert('This book is already in your favorites.');
    }
}

function updateFavorites() {
    const favoriteSection = document.getElementById('favorites-section');
    favoriteSection.innerHTML = ''; // Clear previous content
    favoriteBooks.forEach((bookId) => {
        const book = document.getElementById(bookId);
        if (book) {
            favoriteSection.appendChild(book.cloneNode(true));
        }
    });
}

// Load favorites on page load
document.addEventListener('DOMContentLoaded', updateFavorites);