export function createTask(title, description, dueDate, priority, ifChecked) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        ifChecked: ifChecked
    }
}