import { toDoArray } from "./todo-data";
import { projectsArray } from "./projects-data";
import { addEditTaskCheckEventListeners, addViewTaskInfoEventListeners, addProjectEventListeners, addRemoveProjectEventListeners, addToggleTaskCheckEventListeners, addDeleteTaskCheckEventListeners } from "./event-listeners";
import { parseISO, startOfDay, isToday, startOfWeek, isThisWeek, startOfMonth, isThisMonth } from 'date-fns'
import { currentTab } from "..";



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
        for (let t in toDoArray) {
            if (toDoArray[t].project === projectsArray[p].projectTitle && toDoArray[t].done === false) {
                tempCounter += 1
            }
        }
        if (tempCounter === 0) {
            tempCounter = ''
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
        let tempIfChecked = ''
        if (toDoArray[d].done) {
            tempIfChecked = 'checked'
            temp.classList.add('checked')
        }
        temp.classList.add('task')
        temp.innerHTML = `
        <input type="checkbox" class="checkbox" ${tempIfChecked}>
        <h4>${toDoArray[d].title}</h4>
        <p>${toDoArray[d].dueDate}</p>
        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
        `
        temp.classList.add(`${toDoArray[d].priority}-priority`)
        allTasks.appendChild(temp)
    }
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
            let tempIfChecked = ''
            if (toDoArray[d].done) {
                tempIfChecked = 'checked'
                temp.classList.add('checked')
            }
            temp.classList.add('task')
            temp.innerHTML = `
            <input type="checkbox" class="checkbox" ${tempIfChecked}>
            <h4>${toDoArray[d].title}</h4>
            <p>${toDoArray[d].dueDate}</p>
            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
            `
            temp.classList.add(`${toDoArray[d].priority}-priority`)
            todayTasks.appendChild(temp)
        }
    }
}

export function updateThisWeekTab() {
    let thisWeekTasks = document.getElementById('task-list')
    thisWeekTasks.innerHTML = ''
    
    for (let d in toDoArray) {
        let date = new Date(`${toDoArray[d].dueDate}`)
        if (isThisWeek(date)){
            let temp = document.createElement('div')
            let tempIfChecked = ''
            if (toDoArray[d].done) {
                tempIfChecked = 'checked'
                temp.classList.add('checked')
            }
    
            temp.classList.add('task')
            temp.innerHTML = `
            <input type="checkbox" class="checkbox" ${tempIfChecked}>
            <h4>${toDoArray[d].title}</h4>
            <p>${toDoArray[d].dueDate}</p>
            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
            `
            temp.classList.add(`${toDoArray[d].priority}-priority`)
            
            thisWeekTasks.appendChild(temp)
        }
    }
}

export function updateProjectTab(projectName) {
    let taskList = document.getElementById('task-list')
    taskList.innerHTML = ''
    currentTab = projectName
    let thisProjectTasks = toDoArray.filter((task) => task.project === projectName)
    for (let task in thisProjectTasks) {
        let temp = document.createElement('div')
        let tempIfChecked = ''
        if (thisProjectTasks[task].done) {
            tempIfChecked = 'checked'
            temp.classList.add('checked')
        } 
        temp.classList.add('task')
        temp.innerHTML = `
        <input type="checkbox" class="checkbox" ${tempIfChecked}>
        <h4>${thisProjectTasks[task].title}</h4>
        <p>${thisProjectTasks[task].dueDate}</p>
        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
        `
        temp.classList.add(`${thisProjectTasks[task].priority}-priority`)
        taskList.appendChild(temp)
    }
    return { thisProjectTasks }
}

export function updateProjectData() {
    // Update all projects in project list
    let allProjects = document.getElementById('project-list')
    allProjects.innerHTML = ''
    for (let p in projectsArray) {
        let tempP = document.createElement('div')
        tempP.classList.add('project')
        tempP.innerHTML = `
        <img class="project-logo" src="../src/images/project-logo.png" alt="Project Logo">
        <h4>${projectsArray[p].projectTitle}</h4>
        
        <img class="remove-project" src="../src/images/delete.png" alt="Delete logo">
        <p class="counter">${projectsArray[p].tasksInProject}</p>
        `

        allProjects.appendChild(tempP)
    }
    


    // Update project dropdown
    let projectDropDown = document.getElementById('Project')
    projectDropDown.innerHTML = ``
    let noProject = document.createElement('option')
    noProject.value = ''
    noProject.innerHTML = '(No Project)'
    projectDropDown.appendChild(noProject)
    for (let o in projectsArray) {
        let tempO = document.createElement('option')
        tempO.value = projectsArray[o].projectTitle
        tempO.innerHTML = projectsArray[o].projectTitle
        projectDropDown.appendChild(tempO)
    }

    updateCounters()
    addProjectEventListeners()
    addToggleTaskCheckEventListeners()
    addRemoveProjectEventListeners()
    addDeleteTaskCheckEventListeners()
    addViewTaskInfoEventListeners()
    addEditTaskCheckEventListeners()
}

export function updateCounters() {
    const allTasksCounter = document.getElementById('all-tasks-counter');
    const todayCounter = document.getElementById('today-counter');
    const thisWeekCounter = document.getElementById('this-week-counter');
  
    const allTasks = toDoArray.filter(task => !task.done);
    allTasks.length === 0 ? allTasksCounter.innerHTML = '' : allTasksCounter.innerHTML = allTasks.length;

    const todayTasks = toDoArray.filter(task => isToday(parseISO(task.dueDate)) && !task.done);
    todayTasks.length === 0 ? todayCounter.innerHTML = '' : todayCounter.innerHTML = todayTasks.length;
  
    const thisWeekTasks = toDoArray.filter(task => isThisWeek(parseISO(task.dueDate)) && !task.done);
    thisWeekTasks.length === 0 ? thisWeekCounter.innerHTML = '' : thisWeekCounter.innerHTML = thisWeekTasks.length;
}

export function allTasksTab() {
    const h2 = document.getElementById('content-h2')
    h2.innerHTML = 'All tasks'
    currentTab = 'All tasks'
    updateAllTasksTab()
    updateProjectData()
    addRemoveProjectEventListeners()
    addViewTaskInfoEventListeners()
    addEditTaskCheckEventListeners()
}

export function todayTab() {
    const h2 = document.getElementById('content-h2')
    h2.innerHTML = 'Today'
    currentTab = 'Today'
    updateTodayTab()
    updateProjectData()
    addRemoveProjectEventListeners()
    addViewTaskInfoEventListeners()
    addEditTaskCheckEventListeners()
}

export function thisWeekTab() {
    const h2 = document.getElementById('content-h2')
    h2.innerHTML = 'This week'
    currentTab = 'This week'
    updateThisWeekTab()
    updateProjectData()
    addRemoveProjectEventListeners()
    addViewTaskInfoEventListeners()
    addEditTaskCheckEventListeners()
    
}

export function projectTab(projectName) {
    const h2 = document.getElementById('content-h2')
    h2.innerHTML = projectName
    updateProjectTab(projectName)
    updateProjectData()
    addRemoveProjectEventListeners()
    addViewTaskInfoEventListeners()
    addEditTaskCheckEventListeners()
}

export function changeTab(tab) {
    if (tab == 'All tasks') {
        allTasksTab()
    } else if (tab == 'Today') {
        todayTab()
    } else if (tab == 'This week') {
        thisWeekTab()
    } else {
        projectTab(tab)
    }
}

export function makeDetailOverlayInvisible() {
    const detailOverlay = document.querySelector('.overlay-details')
    detailOverlay.classList.add('overlay-details-invisible')
}

export function makeDetailOverlayVisible() {
    const detailOverlay = document.querySelector('.overlay-details')
    detailOverlay.classList.remove('overlay-details-invisible')
}

export function makeEditOverlayInvisible() {
    const editOverlay = document.querySelector('.overlay-edit')
    editOverlay.classList.add('overlay-edit-invisible')
}

export function makeEditOverlayVisible() {
    const editOverlay = document.querySelector('.overlay-edit')
    editOverlay.classList.remove('overlay-edit-invisible')
}

export function viewTask() {
    const parent = event.target.closest('.task')
    let taskName = parent.querySelector('h4').innerHTML
    let neededTask = toDoArray.find((task) => task.title === taskName)
    console.log(`Here's ${taskName} task.`)
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
