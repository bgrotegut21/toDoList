/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/scripts/send.js ***!
  \*****************************/


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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0EsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvc2VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3Qgc2VuZCA9IChcbiAgICAoKSA9PiB7XG4gICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgbGV0IGl0ZW1zID0ge307XG4gICAgICAgIGNvbnN0IHNlbmREYXRhID0gKGRhdGEsaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zW2luZGV4XSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgcmV0cmlldmVEYXRhID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaW5kZXhdKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbZGF0YV1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignRGF0YSBEb2VzIG5vdCBFeGlzdCEnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge3NlbmREYXRhLCByZXRyaWV2ZURhdGF9O1xuXG4gICAgfVxuKSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9