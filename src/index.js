import { blankProjectLoad, createProject, projectsArray } from './modules/create-projects';
import { blankToDosLoad, toDoArray } from './modules/create-todo';
import { createTodo } from './modules/create-todo';
import { updateCounters, projectTab, displayTheToDoForm, displayTheProjectForm, updateProjectData, updateAllTasksTab, updateCounterForEachProject, allTasksTab, todayTab, thisWeekTab, changeTab} from './modules/dom-manipulation';
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
    updateProjectData()
    //addProjectEventListeners()
    addRemoveProjectEventListeners()
    addToggleTaskCheckEventListeners()
}

export function addProjectEventListeners() {
    const projectTabs = document.querySelectorAll('.project')
    projectTabs.forEach((project) => {
        project.addEventListener('click', (event) => {
            if (event.target.classList.contains('edit-project') || event.target.classList.contains('remove-project')) {
                return
            }

            const projectName = project.querySelector('h4').textContent
            projectTab(projectName)
        })
    })
}


export function addRemoveProjectEventListeners() {
    const removeProjectImages = document.querySelectorAll(".remove-project");
    removeProjectImages.forEach((removeProjectImg) => {
        removeProjectImg.addEventListener('click', deleteProject)
    })
}

export function deleteProject(event) {
    const parent = event.target.closest('.project')
    let projectName = parent.querySelector('h4').innerHTML
    console.log(projectName)
    const indexToDelete = projectsArray.findIndex((project) => project.projectTitle === projectName)
    console.log(indexToDelete)
    console.log(projectsArray)

    // Delete all tasks of this project

    toDoArray = toDoArray.filter((task) => task.project !== projectName)
    console.log(projectsArray)
    // Delete the project itself
    projectsArray.splice(indexToDelete, 1)

    // Update data
    changeTab(currentTab)
    updateCounterForEachProject()
    updateProjectData()
    addRemoveProjectEventListeners()

    console.log("Here's toDoArray")
    console.log(toDoArray)
    
}

export function addToggleTaskCheckEventListeners() {
    const checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', toggleTaskCheck)
    })
}

export function toggleTaskCheck(event) {
    const parent = event.target.closest('.task')
    let taskName = parent.querySelector('h4').innerHTML
    const taskToUpdate = toDoArray.find((task) => task.title === taskName)
    console.log(taskToUpdate)
    const taskId = taskToUpdate.id
    toDoArray.forEach((task) => {
        if (task.id === taskId) {
            task.done = !task.done
        }
    })
    // Update all
    changeTab(currentTab)
    updateCounterForEachProject()
    updateProjectData()
    updateCounters()
    addRemoveProjectEventListeners()
}

export let currentTab = 'All tasks'

