

const send = (
    () => {
        let items = {};
        const sendData = (data,index) => {
            items[index] = data;

        }
    
        const retrieveData = (index) => {
            if (items[index]){
                return items[index]
            } else {
                return false;
            }
        }

        const deleteData = (index) => {
          //  console.log(index, "the current index")
            let newItems = items;
            let newItemsKeys = Object.keys(newItems);
            newItemsKeys = newItemsKeys.filter(key => key != index)
        //    console.log(newItemsKeys, "first new items keys")
            newItemsKeys.forEach(key => newItems[key] = newItems[key]);
            let newerItems = {};
       //     console.log(newItems, "new items")
        //    console.log(newItemsKeys, "the new items keys");

         //   console.log(newItemsKeys, "the new items keys")
          //  console.log(newItems, "the new items")
            for (let i = 0; i < newItemsKeys.length; i++) {
                newerItems[i] = newItems[newItemsKeys[i]]
            };
        //    console.log(newerItems, "the newer items");
            items = newerItems;
            
        }
        
        return {sendData, retrieveData, deleteData};

    }
)()

export {send};