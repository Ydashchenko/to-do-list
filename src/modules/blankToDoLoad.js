import { factoryToDo } from "./create-todo"

export function blankToDosLoad() {
    let toDoArray = []
    const myToDo1 = factoryToDo('Wash the dishes', 'Just wash the dishes lol', 'Feb 27th', 'high', false)
    toDoArray.push(myToDo1)
    const myToDo2 = factoryToDo('See friends', 'Spend some time with friends cuz your a hikka now', 'June 2nd', false)
    toDoArray.push(myToDo2)
    console.log(toDoArray)
    return { toDoArray, myToDo1, myToDo2 }
}
