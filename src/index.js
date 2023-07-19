import { blankProjectLoad, createProject } from './modules/create-projects';
import { blankToDosLoad } from './modules/create-todo';
import { createTodo } from './modules/create-todo';
import {  displayTheToDoForm, displayTheProjectForm, updateAll, updateAllTasksTab, updateCounterForEachProject, allTasksTab, todayTab, thisWeekTab } from './modules/dom-manipulation';
import './style.css';

init()

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
})()

export function init() {
    blankProjectLoad()
    blankToDosLoad()
    updateCounterForEachProject()
    updateAllTasksTab()
    updateAll()
}

Date.prototype.GetFirstDayOfWeek = function() {
    return (new Date(this.setDate(this.getDate() - this.getDay()+ (this.getDay() == 0 ? -6:1) )));
}
Date.prototype.GetLastDayOfWeek = function() {
    return (new Date(this.setDate(this.getDate() - this.getDay() +7)));
}

var today = new Date();

//alert(today.GetFirstDayOfWeek());

//alert(today.GetLastDayOfWeek());

let justDate = new Date('2023-07-12')
console.log(justDate > today.GetFirstDayOfWeek())



