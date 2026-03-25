let tasks = [];

let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    let li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    li.addEventListener("click", function () {
      toggleComplete(index);
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      deleteTask(index);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function addTask() {
  let newTask = taskInput.value.trim();

  if (newTask === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push({
    text: newTask,
    completed: false,
  });

  taskInput.value = "";
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
