import element from "./elementEvents.js"
import {sendData, retrieveData} from "./send.js"
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

    const createBoard = (template) => {
        let text = template.text;
        let boardText =`<div class = "boardContent">
                            <div class = "board">
                                <h2 class = "exampleBoardText">${text}</h2>
                                <div class = "taskContent"></div>
 
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

        listTasks.forEach(task => {
            if (task.addBoard){
                let addBoard = createAddBoard();
                dom.pageContent.innerHTML = addBoard

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
        //closes content
    }

    const ativateContent = (index) => {
        listTasks = retrieveData(index);

    }
    



}