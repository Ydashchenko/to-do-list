import { toDoArray } from "./create-todo";
import { projectsArray } from "./create-projects";
import { currentTab, addProjectEventListeners, addRemoveProjectEventListeners } from "..";
import { parseISO, startOfDay, isToday, startOfWeek, isThisWeek, startOfMonth, isThisMonth } from 'date-fns'



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
        temp.classList.add('task')
        let tempIfChecked = ''
        if (toDoArray[d].done) {
            tempIfChecked = 'checked'
        }
        temp.innerHTML = `
        <input type="checkbox" class="checkbox" ${tempIfChecked}>
        <h4>${toDoArray[d].title}</h4>
        <p>${toDoArray[d].dueDate}</p>
        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
        `
        temp.classList.add(`${toDoArray[d].priority}-priority`)
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
        let tempIfChecked = ''
        if (toDoArray[d].done) {
            tempIfChecked = 'checked'
        }
        let currentDay = String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth()+1).padStart(2, "0");
        let currentYear = date.getFullYear();
        let todayDate = `${currentYear}-${currentMonth}-${currentDay}`
        if (todayDate === toDoArray[d].dueDate){

            let temp = document.createElement('div')
            temp.classList.add('task')
            temp.innerHTML = `
            <input type="checkbox" class="checkbox" ${tempIfChecked}>
            <h4>${toDoArray[d].title}</h4>
            <p>${toDoArray[d].dueDate}</p>
            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
            `
            temp.classList.add(`${toDoArray[d].priority}-priority`)
            // console.log(toDoArray[d].title)
            // console.log(toDoArray[d].dueDate)
            console.log(toDoArray[d].project)
            todayTasks.appendChild(temp)
            console.log(todayTasks)
        }
    }

}

export function updateThisWeekTab() {
    let thisWeekTasks = document.getElementById('task-list')
    thisWeekTasks.innerHTML = ''

    for (let d in toDoArray) {

        let tempIfChecked = ''
        if (toDoArray[d].done) {
            tempIfChecked = 'checked'
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
        let date = new Date(`${toDoArray[d].dueDate}`)
        console.log(date >= today.GetFirstDayOfWeek() && date <= today.GetLastDayOfWeek())
        if (date >= today.GetFirstDayOfWeek() && date <= today.GetLastDayOfWeek()){

            let temp = document.createElement('div')
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

    let thisProjectTasks = toDoArray.filter((task) => task.project === projectName)
    for (let task in thisProjectTasks) {
        let tempIfChecked = ''
        if (thisProjectTasks[task].done) {
            tempIfChecked = 'checked'
        }

        let temp = document.createElement('div')
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

}

export function updateCounters() {
    const allTasksCounter = document.getElementById('all-tasks-counter');
    const todayCounter = document.getElementById('today-counter');
    const thisWeekCounter = document.getElementById('this-week-counter');
  
    const today = startOfDay(new Date());
  
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
}

export function todayTab() {
    const h2 = document.getElementById('content-h2')
    h2.innerHTML = 'Today'
    currentTab = 'Today'
    updateTodayTab()
    updateProjectData()
    addRemoveProjectEventListeners()
}

export function thisWeekTab() {
    const h2 = document.getElementById('content-h2')
    h2.innerHTML = 'This week'
    currentTab = 'This week'
    updateThisWeekTab()
    updateProjectData()
    addRemoveProjectEventListeners()
}

export function projectTab(projectName) {
    const h2 = document.getElementById('content-h2')
    h2.innerHTML = projectName
    updateProjectTab(projectName)
    updateProjectData()
    addRemoveProjectEventListeners()
}

