// Get elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add item to the list
function addItem() {
  const userInput = todoInput.value.trim();
  if (userInput === "") return alert("Please enter a task!");

  const listItem = document.createElement("li");

  // Create the text for the list item
  const taskText = document.createElement("span");
  taskText.textContent = userInput;

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.addEventListener("click", () => editItem(taskText));

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteItem(listItem));

  // Append elements to list item
  listItem.appendChild(taskText);
  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);

  // Append list item to the list
  todoList.appendChild(listItem);

  // Clear the input
  todoInput.value = "";
}

// Edit a task
function editItem(taskText) {
  const updatedText = prompt("Edit your task:", taskText.textContent);
  if (updatedText !== null && updatedText.trim() !== "") {
    taskText.textContent = updatedText;
  }
}

// Delete a task
function deleteItem(listItem) {
  todoList.removeChild(listItem);
}

// Attach event listener to the Add button
addBtn.addEventListener("click", addItem);

// Optional: Allow pressing "Enter" to add items
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") addItem();
});
