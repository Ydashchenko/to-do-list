import { resetProjectForm, updateCounterForEachProject, updateProjectData } from "./dom-manipulation"
import { addRemoveProjectEventListeners } from ".."

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


export { projectsArray }