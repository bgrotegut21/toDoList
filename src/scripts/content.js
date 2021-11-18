


import {removeItem, addItem, addBindings, removeBindings, setArray} from "./elementEvents.js"
import {send} from "./send.js"
import { getInitialElements, getUpdatedElements } from "./pageLayout.js";
import {findBoardTextBox, getElementByBoardIndex, getObjectValue, changeValueToDate, unshadeButtons, createTaskTemplate, findObjectByName } from "./utilities.js";
import {createTask,createBoard, createAddBoard, createBoardEditor, createListEditor} from "./template.js";

import {assignTools, assignTaskIndex, assignBoardElements} from "./assign.js";



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
        addBindings(elements.exitEditor, exitListEditor, "click");

    }

    const addTaskBindings = () => {
        addListBindings();
        addContentBindings();
    }
    
    const removeTaskBindings = () => {
        removeListBindings();
        removeContentBindings();
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
        removeBindings(elements.exitEditor, exitListEditor, "click");
    }



    const crossOutTask= (event) => {

        let taskIndex = event.target.taskIndex;
        let boardIndex = event.target.boardIndex;

        console.log(taskIndex, "the current taskindex");
        console.log(boardIndex, "the current board index")

        let task = staticListTasks[boardIndex].tasks[taskIndex];
        console.log(task, "the current task")

        task.checked ? task.checked = false: task.checked = true;


        let indexes = getIndexes()

        if (indexes) {
            let listIndex = indexes.listIndex;
            let boardIndex2 = indexes.boardIndex;

            console.log(listIndex, "the current list index");
            console.log(taskIndex,"the current task index")

            if (taskIndex == listIndex && boardIndex == boardIndex2) removeListEditor()
        }

        console.log(indexes, "the current list index");
        console.log(taskIndex, "the current task index")
       

        renderListEditorValue();
        renderBoardLists();

    }



    const deleteTask =  () => {
        let indexes = getIndexes();
        let taskIndex = indexes.listIndex;
        let boardIndex = indexes.boardIndex;

        console.log(taskIndex, "the current task index");
        console.log(boardIndex, "the board index")

        console.log(staticListTasks[boardIndex].tasks[taskIndex])

        let task = staticListTasks[boardIndex].tasks[taskIndex];
        task.listTask = false;

        let newArray = staticListTasks[boardIndex].tasks;
        console.log(newArray, "the before new array")

        let newerArray = [];

        newArray.forEach(task => {
            if (task.listTask != false){
                newerArray.push(task)
            }
        })

        console.log(newerArray, "the newer array")

        staticListTasks[boardIndex].tasks = newerArray




        removeListEditor();

        renderBoardLists();




        
    }




    const editTask = (event) => {

        // console.log([event.target])
        let boardIndex = event.target.boardIndex;
        let taskIndex = event.target.taskIndex;

        // console.log("\n")
        console.log(taskIndex, "the current task index")
 
        // console.log(boardIndex,"the current board index")
        // console.log(staticListTasks[boardIndex].changedBoardLists, "changed board lists")
        let task = staticListTasks[boardIndex].tasks[taskIndex];
        console.log(task.text, "the task text")
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



    const exitListEditor = () => {
        removeListEditor();
        renderBoardLists();
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





    const getIndexes = () => {
        let breakLoop = false;
        let indexes;
        let boardIndex = 0;
        let listIndex;
        staticListTasks.forEach(task => {
            task.changedBoardLists.forEach(listTask => {
                if (listTask.listEditor){
                    if (typeof listTask.index != "undefined"){
                        listIndex = listTask.index;
                        indexes  = {boardIndex, listIndex};
                    }       
                    else indexes = false;
                    breakLoop = true;
                }
            })
            if (breakLoop) return;
            boardIndex ++;
        })
        return indexes;
    }






    const addTaskClick = () => {
        let indexes = getIndexes();

        if (indexes !== false){
            addTask(indexes.listIndex);
        } else {
            addTask();
        }
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

        let priority = getObjectValue("listEditor","priority",staticListTasks);

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




    const changeListEditorPriority  = (currentPriority) => {
        let listEditor = findObjectByName("listEditor",staticListTasks);
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
        changedListTasks = staticListTasks
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
                                    priority: "High",boardIndex:boardIndex, creatingTask: true};
        
       
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
        let addDate = false;
        let date;

       // console.log(taskHolder, "the task holder")
        taskList.innerHTML = "";
 //       console.log(index, "the index");
//        console.log(staticListTasks[index], "static list current index");
        // console.log(staticListTasks[index], "static list tasks indexes")
        // console.log(staticListTasks[index].changedBoardLists, "static change board lists")

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
                date = task.date;
                addDate = true;


            } else if (task.listTask){
                // console.log(task, "the current task")
                let taskText = createTask(task);
                taskList.innerHTML += taskText;
         




            }
        })


        if (addDate) setTaskDate(date);
        let taskListChildren = Array.from(taskList.children)
        // console.log(taskList, "current task list")
        let boardIndex = taskList.boardIndex;
        assignTaskIndex(taskListChildren,boardIndex);



    }


    const setTaskDate = (date) => {
        let element = getUpdatedElements();
        let datePicker = element.datePicker[0];
        datePicker.valueAsDate = date;
    }
     

    const addBoardTaskKeys = (event) => {
     //   console.log(event.key);
        if (event.key == "Enter") {
            addBoardTasks();
        }
    }


    const renderListEditorValue = () => {
        let listEditor = findObjectByName("listEditor",staticListTasks);
        if (!listEditor) return;

        // console.log(listEditor, "the current list editor")


        let elements = getUpdatedElements();
        let datePicker = elements.datePicker[0];
        let taskTextBox = elements.taskTextBox[0];

        // console.log(datePicker);
        // console.log(taskTextBox);
        // if(datePicker) console.log(datePicker.valueAsDate, "date picker current date");
        // if (taskTextBox)console.log(taskTextBox.value, "textbox")
        if (datePicker)  listEditor.date = datePicker.valueAsDate;
        if (taskTextBox) listEditor.text = taskTextBox.value;

        
    }
    
    const addBoardTasks = () => {
        // console.log("adding board tasks")


        renderListEditorValue();
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
    






    const renderListTasks = (isEmpty) => {
        console.log("rendering list tasks")
        renderEditBoardTextValues();
        removeContentBindings();
        removeListBindings();

        if (!isEmpty){
            let newTasks = changedListTasks.filter(task => task.addBoard != true);
            changedListTasks = newTasks;
            changedListTasks.push({addBoard: true});

        }

        
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
                renderListTasks(true);
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

    return {activateContent,removeTaskBindings, addTaskBindings };
    




}

export default Content;




