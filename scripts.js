
const addButton = document.getElementById("add-button");
const inputField = document.getElementById("new-item");
const shoppingList = document.getElementById("shopping-list");
const message = document.getElementById("message");



addButton.addEventListener("click", () => {
  const itemText = inputField.value.trim();
  if (itemText === "") return;

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span>${itemText}</span>
    <button class="delete-button">Remover</button>
  `;

  shoppingList.appendChild(listItem);
  inputField.value = "";

  
  listItem.querySelector(".delete-button").addEventListener("click", () => {
    shoppingList.removeChild(listItem);
    showMessage();
  });
});


function showMessage() {
  message.classList.remove("hidden");
  setTimeout(() => {
    message.classList.add("hidden");
  }, 2000);
}

