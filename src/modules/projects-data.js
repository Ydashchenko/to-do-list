import { resetProjectForm, updateCounterForEachProject, updateProjectData, changeTab } from "./dom-manipulation"
import { toDoArray } from "./todo-data"
import { addRemoveProjectEventListeners, addViewTaskInfoEventListeners } from "./event-listeners"
import { currentTab } from ".."

let projectsArray = []

export function factoryProject(projectTitle, tasksInProject) {
    return {
        projectTitle, tasksInProject
    }
}

export const blankProjectLoad = () => {
    const chores = factoryProject('Chores', 0)
    projectsArray.push(chores)
    
    const gym = factoryProject('Gym', 0)
    projectsArray.push(gym)

    const education = factoryProject('Education', 0)
    projectsArray.push(education)

    const health = factoryProject('Health', 0)
    projectsArray.push(health)

    return { projectsArray, chores, gym, education, health }
}

export const createProject = () => {
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
    console.log(projectsArray)
    // Delete the project itself
    projectsArray.splice(indexToDelete, 1)

    // Update data
    changeTab(currentTab)
    updateCounterForEachProject()
    updateProjectData()
    addRemoveProjectEventListeners()
    addViewTaskInfoEventListeners()

    console.log("Here's toDoArray")
    console.log(toDoArray)
    
}

export { projectsArray }