const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.onclick = function() {
    if (taskInput.value) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';
    }
};