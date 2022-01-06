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


    </div>`;

  body.innerHTML = pageText;
};

const getInitialElements = () => {
  let section = document.querySelector('.sections');
  let navigation = document.querySelector('.navigation');
  let overlay = document.querySelector('.overlay');
  let exit = document.querySelector('.exit');
  let elements = document.querySelector('.elements');
  let listTitle = document.querySelector('.listTitle');
  let upComingButton = document.querySelector('.upComingButton');
  let projectAdder = document.querySelector('.projectAdder');
  let projectText = document.querySelector('.projectText');
  let plusSign = document.querySelector('.plusSign');
  let projectTaskHolder = document.querySelector('.projectTaskHolder');
  let editProjectButton = document.querySelector('.editProjectButton');
  let editText = document.querySelector('.editText');
  let addProjectLabel = document.querySelector('.addProjectLabel');
  let pageContent = document.querySelector('.pageContent');
  let wholeOverlay = document.querySelector('.wholeOverlay');
  let errorMessage = document.querySelector('.errorMessage');
  let errorMessageText = document.querySelector('.errorMessageText');
  let exitButton = document.querySelector('.exitButton');

  let hamburgerMenu = document.querySelector('.hamburgerMenu');
  let mobileMenu = document.querySelector('.mobileMenu');

  return {
    section,
    navigation,
    overlay,
    exit,
    elements,
    listTitle,
    upComingButton,
    projectAdder,
    projectText,
    plusSign,
    projectTaskHolder,
    editProjectButton,
    editText,
    addProjectLabel,
    pageContent,
    wholeOverlay,
    exitButton,
    errorMessage,
    errorMessageText,
    hamburgerMenu,
    mobileMenu,
  };
};

const getUpdatedElements = () => {
  let boardTextBox = Array.from(
    document.getElementsByClassName('addBoarderTextBox')
  );
  let boarderButton = Array.from(
    document.getElementsByClassName('addBoarderButton')
  );
  let editItems = Array.from(document.getElementsByClassName('editProject'));
  let deleteItems = Array.from(document.getElementsByClassName('deleteItem'));
  let projectContainerText = Array.from(
    document.getElementsByClassName('projectContainerText')
  );
  let projectContainer = Array.from(
    document.getElementsByClassName('projectContainer')
  );
  let addProjectLabels = Array.from(
    document.getElementsByClassName('addProjectLabel')
  );
  let projectButton = Array.from(
    document.getElementsByClassName('projectButton')
  );

  let projectTaskHolder = document.querySelector('.projectTaskHolder');

  let projectTaskHolderChildren = Array.from(projectTaskHolder.children);

  let pageContent = document.querySelector('.pageContent');
  let pageContentChildren = Array.from(pageContent.children);

  let changeBoardTitleButtons = Array.from(
    document.getElementsByClassName('changeBoardTitleButton')
  );

  let deleteBoard = Array.from(document.getElementsByClassName('deleteBoard'));
  let editBoard = Array.from(document.getElementsByClassName('editBoard'));
  let taskHolders = Array.from(document.getElementsByClassName('taskHolder'));
  let taskLists = Array.from(document.getElementsByClassName('taskLists'));
  let boardContentTextBox = Array.from(
    document.getElementsByClassName('boardtextBox')
  );
  let boardOverlay = Array.from(
    document.getElementsByClassName('boardOverlay')
  );
  let taskAdders = Array.from(document.getElementsByClassName('taskAdder'));

  let exampleBoardText = Array.from(
    document.getElementsByClassName('exampleBoardText')
  );
  let button = Array.from(document.getElementsByClassName('button'));

  let trashIt = Array.from(document.getElementsByClassName('trashIt'));
  let finished = Array.from(document.getElementsByClassName('finished'));

  let taskTextBox = Array.from(document.getElementsByClassName('taskTextBox'));
  let datePicker = Array.from(document.getElementsByClassName('datePicker'));

  let circleIcon = Array.from(document.getElementsByClassName('circleIcon'));
  let edit = Array.from(document.getElementsByClassName('edit'));
  let dateTools = Array.from(document.getElementsByClassName('dateTool'));

  let exitEditor = Array.from(document.getElementsByClassName('exitEditor'));

  return {
    editItems,
    deleteItems,
    addProjectLabels,
    projectButton,
    projectTaskHolderChildren,
    projectContainerText,
    boardTextBox,
    boarderButton,
    deleteBoard,
    editBoard,
    pageContent,
    pageContentChildren,
    taskHolders,
    exampleBoardText,
    changeBoardTitleButtons,
    boardContentTextBox,
    boardOverlay,
    taskLists,
    taskAdders,
    button,
    trashIt,
    finished,
    taskTextBox,
    datePicker,
    circleIcon,
    edit,
    dateTools,
    exitEditor,
    projectContainer,
  };
};



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3BhZ2VMYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjcmVhdGVEb21FbGVtZW50cyA9ICgpID0+IHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gIGxldCBwYWdlVGV4dCA9IGAgICAgPGRpdiBjbGFzcyA9IFwiY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3MgPSBcIndob2xlT3ZlcmxheVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3MgPSBcImVycm9yTWVzc2FnZVwiPlxuICAgIDxkaXYgY2xhc3MgPSBcIm1lc3NhZ2VIb2xkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29udGVudEhvbGRlclwiPlxuICAgICAgICAgICAgPGgyPkVycm9yPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzID0gXCJlcnJvck1lc3NhZ2VUZXh0XCI+VGV4dCBDYW5ub3QgYmUgb3ZlciAxMCBjaHJhY3RlcnM8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJleGl0QnV0dG9uXCI+RXhpdDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG4gICAgPGRpdiBjbGFzcyA9IFwibW9iaWxlTWVudVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJoYW1idXJnZXJNZW51XCI+PC9idXR0b24+XG4gICAgICAgIDxoMiBjbGFzcyA9IFwibW9iaWxlTWVudVRpdGxlXCI+VG8gRG8gTGlzdDwvaDI+XG5cbiAgICA8L2Rpdj4gXG4gICAgPGRpdiBjbGFzcyA9IFwic2VjdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwib3ZlcmxheVwiPmN1cnJlbnQgb3ZlcmxheTwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzID0gXCJleGl0XCI+WDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJlbGVtZW50c1wiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3MgPSBcImxpc3RUaXRsZVwiID5UbyBEbyBMaXN0PC9oMT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInVwQ29taW5nQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlVwY29taW5nPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0QWRkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJwcm9qZWN0VGV4dFwiPlByb2plY3Q8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcInBsdXNTaWduXCI+KzwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdFRhc2tIb2xkZXJcIj48L2Rpdj5cblxuXG5cblxuIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJwYWdlQ29udGVudFwiPiA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PmA7XG5cbiAgYm9keS5pbm5lckhUTUwgPSBwYWdlVGV4dDtcbn07XG5cbmNvbnN0IGdldEluaXRpYWxFbGVtZW50cyA9ICgpID0+IHtcbiAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbnMnKTtcbiAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpO1xuICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gIGxldCBleGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQnKTtcbiAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzJyk7XG4gIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdFRpdGxlJyk7XG4gIGxldCB1cENvbWluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cENvbWluZ0J1dHRvbicpO1xuICBsZXQgcHJvamVjdEFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RBZGRlcicpO1xuICBsZXQgcHJvamVjdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRleHQnKTtcbiAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXNTaWduJyk7XG4gIGxldCBwcm9qZWN0VGFza0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGFza0hvbGRlcicpO1xuICBsZXQgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RCdXR0b24nKTtcbiAgbGV0IGVkaXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUZXh0Jyk7XG4gIGxldCBhZGRQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdExhYmVsJyk7XG4gIGxldCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGVudCcpO1xuICBsZXQgd2hvbGVPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndob2xlT3ZlcmxheScpO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yTWVzc2FnZScpO1xuICBsZXQgZXJyb3JNZXNzYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1lc3NhZ2VUZXh0Jyk7XG4gIGxldCBleGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXRCdXR0b24nKTtcblxuICBsZXQgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJNZW51Jyk7XG4gIGxldCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZU1lbnUnKTtcblxuICByZXR1cm4ge1xuICAgIHNlY3Rpb24sXG4gICAgbmF2aWdhdGlvbixcbiAgICBvdmVybGF5LFxuICAgIGV4aXQsXG4gICAgZWxlbWVudHMsXG4gICAgbGlzdFRpdGxlLFxuICAgIHVwQ29taW5nQnV0dG9uLFxuICAgIHByb2plY3RBZGRlcixcbiAgICBwcm9qZWN0VGV4dCxcbiAgICBwbHVzU2lnbixcbiAgICBwcm9qZWN0VGFza0hvbGRlcixcbiAgICBlZGl0UHJvamVjdEJ1dHRvbixcbiAgICBlZGl0VGV4dCxcbiAgICBhZGRQcm9qZWN0TGFiZWwsXG4gICAgcGFnZUNvbnRlbnQsXG4gICAgd2hvbGVPdmVybGF5LFxuICAgIGV4aXRCdXR0b24sXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIGVycm9yTWVzc2FnZVRleHQsXG4gICAgaGFtYnVyZ2VyTWVudSxcbiAgICBtb2JpbGVNZW51LFxuICB9O1xufTtcblxuY29uc3QgZ2V0VXBkYXRlZEVsZW1lbnRzID0gKCkgPT4ge1xuICBsZXQgYm9hcmRUZXh0Qm94ID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGRCb2FyZGVyVGV4dEJveCcpXG4gICk7XG4gIGxldCBib2FyZGVyQnV0dG9uID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGRCb2FyZGVyQnV0dG9uJylcbiAgKTtcbiAgbGV0IGVkaXRJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdFByb2plY3QnKSk7XG4gIGxldCBkZWxldGVJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlSXRlbScpKTtcbiAgbGV0IHByb2plY3RDb250YWluZXJUZXh0ID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0Q29udGFpbmVyVGV4dCcpXG4gICk7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0Q29udGFpbmVyJylcbiAgKTtcbiAgbGV0IGFkZFByb2plY3RMYWJlbHMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkZFByb2plY3RMYWJlbCcpXG4gICk7XG4gIGxldCBwcm9qZWN0QnV0dG9uID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0QnV0dG9uJylcbiAgKTtcblxuICBsZXQgcHJvamVjdFRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRhc2tIb2xkZXInKTtcblxuICBsZXQgcHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbiA9IEFycmF5LmZyb20ocHJvamVjdFRhc2tIb2xkZXIuY2hpbGRyZW4pO1xuXG4gIGxldCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGVudCcpO1xuICBsZXQgcGFnZUNvbnRlbnRDaGlsZHJlbiA9IEFycmF5LmZyb20ocGFnZUNvbnRlbnQuY2hpbGRyZW4pO1xuXG4gIGxldCBjaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucyA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbicpXG4gICk7XG5cbiAgbGV0IGRlbGV0ZUJvYXJkID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGVCb2FyZCcpKTtcbiAgbGV0IGVkaXRCb2FyZCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdEJvYXJkJykpO1xuICBsZXQgdGFza0hvbGRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2tIb2xkZXInKSk7XG4gIGxldCB0YXNrTGlzdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2tMaXN0cycpKTtcbiAgbGV0IGJvYXJkQ29udGVudFRleHRCb3ggPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkdGV4dEJveCcpXG4gICk7XG4gIGxldCBib2FyZE92ZXJsYXkgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkT3ZlcmxheScpXG4gICk7XG4gIGxldCB0YXNrQWRkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrQWRkZXInKSk7XG5cbiAgbGV0IGV4YW1wbGVCb2FyZFRleHQgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2V4YW1wbGVCb2FyZFRleHQnKVxuICApO1xuICBsZXQgYnV0dG9uID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b24nKSk7XG5cbiAgbGV0IHRyYXNoSXQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RyYXNoSXQnKSk7XG4gIGxldCBmaW5pc2hlZCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmluaXNoZWQnKSk7XG5cbiAgbGV0IHRhc2tUZXh0Qm94ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrVGV4dEJveCcpKTtcbiAgbGV0IGRhdGVQaWNrZXIgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGVQaWNrZXInKSk7XG5cbiAgbGV0IGNpcmNsZUljb24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NpcmNsZUljb24nKSk7XG4gIGxldCBlZGl0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0JykpO1xuICBsZXQgZGF0ZVRvb2xzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlVG9vbCcpKTtcblxuICBsZXQgZXhpdEVkaXRvciA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXhpdEVkaXRvcicpKTtcblxuICByZXR1cm4ge1xuICAgIGVkaXRJdGVtcyxcbiAgICBkZWxldGVJdGVtcyxcbiAgICBhZGRQcm9qZWN0TGFiZWxzLFxuICAgIHByb2plY3RCdXR0b24sXG4gICAgcHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbixcbiAgICBwcm9qZWN0Q29udGFpbmVyVGV4dCxcbiAgICBib2FyZFRleHRCb3gsXG4gICAgYm9hcmRlckJ1dHRvbixcbiAgICBkZWxldGVCb2FyZCxcbiAgICBlZGl0Qm9hcmQsXG4gICAgcGFnZUNvbnRlbnQsXG4gICAgcGFnZUNvbnRlbnRDaGlsZHJlbixcbiAgICB0YXNrSG9sZGVycyxcbiAgICBleGFtcGxlQm9hcmRUZXh0LFxuICAgIGNoYW5nZUJvYXJkVGl0bGVCdXR0b25zLFxuICAgIGJvYXJkQ29udGVudFRleHRCb3gsXG4gICAgYm9hcmRPdmVybGF5LFxuICAgIHRhc2tMaXN0cyxcbiAgICB0YXNrQWRkZXJzLFxuICAgIGJ1dHRvbixcbiAgICB0cmFzaEl0LFxuICAgIGZpbmlzaGVkLFxuICAgIHRhc2tUZXh0Qm94LFxuICAgIGRhdGVQaWNrZXIsXG4gICAgY2lyY2xlSWNvbixcbiAgICBlZGl0LFxuICAgIGRhdGVUb29scyxcbiAgICBleGl0RWRpdG9yLFxuICAgIHByb2plY3RDb250YWluZXIsXG4gIH07XG59O1xuXG5leHBvcnQgeyBnZXRJbml0aWFsRWxlbWVudHMsIGNyZWF0ZURvbUVsZW1lbnRzLCBnZXRVcGRhdGVkRWxlbWVudHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==