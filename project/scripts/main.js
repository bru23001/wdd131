/*====================================================================================
====================================MAIN_JS===========================================
====================================================================================*/

/** 
 * This script handles all core functionality for the Your Book Club website
 * including navigation, form validation, lazy loading, and local storage.
 */

document.addEventListener('DOMContentLoaded', function () {

    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector(".nav-links");

    
    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.textContent = navigation.classList.contains("open") ? "✖" : "☰"; // Toggle icon text
    });


    //=============================FORM_HANDLING================================
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const submitButton = form.querySelector('button');
    const errorMessage = form.querySelector('.error-message');

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showError(message) {
        errorMessage.textContent = message;
        emailInput.classList.add('error');
    }

    function hideError() {
        errorMessage.textContent = '';
        emailInput.classList.remove('error');
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();

        hideError();

        if (!email) {
            showError('Please enter your email address');
            return;
        }

        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }

        submitButton.classList.add('loading');
        submitButton.disabled = true;

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            emailInput.value = '';
            alert('Thank you for subscribing!');
        } catch (error) {
            showError('Something went wrong. Please try again.');
        } finally {
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
        }
    });

    // Real-time validation
    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim()) {
            hideError();
        }
    });

    //=============================LAZY_LOADING================================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    //=============================LOCAL_STORAGE================================
    const favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];

    function addFavorite(bookId) {
        if (!favoriteBooks.includes(bookId)) {
            favoriteBooks.push(bookId);
            localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
            updateFavoriteButtons();
        }
    }

    function removeFavorite(bookId) {
        const index = favoriteBooks.indexOf(bookId);
        if (index > -1) {
            favoriteBooks.splice(index, 1);
            localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
            updateFavoriteButtons();
        }
    }

    function updateFavoriteButtons() {
        document.querySelectorAll('.book-card').forEach(card => {
            const bookId = card.dataset.id;
            const isFavorite = favoriteBooks.includes(bookId);
            // Update favorite button states
            const button = card.querySelector('.favorite-button');
            if (button) {
                button.textContent = isFavorite ? '★' : '☆';
            }
        });
    }

    // Add click handlers for favorite buttons
    document.querySelectorAll('.favorite-button').forEach(button => {
        button.addEventListener('click', () => {
            const bookId = button.closest('.book-card').dataset.id;
            if (favoriteBooks.includes(bookId)) {
                removeFavorite(bookId);
            } else {
                addFavorite(bookId);
            }
        });
    });
});
    //=============================FOOTER_UPDATES===============================

    document.addEventListener('DOMContentLoaded', function () {
        
        document.getElementById("current-year").textContent = new Date().getFullYear();
    
        
        document.getElementById("last-modified").textContent = document.lastModified;
    });