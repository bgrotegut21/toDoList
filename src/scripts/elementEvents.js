import emit from "./emit.js";

import "../styles/board.css";
import "../styles/navigation.css";
import "../styles/styles.css"

const elementEvents = () => {
    
    const removeItem = (array,index) => {
        //  console.log(index, "remove item index")
          let newTasks = [];
          for (let i = 0; i < array.length; i ++){
              if (i != index){
                  newTasks.push(array[i]);
              }
          }
          return newTasks;
      }


      const addItem = (array,index, item) => {
        let newTasks = [];
        for (let i = 0; i < array.length; i ++){
            if (i == index){
                newTasks.push(item);
            } else {
                newTasks.push(array[i])
            }
        }
        return newTasks;
    }


    const addBindings = (elements,func,binding) => {
        if (!Array.isArray(elements)) elements.addEventListener(binding,func);
        else elements.forEach(element => element.addEventListener(binding,func));
    }

    const removeBindings = (elements,func,binding) => {
        if (!Array.isArray(elements)) elements.removeEventListener(binding,func);
        else elements.forEach(element => element.removeEventListener(binding,func));
    }

    return {removeItem,addItem, addBindings, removeBindings};

}

export default elementEvents();
