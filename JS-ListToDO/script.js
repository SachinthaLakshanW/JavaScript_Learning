let tasks = [];

let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    let li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      removeTask(index);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function addTask() {
  let newTask = taskInput.value;

  if (newTask === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(newTask);
  taskInput.value = "";
  renderTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

addButton.addEventListener("click", addTask);
