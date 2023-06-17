import { blankProjectLoad } from './modules/blankProjectLoad';
import { createTodo, factoryToDo } from './modules/create-todo';
import { displayDefaultProject, displayTheForm } from './modules/dom-manipulation';
import './style.css';

blankProjectLoad()
displayDefaultProject()

let clickEventsModule = (function() {
    const displayTheFormButton = document.getElementById('add-task')
    displayTheFormButton.addEventListener('click', displayTheForm)

    const submitButton = document.getElementById('submit-add-task')
    submitButton.addEventListener('click', createTodo)
})()


const myToDo = factoryToDo('Work', 'Go to work', 'Feb 27th', 'high', false)
console.log('My todo: ', myToDo)
