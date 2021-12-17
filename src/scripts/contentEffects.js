import { createTaskTemplate, findObjectByName } from "./utilities.js";
import {getUpdatedElements} from "./pageLayout.js";
import {setArray} from "./elementEvents.js";


const applyTaskChanges = (navs,taskChanges) => {
    let newNav = navs;
    taskChanges.forEach(task => {
        let newTask;

        let navIndex = task.navIndex;
        let boardIndex = task.boardIndex;
        let taskIndex = task.taskIndex;

        let text = task.text;
        let date = task.date;
        let priority = task.priority;
        let projectTypeText = task.projectTypeText;
        let checked = task.checked;
        newTask = createTaskTemplate(text, date, priority, projectTypeText, checked)
        
        newNav[navIndex][boardIndex].tasks[taskIndex] = newTask;
    })
    return newNav;


}


const removeNavEmpties = (navs) => {

    console.log("navs with empty")
    let navKeys = Object.keys(navs);
    navKeys.forEach(key => {
        if (key == "upcoming"){
            navs[key] = navs[key].filter(task => task != "empty")
        } else {
            navs[key].forEach(board => {
                board.tasks = board.tasks.filter(task => task != "empty");
            })
        }
    })

    console.log(navs, "the emptied navs")
    return navs;

}


const createBoardTemplate =(currentText,tasks) => {
    let currentTasks = [];
    if (typeof tasks != "undefined") currentTasks = tasks; 

    let board = {board: true, text:currentText, tasks: currentTasks, changedBoardLists: [], };


    return board;
}


const renderListEditorValue = (tasks) => {
    let listEditor = findObjectByName("listEditor",tasks);
    if (!listEditor) return;

    // ////console.log(listEditor, "the current list editor")


    let elements = getUpdatedElements();
    let datePicker = elements.datePicker[0];
    let taskTextBox = elements.taskTextBox[0];

    // ////console.log(datePicker);
    // ////console.log(taskTextBox);
    // if(datePicker) ////console.log(datePicker.valueAsDate, "date picker current date");
    // if (taskTextBox)////console.log(taskTextBox.value, "textbox")
    if (datePicker)  listEditor.date = datePicker.valueAsDate;
    if (taskTextBox) listEditor.text = taskTextBox.value;

    
}


const addBoardTasks = (staticArray) => {
    // ////console.log("adding board tasks")



    renderListEditorValue(staticArray);
    let elements = getUpdatedElements();
    let text = elements.boardTextBox[0].value;
    if(text.length == 0) text = "New Board";
    let task = createBoardTemplate(text);
    staticArray.push(task);
//    ////console.log(staticListTasks, "the static list tasks")
}




export {applyTaskChanges, removeNavEmpties,renderListEditorValue, addBoardTasks }