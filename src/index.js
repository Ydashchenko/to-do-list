import { blankProjectLoad } from './modules/blankProjectLoad';
import { blankToDosLoad } from './modules/create-todo';
import { createTodo } from './modules/create-todo';
import {  displayTheForm, updateAll, updateCounterForEachProject} from './modules/dom-manipulation';
import './style.css';

blankProjectLoad()
blankToDosLoad()
updateCounterForEachProject()
updateAll()

let clickEventsModule = (function() {
    const displayTheFormButton = document.getElementById('add-task')
    displayTheFormButton.addEventListener('click', displayTheForm)

    const submitButton = document.getElementById('submit-add-task')
    submitButton.addEventListener('click', createTodo)
})()


