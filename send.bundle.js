/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/scripts/send.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "send": () => (/* binding */ send)
/* harmony export */ });


const send = (
    () => {
        let items = {};
        let titleItems = {}
        items.upcoming = []

        
        const sendData = (data,index,title) => {
            items[index] = data;
            titleItems[index] = title;

        }
    
        const retrieveData = (index) => {
            console.log(items, "items retrieve data")
            if (items[index]){
                return items[index]
            } else {
                return false;
            }
        }


        const retrieveTitle = (index) => {
            if (titleItems[index]){
                return titleItems[index]
            } else {
                return false;
            }

        }

        const overwriteData = (data) => {
            items = data;

        }

        const getAllData = () => {
            return items;
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
        
        return {sendData, retrieveData,retrieveTitle, deleteData, getAllData, overwriteData};

    }
)()


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvc2VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuXG5jb25zdCBzZW5kID0gKFxuICAgICgpID0+IHtcbiAgICAgICAgbGV0IGl0ZW1zID0ge307XG4gICAgICAgIGxldCB0aXRsZUl0ZW1zID0ge31cbiAgICAgICAgaXRlbXMudXBjb21pbmcgPSBbXVxuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBzZW5kRGF0YSA9IChkYXRhLGluZGV4LHRpdGxlKSA9PiB7XG4gICAgICAgICAgICBpdGVtc1tpbmRleF0gPSBkYXRhO1xuICAgICAgICAgICAgdGl0bGVJdGVtc1tpbmRleF0gPSB0aXRsZTtcblxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHJldHJpZXZlRGF0YSA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbXMsIFwiaXRlbXMgcmV0cmlldmUgZGF0YVwiKVxuICAgICAgICAgICAgaWYgKGl0ZW1zW2luZGV4XSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zW2luZGV4XVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IHJldHJpZXZlVGl0bGUgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aXRsZUl0ZW1zW2luZGV4XSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpdGxlSXRlbXNbaW5kZXhdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3ZlcndyaXRlRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpdGVtcyA9IGRhdGE7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldEFsbERhdGEgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVEYXRhID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgLy8gIGNvbnNvbGUubG9nKGluZGV4LCBcInRoZSBjdXJyZW50IGluZGV4XCIpXG4gICAgICAgICAgICBsZXQgbmV3SXRlbXMgPSBpdGVtcztcbiAgICAgICAgICAgIGxldCBuZXdJdGVtc0tleXMgPSBPYmplY3Qua2V5cyhuZXdJdGVtcyk7XG4gICAgICAgICAgICBuZXdJdGVtc0tleXMgPSBuZXdJdGVtc0tleXMuZmlsdGVyKGtleSA9PiBrZXkgIT0gaW5kZXgpXG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKG5ld0l0ZW1zS2V5cywgXCJmaXJzdCBuZXcgaXRlbXMga2V5c1wiKVxuICAgICAgICAgICAgbmV3SXRlbXNLZXlzLmZvckVhY2goa2V5ID0+IG5ld0l0ZW1zW2tleV0gPSBuZXdJdGVtc1trZXldKTtcbiAgICAgICAgICAgIGxldCBuZXdlckl0ZW1zID0ge307XG4gICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG5ld0l0ZW1zLCBcIm5ldyBpdGVtc1wiKVxuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhuZXdJdGVtc0tleXMsIFwidGhlIG5ldyBpdGVtcyBrZXlzXCIpO1xuXG4gICAgICAgICAvLyAgIGNvbnNvbGUubG9nKG5ld0l0ZW1zS2V5cywgXCJ0aGUgbmV3IGl0ZW1zIGtleXNcIilcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2cobmV3SXRlbXMsIFwidGhlIG5ldyBpdGVtc1wiKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdJdGVtc0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXdlckl0ZW1zW2ldID0gbmV3SXRlbXNbbmV3SXRlbXNLZXlzW2ldXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2cobmV3ZXJJdGVtcywgXCJ0aGUgbmV3ZXIgaXRlbXNcIik7XG4gICAgICAgICAgICBpdGVtcyA9IG5ld2VySXRlbXM7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge3NlbmREYXRhLCByZXRyaWV2ZURhdGEscmV0cmlldmVUaXRsZSwgZGVsZXRlRGF0YSwgZ2V0QWxsRGF0YSwgb3ZlcndyaXRlRGF0YX07XG5cbiAgICB9XG4pKClcblxuZXhwb3J0IHtzZW5kfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=