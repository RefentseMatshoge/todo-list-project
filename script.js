let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);

    taskInput.value = "";
}
