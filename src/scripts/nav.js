import element from "./elementEvents.js"
import {getDomElements} from "./pageLayout.js";

import trashImage from "../images/trash.svg";
import editIcon from "../images/editOff.svg";





const nav = () => {

    let domElements;
    let projectTasks = [];


    const getUpdatedElements = () => {
        let editItems = Array.from(document.getElementsByClassName("editProject"));
        let deleteItems = Array.from(document.getElementsByClassName("deleteItem"));
        let projectContainerText = Array.from(document.getElementsByClassName("projectContainerText"));
        let addProjectLabels = Array.from(document.getElementsByClassName("addProjectLabel"));
        let projectButton = Array.from(document.getElementsByClassName("projectButton"));
        let projectTaskHolder = document.querySelector(".projectTaskHolder");
        let projectTaskHolderChildren = Array.from(projectTaskHolder.children);


        return {editItems, deleteItems, addProjectLabels, projectButton,
                projectTaskHolderChildren, projectContainerText
        };
    }

    const removeNavigationBindings = (notRemoveAddProjectLabel) => {
        let updatedItems = getUpdatedElements();
        element.removeBindings(updatedItems.editItems,editItem,"click");
        element.removeBindings(updatedItems.deleteItems, deleteItem, "click");
       if (!notRemoveAddProjectLabel) element.removeBindings(updatedItems.addProjectLabels,createProjectTasksClick, "click");
       if (!notRemoveAddProjectLabel && updatedItems.addProjectLabels.length != 0) element.removeBindings(window, createProjectTasksKeys, "keydown")


    }


    const lookUpTask = (index) => {
        return projectTasks[index];
    }




    const addNavigationBindings = () => {
        let updatedItems = getUpdatedElements()
        element.addBindings(updatedItems.editItems,editItem,"click");
        element.addBindings(updatedItems.deleteItems, deleteItem, "click");
        element.addBindings(updatedItems.addProjectLabels,createProjectTasksClick, "click");
        if (updatedItems.addProjectLabels.length != 0) element.addBindings(window, createProjectTasksKeys, "keydown");

    } 

    const addProjectButtonWholeOverayBindings = () => {
        let updatedItems = getUpdatedElements();
        element.addBindings(updatedItems.projectButton,createProjectTasksClick, "click");
    }

    const removeProjectWholeOverlayBindings = () => {
        let updatedItems = getUpdatedElements();
        element.removeBindings(updatedItems.projectButton, createProjectTasksClick, "click");
    }










    const getCurrentIndex = ()=> {
        let updatedItems = getUpdatedElements()
        let projectLabel = updatedItems.addProjectLabels[0];
        let currentIndex = projectLabel.currentIndex;
        return currentIndex
        
    }


    const createProjectTasksKeys = (event)  => {
        let currentIndex = getCurrentIndex();
        if (event.key == "Enter") {
            createProjectTasks(currentIndex);
        }
    }

    const createProjectTasksClick = () => {
        let currentIndex = getCurrentIndex();
        createProjectTasks(currentIndex);
    }

    const createProjectTasks = (index) => {
        let taskText = getTextBoxValues()
        let task = {task: taskText, listTasks: [{addBoard:true}]};        

        if (taskText.length != 0)projectTasks = element.addItem(projectTasks,index,task);

        renderProjectTasks();
        removeEditor();
    }

    const deleteItem = (event) => {
        projectTasks = element.removeItem(projectTasks,event.target.currentIndex)
        renderProjectTasks();
    }

    const editItem = (event) => {
        let projectTask = lookUpTask(event.target.currentIndex);
        let text = projectTask.task;
        createEditor(text,event.target.currentIndex)
    }



    const getTextBoxValues = () => {
        let editText = document.querySelector(".editText")
        let text = editText.value;
        return text;
    }
   
    const createProjectEditor = (template) => {
        let text = "";
        if (typeof template.value != "undefined") text = template.value;

        let editorText = ` <div class = "editProjectButton">
        <input class = "editText" type="text" value="${text}">
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

    const assignTaskActions = (index,childElement) => {
        let childElements = Array.from(childElement.children);
        childElements.forEach(newElement => {
            if (newElement.getAttribute("class") == "deleteItem") {
                newElement.currentIndex = index;
            } else if (newElement.getAttribute("class") == "editProject"){
                newElement.currentIndex = index;

            }
        })

    }

    const assignValueElements = () => {
        let updatedItems = getUpdatedElements();
        let index = 0
        updatedItems.projectTaskHolderChildren.forEach(element => {
            element.currentIndex = index;
            let elementChildren = Array.from(element.children);
            elementChildren.forEach(childElement => {
                if (childElement.getAttribute("class") == "projectTools"){
                    assignTaskActions(index, childElement)
                } else if (childElement.getAttribute("class") == "addProjectLabel"){
                    childElement.currentIndex = index;
                }
            })
            index ++;
        })

    }



    const renderProjectTasks = () => {
        removeNavigationBindings();

        domElements.projectTaskHolder.innerHTML = "";
        projectTasks.forEach(task => {

            if (task.edit){
                let editorText  = createProjectEditor(task);
                domElements.projectTaskHolder.innerHTML += editorText

            } else {
                let taskText = createTask(task);
                domElements.projectTaskHolder.innerHTML += taskText

                
            }
        })
        assignValueElements();
        addNavigationBindings();

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
            element.addBindings(domElements.wholeOverlay,createProjectTasksClick,"click");
            addProjectButtonWholeOverayBindings()
            
        } else {
            domElements.overlay.style.display = "none";
            element.removeBindings(domElements.wholeOverlay, createProjectTasksClick,"click");
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
            button.classList.remove("projectButtonHover")
            button.style.color = "rgb(157,162,175)";
            button.style.cursor = "pointer"

        })

    }

    const createEditor = (text,index) => {
        let editorText = "";
        if (typeof text != "undefined") editorText = text;

        if (!checkProjectEditor()) {
            typeof index != "undefined" ? projectTasks = element.addItem(projectTasks,index,{edit:true, value:editorText}): projectTasks.push({edit: true})
        }
        else {
            removeEditor();
        }
        renderProjectTasks();
        renderOverlay();
        disablePageContentElements();

    }

    const activateProjectTask = () => {
        console.log("activating project tasks")
        createEditor();

    }


    const randomEvent = () => {
        console.log("the random event");
    }
    // when dom is called it will create the default elements
    const activateNavigation = () => {
        domElements = getDomElements();

        console.log(domElements.projectAdder)
        element.addBindings(domElements.projectAdder,activateProjectTask,"click");
        element.addBindings(domElements.projectAdder,randomEvent,"click");       
    

 
    }

    return {activateNavigation};
}

export default nav;