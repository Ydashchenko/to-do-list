import { createTask } from "./create-task";

export function addNewTaskToArray() {
    const title = document.getElementById('input-title')
    const desk = document.getElementById('input-description')
    const date = document.getElementById('input-date')
    const priority = document.getElementById('priority')
    let task = createTask(title.innerHTML, desk.innerHTML, date.value, )
}