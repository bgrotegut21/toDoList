//helpful functions that ate tucked in this file to make content more clean and readable
import format from 'date-fns/format'
import getDayOfYear from 'date-fns/getDayOfYear'

import {getUpdatedElements} from "./pageLayout.js"

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

const getElementByBoardIndex = (index,domElement) => {

    let element = getUpdatedElements();
    let newElement = false;
    element[domElement].forEach(childElement => {
        if (childElement.boardIndex == index) newElement = childElement
    })
    return newElement;


}



const getUpComingTasks  = (array) => {
    let newArray = []

    array.forEach(board => {
        board.tasks.forEach(task => {
            if (task.navIndex == "upcoming") {
                newArray.push(task);
            }
        })
    })

    return newArray;
}

// only works with static list tasks which has two arrays
// one that can take different types of editors which is known as
// the changedboardlists and the one that changes very little 
// and values can be added but will be edited in the editors in changedBoardLists
const findObjectByName = (name,parentArray) => {
    let currentObject = false;
    let breakLoop;
    let staticListTasks = parentArray;

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

    return currentObject;

}

// Takes staticlist tasks array does not work in any other tempalate do not try it
const getObjectValue = (currentObject, value,array) => {
    let objectValue = findObjectByName(currentObject,array);
    let newValue = false;
    if (objectValue != false) newValue = objectValue[value];
    return newValue;
}


const changeValueToDate = (value) => {
    let newValue = value.split("-");
    let year = newValue[0];
    let monthIndex = newValue[1] -1;
    let day = newValue[2];


    let date = new Date(year,monthIndex,day);
    return date;
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


const createTaskTemplate = (text,date,priority,projectTypeText,checked) => {
    let task = {}
    task.listTask = true;
    task.text = text,
    task.date = date;

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    task.dates = [year, month, day];
    task.dateText = format(task.date,"MMM d y");
    task.priority = priority;

    !checked? task.checked = false: task.checked = true;
    if (typeof projectTypeText != "undefined")  task.projectTypeText = projectTypeText;
    return task;

}


const checkSpaces = (text) => {
    if (text.trim().length != 0) return true
    else return false
}


export {findBoardTextBox, getElementByBoardIndex, getObjectValue, 
    changeValueToDate, sortDatesByLatestDay, createTaskTemplate,
    findObjectByName, getUpComingTasks, checkSpaces
};