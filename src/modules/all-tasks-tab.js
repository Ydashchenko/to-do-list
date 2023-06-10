export function createAllTasksTab() {
    const main = document.getElementById('main-container')

    main.innerHTML = `
    <div id="content">
    <h2>All tasks</h2>
    <div id="task-list">
    
        <div class="task">
            <input type="checkbox" class="checkbox">
            <h4>Wash the dishes</h4>
            <p>Feb 27th</p>
            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
        </div>
        <div class="task">
            <input type="checkbox" class="checkbox">
            <h4>See friends</h4>
            <p>Nov 4th</p>
            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">
            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">
        </div>
    </div>
    
    <button class="add-button" id="add-task"> <img src="../src/images/add-logo.png" alt="Add Logo"> Add Task</button>

    <div id="add-task-form">
        <h4>New task:</h4>
        <input id="input-title" type="text" placeholder='Title:' required>
        <input id="input-description" type="text" placeholder="Description:" required>
        <input id='input-date' type="date" required>
        <p id="priority">
            <label id="low">Low</label>
            <label id="medium">Medium</label>
            <label id="high">High</label>
        </p>
        <button id="submit-add-task" type="submit" class="add-button"><img src="../src/images/add-logo.png" alt="Add Logo">Add To Tasks</button>
    </div>
</div>
    `
}