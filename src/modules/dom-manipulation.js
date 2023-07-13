import { blankProjectLoad} from "./blankProjectLoad";
import { toDoArray } from "./create-todo";
import { projectsArray } from "./blankProjectLoad";

/* export function displayDefaultProject() {
    const projectList = document.getElementById('project-list')
    const defaultProject = document.createElement('div')
    defaultProject.innerHTML = `
    <img class="project-logo" src="../src/images/project-logo.png" alt="Project Logo">
    <h4>Chores</h4>
    <img class="edit-project" src="../src/images/edit-logo.png" alt="Edit logo">
    <img class="remove-project" src="../src/images/delete.png" alt="Delete logo">
    <p class="counter">1</p>
    `
    projectList.appendChild(defaultProject)
    defaultProject.className = 'project'
} */

export function displayTheForm() {
    document.getElementById('add-task-form').style.display = 'grid'
    document.getElementById('add-task').style.display = 'none'
}

export function resetForm() {
    document.getElementById('input-title').value = ''
    document.getElementById('input-description').value = ''
    document.getElementById('input-date').value = ''
    document.getElementById('add-task').style.display = 'flex'
    document.getElementById('add-task-form').style.display = 'none'
}

export function updateCounterForEachProject() {
    for (let p in projectsArray) {
        let tempCounter = 0
        console.log(projectsArray[p])
        for (let t in toDoArray) {
            if (toDoArray[t].project === projectsArray[p].projectTitle) {
                tempCounter += 1
            }
        }
        projectsArray[p].tasksInProject = tempCounter

    }
}

export function updateAll() {
    // Update all projects in project list
    let allProjects = document.getElementById('project-list')
    allProjects.innerHTML = ''
    for (let p in projectsArray) {
        let tempP = document.createElement('div')
        tempP.classList.add('project')
        tempP.innerHTML = `
        <img class="project-logo" src="../src/images/project-logo.png" alt="Project Logo">
        <h4>${projectsArray[p].projectTitle}</h4>
        <img class="edit-project" src="../src/images/edit-logo.png" alt="Edit logo">
        <img class="remove-project" src="../src/images/delete.png" alt="Delete logo">
        <p class="counter">${projectsArray[p].tasksInProject}</p>
        `

        allProjects.appendChild(tempP)
    }


    // Update project dropdown
    let projectDropDown = document.getElementById('Project')
    projectDropDown.innerHTML = ''
    for (let o in projectsArray) {
        let tempO = document.createElement('option')
        tempO.value = projectsArray[o].projectTitle
        tempO.innerHTML = projectsArray[o].projectTitle
        projectDropDown.appendChild(tempO)
    }

    // Update all tasks in all task list
    let allTasks = document.getElementById('task-list')
    allTasks.innerHTML = ''
    for (let d in toDoArray) {
        let temp = document.createElement('div')
        temp.classList.add('task')
        temp.innerHTML = `
        <input type="checkbox" class="checkbox">
        <h4>${toDoArray[d].title}</h4>
        <p>${toDoArray[d].dueDate}</p>
        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
        `
        // console.log(toDoArray[d].title)
        // console.log(toDoArray[d].dueDate)
        console.log(toDoArray[d].project)
        allTasks.appendChild(temp)
    }
    console.log(toDoArray)


    // Update all counters
    let allTasksCounter = document.getElementById('all-tasks-counter')
    let todayCounter = document.getElementById('today-counter')
    let thisWeekCounter = document.getElementById('this-week-counter')
    let projectCounter = document.getElementById('project-counter')
    allTasksCounter.innerHTML = toDoArray.length
    projectCounter.innerHTML = projectsArray.length


}
