

// do not forget to fix spaces problem
// do not forget to fix spaces problem
// do not forget to fix spaces problem
// do not forget to fix spaces problem
// do not forget to fix spaces problem

// do not forget to fix spaces problem
// do not forget to fix spaces problem


import {removeItem, addBindings, removeBindings, setArray, setObject} from "./elementEvents.js"
import {send} from "./send.js"
import { getInitialElements, getUpdatedElements } from "./pageLayout.js";
//checked
import {createBoard, createAddBoard, createBoardEditor, createListEditor, createUpComingBoard, createTaskArrangement} from "./template.js";

//checked
import {applyTaskChanges, removeNavEmpties,renderListEditorValue, addBoardTasks } from "./contentEffects.js";


// checked
import {removeBoardOverlay, addBoardOverlay, shadeButtonColor, setTaskDate} from "./uiEffects.js";


//checked
import {findBoardTextBox, getElementByBoardIndex, getObjectValue, changeValueToDate,createTaskTemplate, getUpComingTasks} from "./utilities.js";
import {renderTimeTasks} from "./times.js";


import isToday from 'date-fns/isToday'
import isThisWeek from 'date-fns/isThisWeek'




import {assignTaskIndex, assignBoardElements} from "./assign.js";



const Content = () => {

    let staticListTasks = [];
    let changedListTasks = []; 


    let taskChanges = [];

    let upcomingTasks = []

    let deletedUpComingItems = [];

    let index;
    let currentIndex;
    let isUpComing = false;

    let newIndex = false;
    let canDisrupt = false
    let name;
    let dom = getInitialElements();

// will add key bindings at a later date
    const removeContentBindings = (bool) => {
        let elements = getUpdatedElements();
        removeBindings(elements.boarderButton, addBoardTasksClick,"click");
        removeBindings(elements.deleteBoard,deleteBoard, "click");
        removeBindings(elements.editBoard,editBoard,"click");
        removeBindings(elements.taskAdders, addListEditorClick, "click")

    }

     const addContentBindings = () => {
        // ////console.log("adding the content bindings")
        let elements = getUpdatedElements();
        // ////console.log(elements.boarderButton, "elements boarder button")
        addBindings(elements.boarderButton, addBoardTasksClick,"click");
        addBindings(elements.deleteBoard,deleteBoard, "click");
        addBindings(elements.editBoard,editBoard,"click");

        addBindings(elements.taskAdders, addListEditorClick, "click");


        
    }


    const addListBindings = () => {
        let elements = getUpdatedElements();
        addBindings(elements.button, shadeButtonColorClick, "click")
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
        removeBindings(elements.button, shadeButtonColorClick, "click")
        removeBindings(elements.trashIt,deleteTask, "click");

        removeBindings(elements.finished,addTaskClick, "click");
        removeBindings(elements.edit, editTask, "click");
        removeBindings(elements.circleIcon, crossOutTask, "click");
        removeBindings(elements.exitEditor, exitListEditor, "click");
    }

    const crossOutDuplicateTask = (task) => {
        staticListTasks.forEach(board => {
            board.tasks.forEach(childTask => {
                if (childTask.navIndex == task.navIndex &&
                    childTask.navIndex != "upcoming"){
                    if(childTask.boardIndex == task.boardIndex){
                        if (childTask.taskIndex == task.taskIndex){
                           childTask.checked = task.checked;
                           removeCrossOutEditor(childTask);
                        }
                    }
                } else if (childTask.navIndex == "upcoming" &&
                          task.navIndex == "upcoming"
                ){
                    if (childTask.taskIndex == task.taskIndex){
                        childTask.checked = task.checked;
                        removeCrossOutEditor(childTask);
                    }
                }
            })
        })
    }



    const checkCrossOutEditor = (newTask) => {
        let boardCounter = 0;
        let canEdit = false;

        let taskIndex = newTask.taskIndex;
        let boardIndex = newTask.boardIndex;
        let navIndex = newTask.navIndex;


        staticListTasks.forEach(board => {
            let taskCounter = 0;
            board.changedBoardLists.forEach(task => {
            
                if (task.taskIndex == taskIndex &&
                    task.boardIndex == boardIndex && task.navIndex == navIndex
                    ){
                        let taskIndex =  taskCounter + 1;
                        let boardIndex = boardCounter;
                        if (taskIndex <= staticListTasks[boardIndex].changedBoardLists.length - 1){
                            let editor = staticListTasks[boardIndex].changedBoardLists[taskIndex];
                            console.log(editor, "the current editor")
                            if (editor.listEditor) canEdit = true;
                        }     
                    }
                    taskCounter ++;
            })
            boardCounter ++;
        })
        return canEdit;
    }



    const removeCrossOutEditor = (task) => {
        let indexes = getIndexes()
        if (indexes){
            if (checkCrossOutEditor(task)){
                removeListEditor();
            }
        }
    }


    const crossOutTask= (event) => {
        let taskIndex = event.target.taskIndex;
        let boardIndex = event.target.boardIndex;
        let task = staticListTasks[boardIndex].tasks[taskIndex];
        task.checked ? task.checked = false: task.checked = true;
        let indexes = getIndexes();


       if (isUpComing) crossOutDuplicateTask(task);
       else {
           if(indexes){
            let boardIndex2 = indexes.boardIndex;
            let listIndex = indexes.listIndex;
            if (boardIndex2 == boardIndex && listIndex == taskIndex){
                removeListEditor();
            }

           }


       }


        renderListEditorValue(staticListTasks);
        renderBoardLists();
    }




     
    

    const deleteTask =  () => {
        let indexes = getIndexes();
        let taskIndex = indexes.listIndex;
        let boardIndex = indexes.boardIndex;
        let newStaticListTasks = setObject(staticListTasks);
        let deletedTask;
        let currentTask = newStaticListTasks[boardIndex].tasks[taskIndex];

        currentTask.listTask = false;
        deletedTask = currentTask;

        let newArray = newStaticListTasks[boardIndex].tasks;
        let newerArray = newArray.filter(task => task.listTask)

        deletedUpComingItems.push(deletedTask)
        staticListTasks[boardIndex].tasks = newerArray

        let newTasks =   staticListTasks[boardIndex].tasks
        staticListTasks[boardIndex].changedBoardLists = newTasks

        removeListEditor();
        if(isUpComing) removeUpComingTasks(deletedTask)
        renderBoardLists();
    }


    const removeUpComingTasks = (task) => {
        let newStaticListTasks = setObject(staticListTasks,true);


        let boardIndex = 0;
        let newTasks;

        console.log(task, "the current task")
        //console.log(staticListTasks, "the static list tasks")

        console.log(newStaticListTasks, "the new staticlisttasks")
        console.log(deletedUpComingItems, "the deleted up coming items")

        newStaticListTasks.forEach(board => {
            newTasks = board.tasks.filter(childTask => {
                if (childTask.navIndex == "upcoming" && task.navIndex == "upcoming") {
                    if (childTask.taskIndex == task.taskIndex){
                        return false;
                    } else return true;

                } else  if (childTask.navIndex  ==  task.navIndex ) {
                    if (childTask.boardIndex == task.boardIndex &&
                        childTask.taskIndex == task.taskIndex
                        ){
                        return false;
                    } else return true;
                } else return true;

            })
            staticListTasks[boardIndex].tasks = newTasks
            staticListTasks[boardIndex].changedBoardLists = newTasks;
            boardIndex++;
        })

        console.log(staticListTasks, "the current static list tasks")



    }


    const editTask = (event) => {
        let boardIndex = event.target.boardIndex;
        let taskIndex = event.target.taskIndex;
        let task = staticListTasks[boardIndex].tasks[taskIndex];
        let text = task.text;
        let date = task.date;
        let priority = task.priority
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

            //console.log(newTasks)
            task.changedBoardLists = newTasks;
        })

    }

    const findListEditorBoardIndex = () => {
        let newTasks = staticListTasks;
        let boardIndex = 0;
        let stopLoop = false;

        newTasks.forEach(board => {
            // ////console.log(board, "the current board")
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

    const changeDuplicateTasks = (navIndex,boardIndex,taskIndex, newTask) => {
       ////console.log(staticListTasks, "the current static list tasks")
        let currentBoardIndex =0;

        staticListTasks.forEach(board => {
            let currentTaskIndex = 0
            board.tasks.forEach(task => {
                if (task.navIndex == navIndex) {
                    if (task.boardIndex){
                        if (task.boardIndex == boardIndex){
                            if (task.taskIndex == taskIndex){
                                ////console.log(task);
                                ////console.log(taskIndex, "current task index");
                                ////console.log(newTask, "zee current new task")
                                 staticListTasks[currentBoardIndex].tasks[currentTaskIndex] = newTask;
                                 let tasks = staticListTasks[currentBoardIndex].tasks;
                                 staticListTasks[currentBoardIndex].changedBoardLists = tasks;
                             }
                        }
                    } else {
                        if (task.taskIndex == taskIndex){
                            ////console.log(task);
                            ////console.log(taskIndex, "current task index");
                            ////console.log(newTask, "zee current new task")
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
       ////console.log(staticListTasks, "the current static list tasks starter")
    }


    const changeTask = (boardIndex, task, index) => {
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

        if (isUpComing) addTaskToTime(task);
        if (isUpComing) removeOutOfDateTasks();


    }



    const createTask = (boardIndex,task) => {
        console.log(task, "the current task")
     //   console.log(boardIndex,"the board index")
        if (isUpComing){
            task.navIndex = "upcoming";
            task.navName = "Upcoming";
            upcomingTasks.push(task);
            task.taskIndex = upcomingTasks.length -1;
            //console.log(upcomingTasks, "the upcoming tasks")
        }
        console.log(staticListTasks, "current static list tasks")

         staticListTasks[boardIndex].tasks.push(task);
         let tasks = staticListTasks[boardIndex].tasks;
        //  ////console.log(tasks, "the current tasks")
         staticListTasks[boardIndex].changedBoardLists = tasks;

         console.log(staticListTasks, "some static list tasks")

         if (isUpComing) addTaskToTime(task);

        console.log(staticListTasks, "the static list tasks")
         if (isUpComing) removeOutOfDateTasks();


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
        // ////console.log(currentDate, "the current date")
        let taskText = elements.taskTextBox[0].value;
        if (taskText.length == 0) taskText = "New Task";

        let priority = getObjectValue("listEditor","priority",staticListTasks);
        let task = createTaskTemplate(taskText,currentDate,priority);
        let boardIndex = findListEditorBoardIndex();
        // ////console.log(boardIndex);
      ////  console.log(task,"the current task")

        console.log(task, "the new task")
        console.log(index, "the current index")
        console.log(boardIndex, "the current board index")
        // ////console.log(index, "the current value of index"
         typeof index != "undefined" ? changeTask(boardIndex, task,index): createTask(boardIndex,task)


         
        //  ////console.log(staticListTasks[boardIndex].changedBoardLists, "static change board lists");
        //  ////console.log(staticListTasks[boardIndex].tasks, "taskos")
   

        //console.log(staticListTasks,"the static list tasks")

        renderBoardLists();
    }


    const getNewIndexes = (newTask) => {
        let newBoardIndex;
        let breakLoop = false;
        let newTaskIndex;

        staticListTasks.forEach(board => {
            let currentTaskIndex = 0;
            board.tasks.forEach(task => {
                if (task.navIndex == "upcoming"){
                    if (task.taskIndex == newTask.taskIndex){
                        if (board.text == "Week") newBoardIndex = 0;
                        if (board.text == "Today") newBoardIndex = 1;
                        breakLoop = true
                        newTaskIndex = currentTaskIndex;
                        return;
                    }
                }
                currentTaskIndex ++;

            })
            if(breakLoop) return;
        })
        return {newBoardIndex, newTaskIndex};
    }


    const addTaskToTime = (newTask) => {
        let newIndex= getNewIndexes(newTask);

        console.log(newIndex, "the current new index")


        if (typeof newIndex.newBoardIndex == "undefined") return;
       
        let newBoardIndex = newIndex.newBoardIndex;
        let newTaskIndex = newIndex.newTaskIndex;
        let addTask = false;
        
        let currentTask = staticListTasks[newBoardIndex].tasks[newTaskIndex];
    
        //console.log(newBoardIndex, "the current new board index")
        if (typeof currentTask != "undefined") {
            if (currentTask.taskIndex == newTask.taskIndex && currentTask.navIndex == "upcoming" && newTask.navIndex == "upcoming"){
                
            
                staticListTasks[newBoardIndex].tasks[newTaskIndex] = newTask;
                let tasks =  staticListTasks[newBoardIndex].tasks;
                staticListTasks[newBoardIndex].changedBoardLists = tasks;
            } else if (currentTask.navIndex == "upcoming" && newTask.navIndex == "upcoming"){
                addTask = true;
            }
        }

        if (typeof currentTask == "undefined" ||
            currentTask.navIndex != "upcoming" || addTask
        ) {
            if (!checkUpComingTask(newTask)){
                staticListTasks[newBoardIndex].tasks.push(newTask);
                let tasks =  staticListTasks[newBoardIndex].tasks;
                staticListTasks[newBoardIndex].changedBoardLists = tasks;
            }
            //console.log(tasks, "adding tasks to time")
        }
    }


    const checkUpComingTask = (newTask) => {
        let isTask = false;
        console.log(staticListTasks, "the static list tasks")
        
        let counter = 0;
        staticListTasks.forEach(board => {
            board.tasks.forEach(task => {
                if (task.navIndex == "upcoming"){
                    if (task.taskIndex == newTask.taskIndex){
                        counter ++;
                    }
                    if (counter == 2) {
                        isTask = true;
                        return;
                    }
                }
            })
        })
        return isTask;
    }


    const removeOutOfDateTasks = () => {
        console.log("remove out of date tasks")


        addOutOfDateTasksToDeletedUpcomingItems();
        let boardIndex = 0;
        let newStaticListTasks = setObject(staticListTasks, true);
        console.log(newStaticListTasks, "the new static list tasks")



        newStaticListTasks.forEach(board => {
            board.tasks.forEach(task => {
                let tasks = board.tasks;
                let newTasks = tasks.filter(newTask => newTask.date != task.date)
                //// console.log(tasks, "the current tasks");
                //// console.log(newTasks, "the current new tasks")
                //// console.log(boardIndex, "the current board index")
                if (boardIndex == 0){
                    if (!isToday(task.date)) {
                        tasks = newTasks;
                        if (task.navIndex != "upcoming")taskChanges.push(task);
                    }
                } else {
                    //// console.log(task.date);
                     //// console.log(isThisWeek(task.date))
                    if  (!isThisWeek(task.date)){
                        tasks = newTasks;
                        if (task.navIndex != "upcoming")taskChanges.push(task);
                    }
                }
                newStaticListTasks[boardIndex].tasks = tasks;
                newStaticListTasks[boardIndex].changedBoardLists = tasks;
            })
            boardIndex ++;
        })
        console.log(deletedUpComingItems, "the deleted up coming items")
        staticListTasks = newStaticListTasks;

        console.log(staticListTasks, "the remove out of date tasks")

        //// console.log(deletedUpComingItems, "the after deleted upcoming items");
        //// console.log(staticListTasks, "the static after list tasks")
    }


    //EDIT HERE THE PROBLEM IS HERE
    const addOutOfDateTasksToDeletedUpcomingItems = () => {
        staticListTasks.forEach(board => {
            board.tasks.forEach(task => {
               // console.log(task, "the curent task")
                if(task.navIndex == "upcoming")
                if (!isThisWeek(task.date)){
                    deletedUpComingItems.push(task);
                }
            })
        })

       // console.log(deletedUpComingItems, "the deleted up coming items remove")
    }


    const shadeButtonByClass = (className,color) => {
        let elements = getUpdatedElements();
        let buttons = elements.button;
        let button = buttons.filter(button => button.getAttribute("class") == className)[0];
        let buttonParagraph = Array.from(button.children)[0];
        // ////console.log(buttonParagraph,"The current button paragraph")
        buttonParagraph.style.background = color;

    }

    const shadeButtonByPriority = (priority) => {


        if (priority == "High") shadeButtonByClass("button high","red");
        else if (priority == "Medium") shadeButtonByClass("button medium", "#ff9800");
        else if (priority == "Low") shadeButtonByClass("button low", "green");

    }

    const shadeButtonColorClick = (event) => {
        shadeButtonColor(event,staticListTasks)
    }

    const deleteBoard = (event) => {
        // ////console.log(staticListTasks, " the static list tasks");
        // ////console.log(send.retrieveData(index), "send retrieve index")

        staticListTasks = removeItem(staticListTasks, event.target.boardIndex);
    

        // ////console.log(staticListTasks, "static list tasks");
        changedListTasks = staticListTasks
        // ////console.log(changedListTasks, "the changed list tasks");
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
        // ////console.log(index, " the index")
        let changedBoardLists = staticListTasks[index].changedBoardLists
        // ////console.log(changedBoardLists, " the changed board lists")
    
        let currentText = getElementByBoardIndex(index,"exampleBoardText").textContent;


        let editBoardTemplate = {editBoard: true, text:currentText};
        let newArray = [];
        newArray.push(editBoardTemplate);
        let finalArray = newArray.concat(changedBoardLists);

        staticListTasks[index].changedBoardLists = finalArray;

        // ////console.log(staticListTasks[index].changedBoardLists, "changed boar list")
        currentIndex = index;
        renderBoardLists(true);
        
    }

    const addListEditorClick = (event) => {
        let boardIndex = event.target.boardIndex;
        addListEditor(boardIndex)
    }


    const addListEditor = (boardIndex,index,text,date,priority) => {
        removeListEditor()
    
        // ////console.log("adding list editor")
        // ////console.log(boardIndex, "the current board index")
        let finalArray;
        let listEditorTemplate;
        let currentDate = new Date();

        // ////console.log(index, "the current index")
        // ////console.log(typeof index != "undefined")
        // ////console.log(priority, "the current priority")

        // ////console.log(index, "the current index")
       //  ////console.log(date, "the current date")
        
        if (typeof index != "undefined")  listEditorTemplate = {listEditor: true, text:text,date: date,
                                                                priority:priority, boardIndex:boardIndex, index: index};
        else listEditorTemplate = {listEditor: true, text:"",date:currentDate,
                                    priority: "High",boardIndex:boardIndex, creatingTask: true};

        //  ////console.log(listEditorTemplate.priority, "list editor priority")
       ////console.log(index, "the current index")

        if (typeof index != "undefined") {
            let newTasks = staticListTasks[boardIndex].changedBoardLists;

            //console.log(staticListTasks[boardIndex].changedBoardLists, "the changed board shit")
            //console.log(boardIndex, "the current board index")
            //console.log(newTasks, "the new tasks")
            
           ////console.log(index +1, "the current splice index")

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


    const changeName = () => {
        let elements = getUpdatedElements();
        let boardText = elements.boardContentTextBox[0].value;
        if (boardText.length == 0 ){
            removeEditTitleMenu();
            renderBoardLists();
            return;
        }   
 //       ////console.log(exampleText, "the example text")

        
      //  ////console.log(boardText, " current board text")
     //   console.frendlog(exampleText, "the example text content")
        let newTasks = staticListTasks[currentIndex].changedBoardLists;
        newTasks = newTasks.filter(task => task.editBoard != true)
        
        staticListTasks[currentIndex].changedBoardLists = newTasks;
        staticListTasks[currentIndex].text = boardText;

    //    //console.log(staticListTasks, "the static list tasks")

        renderListTasks();
    

    }

    const renderEditBoardTextValues  = () => {
        let index = 0;
        staticListTasks.forEach(task => {
            task.changedBoardLists.forEach(list =>{
                // ////console.log(index, " the current index")
                if (list.editBoard){
                    let currentText = findBoardTextBox(index);
                    // ////console.log(currentText, " the current text")
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
        ////console.log(staticListTasks, "the static list tasks")
        console.log(indexesLength, "the indexes length")
        console.log(staticListTasks, "the static list tasks")

       ////console.log(staticListTasks, "the static list task")
        for (let i = 0; i < indexesLength; i++) {
             ////console.log(i, "the index")
            if (staticListTasks.length != 0)renderSingleBoardList(i);

        }

        if (!isChangedName)addListBindings();
        else addChangeNameBinding();
    }

    const renderSingleBoardList = (index) => {
       ////console.log(renderSingleBoardList, "render single board list")
        let taskList = getElementByBoardIndex(index, "taskLists");
        let addDate = false;
        let date;
       ////console.log(taskList, "the current task list")

       // ////console.log(taskHolder, "the task holder")
        taskList.innerHTML = "";
  ////     ////console.log(taskList, "the current task list")
 //       ////console.log(index, "the index");
//        ////console.log(staticListTasks[index], "static list current index");
        // ////console.log(staticListTasks[index], "static list tasks indexes")
        // ////console.log(staticListTasks[index].changedBoardLists, "static change board lists")

        staticListTasks[index].changedBoardLists.forEach(task => {
            //////console.log(task, "each individual task")
            if (task.editBoard){
                let boardText = createBoardEditor(task);
                taskList.innerHTML += boardText;
                addBoardOverlay(index);
            } else if (task.listEditor){

                
           

                let listText= createListEditor(task);
                taskList.innerHTML += listText;
                // ////console.log(task.listEditor, "task list editor date")
                // ////console.log(task.priority, "task priority")
                shadeButtonByPriority(task.priority);
                date = task.date;
                addDate = true;


            } else if (task.listTask){
                //////console.log(task, "the current task")
                let taskText = createTaskArrangement(task);
                //////console.log(taskText, "the current task text");
                taskList.innerHTML += taskText;
                //////console.log(taskList," the text list")
            }
        })
     
        if (addDate) setTaskDate(date);
        let taskListChildren = Array.from(taskList.children)
      ////console.log(taskList, "current task list")
        let boardIndex = taskList.boardIndex;
        assignTaskIndex(taskListChildren,boardIndex);
    }

    const addBoardTasksClick = () => {
        addBoardTasks(staticListTasks);
        changedListTasks = setArray(staticListTasks);

        renderListTasks();
    }


    const renderListTasks = (isEmpty) => {
        ////console.log("rendering list tasks")

        let dom = getInitialElements();
        renderEditBoardTextValues();
        removeContentBindings();
        removeListBindings(); 


        console.log(staticListTasks, "the current static list tasks")
        console.log(changedListTasks, "the changed list task")
        //console.log(isUpComing, "the current is up coming")
        if (!isEmpty &&  !isUpComing){
            let newTasks = changedListTasks.filter(task => task.addBoard != true);
            changedListTasks = newTasks;
           changedListTasks.push({addBoard: true});
        }
        
        console.log(dom, "the current dom")
        
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

        
        console.log(dom.pageContent, "dom page content")
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

    const activateNavContent = () => {
        staticListTasks = [];
        let newTasks = send.retrieveData(index);
        // ////console.log(newTasks, " the new task")
        ////console.log(newTasks,"current new task")
        if (!newTasks){
            send.sendData([],index,name)
            newTasks = send.retrieveData(index);
        }


       ////console.log(newTasks, "current new task")

        staticListTasks = newTasks;


        ////console.log(staticListTasks, "the static list tasks")
        changedListTasks = setArray(staticListTasks)
        setChangedToDoLists();

    }

    const activateUpComingContent = () => {
        staticListTasks = [];
        staticListTasks = renderTimeTasks(staticListTasks);
       ////console.log(staticListTasks, "the static list tasks");

        isUpComing = true;
        changedListTasks = setArray(staticListTasks)

        //console.log(upcomingTasks,"the current upcoming tasks")
        upcomingTasks = getUpComingTasks(staticListTasks);

      
    }

    const removeNavTasks = () => {
        staticListTasks.forEach(board => {
            let tasks = board.tasks.forEach(task => task.navIndex == "upcoming");
            board.tasks = tasks;
        })

    }


    const disruptContent = (objectIndex) => {
            if (isUpComing) removeNavTasks();
            else staticListTasks = [];

            index = null;
            if (objectIndex < 0) {

               //console.log(isUpComing, "the is up coming")
              if (!isUpComing) renderListTasks(true);
              canDisrupt = true;
            } 

        }

     
    const removeUpComingItems = (navs) => {
       console.log(deletedUpComingItems, "deleted up coming items")

       //console.log(staticListTasks, "the static list tasks")

       console.log(navs, "remove up coming navs");
        deletedUpComingItems.forEach(task => {
            if (task.navIndex == "upcoming"){
                navs[task.navIndex][task.taskIndex] = "empty"

            } else {
                navs[task.navIndex][task.boardIndex].tasks[task.taskIndex] = "empty"
            }

        })
        console.log(navs, "navs with an empty")

        navs = removeNavEmpties(navs);
        deletedUpComingItems = [];

        return navs;

    }

//BUG THE CONTENT WILL NOT BE SAVED
    const sendUpComingChanges = () => {
       ////console.log("sending up coming tasks")
        let navs = send.getAllData();
      // console.log(navs, "the current navs")
      // console.log(staticListTasks, "the current static list tasks")
        

        staticListTasks.forEach(board => {
            board.tasks.forEach(task => {
                let newTask = task;
                if (task.listTask){
                   ////console.log(task, "the current task")
     
                    if (task.navIndex != "upcoming"){
                        let text = task.text;
                        let date = task.date;
                        let priority = task.priority;
                        let projectTypeText = task.projectTypeText;
                        let checked = task.checked;
                        newTask = createTaskTemplate(text, date, priority, projectTypeText, checked)
                    }        
                    
                   // console.log(task, "the current task")
                     
                    //console.log(newTask, "the current new tasks");
                    //console.log(navs, "the current navs")
                

                    if(task.navIndex == "upcoming") {
                        navs[task.navIndex][task.taskIndex] = newTask;
                       // console.log(navs[task.navIndex],"The upcoming tasks")

                    }
                    else navs[task.navIndex][task.boardIndex].tasks[task.taskIndex] = newTask;
                } 
            })
        })


      // console.log(navs, "the after current navs");

      console.log(deletedUpComingItems, "the deleted send up coming changes items")

        if(deletedUpComingItems.length != 0) navs = removeUpComingItems(navs);
        let newData = setObject(navs);
        newData = applyTaskChanges(newData,taskChanges);



       // console.log(newData, "new data being sent out")
       ////console.log("objectefied navs", navs);
      

        send.overwriteData(newData);



    }

    const getIsUpComing  = () => {
        return isUpComing;
    }

    const getIndex = () => {
        return index;

    }


    const activateContent = (objectIndex, disruptFlow,objectName) => {
        changedListTasks = [];
        upcomingTasks = [];
        setChangedToDoListsEmpty();
     
        canDisrupt = false;
        if (disruptFlow) {
           ////console.log("disrupting flow")
            disruptContent(objectIndex)
            if (canDisrupt) {
                if (isUpComing) activateContent("upcoming");
                return
            }
        }
       ////console.log(typeof index);
       ////console.log(typeof index == "number")

        if (typeof index == "number"){
            let currentName = send.retrieveTitle(index);
            name = currentName;            

            send.sendData(staticListTasks,index,name);  
        } else if (index == "upcoming"){
            sendUpComingChanges();
        }

        isUpComing = false;

        index = objectIndex;
        name = objectName;

        //console.log(index,"the current index")

        if (index == "upcoming"){
           ////console.log("activating up coming")
            activateUpComingContent();
        } else {
            activateNavContent();


        }
       ////console.log(staticListTasks, "new times")
        renderListTasks();
    }
    return {activateContent,removeTaskBindings, addTaskBindings, getIsUpComing,getIndex };
    
}


let contentMenu = Content();
export {contentMenu};   