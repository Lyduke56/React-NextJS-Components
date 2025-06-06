const addBtn = document.getElementById("addtask");
const clearBtn = document.getElementById("clearalltask");
const clrfinBtn = document.getElementById("clearfinishedtasks");
const taskList = document.getElementById("tasklist");

/*STORAGE FOR THE TASKS*/
window.addEventListener("DOMContentLoaded", () =>{
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(taskText => addTask(taskText));
})

/*ADD TASK BUTTON*/
addBtn.addEventListener("click", () => {
  const inputTask = prompt("Enter new task:");

  if (inputTask && inputTask.trim() !== "") {
    addTask(inputTask.trim());
    saveTasks();
    }
})

/*CLEAR ALL TASKS BUTTON*/
clearBtn.addEventListener("click", () =>{
    taskList.innerHTML = "";
    saveTasks();  
})

/*CLEAR FINISHED TASKS BUTTON*/
clrfinBtn.addEventListener("click", () => {
  const taskDivs = document.querySelectorAll("#tasklist .tasks");
  taskDivs.forEach(taskDiv => {
    const checkbox = taskDiv.querySelector("input[type='checkbox']");
    if (checkbox && checkbox.checked) {
      taskDiv.remove();
    }
  });
  saveTasks();
});

/*UTILITY FUNCTIONS*/
function addTask(taskText) {
  const newTask = document.createElement("div");
  newTask.className = "tasks";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px";

  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  newTask.appendChild(checkbox);
  newTask.appendChild(taskLabel);

  taskList.appendChild(newTask);
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#tasklist .tasks").forEach(taskDiv => {
    const checkbox = taskDiv.querySelector("input[type='checkbox']");
    const taskLabel = taskDiv.querySelector("span");

    if (taskLabel && taskLabel.textContent) {
        tasks.push(taskLabel.textContent);
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
