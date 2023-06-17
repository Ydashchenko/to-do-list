import { compareAsc, format, parseISO, startOfToday } from "date-fns"
import { clearForm } from "./dom-manipulation"

let toDoArray = []

export function factoryToDo(title, description, dueDate, priority, done) {
    return {
        title, description, dueDate, priority, done
    }
}

export const createTodo = () => {
    let title = document.getElementById('input-title').value
    let description = document.getElementById('input-description').value
    let dueDate = document.getElementById('input-date').value
    let priority = document.getElementById('input-priority').value
    let done = false

    if (parseISO(dueDate) < startOfToday()) {
        alert('You have entered a date that has already passed!')
        console.log('Due date: ', parseISO(dueDate))
        console.log('Date now: ', startOfToday())
        return
    }

    toDoArray.push({ title, description, dueDate, priority, done })
    console.log(toDoArray)

    return { title, description, dueDate, priority, done }
}