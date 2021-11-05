/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/elementEvents.js":
/*!**************************************!*\
  !*** ./src/scripts/elementEvents.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeItem": () => (/* binding */ removeItem),
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "addBindings": () => (/* binding */ addBindings),
/* harmony export */   "removeBindings": () => (/* binding */ removeBindings),
/* harmony export */   "setArray": () => (/* binding */ setArray)
/* harmony export */ });
/* harmony import */ var _emit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emit.js */ "./src/scripts/emit.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../styles/board.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../styles/navigation.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../styles/styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






    
const removeItem =(array, index) => {
    let newTasks = [];
    let currentIndex = 0;
    for (let i = 0; i < array.length; i++){
        if (i != index){
            newTasks.push(array[i])
        }
        currentIndex ++
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


const setArray = (array) => {
    let newArray = array;
    let newTasks = [];
    newArray.forEach(task => {
        newTasks.push(task);
    })
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






/***/ }),

/***/ "./src/scripts/emit.js":
/*!*****************************!*\
  !*** ./src/scripts/emit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let emit = (
    function(){
        let events = {};

        function subscribe(name,func){
            if (events[name]){
                if (Array.isArray(func)) func.forEach(f => events[name].push(f));
                else events[name].push(func)
            } else {
                events[name] = [];
                subscribe(name,func);
            }
        }

        function unsubscribe(name,func){
            if (events[name]){
                let newArray = events[name];
                newArray = newArray.filter(f => f != func);
                events[name] = newArray;
            }
        }

        function suspend(name){
            let newEvents = {};
            let currentEvents = events;
            let currentEventKeys = Object.keys(currentEvents);
            currentEventKeys = currentEventKeys.filter(key => key != name);

            currentEventKeys.forEach(key => {
                newEvents[key] = currentEvents[key];
            })
            events = newEvents;
        }

        function fire(name,data){
            if (events[name]){
                events[name].forEach(func => func(data));
            }
        }

        return {subscribe,unsubscribe,suspend,fire};
    }
)()


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emit);

/***/ }),

/***/ "./src/scripts/pageLayout.js":
/*!***********************************!*\
  !*** ./src/scripts/pageLayout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDomElements": () => (/* binding */ getDomElements),
/* harmony export */   "createDomElements": () => (/* binding */ createDomElements)
/* harmony export */ });



//createing new elment involves using a template which is {element:"",  className: "", source:"",type:""};

const createDomElements = () => {
    let body = document.body;

    let pageText = `    <div class = "content">
    <div class = "wholeOverlay"></div>
    <div class = "errorMessage">
    <div class = "messageHolder">
        <div class = "contentHolder">
            <h2>Error</h2>
            <p class = "errorMessageText">Text Cannot be over 10 chracters</p>
            <button class = "exitButton">Exit</button>

        </div>


    </div>

</div>
    <div class = "mobileMenu">
        <button class = "hamburgerMenu"></button>
        <h2 class = "mobileMenuTitle">To Do List</h2>

    </div> 
    <div class = "sections">
        <div class = "navigation">
            <div class = "overlay">current overlay</div>
            <h1 class = "exit">X</h1>
            <div class = "elements">
        
                <h1 class = "listTitle" >To Do List</h1>

                <div class = "upComingButton">
                    <p>Upcoming</p>
                </div>


                <div class = "projectAdder">
                    <h2 class = "projectText">Project</h2>
                    <h2 class = "plusSign">+</h2>
                </div>
                
                <div class = "projectTaskHolder"></div> 
            </div>


        </div>
        <div class = "pageContent"> </div>
        </div>
    </div>`

    body.innerHTML = pageText;

}



const getDomElements = () => {
    let section = document.querySelector(".sections");
    let navigation = document.querySelector(".navigation");
    let overlay = document.querySelector(".overlay");
    let exit = document.querySelector(".exit");
    let elements = document.querySelector(".elements");
    let listTitle = document.querySelector(".listTitle");
    let upComingButton = document.querySelector(".upComingButton");
    let projectAdder = document.querySelector(".projectAdder");
    let projectText =  document.querySelector(".projectText");
    let plusSign = document.querySelector(".plusSign");
    let projectTaskHolder = document.querySelector(".projectTaskHolder");
    let editProjectButton = document.querySelector(".editProjectButton");
    let editText = document.querySelector(".editText");
    let addProjectLabel = document.querySelector(".addProjectLabel");
    let pageContent = document.querySelector(".pageContent");
    let wholeOverlay = document.querySelector(".wholeOverlay")
    let errorMessage = document.querySelector(".errorMessage")
    let errorMessageText = document.querySelector(".errorMessageText");
    let exitButton = document.querySelector(".exitButton");

    return {section, navigation, overlay, exit, elements,
            listTitle, upComingButton, projectAdder, projectText,
            plusSign, projectTaskHolder, editProjectButton, editText,
            addProjectLabel,pageContent, wholeOverlay, exitButton, errorMessage, errorMessageText}
    }



    


/***/ }),

/***/ "./src/scripts/send.js":
/*!*****************************!*\
  !*** ./src/scripts/send.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "send": () => (/* binding */ send)
/* harmony export */ });


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
                let currentItems = items;
                let currentItemsKeys = Object.keys(items).filter(key => key != index);
                let newItems = currentItemsKeys.map(key => currentItems[key]  = currentItems[key]);
                let newItemsKeys = Object.keys(newItems)

                let newerItems = {};

                for (let i =0; i < newItemsKeys.length; i++) {
                    newerItems[i] = newItems[newItemsKeys[i]]
                }
                items = newerItems;
                console.log(items, "the items")
            }


        }
        
        return {sendData, retrieveData, deleteData};

    }
)()



/***/ }),

/***/ "./src/images/editOff.svg":
/*!********************************!*\
  !*** ./src/images/editOff.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fa02ba3eeb22ca444b3.svg";

/***/ }),

/***/ "./src/images/trash.svg":
/*!******************************!*\
  !*** ./src/images/trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1129c53a10f3c7163570.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/scripts/content.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/trash.svg */ "./src/images/trash.svg");
/* harmony import */ var _images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/editOff.svg */ "./src/images/editOff.svg");
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");
/* harmony import */ var _send_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send.js */ "./src/scripts/send.js");
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");












const Content = () => {

    let staticListTasks = [];
    let changedListTasks = []; 
    let index;


    let dom = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_4__.getDomElements)();

    const assignBoardBindings = () => {
        return
    }

    const activateAddBoard =() => {
        return
    }

    const getUpdatedElements = () => {
        let boardTextBox = Array.from(document.getElementsByClassName("addBoarderTextBox"))
        let boarderButton = Array.from(document.getElementsByClassName("addBoarderButton"))
        return {boardTextBox, boarderButton}
    }

    const removeContentBindings = () => {
        let elements = getUpdatedElements();
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.removeBindings)(elements.boarderButton, addBoardTasks,"click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.removeBindings)(elements.boarderButton, addBoardTaskKeys,"keydown")

    }

    const addContentBindings = () => {
        let elements = getUpdatedElements();
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.addBindings)(elements.boarderButton, addBoardTasks,"click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.addBindings)(elements.boarderButton, addBoardTaskKeys, "keydown")
        
    }


    const addBoardTaskKeys = (event) => {
        if (event.key == "Enter") {
            addBoardTasks();
        }
    }


    const addBoardTasks = () => {
        let elements = getUpdatedElements();
        let text = elements.boardTextBox[0].value;
        if(text.length == 0) return;
        let task = createBoardTemplate(text);
        staticListTasks.push(task);
        changedListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.setArray)(staticListTasks)
        console.log(changedListTasks);
        renderListTasks();
    }

    const createTask = (task) => {
        let taskText = `<div class = "task">
                            <p class = "taskLabel">Doing Laundary</p>
                            <div class = "taskTools">
                                <div class = "generalTextHolder">
                                    <p class = "generalText">Due Nov 15 2021</p>
                                    <p class = "generalText">Priority: High</p>

                                </div>

                                <div class = "tools">
                                    <img class = "edit" src="src/images/editOff.svg" alt="">
                                    <div class = "circleIcon"></div>
                                </div>
                            </div>`
        
    }

    const createBoardEditor = () => {
        let boardText = `<div class = "boardTextEditor">
        <input class = "boardtextBox" type="text">
        <p class = "changeBoardTitleButton">+</p>
    </div>`
    }



    const createBoard = (template) => {
        let text = template.text;
        let boardText = `                <div class = "boardContent">
                                            <div class = "board">
                                                <div class = "boardOverlay"></div>
                                                    <div class = "editExampleIcons">
                                                        <img class ="deleteBoard"  src="${_images_trash_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="trash icon for deleting">
                                                        <img class = "editBoard" src="${_images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="editing icon">
                                                    </div>

                                                    
                                                    <h2 class = "exampleBoardText">${text}</h2>

                                                    <div class = "boardTextEditor">
                                                        <input class = "boardtextBox" type="text">
                                                        <p class = "changeBoardTitleButton">+</p>
                                                    </div>

                                                    <div class = "taskHolder"></div>

                                                    <div class = "taskAdder">
                                                        <p>+ Add Task</p>
                                                    </div>
                                                </div> 
                                                    </div>`
        return boardText;
    }

    const createAddBoard = () => {
        let addBoardText = `<div class = "boardContent">
                                <div class = "addBoard">
                                    <div class = "emptyrow">empty row</div>
                                    <h2 class = "addBoardText">Add Board</h2>
                                    <input class = "addBoarderTextBox" type="text">
                                    <button class = "addBoarderButton">Add</button>
                                </div>

                            </div>`
        return addBoardText;
    }



    const renderListTasks = (bool) => {
        removeContentBindings();
        dom.pageContent.innerHTML = "";
        if (!bool)changedListTasks.push({addBoard:true});
        changedListTasks.forEach(task => {
            console.log(task, "current task")
            if (task.board){
                let board = createBoard(task);
                dom.pageContent.innerHTML += board
            } else if (task.addBoard){
                let addBoard = createAddBoard();
                dom.pageContent.innerHTML += addBoard;
            }
        })    
    


        
        addContentBindings();


    }


    const createBoardTemplate =(currentText,tasks) => {
        let currentTasks = [];
        if (typeof tasks != "undefined") currentTasks = tasks; 

        let board = {board: true, text:currentText, tasks: []};
        return board;


    }

    const deleteContent = () => {
        console.log("deleting content")
        staticListTasks = [];
        renderListTasks();
    }



    const activateContent = (currentIndex) => {
        changedListTasks = [];
        if (typeof index != "undefined") _send_js__WEBPACK_IMPORTED_MODULE_3__.send.sendData(staticListTasks,index);   
        index = currentIndex;
        if (typeof index == "undefined") return deleteContent();

        let newTasks = _send_js__WEBPACK_IMPORTED_MODULE_3__.send.retrieveData(index);
        if (!newTasks){
            _send_js__WEBPACK_IMPORTED_MODULE_3__.send.sendData([],index)
            newTasks = _send_js__WEBPACK_IMPORTED_MODULE_3__.send.retrieveData(index);
        }
        staticListTasks = newTasks;
        changedListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.setArray)(staticListTasks);

        renderListTasks();
    
    }

    return {activateContent};
    




}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLDJCQUEyQiwyREFBUTtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLDhDQUFVLENBQUM7QUFDckcsd0ZBQXdGLGdEQUFRLENBQUM7QUFDakc7O0FBRUE7QUFDQSxxRkFBcUYsS0FBSzs7QUFFMUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EseUNBQXlDLG1EQUFhO0FBQ3REO0FBQ0E7O0FBRUEsdUJBQXVCLHVEQUFpQjtBQUN4QztBQUNBLFlBQVksbURBQWE7QUFDekIsdUJBQXVCLHVEQUFpQjtBQUN4QztBQUNBO0FBQ0EsMkJBQTJCLDJEQUFROztBQUVuQztBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7OztBQUtBOztBQUVBLGlFQUFlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvZWxlbWVudEV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL2VtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9wYWdlTGF5b3V0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvc2VuZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW1pdCBmcm9tIFwiLi9lbWl0LmpzXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9ib2FyZC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9uYXZpZ2F0aW9uLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5jc3NcIlxuXG4gICAgXG5jb25zdCByZW1vdmVJdGVtID0oYXJyYXksIGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChpICE9IGluZGV4KXtcbiAgICAgICAgICAgIG5ld1Rhc2tzLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEluZGV4ICsrXG4gICAgfVxuICAgIHJldHVybiBuZXdUYXNrcztcbn1cblxuXG5jb25zdCBhZGRJdGVtID0gKGFycmF5LGluZGV4LCBpdGVtKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKyspe1xuICAgICAgICBpZiAoaSA9PSBpbmRleCl7XG4gICAgICAgICAgICBuZXdUYXNrcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGFza3MucHVzaChhcnJheVtpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3VGFza3M7XG59XG5cblxuY29uc3Qgc2V0QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgbmV3QXJyYXkgPSBhcnJheTtcbiAgICBsZXQgbmV3VGFza3MgPSBbXTtcbiAgICBuZXdBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBuZXdUYXNrcy5wdXNoKHRhc2spO1xuICAgIH0pXG4gICAgcmV0dXJuIG5ld1Rhc2tzO1xufVxuXG5cbmNvbnN0IGFkZEJpbmRpbmdzID0gKGVsZW1lbnRzLGZ1bmMsYmluZGluZykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKTtcbiAgICBlbHNlIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKSk7XG59XG5cbmNvbnN0IHJlbW92ZUJpbmRpbmdzID0gKGVsZW1lbnRzLGZ1bmMsYmluZGluZykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpIGVsZW1lbnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKTtcbiAgICBlbHNlIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKSk7XG59XG5cblxuXG5leHBvcnQge3JlbW92ZUl0ZW0sIGFkZEl0ZW0sIGFkZEJpbmRpbmdzLCByZW1vdmVCaW5kaW5ncywgc2V0QXJyYXl9XG4iLCJsZXQgZW1pdCA9IChcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZXZlbnRzID0ge307XG5cbiAgICAgICAgZnVuY3Rpb24gc3Vic2NyaWJlKG5hbWUsZnVuYyl7XG4gICAgICAgICAgICBpZiAoZXZlbnRzW25hbWVdKXtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmdW5jKSkgZnVuYy5mb3JFYWNoKGYgPT4gZXZlbnRzW25hbWVdLnB1c2goZikpO1xuICAgICAgICAgICAgICAgIGVsc2UgZXZlbnRzW25hbWVdLnB1c2goZnVuYylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzW25hbWVdID0gW107XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlKG5hbWUsZnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1bnN1YnNjcmliZShuYW1lLGZ1bmMpe1xuICAgICAgICAgICAgaWYgKGV2ZW50c1tuYW1lXSl7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0FycmF5ID0gZXZlbnRzW25hbWVdO1xuICAgICAgICAgICAgICAgIG5ld0FycmF5ID0gbmV3QXJyYXkuZmlsdGVyKGYgPT4gZiAhPSBmdW5jKTtcbiAgICAgICAgICAgICAgICBldmVudHNbbmFtZV0gPSBuZXdBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN1c3BlbmQobmFtZSl7XG4gICAgICAgICAgICBsZXQgbmV3RXZlbnRzID0ge307XG4gICAgICAgICAgICBsZXQgY3VycmVudEV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgICAgIGxldCBjdXJyZW50RXZlbnRLZXlzID0gT2JqZWN0LmtleXMoY3VycmVudEV2ZW50cyk7XG4gICAgICAgICAgICBjdXJyZW50RXZlbnRLZXlzID0gY3VycmVudEV2ZW50S2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPSBuYW1lKTtcblxuICAgICAgICAgICAgY3VycmVudEV2ZW50S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3RXZlbnRzW2tleV0gPSBjdXJyZW50RXZlbnRzW2tleV07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZXZlbnRzID0gbmV3RXZlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmlyZShuYW1lLGRhdGEpe1xuICAgICAgICAgICAgaWYgKGV2ZW50c1tuYW1lXSl7XG4gICAgICAgICAgICAgICAgZXZlbnRzW25hbWVdLmZvckVhY2goZnVuYyA9PiBmdW5jKGRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7c3Vic2NyaWJlLHVuc3Vic2NyaWJlLHN1c3BlbmQsZmlyZX07XG4gICAgfVxuKSgpXG5cblxuZXhwb3J0IGRlZmF1bHQgZW1pdDsiLCJcblxuXG4vL2NyZWF0ZWluZyBuZXcgZWxtZW50IGludm9sdmVzIHVzaW5nIGEgdGVtcGxhdGUgd2hpY2ggaXMge2VsZW1lbnQ6XCJcIiwgIGNsYXNzTmFtZTogXCJcIiwgc291cmNlOlwiXCIsdHlwZTpcIlwifTtcblxuY29uc3QgY3JlYXRlRG9tRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgbGV0IHBhZ2VUZXh0ID0gYCAgICA8ZGl2IGNsYXNzID0gXCJjb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcyA9IFwid2hvbGVPdmVybGF5XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcyA9IFwiZXJyb3JNZXNzYWdlXCI+XG4gICAgPGRpdiBjbGFzcyA9IFwibWVzc2FnZUhvbGRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb250ZW50SG9sZGVyXCI+XG4gICAgICAgICAgICA8aDI+RXJyb3I8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3MgPSBcImVycm9yTWVzc2FnZVRleHRcIj5UZXh0IENhbm5vdCBiZSBvdmVyIDEwIGNocmFjdGVyczwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImV4aXRCdXR0b25cIj5FeGl0PC9idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuXG48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJtb2JpbGVNZW51XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3MgPSBcImhhbWJ1cmdlck1lbnVcIj48L2J1dHRvbj5cbiAgICAgICAgPGgyIGNsYXNzID0gXCJtb2JpbGVNZW51VGl0bGVcIj5UbyBEbyBMaXN0PC9oMj5cblxuICAgIDwvZGl2PiBcbiAgICA8ZGl2IGNsYXNzID0gXCJzZWN0aW9uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJvdmVybGF5XCI+Y3VycmVudCBvdmVybGF5PC9kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3MgPSBcImV4aXRcIj5YPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVsZW1lbnRzXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcyA9IFwibGlzdFRpdGxlXCIgPlRvIERvIExpc3Q8L2gxPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidXBDb21pbmdCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VXBjb21pbmc8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3RBZGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcInByb2plY3RUZXh0XCI+UHJvamVjdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwicGx1c1NpZ25cIj4rPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0VGFza0hvbGRlclwiPjwvZGl2PiBcbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInBhZ2VDb250ZW50XCI+IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gXG5cbiAgICBib2R5LmlubmVySFRNTCA9IHBhZ2VUZXh0O1xuXG59XG5cblxuXG5jb25zdCBnZXREb21FbGVtZW50cyA9ICgpID0+IHtcbiAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbnNcIik7XG4gICAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIik7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gICAgbGV0IGV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4aXRcIik7XG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c1wiKTtcbiAgICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0VGl0bGVcIik7XG4gICAgbGV0IHVwQ29taW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cENvbWluZ0J1dHRvblwiKTtcbiAgICBsZXQgcHJvamVjdEFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QWRkZXJcIik7XG4gICAgbGV0IHByb2plY3RUZXh0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRleHRcIik7XG4gICAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbHVzU2lnblwiKTtcbiAgICBsZXQgcHJvamVjdFRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUYXNrSG9sZGVyXCIpO1xuICAgIGxldCBlZGl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFByb2plY3RCdXR0b25cIik7XG4gICAgbGV0IGVkaXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0VGV4dFwiKTtcbiAgICBsZXQgYWRkUHJvamVjdExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0TGFiZWxcIik7XG4gICAgbGV0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlQ29udGVudFwiKTtcbiAgICBsZXQgd2hvbGVPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9sZU92ZXJsYXlcIilcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvck1lc3NhZ2VcIilcbiAgICBsZXQgZXJyb3JNZXNzYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JNZXNzYWdlVGV4dFwiKTtcbiAgICBsZXQgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhpdEJ1dHRvblwiKTtcblxuICAgIHJldHVybiB7c2VjdGlvbiwgbmF2aWdhdGlvbiwgb3ZlcmxheSwgZXhpdCwgZWxlbWVudHMsXG4gICAgICAgICAgICBsaXN0VGl0bGUsIHVwQ29taW5nQnV0dG9uLCBwcm9qZWN0QWRkZXIsIHByb2plY3RUZXh0LFxuICAgICAgICAgICAgcGx1c1NpZ24sIHByb2plY3RUYXNrSG9sZGVyLCBlZGl0UHJvamVjdEJ1dHRvbiwgZWRpdFRleHQsXG4gICAgICAgICAgICBhZGRQcm9qZWN0TGFiZWwscGFnZUNvbnRlbnQsIHdob2xlT3ZlcmxheSwgZXhpdEJ1dHRvbiwgZXJyb3JNZXNzYWdlLCBlcnJvck1lc3NhZ2VUZXh0fVxuICAgIH1cblxuXG5leHBvcnQgIHtnZXREb21FbGVtZW50cywgY3JlYXRlRG9tRWxlbWVudHN9XG4gICAgXG4iLCJcblxuY29uc3Qgc2VuZCA9IChcbiAgICAoKSA9PiB7XG4gICAgICAgIGxldCBpdGVtcyA9IHt9O1xuICAgICAgICBjb25zdCBzZW5kRGF0YSA9IChkYXRhLGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpdGVtc1tpbmRleF0gPSBkYXRhO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHJldHJpZXZlRGF0YSA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW1zW2luZGV4XSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zW2luZGV4XVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVEYXRhID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaW5kZXhdKXtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEl0ZW1zID0gaXRlbXM7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJdGVtc0tleXMgPSBPYmplY3Qua2V5cyhpdGVtcykuZmlsdGVyKGtleSA9PiBrZXkgIT0gaW5kZXgpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdJdGVtcyA9IGN1cnJlbnRJdGVtc0tleXMubWFwKGtleSA9PiBjdXJyZW50SXRlbXNba2V5XSAgPSBjdXJyZW50SXRlbXNba2V5XSk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0l0ZW1zS2V5cyA9IE9iamVjdC5rZXlzKG5ld0l0ZW1zKVxuXG4gICAgICAgICAgICAgICAgbGV0IG5ld2VySXRlbXMgPSB7fTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPTA7IGkgPCBuZXdJdGVtc0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3ZXJJdGVtc1tpXSA9IG5ld0l0ZW1zW25ld0l0ZW1zS2V5c1tpXV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBuZXdlckl0ZW1zO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zLCBcInRoZSBpdGVtc1wiKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtzZW5kRGF0YSwgcmV0cmlldmVEYXRhLCBkZWxldGVEYXRhfTtcblxuICAgIH1cbikoKVxuXG5leHBvcnQge3NlbmR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiaW1wb3J0IHRyYXNoSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy90cmFzaC5zdmdcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2VkaXRPZmYuc3ZnXCI7XG5cblxuXG5pbXBvcnQge3JlbW92ZUl0ZW0sIGFkZEl0ZW0sIGFkZEJpbmRpbmdzLCByZW1vdmVCaW5kaW5ncywgc2V0QXJyYXl9IGZyb20gXCIuL2VsZW1lbnRFdmVudHMuanNcIlxuaW1wb3J0IHtzZW5kfSBmcm9tIFwiLi9zZW5kLmpzXCJcbmltcG9ydCB7IGdldERvbUVsZW1lbnRzIH0gZnJvbSBcIi4vcGFnZUxheW91dC5qc1wiO1xuXG5cblxuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuXG4gICAgbGV0IHN0YXRpY0xpc3RUYXNrcyA9IFtdO1xuICAgIGxldCBjaGFuZ2VkTGlzdFRhc2tzID0gW107IFxuICAgIGxldCBpbmRleDtcblxuXG4gICAgbGV0IGRvbSA9IGdldERvbUVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCBhc3NpZ25Cb2FyZEJpbmRpbmdzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUFkZEJvYXJkID0oKSA9PiB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGdldFVwZGF0ZWRFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkVGV4dEJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZEJvYXJkZXJUZXh0Qm94XCIpKVxuICAgICAgICBsZXQgYm9hcmRlckJ1dHRvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZEJvYXJkZXJCdXR0b25cIikpXG4gICAgICAgIHJldHVybiB7Ym9hcmRUZXh0Qm94LCBib2FyZGVyQnV0dG9ufVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNvbnRlbnRCaW5kaW5ncyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmJvYXJkZXJCdXR0b24sIGFkZEJvYXJkVGFza3MsXCJjbGlja1wiKTtcbiAgICAgICAgcmVtb3ZlQmluZGluZ3MoZWxlbWVudHMuYm9hcmRlckJ1dHRvbiwgYWRkQm9hcmRUYXNrS2V5cyxcImtleWRvd25cIilcblxuICAgIH1cblxuICAgIGNvbnN0IGFkZENvbnRlbnRCaW5kaW5ncyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmJvYXJkZXJCdXR0b24sIGFkZEJvYXJkVGFza3MsXCJjbGlja1wiKTtcbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMuYm9hcmRlckJ1dHRvbiwgYWRkQm9hcmRUYXNrS2V5cywgXCJrZXlkb3duXCIpXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgY29uc3QgYWRkQm9hcmRUYXNrS2V5cyA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgYWRkQm9hcmRUYXNrcygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBhZGRCb2FyZFRhc2tzID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgbGV0IHRleHQgPSBlbGVtZW50cy5ib2FyZFRleHRCb3hbMF0udmFsdWU7XG4gICAgICAgIGlmKHRleHQubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgbGV0IHRhc2sgPSBjcmVhdGVCb2FyZFRlbXBsYXRlKHRleHQpO1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgY2hhbmdlZExpc3RUYXNrcyA9IHNldEFycmF5KHN0YXRpY0xpc3RUYXNrcylcbiAgICAgICAgY29uc29sZS5sb2coY2hhbmdlZExpc3RUYXNrcyk7XG4gICAgICAgIHJlbmRlckxpc3RUYXNrcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgdGFza1RleHQgPSBgPGRpdiBjbGFzcyA9IFwidGFza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJ0YXNrTGFiZWxcIj5Eb2luZyBMYXVuZGFyeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0YXNrVG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZ2VuZXJhbFRleHRIb2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJnZW5lcmFsVGV4dFwiPkR1ZSBOb3YgMTUgMjAyMTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJnZW5lcmFsVGV4dFwiPlByaW9yaXR5OiBIaWdoPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCJlZGl0XCIgc3JjPVwic3JjL2ltYWdlcy9lZGl0T2ZmLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY2lyY2xlSWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkRWRpdG9yID0gKCkgPT4ge1xuICAgICAgICBsZXQgYm9hcmRUZXh0ID0gYDxkaXYgY2xhc3MgPSBcImJvYXJkVGV4dEVkaXRvclwiPlxuICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImJvYXJkdGV4dEJveFwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxwIGNsYXNzID0gXCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9uXCI+KzwvcD5cbiAgICA8L2Rpdj5gXG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGxldCB0ZXh0ID0gdGVtcGxhdGUudGV4dDtcbiAgICAgICAgbGV0IGJvYXJkVGV4dCA9IGAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJib2FyZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJlZGl0RXhhbXBsZUljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3MgPVwiZGVsZXRlQm9hcmRcIiAgc3JjPVwiJHt0cmFzaEltYWdlfVwiIGFsdD1cInRyYXNoIGljb24gZm9yIGRlbGV0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3MgPSBcImVkaXRCb2FyZFwiIHNyYz1cIiR7ZWRpdEljb259XCIgYWx0PVwiZWRpdGluZyBpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcImV4YW1wbGVCb2FyZFRleHRcIj4ke3RleHR9PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkVGV4dEVkaXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImJvYXJkdGV4dEJveFwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9uXCI+KzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tIb2xkZXJcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tBZGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rIEFkZCBUYXNrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIGJvYXJkVGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVBZGRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFkZEJvYXJkVGV4dCA9IGA8ZGl2IGNsYXNzID0gXCJib2FyZENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYWRkQm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVtcHR5cm93XCI+ZW1wdHkgcm93PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcImFkZEJvYXJkVGV4dFwiPkFkZCBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImFkZEJvYXJkZXJUZXh0Qm94XCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImFkZEJvYXJkZXJCdXR0b25cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBhZGRCb2FyZFRleHQ7XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IHJlbmRlckxpc3RUYXNrcyA9IChib29sKSA9PiB7XG4gICAgICAgIHJlbW92ZUNvbnRlbnRCaW5kaW5ncygpO1xuICAgICAgICBkb20ucGFnZUNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgaWYgKCFib29sKWNoYW5nZWRMaXN0VGFza3MucHVzaCh7YWRkQm9hcmQ6dHJ1ZX0pO1xuICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLCBcImN1cnJlbnQgdGFza1wiKVxuICAgICAgICAgICAgaWYgKHRhc2suYm9hcmQpe1xuICAgICAgICAgICAgICAgIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKHRhc2spO1xuICAgICAgICAgICAgICAgIGRvbS5wYWdlQ29udGVudC5pbm5lckhUTUwgKz0gYm9hcmRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5hZGRCb2FyZCl7XG4gICAgICAgICAgICAgICAgbGV0IGFkZEJvYXJkID0gY3JlYXRlQWRkQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBkb20ucGFnZUNvbnRlbnQuaW5uZXJIVE1MICs9IGFkZEJvYXJkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSAgICBcbiAgICBcblxuXG4gICAgICAgIFxuICAgICAgICBhZGRDb250ZW50QmluZGluZ3MoKTtcblxuXG4gICAgfVxuXG5cbiAgICBjb25zdCBjcmVhdGVCb2FyZFRlbXBsYXRlID0oY3VycmVudFRleHQsdGFza3MpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrcyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIHRhc2tzICE9IFwidW5kZWZpbmVkXCIpIGN1cnJlbnRUYXNrcyA9IHRhc2tzOyBcblxuICAgICAgICBsZXQgYm9hcmQgPSB7Ym9hcmQ6IHRydWUsIHRleHQ6Y3VycmVudFRleHQsIHRhc2tzOiBbXX07XG4gICAgICAgIHJldHVybiBib2FyZDtcblxuXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGluZyBjb250ZW50XCIpXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcyA9IFtdO1xuICAgICAgICByZW5kZXJMaXN0VGFza3MoKTtcbiAgICB9XG5cblxuXG4gICAgY29uc3QgYWN0aXZhdGVDb250ZW50ID0gKGN1cnJlbnRJbmRleCkgPT4ge1xuICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzID0gW107XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT0gXCJ1bmRlZmluZWRcIikgc2VuZC5zZW5kRGF0YShzdGF0aWNMaXN0VGFza3MsaW5kZXgpOyAgIFxuICAgICAgICBpbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZGVsZXRlQ29udGVudCgpO1xuXG4gICAgICAgIGxldCBuZXdUYXNrcyA9IHNlbmQucmV0cmlldmVEYXRhKGluZGV4KTtcbiAgICAgICAgaWYgKCFuZXdUYXNrcyl7XG4gICAgICAgICAgICBzZW5kLnNlbmREYXRhKFtdLGluZGV4KVxuICAgICAgICAgICAgbmV3VGFza3MgPSBzZW5kLnJldHJpZXZlRGF0YShpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljTGlzdFRhc2tzID0gbmV3VGFza3M7XG4gICAgICAgIGNoYW5nZWRMaXN0VGFza3MgPSBzZXRBcnJheShzdGF0aWNMaXN0VGFza3MpO1xuXG4gICAgICAgIHJlbmRlckxpc3RUYXNrcygpO1xuICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7YWN0aXZhdGVDb250ZW50fTtcbiAgICBcblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=