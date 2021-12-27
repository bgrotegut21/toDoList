//
import {setObject} from "./elementEvents.js";

const send = (
    () => {
        let items = {};
        let titleItems = {}
        items.upcoming = []

        const sendData = (data,index,title) => {
            items[index] = data;
            titleItems[index] = title;
        }

        const sendName = (index, title) => {
            titleItems[index] = title;
        }
    
        const retrieveData = (index) => {
            if (items[index]){
                return items[index];
            } else {
                return false;
            }
        }


        const retrieveTitle = (index) => {
            if (titleItems[index]){
                return titleItems[index];
            } else {
                return false;
            }
        }

        const retrieveTitles = () => {
            return setObject(titleItems);
        }

        const overwriteTitles = (titles) => {
            titleItems =  titles
        }


        const overwriteData = (data) => { 
            items = data;
        }


        const getAllData = () => {
            return setObject(items);
        }
 
        const deleteName = (index) => {
            let newTitles = titleItems;
            let newTitleKeys = Object.keys(newTitles);
            let finalTitles = {}
            newTitleKeys = newTitleKeys.filter(key => key != index);

            for (let i = 0; i <newTitleKeys.length; i++) {
                finalTitles[i] = newTitles[newTitleKeys[i]];
            }

            return finalTitles;

        }



        const deleteData = (index) => {
            titleItems = deleteName(index);
            let newItems = setObject(items);
            let newItemsKeys = Object.keys(newItems);
            newItemsKeys = newItemsKeys.filter(key => key != index);

            
            let newerItems = {};
            newItemsKeys.forEach(key => {
                newerItems[key] = newItems[key];
            })

            items = newerItems;

        }
        
        return {sendData, retrieveData,retrieveTitle, 
            deleteData, getAllData, overwriteData, 
            sendName, retrieveTitles, overwriteTitles};

    }
)()

export {send};