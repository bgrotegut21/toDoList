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


    let dom = getInitialElements();

    const assignBoardBindings = () => {
        return
    }

    const activateAddBoard =() => {
        return
    }



// will add key bindings at a later date
    const removeContentBindings = () => {
        let elements = getUpdatedElements();
        removeBindings(elements.boarderButton, addBoardTasks,"click");
        removeBindings(elements.deleteBoard,deleteBoard, "click");
        removeBindings(elements.editBoard,editBoard,"click");


    }

    const addContentBindings = () => {
        let elements = getUpdatedElements();
        addBindings(elements.boarderButton, addBoardTasks,"click");
        addBindings(elements.deleteBoard,deleteBoard, "click");
        addBindings(elements.editBoard,editBoard,"click");
        
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

    const editBoard = (event) => {

        
    }


    const renderBoardLists = (index) => {


    }


    const addBoardTaskKeys = (event) => {
        console.log(event.key);
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

        console.log(staticListTasks, "the static list tasks")

        renderListTasks();
    }

    const addToDoTasks = (currentIndex) => {
        return;

    }



    const createBoardTemplate =(currentText,tasks) => {
        let currentTasks = [];
        if (typeof tasks != "undefined") currentTasks = tasks; 

        let board = {board: true, text:currentText, tasks: currentTasks, changedTasks: []};
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

    const createBoardEditor = () => {
        let boardText = `<div class = "boardTextEditor">
        <input class = "boardtextBox" type="text">
        <p class = "changeBoardTitleButton">+</p>
    </div>`
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

                                                    <div class = "boardTextEditor">
                                                        <input class = "boardtextBox" type="text">
                                                        <p class = "changeBoardTitleButton">+</p>
                                                    </div>

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
            if(childElement.getAttribute("class") == "taskAdder") childElement.boardIndex = currentIndex;
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
    }




    const removeChangedTasks = () => {
        let newTasks = staticTasks;
        let newTasks = newTasks.map(task => {
            if (task.board) {
                task = {board:true, text: task.text, tasks: task.tasks, changedTasks: task.changedTasks}
            }
        })
        staticListTasks = newTasks;
    }





    
    const activateContent = (currentIndex, disruptFlow) => {
        changedListTasks = [];
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




