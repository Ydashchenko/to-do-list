import { compareAsc, format, parseISO, startOfToday } from "date-fns"
import { resetToDoForm, updateProjectData, updateCounterForEachProject, allTasksTab, todayTab, thisWeekTab } from "./dom-manipulation"
import { currentTab, addRemoveProjectEventListeners } from ".."

let toDoArray = []

export function factoryToDo(title, description, dueDate, priority, project, done) {
    return {
        title, description, dueDate, priority, project, done
    }
}

export function blankToDosLoad() {
    const myToDo1 = factoryToDo('Wash the dishes', 'Just wash the dishes lol', '2023-07-22', 'medium', 'Chores', true)
    toDoArray.push(myToDo1)

    const myToDo2 = factoryToDo('See the doctor', 'Have to know if you need this surgery', '2023-07-24', 'high', 'Health', false)
    toDoArray.push(myToDo2)

    const myToDo3 = factoryToDo('100 push ups', 'JUST DO IT', '2023-07-28', 'medium', 'Gym', true)
    toDoArray.push(myToDo3)

    const myToDo4 = factoryToDo('Make the bed', 'No one sees it except you so screw it', '2023-07-25', 'low', 'Chores', true)
    toDoArray.push(myToDo4)

    const myToDo5 = factoryToDo('Get to do list app done', 'You HAVE TO finish it', '2023-07-31', 'high', 'Education', false)
    toDoArray.push(myToDo5)

    const myToDo6 = factoryToDo('Watch naruto again', 'WHAT?', '2023-08-10', 'low', '', false)
    toDoArray.push(myToDo6)

    const myToDo7 = factoryToDo('Learn React', 'You need this', '2023-08-30', 'high', 'Education', false)
    toDoArray.push(myToDo7)

    const myToDo8 = factoryToDo('See friends', 'Spend some time with friends cuz your a hikka now', '2023-12-14', 'medium' , '', true)
    toDoArray.push(myToDo8)

    console.log(toDoArray)
    return { toDoArray, myToDo1, myToDo2, myToDo3, myToDo4, myToDo5, myToDo6, myToDo7, myToDo8 }
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
    addRemoveProjectEventListeners()

    return { title, description, dueDate, priority, project, done, toDoArray }
}



export { toDoArray }