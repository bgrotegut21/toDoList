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
        let boardContentTextBox = Array.from(document.getElementsByClassName("boardtextBox"));

        let exampleBoardText = Array.from(document.getElementsByClassName("exampleBoardText"))

        return {editItems, deleteItems, addProjectLabels, projectButton,
            projectTaskHolderChildren, projectContainerText, boardTextBox, boarderButton, 
            deleteBoard, editBoard, pageContent, pageContentChildren, taskHolders, exampleBoardText,
            changeBoardTitleButtons, boardContentTextBox
        };
    
    }
    



    

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsMkRBQTJEOztBQUUzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdtRTtBQUNuRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9wYWdlTGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5cblxuLy9jcmVhdGVpbmcgbmV3IGVsbWVudCBpbnZvbHZlcyB1c2luZyBhIHRlbXBsYXRlIHdoaWNoIGlzIHtlbGVtZW50OlwiXCIsICBjbGFzc05hbWU6IFwiXCIsIHNvdXJjZTpcIlwiLHR5cGU6XCJcIn07XG5cbmNvbnN0IGNyZWF0ZURvbUVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIGxldCBwYWdlVGV4dCA9IGAgICAgPGRpdiBjbGFzcyA9IFwiY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3MgPSBcIndob2xlT3ZlcmxheVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3MgPSBcImVycm9yTWVzc2FnZVwiPlxuICAgIDxkaXYgY2xhc3MgPSBcIm1lc3NhZ2VIb2xkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29udGVudEhvbGRlclwiPlxuICAgICAgICAgICAgPGgyPkVycm9yPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzID0gXCJlcnJvck1lc3NhZ2VUZXh0XCI+VGV4dCBDYW5ub3QgYmUgb3ZlciAxMCBjaHJhY3RlcnM8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJleGl0QnV0dG9uXCI+RXhpdDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG4gICAgPGRpdiBjbGFzcyA9IFwibW9iaWxlTWVudVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJoYW1idXJnZXJNZW51XCI+PC9idXR0b24+XG4gICAgICAgIDxoMiBjbGFzcyA9IFwibW9iaWxlTWVudVRpdGxlXCI+VG8gRG8gTGlzdDwvaDI+XG5cbiAgICA8L2Rpdj4gXG4gICAgPGRpdiBjbGFzcyA9IFwic2VjdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwib3ZlcmxheVwiPmN1cnJlbnQgb3ZlcmxheTwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzID0gXCJleGl0XCI+WDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJlbGVtZW50c1wiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3MgPSBcImxpc3RUaXRsZVwiID5UbyBEbyBMaXN0PC9oMT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInVwQ29taW5nQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlVwY29taW5nPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0QWRkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJwcm9qZWN0VGV4dFwiPlByb2plY3Q8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcInBsdXNTaWduXCI+KzwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdFRhc2tIb2xkZXJcIj48L2Rpdj4gXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJwYWdlQ29udGVudFwiPiA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YFxuXG4gICAgYm9keS5pbm5lckhUTUwgPSBwYWdlVGV4dDtcblxufVxuXG5cblxuXG5jb25zdCBnZXRJbml0aWFsRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25zXCIpO1xuICAgIGxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpO1xuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgIGxldCBleGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leGl0XCIpO1xuICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNcIik7XG4gICAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFRpdGxlXCIpO1xuICAgIGxldCB1cENvbWluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBDb21pbmdCdXR0b25cIik7XG4gICAgbGV0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEFkZGVyXCIpO1xuICAgIGxldCBwcm9qZWN0VGV4dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUZXh0XCIpO1xuICAgIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1c1NpZ25cIik7XG4gICAgbGV0IHByb2plY3RUYXNrSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGFza0hvbGRlclwiKTtcbiAgICBsZXQgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRQcm9qZWN0QnV0dG9uXCIpO1xuICAgIGxldCBlZGl0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFRleHRcIik7XG4gICAgbGV0IGFkZFByb2plY3RMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdExhYmVsXCIpO1xuICAgIGxldCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZUNvbnRlbnRcIik7XG4gICAgbGV0IHdob2xlT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvbGVPdmVybGF5XCIpXG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JNZXNzYWdlXCIpXG4gICAgbGV0IGVycm9yTWVzc2FnZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yTWVzc2FnZVRleHRcIik7XG4gICAgbGV0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4aXRCdXR0b25cIik7XG5cbiAgICByZXR1cm4ge3NlY3Rpb24sIG5hdmlnYXRpb24sIG92ZXJsYXksIGV4aXQsIGVsZW1lbnRzLFxuICAgICAgICAgICAgbGlzdFRpdGxlLCB1cENvbWluZ0J1dHRvbiwgcHJvamVjdEFkZGVyLCBwcm9qZWN0VGV4dCxcbiAgICAgICAgICAgIHBsdXNTaWduLCBwcm9qZWN0VGFza0hvbGRlciwgZWRpdFByb2plY3RCdXR0b24sIGVkaXRUZXh0LFxuICAgICAgICAgICAgYWRkUHJvamVjdExhYmVsLHBhZ2VDb250ZW50LCB3aG9sZU92ZXJsYXksIGV4aXRCdXR0b24sIGVycm9yTWVzc2FnZSwgZXJyb3JNZXNzYWdlVGV4dH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGdldFVwZGF0ZWRFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkVGV4dEJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZEJvYXJkZXJUZXh0Qm94XCIpKVxuICAgICAgICBsZXQgYm9hcmRlckJ1dHRvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZEJvYXJkZXJCdXR0b25cIikpXG4gICAgICAgIGxldCBlZGl0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlZGl0UHJvamVjdFwiKSk7XG4gICAgICAgIGxldCBkZWxldGVJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZUl0ZW1cIikpO1xuICAgICAgICBsZXQgcHJvamVjdENvbnRhaW5lclRleHQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0Q29udGFpbmVyVGV4dFwiKSk7XG4gICAgICAgIGxldCBhZGRQcm9qZWN0TGFiZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkUHJvamVjdExhYmVsXCIpKTtcbiAgICAgICAgbGV0IHByb2plY3RCdXR0b24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0QnV0dG9uXCIpKTtcblxuICAgICAgICBsZXQgcHJvamVjdFRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUYXNrSG9sZGVyXCIpO1xuICAgICAgICBsZXQgcHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbiA9IEFycmF5LmZyb20ocHJvamVjdFRhc2tIb2xkZXIuY2hpbGRyZW4pO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlQ29udGVudFwiKTtcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50Q2hpbGRyZW4gPSBBcnJheS5mcm9tKHBhZ2VDb250ZW50LmNoaWxkcmVuKTtcblxuICAgICAgICBsZXQgY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9uXCIpKTtcblxuICAgICAgICBsZXQgZGVsZXRlQm9hcmQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGVCb2FyZFwiKSk7XG4gICAgICAgIGxldCBlZGl0Qm9hcmQgID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdEJvYXJkXCIpKTtcbiAgICAgICAgbGV0IHRhc2tIb2xkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFza0hvbGRlclwiKSk7XG4gICAgICAgIGxldCBib2FyZENvbnRlbnRUZXh0Qm94ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYm9hcmR0ZXh0Qm94XCIpKTtcblxuICAgICAgICBsZXQgZXhhbXBsZUJvYXJkVGV4dCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImV4YW1wbGVCb2FyZFRleHRcIikpXG5cbiAgICAgICAgcmV0dXJuIHtlZGl0SXRlbXMsIGRlbGV0ZUl0ZW1zLCBhZGRQcm9qZWN0TGFiZWxzLCBwcm9qZWN0QnV0dG9uLFxuICAgICAgICAgICAgcHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbiwgcHJvamVjdENvbnRhaW5lclRleHQsIGJvYXJkVGV4dEJveCwgYm9hcmRlckJ1dHRvbiwgXG4gICAgICAgICAgICBkZWxldGVCb2FyZCwgZWRpdEJvYXJkLCBwYWdlQ29udGVudCwgcGFnZUNvbnRlbnRDaGlsZHJlbiwgdGFza0hvbGRlcnMsIGV4YW1wbGVCb2FyZFRleHQsXG4gICAgICAgICAgICBjaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucywgYm9hcmRDb250ZW50VGV4dEJveFxuICAgICAgICB9O1xuICAgIFxuICAgIH1cbiAgICBcblxuXG5leHBvcnQgIHtnZXRJbml0aWFsRWxlbWVudHMsIGNyZWF0ZURvbUVsZW1lbnRzLCBnZXRVcGRhdGVkRWxlbWVudHN9XG4gICAgXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=