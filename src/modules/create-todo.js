import { compareAsc, format, parseISO, startOfToday } from "date-fns"
import { resetForm } from "./dom-manipulation"
import { saveToDoToLocal } from "./manage-local-storage.js"

let toDoArray = []


export function factoryToDo(title, description, dueDate, priority, done) {
    return {
        title, description, dueDate, priority, done
    }
}

export function blankToDosLoad() {
    const myToDo1 = factoryToDo('Wash the dishes', 'Just wash the dishes lol', 'Feb 27th', 'high', false)
    toDoArray.push(myToDo1)
    const myToDo2 = factoryToDo('See friends', 'Spend some time with friends cuz your a hikka now', 'June 2nd', false)
    toDoArray.push(myToDo2)
    console.log(toDoArray)
    return { toDoArray, myToDo1, myToDo2 }
}

export const createTodo = () => {
    let title = document.getElementById('input-title').value
    let description = document.getElementById('input-description').value
    let dueDate = document.getElementById('input-date').value
    let priority = document.getElementById('input-priority').value
    let done = false

    let newToDo = factoryToDo(title, description, dueDate, priority, false)

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

    saveToDoToLocal({title, description, dueDate, priority, done})

    resetForm()

    return { title, description, dueDate, priority, done, toDoArray }
}