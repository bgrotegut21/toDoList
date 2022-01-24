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


var assignTools = function assignTools(elements, index, boardIndex) {
  elements.forEach(function (childElement) {
    if (childElement.getAttribute("class") == "tools") {
      var toolsChildren = Array.from(childElement.children);
      toolsChildren.forEach(function (toolElement) {
        toolElement.taskIndex = index;
        toolElement.boardIndex = boardIndex;
      });
    }
  });
};

var assignTaskIndex = function assignTaskIndex(element, boardIndex) {
  var taskIndex = 0;
  element.forEach(function (childElement) {
    if (childElement.getAttribute("class") == "task" || childElement.getAttribute("class") == "notTask") {
      var taskChildren = Array.from(childElement.children);
      taskChildren.forEach(function (taskChild) {
        if (taskChild.getAttribute("class") == "taskTools") {
          var taskToolsChildren = Array.from(taskChild.children);
          assignTools(taskToolsChildren, taskIndex, boardIndex);
        }
      });
      taskIndex++;
    }
  });
};

var assignBoardIcons = function assignBoardIcons(element, currentIndex) {
  var board = Array.from(element.children);
  board.forEach(function (childElement) {
    if (childElement.getAttribute("class") == "editExampleIcons") {
      childElement.boardIndex = currentIndex;
      var editExampleIcons = Array.from(childElement.children);
      editExampleIcons.forEach(function (itemElement) {
        itemElement.boardIndex = currentIndex;
      });
    }

    if (childElement.getAttribute("class") == "taskAdder") {
      var taskParagraph = Array.from(childElement.children)[0];
      taskParagraph.boardIndex = currentIndex;
    }

    childElement.boardIndex = currentIndex;
  });
};

var assignBoardElements = function assignBoardElements() {
  var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_0__.getUpdatedElements)();
  var pageContentChildren = elements.pageContentChildren;
  var currentIndex = 0;
  pageContentChildren.forEach(function (element) {
    if (element.getAttribute("class") == "boardContent") {
      element.boardIndex = currentIndex;
      var boardContent = Array.from(element.children);
      boardContent.forEach(function (childElement) {
        childElement.boardIndex = currentIndex;
        if (childElement.getAttribute("class") == "board") assignBoardIcons(childElement, currentIndex);
      });
    }

    currentIndex++;
  });
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsVUFBYixHQUEwQmEsWUFBMUI7QUFDQSxZQUFJWCxZQUFZLENBQUNDLFlBQWIsQ0FBMEIsT0FBMUIsS0FBc0MsT0FBMUMsRUFBbURTLGdCQUFnQixDQUFDVixZQUFELEVBQWNXLFlBQWQsQ0FBaEI7QUFFdEQsT0FKRDtBQUtIOztBQUNEQSxJQUFBQSxZQUFZO0FBQ2YsR0FYRDtBQVlILENBakJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9wYWdlTGF5b3V0LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9hc3NpZ24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlRG9tRWxlbWVudHMgPSAoKSA9PiB7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBsZXQgcGFnZVRleHQgPSBgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzID0gXCJ3aG9sZU92ZXJsYXlcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJlcnJvck1lc3NhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzID0gXCJtZXNzYWdlSG9sZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRlbnRIb2xkZXJcIj5cbiAgICAgICAgICAgIDxoMj5FcnJvcjwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzcyA9IFwiZXJyb3JNZXNzYWdlVGV4dFwiPlRleHQgQ2Fubm90IGJlIG92ZXIgMTAgY2hyYWN0ZXJzPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiZXhpdEJ1dHRvblwiPkV4aXQ8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuICAgIDxkaXYgY2xhc3MgPSBcIm1vYmlsZU1lbnVcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiaGFtYnVyZ2VyTWVudVwiPjwvYnV0dG9uPlxuICAgICAgICA8aDIgY2xhc3MgPSBcIm1vYmlsZU1lbnVUaXRsZVwiPlRvIERvIExpc3Q8L2gyPlxuXG4gICAgPC9kaXY+IFxuICAgIDxkaXYgY2xhc3MgPSBcInNlY3Rpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcIm5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm92ZXJsYXlcIj5jdXJyZW50IG92ZXJsYXk8L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzcyA9IFwiZXhpdFwiPlg8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZWxlbWVudHNcIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzID0gXCJsaXN0VGl0bGVcIiA+VG8gRG8gTGlzdDwvaDE+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ1cENvbWluZ0J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5VcGNvbWluZzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdEFkZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwicHJvamVjdFRleHRcIj5Qcm9qZWN0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJwbHVzU2lnblwiPis8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3RUYXNrSG9sZGVyXCI+PC9kaXY+XG5cblxuXG5cbiBcblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicGFnZUNvbnRlbnRcIj4gPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5gO1xuXG4gIGJvZHkuaW5uZXJIVE1MID0gcGFnZVRleHQ7XG59O1xuXG5jb25zdCBnZXRJbml0aWFsRWxlbWVudHMgPSAoKSA9PiB7XG4gIGxldCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25zJyk7XG4gIGxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKTtcbiAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICBsZXQgZXhpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0Jyk7XG4gIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50cycpO1xuICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RUaXRsZScpO1xuICBsZXQgdXBDb21pbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBDb21pbmdCdXR0b24nKTtcbiAgbGV0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0QWRkZXInKTtcbiAgbGV0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUZXh0Jyk7XG4gIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzU2lnbicpO1xuICBsZXQgcHJvamVjdFRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRhc2tIb2xkZXInKTtcbiAgbGV0IGVkaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0QnV0dG9uJyk7XG4gIGxldCBlZGl0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0VGV4dCcpO1xuICBsZXQgYWRkUHJvamVjdExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RMYWJlbCcpO1xuICBsZXQgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZUNvbnRlbnQnKTtcbiAgbGV0IHdob2xlT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aG9sZU92ZXJsYXknKTtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1lc3NhZ2UnKTtcbiAgbGV0IGVycm9yTWVzc2FnZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JNZXNzYWdlVGV4dCcpO1xuICBsZXQgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0QnV0dG9uJyk7XG5cbiAgbGV0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyTWVudScpO1xuICBsZXQgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGVNZW51Jyk7XG5cbiAgcmV0dXJuIHtcbiAgICBzZWN0aW9uLFxuICAgIG5hdmlnYXRpb24sXG4gICAgb3ZlcmxheSxcbiAgICBleGl0LFxuICAgIGVsZW1lbnRzLFxuICAgIGxpc3RUaXRsZSxcbiAgICB1cENvbWluZ0J1dHRvbixcbiAgICBwcm9qZWN0QWRkZXIsXG4gICAgcHJvamVjdFRleHQsXG4gICAgcGx1c1NpZ24sXG4gICAgcHJvamVjdFRhc2tIb2xkZXIsXG4gICAgZWRpdFByb2plY3RCdXR0b24sXG4gICAgZWRpdFRleHQsXG4gICAgYWRkUHJvamVjdExhYmVsLFxuICAgIHBhZ2VDb250ZW50LFxuICAgIHdob2xlT3ZlcmxheSxcbiAgICBleGl0QnV0dG9uLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBlcnJvck1lc3NhZ2VUZXh0LFxuICAgIGhhbWJ1cmdlck1lbnUsXG4gICAgbW9iaWxlTWVudSxcbiAgfTtcbn07XG5cbmNvbnN0IGdldFVwZGF0ZWRFbGVtZW50cyA9ICgpID0+IHtcbiAgbGV0IGJvYXJkVGV4dEJveCA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRkQm9hcmRlclRleHRCb3gnKVxuICApO1xuICBsZXQgYm9hcmRlckJ1dHRvbiA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRkQm9hcmRlckJ1dHRvbicpXG4gICk7XG4gIGxldCBlZGl0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXRQcm9qZWN0JykpO1xuICBsZXQgZGVsZXRlSXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlbGV0ZUl0ZW0nKSk7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyVGV4dCA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdENvbnRhaW5lclRleHQnKVxuICApO1xuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdENvbnRhaW5lcicpXG4gICk7XG4gIGxldCBhZGRQcm9qZWN0TGFiZWxzID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGRQcm9qZWN0TGFiZWwnKVxuICApO1xuICBsZXQgcHJvamVjdEJ1dHRvbiA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdEJ1dHRvbicpXG4gICk7XG5cbiAgbGV0IHByb2plY3RUYXNrSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUYXNrSG9sZGVyJyk7XG5cbiAgbGV0IHByb2plY3RUYXNrSG9sZGVyQ2hpbGRyZW4gPSBBcnJheS5mcm9tKHByb2plY3RUYXNrSG9sZGVyLmNoaWxkcmVuKTtcblxuICBsZXQgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZUNvbnRlbnQnKTtcbiAgbGV0IHBhZ2VDb250ZW50Q2hpbGRyZW4gPSBBcnJheS5mcm9tKHBhZ2VDb250ZW50LmNoaWxkcmVuKTtcblxuICBsZXQgY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbnMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoYW5nZUJvYXJkVGl0bGVCdXR0b24nKVxuICApO1xuXG4gIGxldCBkZWxldGVCb2FyZCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlQm9hcmQnKSk7XG4gIGxldCBlZGl0Qm9hcmQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXRCb2FyZCcpKTtcbiAgbGV0IHRhc2tIb2xkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrSG9sZGVyJykpO1xuICBsZXQgdGFza0xpc3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrTGlzdHMnKSk7XG4gIGxldCBib2FyZENvbnRlbnRUZXh0Qm94ID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib2FyZHRleHRCb3gnKVxuICApO1xuICBsZXQgYm9hcmRPdmVybGF5ID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib2FyZE92ZXJsYXknKVxuICApO1xuICBsZXQgdGFza0FkZGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza0FkZGVyJykpO1xuXG4gIGxldCBleGFtcGxlQm9hcmRUZXh0ID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdleGFtcGxlQm9hcmRUZXh0JylcbiAgKTtcbiAgbGV0IGJ1dHRvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9uJykpO1xuXG4gIGxldCB0cmFzaEl0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cmFzaEl0JykpO1xuICBsZXQgZmluaXNoZWQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpbmlzaGVkJykpO1xuXG4gIGxldCB0YXNrVGV4dEJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza1RleHRCb3gnKSk7XG4gIGxldCBkYXRlUGlja2VyID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlUGlja2VyJykpO1xuXG4gIGxldCBjaXJjbGVJY29uID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXJjbGVJY29uJykpO1xuICBsZXQgZWRpdCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdCcpKTtcbiAgbGV0IGRhdGVUb29scyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGF0ZVRvb2wnKSk7XG5cbiAgbGV0IGV4aXRFZGl0b3IgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2V4aXRFZGl0b3InKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBlZGl0SXRlbXMsXG4gICAgZGVsZXRlSXRlbXMsXG4gICAgYWRkUHJvamVjdExhYmVscyxcbiAgICBwcm9qZWN0QnV0dG9uLFxuICAgIHByb2plY3RUYXNrSG9sZGVyQ2hpbGRyZW4sXG4gICAgcHJvamVjdENvbnRhaW5lclRleHQsXG4gICAgYm9hcmRUZXh0Qm94LFxuICAgIGJvYXJkZXJCdXR0b24sXG4gICAgZGVsZXRlQm9hcmQsXG4gICAgZWRpdEJvYXJkLFxuICAgIHBhZ2VDb250ZW50LFxuICAgIHBhZ2VDb250ZW50Q2hpbGRyZW4sXG4gICAgdGFza0hvbGRlcnMsXG4gICAgZXhhbXBsZUJvYXJkVGV4dCxcbiAgICBjaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucyxcbiAgICBib2FyZENvbnRlbnRUZXh0Qm94LFxuICAgIGJvYXJkT3ZlcmxheSxcbiAgICB0YXNrTGlzdHMsXG4gICAgdGFza0FkZGVycyxcbiAgICBidXR0b24sXG4gICAgdHJhc2hJdCxcbiAgICBmaW5pc2hlZCxcbiAgICB0YXNrVGV4dEJveCxcbiAgICBkYXRlUGlja2VyLFxuICAgIGNpcmNsZUljb24sXG4gICAgZWRpdCxcbiAgICBkYXRlVG9vbHMsXG4gICAgZXhpdEVkaXRvcixcbiAgICBwcm9qZWN0Q29udGFpbmVyLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZ2V0SW5pdGlhbEVsZW1lbnRzLCBjcmVhdGVEb21FbGVtZW50cywgZ2V0VXBkYXRlZEVsZW1lbnRzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Z2V0VXBkYXRlZEVsZW1lbnRzfSBmcm9tIFwiLi9wYWdlTGF5b3V0LmpzXCJcblxuY29uc3QgYXNzaWduVG9vbHMgPSAoZWxlbWVudHMsaW5kZXgsYm9hcmRJbmRleCkgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInRvb2xzXCIpe1xuICAgICAgICAgICAgbGV0IHRvb2xzQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGNoaWxkRWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgICAgICB0b29sc0NoaWxkcmVuLmZvckVhY2godG9vbEVsZW1lbnQgPT4gXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvb2xFbGVtZW50LnRhc2tJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHRvb2xFbGVtZW50LmJvYXJkSW5kZXggPSBib2FyZEluZGV4O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG5cblxufVxuXG5jb25zdCBhc3NpZ25UYXNrSW5kZXggPSAoZWxlbWVudCxib2FyZEluZGV4KSA9PiB7XG4gICAgbGV0IHRhc2tJbmRleCA9MDtcbiAgICBlbGVtZW50LmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInRhc2tcIiB8fFxuICAgICAgICAgICAgY2hpbGRFbGVtZW50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwibm90VGFza1wiXG4gICAgICAgICl7XG4gICAgICAgICAgICBsZXQgdGFza0NoaWxkcmVuID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgdGFza0NoaWxkcmVuLmZvckVhY2godGFza0NoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFza0NoaWxkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwidGFza1Rvb2xzXCIpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza1Rvb2xzQ2hpbGRyZW4gPSBBcnJheS5mcm9tKHRhc2tDaGlsZC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnblRvb2xzKHRhc2tUb29sc0NoaWxkcmVuLHRhc2tJbmRleCxib2FyZEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGFza0luZGV4KytcbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICBcblxuXG5cbn1cblxuXG5jb25zdCBhc3NpZ25Cb2FyZEljb25zID0gKGVsZW1lbnQsIGN1cnJlbnRJbmRleCkgPT4gIHtcbiAgICBsZXQgYm9hcmQgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGJvYXJkLmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImVkaXRFeGFtcGxlSWNvbnNcIil7XG4gICAgICAgICAgICBjaGlsZEVsZW1lbnQuYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGxldCBlZGl0RXhhbXBsZUljb25zID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgZWRpdEV4YW1wbGVJY29ucy5mb3JFYWNoKGl0ZW1FbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtRWxlbWVudC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInRhc2tBZGRlclwiKXtcbiAgICAgICAgICAgIGxldCB0YXNrUGFyYWdyYXBoID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pWzBdO1xuICAgICAgICAgICAgdGFza1BhcmFncmFwaC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkRWxlbWVudC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgIH0pXG59XG5cblxuY29uc3QgYXNzaWduQm9hcmRFbGVtZW50cyA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICBsZXQgcGFnZUNvbnRlbnRDaGlsZHJlbiA9IGVsZW1lbnRzLnBhZ2VDb250ZW50Q2hpbGRyZW47XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBwYWdlQ29udGVudENoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYm9hcmRDb250ZW50XCIpe1xuICAgICAgICAgICAgZWxlbWVudC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgbGV0IGJvYXJkQ29udGVudCA9IEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgICAgICBib2FyZENvbnRlbnQuZm9yRWFjaChjaGlsZEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJib2FyZFwiKSBhc3NpZ25Cb2FyZEljb25zKGNoaWxkRWxlbWVudCxjdXJyZW50SW5kZXgpXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRJbmRleCArKztcbiAgICB9KVxufVxuXG5leHBvcnQge2Fzc2lnblRvb2xzLCBhc3NpZ25UYXNrSW5kZXgsIGFzc2lnbkJvYXJkRWxlbWVudHN9OyJdLCJuYW1lcyI6WyJjcmVhdGVEb21FbGVtZW50cyIsImJvZHkiLCJkb2N1bWVudCIsInBhZ2VUZXh0IiwiaW5uZXJIVE1MIiwiZ2V0SW5pdGlhbEVsZW1lbnRzIiwic2VjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZpZ2F0aW9uIiwib3ZlcmxheSIsImV4aXQiLCJlbGVtZW50cyIsImxpc3RUaXRsZSIsInVwQ29taW5nQnV0dG9uIiwicHJvamVjdEFkZGVyIiwicHJvamVjdFRleHQiLCJwbHVzU2lnbiIsInByb2plY3RUYXNrSG9sZGVyIiwiZWRpdFByb2plY3RCdXR0b24iLCJlZGl0VGV4dCIsImFkZFByb2plY3RMYWJlbCIsInBhZ2VDb250ZW50Iiwid2hvbGVPdmVybGF5IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JNZXNzYWdlVGV4dCIsImV4aXRCdXR0b24iLCJoYW1idXJnZXJNZW51IiwibW9iaWxlTWVudSIsImdldFVwZGF0ZWRFbGVtZW50cyIsImJvYXJkVGV4dEJveCIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJib2FyZGVyQnV0dG9uIiwiZWRpdEl0ZW1zIiwiZGVsZXRlSXRlbXMiLCJwcm9qZWN0Q29udGFpbmVyVGV4dCIsInByb2plY3RDb250YWluZXIiLCJhZGRQcm9qZWN0TGFiZWxzIiwicHJvamVjdEJ1dHRvbiIsInByb2plY3RUYXNrSG9sZGVyQ2hpbGRyZW4iLCJjaGlsZHJlbiIsInBhZ2VDb250ZW50Q2hpbGRyZW4iLCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucyIsImRlbGV0ZUJvYXJkIiwiZWRpdEJvYXJkIiwidGFza0hvbGRlcnMiLCJ0YXNrTGlzdHMiLCJib2FyZENvbnRlbnRUZXh0Qm94IiwiYm9hcmRPdmVybGF5IiwidGFza0FkZGVycyIsImV4YW1wbGVCb2FyZFRleHQiLCJidXR0b24iLCJ0cmFzaEl0IiwiZmluaXNoZWQiLCJ0YXNrVGV4dEJveCIsImRhdGVQaWNrZXIiLCJjaXJjbGVJY29uIiwiZWRpdCIsImRhdGVUb29scyIsImV4aXRFZGl0b3IiLCJhc3NpZ25Ub29scyIsImluZGV4IiwiYm9hcmRJbmRleCIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJ0b29sc0NoaWxkcmVuIiwidG9vbEVsZW1lbnQiLCJ0YXNrSW5kZXgiLCJhc3NpZ25UYXNrSW5kZXgiLCJlbGVtZW50IiwidGFza0NoaWxkcmVuIiwidGFza0NoaWxkIiwidGFza1Rvb2xzQ2hpbGRyZW4iLCJhc3NpZ25Cb2FyZEljb25zIiwiY3VycmVudEluZGV4IiwiYm9hcmQiLCJlZGl0RXhhbXBsZUljb25zIiwiaXRlbUVsZW1lbnQiLCJ0YXNrUGFyYWdyYXBoIiwiYXNzaWduQm9hcmRFbGVtZW50cyIsImJvYXJkQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=