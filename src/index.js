import { blankProjectLoad } from './modules/blankProjectLoad';
import { createTodo } from './modules/create-todo';
import { blankToDosLoad } from './modules/blankToDoLoad';
import { displayDefaultProject, displayTheForm } from './modules/dom-manipulation';
import './style.css';

blankProjectLoad()
displayDefaultProject()
blankToDosLoad()

let clickEventsModule = (function() {
    const displayTheFormButton = document.getElementById('add-task')
    displayTheFormButton.addEventListener('click', displayTheForm)

    const submitButton = document.getElementById('submit-add-task')
    submitButton.addEventListener('click', createTodo)
})()


