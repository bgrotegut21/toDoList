import trashImage from "../images/trash.svg";
import editIcon from "../images/editOff.svg";



import {removeItem, addItem, addBindings, removeBindings, setArray} from "./elementEvents.js"
import {send} from "./send.js"
import { getInitialElements, getUpdatedElements } from "./pageLayout.js";




const Content = () => {

    let staticListTasks = [];
    let changedListTasks = []; 

    let staticBoardLists = [];
    let changedBoardLists = [];

    let index;
    let currentIndex;

    let dom = getInitialElements();

    const assignBoardBindings = () => {
        return
    }

    const activateAddBoard =() => {
        return
    }



// will add key bindings at a later date
    const removeContentBindings = (bool) => {
        let elements = getUpdatedElements();
        removeBindings(elements.boarderButton, addBoardTasks,"click");
        removeBindings(elements.deleteBoard,deleteBoard, "click");
        removeBindings(elements.editBoard,editBoard,"click");
        removeBindings(elements.changeBoardTitleButtons,changeName, "click");


    }

    const addContentBindings = () => {
        let elements = getUpdatedElements();
        addBindings(elements.boarderButton, addBoardTasks,"click");
        addBindings(elements.deleteBoard,deleteBoard, "click");
        addBindings(elements.editBoard,editBoard,"click");
        addBindings(elements.changeBoardTitleButtons, changeName, "click");

        
    }

    const deleteBoard = (event) => {
        console.log(staticListTasks, " the static list tasks");
        console.log(send.retrieveData(index), "send retrieve index")

        staticListTasks = removeItem(staticListTasks, event.target.boardIndex);
    

        console.log(staticListTasks, "static list tasks");
        changedListTasks = setArray(staticListTasks);
        console.log(changedListTasks, "the changed list tasks");
        renderListTasks();

    }

    const removeEditTitleMenu = () => {
        staticListTasks.forEach(task => {
            let newTasks = task.changedBoardLists;
            newTasks = newTasks.filter(list => list.editBoard != true);
            task.changedBoardLists = newTasks;
        })
        
    }




    const editBoard = (event) => {
        let index = event.target.boardIndex;
 
        removeEditTitleMenu();
        

        console.log(index, " the index")
        let changedBoardLists = staticListTasks[index].changedBoardLists
    
        let currentText = getElementByBoardIndex(index,"exampleBoardText").textContent;


        let editBoardTemplate = {editBoard: true, text:currentText};
        let newArray = [];
        newArray.push(editBoardTemplate);
        let finalArray = newArray.concat(changedBoardLists);
        staticListTasks[index].changedBoardLists = finalArray;
        currentIndex = index;
        renderBoardLists();
        
    }


    const changeName = (event) => {
        let elements = getUpdatedElements();
        let boardText = elements.boardContentTextBox[0].value;
        let exampleText = getElementByBoardIndex(currentIndex, "exampleBoardText");
 //       console.log(exampleText, "the example text")

        
        exampleText.textContent = boardText;
      //  console.log(boardText, " current board text")
     //   console.log(exampleText, "the example text content")
        let newTasks = staticListTasks[currentIndex].changedBoardLists;

        newTasks = newTasks.filter(task => task.editBoard != true)
        staticListTasks[currentIndex].changedBoardLists = newTasks;
        renderBoardLists()
    

    }


//dom element names come from the updated element types
    const getElementByBoardIndex = (index,domElement) => {

        let element = getUpdatedElements();
        let newElement = false;
        element[domElement].forEach(childElement => {
            if (childElement.boardIndex == index) newElement = childElement
        })
        return newElement;


    }


    const renderEditBoardTextValues  = () => {
        let index = 0;
        let elements = getUpdatedElements();
        staticListTasks.forEach(task => {
            task.changedBoardLists.forEach(list =>{
                console.log(index, " the current index")
                if (list.editBoard){
                    let currentText = findBoardTextBox(index);
                    console.log(currentText, " the current text")
                    list.text = currentText;
                }

            })
            index++;
        })
    }

    const findBoardTextBox =  (index) => {
        let taskHolder = getElementByBoardIndex(index,"taskHolders");
        let buttonText = "could not load text"
        let taskHolderChildren = Array.from(taskHolder.children)
       
        taskHolderChildren.forEach(child => {
            if (child.getAttribute("class") == "boardTextEditor") {
                 buttonText = Array.from(child.children)[0].value;
                 return;
            }
            
        })
        return buttonText;
    }

    const renderBoardLists = () => {
        removeBoardOverlay();
        let indexesLength = staticListTasks.length;
        removeContentBindings();
        console.log(staticListTasks, "the static list task")
        for (let i = 0; i < indexesLength; i++) {
            console.log(i, "the index")
            if (staticListTasks.length != 0)renderSingleBoardList(i);
        }
        addContentBindings();

    }

    const removeBoardOverlay = () => {
        let elements = getUpdatedElements();
        elements.boardOverlay.forEach(element => {
            element.style.display = "none";
        })
    }


    const addBoardOverlay = (index) => {
        let boardOverlay = getElementByBoardIndex(index,"boardOverlay");
        boardOverlay.style.display = "block";

    }

    const renderSingleBoardList = (index) => {
        let taskHolder = getElementByBoardIndex(index, "taskHolders");
       // console.log(taskHolder, "the task holder")
        taskHolder.innerHTML = "";
 //       console.log(index, "the index");
//        console.log(staticListTasks[index], "static list current index");
        console.log(staticListTasks[index], "static list tasks indexes")

        staticListTasks[index].changedBoardLists.forEach(task => {
            if (task.editBoard){
                let boardText = createBoardEditor(task);
                taskHolder.innerHTML += boardText;
                addBoardOverlay(index);
            }
        })

    }



    const addBoardTaskKeys = (event) => {
     //   console.log(event.key);
        if (event.key == "Enter") {
            addBoardTasks();
        }
    }


    const addBoardTasks = () => {

        let elements = getUpdatedElements();
        let text = elements.boardTextBox[0].value;
        if(text.length == 0) return;
        let task = createBoardTemplate(text);
        staticListTasks.push(task);
        changedListTasks = setArray(staticListTasks)

    //    console.log(staticListTasks, "the static list tasks")

        renderListTasks();
    }

    const addToDoTasks = (currentIndex) => {
        return;

    }



    const createBoardTemplate =(currentText,tasks) => {
        let currentTasks = [];
        if (typeof tasks != "undefined") currentTasks = tasks; 

        let board = {board: true, text:currentText, tasks: currentTasks, changedBoardLists: []};
        return board;
    }


    const createToDoTaskTemplate = (taskText,taskDate,taskPriority) => {
        let task = {task:true,text: taskText, date: taskDate, priority: taskPriority };
        return task;
    }
    



    

    const createTask = (task) => {
        let taskText = `<div class = "task">
                            <p class = "taskLabel">Doing Laundary</p>
                            <div class = "taskTools">
                                <div class = "generalTextHolder">
                                    <p class = "generalText">Due Nov 15 2021</p>
                                    <p class = "generalText">Priority: High</p>

                                </div>

                                <div class = "tools">
                                    <img class = "edit" src="src/images/editOff.svg" alt="">
                                    <div class = "circleIcon"></div>
                                </div>
                            </div>`
        
    }

    const createBoardEditor = (task) => {
        let value = task.text;
        
        let boardText = `<div class = "boardTextEditor">
        <input class = "boardtextBox" type="text" value = "${value}">
        <p class = "changeBoardTitleButton">+</p>
    </div>`

        return boardText;
    }



    const createBoard = (template) => {
        let text = template.text;
        let boardText = `                <div class = "boardContent">
                                            <div class = "board">
                                                <div class = "boardOverlay"></div>
                                                    <div class = "editExampleIcons">
                                                        <img class ="deleteBoard"  src="${trashImage}" alt="trash icon for deleting">
                                                        <img class = "editBoard" src="${editIcon}" alt="editing icon">
                                                    </div>

                                                    
                                                    <h2 class = "exampleBoardText">${text}</h2>

                                                    <div class = "taskHolder"></div>

                                                    <div class = "taskAdder">
                                                        <p>+ Add Task</p>
                                                    </div>
                                                </div> 
                                                    </div>`
        return boardText;
    }

    const createAddBoard = () => {
        let addBoardText = `<div class = "boardContent">
                                <div class = "addBoard">
                                    <div class = "emptyrow">empty row</div>
                                    <h2 class = "addBoardText">Add Board</h2>
                                    <input class = "addBoarderTextBox" type="text">
                                    <button class = "addBoarderButton">Add</button>
                                </div>

                            </div>`
        return addBoardText;
    }

    

    const assignBoardIcons = (element, currentIndex) =>  {
        let board = Array.from(element.children);
        board.forEach(childElement => {
            if (childElement.getAttribute("class") == "editExampleIcons"){
                childElement.boardIndex = currentIndex;
                let editExampleIcons = Array.from(childElement.children);
                editExampleIcons.forEach(itemElement => {
                    itemElement.boardIndex = currentIndex;
                })

            }
          //  console.log(childElement, "the child element")
            childElement.boardIndex = currentIndex;
           // console.log(childElement.boardIndex, "child element board index")
        })
    }


    const assignBoardElements = () => {

    
        let elements = getUpdatedElements();
        let pageContentChildren = elements.pageContentChildren;
        let currentIndex = 0;


     //   console.log(pageContentChildren, " the page content children")
        pageContentChildren.forEach(element => {
            if (element.getAttribute("class") == "boardContent"){
                element.boardIndex = currentIndex;
                let boardContent = Array.from(element.children);
                boardContent.forEach(childElement => {
                    childElement.boardIndex = currentIndex;
                    if (childElement.getAttribute("class") == "board") assignBoardIcons(childElement,currentIndex)
                })
            }
            currentIndex ++;
        })
    }

    const renderListTasks = (bool) => {
        renderEditBoardTextValues();
        removeContentBindings();
        dom.pageContent.innerHTML = "";
        if (!bool)changedListTasks.push({addBoard:true});
        changedListTasks.forEach(task => {
            if (task.board){
                let board = createBoard(task);
                dom.pageContent.innerHTML += board
            } else if (task.addBoard){
                let addBoard = createAddBoard();
                dom.pageContent.innerHTML += addBoard;
            }
        })       
        addContentBindings();
        assignBoardElements();
        renderBoardLists();
    }




    const setChangedToDoListsEmpty = () => {
        staticListTasks.forEach(task => {
            task.changedBoardLists = [];

        })
    }



    
    const activateContent = (currentIndex, disruptFlow) => {
        changedListTasks = [];
        setChangedToDoListsEmpty();

        if (disruptFlow == "delete"){
            staticListTasks = [];
            index = null;
            if (currentIndex < 0) {
                renderListTasks(true);
                return;
            }
        }

        if (typeof index == "number"){
            send.sendData(staticListTasks,index);  
        } 
        
        index = currentIndex;
        let newTasks = send.retrieveData(index);
        console.log(newTasks, " the new task")
        if (!newTasks){
            send.sendData([],index)
            newTasks = send.retrieveData(index);
        }
        staticListTasks = newTasks;
        console.log(staticListTasks, "the static list tasks")
        changedListTasks = setArray(staticListTasks);
        renderListTasks();
    
    
    }

    return {activateContent};
    




}

export default Content;



