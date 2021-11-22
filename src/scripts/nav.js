import {removeItem, addItem, addBindings, removeBindings, setArray} from "./elementEvents.js"
import {getInitialElements, getUpdatedElements} from "./pageLayout.js";
import {send} from "./send"

import trashImage from "../images/trash.svg";
import editIcon from "../images/editOff.svg";

import Content from "./content.js";






const nav = () => {

    let domElements;
    let changedTasks = [];
    let upComingTask = {upComingTask: true, highlight:true}
    let staticTasks = [];
    let content = Content();
    let highlightedIndex;


    const removeNavigationBindings = (notRemoveAddProjectLabel) => {
        let updatedItems = getUpdatedElements();
        let domElements = getInitialElements();

        removeBindings(updatedItems.editItems,editItem,"click");
        removeBindings(updatedItems.deleteItems, deleteItem, "click");
        removeBindings(updatedItems.projectContainer, switchPage, "click");
        removeBindings(domElements.projectAdder,activateProjectTask,"click");
        removeBindings(domElements.upComingButton,activateUpComingTask,"click");


       if (!notRemoveAddProjectLabel) removeBindings(updatedItems.addProjectLabels,createProjectTasksClick, "click");
       if (!notRemoveAddProjectLabel && updatedItems.addProjectLabels.length != 0) removeBindings(window, createProjectTasksKeys, "keydown")


    }


    const lookUpTask = (index) => {
        return staticTasks[index];
    }



    const addNavigationBindings = () => {
        let updatedItems = getUpdatedElements();
        let domElements = getInitialElements();

        addBindings(updatedItems.editItems,editItem,"click");
        addBindings(updatedItems.deleteItems, deleteItem, "click");
        addBindings(updatedItems.addProjectLabels,createProjectTasksClick, "click");
        addBindings(updatedItems.projectContainer,switchPage, "click")
        addBindings(domElements.projectAdder,activateProjectTask,"click");
        addBindings(domElements.upComingButton,activateUpComingTask,"click");

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
    //    console.log("switching page")
   //     console.log(event.target.currentIndex, "event tageet current index")
        let title = staticTasks[event.target.currentIndex].task;
        content.activateContent(event.target.currentIndex, false, title);
        highlightedIndex = event.target.currentIndex;
        renderHighlightElements();
        renderProjectTasks();
    }

    const unHighlightButton = () => {
        let index = 0;
        changedTasks.forEach(task => {
            if (task.navTask || task.upComingTask) {
                if (task.highlight){
                    task.highlight = false;
                }
            }
            index ++;
        })


    } 

    const renderHighlightElements = () => {
        if (staticTasks.length == 0) return;
        
        console.log(highlightedIndex, "the highlighted index")

        let isEdit = changedTasks.filter(task => task.edit);
        console.log(isEdit, "is edit array")
        if (isEdit.length != 0){
            unHighlightButton();
        } else {
            highlightButton(highlightedIndex);
        }
    }


    const highlightButton = (index) => {
        unHighlightButton();

        changedTasks[index].highlight = true;
        console.log("high lighting button", index)
    }



    const getCurrentIndex = ()=> {
        let updatedItems = getUpdatedElements()
        console.log(updatedItems.projectLabel, "updated item project lable")
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
        console.log("create project tacks click")
        let currentIndex = getCurrentIndex();
        createProjectTasks(currentIndex);
    }








    const createProjectTasks = (index) => {
        // console.log("create project tasks")
        let taskText = getTextBoxValues()
        // console.log(taskText, "the current task text");
        // console.log(taskText.length, "the current task text length")

        let task = {navTask:true,task: taskText, highlight:false};   

        if (taskText.length != 0) {
            if(staticTasks[index]) staticTasks[index] = task;
            else staticTasks.push(task)
            highlightedIndex = index;
        }

        console.log(staticTasks,"the static tasks") 
        changedTasks = setArray(staticTasks);
        console.log(changedTasks, "the changed tasks")

        renderHighlightElements();
        renderProjectTasks();


        // console.log(index, " the current index")
        // console.log(staticTasks, "the static tasks")
        let title = staticTasks[index].task;
        if (index == staticTasks.length -1) content.activateContent(index,false,title );
        renderOverlay();
        content.addTaskBindings();

    }



    

    const deleteItem = (event) => {

        let index = event.target.currentIndex;

        staticTasks = removeItem(staticTasks,index);
        send.deleteData(index);

        let renderIndex = index -1;
        if (renderIndex < 0){
            renderIndex = staticTasks.length - 1;
            if (staticTasks.length == 0) renderIndex = -1;
        }


        let title = staticTasks[renderIndex].task;
        content.activateContent(renderIndex,true,title);
        changedTasks = setArray(staticTasks)
        highlightedIndex = renderIndex;
        renderHighlightElements();
        //console.log("no rendering project tasks")
        renderProjectTasks();
        console.log("delete item")
    }


    const editItem = (event) => {
        let projectTask = lookUpTask(event.target.currentIndex);
        let text = projectTask.task;
        createEditor(text,event.target.currentIndex,true)
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


    


    const createTask = (task, highlighted) => {


        let styleText = ''
        if (highlighted) styleText = 'style = "background:rgb(22, 83, 227);" '


        let taskText = `                             <div class  = "projectButton projectButtonHover" ${styleText}>
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
                    childElement.currentIndex = index;
                    assignTaskActions(index, childElement)

                } else if (childElement.getAttribute("class") == "addProjectLabel"){
                    childElement.currentIndex = index;
                }
                if (childElement.getAttribute("class") == "projectContainer"){
                    childElement.currentIndex = index;
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

            } else if (task.navTask){
                let taskText;
              //  console.log(task, " the task")
                task.highlight? taskText = createTask(task,true): taskText = createTask(task);
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
        console.log(updatedElement.projectButton,"updated element project button")
        if (updatedElement.projectButton.length == 0) return;
        updatedElement.projectButton.forEach( button =>{
            console.log(button, "the current button")
            button.classList.remove("projectButtonHover")
            button.style.color = "rgb(157,162,175)";
            button.style.cursor = "pointer"

        })

    }


//make sure disablePageContentElements and renderOverlay methods are below renderProject tasks.
//This is because renderOverlay will overwrite the changes causing the page to act werid.
    const createEditor = (text,index) => {

        console.log("create")
        let editorText = "";
        if (typeof text != "undefined") editorText = text;

        if (!checkProjectEditor()) {
            typeof index != "undefined" ? changedTasks = addItem(changedTasks,index,{edit:true, value:editorText}): changedTasks.push({edit: true})
        }
   
        renderHighlightElements();

        renderProjectTasks();

        disablePageContentElements();
        renderOverlay();

        content.removeTaskBindings();

    }


    const activateUpComingTask = () => {
        content.activateContent("upcoming")
        
    }

    const activateProjectTask = () => {
        createEditor();
        

    }

    // when dom is called it will create the default elements
    const activateNavigation = () => {
        domElements = getInitialElements();

        addBindings(domElements.projectAdder,activateProjectTask,"click");
        addBindings(domElements.upComingButton,activateUpComingTask,"click");

    }
    return {activateNavigation};
}


export default nav;