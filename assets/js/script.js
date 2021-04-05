// creates variable to target button id
var buttonEl = document.querySelector("#save-task");
// creates variable to target ul id
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to excecute adding li's
var createTaskHandler = function() {
    // creates variable to create a list item object
    var listItemEl = document.createElement("li");
    // identifies the class name of new li to apply CSS styling
    listItemEl.className = "task-item";
    // text content that will appear in new li
    listItemEl.textContent = "This is a new task.";
    // adds newly created li to bottom of list in html
    tasksToDoEl.appendChild(listItemEl);
};

// event listener to trigger event handler when button is clicked using li-adding function
buttonEl.addEventListener("click", createTaskHandler);