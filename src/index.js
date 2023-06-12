import './style.css';
import { createAddTaskForm } from './modules/create-add-task-form';
import { createAllTasksTab } from './modules/all-tasks-tab';
import { createTodayTab } from './modules/today-tab';
import { createThisWeekTab } from './modules/this-week-tab';

let tasks = []
let projects = []
let notes = []

createAllTasksTab()

const addTaskBtn = document.getElementById('add-task')
const submitAddTaskBtn = document.getElementById('submit-add-task')
const allTasksTab = document.getElementById('all-tasks')
const todayTab = document.getElementById('today')
const thisWeekTab = document.getElementById('this-week')

console.log(addTaskBtn)
console.log(document.getElementById('add-task'))

allTasksTab.addEventListener('click', createAllTasksTab)
todayTab.addEventListener('click', createTodayTab)
thisWeekTab.addEventListener('click', createThisWeekTab)

addTaskBtn.addEventListener('click', createAddTaskForm)

