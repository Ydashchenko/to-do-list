export const blankProjectLoad = () => {
    let projectsArray = []
    let projectTitle = 'Chores'
    projectsArray.push({ projectTitle })
    console.log(projectsArray)
    return { projectsArray, projectTitle }
}