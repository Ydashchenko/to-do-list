import { compareAsc, format, parseISO, startOfToday } from "date-fns"
import { displayToDo, resetForm, updateAll } from "./dom-manipulation"

let toDoArray = []

export function factoryToDo(title, description, dueDate, priority, project, done) {
    return {
        title, description, dueDate, priority, project, done
    }
}

export function blankToDosLoad() {
    const myToDo1 = factoryToDo('Wash the dishes', 'Just wash the dishes lol', 'Feb 27th', 'high', 'Chores', false)
    toDoArray.push(myToDo1)
    const myToDo2 = factoryToDo('See friends', 'Spend some time with friends cuz your a hikka now', 'June 2nd', 'medium' , '', false)
    toDoArray.push(myToDo2)
    console.log(toDoArray)
    return { toDoArray, myToDo1, myToDo2 }
}

export const createTodo = () => {
    let title = document.getElementById('input-title').value
    let description = document.getElementById('input-description').value
    let dueDate = document.getElementById('input-date').value
    let priority = document.getElementById('input-priority').value
    let project = document.getElementById('input-project')
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
    
    resetForm()
    updateCounterForEachProject()
    updateAll()

    return { title, description, dueDate, priority, project, done, toDoArray }
}

export { toDoArray }