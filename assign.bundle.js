/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/pageLayout.js":
/*!***********************************!*\
  !*** ./src/scripts/pageLayout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInitialElements": () => (/* binding */ getInitialElements),
/* harmony export */   "createDomElements": () => (/* binding */ createDomElements),
/* harmony export */   "getUpdatedElements": () => (/* binding */ getUpdatedElements)
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




const getInitialElements = () => {
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


    const getUpdatedElements = () => {
        let boardTextBox = Array.from(document.getElementsByClassName("addBoarderTextBox"))
        let boarderButton = Array.from(document.getElementsByClassName("addBoarderButton"))
        let editItems = Array.from(document.getElementsByClassName("editProject"));
        let deleteItems = Array.from(document.getElementsByClassName("deleteItem"));
        let projectContainerText = Array.from(document.getElementsByClassName("projectContainerText"));
        let projectContainer = Array.from(document.getElementsByClassName("projectContainer"))
        let addProjectLabels = Array.from(document.getElementsByClassName("addProjectLabel"));
        let projectButton = Array.from(document.getElementsByClassName("projectButton"));

        let projectTaskHolder = document.querySelector(".projectTaskHolder");
        let projectTaskHolderChildren = Array.from(projectTaskHolder.children);
        
        let pageContent = document.querySelector(".pageContent");
        let pageContentChildren = Array.from(pageContent.children);

        let changeBoardTitleButtons = Array.from(document.getElementsByClassName("changeBoardTitleButton"));

        let deleteBoard = Array.from(document.getElementsByClassName("deleteBoard"));
        let editBoard  = Array.from(document.getElementsByClassName("editBoard"));
        let taskHolders = Array.from(document.getElementsByClassName("taskHolder"));
        let taskLists = Array.from(document.getElementsByClassName("taskLists"));
        let boardContentTextBox = Array.from(document.getElementsByClassName("boardtextBox"));
        let boardOverlay = Array.from(document.getElementsByClassName("boardOverlay"))
        let taskAdders = Array.from(document.getElementsByClassName("taskAdder"))
 
        let exampleBoardText = Array.from(document.getElementsByClassName("exampleBoardText"))
        let button = Array.from(document.getElementsByClassName("button"));

        let trashIt = Array.from(document.getElementsByClassName("trashIt"));
        let finished = Array.from(document.getElementsByClassName("finished"));

        let taskTextBox = Array.from(document.getElementsByClassName("taskTextBox"));
        let datePicker = Array.from(document.getElementsByClassName("datePicker"));

        let circleIcon = Array.from(document.getElementsByClassName("circleIcon"));
        let edit = Array.from(document.getElementsByClassName("edit"))
        let dateTools = Array.from(document.getElementsByClassName("dateTool"))

        let exitEditor = Array.from(document.getElementsByClassName("exitEditor"));


        return {editItems, deleteItems, addProjectLabels, projectButton,
            projectTaskHolderChildren, projectContainerText, boardTextBox, boarderButton, 
            deleteBoard, editBoard, pageContent, pageContentChildren, taskHolders, exampleBoardText,
            changeBoardTitleButtons, boardContentTextBox, boardOverlay, taskLists, taskAdders, button,
            trashIt, finished, taskTextBox, datePicker, circleIcon, edit, dateTools, exitEditor, projectContainer
        };
    
    }
    

 

    


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/scripts/assign.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignTools": () => (/* binding */ assignTools),
/* harmony export */   "assignTaskIndex": () => (/* binding */ assignTaskIndex),
/* harmony export */   "assignBoardElements": () => (/* binding */ assignBoardElements)
/* harmony export */ });
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");


const assignTools = (elements,index,boardIndex) => {
    elements.forEach(childElement => {
        if (childElement.getAttribute("class") == "tools"){
            let toolsChildren = Array.from(childElement.children);
            toolsChildren.forEach(toolElement => 
                {
                // console.log(toolElement, "current tool element")
                toolElement.taskIndex = index;
                toolElement.boardIndex = boardIndex;
            })
        }
    })


}

const assignTaskIndex = (element,boardIndex) => {

    let taskIndex =0;
    // console.log(boardIndex, "the current boardIndex")

    element.forEach(childElement => {
        // console.log(childElement, "the child element")
        if (childElement.getAttribute("class") == "task" ||
            childElement.getAttribute("class") == "notTask"
        ){
            let taskChildren = Array.from(childElement.children);
            taskChildren.forEach(taskChild => {
                if (taskChild.getAttribute("class") == "taskTools"){
                    let taskToolsChildren = Array.from(taskChild.children);
                    assignTools(taskToolsChildren,taskIndex,boardIndex);
                }
            })
            taskIndex++
        }

    })
    



}


const assignBoardIcons = (element, currentIndex) =>  {
    let board = Array.from(element.children);
    board.forEach(childElement => {
        if (childElement.getAttribute("class") == "editExampleIcons"){
            childElement.boardIndex = currentIndex;
            let editExampleIcons = Array.from(childElement.children);
            editExampleIcons.forEach(itemElement => {
                itemElement.boardIndex = currentIndex;
            })

        }

        if (childElement.getAttribute("class") == "taskAdder"){
            let taskParagraph = Array.from(childElement.children)[0];
            // console.log(taskParagraph, "the task paragraph")
            taskParagraph.boardIndex = currentIndex;
        }
      //  console.log(childElement, "the child element")
        childElement.boardIndex = currentIndex;
       // console.log(childElement.boardIndex, "child element board index")
    })
}


const assignBoardElements = () => {

    
    let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_0__.getUpdatedElements)();
    let pageContentChildren = elements.pageContentChildren;
    let currentIndex = 0;


 //   console.log(pageContentChildren, " the page content children")
    pageContentChildren.forEach(element => {
        if (element.getAttribute("class") == "boardContent"){
            element.boardIndex = currentIndex;
            let boardContent = Array.from(element.children);
            boardContent.forEach(childElement => {
                childElement.boardIndex = currentIndex;
             //   console.log(childElement.getAttribute("class"), "the current child element calss")
                if (childElement.getAttribute("class") == "board") assignBoardIcons(childElement,currentIndex)
             
            })
        }
        currentIndex ++;
    })
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaWduLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsMkRBQTJEOztBQUUzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ21FO0FBQ25FOzs7Ozs7O1VDaEpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05rRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsS0FBSztBQUNMOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBOztBQUVBO0FBQ0EsbUJBQW1CLGtFQUFrQjtBQUNyQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9wYWdlTGF5b3V0LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9hc3NpZ24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy9jcmVhdGVpbmcgbmV3IGVsbWVudCBpbnZvbHZlcyB1c2luZyBhIHRlbXBsYXRlIHdoaWNoIGlzIHtlbGVtZW50OlwiXCIsICBjbGFzc05hbWU6IFwiXCIsIHNvdXJjZTpcIlwiLHR5cGU6XCJcIn07XG5cbmNvbnN0IGNyZWF0ZURvbUVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIGxldCBwYWdlVGV4dCA9IGAgICAgPGRpdiBjbGFzcyA9IFwiY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3MgPSBcIndob2xlT3ZlcmxheVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3MgPSBcImVycm9yTWVzc2FnZVwiPlxuICAgIDxkaXYgY2xhc3MgPSBcIm1lc3NhZ2VIb2xkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29udGVudEhvbGRlclwiPlxuICAgICAgICAgICAgPGgyPkVycm9yPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzID0gXCJlcnJvck1lc3NhZ2VUZXh0XCI+VGV4dCBDYW5ub3QgYmUgb3ZlciAxMCBjaHJhY3RlcnM8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJleGl0QnV0dG9uXCI+RXhpdDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG4gICAgPGRpdiBjbGFzcyA9IFwibW9iaWxlTWVudVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJoYW1idXJnZXJNZW51XCI+PC9idXR0b24+XG4gICAgICAgIDxoMiBjbGFzcyA9IFwibW9iaWxlTWVudVRpdGxlXCI+VG8gRG8gTGlzdDwvaDI+XG5cbiAgICA8L2Rpdj4gXG4gICAgPGRpdiBjbGFzcyA9IFwic2VjdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwib3ZlcmxheVwiPmN1cnJlbnQgb3ZlcmxheTwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzID0gXCJleGl0XCI+WDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJlbGVtZW50c1wiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3MgPSBcImxpc3RUaXRsZVwiID5UbyBEbyBMaXN0PC9oMT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInVwQ29taW5nQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlVwY29taW5nPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0QWRkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJwcm9qZWN0VGV4dFwiPlByb2plY3Q8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcInBsdXNTaWduXCI+KzwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdFRhc2tIb2xkZXJcIj48L2Rpdj4gXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJwYWdlQ29udGVudFwiPiA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YFxuXG4gICAgYm9keS5pbm5lckhUTUwgPSBwYWdlVGV4dDtcblxufVxuXG5cblxuXG5jb25zdCBnZXRJbml0aWFsRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25zXCIpO1xuICAgIGxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpO1xuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgIGxldCBleGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leGl0XCIpO1xuICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNcIik7XG4gICAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFRpdGxlXCIpO1xuICAgIGxldCB1cENvbWluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBDb21pbmdCdXR0b25cIik7XG4gICAgbGV0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEFkZGVyXCIpO1xuICAgIGxldCBwcm9qZWN0VGV4dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUZXh0XCIpO1xuICAgIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1c1NpZ25cIik7XG4gICAgbGV0IHByb2plY3RUYXNrSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGFza0hvbGRlclwiKTtcbiAgICBsZXQgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRQcm9qZWN0QnV0dG9uXCIpO1xuICAgIGxldCBlZGl0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFRleHRcIik7XG4gICAgbGV0IGFkZFByb2plY3RMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdExhYmVsXCIpO1xuICAgIGxldCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZUNvbnRlbnRcIik7XG4gICAgbGV0IHdob2xlT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvbGVPdmVybGF5XCIpXG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JNZXNzYWdlXCIpXG4gICAgbGV0IGVycm9yTWVzc2FnZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yTWVzc2FnZVRleHRcIik7XG4gICAgbGV0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4aXRCdXR0b25cIik7XG5cbiAgICByZXR1cm4ge3NlY3Rpb24sIG5hdmlnYXRpb24sIG92ZXJsYXksIGV4aXQsIGVsZW1lbnRzLFxuICAgICAgICAgICAgbGlzdFRpdGxlLCB1cENvbWluZ0J1dHRvbiwgcHJvamVjdEFkZGVyLCBwcm9qZWN0VGV4dCxcbiAgICAgICAgICAgIHBsdXNTaWduLCBwcm9qZWN0VGFza0hvbGRlciwgZWRpdFByb2plY3RCdXR0b24sIGVkaXRUZXh0LFxuICAgICAgICAgICAgYWRkUHJvamVjdExhYmVsLHBhZ2VDb250ZW50LCB3aG9sZU92ZXJsYXksIGV4aXRCdXR0b24sIGVycm9yTWVzc2FnZSwgZXJyb3JNZXNzYWdlVGV4dH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGdldFVwZGF0ZWRFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkVGV4dEJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZEJvYXJkZXJUZXh0Qm94XCIpKVxuICAgICAgICBsZXQgYm9hcmRlckJ1dHRvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZEJvYXJkZXJCdXR0b25cIikpXG4gICAgICAgIGxldCBlZGl0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlZGl0UHJvamVjdFwiKSk7XG4gICAgICAgIGxldCBkZWxldGVJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZUl0ZW1cIikpO1xuICAgICAgICBsZXQgcHJvamVjdENvbnRhaW5lclRleHQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0Q29udGFpbmVyVGV4dFwiKSk7XG4gICAgICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdENvbnRhaW5lclwiKSlcbiAgICAgICAgbGV0IGFkZFByb2plY3RMYWJlbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRQcm9qZWN0TGFiZWxcIikpO1xuICAgICAgICBsZXQgcHJvamVjdEJ1dHRvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RCdXR0b25cIikpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0VGFza0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRhc2tIb2xkZXJcIik7XG4gICAgICAgIGxldCBwcm9qZWN0VGFza0hvbGRlckNoaWxkcmVuID0gQXJyYXkuZnJvbShwcm9qZWN0VGFza0hvbGRlci5jaGlsZHJlbik7XG4gICAgICAgIFxuICAgICAgICBsZXQgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VDb250ZW50XCIpO1xuICAgICAgICBsZXQgcGFnZUNvbnRlbnRDaGlsZHJlbiA9IEFycmF5LmZyb20ocGFnZUNvbnRlbnQuY2hpbGRyZW4pO1xuXG4gICAgICAgIGxldCBjaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYW5nZUJvYXJkVGl0bGVCdXR0b25cIikpO1xuXG4gICAgICAgIGxldCBkZWxldGVCb2FyZCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZUJvYXJkXCIpKTtcbiAgICAgICAgbGV0IGVkaXRCb2FyZCAgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlZGl0Qm9hcmRcIikpO1xuICAgICAgICBsZXQgdGFza0hvbGRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrSG9sZGVyXCIpKTtcbiAgICAgICAgbGV0IHRhc2tMaXN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2tMaXN0c1wiKSk7XG4gICAgICAgIGxldCBib2FyZENvbnRlbnRUZXh0Qm94ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYm9hcmR0ZXh0Qm94XCIpKTtcbiAgICAgICAgbGV0IGJvYXJkT3ZlcmxheSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJvYXJkT3ZlcmxheVwiKSlcbiAgICAgICAgbGV0IHRhc2tBZGRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrQWRkZXJcIikpXG4gXG4gICAgICAgIGxldCBleGFtcGxlQm9hcmRUZXh0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXhhbXBsZUJvYXJkVGV4dFwiKSlcbiAgICAgICAgbGV0IGJ1dHRvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ1dHRvblwiKSk7XG5cbiAgICAgICAgbGV0IHRyYXNoSXQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0cmFzaEl0XCIpKTtcbiAgICAgICAgbGV0IGZpbmlzaGVkID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmluaXNoZWRcIikpO1xuXG4gICAgICAgIGxldCB0YXNrVGV4dEJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2tUZXh0Qm94XCIpKTtcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkYXRlUGlja2VyXCIpKTtcblxuICAgICAgICBsZXQgY2lyY2xlSWNvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNpcmNsZUljb25cIikpO1xuICAgICAgICBsZXQgZWRpdCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVkaXRcIikpXG4gICAgICAgIGxldCBkYXRlVG9vbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkYXRlVG9vbFwiKSlcblxuICAgICAgICBsZXQgZXhpdEVkaXRvciA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImV4aXRFZGl0b3JcIikpO1xuXG5cbiAgICAgICAgcmV0dXJuIHtlZGl0SXRlbXMsIGRlbGV0ZUl0ZW1zLCBhZGRQcm9qZWN0TGFiZWxzLCBwcm9qZWN0QnV0dG9uLFxuICAgICAgICAgICAgcHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbiwgcHJvamVjdENvbnRhaW5lclRleHQsIGJvYXJkVGV4dEJveCwgYm9hcmRlckJ1dHRvbiwgXG4gICAgICAgICAgICBkZWxldGVCb2FyZCwgZWRpdEJvYXJkLCBwYWdlQ29udGVudCwgcGFnZUNvbnRlbnRDaGlsZHJlbiwgdGFza0hvbGRlcnMsIGV4YW1wbGVCb2FyZFRleHQsXG4gICAgICAgICAgICBjaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucywgYm9hcmRDb250ZW50VGV4dEJveCwgYm9hcmRPdmVybGF5LCB0YXNrTGlzdHMsIHRhc2tBZGRlcnMsIGJ1dHRvbixcbiAgICAgICAgICAgIHRyYXNoSXQsIGZpbmlzaGVkLCB0YXNrVGV4dEJveCwgZGF0ZVBpY2tlciwgY2lyY2xlSWNvbiwgZWRpdCwgZGF0ZVRvb2xzLCBleGl0RWRpdG9yLCBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgIH07XG4gICAgXG4gICAgfVxuICAgIFxuXG4gXG5leHBvcnQgIHtnZXRJbml0aWFsRWxlbWVudHMsIGNyZWF0ZURvbUVsZW1lbnRzLCBnZXRVcGRhdGVkRWxlbWVudHN9XG4gICAgXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Z2V0VXBkYXRlZEVsZW1lbnRzfSBmcm9tIFwiLi9wYWdlTGF5b3V0LmpzXCJcblxuY29uc3QgYXNzaWduVG9vbHMgPSAoZWxlbWVudHMsaW5kZXgsYm9hcmRJbmRleCkgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInRvb2xzXCIpe1xuICAgICAgICAgICAgbGV0IHRvb2xzQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGNoaWxkRWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgICAgICB0b29sc0NoaWxkcmVuLmZvckVhY2godG9vbEVsZW1lbnQgPT4gXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvb2xFbGVtZW50LCBcImN1cnJlbnQgdG9vbCBlbGVtZW50XCIpXG4gICAgICAgICAgICAgICAgdG9vbEVsZW1lbnQudGFza0luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgdG9vbEVsZW1lbnQuYm9hcmRJbmRleCA9IGJvYXJkSW5kZXg7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcblxuXG59XG5cbmNvbnN0IGFzc2lnblRhc2tJbmRleCA9IChlbGVtZW50LGJvYXJkSW5kZXgpID0+IHtcblxuICAgIGxldCB0YXNrSW5kZXggPTA7XG4gICAgLy8gY29uc29sZS5sb2coYm9hcmRJbmRleCwgXCJ0aGUgY3VycmVudCBib2FyZEluZGV4XCIpXG5cbiAgICBlbGVtZW50LmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2hpbGRFbGVtZW50LCBcInRoZSBjaGlsZCBlbGVtZW50XCIpXG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJ0YXNrXCIgfHxcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcIm5vdFRhc2tcIlxuICAgICAgICApe1xuICAgICAgICAgICAgbGV0IHRhc2tDaGlsZHJlbiA9IEFycmF5LmZyb20oY2hpbGRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIHRhc2tDaGlsZHJlbi5mb3JFYWNoKHRhc2tDaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tDaGlsZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInRhc2tUb29sc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tUb29sc0NoaWxkcmVuID0gQXJyYXkuZnJvbSh0YXNrQ2hpbGQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25Ub29scyh0YXNrVG9vbHNDaGlsZHJlbix0YXNrSW5kZXgsYm9hcmRJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRhc2tJbmRleCsrXG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgXG5cblxuXG59XG5cblxuY29uc3QgYXNzaWduQm9hcmRJY29ucyA9IChlbGVtZW50LCBjdXJyZW50SW5kZXgpID0+ICB7XG4gICAgbGV0IGJvYXJkID0gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKTtcbiAgICBib2FyZC5mb3JFYWNoKGNoaWxkRWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJlZGl0RXhhbXBsZUljb25zXCIpe1xuICAgICAgICAgICAgY2hpbGRFbGVtZW50LmJvYXJkSW5kZXggPSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICBsZXQgZWRpdEV4YW1wbGVJY29ucyA9IEFycmF5LmZyb20oY2hpbGRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGVkaXRFeGFtcGxlSWNvbnMuZm9yRWFjaChpdGVtRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbUVsZW1lbnQuYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJ0YXNrQWRkZXJcIil7XG4gICAgICAgICAgICBsZXQgdGFza1BhcmFncmFwaCA9IEFycmF5LmZyb20oY2hpbGRFbGVtZW50LmNoaWxkcmVuKVswXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tQYXJhZ3JhcGgsIFwidGhlIHRhc2sgcGFyYWdyYXBoXCIpXG4gICAgICAgICAgICB0YXNrUGFyYWdyYXBoLmJvYXJkSW5kZXggPSBjdXJyZW50SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIC8vICBjb25zb2xlLmxvZyhjaGlsZEVsZW1lbnQsIFwidGhlIGNoaWxkIGVsZW1lbnRcIilcbiAgICAgICAgY2hpbGRFbGVtZW50LmJvYXJkSW5kZXggPSBjdXJyZW50SW5kZXg7XG4gICAgICAgLy8gY29uc29sZS5sb2coY2hpbGRFbGVtZW50LmJvYXJkSW5kZXgsIFwiY2hpbGQgZWxlbWVudCBib2FyZCBpbmRleFwiKVxuICAgIH0pXG59XG5cblxuY29uc3QgYXNzaWduQm9hcmRFbGVtZW50cyA9ICgpID0+IHtcblxuICAgIFxuICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgIGxldCBwYWdlQ29udGVudENoaWxkcmVuID0gZWxlbWVudHMucGFnZUNvbnRlbnRDaGlsZHJlbjtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcblxuXG4gLy8gICBjb25zb2xlLmxvZyhwYWdlQ29udGVudENoaWxkcmVuLCBcIiB0aGUgcGFnZSBjb250ZW50IGNoaWxkcmVuXCIpXG4gICAgcGFnZUNvbnRlbnRDaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImJvYXJkQ29udGVudFwiKXtcbiAgICAgICAgICAgIGVsZW1lbnQuYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGxldCBib2FyZENvbnRlbnQgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgYm9hcmRDb250ZW50LmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSwgXCJ0aGUgY3VycmVudCBjaGlsZCBlbGVtZW50IGNhbHNzXCIpXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImJvYXJkXCIpIGFzc2lnbkJvYXJkSWNvbnMoY2hpbGRFbGVtZW50LGN1cnJlbnRJbmRleClcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEluZGV4ICsrO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7YXNzaWduVG9vbHMsIGFzc2lnblRhc2tJbmRleCwgYXNzaWduQm9hcmRFbGVtZW50c307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9