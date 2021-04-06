// creates variable to target button id
var formEl = document.querySelector("#task-form");
// creates variable to target ul id
var tasksToDoEl = document.querySelector("#tasks-to-do");
// creates a counter that increments by one each time a task is created
var taskIdCounter = 0;

// function to excecute adding li's
var taskFormHandler = function(event) {
    // prevents browser from automatically refreshing when submitted
    event.preventDefault();
    // adds user data to new li
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    // resets form after user submits input
    formEl.reset();
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
    // add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);
    // create div to hold task info and add to li
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    // calls create task actions function using id counter variable
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
    // adds newly created li to bottom of list
    tasksToDoEl.appendChild(listItemEl);
    // increase task counter by 1 for next unique id
    taskIdCounter++;
};

var createTaskActions = function(taskId) {
    // creates div to act as container for other elements
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
    // create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);
    actionContainerEl.appendChild(editButtonEl);
    // create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);
    actionContainerEl.appendChild(deleteButtonEl);
    // create dropdown
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);
    actionContainerEl.appendChild(statusSelectEl);
    // array for dropdown options
    var statusChoices = ["To Do", "In Progress", "Completed"];
    // create option element
    for (var i = 0; i < statusChoices.length; i++) {
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);
        statusSelectEl.appendChild(statusOptionEl);
    }

    return actionContainerEl;
};

// event listener triggers when user submits (clicks button or types enter) new li
formEl.addEventListener("submit", taskFormHandler);