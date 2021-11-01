

const send = (
    () => {
        let index;
        let items = {};
        const sendData = (data,index) => {
            items[index] = data;
        }
    
        const retrieveData = (index) => {
            if (items[index]){
                return items[data]
            } else {
                return new Error('Data Does not Exist!')
            }
        }
        
        return {sendData, retrieveData};

    }
)()