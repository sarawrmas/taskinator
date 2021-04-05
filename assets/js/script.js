// creates variable to target button id
var formEl = document.querySelector("#task-form");
// creates variable to target ul id
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to excecute adding li's
var taskFormHandler = function(event) {
    // prevents browser from automatically refreshing when submitted
    event.preventDefault();
    // adds user data to new li
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

// holds the code that creates a new task HTML element
var createTaskEl = function(taskDataObj) {
    // creates variable to create a list item object
    var listItemEl = document.createElement("li");
    // identifies the class name of new li to apply CSS styling
    listItemEl.className = "task-item";
    // create div to hold task info and add to li
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    // adds newly created li to bottom of list
    tasksToDoEl.appendChild(listItemEl);
}

// event listener triggers when user submits (clicks button or types enter) new li
formEl.addEventListener("submit", taskFormHandler);