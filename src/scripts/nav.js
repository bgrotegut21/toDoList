import {removeItem, addItem, addBindings, removeBindings, setArray} from "./elementEvents.js"
import {getInitialElements, getUpdatedElements} from "./pageLayout.js";


import {send} from "./send.js"

import {createNavTask, createProjectEditor} from "./template.js"


import {contentMenu} from "./content.js";





const nav = () => {

    let domElements;
    let changedTasks = [];
    let staticTasks = [];
    let content = contentMenu;
    let highlightedIndex;
    let upcomingButton;



    const removeNavigationBindings = (notRemoveAddProjectLabel) => {
        let updatedItems = getUpdatedElements();
        let domElements = getInitialElements();
        upcomingButton = domElements.upComingButton;

        removeBindings(updatedItems.editItems,editItem,"click");
        removeBindings(updatedItems.deleteItems, deleteItem, "click");
        removeBindings(updatedItems.projectContainer, switchPage, "click");
        removeBindings(domElements.projectAdder,activateProjectTask,"click");
        removeBindings(domElements.upComingButton,activateUpComingTask,"click");
        removeBindings(upcomingButton, highlightUpComingButton, "mouseover");
        removeBindings(upcomingButton, unhoverUpComingButton, "mouseleave")


       if (!notRemoveAddProjectLabel) removeBindings(updatedItems.addProjectLabels,createProjectTasksClick, "click");
       if (!notRemoveAddProjectLabel && updatedItems.addProjectLabels.length != 0) removeBindings(window, createProjectTasksKeys, "keydown")

s
    }


    const lookUpTask = (index) => {
        return staticTasks[index];
    }


    const unhoverUpComingButton = () => {
        if (highlightedIndex != "upcoming")  unhighlightUpComingButton();
    }


    const addNavigationBindings = () => {
        let updatedItems = getUpdatedElements(); 
        let domElements = getInitialElements();
        

        addBindings(updatedItems.editItems,editItem,"click");
        addBindings(updatedItems.deleteItems, deleteItem, "click");
        addBindings(updatedItems.addProjectLabels,createProjectTasksClick, "click");
        addBindings(updatedItems.projectContainer,switchPage, "click")
        addBindings(domElements.projectAdder,activateProjectTask,"click");
        addBindings(upcomingButton,activateUpComingTask,"click");
        addBindings(upcomingButton, highlightUpComingButton, "mouseover");
        addBindings(upcomingButton, unhoverUpComingButton, "mouseleave")

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
    //    //console.log("switching page")
   //     //console.log(event.target.currentIndex, "event tageet current index")
        let title = staticTasks[event.target.currentIndex].task;
        content.activateContent(event.target.currentIndex, false, title);
        highlightedIndex = event.target.currentIndex;
        renderHighlightElements();
        renderProjectTasks();
     //   mobile.closeMobileMenu();

    }






    const unHighlightButton = () => {
        
        let index = 0;
        unhighlightUpComingButton();
        changedTasks.forEach(task => {
            if (task.navTask || task.upComingTask) {
                if (task.highlight){
                    task.highlight = false;
                }
            }
            index ++;
        })


    } 

    const unhighlightUpComingButton = () => {
        upcomingButton.style.background = "rgb(19, 75, 205)";
    }

    const highlightUpComingButton = () => {
        console.log("activating the up coming task")
        upcomingButton.style.background = "rgb(22, 83, 227)";
    }    

    const renderHighlightElements = () => {
        if (staticTasks.length == 0 &&  highlightedIndex != "upcoming") return;
        
        console.log("render higlight elements")

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
        console.log(index,"the current index")

        if (index == "upcoming") highlightUpComingButton();
        else changedTasks[index].highlight = true;
        //console.log("high lighting button", index)
    }



    const getCurrentIndex = ()=> {
        let updatedItems = getUpdatedElements()
        //console.log(updatedItems.projectLabel, "updated item project lable")
        let projectLabel = updatedItems.addProjectLabels[0];
        //console.log([projectLabel], "the current project label")

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
        //console.log("create project tacks click")
        let currentIndex = getCurrentIndex();
        createProjectTasks(currentIndex);
    }








    const createProjectTasks = (index) => {
        // //console.log("create project tasks")
        let taskText = getTextBoxValues()
        let isEditingTask = false
        let isUpComing = content.getIsUpComing();
        // //console.log(taskText, "the current task text");
        // //console.log(taskText.length, "the current task text length")

        let task = {navTask:true,task: taskText, highlight:false};   

        if (taskText.length != 0) {
            if(staticTasks[index]) {
                staticTasks[index] = task;
                isEditingTask = true;
            }
            else {

                staticTasks.push(task)
                highlightedIndex = index;

            }
            
        }

        //console.log(staticTasks,"the static tasks") 
        changedTasks = setArray(staticTasks);

        console.log(staticTasks[index], "the static tasks index")

  
        //console.log(changedTasks, "the changed tasks")

        renderHighlightElements();
        if (staticTasks[index]) changedTasks[index].highlight = true;

        renderProjectTasks();

        console.log(isEditingTask, "the current is editing task")
        console.log(task, "the current edited task")

        // //console.log(index, " the current index")
        // //console.log(staticTasks, "the static tasks")

        if (index == staticTasks.length -1 && !isEditingTask){
            let title = staticTasks[index].task;
            content.activateContent(index,false,title );


        } else if (isEditingTask ){
            console.log("is activatating up coming")
            send.sendName(index,task.task)
            let data = send.retrieveTitle(index);
            console.log(data, "the current data")

            console.log(data, "the current data")
            if (isUpComing) content.activateContent("upcoming");
        
        }
        renderOverlay();
        content.addTaskBindings();

    }



    

    const deleteItem = (event) => {

        let index = event.target.currentIndex;

        staticTasks = removeItem(staticTasks,index);
        send.deleteData(index);
        console.log(index, "the current index")
        let renderIndex = index -1;
        if (renderIndex < 0){
            renderIndex = staticTasks.length - 1;
            if (staticTasks.length == 0) renderIndex = -1;
        }

        let contentIndex = content.getIndex();
        let isUpComing = content.getIsUpComing();
        let normalIndex = renderIndex + 1;

        if (renderIndex == -1){
            content.activateContent(renderIndex,true);
        } else if (normalIndex ==  contentIndex){
            let title = staticTasks[renderIndex].task;
            console.log(renderIndex, "the current")
            console.log(staticTasks[renderIndex], "static tasks render index")
            content.activateContent(renderIndex,true,title);
            highlightedIndex = renderIndex;
        } else if (isUpComing){
            content.activateContent("upcoming",true)
            highlightedIndex = "upcoming";
        } else {
            let title = staticTasks[contentIndex].task;
            content.activateContent(contentIndex,true,title);
            highlightedIndex = contentIndex;
        }


        changedTasks = setArray(staticTasks)
        renderHighlightElements();
        ////console.log("no rendering project tasks")
        renderProjectTasks();
        //console.log("delete item")
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
        domElements = getInitialElements();

        domElements.projectTaskHolder.innerHTML = "";
        changedTasks.forEach(task => {

            if (task.edit){

                let editorText  = createProjectEditor(task);
                domElements.projectTaskHolder.innerHTML += editorText

            } else if (task.navTask){
                let taskText;
              //  //console.log(task, " the task")
                task.highlight? taskText = createNavTask(task,true): taskText = createNavTask(task);
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
        //console.log(updatedElement.projectButton,"updated element project button")
        if (updatedElement.projectButton.length == 0) return;
        updatedElement.projectButton.forEach( button =>{
            //console.log(button, "the current button")
            button.classList.remove("projectButtonHover")
            button.style.color = "rgb(157,162,175)";
            button.style.cursor = "pointer"

        })

    }


//make sure disablePageContentElements and renderOverlay methods are below renderProject tasks.
//This is because renderOverlay will overwrite the changes causing the page to act werid.
    const createEditor = (text,index) => {

        //console.log("create")
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

        console.log("activating up coming tasks")

        console.log(content, "the content")

        content.activateContent("upcoming")
        highlightedIndex = "upcoming";
        renderHighlightElements();
        renderProjectTasks();
      //  mobile.closeMobileMenu();
    }

    const activateProjectTask = () => {
        createEditor();
        

    }

    // when dom is called it will create the default elements
    const activateNavigation = () => {
        domElements = getInitialElements();
        upcomingButton = domElements.upComingButton;

        console.log(domElements, "current dom elements")

        addBindings(domElements.projectAdder,activateProjectTask,"click");
        addBindings(domElements.upComingButton,activateUpComingTask,"click");

        console.log(upcomingButton, "the ccurrent upcoming button")

        addBindings(upcomingButton, highlightUpComingButton, "mouseover");
        addBindings(upcomingButton, unhoverUpComingButton, "mouseleave")

    }
    return {activateNavigation, removeNavigationBindings, addNavigationBindings};
}




let navigation = nav();


export {navigation};
