import { parseISO, startOfToday } from "date-fns"
import { makeEditOverlayInvisible, makeEditOverlayVisible, resetToDoForm, updateProjectData, updateCounterForEachProject, changeTab, updateCounters } from "./dom-manipulation"
import { addEditTaskCheckEventListeners, addViewTaskInfoEventListeners, addRemoveProjectEventListeners, addToggleTaskCheckEventListeners, addDeleteTaskCheckEventListeners } from "./event-listeners"
import { currentTab } from ".."

//let toDoArray = []

const LOCAL_STORAGE_TO_DO_ARRAY = 'task.toDoArray'
const LOCAL_STORAGE_ID_COUNTER = 'task.idCounter'

let defaultToDoArray = []

blankToDosLoad()

let toDoArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TO_DO_ARRAY)) || defaultToDoArray
let idCounter = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID_COUNTER)) || -1


export function saveToDoArray() {
    localStorage.setItem(LOCAL_STORAGE_TO_DO_ARRAY, JSON.stringify(toDoArray))
    localStorage.setItem(LOCAL_STORAGE_ID_COUNTER, JSON.stringify(idCounter))
}


export function factoryToDo(id, title, description, dueDate, priority, project, done) {
    return {
        id, title, description, dueDate, priority, project, done
    }
}

export function blankToDosLoad() {
    const myToDo1 = factoryToDo(0, 'Wash the dishes', 'Just wash the dishes lol', '2023-07-23', 'Medium', 'Chores', true)
    defaultToDoArray.push(myToDo1)

    const myToDo2 = factoryToDo(1, 'See the doctor', 'Have to know if you need this surgery', '2023-07-24', 'High', 'Health', false)
    defaultToDoArray.push(myToDo2)

    const myToDo3 = factoryToDo(2, '100 push ups', 'JUST DO IT', '2023-07-28', 'Medium', 'Gym', true)
    defaultToDoArray.push(myToDo3)

    const myToDo4 = factoryToDo(3, 'Make the bed', 'No one sees it except you so screw it', '2023-07-25', 'Low', 'Chores', true)
    defaultToDoArray.push(myToDo4)

    const myToDo5 = factoryToDo(4, 'Get to do list app done', 'You HAVE TO finish it', '2023-07-31', 'High', 'Education', false)
    defaultToDoArray.push(myToDo5)

    const myToDo6 = factoryToDo(5, 'Watch naruto again', 'WHAT?', '2023-08-10', 'Low', '', false)
    defaultToDoArray.push(myToDo6)

    const myToDo7 = factoryToDo(6, 'Learn React', 'You need this', '2023-08-30', 'High', 'Education', false)
    defaultToDoArray.push(myToDo7)

    const myToDo8 = factoryToDo(7, 'See friends', 'Spend some time with friends cuz your a hikka now', '2023-12-14', 'Medium' , '', true)
    defaultToDoArray.push(myToDo8)

    return { toDoArray, myToDo1, myToDo2, myToDo3, myToDo4, myToDo5, myToDo6, myToDo7, myToDo8 }
}

export const createTodo = () => {
    let nope = false
    for (let a in toDoArray) {
        if (document.getElementById('input-title').value === toDoArray[a].title) {
            nope = true
            break
        }
    }

    if (nope) {
        alert('You have such task already!')
        resetToDoForm()
        return
    }

    let title = document.getElementById('input-title').value
    let description = document.getElementById('input-description').value
    let dueDate = document.getElementById('input-date').value
    let priority = document.getElementById('input-priority').value
    let project = document.getElementById('Project').value
    let done = false

    idCounter += 1
    let id = idCounter

    let newToDo = factoryToDo(id, title, description, dueDate, priority, project, false)

    if (title == "" || description == "" || dueDate == "") {
        alert("All the fields are required, please try again!")
        return
    }

    if (parseISO(dueDate) < startOfToday()) {
        alert('You have entered a date that has already passed!')
        return
    }

    toDoArray.push(newToDo)
    
    console.log(`${title} task has been created!`)
    updateCounterForEachProject()
    updateProjectData()
    resetToDoForm()
        
    changeTab(currentTab)

    addRemoveProjectEventListeners()
    addDeleteTaskCheckEventListeners()
    addToggleTaskCheckEventListeners()
    updateCounterForEachProject()
    addViewTaskInfoEventListeners()
    addEditTaskCheckEventListeners()
    saveToDoArray()

    return { id, title, description, dueDate, priority, project, done, toDoArray, idCounter }
}

export function confirmEditTask() {
    const neededId = document.getElementById('edit-popup-id').innerHTML
    let taskToEdit = toDoArray.find((task) => task.id == neededId)

    taskToEdit.title = document.querySelector('#edit-popup-title').value
    taskToEdit.description = document.querySelector('#edit-popup-details').value
    taskToEdit.dueDate = document.querySelector('#edit-popup-date').value
    taskToEdit.priority = document.querySelector('#edit-popup-priority').value
    
    console.log(`The task has been edited!`)
    makeEditOverlayInvisible()

    updateCounterForEachProject()
    updateProjectData()
    resetToDoForm()
        
    changeTab(currentTab)

    addRemoveProjectEventListeners()
    addDeleteTaskCheckEventListeners()
    addToggleTaskCheckEventListeners()
    updateCounterForEachProject()
    addViewTaskInfoEventListeners()
    addEditTaskCheckEventListeners()
    saveToDoArray()
}

export function toggleTaskCheck() {
    const parent = event.target.closest('.task')
    let taskName = parent.querySelector('h4').innerHTML
    const taskToUpdate = toDoArray.find((task) => task.title === taskName)

    const taskId = taskToUpdate.id
    toDoArray.forEach((task) => {
        if (task.id === taskId) {
            task.done = !task.done
        }
    })
    // Update all
    changeTab(currentTab)
    updateCounterForEachProject()
    updateProjectData()
    updateCounters()
    addRemoveProjectEventListeners()
    addDeleteTaskCheckEventListeners()
    addViewTaskInfoEventListeners()
    saveToDoArray()
}

export function deleteTask() {
    const parent = event.target.closest('.task')
    let taskName = parent.querySelector('h4').innerHTML
    toDoArray = toDoArray.filter((task) => task.title !== taskName)

    console.log(`The task has been deleted!`)
    // Update all
    changeTab(currentTab)
    updateCounterForEachProject()
    updateProjectData()
    updateCounters()
    addRemoveProjectEventListeners()
    addViewTaskInfoEventListeners()
    addEditTaskCheckEventListeners()
    saveToDoArray()
}


export function editTask() {
    const parent = event.target.closest('.task')
    let taskName = parent.querySelector('h4').innerHTML
    let neededTask = toDoArray.find((task) => task.title === taskName)
    document.querySelector('#edit-popup-title').value = neededTask.title
    document.querySelector('#edit-popup-details').value = neededTask.description
    document.querySelector('#edit-popup-date').value = neededTask.dueDate
    document.querySelector('#edit-popup-id').innerHTML = neededTask.id
    document.querySelector('#edit-popup-priority').value = neededTask.priority
    makeEditOverlayVisible()
}

export { toDoArray }