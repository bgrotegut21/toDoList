import {send} from "./send.js";
import {setObject} from "./elementEvents.js";

const dataStorage = () => {
    const storeData = () => {
        let data = send.getAllData();
        let titles = send.retrieveTitles();
        let newData = turnDataIntoFormat(data);
        let newTitles = setObject(titles);        
        let jsonTitles = JSON.stringify(newTitles);
        let jsonData = JSON.stringify(newData);

        localStorage.setItem("data",jsonData);
        localStorage.setItem("titles",jsonTitles);
    }

    const retrieveData = () => {
        let retrievedData = localStorage.getItem("data");
        let retrievedTitles = localStorage.getItem("titles");
        if (retrievedData == null || retrievedTitles == null) return false;

        let rawData = JSON.parse(retrievedData);
        let formatedTitles = JSON.parse(retrievedTitles);
        let formatedData = formatData(rawData);

        return {formatedData, formatedTitles}
    }

    const storeHighlighIndex = (index) => {
        localStorage.setItem("highlightIndex",index);
    }

    const retrieveHighlightIndex = () => {
        let highlightIndex  = localStorage.getItem("highlightIndex");
        return highlightIndex;
    }

    const addDatesToTasks = (tasks) => {
        let newTasks = setObject(tasks,true);

        newTasks.forEach(task => {
            let dates = task.dates;
            task.date = new Date(dates[0], dates[1], dates[2]);
        })
        return newTasks;

    }

    const formatData = (data) => {
        let newDataKeys = Object.keys(data);
        let newData = setObject(data);
        
        newDataKeys.forEach(key => {
            if (key != "upcoming"){
                newData[key].forEach(board => {
                    board.changedBoardLists = [];
                    board.tasks = addDatesToTasks(board.tasks);
                })
            } else {
                newData[key] = addDatesToTasks(newData[key])
            }
        })

        return newData;
        

    }


    const removeDate = (task) => {
        let taskKeys = Object.keys(task);
        taskKeys = taskKeys.filter(key => key != "date");
        let newTask = {};

        taskKeys.forEach(key => {newTask[key] = task[key];})
        return newTask;;
    }


    const removeDateObjects = (board) => {
        board.tasks.forEach((task) => {
            task = removeDate(task);
        })
    }

    const turnDataIntoFormat = (data) => {
        let newData = setObject(data);
        let newDataKeys = Object.keys(newData);


        newDataKeys.forEach(key => {     
            if (key != "upcoming"){
                newData[key].forEach(board => {
                    let boardKeys = Object.keys(board);
                    boardKeys = boardKeys.filter(key => key != "changedBoardTasks");
                    
                    let newBoard = {};
                    boardKeys.forEach(key => newBoard[key] = board[key]);
                    board = newBoard;
                    board = removeDateObjects(board)

                    
                })
            } else {
                newData[key].forEach(task => {
                    task = removeDate(task);
                })
            }
        })
        return newData
    }
    
    return {storeData, retrieveData, storeHighlighIndex, retrieveHighlightIndex};
}

let storage = dataStorage();

export {storage}