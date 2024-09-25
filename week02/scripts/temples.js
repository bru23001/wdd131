document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav"); 

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open"); 
    hamButton.classList.toggle("open"); 
    hamButton.textContent = hamButton.classList.contains("open") ? "✖" : "≡"; 
});
