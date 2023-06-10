import './style.css';
import { createTask } from './modules/create-task';
import { createAddTaskForm } from './modules/create-add-task-form';
import { createAllTasksTab } from './modules/all-tasks-tab';

let tasks = []
let projects = []
let notes = []

const addTaskBtn = document.getElementById('add-task')
const submitAddTaskBtn = document.getElementById('submit-add-task')
const todayTab = document.getElementById('today')

createAllTasksTab()

todayTab.addEventListener('click', createAllTasksTab)

addTaskBtn.addEventListener('click', createAddTaskForm)
submitAddTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addNewTaskToArray
})