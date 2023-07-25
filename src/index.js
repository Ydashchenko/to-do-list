import { blankProjectLoad, createProject, projectsArray } from './modules/projects-data';
import { blankToDosLoad, toDoArray } from './modules/todo-data';
import { createTodo, confirmEditTask } from './modules/todo-data';
import { makeEditOverlayVisible, makeEditOverlayInvisible, makeDetailOverlayVisible, makeDetailOverlayInvisible, updateCounters, projectTab, displayTheToDoForm, displayTheProjectForm, updateProjectData, updateAllTasksTab, updateCounterForEachProject, allTasksTab, todayTab, thisWeekTab, changeTab} from './modules/dom-manipulation';
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
    addRemoveProjectEventListeners()
    addViewTaskInfoEventListeners()
    addToggleTaskCheckEventListeners()
    addDeleteTaskCheckEventListeners()
    addEditTaskCheckEventListeners()
    addCloseDetailOverlayEventListener()
    addCloseEditOverlayEventListener()
    addConfirmEditEventListener()
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
    addViewTaskInfoEventListeners()

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
    addDeleteTaskCheckEventListeners()
    addViewTaskInfoEventListeners()
}

export function addDeleteTaskCheckEventListeners() {
    const deleteBtns = document.querySelectorAll('.remove-task')
    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', deleteTask)
    })
}

export function deleteTask(event) {
    const parent = event.target.closest('.task')
    let taskName = parent.querySelector('h4').innerHTML
    toDoArray = toDoArray.filter((task) => task.title !== taskName)
    console.log(toDoArray)
    // Update all
    changeTab(currentTab)
    updateCounterForEachProject()
    updateProjectData()
    updateCounters()
    addRemoveProjectEventListeners()
    addViewTaskInfoEventListeners()
    addEditTaskCheckEventListeners()
}

export function addViewTaskInfoEventListeners() {
    const viewBtns = document.querySelectorAll('.task')
    viewBtns.forEach((viewBtn) => { 
        viewBtn.addEventListener('click', (e) => {
            if (e.target.classList.contains('checkbox') || e.target.classList.contains('edit-task') || e.target.classList.contains('remove-task')) {
                return
            }
            viewTask()
        })
    })
}

export function viewTask() {
    const parent = event.target.closest('.task')
    let taskName = parent.querySelector('h4').innerHTML
    let neededTask = toDoArray.find((task) => task.title === taskName)
    console.log(neededTask)
    document.querySelector('.details-popup-title').innerHTML = neededTask.title
    if (neededTask.project === '') {
        document.querySelector('.details-popup-project').innerHTML = '(No project)'
    } else {
        document.querySelector('.details-popup-project').innerHTML = neededTask.project
    }
    document.querySelector('.details-popup-priority').innerHTML = neededTask.priority
    document.querySelector('.details-popup-duedate').innerHTML = neededTask.dueDate
    document.querySelector('.details-popup-details').innerHTML = neededTask.description
    document.querySelector('.details-popup-id').innerHTML = neededTask.id
    makeDetailOverlayVisible()
    
}

export function addEditTaskCheckEventListeners() {
    const editBtns = document.querySelectorAll('.edit-task')
    editBtns.forEach((editBtn) => {
        editBtn.addEventListener('click', editTask)
    })
}

export function editTask() {
    const parent = event.target.closest('.task')
    let taskName = parent.querySelector('h4').innerHTML
    let neededTask = toDoArray.find((task) => task.title === taskName)
    console.log(neededTask)
    document.querySelector('#edit-popup-title').value = neededTask.title
    document.querySelector('#edit-popup-details').value = neededTask.description
    document.querySelector('#edit-popup-date').value = neededTask.dueDate
    document.querySelector('#edit-popup-id').innerHTML = neededTask.id
    document.querySelector('#edit-popup-priority').value = neededTask.priority
    makeEditOverlayVisible()
}

export function addCloseDetailOverlayEventListener() {
    const detailOverlayCloseButton = document.getElementById('details-popup-close')
    console.log(detailOverlayCloseButton)
    detailOverlayCloseButton.addEventListener('click', makeDetailOverlayInvisible)
}

export function addCloseEditOverlayEventListener() {
    const editOverlayCloseButton = document.querySelector('.edit-popup-close')
    console.log(editOverlayCloseButton)
    editOverlayCloseButton.addEventListener('click', makeEditOverlayInvisible)
}

export function addConfirmEditEventListener() {
    const confirmEditButton = document.querySelector('#confirm-edit-task')
    confirmEditButton.addEventListener('click', confirmEditTask)
}

export let currentTab = 'All tasks'

