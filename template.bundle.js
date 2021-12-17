/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/editOff.svg":
/*!********************************!*\
  !*** ./src/images/editOff.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fa02ba3eeb22ca444b3.svg";

/***/ }),

/***/ "./src/images/exit.svg":
/*!*****************************!*\
  !*** ./src/images/exit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "244b66874c46718f7e06.svg";

/***/ }),

/***/ "./src/images/finished.svg":
/*!*********************************!*\
  !*** ./src/images/finished.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "222a1c7ef846e3979556.svg";

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
/*!*********************************!*\
  !*** ./src/scripts/template.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNavTask": () => (/* binding */ createNavTask),
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "createAddBoard": () => (/* binding */ createAddBoard),
/* harmony export */   "createBoardEditor": () => (/* binding */ createBoardEditor),
/* harmony export */   "createListEditor": () => (/* binding */ createListEditor),
/* harmony export */   "createUpComingBoard": () => (/* binding */ createUpComingBoard),
/* harmony export */   "createProjectEditor": () => (/* binding */ createProjectEditor),
/* harmony export */   "createTaskArrangement": () => (/* binding */ createTaskArrangement)
/* harmony export */ });
/* harmony import */ var _images_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/trash.svg */ "./src/images/trash.svg");
/* harmony import */ var _images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/editOff.svg */ "./src/images/editOff.svg");
/* harmony import */ var _images_finished_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/finished.svg */ "./src/images/finished.svg");
/* harmony import */ var _images_exit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/exit.svg */ "./src/images/exit.svg");







   
   
   const createTaskArrangement = (task) => {
        let color;
        let taskClass = "task";
        let editClass = "edit";
        let circleIconBackground = "none";
        let projectTypeText = ""


        if (task.priority == "High") color = "red";
        if (task.priority == "Low") color = "green";
        if (task.priority == "Medium") color = "#ff9800"
        if (task.navName) {
            projectTypeText = ` <p class="generalText projectTypeText"> Project: ${task.navName}</p>`

        }




        if (task.checked) {
            taskClass = "notTask";
            editClass = "notEdit"
            circleIconBackground = "black";
        }


        let newTaskText = `<div class="${taskClass}" style = "border-color:${color}">
                            <p class="taskLabel">${task.text}</p>
                            <div class="taskTools">
                                <div class="generalTextHolder">
                                    <p class="generalText">Due: ${task.dateText}</p>
                                    <p class="generalText">Priority: ${task.priority}</p>

                                </div>

                                <div class="tools">
                                    <img class="${editClass}" src="${_images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="">
                                    <div class="circleIcon" style = "background:${circleIconBackground}"></div>
                                </div>
                            </div>

                            ${projectTypeText}
                           

                            
                        </div>`
        return newTaskText;
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
                                                    <div class = "taskLists"></div>
                                                    <div class = "taskAdder">
                                                        <p>+ Add Task</p>
                                                    </div>
                                                </div> 
                                                    </div>`
        return boardText;
    }

    const createUpComingBoard = (task) => {


        let boardText = `<div class = "boardContent">
                            <div class = "board">
                                <div class = "boardOverlay"></div>                          
                                    <h2 class = "exampleBoardText">${task.text}</h2>   
                                    <div class = "taskLists"></div>     
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


    const createBoardEditor = (task) => {
        let value = task.text;
        
        let boardText = `<div class = "boardTextEditor">
        <input class = "boardtextBox" type="text" value = "${value}">
        <p class = "changeBoardTitleButton">+</p>
    </div>`
        return boardText;
    }


    const createListEditor = (task) => {
        let defaultColor = "blue"
        let icon = _images_trash_svg__WEBPACK_IMPORTED_MODULE_0__;
        let iconClass = "trashIt";



        if (task.creatingTask) {
            defaultColor = "black";
            icon = _images_exit_svg__WEBPACK_IMPORTED_MODULE_3__;
            iconClass = "exitEditor"

        }
        let text = task.text;


        let listText = `<div class = "taskEditor" style = "border-color:${defaultColor}">
                            <div class = "taskHolder">

                                <p class = "taskHolderText">Title:</p>
                                <input class = "taskTextBox" type="text" value = "${text}">
                            </div>
                                <div class = "dateTool">
                                    <p class = "dateText">Date: </p>
                                    <input class = "datePicker" type="date">
                                </div>
                                <div class = "editToolHolder">
                                    <div class = "priority">
                                        <p class = "buttonText">Priority:</p>
                                        <div class = "buttons">
                                            <div class = "button high">
                                                <p class = "highText">High</p>
                                            </div>
                                            <div class = "button medium">
                                                <p class = "mediumText">Medium</p>
                                            </div>
                                            <div class = "button low">
                                                <p class = "lowText">Low</p>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                                <div class = "editTools">
                                    <img class = "${iconClass}" src="${icon}" alt="">
                                    <img class = "finished" src="${_images_finished_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="">
                                </div>
                            </div>`  
    return listText;
    }


    const createNavTask = (task, highlighted) => {


        let styleText = ''
        if (highlighted) styleText = 'style = "background:rgb(22, 83, 227);" '


        let taskText = `                             <div class  = "projectButton projectButtonHover" ${styleText}>
        <div class = "projectTools">
                <img  class = "deleteItem" src="${_images_trash_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="">
                <img class = "editProject" src="${_images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="">
            </div> 

            <div class = "projectContainer">
                <p class = "projectContainerText">${task.task}</p>
            </div>
        </div>`
        return taskText;
    }


    const createProjectEditor = (template) => {
        let text = "";
        if (typeof template.value != "undefined") text = template.value;

        let editorText = ` <div class = "editProjectButton">
        <input class = "editText" type="text" value="${text}">
        <p class = "addProjectLabel"> +</p>
    </div>`
        return editorText;

    }



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDNkM7QUFDQTtBQUNNO0FBQ1Q7OztBQUcxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRixhQUFhOztBQUVoRzs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx5Q0FBeUMsVUFBVSwwQkFBMEIsTUFBTTtBQUNuRixtREFBbUQsVUFBVTtBQUM3RDtBQUNBO0FBQ0Esa0VBQWtFLGNBQWM7QUFDaEYsdUVBQXVFLGNBQWM7O0FBRXJGOztBQUVBO0FBQ0Esa0RBQWtELFVBQVUsU0FBUyxnREFBUSxDQUFDO0FBQzlFLGtGQUFrRixxQkFBcUI7QUFDdkc7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLDhDQUFVLENBQUM7QUFDckcsd0ZBQXdGLGdEQUFRLENBQUM7QUFDakc7QUFDQSxxRkFBcUYsS0FBSztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsVUFBVTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELE1BQU07QUFDbkU7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQkFBbUIsOENBQVU7QUFDN0I7Ozs7QUFJQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFRO0FBQzNCOztBQUVBO0FBQ0E7OztBQUdBLDBFQUEwRSxhQUFhO0FBQ3ZGOztBQUVBO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsVUFBVSxTQUFTLEtBQUs7QUFDNUUsbUVBQW1FLGlEQUFhLENBQUM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBLDJFQUEyRTs7O0FBRzNFLHdHQUF3RyxVQUFVO0FBQ2xIO0FBQ0Esa0RBQWtELDhDQUFVLENBQUM7QUFDN0Qsa0RBQWtELGdEQUFRLENBQUM7QUFDM0Q7O0FBRUE7QUFDQSxvREFBb0QsVUFBVTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVELEtBQUs7QUFDNUQ7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3RlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiXG5pbXBvcnQgdHJhc2hJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL3RyYXNoLnN2Z1wiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuLi9pbWFnZXMvZWRpdE9mZi5zdmdcIjtcbmltcG9ydCBjaGVja01hcmtJY29uIGZyb20gXCIuLi9pbWFnZXMvZmluaXNoZWQuc3ZnXCI7XG5pbXBvcnQgZXhpdEljb24gZnJvbSBcIi4uL2ltYWdlcy9leGl0LnN2Z1wiO1xuXG5cbiAgIFxuICAgXG4gICBjb25zdCBjcmVhdGVUYXNrQXJyYW5nZW1lbnQgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgY29sb3I7XG4gICAgICAgIGxldCB0YXNrQ2xhc3MgPSBcInRhc2tcIjtcbiAgICAgICAgbGV0IGVkaXRDbGFzcyA9IFwiZWRpdFwiO1xuICAgICAgICBsZXQgY2lyY2xlSWNvbkJhY2tncm91bmQgPSBcIm5vbmVcIjtcbiAgICAgICAgbGV0IHByb2plY3RUeXBlVGV4dCA9IFwiXCJcblxuXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09IFwiSGlnaFwiKSBjb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTG93XCIpIGNvbG9yID0gXCJncmVlblwiO1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKSBjb2xvciA9IFwiI2ZmOTgwMFwiXG4gICAgICAgIGlmICh0YXNrLm5hdk5hbWUpIHtcbiAgICAgICAgICAgIHByb2plY3RUeXBlVGV4dCA9IGAgPHAgY2xhc3M9XCJnZW5lcmFsVGV4dCBwcm9qZWN0VHlwZVRleHRcIj4gUHJvamVjdDogJHt0YXNrLm5hdk5hbWV9PC9wPmBcblxuICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgdGFza0NsYXNzID0gXCJub3RUYXNrXCI7XG4gICAgICAgICAgICBlZGl0Q2xhc3MgPSBcIm5vdEVkaXRcIlxuICAgICAgICAgICAgY2lyY2xlSWNvbkJhY2tncm91bmQgPSBcImJsYWNrXCI7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBuZXdUYXNrVGV4dCA9IGA8ZGl2IGNsYXNzPVwiJHt0YXNrQ2xhc3N9XCIgc3R5bGUgPSBcImJvcmRlci1jb2xvcjoke2NvbG9yfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFza0xhYmVsXCI+JHt0YXNrLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrVG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdlbmVyYWxUZXh0SG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImdlbmVyYWxUZXh0XCI+RHVlOiAke3Rhc2suZGF0ZVRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJnZW5lcmFsVGV4dFwiPlByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIiR7ZWRpdENsYXNzfVwiIHNyYz1cIiR7ZWRpdEljb259XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlSWNvblwiIHN0eWxlID0gXCJiYWNrZ3JvdW5kOiR7Y2lyY2xlSWNvbkJhY2tncm91bmR9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0VHlwZVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICByZXR1cm4gbmV3VGFza1RleHQ7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQm9hcmQgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgbGV0IHRleHQgPSB0ZW1wbGF0ZS50ZXh0O1xuICAgICAgICBsZXQgYm9hcmRUZXh0ID0gYCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJib2FyZENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkT3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVkaXRFeGFtcGxlSWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9XCJkZWxldGVCb2FyZFwiICBzcmM9XCIke3RyYXNoSW1hZ2V9XCIgYWx0PVwidHJhc2ggaWNvbiBmb3IgZGVsZXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9IFwiZWRpdEJvYXJkXCIgc3JjPVwiJHtlZGl0SWNvbn1cIiBhbHQ9XCJlZGl0aW5nIGljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcImV4YW1wbGVCb2FyZFRleHRcIj4ke3RleHR9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0YXNrTGlzdHNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0YXNrQWRkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+KyBBZGQgVGFzazwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBib2FyZFRleHQ7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVXBDb21pbmdCb2FyZCA9ICh0YXNrKSA9PiB7XG5cblxuICAgICAgICBsZXQgYm9hcmRUZXh0ID0gYDxkaXYgY2xhc3MgPSBcImJvYXJkQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkT3ZlcmxheVwiPjwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcImV4YW1wbGVCb2FyZFRleHRcIj4ke3Rhc2sudGV4dH08L2gyPiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidGFza0xpc3RzXCI+PC9kaXY+ICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tBZGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPisgQWRkIFRhc2s8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIGJvYXJkVGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVBZGRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFkZEJvYXJkVGV4dCA9IGA8ZGl2IGNsYXNzID0gXCJib2FyZENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYWRkQm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVtcHR5cm93XCI+ZW1wdHkgcm93PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcImFkZEJvYXJkVGV4dFwiPkFkZCBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImFkZEJvYXJkZXJUZXh0Qm94XCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImFkZEJvYXJkZXJCdXR0b25cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICByZXR1cm4gYWRkQm9hcmRUZXh0O1xuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlQm9hcmRFZGl0b3IgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0YXNrLnRleHQ7XG4gICAgICAgIFxuICAgICAgICBsZXQgYm9hcmRUZXh0ID0gYDxkaXYgY2xhc3MgPSBcImJvYXJkVGV4dEVkaXRvclwiPlxuICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImJvYXJkdGV4dEJveFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWUgPSBcIiR7dmFsdWV9XCI+XG4gICAgICAgIDxwIGNsYXNzID0gXCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9uXCI+KzwvcD5cbiAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBib2FyZFRleHQ7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjcmVhdGVMaXN0RWRpdG9yID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IGRlZmF1bHRDb2xvciA9IFwiYmx1ZVwiXG4gICAgICAgIGxldCBpY29uID0gdHJhc2hJbWFnZTtcbiAgICAgICAgbGV0IGljb25DbGFzcyA9IFwidHJhc2hJdFwiO1xuXG5cblxuICAgICAgICBpZiAodGFzay5jcmVhdGluZ1Rhc2spIHtcbiAgICAgICAgICAgIGRlZmF1bHRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGljb24gPSBleGl0SWNvbjtcbiAgICAgICAgICAgIGljb25DbGFzcyA9IFwiZXhpdEVkaXRvclwiXG5cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGV4dCA9IHRhc2sudGV4dDtcblxuXG4gICAgICAgIGxldCBsaXN0VGV4dCA9IGA8ZGl2IGNsYXNzID0gXCJ0YXNrRWRpdG9yXCIgc3R5bGUgPSBcImJvcmRlci1jb2xvcjoke2RlZmF1bHRDb2xvcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0YXNrSG9sZGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInRhc2tIb2xkZXJUZXh0XCI+VGl0bGU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcInRhc2tUZXh0Qm94XCIgdHlwZT1cInRleHRcIiB2YWx1ZSA9IFwiJHt0ZXh0fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJkYXRlVG9vbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImRhdGVUZXh0XCI+RGF0ZTogPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJkYXRlUGlja2VyXCIgdHlwZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVkaXRUb29sSG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcmlvcml0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJidXR0b25UZXh0XCI+UHJpb3JpdHk6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYnV0dG9uIGhpZ2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJoaWdoVGV4dFwiPkhpZ2g8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJidXR0b24gbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwibWVkaXVtVGV4dFwiPk1lZGl1bTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1dHRvbiBsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJsb3dUZXh0XCI+TG93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVkaXRUb29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9IFwiJHtpY29uQ2xhc3N9XCIgc3JjPVwiJHtpY29ufVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9IFwiZmluaXNoZWRcIiBzcmM9XCIke2NoZWNrTWFya0ljb259XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgIFxuICAgIHJldHVybiBsaXN0VGV4dDtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZU5hdlRhc2sgPSAodGFzaywgaGlnaGxpZ2h0ZWQpID0+IHtcblxuXG4gICAgICAgIGxldCBzdHlsZVRleHQgPSAnJ1xuICAgICAgICBpZiAoaGlnaGxpZ2h0ZWQpIHN0eWxlVGV4dCA9ICdzdHlsZSA9IFwiYmFja2dyb3VuZDpyZ2IoMjIsIDgzLCAyMjcpO1wiICdcblxuXG4gICAgICAgIGxldCB0YXNrVGV4dCA9IGAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgID0gXCJwcm9qZWN0QnV0dG9uIHByb2plY3RCdXR0b25Ib3ZlclwiICR7c3R5bGVUZXh0fT5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdFRvb2xzXCI+XG4gICAgICAgICAgICAgICAgPGltZyAgY2xhc3MgPSBcImRlbGV0ZUl0ZW1cIiBzcmM9XCIke3RyYXNoSW1hZ2V9XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9IFwiZWRpdFByb2plY3RcIiBzcmM9XCIke2VkaXRJY29ufVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+IFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByb2plY3RDb250YWluZXJUZXh0XCI+JHt0YXNrLnRhc2t9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIHRhc2tUZXh0O1xuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdEVkaXRvciA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUudmFsdWUgIT0gXCJ1bmRlZmluZWRcIikgdGV4dCA9IHRlbXBsYXRlLnZhbHVlO1xuXG4gICAgICAgIGxldCBlZGl0b3JUZXh0ID0gYCA8ZGl2IGNsYXNzID0gXCJlZGl0UHJvamVjdEJ1dHRvblwiPlxuICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImVkaXRUZXh0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7dGV4dH1cIj5cbiAgICAgICAgPHAgY2xhc3MgPSBcImFkZFByb2plY3RMYWJlbFwiPiArPC9wPlxuICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIGVkaXRvclRleHQ7XG5cbiAgICB9XG5cblxuZXhwb3J0IHtjcmVhdGVOYXZUYXNrLGNyZWF0ZUJvYXJkLCBjcmVhdGVBZGRCb2FyZCwgY3JlYXRlQm9hcmRFZGl0b3IsIGNyZWF0ZUxpc3RFZGl0b3IsIGNyZWF0ZVVwQ29taW5nQm9hcmQsIGNyZWF0ZVByb2plY3RFZGl0b3IsIGNyZWF0ZVRhc2tBcnJhbmdlbWVudH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=