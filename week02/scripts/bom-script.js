
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

////////////////////Load saved scriptures from localStorage on page load//////////////////

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

////////////////////Function to load from localStorage////////////////////////////////////
function loadFromLocalStorage() {
    const savedScriptures = JSON.parse(localStorage.getItem("topScriptures")) || [];
    savedScriptures.forEach((chapter) => {
      addScriptureToList(chapter);
    });
}
  
///////////////////Function to save to localStorage/////////////////////////////////////////
function saveToLocalStorage() {
    const chapters = Array.from(document.querySelectorAll("#list li")).map(li => li.firstChild.textContent);
    localStorage.setItem("topChapters", JSON.stringify(chapters));
}

///////////////////Event listener for the Add button////////////////////////////////////////
button.addEventListener("click", () => {
  const scriptureUser = input.value.trim(); 

  /////////////////Adding and saving the scripture to localStorage///////////////////////
  if (scriptureUser !== "") {
    addScriptureToList(scriptureUser);
    saveToLocalStorage();
    input.value = "";
    input.focus();
  } else {
    alert("Please enter a scripture.");
    input.focus();
  }
});
  
///////////////////////Function to add a chapter to the list////////////////////////////////
function addScriptureToList(scriptureUser) {
  const scripture = document.createElement("li");
  scripture.textContent = scriptureUser;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.title = "Remove scripture";

  scripture.appendChild(deleteBtn);

  list.appendChild(scripture);

  deleteBtn.addEventListener("click", () => {
    list.removeChild(scripture);
    saveToLocalStorage();
    input.focus();
  });
}

