// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const dayjs = require('dayjs')
var isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter);
var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

// Todo: create a function to generate a unique task id
function generateTaskId() {
  if (nextId == null) {
    nextId = 1;
  } else {
    nextId++;
  }

  localStorage.setItem("nextId", JSON.stringify(nextId));
  return nextId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const taskCard = $("<div>").addClass().attr("obj-task-id", task.id);
  cardHeader = $("<div>").addClass("card-header").text(task.title);
  cardBody = $("<div>");
  cardDescription = $("<p>")
    .addClass(card - text)
    .text(task.description);
  cardDueDate = $("<p>").addClass("card-text").text(task.dueDate);
  cardDeleteBtn = $("<button>");
  .addClass('btn delete-btn')
  .text('Delete')
  .attr("obj-task-id", task.id);
  cardDeleteBtn.on('click', handleDeleteTask)

  // Conditional formating

  switch (task.dueDate && task.status !== 'done') 
  {
    const now = dayjs();
    const taskDueDate = dayjs(task.dueDate, 'DD/MM/YYYY');
    case: (now.isSameOrAfter(taskDueDate, 'day')):
        taskCard.addClass('late-task')
        break;
  
    case: (now.isBetween((dayjs().subtract(15, taskDueDate)), taskDueDate, 'DD/MM/YYYY'));
        taskCard.addClass('approch-task')
        break;

    default: (now.isbefore((dayjs().subtract(15, taskDueDate), 'DD/MM/YYYY')));
        taskCard.addClass('safe-task');
        break;
  }

  cardBody,append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {});
