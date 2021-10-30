import element from "./elementEvents.js"
import dom from "./pageLayout.js";

import trashImage from "../images/trash.svg";
import editIcon from "../images/editOff.svg";





const app = () => {
    console.log(editIcon, "edit icon")
   
    let domElements;
    let projectTasks = [];





    const getUpdatedElements = () => {
        let editItems = Array.from(document.getElementsByClassName("editProject"));
        let deleteItems = Array.from(document.getElementsByClassName("deleteItem"));
        let addProjectLabels = Array.from(document.getElementsByClassName("addProjectLabel"));
        let projectButton = Array.from(document.getElementsByClassName("projectButton"));
        return {editItems, deleteItems, addProjectLabels, projectButton};
    }

    const removeNavigationBindings = (notRemoveAddProjectLabel) => {
        let updatedItems = getUpdatedElements();
        element.removeBindings(updatedItems.editItems,editItem,"click");
        element.removeBindings(updatedItems.deleteItems, deleteItem, "click");
       if (!notRemoveAddProjectLabel) element.removeBindings(updatedItems.addProjectLabels,createProjectTasks, "click");
       if (!notRemoveAddProjectLabel && updatedItems.addProjectLabels.length != 0) element.removeBindings(window, createProjectTasksKeys, "keydown")

       console.log("binding events have been removed")


    }





    const addNavigationBindings = () => {
        console.log("bindings have been added")
        let updatedItems = getUpdatedElements()
        element.addBindings(updatedItems.editItems,editItem,"click");
        element.addBindings(updatedItems.deleteItems, deleteItem, "click");
        element.addBindings(updatedItems.addProjectLabels,createProjectTasks, "click");
        if (updatedItems.addProjectLabels.length != 0) element.addBindings(window, createProjectTasksKeys, "keydown");

    }

    const addProjectButtonWholeOverayBindings = () => {
        let updatedItems = getUpdatedElements();
        element.addBindings(updatedItems.projectButton,exitEditor, "click");
    }

    const removeProjectWholeOverlayBindings = () => {
        let updatedItems = getUpdatedElements();
        element.removeBindings(updatedItems.projectButton, exitEditor, "click");
    }



    const removeItem = (index) => {
        let newTasks = [];
        for (let i = 0; i < projectTasks.length; i ++){
            if (i != index){
                newTasks.push(projectTasks[i]);
            }
        }
        projectTasks = newTasks;
        renderProjectTasks();
    }

    const deleteItem = (event) => {
        removeItem(event.target.currentIndex)
    }

    const createProjectTasksKeys = (event)  => {
        console.log("pressing a key")
        if (event.key == "Enter") {
            createProjectTasks();
        }

    }

    const createProjectTasks = (index) => {
        let taskText = getTextBoxValues()
        let task = {task: taskText};
      
        typeof index != "undefined" ? projectTasks[index] = task:   projectTasks.push(task);
        renderProjectTasks();
        removeEditor();


    }

    const editItem = (event) => {
        let newTasks = projectTasks;
        newTasks[event.target.currentIndex] = {edit: true, placeHolder:event.target.currentText};
        


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

    const renderErrorMessage = () => {
        // will create error message
        return;
    }


    const createTask = (task) => {

        let taskText = `                             <div class  = "projectButton projectButtonHover">
        <div class = "projectTools">
                <img  class = "deleteItem" src="${trashImage}" alt="">
                <img class = "editProject" src="${editIcon}" alt="">
            </div> 

            <div class = "projectContainer">
                <p class = "projectContainerText">${task.task}</p>
            </div>
        </div>`
        return taskText;





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
                let taskText = createTask(task);
                domElements.projectTaskHolder.innerHTML += taskText

            
                let deleteElement = Array.from(document.getElementsByClassName("deleteItem"));
                let editElement = Array.from(document.getElementsByClassName("editProject"));
                let projectContainerText = Array.from(document.getElementsByClassName("projectContainerText"));


                let elementIndex = deleteElement.length -1;

                deleteElement = deleteElement[elementIndex];
                editElement = editElement[elementIndex];
                projectContainerText = projectContainerText[elementIndex];

                console.log(elementIndex, "current element index")
                deleteElement.currentIndex = elementIndex;
                console.log(editElement, "edit element")
                editElement.currentIndex = elementIndex;
                editElement.currentText = projectContainerText;
                

            
           //     console.log(taskElement, "task element");
            //    console.log(taskElement.currentIndex, "task element current index")

                
            }
        })
        addNavigationBindings();

    }

    const exitEditor = () => {
        console.log("exiting editor")
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
            addProjectButtonWholeOverayBindings()
            
        } else {
            domElements.overlay.style.display = "none";
            element.removeBindings(domElements.wholeOverlay)
            domElements.wholeOverlay.style.display = "none";
            removeProjectWholeOverlayBindings();
        
        }
    }

    const checkProjectEditor = () => {
        let bool = false;
        projectTasks.forEach( task => {
            if (task.edit) bool = true;
        })
        return bool;
    }
    const disablePageContentElements = () => {
        removeNavigationBindings(true);
        let updatedElement = getUpdatedElements();
        if (updatedElement.projectButton.length == 0) return;
        updatedElement.projectButton.forEach( button =>{
            console.log(button, "current button")
            button.classList.remove("projectButtonHover")
            button.style.color = "rgb(157,162,175)";
            button.style.cursor = "pointer"

        })

    }

    const createEditor = (text,index) => {
        if (!checkProjectEditor()) {
            typeof index != "undefined" ?projectTasks[index] = {edit:true, placeholder:}:projectTasks.push({edit: true, placeholder: text})
        }
        else {
            removeEditor();
            console.log(newTask)
        }
        console.log(projectTasks)
        renderProjectTasks();
        renderOverlay();
        disablePageContentElements();

    }

    const activateProjectTask = (event) => {
        createEditor(event.target.temporaryText);

    }
    // when dom is called it will create the default elements
    const activateWebpage = () => {
        domElements = dom();


        domElements.plusSign.temporaryText = "New Project";
        domElements.projectText.temporaryText = "New Project"
        domElements.projectAdder.temporaryText = "New Project"

        element.addBindings(domElements.projectAdder,activateProjectTask,"click");
       
    


    }

    return {activateWebpage};
}

export default app;