import trashImage from "../images/trash.svg";
import editIcon from "../images/editOff.svg";



import element from "./elementEvents.js"
import {send} from "./send.js"
import { getDomElements } from "./pageLayout.js";


const content = () => {
    let listTasks = [];
    let dom = getDomElements();

    const assignBoardBindings = () => {
        return
    }

    const activateAddBoard =() => {
        return
    }

    const getUpdatedElements = () => {
        let boardTextBox = Array.from(document.getElementsByClassName("addBoarderTextBox"))
        let boarderButton = Array.from(document.getElementsByClassName("addBoarderButton"))
        return {boardTextBox, boarderButton}
    }

    const removeContentBindings = () => {
        let elements = getUpdatedElements();
        element.removeBindings(elements.boarderButton, addBoard,"click");

    }

    const addContentBindings = () => {
        let elements = getUpdatedElements();
        element.addBindings(elements.boarderButton, addBoard,"click");
        
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
        boardText = `                <div class = "boardTextEditor">
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
                                                        <img class ="deleteBoard"  src="${trashImage}" alt="">
                                                        <img class = "editBoard" src="${editIcon}" alt="">
                                                    </div>
                                                    <h2 class = "exampleBoardText">${text}</h2>
                                                    <div class = "boardEditorLayout"></div>
                                                    <div class = "taskLayout></div>

                                                    <div class = "taskAdder">
                                                        <p>+ Add Task</p>
                                                    </div>

            
                                                    </div>
                                                        </div>`
        return boardText;
    }

    const createAddBoard = () => {
        let addBoardText = ` <div class = "boardContent">
                                <div class = "addBoard">
                                    <h2 class = "addBoardText">Add Board</h2>
                                    <input class = "addBoarderTextBox" type="text">


                                    <button class = "addBoarderButton">Add</button>
                                </div>

                            </div>`
        return addBoardText;
    }



    const renderListTasks = () => {
        removeContentBindings();
        dom.pageContent.innerHTML = "";

        listTasks.forEach(task => {
            if (task.board){
                let board = createBoard(task);
                dom.pageContent.innerHTML = board
            }                
        })    
        
        addContentBindings();


    }


    const createBoardTemplate =(currenText) => {
        if (currenText.length == 0) return;
        let board = {board: true, text:"", tasks: []};
        listTasks.push(board);
        renderListTasks();


    }


    const closeContent = (index) => {
        send.sendData(listTasks,index);
    }

    const ativateContent = (index) => {
        listTasks = send.retrieveData(index);
        renderListTasks();

    }
    



}