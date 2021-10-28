import element from "./elementEvents.js"
import dom from "./pageLayout.js";




const app = () => {
   
    let domElements;
    let projectTasks = [];

    let editItems = Array.from(document.getElementsByClassName("editProject"));
    let deleteProjects = Array.from(document.getElementsByClassName("deleteProject"));
    let addProjectLabels = Array.from(document.getElementsByClassName("addProjectLabel"));



    const removeNavigationBindings = () => {
        element.removeBindings(editItems,editItem,"click");
        element.removeBindings(deleteProjects, deleteItem, "click");
        element.removeBindings(addProjectLabels,createProjectTasks, "click");
    }

    const addNavigationBindings = () => {
        element.addBindings(editItems,editItem,"click");
        element.addBindings(deleteProjects, deleteItem, "click");
        element.addBindings(addProjectLabels,createProjectTasks, "click");

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
        let task = {task: domElements.editText.value};
        projectTasks.push(task);
        renderProjectTasks();


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

    const renderOverlay =() => {
        checkProjectEditor() ?domElements.overlay.style.display = "block": domElements.overlay.style.display = "none";
    }

    const checkProjectEditor = () => {
        projectTasks.forEach( task => {
            if (task.edit) return true;
        })
        return false;
    }

    const activateProjectTask = (event) => {
        console.log(event.target)
        console.log(event.target.temporaryText)
        if (checkProjectEditor() == false ) projectTasks.push({edit: true, placeholder: event.target.temporaryText});
        else {
            let newTask = projectTasks.filter(task.edit != true);
            console.log(newTask)
        }
        console.log(projectTasks)
        renderProjectTasks();


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