const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllBtn = document.getElementById('clearAllBtn');

let tasks = [];

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        tasks.push({text: taskText});
        taskInput.value = "";
        displayTasks();
        console.log("addtask func");
    }
}

function displayTasks(){
    taskList.innerHTML = "";
    tasks.forEach((task, index)=>{
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", ()=> toggleTask(index));
        taskList.appendChild(li);
    });
    console.log("displaytask func");
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
    console.log("toggletask func");
}

function clearCompletedTasks(){
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
    console.log("clearCompletedTasks func");
}

function clearAllTasks(){
    console.log("calls clearalltasks")
    clearAllBtn.value = tasks.splice(0, tasks.length);
    displayTasks();
}

clearAllBtn.addEventListener("click", clearAllTasks);

addTaskBtn.addEventListener("click", addTask);

clearCompletedBtn.addEventListener("click", clearCompletedTasks);

displayTasks();


