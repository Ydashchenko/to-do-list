import './style.css';
import { createTask } from './modules/create-task';
import { createAddTaskForm } from './modules/create-add-task-form';

let tasks = []
let projects = []
let notes = []

const addTaskBtn = document.getElementById('add-task')
const submitAddTaskBtn = document.getElementById('submit-add-task')

addTaskBtn.addEventListener('click', createAddTaskForm)
submitAddTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
})