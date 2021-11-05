

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
            if (items[index]){
          
                let newItems = {};
                for (let i  = 0; i < newItemsKeys.length; i++) {
                    if (inde)
                }
            }


        }
        
        return {sendData, retrieveData, deleteData};

    }
)()

export {send};