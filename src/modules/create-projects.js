import { compareAsc, format, parseISO, startOfToday } from "date-fns"
import { resetProjectForm, updateCounterForEachProject, updateProjectData } from "./dom-manipulation"

let projectsArray = []

export function factoryProject(projectTitle, tasksInProject) {
    return {
        projectTitle, tasksInProject
    }
}

export const blankProjectLoad = () => {
    const myProject1 = factoryProject('Chores', 0)
    projectsArray.push(myProject1)
    console.log(projectsArray)
    return { projectsArray, myProject1 }
    /*
    let projectTitle = 'Chores'
    let tasksInProject = 0
    projectsArray.push({ projectTitle,  tasksInProject})
    console.log(projectsArray) 
    return { projectsArray, projectTitle, tasksInProject }
    */
}

export const createProject = () => {
    let projectTitle = document.getElementById('input-project-name').value

    let newProject = factoryProject(projectTitle, 0)
    
    if (projectTitle == "") {
        alert("Input the project name, please!")
        return
    }

    projectsArray.push(newProject)
    console.log(projectsArray)
    
    resetProjectForm()
    updateCounterForEachProject()
    updateProjectData()

    return { projectTitle, tasksInProject, projectsArray }

}

export { projectsArray }