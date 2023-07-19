import { blankProjectLoad, createProject } from './modules/create-projects';
import { blankToDosLoad } from './modules/create-todo';
import { createTodo } from './modules/create-todo';
import {  displayTheToDoForm, displayTheProjectForm, updateProjectData, updateAllTasksTab, updateCounterForEachProject, allTasksTab, todayTab, thisWeekTab, updateTodayTab, updateThisWeekTab} from './modules/dom-manipulation';
import './style.css';

let clickEventsModule = (function() {
    const displayTheToDoFormButton = document.getElementById('add-task')
    displayTheToDoFormButton.addEventListener('click', displayTheToDoForm)

    const submitButtonAddTask = document.getElementById('submit-add-task')
    submitButtonAddTask.addEventListener('click', createTodo)

    const displayTheProjectFormButton = document.getElementById('add-project')
    displayTheProjectFormButton.addEventListener('click', displayTheProjectForm)

    const submitButtonAddProject = document.getElementById('submit-add-project')
    submitButtonAddProject.addEventListener('click', createProject)

    const allTasksTabButton = document.getElementById('all-tasks')
    allTasksTabButton.addEventListener('click', allTasksTab)

    const todayTabButton = document.getElementById('today')
    todayTabButton.addEventListener('click', todayTab)

    const thisWeekTabButton = document.getElementById('this-week')
    thisWeekTabButton.addEventListener('click', thisWeekTab)

    const allCheckBoxes = document.querySelectorAll('.checkbox')
    allCheckBoxes.forEach(chB => {
        chB.addEventListener('click', event => {
            
        })
    })
})()

export function init() {
    blankProjectLoad()
    blankToDosLoad()
    updateCounterForEachProject()
    updateAllTasksTab()
    updateProjectData()
}

init()
export let currentTab = 'All tasks'

console.log(document.querySelectorAll('.checkbox').done)



