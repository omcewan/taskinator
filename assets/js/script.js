var formEl = document.querySelector("#task-form");
var tasksToDoEL = document.querySelector("#task-to-do");

var createTaskHandler = function(){
    event.preventDefault();
    var taskInputName = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to a list
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    
    // add HTML info to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskInputName + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEL.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);