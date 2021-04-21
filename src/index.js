// your code here
document.addEventListener("DOMContentLoaded", function(e) {
  debugger

  const newTaskForm = document.getElementById("create-task-form")
  const newTaskDescription = document.getElementById("new-task-description")

  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = e => {
  e.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  e.target.reset();
}

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};



