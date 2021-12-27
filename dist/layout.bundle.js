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
/*!***********************************!*\
  !*** ./src/scripts/pageLayout.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInitialElements": () => (/* binding */ getInitialElements),
/* harmony export */   "createDomElements": () => (/* binding */ createDomElements),
/* harmony export */   "getUpdatedElements": () => (/* binding */ getUpdatedElements)
/* harmony export */ });
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

    let hamburgerMenu = document.querySelector(".hamburgerMenu");
    let mobileMenu = document.querySelector(".mobileMenu");



    return {section, navigation, overlay, exit, elements,
            listTitle, upComingButton, projectAdder, projectText,
            plusSign, projectTaskHolder, editProjectButton, editText,
            addProjectLabel,pageContent, wholeOverlay, exitButton, errorMessage, errorMessageText,
            hamburgerMenu, mobileMenu
        
        }
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
    

 

    

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ21FO0FBQ25FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3BhZ2VMYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjcmVhdGVEb21FbGVtZW50cyA9ICgpID0+IHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICBsZXQgcGFnZVRleHQgPSBgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzID0gXCJ3aG9sZU92ZXJsYXlcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJlcnJvck1lc3NhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzID0gXCJtZXNzYWdlSG9sZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRlbnRIb2xkZXJcIj5cbiAgICAgICAgICAgIDxoMj5FcnJvcjwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzcyA9IFwiZXJyb3JNZXNzYWdlVGV4dFwiPlRleHQgQ2Fubm90IGJlIG92ZXIgMTAgY2hyYWN0ZXJzPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiZXhpdEJ1dHRvblwiPkV4aXQ8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuICAgIDxkaXYgY2xhc3MgPSBcIm1vYmlsZU1lbnVcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiaGFtYnVyZ2VyTWVudVwiPjwvYnV0dG9uPlxuICAgICAgICA8aDIgY2xhc3MgPSBcIm1vYmlsZU1lbnVUaXRsZVwiPlRvIERvIExpc3Q8L2gyPlxuXG4gICAgPC9kaXY+IFxuICAgIDxkaXYgY2xhc3MgPSBcInNlY3Rpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcIm5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm92ZXJsYXlcIj5jdXJyZW50IG92ZXJsYXk8L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzcyA9IFwiZXhpdFwiPlg8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZWxlbWVudHNcIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzID0gXCJsaXN0VGl0bGVcIiA+VG8gRG8gTGlzdDwvaDE+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ1cENvbWluZ0J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5VcGNvbWluZzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdEFkZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwicHJvamVjdFRleHRcIj5Qcm9qZWN0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJwbHVzU2lnblwiPis8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3RUYXNrSG9sZGVyXCI+PC9kaXY+XG5cblxuXG5cbiBcblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicGFnZUNvbnRlbnRcIj4gPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5gXG5cbiAgICBib2R5LmlubmVySFRNTCA9IHBhZ2VUZXh0O1xuXG59XG5cblxuXG5cbmNvbnN0IGdldEluaXRpYWxFbGVtZW50cyA9ICgpID0+IHtcbiAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbnNcIik7XG4gICAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIik7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gICAgbGV0IGV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4aXRcIik7XG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c1wiKTtcbiAgICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0VGl0bGVcIik7XG4gICAgbGV0IHVwQ29taW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cENvbWluZ0J1dHRvblwiKTtcbiAgICBsZXQgcHJvamVjdEFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QWRkZXJcIik7XG4gICAgbGV0IHByb2plY3RUZXh0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRleHRcIik7XG4gICAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbHVzU2lnblwiKTtcbiAgICBsZXQgcHJvamVjdFRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUYXNrSG9sZGVyXCIpO1xuICAgIGxldCBlZGl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFByb2plY3RCdXR0b25cIik7XG4gICAgbGV0IGVkaXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0VGV4dFwiKTtcbiAgICBsZXQgYWRkUHJvamVjdExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0TGFiZWxcIik7XG4gICAgbGV0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlQ29udGVudFwiKTtcbiAgICBsZXQgd2hvbGVPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9sZU92ZXJsYXlcIilcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvck1lc3NhZ2VcIilcbiAgICBsZXQgZXJyb3JNZXNzYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JNZXNzYWdlVGV4dFwiKTtcbiAgICBsZXQgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhpdEJ1dHRvblwiKTtcblxuICAgIGxldCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJNZW51XCIpO1xuICAgIGxldCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGVNZW51XCIpO1xuXG5cblxuICAgIHJldHVybiB7c2VjdGlvbiwgbmF2aWdhdGlvbiwgb3ZlcmxheSwgZXhpdCwgZWxlbWVudHMsXG4gICAgICAgICAgICBsaXN0VGl0bGUsIHVwQ29taW5nQnV0dG9uLCBwcm9qZWN0QWRkZXIsIHByb2plY3RUZXh0LFxuICAgICAgICAgICAgcGx1c1NpZ24sIHByb2plY3RUYXNrSG9sZGVyLCBlZGl0UHJvamVjdEJ1dHRvbiwgZWRpdFRleHQsXG4gICAgICAgICAgICBhZGRQcm9qZWN0TGFiZWwscGFnZUNvbnRlbnQsIHdob2xlT3ZlcmxheSwgZXhpdEJ1dHRvbiwgZXJyb3JNZXNzYWdlLCBlcnJvck1lc3NhZ2VUZXh0LFxuICAgICAgICAgICAgaGFtYnVyZ2VyTWVudSwgbW9iaWxlTWVudVxuICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgZ2V0VXBkYXRlZEVsZW1lbnRzID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBib2FyZFRleHRCb3ggPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRCb2FyZGVyVGV4dEJveFwiKSlcbiAgICAgICAgbGV0IGJvYXJkZXJCdXR0b24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRCb2FyZGVyQnV0dG9uXCIpKVxuICAgICAgICBsZXQgZWRpdEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdFByb2plY3RcIikpO1xuICAgICAgICBsZXQgZGVsZXRlSXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGVJdGVtXCIpKTtcbiAgICAgICAgbGV0IHByb2plY3RDb250YWluZXJUZXh0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdENvbnRhaW5lclRleHRcIikpO1xuICAgICAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RDb250YWluZXJcIikpXG4gICAgICAgIGxldCBhZGRQcm9qZWN0TGFiZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkUHJvamVjdExhYmVsXCIpKTtcbiAgICAgICAgbGV0IHByb2plY3RCdXR0b24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0QnV0dG9uXCIpKTtcblxuICAgICAgICBsZXQgcHJvamVjdFRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUYXNrSG9sZGVyXCIpO1xuXG5cbiAgICAgICAgbGV0IHByb2plY3RUYXNrSG9sZGVyQ2hpbGRyZW4gPSBBcnJheS5mcm9tKHByb2plY3RUYXNrSG9sZGVyLmNoaWxkcmVuKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZUNvbnRlbnRcIik7XG4gICAgICAgIGxldCBwYWdlQ29udGVudENoaWxkcmVuID0gQXJyYXkuZnJvbShwYWdlQ29udGVudC5jaGlsZHJlbik7XG5cbiAgICAgICAgbGV0IGNoYW5nZUJvYXJkVGl0bGVCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhbmdlQm9hcmRUaXRsZUJ1dHRvblwiKSk7XG5cbiAgICAgICAgbGV0IGRlbGV0ZUJvYXJkID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlQm9hcmRcIikpO1xuICAgICAgICBsZXQgZWRpdEJvYXJkICA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVkaXRCb2FyZFwiKSk7XG4gICAgICAgIGxldCB0YXNrSG9sZGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2tIb2xkZXJcIikpO1xuICAgICAgICBsZXQgdGFza0xpc3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFza0xpc3RzXCIpKTtcbiAgICAgICAgbGV0IGJvYXJkQ29udGVudFRleHRCb3ggPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJib2FyZHRleHRCb3hcIikpO1xuICAgICAgICBsZXQgYm9hcmRPdmVybGF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYm9hcmRPdmVybGF5XCIpKVxuICAgICAgICBsZXQgdGFza0FkZGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2tBZGRlclwiKSlcbiBcbiAgICAgICAgbGV0IGV4YW1wbGVCb2FyZFRleHQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJleGFtcGxlQm9hcmRUZXh0XCIpKVxuICAgICAgICBsZXQgYnV0dG9uID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnV0dG9uXCIpKTtcblxuICAgICAgICBsZXQgdHJhc2hJdCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRyYXNoSXRcIikpO1xuICAgICAgICBsZXQgZmluaXNoZWQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmaW5pc2hlZFwiKSk7XG5cbiAgICAgICAgbGV0IHRhc2tUZXh0Qm94ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFza1RleHRCb3hcIikpO1xuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRhdGVQaWNrZXJcIikpO1xuXG4gICAgICAgIGxldCBjaXJjbGVJY29uID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2lyY2xlSWNvblwiKSk7XG4gICAgICAgIGxldCBlZGl0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdFwiKSlcbiAgICAgICAgbGV0IGRhdGVUb29scyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRhdGVUb29sXCIpKVxuXG4gICAgICAgIGxldCBleGl0RWRpdG9yID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXhpdEVkaXRvclwiKSk7XG5cblxuXG4gICAgICAgIHJldHVybiB7ZWRpdEl0ZW1zLCBkZWxldGVJdGVtcywgYWRkUHJvamVjdExhYmVscywgcHJvamVjdEJ1dHRvbixcbiAgICAgICAgICAgIHByb2plY3RUYXNrSG9sZGVyQ2hpbGRyZW4sIHByb2plY3RDb250YWluZXJUZXh0LCBib2FyZFRleHRCb3gsIGJvYXJkZXJCdXR0b24sIFxuICAgICAgICAgICAgZGVsZXRlQm9hcmQsIGVkaXRCb2FyZCwgcGFnZUNvbnRlbnQsIHBhZ2VDb250ZW50Q2hpbGRyZW4sIHRhc2tIb2xkZXJzLCBleGFtcGxlQm9hcmRUZXh0LFxuICAgICAgICAgICAgY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbnMsIGJvYXJkQ29udGVudFRleHRCb3gsIGJvYXJkT3ZlcmxheSwgdGFza0xpc3RzLCB0YXNrQWRkZXJzLCBidXR0b24sXG4gICAgICAgICAgICB0cmFzaEl0LCBmaW5pc2hlZCwgdGFza1RleHRCb3gsIGRhdGVQaWNrZXIsIGNpcmNsZUljb24sIGVkaXQsIGRhdGVUb29scywgZXhpdEVkaXRvciwgcHJvamVjdENvbnRhaW5lclxuICAgICAgICB9O1xuICAgIFxuICAgIH1cbiAgICBcblxuIFxuZXhwb3J0ICB7Z2V0SW5pdGlhbEVsZW1lbnRzLCBjcmVhdGVEb21FbGVtZW50cywgZ2V0VXBkYXRlZEVsZW1lbnRzfVxuICAgIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9