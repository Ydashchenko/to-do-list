import { displayToDo } from "./dom-manipulation"

export function saveToDoToLocal({ title, description, dueDate, priority, done }) {
    localStorage.setItem('title', document.getElementById('input-title').value)
    localStorage.setItem('description', document.getElementById('input-description').value)
    localStorage.setItem('dueDate', document.getElementById('input-date').value)
    localStorage.setItem('priority', document.getElementById('input-priority').value)
    localStorage.setItem('done', done)
    displayToDo()
    return { title, description, dueDate, priority, done }
}