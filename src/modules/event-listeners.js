import { makeEditOverlayInvisible,  makeDetailOverlayInvisible, projectTab, displayTheToDoForm, displayTheProjectForm, allTasksTab, todayTab, thisWeekTab, viewTask } from "./dom-manipulation"
import { createTodo, toggleTaskCheck, deleteTask, editTask, confirmEditTask } from "./todo-data"
import { createProject, deleteProject } from "./projects-data"
import { currentTab } from ".."

// Permanent event listeners
export function clickEventsModule() {
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

    const toggleButton = document.getElementById("toggleNav");
    const navbar = document.querySelector("nav");
    const mainContainer = document.getElementById('main-container')
  
    toggleButton.addEventListener("click", function () {
        if (navbar.style.display === "flex") {
            navbar.style.display = "none";
            mainContainer.style.display = 'block'
        } else {
            navbar.style.display = "flex";
            mainContainer.style.display = 'none'
        }
    });

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

export function addToggleTaskCheckEventListeners() {
    const checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', toggleTaskCheck)
    })
}

export function addDeleteTaskCheckEventListeners() {
    const deleteBtns = document.querySelectorAll('.remove-task')
    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', deleteTask)
    })
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

export function addEditTaskCheckEventListeners() {
    const editBtns = document.querySelectorAll('.edit-task')
    editBtns.forEach((editBtn) => {
        editBtn.addEventListener('click', editTask)
    })
}

export function addCloseDetailOverlayEventListener() {
    const detailOverlayCloseButton = document.getElementById('details-popup-close')
    detailOverlayCloseButton.addEventListener('click', makeDetailOverlayInvisible)
}

export function addCloseEditOverlayEventListener() {
    const editOverlayCloseButton = document.querySelector('.edit-popup-close')
    editOverlayCloseButton.addEventListener('click', makeEditOverlayInvisible)
}

export function addConfirmEditEventListener() {
    const confirmEditButton = document.querySelector('#confirm-edit-task')
    confirmEditButton.addEventListener('click', confirmEditTask)
}

