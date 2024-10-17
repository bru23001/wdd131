// Select elements needed for carousel functionality
const books = document.querySelectorAll('.carousel-book');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0; // Initialize the starting book index


// Function to update the visible book
function showBook(index) {
    books.forEach((book, i) => {
      // Toggle the 'active' class to show/hide books
      book.classList.toggle('active', i === index);
    });
}

// Add click event listener to the 'Previous' button
prevButton.addEventListener('click', () => {
    // Calculate the new index for previous book, wrapping around if needed
    currentIndex = (currentIndex - 1 + books.length) % books.length;
    showBook(currentIndex);
});
  

// Add click event listener to the 'Next' button
nextButton.addEventListener('click', () => {
    // Calculate the new index for next book, wrapping around if needed
    currentIndex = (currentIndex + 1) % books.length;
    showBook(currentIndex);
});
  
// Automatically show the first book on page load
showBook(currentIndex);


// Optional: Auto-slide functionality (setInterval for automatic transitions)
let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % books.length;
    showBook(currentIndex);
  }, 5000); // Adjust the interval as needed
  

// Pause auto-slide on hover over carousel
document.querySelector('.carousel').addEventListener('mouseover', () => {
    clearInterval(autoSlide);
  });
  
// Resume auto-slide when the mouse leaves the carousel area
document.querySelector('.carousel').addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % books.length;
      showBook(currentIndex);
    }, 5000);
  });