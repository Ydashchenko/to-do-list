import { blankProjectLoad, createProject, projectsArray } from './modules/projects-data';
import { blankToDosLoad, toDoArray} from './modules/todo-data';
import { clickEventsModule, addRemoveProjectEventListeners, addViewTaskInfoEventListeners, addToggleTaskCheckEventListeners, addDeleteTaskCheckEventListeners, addEditTaskCheckEventListeners, addCloseDetailOverlayEventListener, addCloseEditOverlayEventListener, addConfirmEditEventListener } from './modules/event-listeners';
import { updateProjectData, updateAllTasksTab, updateCounterForEachProject,  displayTheToDoForm, displayTheProjectForm, allTasksTab, todayTab, thisWeekTab } from './modules/dom-manipulation';
import './style.css';

export let currentTab = 'All tasks'

init()

function init() {
    //blankProjectLoad()
    //blankToDosLoad()
    updateCounterForEachProject()
    updateAllTasksTab()
    updateProjectData()
    addRemoveProjectEventListeners()
    addViewTaskInfoEventListeners()
    addToggleTaskCheckEventListeners()
    addDeleteTaskCheckEventListeners()
    addEditTaskCheckEventListeners()
    addCloseDetailOverlayEventListener()
    addCloseEditOverlayEventListener()
    addConfirmEditEventListener()
    clickEventsModule()
}


