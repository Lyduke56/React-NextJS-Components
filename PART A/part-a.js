const addBtn = document.getElementById("addtask");
const clearBtn = document.getElementById("clearalltask");
const taskList = document.getElementById("tasklist");

window.addEventListener("DOMContentLoaded", () =>{
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(taskText => addTask(taskText));
})


addBtn.addEventListener("click", () => {
    const inputTask = prompt("Enter new task: ");

    if (inputTask && inputTask.trim() !== ""){
        const newTask = document.createElement("div");
        newTask.className = "tasks";
        newTask.textContent = inputTask.trim();
        taskList.appendChild(newTask);
    }
})

clearBtn.addEventListener("click", () =>{
    





})