import format from 'date-fns/format'

import trashImage from "../images/trash.svg";
import editIcon from "../images/editOff.svg";
import checkMarkIcon from "../images/finished.svg";



import {removeItem, addItem, addBindings, removeBindings, setArray} from "./elementEvents.js"
import {send} from "./send.js"
import { getInitialElements, getUpdatedElements } from "./pageLayout.js";


import format from 'date-fns/format'


const Content = () => {

    let staticListTasks = [];
    let changedListTasks = []; 

    let staticBoardLists = [];
    let changedBoardLists = [];

    let currentPriorityText = "High";

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
       
        removeBindings(elements.taskAdders, addListEditor, "click")
        


    }

    const addContentBindings = () => {
        console.log("adding the content bindings")
        let elements = getUpdatedElements();
        console.log(elements.boarderButton, "elements boarder button")
        addBindings(elements.boarderButton, addBoardTasks,"click");
        addBindings(elements.deleteBoard,deleteBoard, "click");
        addBindings(elements.editBoard,editBoard,"click");

        addBindings(elements.taskAdders, addListEditor, "click");


        
    }


    const addListBindings = () => {
        let elements = getUpdatedElements();
        addBindings(elements.changeBoardTitleButtons, changeName, "click");
        addBindings(elements.button, shadeButtonColor, "click")
        addBindings(elements.trashIt,deleteTask, "click");
        addBindings(elements.finished,addTask, "click");

    }

    const removeListBindings = () => {
        let elements = getUpdatedElements();
        removeBindings(elements.changeBoardTitleButtons,changeName, "click");
        removeBindings(elements.button, shadeButtonColor, "click")
        removeBindings(elements.trashIt,deleteTask, "click");
        removeBindings(elements.finished,addTask, "click");
    }


    const unshadeButtons = ()=> {
        let elements = getUpdatedElements();
        let buttons = elements.button;
        buttons.forEach(element => {
            let elementChildren = Array.from(element.children);
            elementChildren.forEach(childElement => {
                childElement.style.background = "none";
                console.log(childElement, "the current child element")
            })
        })
    }


    const deleteTask =  () => {
        return;
    }





    const removeListEditor = () => {
        staticListTasks.forEach(task => {
            let newTasks = task.changedListTasks;
            newTasks = newTasks.filter(task => task.listEditor -= true );
            task.changedListTasks = newTasks;
        })
        renderBoardLists();

    }

    const findListEditorBoardIndex = () => {
        let newTasks = staticListTasks;
        let boardIndex = 0;
        let stopLoop = false;

        newTasks.forEach(board => {
            board.changedListTasks.forEach(task => {
                if (task.listEditor == true){
                    stopLoop = true;
                    return
                }
            })
            if (stopLoop) return;
            boardIndex ++;
            
        })
        return boardIndex;
    }

    const addTask =  () => {
        let elements = getUpdatedElements();
        let currentDate = elements.datePicker[0].value
        let taskText = elements.taskTextBox[0].value;
        let task = createTaskTemplate(taskText,currentDate, currentPriorityText);
        let boardIndex = findListEditorBoardIndex();
        staticListTasks[boardIndex].changedListTasks.push(task);
        removeListEditor();
        renderBoardLists();
    }

    const createTaskTemplate = (text,date,pritority) => {
        let task = {}
        task.isTask = true;
        task.text = text,
        task.date = date;
        task.dateText = format(task.date,"MMM d y")
        task.pritority = pritority;
        return task;
    
        
    }





    const shadeButtonColor = (event) => {
        unshadeButtons();
        let paragraph;
        if (event.target.getAttribute("class") == "button high" ||
            event.target.getAttribute("class") == "button medium" ||
            event.target.getAttribute("class") == "button low"
        ) paragraph = Array.from(event.target.children)[0];
        
        console.log(paragraph, "the current paragraph")

        if (event.target.getAttribute("class") == "highText") {
            event.target.style.background = "red";
            currentPriorityText = "High";
        } else if (event.target.getAttribute("class") == "mediumText"){
            event.target.style.background = "rgb(255,202,10)";
            currentPriorityText = "Medium";
        } else if (event.target.getAttribute("class") == "lowText"){
            event.target.style.background = "green";
            currentPriorityText = "Low";
        } else if (event.target.getAttribute("class") == "button high"){
            paragraph.style.background = "red";
            currentPriorityText = "High";
        } else if (event.target.getAttribute("class") == "button medium"){
            paragraph.style.background = "rgb(255,202,10)";
            currentPriorityText = "Medium";
        } else if (event.target.getAttribute("class") == "button low"){
            paragraph.style.background = "green";
            currentPriorityText = "Low";
        }
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
        console.log(changedBoardLists, " the changed board lists")
    
        let currentText = getElementByBoardIndex(index,"exampleBoardText").textContent;


        let editBoardTemplate = {editBoard: true, text:currentText};
        let newArray = [];
        newArray.push(editBoardTemplate);
        let finalArray = newArray.concat(changedBoardLists);

        staticListTasks[index].changedBoardLists = finalArray;

        console.log(staticListTasks[index].changedBoardLists, "changed boar list")
        currentIndex = index;
        renderBoardLists();
        
    }


    const addListEditor = (event) => {
    
        console.log("adding list editor")
        
        let currentText = "";

        let index = event.target.boardIndex;
        console.log(event.target, "event target")
        console.log(index, "the current new index")

        let listEditorTemplate = {listEditor: true, text:currentText, boardIndex:index};
        let listBoardArray = [listEditorTemplate];
        let newTasks = staticListTasks[index].changedBoardLists;
        let finalArray = newTasks.concat(listBoardArray);
        staticListTasks[index].changedBoardLists = finalArray;
        renderBoardLists()
    }


    const changeName = (event) => {
        let elements = getUpdatedElements();
        let boardText = elements.boardContentTextBox[0].value;
 //       console.log(exampleText, "the example text")

        
      //  console.log(boardText, " current board text")
     //   console.frendlog(exampleText, "the example text content")
        let newTasks = staticListTasks[currentIndex].changedBoardLists;
        newTasks = newTasks.filter(task => task.editBoard != true)
        
        staticListTasks[currentIndex].changedBoardLists = newTasks;
        staticListTasks[currentIndex].text = boardText;

        console.log(staticListTasks, "the static list tasks")

        renderListTasks();
    

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
        let taskLists = getElementByBoardIndex(index,"taskLists");
        let buttonText = "could not load text"
        let taskListChildren = Array.from(taskLists.children)
    
       
        taskListChildren.forEach(child => {
            if (child.getAttribute("class") == "boardTextEditor") {
                 buttonText = Array.from(child.children)[0].value;
                 return;
            }
            
        })
        return buttonText;
    }

    const renderBoardLists = () => {
        removeListBindings();
        removeBoardOverlay();
        currentPriorityText = "High"
        let indexesLength = staticListTasks.length;
        console.log(staticListTasks, "the static list task")
        for (let i = 0; i < indexesLength; i++) {
            console.log(i, "the index")
            if (staticListTasks.length != 0)renderSingleBoardList(i);

        }

        addListBindings();

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
        let taskList = getElementByBoardIndex(index, "taskLists");

       // console.log(taskHolder, "the task holder")
        taskList.innerHTML = "";
 //       console.log(index, "the index");
//        console.log(staticListTasks[index], "static list current index");
        console.log(staticListTasks[index], "static list tasks indexes")

        staticListTasks[index].changedBoardLists.forEach(task => {
            if (task.editBoard){
                let boardText = createBoardEditor(task);
                taskList.innerHTML += boardText;
                addBoardOverlay(index);
            } else if (task.listEditor){
                let listText= createListEditor(task.text);
                taskList.innerHTML += listText;
            } else if (task){}
        })

    }



    const addBoardTaskKeys = (event) => {
     //   console.log(event.key);
        if (event.key == "Enter") {
            addBoardTasks();
        }
    }


    const addBoardTasks = () => {
        console.log("adding board tasks")
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
                                    <p class = "generalText dateText">Due Nov 15 2021</p>
                                    <p class = "generalText priorityText">Priority: High</p>

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

                                                    <div class = "taskLists"></div>

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


    const createListEditor = (text) => {
        let listText = `<div class = "taskEditor">
                            <div class = "taskHolder">

                                <p class = "taskHolderText">Title:</p>
                                <input class = "taskTextBox" type="text" value = "${text}" >


                            </div>
                        
                                <div class = "dateTool">
                                    <p class = "dateText">Date: </p>
                                    <input class = "datePicker" type="date" >
                                </div>
                                <div class = "editToolHolder">
                                    <div class = "priority">
                                        <p class = "buttonText">Priority:</p>
                                        <div class = "buttons">
                                            <div class = "button high">
                                                <p class = "highText">High</p>
                                            </div>
                                            <div class = "button medium">
                                                <p class = "mediumText">Medium</p>
                                            </div>
                                            <div class = "button low">
                                                <p class = "lowText">Low</p>
                                            </div>

                                        </div>

                                        </div>
                                    


                                </div>
                                <div class = "editTools">
                                    <img class = "trashIt" src="${trashImage}" alt="">
                                    <img class = "finished" src="${checkMarkIcon}" alt="">
                                </div>

                            </div>`
                                        
    return listText;

        
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

            if (childElement.getAttribute("class") == "taskAdder"){
                let taskParagraph = Array.from(childElement.children)[0];
                console.log(taskParagraph, "the task paragraph")
                taskParagraph.boardIndex = currentIndex;
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
                    console.log(childElement.getAttribute("class"), "the current child element calss")
                    if (childElement.getAttribute("class") == "board") assignBoardIcons(childElement,currentIndex)
                 
                })
            }
            currentIndex ++;
        })
    }

    const renderListTasks = (bool) => {
        console.log("rendering list tasks")
        renderEditBoardTextValues();
        removeContentBindings();
        removeListBindings();

        let newTasks = changedListTasks.filter(task => task.addBoard != true);
        changedListTasks = newTasks;
        changedListTasks.push({addBoard: true});
        
        dom.pageContent.innerHTML = "";

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
                renderListTasks();
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




