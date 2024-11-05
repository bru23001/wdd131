/*====================================================================================
====================================FORM_VALIDATION_JS================================
====================================================================================*/


//This script handles form validation for the newsletter signup on the Your Book Club website.


document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");

    let errorMessage = document.querySelector(".error-message");
    if (!errorMessage) { 
        errorMessage = document.createElement("span");
        errorMessage.classList.add("error-message");
        emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling);
    }
    // Regular expression for basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //=============================REAL_TIME_VALIDATION=============================
    emailInput.addEventListener("input", () => {
        if (emailInput.value === "") {
            showError("Email is required.");
        } else if (!emailPattern.test(emailInput.value)) {
            showError("Please enter a valid email address.");
        } else {
            hideError();
        }
    });

    //=============================FORM_SUBMISSION==================================
    form.addEventListener("submit", (event) => {
        if (!emailPattern.test(emailInput.value)) {
            event.preventDefault();
            showError("Please enter a valid email address.");
        } else {
            alert("Thank you for signing up!");
        }
    });

    //=============================SHOW_ERROR=======================================
    /**
     * Displays an error message
     * @param {string} message - The error message to display
     */
    function showError(message) {
        errorMessage.textContent = message;
        emailInput.classList.add("input-error");
    }

    //=============================HIDE_ERROR=======================================
    
    // Hides the error message
    
    function hideError() {
        errorMessage.textContent = "";
        emailInput.classList.remove("input-error");
    }
});