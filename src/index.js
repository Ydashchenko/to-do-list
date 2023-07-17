import { blankProjectLoad, createProject } from './modules/create-projects';
import { blankToDosLoad } from './modules/create-todo';
import { createTodo } from './modules/create-todo';
import {  displayTheToDoForm, displayTheProjectForm, updateAll, updateCounterForEachProject, allTasksTab, todayTab, allTasksTab, todayTab } from './modules/dom-manipulation';
import './style.css';

blankProjectLoad()
blankToDosLoad()
updateCounterForEachProject()
updateAll()

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
})()


