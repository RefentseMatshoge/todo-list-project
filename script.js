let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
    <span onclick="this.style.textDecoration='line-through';
                   this.style.color='gray';">
        ${task}
    </span>
    <button onclick="this.parentElement.remove()">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
}
