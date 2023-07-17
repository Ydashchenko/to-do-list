import { blankProjectLoad} from "./create-projects";
import { toDoArray } from "./create-todo";
import { projectsArray } from "./create-projects";

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

export function displayTheToDoForm() {
    document.getElementById('add-task-form').style.display = 'grid'
    document.getElementById('add-task').style.display = 'none'
}

export function displayTheProjectForm() {
    document.getElementById('add-project-form').style.display = 'grid'
    document.getElementById('add-project').style.display = 'none'
}

export function resetToDoForm() {
    document.getElementById('input-title').value = ''
    document.getElementById('input-description').value = ''
    document.getElementById('input-date').value = ''
    document.getElementById('add-task').style.display = 'flex'
    document.getElementById('add-task-form').style.display = 'none'
}

export function resetProjectForm() {
    document.getElementById('input-project-name').value = ''
    document.getElementById('add-project').style.display = 'flex'
    document.getElementById('add-project-form').style.display = 'none'
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

    updateCounters()


}

export function updateCounters() {
    // Update all counters
    let allTasksCounter = document.getElementById('all-tasks-counter')
    let todayCounter = document.getElementById('today-counter')
    let thisWeekCounter = document.getElementById('this-week-counter')
    let projectCounter = document.getElementById('project-counter')

    let unCheckedTasks = []
    
    for (let u in toDoArray) {
        if (toDoArray[u].done == false) {
            unCheckedTasks.push(toDoArray[u])
        }
    }

    allTasksCounter.innerHTML = unCheckedTasks.length
    projectCounter.innerHTML = projectsArray.length
}

export function allTasksTab() {
    const content = document.getElementById('content')

    content.innerHTML = `
    <h2>All tasks</h2>
                <div id="task-list">
                <!--
                    <div class="task">
                        <input type="checkbox" class="checkbox">
                        <h4>Wash the dishes</h4>
                        <p>Feb 27th</p>
                        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
                        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
                    </div>
                    <div class="task">
                        <input type="checkbox" class="checkbox">
                        <h4>See friends</h4>
                        <p>Nov 4th</p>
                        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
                        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
                    </div>
                -->
                </div>
                
                <button class="add-button" id="add-task"> <img src="../src/images/add-logo.png" alt="Add Logo"> Add Task</button>

                <form id="add-task-form" method="post">
                    <h4>New task:</h4>
                    <select name="Project" id="Project">
                        <!--
                        <option value="default-project">Chores</option>
                        <option value="create-new-project">Create New Project</option>
                        -->
                    </select>
                    <input id="input-title" type="text" placeholder='Title:' required>
                    <input id="input-description" type="text" placeholder="Description:" required>
                    <input id='input-date' type="date" required>
                    <select id="input-priority">
                        <option id="low">Low</option>
                        <option id="medium">Medium</option>
                        <option id="high">High</option>
                    </select>
                    <button id="submit-add-task" type="button" class="add-button submit-button"><img src="../src/images/add-logo.png" alt="Add Logo">Add To Tasks</button>
                </form>
    `
}

export function todayTab() {
    const mainContainer = document.getElementById('main-container')

    mainContainer.innerHTML = ''

}
