const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;

    // Apply styles directly using JavaScript to prevent text selection and change cursor
    taskItem.style.cursor = "pointer";
    taskItem.style.userSelect = "none";

    // Create the remove button
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove Task";
    removeBtn.style.marginLeft = "10px"; // Add some space between the text and the button
    removeBtn.style.cursor = "pointer"; // Ensure the cursor shows a hand on the button too

    // Add event listener to the remove button
    removeBtn.addEventListener("click", function() {
      const confirmationMessage = `Are you sure you want to remove the task: "${taskItem.innerText}"?`;
      if (confirm(confirmationMessage)) {
        taskItem.remove();
        
      }
    });

    // Append the button to the task item
    taskItem.appendChild(removeBtn);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});
