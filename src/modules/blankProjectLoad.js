export const blankProjectLoad = () => {
    let projectsArray = []
    let projectTitle = 'Default project'
    projectsArray.push({ projectTitle })
    console.log(projectsArray)
    return { projectsArray, projectTitle }
}