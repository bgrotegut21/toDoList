import element from "./elementEvents.js"
import dom from "./pageLayout.js";




const app = () => {
   
    let domElements;
    let projectTasks = [];





    const getUpdatedElements = () => {
        let editItems = Array.from(document.getElementsByClassName("editProject"));
        let deleteProjects = Array.from(document.getElementsByClassName("deleteProject"));
        let addProjectLabels = Array.from(document.getElementsByClassName("addProjectLabel"));
        return {editItems, deleteProjects, addProjectLabels};
    }

    const removeNavigationBindings = () => {
        let updatedItems = getUpdatedElements();
        element.removeBindings(updatedItems.editItems,editItem,"click");
        element.removeBindings(updatedItems.deleteProjects, deleteItem, "click");
        element.removeBindings(updatedItems.addProjectLabels,createProjectTasks, "click");


    }

    const addNavigationBindings = () => {
        let updatedItems = getUpdatedElements()
        element.addBindings(updatedItems.editItems,editItem,"click");
        element.addBindings(updatedItems.deleteProjects, deleteItem, "click");
        element.addBindings(updatedItems.addProjectLabels,createProjectTasks, "click");

    }

    const editItem = () => {
        return;
        // edits the item;
    }

    const deleteItem = () => {
        return;
        // deletes the item
    }

    const createProjectTasks = () => {
        console.log("projectTasks")
        let taskText = getTextBoxValues()
        let task = {task: domElements.editText.value};
        projectTasks.push(task);
        renderProjectTasks();


    }


    const getTextBoxValues = () => {
        let editText = document.querySelector(".editText")
        let text = ""
        editText.value.length == 0? text = "New Project": text = editText.value;
        return text;
    }
   
    const createProjectEditor = (template) => {
        let editorText = ` <div class = "editProjectButton">
        <input class = "editText" type="text" placeholder="${template.placeholder}">
        <p class = "addProjectLabel"> +</p>
    </div>`
        return editorText;

    }

    const renderProjectTasks = () => {
        removeNavigationBindings();
        domElements.projectTaskHolder.innerHTML = "";
        projectTasks.forEach(task => {
          //  console.log(task.edit)
            if (task.edit){
                let editorText  = createProjectEditor(task);
       //         console.log(editorText)
                
                domElements.projectTaskHolder.innerHTML += editorText
            } else {
        //        console.log("doing something")
                // do something;
            }
        })
        addNavigationBindings();

    }

    const exitEditor = () => {
        removeEditor();
    }

    const removeEditor = () => {
        let newTask = projectTasks.filter(task => task.edit != true);
        projectTasks = newTask;
        renderProjectTasks();
        renderOverlay();

    }

    const renderOverlay =() => {
        if (checkProjectEditor()){
            domElements.overlay.style.display = "block";
            domElements.wholeOverlay.style.display = "block";
            element.addBindings(domElements.wholeOverlay,exitEditor,"click");
        } else {
            domElements.overlay.style.display = "none";
            element.removeBindings(domElements.wholeOverlay)
            domElements.wholeOverlay.style.display = "none";
        
        }
    }

    const checkProjectEditor = () => {
        let bool = false;
        projectTasks.forEach( task => {
            if (task.edit) bool = true;
        })
        return bool;
    }

    const activateProjectTask = (event) => {
        console.log(event.target)
        console.log(event.target.temporaryText)
        console.log(checkProjectEditor())
        checkProjectEditor();
        if (!checkProjectEditor()) projectTasks.push({edit: true, placeholder: event.target.temporaryText});
        else {
            removeEditor();
            console.log(newTask)
        }
        console.log(projectTasks)
        renderProjectTasks();
        renderOverlay();
    }
    // when dom is called it will create the default elements
    const activateWebpage = () => {
        domElements = dom();


        domElements.plusSign.temporaryText = "New Project";
        domElements.projectText.temporaryText = "New Project"
        element.addBindings(domElements.projectAdder,activateProjectTask,"click");
       
    


    }

    return {activateWebpage};
}

export default app;