let projectsArray = []

export const blankProjectLoad = () => {
    let projectTitle = 'Chores'
    let tasksInProject = 0
    projectsArray.push({ projectTitle,  tasksInProject})
    console.log(projectsArray) 
    return { projectsArray, projectTitle, tasksInProject }
}

export { projectsArray }