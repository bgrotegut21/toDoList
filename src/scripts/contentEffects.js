import { createTaskTemplate, findObjectByName } from "./utilities.js";
import {getUpdatedElements} from "./pageLayout.js";
import {setArray} from "./elementEvents.js";
import {checkSpaces} from "./utilities.js";


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
    let elements = getUpdatedElements();
    let datePicker = elements.datePicker[0];
    let taskTextBox = elements.taskTextBox[0];
    if (datePicker)  listEditor.date = datePicker.valueAsDate;
    if (taskTextBox) listEditor.text = taskTextBox.value;

    
}


const addBoardTasks = (staticArray) => {
    renderListEditorValue(staticArray);
    let elements = getUpdatedElements();
    let text = elements.boardTextBox[0].value;
    if(text.length == 0 || !checkSpaces(text)) text = "New Board";
    let task = createBoardTemplate(text);
    staticArray.push(task);
}




export {applyTaskChanges, removeNavEmpties,renderListEditorValue, addBoardTasks }