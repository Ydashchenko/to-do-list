import { compareAsc, format, parseISO, startOfToday } from "date-fns"
import { resetToDoForm, updateProjectData, updateCounterForEachProject, allTasksTab, todayTab, thisWeekTab } from "./dom-manipulation"
import { currentTab } from ".."

let toDoArray = []

export function factoryToDo(title, description, dueDate, priority, project, done) {
    return {
        title, description, dueDate, priority, project, done
    }
}

export function blankToDosLoad() {
    const myToDo1 = factoryToDo('Wash the dishes', 'Just wash the dishes lol', '2023-07-30', 'high', 'Chores', true)
    toDoArray.push(myToDo1)
    const myToDo2 = factoryToDo('See friends', 'Spend some time with friends cuz your a hikka now', '2023-12-14', 'medium' , '', false)
    toDoArray.push(myToDo2)
    console.log(toDoArray)
    return { toDoArray, myToDo1, myToDo2 }
}

export const createTodo = () => {
    let title = document.getElementById('input-title').value
    let description = document.getElementById('input-description').value
    let dueDate = document.getElementById('input-date').value
    let priority = document.getElementById('input-priority').value
    let project = document.getElementById('Project').value
    let done = false

    let newToDo = factoryToDo(title, description, dueDate, priority, project, false)

    if (title == "" || description == "" || dueDate == "") {
        alert("All the fields are required, please try again!")
        return
    }

    if (parseISO(dueDate) < startOfToday()) {
        alert('You have entered a date that has already passed!')
        console.log('Due date: ', parseISO(dueDate))
        console.log('Date now: ', startOfToday())
        return
    }

    toDoArray.push(newToDo)
    console.log(toDoArray)
    
    updateCounterForEachProject()
    updateProjectData()
    resetToDoForm()
    if (currentTab == 'All tasks') {
        allTasksTab()
    } else if (currentTab == 'Today') {
        todayTab()
    } else if (currentTab == 'This week') {
        thisWeekTab()
    }

    return { title, description, dueDate, priority, project, done, toDoArray }
}

export { toDoArray }