let appName = "Task Manager Practice";
let totalTasks = 0;

console.log("Welcome to " + appName);

let tasks = [
  "Study JavaScript",
  "Complete coding exercises",
  "Review project requirements",
];
totalTasks = tasks.length;
console.log("You have " + totalTasks + " tasks in your list.");

function addTask(task) {
  tasks.push(task);
  console.log("Task added: " + task);
}
function removeTask(index) {
  tasks.splice(index, 1);
  console.log("Task removed: " + (index + 1));
}

function showTasks() {
  console.log("Your Tasks:");
  for (let i = 0; i < tasks.length; i++) {
    console.log(i + 1 + ". " + tasks[i]);
  }
}

showTasks();
addTask("Attend team meeting");
console.log("\nUpdated task list:");
showTasks();
removeTask(1);
console.log("\nUpdated task list after removal:");
showTasks();
