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

export function updateAllTasksTab() {
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
        console.log(toDoArray[d].priority)
        temp.style.border = `${toDoArray[d].priority} solid 3px`
        console.log(temp.style.border)
        // console.log(toDoArray[d].title)
        // console.log(toDoArray[d].dueDate)
        console.log(toDoArray[d].project)
        allTasks.appendChild(temp)
    }
    console.log(toDoArray)
}

export function updateTodayTab() {
    let todayTasks = document.getElementById('task-list')
    todayTasks.innerHTML = ''
    for (let d in toDoArray) {
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth()+1).padStart(2, "0");
        let currentYear = date.getFullYear();
        let todayDate = `${currentYear}-${currentMonth}-${currentDay}`
        if (todayDate === toDoArray[d].dueDate){

            let temp = document.createElement('div')
            temp.classList.add('task')
            temp.innerHTML = `
            <input type="checkbox" class="checkbox">
            <h4>${toDoArray[d].title}</h4>
            <p>${toDoArray[d].dueDate}</p>
            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
            `
            console.log(toDoArray[d].priority)
            temp.style.border = `${toDoArray[d].priority} solid 3px`
            console.log(temp.style.border)
            // console.log(toDoArray[d].title)
            // console.log(toDoArray[d].dueDate)
            console.log(toDoArray[d].project)
            todayTasks.appendChild(temp)
        }
    }
}

export function updateThisWeekTab() {
    let thisWeekTasks = document.getElementById('task-list')
    thisWeekTasks.innerHTML = ''

    for (let d in toDoArray) {
        Date.prototype.GetFirstDayOfWeek = function() {
            return (new Date(this.setDate(this.getDate() - this.getDay()+ (this.getDay() == 0 ? -6:1) )));
        }
        Date.prototype.GetLastDayOfWeek = function() {
            return (new Date(this.setDate(this.getDate() - this.getDay() +7)));
        }
        
        var today = new Date();
        
        //alert(today.GetFirstDayOfWeek());
        
        //alert(today.GetLastDayOfWeek());
        let date = new Date(`${toDoArray[d].dueDate}`)
        console.log(date >= today.GetFirstDayOfWeek() && date <= today.GetLastDayOfWeek())
        if (date >= today.GetFirstDayOfWeek() && date <= today.GetLastDayOfWeek()){

            let temp = document.createElement('div')
            temp.classList.add('task')
            temp.innerHTML = `
            <input type="checkbox" class="checkbox">
            <h4>${toDoArray[d].title}</h4>
            <p>${toDoArray[d].dueDate}</p>
            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
            `
            temp.style.border = `${toDoArray[d].priority} solid 3px`
            thisWeekTasks.appendChild(temp)
        }
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
    const h2 = document.getElementById('content-h2')
    h2.innerHTML = 'All tasks'
    
    updateAllTasksTab()
    updateAll()
}

export function todayTab() {
    const h2 = document.getElementById('content-h2')
    h2.innerHTML = 'Today'

    updateTodayTab()
    updateAll()
}

export function thisWeekTab() {
    const h2 = document.getElementById('content-h2')
    h2.innerHTML = 'This week'

    updateThisWeekTab()
    updateAll()
}
