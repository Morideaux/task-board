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
    //check due date proximity and add a class accordingly
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
function renderTaskList() {
    if (taskList = null) {
        taskList = [];
    }

    const todoList = $('todo-cards');
    todoList.empty();

    const ongoingList = $('ongoingList-cards');
    ongoingList.empty();

    const finishedList = $('finished-cards');
    finishedList.empty();

    //check status and append appropriate list
    taskList.forEach(task => {
        switch (task.status) {
            case (task.status === 'to-do'):

                todoList.append(createTaskCard(task));
                
                break;

            case (task.status === 'ongoing'):

            ongoingList.append(createTaskCard(task));
        
            default:

                finishedList.append(createTaskCard(task));

                break;
        }
    });

    // this was nice
    $('drag').draggable({
        zIndex: 100
    });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();

    // define task obj. using created tools
    const task = {
        id: generateTaskId(),
        title: $('#taskTitle'.val),
        description: $('taskDescrition').val(),
        dueDate: $('taskDueDate').val(),
        status: 'to-do',
    };

    taskList.push(task);
    localStorage.setItem('tasks', Json.stringify(taskList));
    renderTaskList();
    $('#taskListTitle').val('');
    $('#taskDescrition').val('')
    $('#taskDueDate').val('')
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    event.preventDefault();

    const taskId = $(this).attr('data-task-id');

    taskList = taskList.filter((task) => task.id !== parseInt(taskId));

    localStorage.setItem('task', JSON.stringify(taskList));
    
    renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

    renderTaskList();

    $('#taskForm').on('submit', handleAddTask);

    $('row').droppable({
        accept: 'draggable',
        drop: handleDrop,
    });

    $('taskDueDate').datepicker({
        changemonth: true,
        changeyear: true,
    });
});
