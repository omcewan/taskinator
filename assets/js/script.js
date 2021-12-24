var formEl = document.querySelector("#task-form");
var tasksToDoEL = document.querySelector("#task-to-do");

var createTaskHandler = function(){
    event.preventDefault();
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new Task";
    tasksToDoEL.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);