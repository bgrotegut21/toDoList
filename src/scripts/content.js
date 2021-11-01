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

    const addBoard = (text,index) => {
        if (text.length != 0) {
            let boardTask = {board: true, text};
            listTasks = element.addItem(listTasks,index,boardTask);
        }
        renderListTasks();
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

    const createBoard = (board) => {
        let text = board.text;
        let boardText =`<div class = "boardContent">
                            <div class = "board">
                                <h2 class = "exampleBoardText">${text}</h2>
                                <div class = "taskContent"></div>
 
                                </div>`
        return boardText;
    }

    const createAddBoard = () => {
        let 
    }



    const renderListTasks = () => {
        removeContentBindings();
        dom.pageContent.innerHTML = "";
        listTasks.forEach(task => {
            if (task.board){
                let board = createBoard(task);
                dom.pageContent.innerHTML = board
            } else if (task.addBoard) {
                
            }
        })

        

    }


    const closeContent = (index) => {
        //closes content
    }

    const ativateContent = (index) => {
        listTasks = retrieveData(index);
    }
    



}