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
/******/ 		__webpack_require__.p = "./";
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





var createTaskArrangement = function createTaskArrangement(task) {
  var color;
  var taskClass = "task";
  var editClass = "edit";
  var circleIconBackground = "none";
  var projectTypeText = "";
  if (task.priority == "High") color = "red";
  if (task.priority == "Low") color = "green";
  if (task.priority == "Medium") color = "#ff9800";

  if (task.navName) {
    projectTypeText = " <p class=\"generalText projectTypeText\"> Project: ".concat(task.navName, "</p>");
  }

  if (task.checked) {
    taskClass = "notTask";
    editClass = "notEdit";
    circleIconBackground = "black";
  }

  var newTaskText = "<div class=\"".concat(taskClass, "\" style = \"border-color:").concat(color, "\">\n                            <p class=\"taskLabel\">").concat(task.text, "</p>\n                            <div class=\"taskTools\">\n                                <div class=\"generalTextHolder\">\n                                    <p class=\"generalText\">Due: ").concat(task.dateText, "</p>\n                                    <p class=\"generalText\">Priority: ").concat(task.priority, "</p>\n\n                                </div>\n\n                                <div class=\"tools\">\n                                    <img class=\"").concat(editClass, "\" src=\"").concat(_images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"\">\n                                    <div class=\"circleIcon\" style = \"background:").concat(circleIconBackground, "\"></div>\n                                </div>\n                            </div>\n\n                            ").concat(projectTypeText, "                            \n                        </div>");
  return newTaskText;
};

var createBoard = function createBoard(template) {
  var text = template.text;
  var boardText = "                <div class = \"boardContent\">\n                                            <div class = \"board\">\n                                                <div class = \"boardOverlay\"></div>\n                                                    <div class = \"editExampleIcons\">\n                                                        <img class =\"deleteBoard\"  src=\"".concat(_images_trash_svg__WEBPACK_IMPORTED_MODULE_0__, "\" alt=\"trash icon for deleting\">\n                                                        <img class = \"editBoard\" src=\"").concat(_images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"editing icon\">\n                                                    </div>\n                                                    <h2 class = \"exampleBoardText\">").concat(text, "</h2>\n                                                    <div class = \"taskLists\"></div>\n                                                    <div class = \"taskAdder\">\n                                                        <p>+ Add Task</p>\n                                                    </div>\n                                                </div> \n                                                    </div>");
  return boardText;
};

var createUpComingBoard = function createUpComingBoard(task) {
  var boardText = "<div class = \"boardContent\">\n                            <div class = \"board\">\n                                <div class = \"boardOverlay\"></div>                          \n                                    <h2 class = \"exampleBoardText\">".concat(task.text, "</h2>   \n                                    <div class = \"taskLists\"></div>     \n                                    <div class = \"taskAdder\">\n                                        <p>+ Add Task</p>\n                                    </div>\n                                </div>  \n                                </div>");
  return boardText;
};

var createAddBoard = function createAddBoard() {
  var addBoardText = "<div class = \"boardContent\">\n                                <div class = \"addBoard\">\n                                    <div class = \"emptyrow\">empty row</div>\n                                    <h2 class = \"addBoardText\">Add Board</h2>\n                                    <input class = \"addBoarderTextBox\" type=\"text\">\n                                    <button class = \"addBoarderButton\">Add</button>\n                                </div>\n                            </div>";
  return addBoardText;
};

var createBoardEditor = function createBoardEditor(task) {
  var value = task.text;
  var boardText = "<div class = \"boardTextEditor\">\n        <input class = \"boardtextBox\" type=\"text\" value = \"".concat(value, "\">\n        <p class = \"changeBoardTitleButton\">+</p>\n    </div>");
  return boardText;
};

var createListEditor = function createListEditor(task) {
  var defaultColor = "blue";
  var icon = _images_trash_svg__WEBPACK_IMPORTED_MODULE_0__;
  var iconClass = "trashIt";

  if (task.creatingTask) {
    defaultColor = "black";
    icon = _images_exit_svg__WEBPACK_IMPORTED_MODULE_3__;
    iconClass = "exitEditor";
  }

  var text = task.text;
  var listText = "<div class = \"taskEditor\" style = \"border-color:".concat(defaultColor, "\">\n                            <div class = \"taskHolder\">\n\n                                <p class = \"taskHolderText\">Title:</p>\n                                <input class = \"taskTextBox\" type=\"text\" value = \"").concat(text, "\">\n                            </div>\n                                <div class = \"dateTool\">\n                                    <p class = \"dateText\">Date: </p>\n                                    <input class = \"datePicker\" type=\"date\">\n                                </div>\n                                <div class = \"editToolHolder\">\n                                    <div class = \"priority\">\n                                        <p class = \"buttonText\">Priority:</p>\n                                        <div class = \"buttons\">\n                                            <div class = \"button high\">\n                                                <p class = \"highText\">High</p>\n                                            </div>\n                                            <div class = \"button medium\">\n                                                <p class = \"mediumText\">Medium</p>\n                                            </div>\n                                            <div class = \"button low\">\n                                                <p class = \"lowText\">Low</p>\n                                            </div>\n                                        </div>\n                                        </div>\n                                </div>\n                                <div class = \"editTools\">\n                                    <img class = \"").concat(iconClass, "\" src=\"").concat(icon, "\" alt=\"\">\n                                    <img class = \"finished\" src=\"").concat(_images_finished_svg__WEBPACK_IMPORTED_MODULE_2__, "\" alt=\"\">\n                                </div>\n                            </div>");
  return listText;
};

var createNavTask = function createNavTask(task, highlighted) {
  var styleText = '';
  if (highlighted) styleText = 'style = "background:rgb(22, 83, 227);" ';
  var taskText = "<div class  = \"projectButton projectButtonHover\" ".concat(styleText, ">\n                            <div class = \"projectTools\">\n                                    <img  class = \"deleteItem\" src=\"").concat(_images_trash_svg__WEBPACK_IMPORTED_MODULE_0__, "\" alt=\"\">\n                                    <img class = \"editProject\" src=\"").concat(_images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"\">\n                                </div> \n\n                                <div class = \"projectContainer\">\n                                    <p class = \"projectContainerText\">").concat(task.task, "</p>\n                                </div>\n                            </div>");
  return taskText;
};

var createProjectEditor = function createProjectEditor(template) {
  var text = "";
  if (typeof template.value != "undefined") text = template.value;
  var editorText = " <div class = \"editProjectButton\">\n                            <input class = \"editText\" type=\"text\" value=\"".concat(text, "\">\n                            <p class = \"addProjectLabel\"> +</p>\n                           </div>");
  return editorText;
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3RlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiOyIsIlxuaW1wb3J0IHRyYXNoSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy90cmFzaC5zdmdcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2VkaXRPZmYuc3ZnXCI7XG5pbXBvcnQgY2hlY2tNYXJrSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2ZpbmlzaGVkLnN2Z1wiO1xuaW1wb3J0IGV4aXRJY29uIGZyb20gXCIuLi9pbWFnZXMvZXhpdC5zdmdcIjtcblxuXG4gICBcbiAgIFxuICAgY29uc3QgY3JlYXRlVGFza0FycmFuZ2VtZW50ID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IGNvbG9yO1xuICAgICAgICBsZXQgdGFza0NsYXNzID0gXCJ0YXNrXCI7XG4gICAgICAgIGxldCBlZGl0Q2xhc3MgPSBcImVkaXRcIjtcbiAgICAgICAgbGV0IGNpcmNsZUljb25CYWNrZ3JvdW5kID0gXCJub25lXCI7XG4gICAgICAgIGxldCBwcm9qZWN0VHlwZVRleHQgPSBcIlwiXG5cblxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PSBcIkhpZ2hcIikgY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PSBcIkxvd1wiKSBjb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJNZWRpdW1cIikgY29sb3IgPSBcIiNmZjk4MDBcIlxuICAgICAgICBpZiAodGFzay5uYXZOYW1lKSB7XG4gICAgICAgICAgICBwcm9qZWN0VHlwZVRleHQgPSBgIDxwIGNsYXNzPVwiZ2VuZXJhbFRleHQgcHJvamVjdFR5cGVUZXh0XCI+IFByb2plY3Q6ICR7dGFzay5uYXZOYW1lfTwvcD5gXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRhc2tDbGFzcyA9IFwibm90VGFza1wiO1xuICAgICAgICAgICAgZWRpdENsYXNzID0gXCJub3RFZGl0XCJcbiAgICAgICAgICAgIGNpcmNsZUljb25CYWNrZ3JvdW5kID0gXCJibGFja1wiO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgbmV3VGFza1RleHQgPSBgPGRpdiBjbGFzcz1cIiR7dGFza0NsYXNzfVwiIHN0eWxlID0gXCJib3JkZXItY29sb3I6JHtjb2xvcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2tMYWJlbFwiPiR7dGFzay50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1Rvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZW5lcmFsVGV4dEhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJnZW5lcmFsVGV4dFwiPkR1ZTogJHt0YXNrLmRhdGVUZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZ2VuZXJhbFRleHRcIj5Qcmlvcml0eTogJHt0YXNrLnByaW9yaXR5fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCIke2VkaXRDbGFzc31cIiBzcmM9XCIke2VkaXRJY29ufVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZUljb25cIiBzdHlsZSA9IFwiYmFja2dyb3VuZDoke2NpcmNsZUljb25CYWNrZ3JvdW5kfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdFR5cGVUZXh0fSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tUZXh0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGxldCB0ZXh0ID0gdGVtcGxhdGUudGV4dDtcbiAgICAgICAgbGV0IGJvYXJkVGV4dCA9IGAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJib2FyZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJlZGl0RXhhbXBsZUljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3MgPVwiZGVsZXRlQm9hcmRcIiAgc3JjPVwiJHt0cmFzaEltYWdlfVwiIGFsdD1cInRyYXNoIGljb24gZm9yIGRlbGV0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3MgPSBcImVkaXRCb2FyZFwiIHNyYz1cIiR7ZWRpdEljb259XCIgYWx0PVwiZWRpdGluZyBpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJleGFtcGxlQm9hcmRUZXh0XCI+JHt0ZXh0fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidGFza0xpc3RzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidGFza0FkZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPisgQWRkIFRhc2s8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICByZXR1cm4gYm9hcmRUZXh0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVVwQ29taW5nQm9hcmQgPSAodGFzaykgPT4ge1xuXG5cbiAgICAgICAgbGV0IGJvYXJkVGV4dCA9IGA8ZGl2IGNsYXNzID0gXCJib2FyZENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJib2FyZE92ZXJsYXlcIj48L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJleGFtcGxlQm9hcmRUZXh0XCI+JHt0YXNrLnRleHR9PC9oMj4gICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tMaXN0c1wiPjwvZGl2PiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0YXNrQWRkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rIEFkZCBUYXNrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIGJvYXJkVGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVBZGRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFkZEJvYXJkVGV4dCA9IGA8ZGl2IGNsYXNzID0gXCJib2FyZENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYWRkQm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVtcHR5cm93XCI+ZW1wdHkgcm93PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcImFkZEJvYXJkVGV4dFwiPkFkZCBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImFkZEJvYXJkZXJUZXh0Qm94XCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImFkZEJvYXJkZXJCdXR0b25cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICByZXR1cm4gYWRkQm9hcmRUZXh0O1xuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlQm9hcmRFZGl0b3IgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0YXNrLnRleHQ7XG4gICAgICAgIFxuICAgICAgICBsZXQgYm9hcmRUZXh0ID0gYDxkaXYgY2xhc3MgPSBcImJvYXJkVGV4dEVkaXRvclwiPlxuICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImJvYXJkdGV4dEJveFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWUgPSBcIiR7dmFsdWV9XCI+XG4gICAgICAgIDxwIGNsYXNzID0gXCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9uXCI+KzwvcD5cbiAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBib2FyZFRleHQ7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjcmVhdGVMaXN0RWRpdG9yID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IGRlZmF1bHRDb2xvciA9IFwiYmx1ZVwiXG4gICAgICAgIGxldCBpY29uID0gdHJhc2hJbWFnZTtcbiAgICAgICAgbGV0IGljb25DbGFzcyA9IFwidHJhc2hJdFwiO1xuXG4gICAgICAgIGlmICh0YXNrLmNyZWF0aW5nVGFzaykge1xuICAgICAgICAgICAgZGVmYXVsdENvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgaWNvbiA9IGV4aXRJY29uO1xuICAgICAgICAgICAgaWNvbkNsYXNzID0gXCJleGl0RWRpdG9yXCJcblxuICAgICAgICB9XG4gICAgICAgIGxldCB0ZXh0ID0gdGFzay50ZXh0O1xuXG5cbiAgICAgICAgbGV0IGxpc3RUZXh0ID0gYDxkaXYgY2xhc3MgPSBcInRhc2tFZGl0b3JcIiBzdHlsZSA9IFwiYm9yZGVyLWNvbG9yOiR7ZGVmYXVsdENvbG9yfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tIb2xkZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwidGFza0hvbGRlclRleHRcIj5UaXRsZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcyA9IFwidGFza1RleHRCb3hcIiB0eXBlPVwidGV4dFwiIHZhbHVlID0gXCIke3RleHR9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImRhdGVUb29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwiZGF0ZVRleHRcIj5EYXRlOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImRhdGVQaWNrZXJcIiB0eXBlPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZWRpdFRvb2xIb2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByaW9yaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImJ1dHRvblRleHRcIj5Qcmlvcml0eTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJidXR0b24gaGlnaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImhpZ2hUZXh0XCI+SGlnaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1dHRvbiBtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJtZWRpdW1UZXh0XCI+TWVkaXVtPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYnV0dG9uIGxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImxvd1RleHRcIj5Mb3c8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZWRpdFRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCIke2ljb25DbGFzc31cIiBzcmM9XCIke2ljb259XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCJmaW5pc2hlZFwiIHNyYz1cIiR7Y2hlY2tNYXJrSWNvbn1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCAgXG4gICAgcmV0dXJuIGxpc3RUZXh0O1xuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlTmF2VGFzayA9ICh0YXNrLCBoaWdobGlnaHRlZCkgPT4ge1xuICAgICAgICBsZXQgc3R5bGVUZXh0ID0gJydcbiAgICAgICAgaWYgKGhpZ2hsaWdodGVkKSBzdHlsZVRleHQgPSAnc3R5bGUgPSBcImJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcIiAnXG5cbiAgICAgICAgbGV0IHRhc2tUZXh0ID0gYDxkaXYgY2xhc3MgID0gXCJwcm9qZWN0QnV0dG9uIHByb2plY3RCdXR0b25Ib3ZlclwiICR7c3R5bGVUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0VG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGNsYXNzID0gXCJkZWxldGVJdGVtXCIgc3JjPVwiJHt0cmFzaEltYWdlfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9IFwiZWRpdFByb2plY3RcIiBzcmM9XCIke2VkaXRJY29ufVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByb2plY3RDb250YWluZXJUZXh0XCI+JHt0YXNrLnRhc2t9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiB0YXNrVGV4dDtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RFZGl0b3IgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlLnZhbHVlICE9IFwidW5kZWZpbmVkXCIpIHRleHQgPSB0ZW1wbGF0ZS52YWx1ZTtcblxuICAgICAgICBsZXQgZWRpdG9yVGV4dCA9IGAgPGRpdiBjbGFzcyA9IFwiZWRpdFByb2plY3RCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImVkaXRUZXh0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7dGV4dH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwiYWRkUHJvamVjdExhYmVsXCI+ICs8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBlZGl0b3JUZXh0O1xuICAgIH1cblxuXG5leHBvcnQge2NyZWF0ZU5hdlRhc2ssY3JlYXRlQm9hcmQsIGNyZWF0ZUFkZEJvYXJkLCBjcmVhdGVCb2FyZEVkaXRvciwgY3JlYXRlTGlzdEVkaXRvciwgY3JlYXRlVXBDb21pbmdCb2FyZCwgY3JlYXRlUHJvamVjdEVkaXRvciwgY3JlYXRlVGFza0FycmFuZ2VtZW50fSJdLCJuYW1lcyI6WyJ0cmFzaEltYWdlIiwiZWRpdEljb24iLCJjaGVja01hcmtJY29uIiwiZXhpdEljb24iLCJjcmVhdGVUYXNrQXJyYW5nZW1lbnQiLCJ0YXNrIiwiY29sb3IiLCJ0YXNrQ2xhc3MiLCJlZGl0Q2xhc3MiLCJjaXJjbGVJY29uQmFja2dyb3VuZCIsInByb2plY3RUeXBlVGV4dCIsInByaW9yaXR5IiwibmF2TmFtZSIsImNoZWNrZWQiLCJuZXdUYXNrVGV4dCIsInRleHQiLCJkYXRlVGV4dCIsImNyZWF0ZUJvYXJkIiwidGVtcGxhdGUiLCJib2FyZFRleHQiLCJjcmVhdGVVcENvbWluZ0JvYXJkIiwiY3JlYXRlQWRkQm9hcmQiLCJhZGRCb2FyZFRleHQiLCJjcmVhdGVCb2FyZEVkaXRvciIsInZhbHVlIiwiY3JlYXRlTGlzdEVkaXRvciIsImRlZmF1bHRDb2xvciIsImljb24iLCJpY29uQ2xhc3MiLCJjcmVhdGluZ1Rhc2siLCJsaXN0VGV4dCIsImNyZWF0ZU5hdlRhc2siLCJoaWdobGlnaHRlZCIsInN0eWxlVGV4dCIsInRhc2tUZXh0IiwiY3JlYXRlUHJvamVjdEVkaXRvciIsImVkaXRvclRleHQiXSwic291cmNlUm9vdCI6IiJ9