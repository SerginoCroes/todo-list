import { addTask, readTask } from "./task";

const contentDiv = document.querySelector('#content');
const mainDiv = document.createElement('div');
mainDiv.classList.add('main');
contentDiv.appendChild(mainDiv);

export function drawHeader() {

    const header = document.createElement('div');
    header.classList.add('header');

    const headerTitle = document.createElement('h1');
    headerTitle.innerText = 'Todo List';

    header.appendChild(headerTitle);
    contentDiv.appendChild(header);

}

export function drawMenu() {

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const addButton = document.createElement('button');
    addButton.innerText = 'Add todo';
    addButton.addEventListener('click', () => document.querySelector('.dialog').style.display = 'flex');

    const allItemButton = document.createElement('button');
    allItemButton.innerText = 'All items';

    const currentItemButton = document.createElement('button');
    currentItemButton.innerText = 'Current Items'

    const projectDivider = document.createElement('p');
    projectDivider.innerText = 'Projects:'

    const projectAddButton = document.createElement('button');
    projectAddButton.innerText = 'Add project';

    menu.appendChild(addButton);

    menu.appendChild(allItemButton);
    menu.appendChild(currentItemButton);
    menu.appendChild(projectDivider);
    menu.appendChild(projectAddButton);
    contentDiv.appendChild(menu);

}

export function drawFooter() {

    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.innerText = 'Footer';

    footer.appendChild(footerText);
    contentDiv.appendChild(footer);

}

export function drawDialog() {

    const dialog = document.createElement('div');
    dialog.classList.add('dialog');

    const dialogTitle = document.createElement('h2');
    dialogTitle.innerText = 'Add task:';

    const inputForm = document.createElement('form');

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('inputdiv');
    const inputTodo = document.createElement('input');
    inputTodo.setAttribute('id', 'todo');
    const inputTodoLabel = document.createElement('label');
    inputTodoLabel.setAttribute('for', 'todo');
    inputTodoLabel.innerText = 'Todo:';

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('inputdiv');
    const inputDate = document.createElement('input');
    inputDate.setAttribute('id', 'date');
    inputDate.setAttribute('type', 'date');
    const inputDateLabel = document.createElement('label');
    inputDateLabel.setAttribute('for', 'date');
    inputDateLabel.innerText = 'Date:';

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttondiv');
    const button = document.createElement('button');
    button.innerText = 'Add todo';
    button.addEventListener('click', e => taskAddHandler(e, dialog, inputTodo, inputDate));

    todoDiv.appendChild(inputTodoLabel);
    todoDiv.appendChild(inputTodo);
    dateDiv.appendChild(inputDateLabel);
    dateDiv.appendChild(inputDate);
    buttonDiv.appendChild(button);
    inputForm.appendChild(todoDiv);
    inputForm.appendChild(dateDiv);
    inputForm.appendChild(buttonDiv);
    dialog.appendChild(dialogTitle);
    dialog.appendChild(inputForm);
    contentDiv.appendChild(dialog);
}

function drawTask(task){

    const taskBox = document.createElement('div');
    taskBox.classList.add('taskbox');

    const taskTitle = document.createElement('h3');
    const taskDue = document.createElement('p');

    taskTitle.innerText = task.todo;
    taskDue.innerText = task.date;

    taskBox.appendChild(taskTitle);
    taskBox.appendChild(taskDue);

    mainDiv.appendChild(taskBox);

}

function taskAddHandler(e, dialog, todo, date) {
    e.preventDefault();
    if(todo.value && date.value){
        addTask({todo: todo.value, date: date.value});
        console.log(todo.value + ' ' + date.value);
        todo.value = '';
        date.value = '';
        dialog.style.display = 'none';
        document.querySelectorAll('.taskbox').forEach(item => item.remove());
        readTask().forEach(item => drawTask(item));
    } else {
        console.log('task value empty');
    }
}