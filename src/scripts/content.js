import format from 'date-fns/format'

import trashImage from "../images/trash.svg";
import editIcon from "../images/editOff.svg";
import checkMarkIcon from "../images/finished.svg";



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

    let newIndex = false;

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
       
        removeBindings(elements.taskAdders, addListEditorClick, "click")
        


    }

    const addContentBindings = () => {
        // console.log("adding the content bindings")
        let elements = getUpdatedElements();
        // console.log(elements.boarderButton, "elements boarder button")
        addBindings(elements.boarderButton, addBoardTasks,"click");
        addBindings(elements.deleteBoard,deleteBoard, "click");
        addBindings(elements.editBoard,editBoard,"click");

        addBindings(elements.taskAdders, addListEditorClick, "click");


        
    }


    const addListBindings = () => {
        let elements = getUpdatedElements();
        addBindings(elements.button, shadeButtonColor, "click")
        addBindings(elements.trashIt,deleteTask, "click");
        addBindings(elements.finished,addTaskClick, "click");
        addBindings(elements.edit, editTask, "click");
        addBindings(elements.circleIcon, crossOutTask, "click");

    }

    const addChangeNameBinding = () => {
        let elements = getUpdatedElements();
        addBindings(elements.changeBoardTitleButtons, changeName, "click");
    }

    const removeListBindings = () => {
        let elements = getUpdatedElements();
        removeBindings(elements.changeBoardTitleButtons,changeName, "click");
        removeBindings(elements.button, shadeButtonColor, "click")
        removeBindings(elements.trashIt,deleteTask, "click");
        removeBindings(elements.finished,addTaskClick, "click");
        removeBindings(elements.edit, editTask, "click");
        removeBindings(elements.circleIcon, crossOutTask, "click");
    }


    const unshadeButtons = ()=> {
        let elements = getUpdatedElements();
        let buttons = elements.button;
        buttons.forEach(element => {
            let elementChildren = Array.from(element.children);
            elementChildren.forEach(childElement => {
                childElement.style.background = "none";
                // console.log(childElement, "the current child element")
            })
        })
    }


    const deleteTask =  () => {
        return;
    }




    const editTask = (event) => {

        // console.log([event.target])
        let boardIndex = event.target.boardIndex;
        let taskIndex = event.target.taskIndex;
        console.log("\n")
        console.log(taskIndex, "the current task index")
        console.log(boardIndex,"the current board index")
        console.log(staticListTasks[boardIndex].changedBoardLists, "changed board lists")
        let task = staticListTasks[boardIndex].tasks[taskIndex];
        let text = task.text;
        let date = task.date;
        let priority = task.priority;

       // console.log(date, "the current date")
      //  console.log(task, "the current task")
        // console.log(task.date, "the current date")


        // console.log(priority, "the current priotrity")
        // console.log(taskIndex);
        // console.log(text);
        // console.log(boardIndex);

        

        addListEditor(boardIndex, taskIndex, text, date,priority)
        

        
    }

    const crossOutTask = () => {
        return;
    }





    const removeListEditor = () => {
        staticListTasks.forEach(task => {
            let newTasks = task.changedBoardLists;
            newTasks = newTasks.filter(task => task.listEditor != true );
            task.changedBoardLists = newTasks;
        })

    }

    const findListEditorBoardIndex = () => {
        let newTasks = staticListTasks;
        let boardIndex = 0;
        let stopLoop = false;

        newTasks.forEach(board => {
            // console.log(board, "the current board")
            board.changedBoardLists.forEach(task => {
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


    const changeValueToDate = (value) => {
        let newValue = value.split("-");
        let year = newValue[0];
        let monthIndex = newValue[1] -1;
        let day = newValue[2];


        let date = new Date(year,monthIndex,day);
        return date;



    }

    const getIndexes = () => {
        let breakLoop = false;
        let indexes;
        staticListTasks.forEach(task => {
            task.changedBoardLists.forEach(listTask => {
                if (listTask.listEditor){
                    if (typeof listTask.index != "undefined") indexes = listTask.index;        
                    else indexes = false;
                    breakLoop = true;
                }
            })
            if (breakLoop) return;
        })
        return indexes;
    }



    const addTaskClick = () => {
        let indexes = getIndexes();
        if (indexes !== false){
            addTask(indexes);
        } else {
            addTask();
        }
    }

    const getObjectValue = (currentObject, value) => {
        let objectValue = findObjectByName(currentObject);
        let newValue = false;
        if (objectValue != false) newValue = objectValue[value];
        return newValue;
    }

    const addTask =  (index) => {
    

    

        let elements = getUpdatedElements();
        let dateValue = elements.datePicker[0].value
        let currentDate;
    
        if (dateValue.length == 0) currentDate = new Date();
        else currentDate = changeValueToDate(dateValue);
        // console.log(currentDate, "the current date")
        let taskText = elements.taskTextBox[0].value;
        if (taskText.length == 0) taskText = "New Task";

        let priority = getObjectValue("listEditor","priority");

        let task = createTaskTemplate(taskText,currentDate,priority);
        let boardIndex = findListEditorBoardIndex();
        // console.log(boardIndex);
        // console.log(task,"the current task")

        // console.log(index, "the current value of index")

         if (typeof index != "undefined") {
            staticListTasks[boardIndex].tasks[index] = task;
            let tasks = staticListTasks[boardIndex].tasks;
            staticListTasks[boardIndex].changedBoardLists = tasks;

         } else {
             staticListTasks[boardIndex].tasks.push(task);
             let tasks = staticListTasks[boardIndex].tasks;
            //  console.log(tasks, "the current tasks")
             staticListTasks[boardIndex].changedBoardLists = tasks;
         }
        //  console.log(staticListTasks[boardIndex].changedBoardLists, "static change board lists");
        //  console.log(staticListTasks[boardIndex].tasks, "taskos")

        renderBoardLists();
    }

    const createTaskTemplate = (text,date,priority) => {
        let task = {}
        task.listTask = true;
        task.text = text,
        task.date = date;
        task.dateText = format(task.date,"MMM d y")
        task.priority = priority;
        task.checked = false;
        return task;
    
        
    }




    const shadeButtonByClass = (className,color) => {
        let elements = getUpdatedElements();
        let buttons = elements.button;
        let button = buttons.filter(button => button.getAttribute("class") == className)[0];
        let buttonParagraph = Array.from(button.children)[0];
        // console.log(buttonParagraph,"The current button paragraph")
        buttonParagraph.style.background = color;

    }

    const shadeButtonByPriority = (priority) => {


        if (priority == "High") shadeButtonByClass("button high","red");
        else if (priority == "Medium") shadeButtonByClass("button medium", "#ff9800");
        else if (priority == "Low") shadeButtonByClass("button low", "green");

    }


    const findObjectByName = (name) => {
        let currentObject = false;
        let breakLoop;
        staticListTasks.forEach(task => {
            task.changedBoardLists.forEach(listTask => {
                if (listTask[name]){
                    currentObject = listTask;
                    breakLoop = true
                    return
                }
            })
            if (breakLoop) return;

        })

        // console.log(currentObject, "the current object")
        return currentObject;

    }

    const changeListEditorPriority  = (currentPriority) => {
        let listEditor = findObjectByName("listEditor");
        // console.log(listEditor, "current list editor")
        listEditor.priority = currentPriority;
        

    }


    const shadeButtonColor = (event) => {
        unshadeButtons();
        let paragraph;
        if (event.target.getAttribute("class") == "button high" ||
            event.target.getAttribute("class") == "button medium" ||
            event.target.getAttribute("class") == "button low"
        ) paragraph = Array.from(event.target.children)[0];
        
        // console.log(paragraph, "the current paragraph")

        if (event.target.getAttribute("class") == "highText") {
            event.target.style.background = "red";
            changeListEditorPriority("High")

        } else if (event.target.getAttribute("class") == "mediumText"){
            event.target.style.background = "#ff9800";
            changeListEditorPriority("Medium")

        } else if (event.target.getAttribute("class") == "lowText"){
            event.target.style.background = "green";
            changeListEditorPriority("Low")
        } else if (event.target.getAttribute("class") == "button high"){
            paragraph.style.background = "red";
            changeListEditorPriority("High")

        } else if (event.target.getAttribute("class") == "button medium"){
            paragraph.style.background = "#ff9800";
            changeListEditorPriority("Medium")
        } else if (event.target.getAttribute("class") == "button low"){
            paragraph.style.background = "green";
            changeListEditorPriority("Low")
        }
    }



    const deleteBoard = (event) => {
        // console.log(staticListTasks, " the static list tasks");
        // console.log(send.retrieveData(index), "send retrieve index")

        staticListTasks = removeItem(staticListTasks, event.target.boardIndex);
    

        // console.log(staticListTasks, "static list tasks");
        changedListTasks = setArray(staticListTasks);
        // console.log(changedListTasks, "the changed list tasks");
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
        

        // console.log(index, " the index")
        let changedBoardLists = staticListTasks[index].changedBoardLists
        // console.log(changedBoardLists, " the changed board lists")
    
        let currentText = getElementByBoardIndex(index,"exampleBoardText").textContent;


        let editBoardTemplate = {editBoard: true, text:currentText};
        let newArray = [];
        newArray.push(editBoardTemplate);
        let finalArray = newArray.concat(changedBoardLists);

        staticListTasks[index].changedBoardLists = finalArray;

        // console.log(staticListTasks[index].changedBoardLists, "changed boar list")
        currentIndex = index;
        renderBoardLists(true);
        
    }

    const addListEditorClick = (event) => {
        let boardIndex = event.target.boardIndex;
        addListEditor(boardIndex)


    }

    


    const addListEditor = (boardIndex,index,text,date,priority) => {


        removeListEditor()
    
        // console.log("adding list editor")
        // console.log(boardIndex, "the current board index")


    
        let finalArray;
        let listEditorTemplate;
        let currentDate = new Date();

        // console.log(index, "the current index")
        // console.log(typeof index != "undefined")
        // console.log(priority, "the current priority")

        // console.log(index, "the current index")
       //  console.log(date, "the current date")
        
        if (typeof index != "undefined")  listEditorTemplate = {listEditor: true, text:text,date: date,
                                                                priority:priority, boardIndex:boardIndex, index: index};
        else listEditorTemplate = {listEditor: true, text:"",date:currentDate,
                                    priority: "High",boardIndex:boardIndex};
        
       
        //  console.log(listEditorTemplate.priority, "list editor priority")

    

        if (typeof index != "undefined") {
        
            let newTasks = staticListTasks[boardIndex].changedBoardLists;
            newTasks.splice(index +1,0,listEditorTemplate);
            finalArray = newTasks
        } else {
            let listBoardArray = [listEditorTemplate];
            let newTasks = staticListTasks[boardIndex].changedBoardLists;
            finalArray = newTasks.concat(listBoardArray);

        }



        staticListTasks[boardIndex].changedBoardLists = finalArray;

        renderBoardLists();
    }


    const changeName = (event) => {
        let elements = getUpdatedElements();
        let boardText = elements.boardContentTextBox[0].value;
        if (boardText.length == 0 ){
            removeEditTitleMenu();
            renderBoardLists();
            return;
        }   
 //       console.log(exampleText, "the example text")

        
      //  console.log(boardText, " current board text")
     //   console.frendlog(exampleText, "the example text content")
        let newTasks = staticListTasks[currentIndex].changedBoardLists;
        newTasks = newTasks.filter(task => task.editBoard != true)
        
        staticListTasks[currentIndex].changedBoardLists = newTasks;
        staticListTasks[currentIndex].text = boardText;

        // console.log(staticListTasks, "the static list tasks")

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
                // console.log(index, " the current index")
                if (list.editBoard){
                    let currentText = findBoardTextBox(index);
                    // console.log(currentText, " the current text")
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

    const renderBoardLists = (isChangedName) => {
        removeListBindings();
        removeBoardOverlay();
        let indexesLength = staticListTasks.length;
        // console.log(staticListTasks, "the static list task")
        for (let i = 0; i < indexesLength; i++) {
            // console.log(i, "the index")
            if (staticListTasks.length != 0)renderSingleBoardList(i);

        }

        if (!isChangedName)addListBindings();
        else addChangeNameBinding();
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
        // console.log(staticListTasks[index], "static list tasks indexes")
        // console.log(staticListTasks[index].changedBoardLists, "static change board lists")
        let taskDate;
        staticListTasks[index].changedBoardLists.forEach(task => {
            // console.log(task, "each individual task")

            if (task.editBoard){
                let boardText = createBoardEditor(task);
                taskList.innerHTML += boardText;
                addBoardOverlay(index);
            } else if (task.listEditor){
                let listText= createListEditor(task);
                taskList.innerHTML += listText;
                // console.log(task.listEditor, "task list editor date")
                // console.log(task.priority, "task priority")
                shadeButtonByPriority(task.priority);
                taskDate = task.date;
  

            } else if (task.listTask){
                // console.log(task, "the current task")
                let taskText = createTask(task);
                taskList.innerHTML += taskText;
         




            }
        })
        setTaskDate(taskDate);
        let taskListChildren = Array.from(taskList.children)
        // console.log(taskList, "current task list")
        let boardIndex = taskList.boardIndex;

        assignTaskIndex(taskListChildren,boardIndex);



    }

    const setTaskDate = (date) => {

        let element = getUpdatedElements();
        let dateTool = element.dateTools[0];
        let datePicker = Array.from(dateTool.children)[1]
        console.log([dateTool], "the tool")
        
        datePicker.value = "2021-11-10"

    }

    const assignTools = (elements,index,boardIndex) => {
        elements.forEach(childElement => {
            if (childElement.getAttribute("class") == "tools"){
                let toolsChildren = Array.from(childElement.children);
                toolsChildren.forEach(toolElement => 
                    {
                    // console.log(toolElement, "current tool element")
                    toolElement.taskIndex = index;
                    toolElement.boardIndex = boardIndex;
                })
            }
        })


    }

    const assignTaskIndex = (element,boardIndex) => {
    
        let taskIndex =0;
        // console.log(boardIndex, "the current boardIndex")

        element.forEach(childElement => {
            // console.log(childElement, "the child element")
            if (childElement.getAttribute("class") == "task"){
                let taskChildren = Array.from(childElement.children);
                taskChildren.forEach(taskChild => {
                    if (taskChild.getAttribute("class") == "taskTools"){
                        let taskToolsChildren = Array.from(taskChild.children);
                        assignTools(taskToolsChildren,taskIndex,boardIndex);
                    }
                })
                taskIndex++
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
        // console.log("adding board tasks")
        let elements = getUpdatedElements();
        let text = elements.boardTextBox[0].value;
        if(text.length == 0) text = "New Board";
        let task = createBoardTemplate(text);
        staticListTasks.push(task);
        changedListTasks = setArray(staticListTasks)

    //    console.log(staticListTasks, "the static list tasks")

        renderListTasks();
    }

    const addToDoTasks = (currentIndex) => {
        

    }



    const createBoardTemplate =(currentText,tasks) => {
        let currentTasks = [];
        if (typeof tasks != "undefined") currentTasks = tasks; 

        let board = {board: true, text:currentText, tasks: currentTasks, changedBoardLists: []};


        return board;
    }
    

    

    const createTask = (task) => {
        let color;
        if (task.priority == "High") color = "red";
        if (task.priority == "Low") color = "green";
        if (task.priority == "Medium") color = "#ff9800"

        let taskText = `<div class = "task" style = "border-color:${color}">
                            <p class = "taskLabel">${task.text}</p>
                            <div class = "taskTools">
                                <div class = "generalTextHolder">
                                    <p class = "generalText dateText">Due: ${task.dateText}</p>
                                    <p class = "generalText priorityText">Priority: ${task.priority}</p>

                                </div>

                                <div class = "tools">
                                    <img class = "edit" src="${editIcon}" alt="">
                                    <div class = "circleIcon"></div>
                                </div>
                            </div>`
        return taskText;
        
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


    const createListEditor = (task) => {
        let text = task.text;
        let listText = `<div class = "taskEditor">
                            <div class = "taskHolder">

                                <p class = "taskHolderText">Title:</p>
                                <input class = "taskTextBox" type="text" value = "${text}"  >


                            </div>
                        
                                <div class = "dateTool">
                                    <p class = "dateText">Date: </p>
                                    <input class = "datePicker" type="date">
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
                // console.log(taskParagraph, "the task paragraph")
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

    const setChangedToDoLists = () => {
        staticListTasks.forEach(task => {
            task.changedBoardLists =  task.tasks;
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
        // console.log(newTasks, " the new task")
        if (!newTasks){
            send.sendData([],index)
            newTasks = send.retrieveData(index);
        }
        staticListTasks = newTasks;
        // console.log(staticListTasks, "the static list tasks")
        changedListTasks = staticListTasks;
        setChangedToDoLists();

        renderListTasks();
    
    
    }

    return {activateContent};
    




}

export default Content;




