
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  const scriptureUser = input.value; 

 
  if (scriptureUser !== "") {
    
    const scripture = document.createElement("li");
    scripture.textContent = scriptureUser;

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    
    scripture.appendChild(deleteBtn);

   
    list.appendChild(scripture);

    
    input.value = "";

  
    deleteBtn.addEventListener("click", () => {
      list.removeChild(scripture);
    });
  } else {
    alert("Please enter a book and chapter.");
  }
});