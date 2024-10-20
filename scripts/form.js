/**
 * This module handles the dynamic population of the product select options
 * and updates date-related elements in the DOM.
 */

/**====================================================================================#
===============================PRODUCT_SELECTION_AND_DATE_UPDATES===============================#
====================================================================================

/**
 * Product array representing available products for selection in the form.
 */
const products = [
    { name: "Product A" },
    { name: "Product B" },
    { name: "Product C" },
];

//=============================METHOD_POPULATE_PRODUCT_OPTIONS=============================
/**
 * Populates the 'select' element with product options dynamically.
 */
const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

//=============================METHOD_UPDATE_CURRENT_YEAR_AND_LAST_MODIFIED=============================
/**
 * Updates the footer with the current year and the last modified date of the document.
 */
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;