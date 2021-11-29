

// do not forget to fix spaces problem
// do not forget to fix spaces problem
// do not forget to fix spaces problem
// do not forget to fix spaces problem
// do not forget to fix spaces problem

// do not forget to fix spaces problem
// do not forget to fix spaces problem


import {removeItem, addItem, addBindings, removeBindings, setArray, setObject} from "./elementEvents.js"
import {send} from "./send.js"
import { getInitialElements, getUpdatedElements } from "./pageLayout.js";
import {findBoardTextBox, getElementByBoardIndex, getObjectValue, changeValueToDate, unshadeButtons, createTaskTemplate, findObjectByName } from "./utilities.js";
import {createTask,createBoard, createAddBoard, createBoardEditor, createListEditor, createUpComingBoard} from "./template.js";

import isToday from 'date-fns/isToday'
import isThisWeek from 'date-fns/isThisWeek'
import getDayOfYear from 'date-fns/getDayOfYear'




import {assignTools, assignTaskIndex, assignBoardElements} from "./assign.js";



const Content = () => {

    let staticListTasks = [];
    let changedListTasks = []; 

    let upcomingTasks = []

    let deletedUpComingItems = [];

    let index;
    let currentIndex;
    let isUpComing = false;

    let newIndex = false;
    let canDisrupt = false
    let name;




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
        // //console.log("adding the content bindings")
        let elements = getUpdatedElements();
        // //console.log(elements.boarderButton, "elements boarder button")
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

        //console.log(taskIndex, "the current taskindex");
        //console.log(boardIndex, "the current board index")

        let task = staticListTasks[boardIndex].tasks[taskIndex];
        //console.log(task, "the current task")

        task.checked ? task.checked = false: task.checked = true;


        let indexes = getIndexes()

        if (indexes) {
            let listIndex = indexes.listIndex;
            let boardIndex2 = indexes.boardIndex;

            //console.log(listIndex, "the current list index");
            //console.log(taskIndex,"the current task index")

            if (taskIndex == listIndex && boardIndex == boardIndex2) removeListEditor()
        }

        //console.log(indexes, "the current list index");
        //console.log(taskIndex, "the current task index")
       

        renderListEditorValue();
        renderBoardLists();

    }


    

    const deleteTask =  () => {
        let indexes = getIndexes();
        let taskIndex = indexes.listIndex;
        let boardIndex = indexes.boardIndex;




        //console.log(taskIndex, "the current task index");
        //console.log(boardIndex, "the board index")

        //console.log(staticListTasks[boardIndex].tasks[taskIndex])



        let task = staticListTasks[boardIndex].tasks[taskIndex];
        task.listTask = false;

        



        let newArray = staticListTasks[boardIndex].tasks;
        //console.log(newArray, "the before new array")

        let newerArray = [];

        newArray.forEach(task => {
            if (task.listTask){
                newerArray.push(task)
            } else {
                if (isUpComing) deletedUpComingItems.push(task);
            }
        })

        //console.log(newerArray, "the newer array")

        staticListTasks[boardIndex].tasks = newerArray



        let tasks =   staticListTasks[boardIndex].tasks
        removeListEditor();
        staticListTasks[boardIndex].changedBoardLists = tasks;
            






        removeListEditor();

        renderBoardLists();




        
    }




    const editTask = (event) => {

        // //console.log([event.target])
        let boardIndex = event.target.boardIndex;
        let taskIndex = event.target.taskIndex;

        // //console.log("\n")
        //console.log(taskIndex, "the current task index")
 
        // //console.log(boardIndex,"the current board index")
        // //console.log(staticListTasks[boardIndex].changedBoardLists, "changed board lists")
        let task = staticListTasks[boardIndex].tasks[taskIndex];
        //console.log(task.text, "the task text")
        let text = task.text;
        let date = task.date;
        let priority = task.priority;

       // //console.log(date, "the current date")
      //  //console.log(task, "the current task")
        // //console.log(task.date, "the current date")


        // //console.log(priority, "the current priotrity")
        // //console.log(taskIndex);
        // //console.log(text);
        // //console.log(boardIndex);

       //console.log(taskIndex, "the current task index");

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
            // //console.log(board, "the current board")
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

    // const getTaskByListIndex = (index) => {
    //     let boardIndex = 0
    //     let currentTaskIndex = false;
    //    //console.log(changedListTasks, "the changed")
    //     let breakLoop = false;

    //     changedListTasks.forEach(board => {
    //         if (board.board || board.isUpComing){
    //             let taskIndex = 0;
    //             board.changedBoardLists.forEach(task => {
    //                 if (task.listEditor){
    //                     currentTaskIndex = taskIndex;
    //                     breakLoop = true;
    //                     return;
    //                 }
    //                 taskIndex ++;
    
    //             })
    //         }
    //         if (breakLoop) return;
    //         boardIndex ++;
    //     })

    //     if (!currentTaskIndex) return false;
    //     return staticListTasks[boardIndex].tasks[currentTaskIndex];

    // }

 
    // const updateNavTasks = (navIndex, boardIndex, taskIndex, newTask) => {
    //     let allTasks = send.getAllData();
    //     allTasks[navIndex][boardIndex].tasks[taskIndex] = newTask;
    //     send.overwriteData(allTasks);
        


    // }






    const changeDuplicateTasks = (navIndex,boardIndex,taskIndex, newTask) => {

       //console.log(staticListTasks, "the current static list tasks")


        let currentBoardIndex =0;

        staticListTasks.forEach(board => {
            let currentTaskIndex = 0


            board.tasks.forEach(task => {
                if (task.navIndex == navIndex) {
                    if (task.boardIndex){
                        if (task.boardIndex == boardIndex){
                            if (task.taskIndex == taskIndex){
                                //console.log(task);
                                //console.log(taskIndex, "current task index");
                                //console.log(newTask, "zee current new task")
         
                                 staticListTasks[currentBoardIndex].tasks[currentTaskIndex] = newTask;
                                 let tasks = staticListTasks[currentBoardIndex].tasks;
                                 staticListTasks[currentBoardIndex].changedBoardLists = tasks;
                             }

                        }
                    } else {
                        if (task.taskIndex == taskIndex){
                            //console.log(task);
                            //console.log(taskIndex, "current task index");
                            //console.log(newTask, "zee current new task")
                             staticListTasks[currentBoardIndex].tasks[currentTaskIndex] = newTask;
                             let tasks = staticListTasks[currentBoardIndex].tasks;
                             staticListTasks[currentBoardIndex].changedBoardLists = tasks;
                         }
                        
                    }
        


                }
                currentTaskIndex ++
            })
            currentBoardIndex ++;

 
        })

       //console.log(staticListTasks, "the current static list tasks starter")

    }





// upcoming task array will always give a unique task index because it using the length of the upcoming task
// which is only chaged when we get new data. The new data will change the task index so that it is in order
// so it isn't just a random number and that is why upcoming works.
    const addTask =  (index) => {
        let elements = getUpdatedElements();
        let dateValue = elements.datePicker[0].value
        let currentDate;
    
        if (dateValue.length == 0) currentDate = new Date();
        else currentDate = changeValueToDate(dateValue);
        // //console.log(currentDate, "the current date")
        let taskText = elements.taskTextBox[0].value;
        if (taskText.length == 0) taskText = "New Task";

        let priority = getObjectValue("listEditor","priority",staticListTasks);


        
        let task = createTaskTemplate(taskText,currentDate,priority);
        let boardIndex = findListEditorBoardIndex();
        // //console.log(boardIndex);
        // //console.log(task,"the current task")

        // //console.log(index, "the current value of index")

         if (typeof index != "undefined") {
            if (isUpComing){
                let oldTask =   staticListTasks[boardIndex].tasks[index];

                task.navName = oldTask.navName;
                task.taskIndex = oldTask.taskIndex;
                if (typeof oldTask.boardIndex != "undefined") task.boardIndex = oldTask.boardIndex;
                task.navIndex = oldTask.navIndex;


            }

            
            staticListTasks[boardIndex].tasks[index] = task;
            let tasks = staticListTasks[boardIndex].tasks;
            staticListTasks[boardIndex].changedBoardLists = tasks;
            if (isUpComing) changeDuplicateTasks(task.navIndex,task.boardIndex,task.taskIndex,task);



         } else {
            //console.log(task, "The current added task")

            if (isUpComing){
                task.navIndex = "upcoming";
                task.navName = "Upcoming";
                upcomingTasks.push(task);
                task.taskIndex = upcomingTasks.length -1;
                console.log(upComingTask, "the upcoming tasks")

            }

             staticListTasks[boardIndex].tasks.push(task);
             let tasks = staticListTasks[boardIndex].tasks;
            //  //console.log(tasks, "the current tasks")
             staticListTasks[boardIndex].changedBoardLists = tasks;
         }
        //  //console.log(staticListTasks[boardIndex].changedBoardLists, "static change board lists");
        //  //console.log(staticListTasks[boardIndex].tasks, "taskos")
        if (isUpComing) removeOutOfDateTasks();
        renderBoardLists();
    }



    const removeOutOfDateTasks = () => {
        let boardIndex = 0;

        staticListTasks.forEach(board => {
            board.tasks.forEach(task => {

2
                let tasks = board.tasks;
                let newTasks = tasks.filter(newTask => newTask.date != task.date)

                console.log(tasks, "the current tasks");
                console.log(newTasks, "the current new tasks")

                 if  (!isThisWeek(task.date)) tasks = newTasks;
            
                staticListTasks[boardIndex].tasks = tasks;
                staticListTasks[boardIndex].changedBoardLists = tasks;
            })
            boardIndex ++;
        

        })



    }


    const shadeButtonByClass = (className,color) => {
        let elements = getUpdatedElements();
        let buttons = elements.button;
        let button = buttons.filter(button => button.getAttribute("class") == className)[0];
        let buttonParagraph = Array.from(button.children)[0];
        // //console.log(buttonParagraph,"The current button paragraph")
        buttonParagraph.style.background = color;

    }

    const shadeButtonByPriority = (priority) => {


        if (priority == "High") shadeButtonByClass("button high","red");
        else if (priority == "Medium") shadeButtonByClass("button medium", "#ff9800");
        else if (priority == "Low") shadeButtonByClass("button low", "green");

    }




    const changeListEditorPriority  = (currentPriority) => {
        let listEditor = findObjectByName("listEditor",staticListTasks);
        // //console.log(listEditor, "current list editor")
        listEditor.priority = currentPriority;
        

    }


    const shadeButtonColor = (event) => {
        unshadeButtons();
        let paragraph;
        if (event.target.getAttribute("class") == "button high" ||
            event.target.getAttribute("class") == "button medium" ||
            event.target.getAttribute("class") == "button low"
        ) paragraph = Array.from(event.target.children)[0];
        
        // //console.log(paragraph, "the current paragraph")

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
        // //console.log(staticListTasks, " the static list tasks");
        // //console.log(send.retrieveData(index), "send retrieve index")

        staticListTasks = removeItem(staticListTasks, event.target.boardIndex);
    

        // //console.log(staticListTasks, "static list tasks");
        changedListTasks = staticListTasks
        // //console.log(changedListTasks, "the changed list tasks");
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
        

        // //console.log(index, " the index")
        let changedBoardLists = staticListTasks[index].changedBoardLists
        // //console.log(changedBoardLists, " the changed board lists")
    
        let currentText = getElementByBoardIndex(index,"exampleBoardText").textContent;


        let editBoardTemplate = {editBoard: true, text:currentText};
        let newArray = [];
        newArray.push(editBoardTemplate);
        let finalArray = newArray.concat(changedBoardLists);

        staticListTasks[index].changedBoardLists = finalArray;

        // //console.log(staticListTasks[index].changedBoardLists, "changed boar list")
        currentIndex = index;
        renderBoardLists(true);
        
    }

    const addListEditorClick = (event) => {
        let boardIndex = event.target.boardIndex;
        addListEditor(boardIndex)


    }

    


    const addListEditor = (boardIndex,index,text,date,priority) => {


        removeListEditor()
    
        // //console.log("adding list editor")
        // //console.log(boardIndex, "the current board index")


    
        let finalArray;
        let listEditorTemplate;
        let currentDate = new Date();

        // //console.log(index, "the current index")
        // //console.log(typeof index != "undefined")
        // //console.log(priority, "the current priority")

        // //console.log(index, "the current index")
       //  //console.log(date, "the current date")
        
        if (typeof index != "undefined")  listEditorTemplate = {listEditor: true, text:text,date: date,
                                                                priority:priority, boardIndex:boardIndex, index: index};
        else listEditorTemplate = {listEditor: true, text:"",date:currentDate,
                                    priority: "High",boardIndex:boardIndex, creatingTask: true};
        
       
        //  //console.log(listEditorTemplate.priority, "list editor priority")

    
       //console.log(index, "the current index")

        if (typeof index != "undefined") {
        
            let newTasks = staticListTasks[boardIndex].changedBoardLists;
           //console.log(index +1, "the current splice index")

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
 //       //console.log(exampleText, "the example text")

        
      //  //console.log(boardText, " current board text")
     //   console.frendlog(exampleText, "the example text content")
        let newTasks = staticListTasks[currentIndex].changedBoardLists;
        newTasks = newTasks.filter(task => task.editBoard != true)
        
        staticListTasks[currentIndex].changedBoardLists = newTasks;
        staticListTasks[currentIndex].text = boardText;

        // //console.log(staticListTasks, "the static list tasks")

        renderListTasks();
    

    }


//dom element names come from the updated element types



    const renderEditBoardTextValues  = () => {
        let index = 0;
        let elements = getUpdatedElements();
        staticListTasks.forEach(task => {
            task.changedBoardLists.forEach(list =>{
                // //console.log(index, " the current index")
                if (list.editBoard){
                    let currentText = findBoardTextBox(index);
                    // //console.log(currentText, " the current text")
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
        //console.log(staticListTasks, "the static list tasks")

       //console.log(staticListTasks, "the static list task")
        for (let i = 0; i < indexesLength; i++) {
             //console.log(i, "the index")
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
       //console.log(renderSingleBoardList, "render single board list")
        let taskList = getElementByBoardIndex(index, "taskLists");
        let addDate = false;
        let date;
       //console.log(taskList, "the current task list")

       // //console.log(taskHolder, "the task holder")
        taskList.innerHTML = "";
  ////     //console.log(taskList, "the current task list")
 //       //console.log(index, "the index");
//        //console.log(staticListTasks[index], "static list current index");
        // //console.log(staticListTasks[index], "static list tasks indexes")
        // //console.log(staticListTasks[index].changedBoardLists, "static change board lists")

        staticListTasks[index].changedBoardLists.forEach(task => {
            ////console.log(task, "each individual task")
            if (task.editBoard){
                let boardText = createBoardEditor(task);
                taskList.innerHTML += boardText;
                addBoardOverlay(index);
            } else if (task.listEditor){

                
           

                let listText= createListEditor(task);
                taskList.innerHTML += listText;
                // //console.log(task.listEditor, "task list editor date")
                // //console.log(task.priority, "task priority")
                shadeButtonByPriority(task.priority);
                date = task.date;
                addDate = true;


            } else if (task.listTask){
                ////console.log(task, "the current task")
                let taskText = createTask(task);
                ////console.log(taskText, "the current task text");
                taskList.innerHTML += taskText;
                ////console.log(taskList," the text list")




            }
        })
     


        if (addDate) setTaskDate(date);
        let taskListChildren = Array.from(taskList.children)
      //console.log(taskList, "current task list")
        let boardIndex = taskList.boardIndex;
        assignTaskIndex(taskListChildren,boardIndex);



    }


    const setTaskDate = (date) => {
        let element = getUpdatedElements();
        let datePicker = element.datePicker[0];
        datePicker.valueAsDate = date;
    }
     

    const addBoardTaskKeys = (event) => {
     //   //console.log(event.key);
        if (event.key == "Enter") {
            addBoardTasks();
        }
    }


    const renderListEditorValue = () => {
        let listEditor = findObjectByName("listEditor",staticListTasks);
        if (!listEditor) return;

        // //console.log(listEditor, "the current list editor")


        let elements = getUpdatedElements();
        let datePicker = elements.datePicker[0];
        let taskTextBox = elements.taskTextBox[0];

        // //console.log(datePicker);
        // //console.log(taskTextBox);
        // if(datePicker) //console.log(datePicker.valueAsDate, "date picker current date");
        // if (taskTextBox)//console.log(taskTextBox.value, "textbox")
        if (datePicker)  listEditor.date = datePicker.valueAsDate;
        if (taskTextBox) listEditor.text = taskTextBox.value;

        
    }
    
    const addBoardTasks = () => {
        // //console.log("adding board tasks")


        renderListEditorValue();
        let elements = getUpdatedElements();
        let text = elements.boardTextBox[0].value;
        if(text.length == 0) text = "New Board";
        let task = createBoardTemplate(text);
        staticListTasks.push(task);
        changedListTasks = setArray(staticListTasks)

    //    //console.log(staticListTasks, "the static list tasks")

        renderListTasks();
    }

    const addToDoTasks = (currentIndex) => {
        

    }



    const createBoardTemplate =(currentText,tasks) => {
        let currentTasks = [];
        if (typeof tasks != "undefined") currentTasks = tasks; 

        let board = {board: true, text:currentText, tasks: currentTasks, changedBoardLists: [], };


        return board;
    }
    

    const createUpComingTemplate = (currentText, tasks) => {
        let currentTasks = [];
        if (typeof tasks != "undefined") currentTasks = tasks; 

        let board = {isUpComingBoard: true,text:currentText, tasks: currentTasks, changedBoardLists: [], };
        return board;


    }



    const sortDatesByLatestDay = (timeTasks) => {
        let newTimeTasks = timeTasks;
        newTimeTasks.sort((timeTask1, timeTask2) => {
            let days2 = getDayOfYear(timeTask2.date);
            let days1 = getDayOfYear(timeTask1.date);
            return days2 - days1;
        })
        return newTimeTasks;

    }




    const getUpComingTasks  = () => {
        let newArray = []

        staticListTasks.forEach(board => {
            board.tasks.forEach(task => {
                if (task.navIndex == "upcoming") {
                    newArray.push(task);
                }
            })
        })

        console.log(newArray);
        return newArray;
    }



    const getTaskTimeValues = () => {
       //console.log("new stuff")
       //console.log('get task time value')
        let data = send.getAllData();
       //console.log(data, "the current form")
        let navs = setObject(data);

      //console.log(data, "current navs")
        let navKeys = Object.keys(navs);

       
      //console.log(data)
      //console.log(navs, "the navs");
    
        
        let todayTasks = [];
        let weekTasks = []


        navKeys.forEach(key => {
            let boardIndex = 0;
            if (key == "upcoming"){
                let taskIndex = 0;
                navs[key].forEach(task => {

                    task.taskIndex = taskIndex;
                    task.navIndex = "upcoming";
                    task.navName = "Upcoming";
                    if (isToday(task.date)) todayTasks.push(task)
                    if (isThisWeek(task.date)) weekTasks.push(task);
                    upcomingTasks.push(task);

                    taskIndex ++;
                })

            } else {
                navs[key].forEach(board => {
                    let taskIndex = 0;
                    board.tasks.forEach(task => {
                        task.taskIndex = taskIndex;
                        task.boardIndex = boardIndex;
                        task.navIndex = key;
                        task.navName = send.retrieveTitle(key);
                     //console.log(task.navName,"current nav name")
                       //console.log(task.date, "task current date")
                        if (isToday(task.date)) todayTasks.push(task)
                        if (isThisWeek(task.date)) weekTasks.push(task);
                        taskIndex++;
       
                    })
                    boardIndex++;
                })
            }



        })

        upcomingTasks = getUpComingTasks();
       navs = send.getAllData();
      //console.log(navs, "the after navs")


        todayTasks = sortDatesByLatestDay(todayTasks);
        weekTasks = sortDatesByLatestDay(weekTasks);

       //console.log(todayTasks);
       //console.log(weekTasks);

        return {todayTasks, weekTasks};
    }






    const addUpComingBoards = (array) => {
        let newArray = array;
        let todayBoard = createUpComingTemplate("Today", []);
        let weekBoard = createUpComingTemplate("Week",[]);
        let timeBoards = [todayBoard,weekBoard];
        timeBoards.forEach(board => newArray.push(board));
        return newArray;



    }


    const renderListTasks = (isEmpty) => {
        //console.log("rendering list tasks")
        renderEditBoardTextValues();
        removeContentBindings();
        removeListBindings(); 


        

        if (!isEmpty &&  !isUpComing){
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
            } else if (task.isUpComingBoard){
                let upComingBoard = createUpComingBoard(task);
                dom.pageContent.innerHTML += upComingBoard;
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

    const renderTimeTasks = (array) => {
        let newArray = addUpComingBoards(array);
        let times = getTaskTimeValues();
        newArray.forEach(board=> {
            if (board.text == "Today"){
                board.tasks = times.todayTasks;
                board.changedBoardLists = board.tasks;

            } 
            if (board.text == "Week"){
                board.tasks = times.weekTasks;
                board.changedBoardLists = board.tasks;

            } 

        })
        return newArray;

    }

    const activateNavContent = () => {
        staticListTasks = [];
        let newTasks = send.retrieveData(index);
        // //console.log(newTasks, " the new task")
        //console.log(newTasks,"current new task")
        if (!newTasks){
            send.sendData([],index,name)
            newTasks = send.retrieveData(index);
        }


       //console.log(newTasks, "current new task")

        staticListTasks = newTasks;


        //console.log(staticListTasks, "the static list tasks")
        changedListTasks = setArray(staticListTasks)
        setChangedToDoLists();

    }

    const activateUpComingContent = () => {
        staticListTasks = [];
        staticListTasks = renderTimeTasks(staticListTasks);
       //console.log(staticListTasks, "the static list tasks");

        isUpComing = true;
        changedListTasks = setArray(staticListTasks)
      
    }




    const disruptContent = (objectIndex) => {
            staticListTasks = [];
            index = null;
            if (objectIndex < 0) {
                renderListTasks(true);
                canDisrupt = true;
            } 

        }

    
    const removeUpComingItems = (navs) => {
       console.log(deletedUpComingItems, "deleted up coming items")

       console.log(staticListTasks, "the static list tasks")

        deletedUpComingItems.forEach(task => {
            if (task.navIndex == "upcoming"){
                let navTask = navs[task.navIndex];
                navs[task.navIndex] = removeItem(navTask,task.taskIndex);

            } else {
                let navTask = navs[task.navIndex][task.boardIndex].tasks;
                navs[task.navIndex][task.boardIndex].tasks = removeItem(navTask,task.taskIndex);
            }

        })
        deletedUpComingItems = [];

       console.log(navs, "the current nav")

        return navs;

    }


    const sendUpComingChanges = () => {
       //console.log("sending up coming tasks")
        let navs = send.getAllData();
       //console.log(navs, "the current navs")
       //console.log(staticListTasks, "the current static list tasks")
        

        staticListTasks.forEach(board => {
            board.tasks.forEach(task => {
                let newTask = task;
                if (task.listTask){
                   //console.log(task, "the current task")
     
                    if (task.navIndex != "upcoming"){
                        let text = task.text;
                        let date = task.date;
                        let priority = task.priority;
                        let projectTypeText = task.projectTypeText;
                        let checked = task.checked;
                        newTask = createTaskTemplate(text, date, priority, projectTypeText, checked)
                    }        
                    
                    console.log(task.navIndex, "task nav index")
                    console.log(task, "the current task")

                    if(task.navIndex == "upcoming") navs[task.navIndex][task.taskIndex] = newTask;
                    else navs[task.navIndex][task.boardIndex].tasks[task.taskIndex] = newTask;

                   
                } 
            })
        })


       //console.log(navs, "the after current navs");


        if(deletedUpComingItems.length != 0) navs = removeUpComingItems(navs);
        let newData = setObject(navs);
       //console.log("objectefied navs", navs);

        send.overwriteData(newData);



    }



    const activateContent = (objectIndex, disruptFlow,objectName) => {
        let data = send.getAllData();
        changedListTasks = [];
        deletedUpComingItems = []
        setChangedToDoListsEmpty();
        isUpComing = false;
        canDisrupt = false;

        if (disruptFlow) {
           //console.log("disrupting flow")
            disruptContent(objectIndex)
            if (canDisrupt) return;
        }
       //console.log(typeof index);
       //console.log(typeof index == "number")

        if (typeof index == "number"){
            send.sendData(staticListTasks,index,name);  
        } else if (index == "upcoming"){
            sendUpComingChanges();
        }


        index = objectIndex;
        name = objectName;

        if (index == "upcoming"){
           //console.log("activating up coming")
            activateUpComingContent();
        } else {
            activateNavContent();


        }




       //console.log(staticListTasks, "new times")
        renderListTasks();
    }

    return {activateContent,removeTaskBindings, addTaskBindings };
    




}

export default Content;




