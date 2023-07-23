import { compareAsc, format, parseISO, startOfToday } from "date-fns"
import { resetToDoForm, updateProjectData, updateCounterForEachProject, changeTab } from "./dom-manipulation"
import { currentTab, addRemoveProjectEventListeners, addToggleTaskCheckEventListeners } from ".."

let toDoArray = []
let idCounter = 7

export function factoryToDo(id, title, description, dueDate, priority, project, done) {
    return {
        id, title, description, dueDate, priority, project, done
    }
}

export function blankToDosLoad() {
    const myToDo1 = factoryToDo(0, 'Wash the dishes', 'Just wash the dishes lol', '2023-07-22', 'Medium', 'Chores', true)
    toDoArray.push(myToDo1)

    const myToDo2 = factoryToDo(1, 'See the doctor', 'Have to know if you need this surgery', '2023-07-24', 'High', 'Health', false)
    toDoArray.push(myToDo2)

    const myToDo3 = factoryToDo(2, '100 push ups', 'JUST DO IT', '2023-07-28', 'Medium', 'Gym', true)
    toDoArray.push(myToDo3)

    const myToDo4 = factoryToDo(3, 'Make the bed', 'No one sees it except you so screw it', '2023-07-25', 'Low', 'Chores', true)
    toDoArray.push(myToDo4)

    const myToDo5 = factoryToDo(4, 'Get to do list app done', 'You HAVE TO finish it', '2023-07-31', 'High', 'Education', false)
    toDoArray.push(myToDo5)

    const myToDo6 = factoryToDo(5, 'Watch naruto again', 'WHAT?', '2023-08-10', 'Low', '', false)
    toDoArray.push(myToDo6)

    const myToDo7 = factoryToDo(6, 'Learn React', 'You need this', '2023-08-30', 'High', 'Education', false)
    toDoArray.push(myToDo7)

    const myToDo8 = factoryToDo(7, 'See friends', 'Spend some time with friends cuz your a hikka now', '2023-12-14', 'Medium' , '', true)
    toDoArray.push(myToDo8)

    console.log(toDoArray)
    return { toDoArray, myToDo1, myToDo2, myToDo3, myToDo4, myToDo5, myToDo6, myToDo7, myToDo8 }
}

export const createTodo = () => {
    idCounter += 1
    let id = idCounter
    let title = document.getElementById('input-title').value
    let description = document.getElementById('input-description').value
    let dueDate = document.getElementById('input-date').value
    let priority = document.getElementById('input-priority').value
    let project = document.getElementById('Project').value
    let done = false

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
    console.log(toDoArray)
    
    updateCounterForEachProject()
    updateProjectData()
    resetToDoForm()
        
    changeTab(currentTab)

    addRemoveProjectEventListeners()
    addToggleTaskCheckEventListeners()
    updateCounterForEachProject()

    return { id, title, description, dueDate, priority, project, done, toDoArray, idCounter }
}





export { toDoArray }