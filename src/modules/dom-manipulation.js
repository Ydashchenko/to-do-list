import { blankProjectLoad } from "./blankProjectLoad";

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

export function clearForm() {
    document.getElementById('input-title').value = ''
    document.getElementById('input-description').value = ''
    document.getElementById('input-date').value = ''
}

