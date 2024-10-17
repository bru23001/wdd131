// form-validation.js

// Elements
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email-input');
const errorMessage = document.createElement('span'); // Inline error message element
errorMessage.classList.add('error-message'); // Add CSS class for styling
emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling); // Position after input

// Regular expression for basic email pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time validation on input
emailInput.addEventListener('input', () => {
    if (emailInput.value === "") {
        showError("Email is required.");
    } else if (!emailPattern.test(emailInput.value)) {
        showError("Please enter a valid email address.");
    } else {
        hideError(); // No errors if valid
    }
});

// Handle form submission
form.addEventListener('submit', (event) => {
    if (!emailPattern.test(emailInput.value)) {
        event.preventDefault(); // Prevent submission if email is invalid
        showError("Please enter a valid email address.");
    } else {
        alert("Thank you for signing up!");
    }
});

// Functions to show and hide error messages
function showError(message) {
    errorMessage.textContent = message;
    emailInput.classList.add('input-error'); // Add error styling
}

function hideError() {
    errorMessage.textContent = "";
    emailInput.classList.remove('input-error'); // Remove error styling
}