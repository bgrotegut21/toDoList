import {removeItem, addItem, addBindings, removeBindings, setArray} from "./elementEvents.js"
import {getDomElements} from "./pageLayout.js";
import {send} from "./send"

import trashImage from "../images/trash.svg";
import editIcon from "../images/editOff.svg";

import Content from "./content.js";






const nav = () => {

    let domElements;
    let changedTasks = [];
    let staticTasks = [];
    let content = Content();

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
        removeBindings(updatedItems.editItems,editItem,"click");
        removeBindings(updatedItems.deleteItems, deleteItem, "click");
        removeBindings(updatedItems.projectButton, switchPage, "click");
       if (!notRemoveAddProjectLabel) removeBindings(updatedItems.addProjectLabels,createProjectTasksClick, "click");
       if (!notRemoveAddProjectLabel && updatedItems.addProjectLabels.length != 0) removeBindings(window, createProjectTasksKeys, "keydown")


    }


    const lookUpTask = (index) => {
        return staticTasks[index];
    }



    const addNavigationBindings = () => {
        let updatedItems = getUpdatedElements()
        addBindings(updatedItems.editItems,editItem,"click");
        addBindings(updatedItems.deleteItems, deleteItem, "click");
        addBindings(updatedItems.addProjectLabels,createProjectTasksClick, "click");
        addBindings(updatedItems.projectButton,switchPage, "click")
        if (updatedItems.addProjectLabels.length != 0) addBindings(window, createProjectTasksKeys, "keydown");

    } 

    const addProjectButtonWholeOverayBindings = () => {
        let updatedItems = getUpdatedElements();
        addBindings(updatedItems.projectButton,createProjectTasksClick, "click");
    }

    const removeProjectWholeOverlayBindings = () => {
        let updatedItems = getUpdatedElements();
        removeBindings(updatedItems.projectButton, createProjectTasksClick, "click");
    }


    const switchPage = (event) => {
        console.log(event.target, "event target current index")

        content.activateContent(event.target.currentIndex);
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
        console.log("create project tasks")
        let currentIndex = getCurrentIndex();
        createProjectTasks(currentIndex);
    }




    const createProjectTasks = (index) => {
        let taskText = getTextBoxValues()
        let task = {task: taskText};   

        if (taskText.length != 0) {
            if(staticTasks[index]) staticTasks[index] = task;
            else staticTasks.push(task)
        }


     
        changedTasks = setArray(staticTasks);
        

        renderProjectTasks();
        renderOverlay();

    }



    

    const deleteItem = (event) => {
        let index = event.target.currentIndex;
        staticTasks = removeItem(staticTasks,index);
        send.deleteData(index);
        content.activateContent();

        changedTasks = setArray(staticTasks);
        
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
                if (childElement.getAttribute("class") == "projectContainer"){
                    let childArray = Array.from(childElement.children);
                    childArray[0].currentIndex = index;
                }
            })
            index ++;
        })

    }



    const renderProjectTasks = () => {
        removeNavigationBindings();

        domElements.projectTaskHolder.innerHTML = "";
        changedTasks.forEach(task => {

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



    const renderOverlay =() => {
        if (checkProjectEditor()){
            domElements.overlay.style.display = "block";
            domElements.wholeOverlay.style.display = "block";
            addBindings(domElements.wholeOverlay,createProjectTasksClick,"click");
            addProjectButtonWholeOverayBindings()
            
        } else {
            domElements.overlay.style.display = "none";
            removeBindings(domElements.wholeOverlay, createProjectTasksClick,"click");
            domElements.wholeOverlay.style.display = "none";
            removeProjectWholeOverlayBindings();
        
        }
    }

    const checkProjectEditor = () => {
        let bool = false;
        changedTasks.forEach( task => {
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
            typeof index != "undefined" ? changedTasks = addItem(changedTasks,index,{edit:true, value:editorText}): changedTasks.push({edit: true})
        }
        console.log(changedTasks, "the changed tasks");
        console.log(staticTasks, "the static tasks");

   
        renderProjectTasks();
        renderOverlay();

        disablePageContentElements();

    }

    const activateProjectTask = () => {
        createEditor();

    }

    // when dom is called it will create the default elements
    const activateNavigation = () => {
        domElements = getDomElements();

        addBindings(domElements.projectAdder,activateProjectTask,"click");
    

 
    }

    return {activateNavigation};
}

export default nav;