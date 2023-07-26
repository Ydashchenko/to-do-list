import { resetProjectForm, updateCounterForEachProject, updateProjectData, changeTab } from "./dom-manipulation"
import { toDoArray, saveToDoArray } from "./todo-data"
import { addRemoveProjectEventListeners, addViewTaskInfoEventListeners } from "./event-listeners"
import { currentTab } from ".."

//let projectsArray = []

const LOCAL_STORAGE_PROJECT_ARRAY = 'task.projectsArray'

let defaultProjectArray = []

blankProjectLoad()

let projectsArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_ARRAY)) || defaultProjectArray

export function saveProjectArray() {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_ARRAY, JSON.stringify(projectsArray))
}

export function factoryProject(projectTitle, tasksInProject) {
    return {
        projectTitle, tasksInProject
    }
}

export function blankProjectLoad() {
    const chores = factoryProject('Chores', 0)
    defaultProjectArray.push(chores)
    
    const gym = factoryProject('Gym', 0)
    defaultProjectArray.push(gym)

    const education = factoryProject('Education', 0)
    defaultProjectArray.push(education)

    const health = factoryProject('Health', 0)
    defaultProjectArray.push(health)

    return { projectsArray, chores, gym, education, health }
}

export const createProject = () => {
    let nope = false
    for (let a in projectsArray) {
        if (document.getElementById('input-project-name').value === projectsArray[a].projectTitle) {
            nope = true
            break
        }
    }

    if (nope) {
        alert('You have such project already!')
        resetProjectForm()
        return
    }

    let projectTitle = document.getElementById('input-project-name').value
    let tasksInProject = 0

    let newProject = factoryProject(projectTitle, tasksInProject)
    
    if (projectTitle == "") {
        alert("Input the project name, please!")
        return
    }

    projectsArray.push(newProject)
    console.log(projectsArray)
    
    resetProjectForm()
    updateCounterForEachProject()
    updateProjectData()
    addRemoveProjectEventListeners()
    saveToDoArray()
    saveProjectArray()
    

    return { projectTitle, tasksInProject, projectsArray }

}


export function deleteProject() {
    const parent = event.target.closest('.project')
    let projectName = parent.querySelector('h4').innerHTML
    console.log(projectName)
    const indexToDelete = projectsArray.findIndex((project) => project.projectTitle === projectName)
    console.log(indexToDelete)
    console.log(projectsArray)

    // Delete all tasks of this project
    toDoArray = toDoArray.filter((task) => task.project !== projectName)
    saveToDoArray()

    // Delete the project itself
    projectsArray.splice(indexToDelete, 1)

    // Update data
    changeTab(currentTab)
    updateCounterForEachProject()
    updateProjectData()
    addRemoveProjectEventListeners()
    addViewTaskInfoEventListeners()
    saveProjectArray()

    console.log("Here's toDoArray")
    console.log(toDoArray)
    
}

export { projectsArray }