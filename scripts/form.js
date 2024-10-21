/**====================================================================================#
===============================PRODUCT_SELECTION_AND_DATE_UPDATES===============================#
====================================================================================*/


const products = [
    { name: "Product A" },
    { name: "Product B" },
    { name: "Product C" },
];

//=============================METHOD_POPULATE_PRODUCT_OPTIONS=============================

const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

//=============================METHOD_UPDATE_CURRENT_YEAR_AND_LAST_MODIFIED=============================

document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;