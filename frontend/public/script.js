document.getElementById("task-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const due_date = document.getElementById("due_date").value;
    
    const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, due_date })
    });
    if (response.ok) location.reload();
});

async function loadTasks() {
    const response = await fetch("http://localhost:3000/tasks");
    const tasks = await response.json();
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title} - ${task.description} (Vence: ${task.due_date})`;
        taskList.appendChild(li);
    });
}
loadTasks();