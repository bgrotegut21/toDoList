import isToday from 'date-fns/isToday'
import isThisWeek from 'date-fns/isThisWeek'

import {sortDatesByLatestDay} from "./utilities.js"


import  {send} from "./send.js"
import {setObject} from "./elementEvents.js"




    const createUpComingTemplate = (currentText, tasks) => {
        let currentTasks = [];
        if (typeof tasks != "undefined") currentTasks = tasks; 
    
        let board = {isUpComingBoard: true,text:currentText, tasks: currentTasks, changedBoardLists: [], };
        return board;
    
    
    }
    const addUpComingBoards = (array) => {
        let newArray = array;
        let todayBoard = createUpComingTemplate("Today", []);
        let weekBoard = createUpComingTemplate("Week",[]);
        let timeBoards = [todayBoard,weekBoard];
        timeBoards.forEach(board => newArray.push(board));
        return newArray;
    }
    
    
    
    
    
    const getTimeUpcomingValues = (navs,key,todayTasks, weekTasks) => {
        let taskIndex = 0;
    
        navs[key].forEach(task => {
    
            task.taskIndex = taskIndex;
            task.navIndex = "upcoming";
            task.navName = "Upcoming";
    
            if (isToday(task.date)) todayTasks.push(task)
            if (isThisWeek(task.date)) weekTasks.push(task);
            taskIndex ++;
        })
        return {todayTasks, weekTasks};
        
    }
    
    const getTimeNormalValues  = (navs,key,todayTasks,weekTasks) => {
        let boardIndex = 0;
        navs[key].forEach(board => {
            let taskIndex = 0;
            board.tasks.forEach(task => {
                task.taskIndex = taskIndex;
                task.boardIndex = boardIndex;
    
                task.navIndex = key;
                task.navName = send.retrieveTitle(key);
                console.log(task.navName, "the task task nav name")

             ////console.log(task.navName,"current nav name")
               ////console.log(task.date, "task current date")
                if (isToday(task.date)) todayTasks.push(task)
                if (isThisWeek(task.date)) weekTasks.push(task);
                taskIndex++;
    
            })
            boardIndex++;
        })
    
        return {todayTasks,weekTasks}
    
    
    }
    
    
    
    const getTaskTimeValues = () => {
        ////console.log("new stuff")
        ////console.log('get task time value')
         let data = send.getAllData();
        ////console.log(data, "the current form")
         let navs = setObject(data);
    
      // console.log(data, "current navs")
         let navKeys = Object.keys(navs);
    
        
       ////console.log(data)
       ////console.log(navs, "the navs");
     
         
         let todayTasks = [];
         let weekTasks = [];    
         //console.log(navs, "the current navs")        
         //console.log(navKeys,"the nav keys")
    
         navKeys.forEach(key => {
             if (key == "upcoming"){
                 let times = getTimeUpcomingValues(navs,key, todayTasks, weekTasks);
                 todayTasks = times.todayTasks;
                 weekTasks = times.weekTasks;    
    
             } else {
                 let times = getTimeNormalValues(navs,key,todayTasks, weekTasks);
                 todayTasks = times.todayTasks;
                 weekTasks = times.weekTasks;
    
             }
    
    
    
         })
    
        
        navs = send.getAllData();
       ////console.log(navs, "the after navs")
    
    
         todayTasks = sortDatesByLatestDay(todayTasks);
         weekTasks = sortDatesByLatestDay(weekTasks);
    
        ////console.log(todayTasks);
        ////console.log(weekTasks);
    
         return {todayTasks, weekTasks};
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



export {renderTimeTasks}