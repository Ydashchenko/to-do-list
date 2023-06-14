import { createTask } from "./create-task";

export function loadDefaultTasks() {
    let dishes = createTask('Wash the dishes', 'just wash the dishes lol', 'Feb 27th', 'high', false)
    let friends = createTask('See friends', 'hang out with friends', 'Oct 5th', 'low', false)

    let tasks = []

    tasks.push(dishes)
    tasks.push(friends)

    console.log(tasks)
}
