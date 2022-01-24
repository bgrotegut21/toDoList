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
var createDomElements = function createDomElements() {
  var body = document.body;
  var pageText = "    <div class = \"content\">\n    <div class = \"wholeOverlay\"></div>\n    <div class = \"errorMessage\">\n    <div class = \"messageHolder\">\n        <div class = \"contentHolder\">\n            <h2>Error</h2>\n            <p class = \"errorMessageText\">Text Cannot be over 10 chracters</p>\n            <button class = \"exitButton\">Exit</button>\n\n        </div>\n\n\n    </div>\n\n</div>\n    <div class = \"mobileMenu\">\n        <button class = \"hamburgerMenu\"></button>\n        <h2 class = \"mobileMenuTitle\">To Do List</h2>\n\n    </div> \n    <div class = \"sections\">\n        <div class = \"navigation\">\n            <div class = \"overlay\">current overlay</div>\n            <h1 class = \"exit\">X</h1>\n            <div class = \"elements\">\n        \n                <h1 class = \"listTitle\" >To Do List</h1>\n\n                <div class = \"upComingButton\">\n                    <p>Upcoming</p>\n                </div>\n\n\n                <div class = \"projectAdder\">\n                    <h2 class = \"projectText\">Project</h2>\n                    <h2 class = \"plusSign\">+</h2>\n                </div>\n                \n                <div class = \"projectTaskHolder\"></div>\n\n\n\n\n \n\n            </div>\n\n\n\n\n\n        </div>\n        <div class = \"pageContent\"> </div>\n        </div>\n\n\n    </div>";
  body.innerHTML = pageText;
};

var getInitialElements = function getInitialElements() {
  var section = document.querySelector('.sections');
  var navigation = document.querySelector('.navigation');
  var overlay = document.querySelector('.overlay');
  var exit = document.querySelector('.exit');
  var elements = document.querySelector('.elements');
  var listTitle = document.querySelector('.listTitle');
  var upComingButton = document.querySelector('.upComingButton');
  var projectAdder = document.querySelector('.projectAdder');
  var projectText = document.querySelector('.projectText');
  var plusSign = document.querySelector('.plusSign');
  var projectTaskHolder = document.querySelector('.projectTaskHolder');
  var editProjectButton = document.querySelector('.editProjectButton');
  var editText = document.querySelector('.editText');
  var addProjectLabel = document.querySelector('.addProjectLabel');
  var pageContent = document.querySelector('.pageContent');
  var wholeOverlay = document.querySelector('.wholeOverlay');
  var errorMessage = document.querySelector('.errorMessage');
  var errorMessageText = document.querySelector('.errorMessageText');
  var exitButton = document.querySelector('.exitButton');
  var hamburgerMenu = document.querySelector('.hamburgerMenu');
  var mobileMenu = document.querySelector('.mobileMenu');
  return {
    section: section,
    navigation: navigation,
    overlay: overlay,
    exit: exit,
    elements: elements,
    listTitle: listTitle,
    upComingButton: upComingButton,
    projectAdder: projectAdder,
    projectText: projectText,
    plusSign: plusSign,
    projectTaskHolder: projectTaskHolder,
    editProjectButton: editProjectButton,
    editText: editText,
    addProjectLabel: addProjectLabel,
    pageContent: pageContent,
    wholeOverlay: wholeOverlay,
    exitButton: exitButton,
    errorMessage: errorMessage,
    errorMessageText: errorMessageText,
    hamburgerMenu: hamburgerMenu,
    mobileMenu: mobileMenu
  };
};

var getUpdatedElements = function getUpdatedElements() {
  var boardTextBox = Array.from(document.getElementsByClassName('addBoarderTextBox'));
  var boarderButton = Array.from(document.getElementsByClassName('addBoarderButton'));
  var editItems = Array.from(document.getElementsByClassName('editProject'));
  var deleteItems = Array.from(document.getElementsByClassName('deleteItem'));
  var projectContainerText = Array.from(document.getElementsByClassName('projectContainerText'));
  var projectContainer = Array.from(document.getElementsByClassName('projectContainer'));
  var addProjectLabels = Array.from(document.getElementsByClassName('addProjectLabel'));
  var projectButton = Array.from(document.getElementsByClassName('projectButton'));
  var projectTaskHolder = document.querySelector('.projectTaskHolder');
  var projectTaskHolderChildren = Array.from(projectTaskHolder.children);
  var pageContent = document.querySelector('.pageContent');
  var pageContentChildren = Array.from(pageContent.children);
  var changeBoardTitleButtons = Array.from(document.getElementsByClassName('changeBoardTitleButton'));
  var deleteBoard = Array.from(document.getElementsByClassName('deleteBoard'));
  var editBoard = Array.from(document.getElementsByClassName('editBoard'));
  var taskHolders = Array.from(document.getElementsByClassName('taskHolder'));
  var taskLists = Array.from(document.getElementsByClassName('taskLists'));
  var boardContentTextBox = Array.from(document.getElementsByClassName('boardtextBox'));
  var boardOverlay = Array.from(document.getElementsByClassName('boardOverlay'));
  var taskAdders = Array.from(document.getElementsByClassName('taskAdder'));
  var exampleBoardText = Array.from(document.getElementsByClassName('exampleBoardText'));
  var button = Array.from(document.getElementsByClassName('button'));
  var trashIt = Array.from(document.getElementsByClassName('trashIt'));
  var finished = Array.from(document.getElementsByClassName('finished'));
  var taskTextBox = Array.from(document.getElementsByClassName('taskTextBox'));
  var datePicker = Array.from(document.getElementsByClassName('datePicker'));
  var circleIcon = Array.from(document.getElementsByClassName('circleIcon'));
  var edit = Array.from(document.getElementsByClassName('edit'));
  var dateTools = Array.from(document.getElementsByClassName('dateTool'));
  var exitEditor = Array.from(document.getElementsByClassName('exitEditor'));
  return {
    editItems: editItems,
    deleteItems: deleteItems,
    addProjectLabels: addProjectLabels,
    projectButton: projectButton,
    projectTaskHolderChildren: projectTaskHolderChildren,
    projectContainerText: projectContainerText,
    boardTextBox: boardTextBox,
    boarderButton: boarderButton,
    deleteBoard: deleteBoard,
    editBoard: editBoard,
    pageContent: pageContent,
    pageContentChildren: pageContentChildren,
    taskHolders: taskHolders,
    exampleBoardText: exampleBoardText,
    changeBoardTitleButtons: changeBoardTitleButtons,
    boardContentTextBox: boardContentTextBox,
    boardOverlay: boardOverlay,
    taskLists: taskLists,
    taskAdders: taskAdders,
    button: button,
    trashIt: trashIt,
    finished: finished,
    taskTextBox: taskTextBox,
    datePicker: datePicker,
    circleIcon: circleIcon,
    edit: edit,
    dateTools: dateTools,
    exitEditor: exitEditor,
    projectContainer: projectContainer
  };
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWxCSztBQW1CTEcsSUFBQUEsVUFBVSxFQUFWQSxVQW5CSztBQW9CTEUsSUFBQUEsTUFBTSxFQUFOQSxNQXBCSztBQXFCTEMsSUFBQUEsT0FBTyxFQUFQQSxPQXJCSztBQXNCTEMsSUFBQUEsUUFBUSxFQUFSQSxRQXRCSztBQXVCTEMsSUFBQUEsV0FBVyxFQUFYQSxXQXZCSztBQXdCTEMsSUFBQUEsVUFBVSxFQUFWQSxVQXhCSztBQXlCTEMsSUFBQUEsVUFBVSxFQUFWQSxVQXpCSztBQTBCTEMsSUFBQUEsSUFBSSxFQUFKQSxJQTFCSztBQTJCTEMsSUFBQUEsU0FBUyxFQUFUQSxTQTNCSztBQTRCTEMsSUFBQUEsVUFBVSxFQUFWQSxVQTVCSztBQTZCTHZCLElBQUFBLGdCQUFnQixFQUFoQkE7QUE3QkssR0FBUDtBQStCRCxDQTdGRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9wYWdlTGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY3JlYXRlRG9tRWxlbWVudHMgPSAoKSA9PiB7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBsZXQgcGFnZVRleHQgPSBgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzID0gXCJ3aG9sZU92ZXJsYXlcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJlcnJvck1lc3NhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzID0gXCJtZXNzYWdlSG9sZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRlbnRIb2xkZXJcIj5cbiAgICAgICAgICAgIDxoMj5FcnJvcjwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzcyA9IFwiZXJyb3JNZXNzYWdlVGV4dFwiPlRleHQgQ2Fubm90IGJlIG92ZXIgMTAgY2hyYWN0ZXJzPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiZXhpdEJ1dHRvblwiPkV4aXQ8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuICAgIDxkaXYgY2xhc3MgPSBcIm1vYmlsZU1lbnVcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiaGFtYnVyZ2VyTWVudVwiPjwvYnV0dG9uPlxuICAgICAgICA8aDIgY2xhc3MgPSBcIm1vYmlsZU1lbnVUaXRsZVwiPlRvIERvIExpc3Q8L2gyPlxuXG4gICAgPC9kaXY+IFxuICAgIDxkaXYgY2xhc3MgPSBcInNlY3Rpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcIm5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm92ZXJsYXlcIj5jdXJyZW50IG92ZXJsYXk8L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzcyA9IFwiZXhpdFwiPlg8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZWxlbWVudHNcIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzID0gXCJsaXN0VGl0bGVcIiA+VG8gRG8gTGlzdDwvaDE+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ1cENvbWluZ0J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5VcGNvbWluZzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdEFkZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwicHJvamVjdFRleHRcIj5Qcm9qZWN0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJwbHVzU2lnblwiPis8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3RUYXNrSG9sZGVyXCI+PC9kaXY+XG5cblxuXG5cbiBcblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicGFnZUNvbnRlbnRcIj4gPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5gO1xuXG4gIGJvZHkuaW5uZXJIVE1MID0gcGFnZVRleHQ7XG59O1xuXG5jb25zdCBnZXRJbml0aWFsRWxlbWVudHMgPSAoKSA9PiB7XG4gIGxldCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25zJyk7XG4gIGxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKTtcbiAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICBsZXQgZXhpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0Jyk7XG4gIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50cycpO1xuICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RUaXRsZScpO1xuICBsZXQgdXBDb21pbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBDb21pbmdCdXR0b24nKTtcbiAgbGV0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0QWRkZXInKTtcbiAgbGV0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUZXh0Jyk7XG4gIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzU2lnbicpO1xuICBsZXQgcHJvamVjdFRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRhc2tIb2xkZXInKTtcbiAgbGV0IGVkaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0QnV0dG9uJyk7XG4gIGxldCBlZGl0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0VGV4dCcpO1xuICBsZXQgYWRkUHJvamVjdExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RMYWJlbCcpO1xuICBsZXQgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZUNvbnRlbnQnKTtcbiAgbGV0IHdob2xlT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aG9sZU92ZXJsYXknKTtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1lc3NhZ2UnKTtcbiAgbGV0IGVycm9yTWVzc2FnZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JNZXNzYWdlVGV4dCcpO1xuICBsZXQgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0QnV0dG9uJyk7XG5cbiAgbGV0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyTWVudScpO1xuICBsZXQgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGVNZW51Jyk7XG5cbiAgcmV0dXJuIHtcbiAgICBzZWN0aW9uLFxuICAgIG5hdmlnYXRpb24sXG4gICAgb3ZlcmxheSxcbiAgICBleGl0LFxuICAgIGVsZW1lbnRzLFxuICAgIGxpc3RUaXRsZSxcbiAgICB1cENvbWluZ0J1dHRvbixcbiAgICBwcm9qZWN0QWRkZXIsXG4gICAgcHJvamVjdFRleHQsXG4gICAgcGx1c1NpZ24sXG4gICAgcHJvamVjdFRhc2tIb2xkZXIsXG4gICAgZWRpdFByb2plY3RCdXR0b24sXG4gICAgZWRpdFRleHQsXG4gICAgYWRkUHJvamVjdExhYmVsLFxuICAgIHBhZ2VDb250ZW50LFxuICAgIHdob2xlT3ZlcmxheSxcbiAgICBleGl0QnV0dG9uLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBlcnJvck1lc3NhZ2VUZXh0LFxuICAgIGhhbWJ1cmdlck1lbnUsXG4gICAgbW9iaWxlTWVudSxcbiAgfTtcbn07XG5cbmNvbnN0IGdldFVwZGF0ZWRFbGVtZW50cyA9ICgpID0+IHtcbiAgbGV0IGJvYXJkVGV4dEJveCA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRkQm9hcmRlclRleHRCb3gnKVxuICApO1xuICBsZXQgYm9hcmRlckJ1dHRvbiA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRkQm9hcmRlckJ1dHRvbicpXG4gICk7XG4gIGxldCBlZGl0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXRQcm9qZWN0JykpO1xuICBsZXQgZGVsZXRlSXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlbGV0ZUl0ZW0nKSk7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyVGV4dCA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdENvbnRhaW5lclRleHQnKVxuICApO1xuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdENvbnRhaW5lcicpXG4gICk7XG4gIGxldCBhZGRQcm9qZWN0TGFiZWxzID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGRQcm9qZWN0TGFiZWwnKVxuICApO1xuICBsZXQgcHJvamVjdEJ1dHRvbiA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdEJ1dHRvbicpXG4gICk7XG5cbiAgbGV0IHByb2plY3RUYXNrSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUYXNrSG9sZGVyJyk7XG5cbiAgbGV0IHByb2plY3RUYXNrSG9sZGVyQ2hpbGRyZW4gPSBBcnJheS5mcm9tKHByb2plY3RUYXNrSG9sZGVyLmNoaWxkcmVuKTtcblxuICBsZXQgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZUNvbnRlbnQnKTtcbiAgbGV0IHBhZ2VDb250ZW50Q2hpbGRyZW4gPSBBcnJheS5mcm9tKHBhZ2VDb250ZW50LmNoaWxkcmVuKTtcblxuICBsZXQgY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbnMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoYW5nZUJvYXJkVGl0bGVCdXR0b24nKVxuICApO1xuXG4gIGxldCBkZWxldGVCb2FyZCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlQm9hcmQnKSk7XG4gIGxldCBlZGl0Qm9hcmQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXRCb2FyZCcpKTtcbiAgbGV0IHRhc2tIb2xkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrSG9sZGVyJykpO1xuICBsZXQgdGFza0xpc3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrTGlzdHMnKSk7XG4gIGxldCBib2FyZENvbnRlbnRUZXh0Qm94ID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib2FyZHRleHRCb3gnKVxuICApO1xuICBsZXQgYm9hcmRPdmVybGF5ID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib2FyZE92ZXJsYXknKVxuICApO1xuICBsZXQgdGFza0FkZGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza0FkZGVyJykpO1xuXG4gIGxldCBleGFtcGxlQm9hcmRUZXh0ID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdleGFtcGxlQm9hcmRUZXh0JylcbiAgKTtcbiAgbGV0IGJ1dHRvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9uJykpO1xuXG4gIGxldCB0cmFzaEl0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cmFzaEl0JykpO1xuICBsZXQgZmluaXNoZWQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbmlzaGVkJykpO1xuXG4gIGxldCB0YXNrVGV4dEJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza1RleHRCb3gnKSk7XG4gIGxldCBkYXRlUGlja2VyID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlUGlja2VyJykpO1xuXG4gIGxldCBjaXJjbGVJY29uID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXJjbGVJY29uJykpO1xuICBsZXQgZWRpdCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdCcpKTtcbiAgbGV0IGRhdGVUb29scyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGF0ZVRvb2wnKSk7XG5cbiAgbGV0IGV4aXRFZGl0b3IgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2V4aXRFZGl0b3InKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBlZGl0SXRlbXMsXG4gICAgZGVsZXRlSXRlbXMsXG4gICAgYWRkUHJvamVjdExhYmVscyxcbiAgICBwcm9qZWN0QnV0dG9uLFxuICAgIHByb2plY3RUYXNrSG9sZGVyQ2hpbGRyZW4sXG4gICAgcHJvamVjdENvbnRhaW5lclRleHQsXG4gICAgYm9hcmRUZXh0Qm94LFxuICAgIGJvYXJkZXJCdXR0b24sXG4gICAgZGVsZXRlQm9hcmQsXG4gICAgZWRpdEJvYXJkLFxuICAgIHBhZ2VDb250ZW50LFxuICAgIHBhZ2VDb250ZW50Q2hpbGRyZW4sXG4gICAgdGFza0hvbGRlcnMsXG4gICAgZXhhbXBsZUJvYXJkVGV4dCxcbiAgICBjaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucyxcbiAgICBib2FyZENvbnRlbnRUZXh0Qm94LFxuICAgIGJvYXJkT3ZlcmxheSxcbiAgICB0YXNrTGlzdHMsXG4gICAgdGFza0FkZGVycyxcbiAgICBidXR0b24sXG4gICAgdHJhc2hJdCxcbiAgICBmaW5pc2hlZCxcbiAgICB0YXNrVGV4dEJveCxcbiAgICBkYXRlUGlja2VyLFxuICAgIGNpcmNsZUljb24sXG4gICAgZWRpdCxcbiAgICBkYXRlVG9vbHMsXG4gICAgZXhpdEVkaXRvcixcbiAgICBwcm9qZWN0Q29udGFpbmVyLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZ2V0SW5pdGlhbEVsZW1lbnRzLCBjcmVhdGVEb21FbGVtZW50cywgZ2V0VXBkYXRlZEVsZW1lbnRzIH07XG4iXSwibmFtZXMiOlsiY3JlYXRlRG9tRWxlbWVudHMiLCJib2R5IiwiZG9jdW1lbnQiLCJwYWdlVGV4dCIsImlubmVySFRNTCIsImdldEluaXRpYWxFbGVtZW50cyIsInNlY3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwibmF2aWdhdGlvbiIsIm92ZXJsYXkiLCJleGl0IiwiZWxlbWVudHMiLCJsaXN0VGl0bGUiLCJ1cENvbWluZ0J1dHRvbiIsInByb2plY3RBZGRlciIsInByb2plY3RUZXh0IiwicGx1c1NpZ24iLCJwcm9qZWN0VGFza0hvbGRlciIsImVkaXRQcm9qZWN0QnV0dG9uIiwiZWRpdFRleHQiLCJhZGRQcm9qZWN0TGFiZWwiLCJwYWdlQ29udGVudCIsIndob2xlT3ZlcmxheSIsImVycm9yTWVzc2FnZSIsImVycm9yTWVzc2FnZVRleHQiLCJleGl0QnV0dG9uIiwiaGFtYnVyZ2VyTWVudSIsIm1vYmlsZU1lbnUiLCJnZXRVcGRhdGVkRWxlbWVudHMiLCJib2FyZFRleHRCb3giLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYm9hcmRlckJ1dHRvbiIsImVkaXRJdGVtcyIsImRlbGV0ZUl0ZW1zIiwicHJvamVjdENvbnRhaW5lclRleHQiLCJwcm9qZWN0Q29udGFpbmVyIiwiYWRkUHJvamVjdExhYmVscyIsInByb2plY3RCdXR0b24iLCJwcm9qZWN0VGFza0hvbGRlckNoaWxkcmVuIiwiY2hpbGRyZW4iLCJwYWdlQ29udGVudENoaWxkcmVuIiwiY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbnMiLCJkZWxldGVCb2FyZCIsImVkaXRCb2FyZCIsInRhc2tIb2xkZXJzIiwidGFza0xpc3RzIiwiYm9hcmRDb250ZW50VGV4dEJveCIsImJvYXJkT3ZlcmxheSIsInRhc2tBZGRlcnMiLCJleGFtcGxlQm9hcmRUZXh0IiwiYnV0dG9uIiwidHJhc2hJdCIsImZpbmlzaGVkIiwidGFza1RleHRCb3giLCJkYXRlUGlja2VyIiwiY2lyY2xlSWNvbiIsImVkaXQiLCJkYXRlVG9vbHMiLCJleGl0RWRpdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==