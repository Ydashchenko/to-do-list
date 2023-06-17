import { blankProjectLoad } from './modules/blankProjectLoad';
import { createTodo, blankToDosLoad } from './modules/create-todo';
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


