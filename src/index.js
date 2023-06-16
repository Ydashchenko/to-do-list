import './style.css';
import { blankProjectLoad } from './modules/blankProjectLoad';
import { createTodo } from './modules/create-todo';

blankProjectLoad()

const myToDo = createTodo('Work', 'Go to work', 'Feb 27th', 'high', false)
console.log(myToDo)