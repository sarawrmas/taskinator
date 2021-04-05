// creates variable to target button id
var formEl = document.querySelector("#task-form");
// creates variable to target ul id
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to excecute adding li's
var createTaskHandler = function(event) {
    // prevents browser from automatically refreshing when submitted
    event.preventDefault();
    // creates variable to create a list item object
    var listItemEl = document.createElement("li");
    // identifies the class name of new li to apply CSS styling
    listItemEl.className = "task-item";
    // text content that will appear in new li
    listItemEl.textContent = "This is a new task.";
    // adds newly created li to bottom of list in html
    tasksToDoEl.appendChild(listItemEl);
};

// event listener triggers when user submits (clicks button or types enter) new li
formEl.addEventListener("submit", createTaskHandler);