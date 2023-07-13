import { blankProjectLoad } from "./blankProjectLoad";
import { toDoArray } from "./create-todo";

export function displayDefaultProject() {
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
}

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

export function displayToDo() {
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
        console.log(toDoArray[d].title)
        console.log(toDoArray[d].dueDate)
        allTasks.appendChild(temp)
    }
}

