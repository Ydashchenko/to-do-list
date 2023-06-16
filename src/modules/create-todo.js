let toDoArray = []

export const createTodo = (title, description, dueDate, priority, done) => {
    toDoArray.push({ title, description, dueDate, priority, done })
    return { title, description, dueDate, priority, done}
}