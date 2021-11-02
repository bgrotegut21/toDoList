

const send = (
    () => {
        let items = {};
        const sendData = (data,index) => {
            items[index] = data;
        }
    
        const retrieveData = (index) => {
            if (items[index]){
                return items[data]
            } else {
                return new Error('Items do not exist')
            }
        }
        
        return {sendData, retrieveData};

    }
)()

export {send};