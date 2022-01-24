/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/assign.js":
/*!*******************************!*\
  !*** ./src/scripts/assign.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



/***/ }),

/***/ "./src/scripts/content.js":
/*!********************************!*\
  !*** ./src/scripts/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentMenu": () => (/* binding */ contentMenu)
/* harmony export */ });
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");
/* harmony import */ var _send_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send.js */ "./src/scripts/send.js");
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.js */ "./src/scripts/template.js");
/* harmony import */ var _contentEffects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contentEffects.js */ "./src/scripts/contentEffects.js");
/* harmony import */ var _uiEffects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uiEffects.js */ "./src/scripts/uiEffects.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities.js */ "./src/scripts/utilities.js");
/* harmony import */ var _times_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./times.js */ "./src/scripts/times.js");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/isThisWeek */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage.js */ "./src/scripts/storage.js");
/* harmony import */ var _assign_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assign.js */ "./src/scripts/assign.js");














var Content = function Content() {
  var staticListTasks = [];
  var changedListTasks = [];
  var taskChanges = [];
  var upcomingTasks = [];
  var deletedUpComingItems = [];
  var index;
  var currentIndex;
  var isUpComing = false;
  var canDisrupt = false;
  var name;
  var dom = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getInitialElements)();

  var removeContentBindings = function removeContentBindings(bool) {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.boarderButton, addBoardTasksClick, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.deleteBoard, deleteBoard, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.editBoard, editBoard, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.taskAdders, addListEditorClick, "click");
  };

  var addContentBindings = function addContentBindings() {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.boarderButton, addBoardTasksClick, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.deleteBoard, deleteBoard, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.editBoard, editBoard, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.taskAdders, addListEditorClick, "click");
  };

  var addListBindings = function addListBindings() {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.button, shadeButtonColorClick, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.trashIt, deleteTask, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.finished, addTaskClick, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.edit, editTask, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.circleIcon, crossOutTask, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.exitEditor, exitListEditor, "click");
  };

  var addTaskBindings = function addTaskBindings() {
    addListBindings();
    addContentBindings();
  };

  var removeTaskBindings = function removeTaskBindings() {
    removeListBindings();
    removeContentBindings();
  };

  var addChangeNameBinding = function addChangeNameBinding() {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.changeBoardTitleButtons, changeName, "click");
  };

  var removeListBindings = function removeListBindings() {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.changeBoardTitleButtons, changeName, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.button, shadeButtonColorClick, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.trashIt, deleteTask, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.finished, addTaskClick, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.edit, editTask, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.circleIcon, crossOutTask, "click");
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.exitEditor, exitListEditor, "click");
  };

  var crossOutDuplicateTask = function crossOutDuplicateTask(task) {
    staticListTasks.forEach(function (board) {
      board.tasks.forEach(function (childTask) {
        if (childTask.navIndex == task.navIndex && childTask.navIndex != "upcoming") {
          if (childTask.boardIndex == task.boardIndex) {
            if (childTask.taskIndex == task.taskIndex) {
              childTask.checked = task.checked;
              removeCrossOutEditor(childTask);
            }
          }
        } else if (childTask.navIndex == "upcoming" && task.navIndex == "upcoming") {
          if (childTask.taskIndex == task.taskIndex) {
            childTask.checked = task.checked;
            removeCrossOutEditor(childTask);
          }
        }
      });
    });
  };

  var checkCrossOutEditor = function checkCrossOutEditor(newTask) {
    var boardCounter = 0;
    var canEdit = false;
    var taskIndex = newTask.taskIndex;
    var boardIndex = newTask.boardIndex;
    var navIndex = newTask.navIndex;
    staticListTasks.forEach(function (board) {
      var taskCounter = 0;
      board.changedBoardLists.forEach(function (task) {
        if (task.taskIndex == taskIndex && task.boardIndex == boardIndex && task.navIndex == navIndex) {
          var _taskIndex = taskCounter + 1;

          var _boardIndex = boardCounter;

          if (_taskIndex <= staticListTasks[_boardIndex].changedBoardLists.length - 1) {
            var editor = staticListTasks[_boardIndex].changedBoardLists[_taskIndex];
            if (editor.listEditor) canEdit = true;
          }
        }

        taskCounter++;
      });
      boardCounter++;
    });
    return canEdit;
  };

  var removeCrossOutEditor = function removeCrossOutEditor(task) {
    var indexes = getIndexes();

    if (indexes) {
      if (checkCrossOutEditor(task)) {
        removeListEditor();
      }
    }
  };

  var addListEditorToCrossOutTasks = function addListEditorToCrossOutTasks() {
    if (typeof index == "number") {
      var currentName = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.retrieveTitle(index);
      name = currentName;
      _send_js__WEBPACK_IMPORTED_MODULE_1__.send.sendData(staticListTasks, index, name);
      _storage_js__WEBPACK_IMPORTED_MODULE_8__.storage.storeData();
    } else if (index == "upcoming") {
      sendUpComingChanges();
    }

    renderBoardLists();
  };

  var crossOutTask = function crossOutTask(event) {
    var taskIndex = event.target.taskIndex;
    var boardIndex = event.target.boardIndex;
    var task = staticListTasks[boardIndex].tasks[taskIndex];
    task.checked ? task.checked = false : task.checked = true;
    var indexes = getIndexes();
    if (isUpComing) crossOutDuplicateTask(task);else {
      if (typeof indexes != "undefined") {
        var boardIndex2 = indexes.boardIndex;
        var listIndex = indexes.listIndex;

        if (boardIndex2 == boardIndex && listIndex == taskIndex) {
          removeListEditor();
        }
      }
    }
    addListEditorToCrossOutTasks();
  };

  var deleteTask = function deleteTask() {
    var indexes = getIndexes();
    var taskIndex = indexes.listIndex;
    var boardIndex = indexes.boardIndex;
    var newStaticListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setObject)(staticListTasks);
    var deletedTask;
    var currentTask = newStaticListTasks[boardIndex].tasks[taskIndex];
    currentTask.listTask = false;
    deletedTask = currentTask;
    var newArray = newStaticListTasks[boardIndex].tasks;
    var newerArray = newArray.filter(function (task) {
      return task.listTask;
    });
    deletedUpComingItems.push(deletedTask);
    staticListTasks[boardIndex].tasks = newerArray;
    var newTasks = staticListTasks[boardIndex].tasks;
    staticListTasks[boardIndex].changedBoardLists = newTasks;
    removeListEditor();
    if (isUpComing) removeUpComingTasks(deletedTask);
    activateContentMenu();
  };

  var removeUpComingTasks = function removeUpComingTasks(task) {
    var newStaticListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setObject)(staticListTasks, true);
    var boardIndex = 0;
    var newTasks;
    newStaticListTasks.forEach(function (board) {
      newTasks = board.tasks.filter(function (childTask) {
        if (childTask.navIndex == "upcoming" && task.navIndex == "upcoming") {
          if (childTask.taskIndex == task.taskIndex) {
            return false;
          } else return true;
        } else if (childTask.navIndex == task.navIndex) {
          if (childTask.boardIndex == task.boardIndex && childTask.taskIndex == task.taskIndex) {
            return false;
          } else return true;
        } else return true;
      });
      staticListTasks[boardIndex].tasks = newTasks;
      staticListTasks[boardIndex].changedBoardLists = newTasks;
      boardIndex++;
    });
  };

  var editTask = function editTask(event) {
    var boardIndex = event.target.boardIndex;
    var taskIndex = event.target.taskIndex;
    var task = staticListTasks[boardIndex].tasks[taskIndex];
    var text = task.text;
    var date = task.date;
    var priority = task.priority;
    addListEditor(boardIndex, taskIndex, text, date, priority);
  };

  var exitListEditor = function exitListEditor() {
    removeListEditor();
    renderBoardLists();
  };

  var removeListEditor = function removeListEditor() {
    staticListTasks.forEach(function (task) {
      var newTasks = task.changedBoardLists;
      newTasks = newTasks.filter(function (task) {
        return task.listEditor != true;
      });
      task.changedBoardLists = newTasks;
    });
  };

  var findListEditorBoardIndex = function findListEditorBoardIndex() {
    var newTasks = staticListTasks;
    var boardIndex = 0;
    var stopLoop = false;
    newTasks.forEach(function (board) {
      board.changedBoardLists.forEach(function (task) {
        if (task.listEditor == true) {
          stopLoop = true;
          return;
        }
      });
      if (stopLoop) return;
      boardIndex++;
    });
    return boardIndex;
  };

  var getIndexes = function getIndexes() {
    var breakLoop = false;
    var indexes;
    var boardIndex = 0;
    var listIndex;
    staticListTasks.forEach(function (task) {
      task.changedBoardLists.forEach(function (listTask) {
        if (listTask.listEditor) {
          if (typeof listTask.index != "undefined") {
            listIndex = listTask.index;
            indexes = {
              boardIndex: boardIndex,
              listIndex: listIndex
            };
          } else indexes = false;

          breakLoop = true;
        }
      });
      if (breakLoop) return;
      boardIndex++;
    });
    return indexes;
  };

  var addTaskClick = function addTaskClick() {
    var indexes = getIndexes();

    if (indexes !== false) {
      addTask(indexes.listIndex);
    } else {
      addTask();
    }
  };

  var changeDuplicateTasks = function changeDuplicateTasks(navIndex, boardIndex, taskIndex, newTask) {
    var currentBoardIndex = 0;
    staticListTasks.forEach(function (board) {
      var currentTaskIndex = 0;
      board.tasks.forEach(function (task) {
        if (task.navIndex == navIndex) {
          if (task.boardIndex) {
            if (task.boardIndex == boardIndex) {
              if (task.taskIndex == taskIndex) {
                staticListTasks[currentBoardIndex].tasks[currentTaskIndex] = newTask;
                var tasks = staticListTasks[currentBoardIndex].tasks;
                staticListTasks[currentBoardIndex].changedBoardLists = tasks;
              }
            }
          } else {
            if (task.taskIndex == taskIndex) {
              staticListTasks[currentBoardIndex].tasks[currentTaskIndex] = newTask;
              var _tasks = staticListTasks[currentBoardIndex].tasks;
              staticListTasks[currentBoardIndex].changedBoardLists = _tasks;
            }
          }
        }

        currentTaskIndex++;
      });
      currentBoardIndex++;
    });
  };

  var changeTask = function changeTask(boardIndex, task, index) {
    if (isUpComing) {
      var oldTask = staticListTasks[boardIndex].tasks[index];
      task.navName = oldTask.navName;
      task.taskIndex = oldTask.taskIndex;
      if (typeof oldTask.boardIndex != "undefined") task.boardIndex = oldTask.boardIndex;
      task.navIndex = oldTask.navIndex;
    }

    staticListTasks[boardIndex].tasks[index] = task;
    var tasks = staticListTasks[boardIndex].tasks;
    staticListTasks[boardIndex].changedBoardLists = tasks;
    if (isUpComing) changeDuplicateTasks(task.navIndex, task.boardIndex, task.taskIndex, task);
    if (isUpComing) addTaskToTime(task);
    if (isUpComing) removeOutOfDateTasks();
  };

  var createTask = function createTask(boardIndex, task) {
    if (isUpComing) {
      task.navIndex = "upcoming";
      task.navName = "Upcoming";
      upcomingTasks.push(task);
      task.taskIndex = upcomingTasks.length - 1;
    }

    staticListTasks[boardIndex].tasks.push(task);
    var tasks = staticListTasks[boardIndex].tasks;
    staticListTasks[boardIndex].changedBoardLists = tasks;
    if (isUpComing) addTaskToTime(task);
    if (isUpComing) removeOutOfDateTasks();
  }; // upcoming task array will always give a unique task index because it using the length of the upcoming task
  // which is only chaged when we get new data. The new data will change the task index so that it is in order
  // so it isn't just a random number and that is why upcoming works.


  var addTask = function addTask(index) {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
    var dateValue = elements.datePicker[0].value;
    var currentDate;
    if (dateValue.length == 0) currentDate = new Date();else currentDate = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_6__.changeValueToDate)(dateValue);
    var taskText = elements.taskTextBox[0].value;
    if (taskText.length == 0 || !(0,_utilities_js__WEBPACK_IMPORTED_MODULE_6__.checkSpaces)(taskText)) taskText = "New Task";
    var priority = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_6__.getObjectValue)("listEditor", "priority", staticListTasks);
    var task = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_6__.createTaskTemplate)(taskText, currentDate, priority);
    var boardIndex = findListEditorBoardIndex();
    typeof index != "undefined" ? changeTask(boardIndex, task, index) : createTask(boardIndex, task);
    activateContentMenu();
  };

  var getNewIndexes = function getNewIndexes(newTask) {
    var newBoardIndex;
    var breakLoop = false;
    var newTaskIndex;
    staticListTasks.forEach(function (board) {
      var currentTaskIndex = 0;
      board.tasks.forEach(function (task) {
        if (task.navIndex == "upcoming") {
          if (task.taskIndex == newTask.taskIndex) {
            if (board.text == "Week") newBoardIndex = 0;
            if (board.text == "Today") newBoardIndex = 1;
            breakLoop = true;
            newTaskIndex = currentTaskIndex;
            return;
          }
        }

        currentTaskIndex++;
      });
      if (breakLoop) return;
    });
    return {
      newBoardIndex: newBoardIndex,
      newTaskIndex: newTaskIndex
    };
  };

  var addTaskToTime = function addTaskToTime(newTask) {
    var newIndex = getNewIndexes(newTask);
    if (typeof newIndex.newBoardIndex == "undefined") return;
    var newBoardIndex = newIndex.newBoardIndex;
    var newTaskIndex = newIndex.newTaskIndex;
    var addTask = false;
    var currentTask = staticListTasks[newBoardIndex].tasks[newTaskIndex];

    if (typeof currentTask != "undefined") {
      if (currentTask.taskIndex == newTask.taskIndex && currentTask.navIndex == "upcoming" && newTask.navIndex == "upcoming") {
        staticListTasks[newBoardIndex].tasks[newTaskIndex] = newTask;
        var tasks = staticListTasks[newBoardIndex].tasks;
        staticListTasks[newBoardIndex].changedBoardLists = tasks;
      } else if (currentTask.navIndex == "upcoming" && newTask.navIndex == "upcoming") {
        addTask = true;
      }
    }

    if (typeof currentTask == "undefined" || currentTask.navIndex != "upcoming" || addTask) {
      if (!checkUpComingTask(newTask)) {
        staticListTasks[newBoardIndex].tasks.push(newTask);
        var _tasks2 = staticListTasks[newBoardIndex].tasks;
        staticListTasks[newBoardIndex].changedBoardLists = _tasks2;
      }
    }
  };

  var checkUpComingTask = function checkUpComingTask(newTask) {
    var isTask = false;
    var counter = 0;
    staticListTasks.forEach(function (board) {
      board.tasks.forEach(function (task) {
        if (task.navIndex == "upcoming") {
          if (task.taskIndex == newTask.taskIndex) {
            counter++;
          }

          if (counter == 2) {
            isTask = true;
            return;
          }
        }
      });
    });
    return isTask;
  };

  var removeOutOfDateTasks = function removeOutOfDateTasks() {
    addOutOfDateTasksToDeletedUpcomingItems();
    var boardIndex = 0;
    var newStaticListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setObject)(staticListTasks, true);
    newStaticListTasks.forEach(function (board) {
      board.tasks.forEach(function (task) {
        var tasks = board.tasks;
        var newTasks = tasks.filter(function (newTask) {
          return newTask.date != task.date;
        });

        if (boardIndex == 0) {
          if (!(0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_10__["default"])(task.date)) {
            tasks = newTasks;
            if (task.navIndex != "upcoming") taskChanges.push(task);
          }
        } else {
          if (!(0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_11__["default"])(task.date)) {
            tasks = newTasks;
            if (task.navIndex != "upcoming") taskChanges.push(task);
          }
        }

        newStaticListTasks[boardIndex].tasks = tasks;
        newStaticListTasks[boardIndex].changedBoardLists = tasks;
      });
      boardIndex++;
    });
    staticListTasks = newStaticListTasks;
  };

  var addOutOfDateTasksToDeletedUpcomingItems = function addOutOfDateTasksToDeletedUpcomingItems() {
    staticListTasks.forEach(function (board) {
      board.tasks.forEach(function (task) {
        if (task.navIndex == "upcoming") if (!(0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_11__["default"])(task.date)) {
          deletedUpComingItems.push(task);
        }
      });
    });
  };

  var shadeButtonByClass = function shadeButtonByClass(className, color) {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
    var buttons = elements.button;
    var button = buttons.filter(function (button) {
      return button.getAttribute("class") == className;
    })[0];
    var buttonParagraph = Array.from(button.children)[0];
    buttonParagraph.style.background = color;
  };

  var shadeButtonByPriority = function shadeButtonByPriority(priority) {
    if (priority == "High") shadeButtonByClass("button high", "red");else if (priority == "Medium") shadeButtonByClass("button medium", "#ff9800");else if (priority == "Low") shadeButtonByClass("button low", "green");
  };

  var shadeButtonColorClick = function shadeButtonColorClick(event) {
    (0,_uiEffects_js__WEBPACK_IMPORTED_MODULE_5__.shadeButtonColor)(event, staticListTasks);
  };

  var deleteBoard = function deleteBoard(event) {
    staticListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeItem)(staticListTasks, event.target.boardIndex);
    changedListTasks = staticListTasks;
    activateContentMenu();
  };

  var removeEditTitleMenu = function removeEditTitleMenu() {
    staticListTasks.forEach(function (task) {
      var newTasks = task.changedBoardLists;
      newTasks = newTasks.filter(function (list) {
        return list.editBoard != true;
      });
      task.changedBoardLists = newTasks;
    });
  };

  var editBoard = function editBoard(event) {
    var index = event.target.boardIndex;
    removeEditTitleMenu();
    var changedBoardLists = staticListTasks[index].changedBoardLists;
    var currentText = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_6__.getElementByBoardIndex)(index, "exampleBoardText").textContent;
    var editBoardTemplate = {
      editBoard: true,
      text: currentText
    };
    var newArray = [];
    newArray.push(editBoardTemplate);
    var finalArray = newArray.concat(changedBoardLists);
    staticListTasks[index].changedBoardLists = finalArray;
    currentIndex = index;
    renderBoardLists(true);
  };

  var addListEditorClick = function addListEditorClick(event) {
    var boardIndex = event.target.boardIndex;
    addListEditor(boardIndex);
  };

  var addListEditor = function addListEditor(boardIndex, index, text, date, priority) {
    removeListEditor();
    var finalArray;
    var listEditorTemplate;
    var currentDate = new Date();
    if (typeof index != "undefined") listEditorTemplate = {
      listEditor: true,
      text: text,
      date: date,
      priority: priority,
      boardIndex: boardIndex,
      index: index
    };else listEditorTemplate = {
      listEditor: true,
      text: "",
      date: currentDate,
      priority: "High",
      boardIndex: boardIndex,
      creatingTask: true
    };

    if (typeof index != "undefined") {
      var newTasks = staticListTasks[boardIndex].changedBoardLists;
      newTasks.splice(index + 1, 0, listEditorTemplate);
      finalArray = newTasks;
    } else {
      var listBoardArray = [listEditorTemplate];
      var _newTasks = staticListTasks[boardIndex].changedBoardLists;
      finalArray = _newTasks.concat(listBoardArray);
    }

    staticListTasks[boardIndex].changedBoardLists = finalArray;
    renderBoardLists();
  };

  var changeName = function changeName() {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
    var boardText = elements.boardContentTextBox[0].value;

    if (boardText.length == 0) {
      removeEditTitleMenu();
      renderBoardLists();
      return;
    }

    var newTasks = staticListTasks[currentIndex].changedBoardLists;
    newTasks = newTasks.filter(function (task) {
      return task.editBoard != true;
    });
    staticListTasks[currentIndex].changedBoardLists = newTasks;
    staticListTasks[currentIndex].text = boardText;
    activateContentMenu();
  };

  var renderEditBoardTextValues = function renderEditBoardTextValues() {
    var index = 0;
    staticListTasks.forEach(function (task) {
      task.changedBoardLists.forEach(function (list) {
        if (list.editBoard) {
          var currentText = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_6__.findBoardTextBox)(index);
          list.text = currentText;
        }
      });
      index++;
    });
  };

  var renderBoardLists = function renderBoardLists(isChangedName) {
    removeListBindings();
    removeContentBindings();
    (0,_uiEffects_js__WEBPACK_IMPORTED_MODULE_5__.removeBoardOverlay)();
    var indexesLength = staticListTasks.length;

    for (var i = 0; i < indexesLength; i++) {
      if (staticListTasks.length != 0) renderSingleBoardList(i);
    }

    if (!isChangedName) {
      addListBindings();
      addContentBindings();
    } else addChangeNameBinding();
  };

  var renderSingleBoardList = function renderSingleBoardList(index) {
    var taskList = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_6__.getElementByBoardIndex)(index, "taskLists");
    var addDate = false;
    var date;
    taskList.innerHTML = "";
    staticListTasks[index].changedBoardLists.forEach(function (task) {
      if (task.editBoard) {
        var boardText = (0,_template_js__WEBPACK_IMPORTED_MODULE_3__.createBoardEditor)(task);
        taskList.innerHTML += boardText;
        (0,_uiEffects_js__WEBPACK_IMPORTED_MODULE_5__.addBoardOverlay)(index);
      } else if (task.listEditor) {
        var listText = (0,_template_js__WEBPACK_IMPORTED_MODULE_3__.createListEditor)(task);
        taskList.innerHTML += listText;
        shadeButtonByPriority(task.priority);
        date = task.date;
        addDate = true;
      } else if (task.listTask) {
        var taskText = (0,_template_js__WEBPACK_IMPORTED_MODULE_3__.createTaskArrangement)(task);
        taskList.innerHTML += taskText;
      }
    });
    if (addDate) (0,_uiEffects_js__WEBPACK_IMPORTED_MODULE_5__.setTaskDate)(date);
    var taskListChildren = Array.from(taskList.children);
    var boardIndex = taskList.boardIndex;
    (0,_assign_js__WEBPACK_IMPORTED_MODULE_9__.assignTaskIndex)(taskListChildren, boardIndex);
  };

  var addBoardTasksClick = function addBoardTasksClick() {
    (0,_contentEffects_js__WEBPACK_IMPORTED_MODULE_4__.addBoardTasks)(staticListTasks);
    changedListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(staticListTasks);
    activateContentMenu();
  };

  var activateContentMenu = function activateContentMenu() {
    activateContent(index, false, name);
  };

  var renderListTasks = function renderListTasks(isEmpty) {
    var dom = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getInitialElements)();
    renderEditBoardTextValues();
    removeContentBindings();
    removeListBindings();

    if (!isEmpty && !isUpComing) {
      var newTasks = changedListTasks.filter(function (task) {
        return task.addBoard != true;
      });
      changedListTasks = newTasks;
      changedListTasks.push({
        addBoard: true
      });
    }

    dom.pageContent.innerHTML = "";
    changedListTasks.forEach(function (task) {
      if (task.board) {
        var board = (0,_template_js__WEBPACK_IMPORTED_MODULE_3__.createBoard)(task);
        dom.pageContent.innerHTML += board;
      } else if (task.addBoard) {
        var addBoard = (0,_template_js__WEBPACK_IMPORTED_MODULE_3__.createAddBoard)();
        dom.pageContent.innerHTML += addBoard;
      } else if (task.isUpComingBoard) {
        var upComingBoard = (0,_template_js__WEBPACK_IMPORTED_MODULE_3__.createUpComingBoard)(task);
        dom.pageContent.innerHTML += upComingBoard;
      }
    });
    addContentBindings();
    (0,_assign_js__WEBPACK_IMPORTED_MODULE_9__.assignBoardElements)();
    renderBoardLists();
  };

  var setChangedToDoListsEmpty = function setChangedToDoListsEmpty() {
    staticListTasks.forEach(function (task) {
      task.changedBoardLists = [];
    });
  };

  var setChangedToDoLists = function setChangedToDoLists() {
    staticListTasks.forEach(function (task) {
      task.changedBoardLists = task.tasks;
    });
  };

  var activateNavContent = function activateNavContent() {
    staticListTasks = [];
    var newTasks = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.retrieveData(index);

    if (!newTasks) {
      _send_js__WEBPACK_IMPORTED_MODULE_1__.send.sendData([], index, name);
      newTasks = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.retrieveData(index);
    }

    staticListTasks = newTasks;
    changedListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(staticListTasks);
    setChangedToDoLists();
  };

  var activateUpComingContent = function activateUpComingContent() {
    staticListTasks = [];
    staticListTasks = (0,_times_js__WEBPACK_IMPORTED_MODULE_7__.renderTimeTasks)(staticListTasks);
    isUpComing = true;
    changedListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(staticListTasks);
    upcomingTasks = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_6__.getUpComingTasks)(staticListTasks);
  };

  var removeNavTasks = function removeNavTasks() {
    staticListTasks.forEach(function (board) {
      var tasks = board.tasks.forEach(function (task) {
        return task.navIndex == "upcoming";
      });
      board.tasks = tasks;
    });
  };

  var disruptContent = function disruptContent(objectIndex) {
    if (isUpComing) removeNavTasks();else staticListTasks = [];
    index = null;

    if (objectIndex < 0) {
      if (!isUpComing) renderListTasks(true);
      canDisrupt = true;
    }
  };

  var removeUpComingItems = function removeUpComingItems(navs) {
    deletedUpComingItems.forEach(function (task) {
      if (task.navIndex == "upcoming") {
        navs[task.navIndex][task.taskIndex] = "empty";
      } else {
        navs[task.navIndex][task.boardIndex].tasks[task.taskIndex] = "empty";
      }
    });
    navs = (0,_contentEffects_js__WEBPACK_IMPORTED_MODULE_4__.removeNavEmpties)(navs);
    deletedUpComingItems = [];
    return navs;
  };

  var sendUpComingChanges = function sendUpComingChanges() {
    var navs = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.getAllData();
    staticListTasks.forEach(function (board) {
      board.tasks.forEach(function (task) {
        var newTask = task;

        if (task.listTask) {
          if (task.navIndex != "upcoming") {
            var text = task.text;
            var date = task.date;
            var priority = task.priority;
            var projectTypeText = task.projectTypeText;
            var checked = task.checked;
            newTask = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_6__.createTaskTemplate)(text, date, priority, projectTypeText, checked);
          }

          if (task.navIndex == "upcoming") {
            navs[task.navIndex][task.taskIndex] = newTask;
          } else navs[task.navIndex][task.boardIndex].tasks[task.taskIndex] = newTask;
        }
      });
    });
    if (deletedUpComingItems.length != 0) navs = removeUpComingItems(navs);
    var newData = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setObject)(navs);
    newData = (0,_contentEffects_js__WEBPACK_IMPORTED_MODULE_4__.applyTaskChanges)(newData, taskChanges);
    taskChanges = [];
    _send_js__WEBPACK_IMPORTED_MODULE_1__.send.overwriteData(newData);
    _storage_js__WEBPACK_IMPORTED_MODULE_8__.storage.storeData();
  };

  var getIsUpComing = function getIsUpComing() {
    return isUpComing;
  };

  var getIndex = function getIndex() {
    return index;
  };

  var activateContent = function activateContent(objectIndex, disruptFlow, objectName) {
    changedListTasks = [];
    upcomingTasks = [];
    setChangedToDoListsEmpty();
    canDisrupt = false;

    if (disruptFlow) {
      disruptContent(objectIndex);

      if (canDisrupt) {
        if (isUpComing) activateContent("upcoming");
        return;
      }
    }

    if (typeof index == "number") {
      var currentName = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.retrieveTitle(index);
      name = currentName;
      _send_js__WEBPACK_IMPORTED_MODULE_1__.send.sendData(staticListTasks, index, name);
      _storage_js__WEBPACK_IMPORTED_MODULE_8__.storage.storeData();
    } else if (index == "upcoming") {
      sendUpComingChanges();
    }

    isUpComing = false;
    index = objectIndex;
    name = objectName;

    if (index == "upcoming") {
      activateUpComingContent();
    } else {
      activateNavContent();
    }

    renderListTasks();
  };

  return {
    activateContent: activateContent,
    removeTaskBindings: removeTaskBindings,
    addTaskBindings: addTaskBindings,
    getIsUpComing: getIsUpComing,
    getIndex: getIndex
  };
};

var contentMenu = Content();


/***/ }),

/***/ "./src/scripts/contentEffects.js":
/*!***************************************!*\
  !*** ./src/scripts/contentEffects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyTaskChanges": () => (/* binding */ applyTaskChanges),
/* harmony export */   "removeNavEmpties": () => (/* binding */ removeNavEmpties),
/* harmony export */   "renderListEditorValue": () => (/* binding */ renderListEditorValue),
/* harmony export */   "addBoardTasks": () => (/* binding */ addBoardTasks)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/scripts/utilities.js");
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");





var applyTaskChanges = function applyTaskChanges(navs, taskChanges) {
  var newNav = navs;
  taskChanges.forEach(function (task) {
    var newTask;
    var navIndex = task.navIndex;
    var boardIndex = task.boardIndex;
    var taskIndex = task.taskIndex;
    var text = task.text;
    var date = task.date;
    var priority = task.priority;
    var projectTypeText = task.projectTypeText;
    var checked = task.checked;
    newTask = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createTaskTemplate)(text, date, priority, projectTypeText, checked);
    newNav[navIndex][boardIndex].tasks[taskIndex] = newTask;
  });
  return newNav;
};

var removeNavEmpties = function removeNavEmpties(navs) {
  var navKeys = Object.keys(navs);
  navKeys.forEach(function (key) {
    if (key == "upcoming") {
      navs[key] = navs[key].filter(function (task) {
        return task != "empty";
      });
    } else {
      navs[key].forEach(function (board) {
        board.tasks = board.tasks.filter(function (task) {
          return task != "empty";
        });
      });
    }
  });
  return navs;
};

var createBoardTemplate = function createBoardTemplate(currentText, tasks) {
  var currentTasks = [];
  if (typeof tasks != "undefined") currentTasks = tasks;
  var board = {
    board: true,
    text: currentText,
    tasks: currentTasks,
    changedBoardLists: []
  };
  return board;
};

var renderListEditorValue = function renderListEditorValue(tasks) {
  var listEditor = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.findObjectByName)("listEditor", tasks);
  if (!listEditor) return;
  var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
  var datePicker = elements.datePicker[0];
  var taskTextBox = elements.taskTextBox[0];
  if (datePicker) listEditor.date = datePicker.valueAsDate;
  if (taskTextBox) listEditor.text = taskTextBox.value;
};

var addBoardTasks = function addBoardTasks(staticArray) {
  renderListEditorValue(staticArray);
  var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
  var text = elements.boardTextBox[0].value;
  if (text.length == 0 || !(0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.checkSpaces)(text)) text = "New Board";
  var task = createBoardTemplate(text);
  staticArray.push(task);
};



/***/ }),

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
/* harmony export */   "setArray": () => (/* binding */ setArray),
/* harmony export */   "setObject": () => (/* binding */ setObject)
/* harmony export */ });
/* harmony import */ var _styles_board_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/board.css */ "./src/styles/board.css");
/* harmony import */ var _styles_navigation_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/navigation.css */ "./src/styles/navigation.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





var removeItem = function removeItem(array, index) {
  var newTasks = [];
  var currentIndex = 0;

  for (var i = 0; i < array.length; i++) {
    if (i != index) {
      newTasks.push(array[i]);
    }

    currentIndex++;
  }

  return newTasks;
};

var addItem = function addItem(array, index, item) {
  var newTasks = [];

  for (var i = 0; i < array.length; i++) {
    if (i == index) {
      newTasks.push(item);
    } else {
      newTasks.push(array[i]);
    }
  }

  return newTasks;
};

var setArray = function setArray(array) {
  var newArray = array;
  var newTasks = [];
  newArray.forEach(function (task) {
    newTasks.push(task);
  });
  return newTasks;
};

var setObject = function setObject(object, isArray) {
  var newObject = object;
  var blankObject = {};
  var newObjectKeys = Object.keys(newObject);
  var newArray = false;
  newArray = object;

  if (!isArray) {
    newObjectKeys.forEach(function (key) {
      if (_typeof(newObject[key]) != "object") blankObject[key] = newObject[key];else if (Object.prototype.toString.call(newObject[key]) === "[object Date]") {
        blankObject[key] = newObject[key];
      }
    });
  } else {
    var blankArray = [];
    newArray.forEach(function (item) {
      if (_typeof(item) != "object") blankArray.push(item);else if (Object.prototype.toString.call(item) === "[object Date]") {
        blankArray.push(item);
      }
    });
    blankObject = blankArray;
  }

  if (!isArray) {
    newObjectKeys.forEach(function (key) {
      if (_typeof(newObject[key]) == "object" && !Array.isArray(newObject[key])) {
        if (Object.prototype.toString.call(newObject[key]) !== "[object Date]") {
          blankObject[key] = setObject(newObject[key]);
        }
      } else if (Array.isArray(newObject[key])) {
        blankObject[key] = setObject(newObject[key], true);
      }
    });
  } else {
    var currentIndex = 0;
    newArray.forEach(function (item) {
      if (_typeof(item) == "object" && !Array.isArray(item)) {
        if (Object.prototype.toString.call(item) !== "[object Date]") {
          blankObject.splice(currentIndex, 0, setObject(item));
        }
      } else if (Array.isArray(item)) {
        blankObject.splice(currentIndex, 0, setObject(item, true));
      }

      currentIndex++;
    });
  }

  return blankObject;
};

var addBindings = function addBindings(elements, func, binding) {
  if (!Array.isArray(elements)) elements.addEventListener(binding, func);else elements.forEach(function (element) {
    return element.addEventListener(binding, func);
  });
};

var removeBindings = function removeBindings(elements, func, binding) {
  if (!Array.isArray(elements)) elements.removeEventListener(binding, func);else elements.forEach(function (element) {
    return element.removeEventListener(binding, func);
  });
};



/***/ }),

/***/ "./src/scripts/mobile.js":
/*!*******************************!*\
  !*** ./src/scripts/mobile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobile": () => (/* binding */ mobile)
/* harmony export */ });
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.js */ "./src/scripts/nav.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.js */ "./src/scripts/content.js");





var Mobile = function Mobile() {
  var dom;
  var isMobile = false;
  var mobileMenuOn = false;
  var removeMobileMenu = false;
  var media = window.matchMedia('(max-width: 550px)');
  var content;
  var nav;

  var removeMobileBindings = function removeMobileBindings() {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(dom.hamburgerMenu, openNavigation, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(dom.exit, openNavigation, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(dom.projectAdder, addRenderProjectBindings, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.projectContainer, openNavigation, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(dom.upComingButton, openNavigation, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.editItems, addRenderMobileBindings, 'click');
  };

  var removeRenderProjectBindings = function removeRenderProjectBindings() {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.addProjectLabels, renderMobileMenuClick, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(dom.wholeOverlay, renderMobileMenuClick, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(window, renderMobileMenuKeys, 'keydown');
  };

  var addMobileBindings = function addMobileBindings() {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(dom.hamburgerMenu, openNavigation, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(dom.exit, openNavigation, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(dom.projectAdder, addRenderProjectBindings, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.projectContainer, openNavigation, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(dom.upComingButton, openNavigation, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.editItems, addRenderMobileBindings, 'click');
  };

  var openNavigation = function openNavigation() {
    mobileMenuOn = !mobileMenuOn;
    renderMobileMenu();
  };

  var resetMobileMenu = function resetMobileMenu() {
    dom.exit.style.display = 'none';
    dom.mobileMenu.style.display = 'flex';
    dom.pageContent.style.display = 'flex';
    dom.navigation.style.display = 'none';
  };

  var addRenderProjectBindings = function addRenderProjectBindings() {
    nav.activateProjectTask();
    addRenderMobileBindings();
  };

  var addRenderMobileBindings = function addRenderMobileBindings() {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    nav.removeSpecialMobileBindings();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.addProjectLabels, renderMobileMenuClick, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(dom.wholeOverlay, renderMobileMenuClick, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(window, renderMobileMenuKeys, 'keydown');
  };

  var renderMobileMenuKeys = function renderMobileMenuKeys(event) {
    nav.createProjectTasksKeys(event);

    if (event.key == 'Enter') {
      nav.removeSpecialMobileBindings();
      removeRenderMobileEvents();
      renderMobileMenu();
    }
  };

  var removeRenderMobileEvents = function removeRenderMobileEvents() {
    var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.addProjectLabels, renderMobileMenuClick, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(dom.wholeOverlay, renderMobileMenuClick, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(window, renderMobileMenuKeys, 'keydown');
  };

  var renderMobileMenuClick = function renderMobileMenuClick() {
    nav.createProjectTasksClick();
    nav.removeSpecialMobileBindings();
    removeRenderMobileEvents();
    renderMobileMenu();
  };

  var renderMobileMenu = function renderMobileMenu(canRemoveMobileMenu) {
    dom = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getInitialElements)();
    removeMobileBindings();
    nav.removeNavigationBindings();
    content.removeTaskBindings();
    resetMobileMenu();

    if (mobileMenuOn) {
      dom.navigation.style.display = 'block';
      dom.exit.style.display = 'block';
      dom.mobileMenu.style.display = 'none';
    }

    if (removeMobileMenu && canRemoveMobileMenu) {
      dom.navigation.style.display = 'block';
      dom.mobileMenu.style.display = 'none';
      dom.pageContent.style.display = 'flex';
      dom.exit.style.display = 'none';
      nav.addNavigationBindings();
      content.addTaskBindings();
      return;
    }

    if (!mobileMenuOn) content.addTaskBindings();
    addNavigationBindings();
    addMobileBindings();
  };

  var addNavigationBindings = function addNavigationBindings() {
    nav.addNavigationBindings();
    nav.removeSpecialMobileBindings();
  };

  var watchMedia = function watchMedia(mediaQuery) {
    if (media.matches || mediaQuery.matches) {
      if (!removeMobileMenu) {
        nav.removeEditor();
        renderMobileMenu();
        removeMobileMenu = true;
        isMobile = true;
      }
    } else {
      if (removeMobileMenu) {
        renderMobileMenu(true);
        removeMobileBindings();
        removeRenderProjectBindings();
        nav.removeNavigationBindings();
        nav.addNavigationBindings();
        nav.renderOverlay();
        removeMobileMenu = false;
        isMobile = false;
        mobileMenuOn = false;
      }
    }
  };

  var activateMobileMenu = function activateMobileMenu() {
    content = _content_js__WEBPACK_IMPORTED_MODULE_3__.contentMenu;
    nav = _nav_js__WEBPACK_IMPORTED_MODULE_2__.navigation;
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(media, watchMedia, 'change');
    watchMedia(media);
  };

  return {
    activateMobileMenu: activateMobileMenu
  };
};

var mobile = Mobile();


/***/ }),

/***/ "./src/scripts/nav.js":
/*!****************************!*\
  !*** ./src/scripts/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigation": () => (/* binding */ navigation)
/* harmony export */ });
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");
/* harmony import */ var _send_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send.js */ "./src/scripts/send.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/scripts/storage.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.js */ "./src/scripts/template.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content.js */ "./src/scripts/content.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities.js */ "./src/scripts/utilities.js");








var nav = function nav() {
  var domElements;
  var changedTasks = [];
  var staticTasks = [];
  var content;
  var highlightedIndex;
  var upcomingButton;

  var removeNavigationBindings = function removeNavigationBindings(notRemoveAddProjectLabel) {
    var updatedItems = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    var domElements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getInitialElements)();
    upcomingButton = domElements.upComingButton;
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(updatedItems.editItems, editItem, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(updatedItems.deleteItems, deleteItem, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(updatedItems.projectContainer, switchPage, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(domElements.projectAdder, activateProjectTask, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(domElements.upComingButton, activateUpComingTask, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(upcomingButton, highlightUpComingButton, 'mouseover');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(upcomingButton, unhoverUpComingButton, 'mouseleave');
    if (!notRemoveAddProjectLabel) (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(updatedItems.addProjectLabels, createProjectTasksClick, 'click');
    if (!notRemoveAddProjectLabel && updatedItems.addProjectLabels.length != 0) (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(window, createProjectTasksKeys, 'keydown');
  };

  var removeSpecialMobileBindings = function removeSpecialMobileBindings() {
    var updatedItems = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(domElements.projectAdder, activateProjectTask, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(updatedItems.addProjectLabels, createProjectTasksClick, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(domElements.wholeOverlay, createProjectTasksClick, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(window, createProjectTasksKeys, 'keydown');
  };

  var lookUpTask = function lookUpTask(index) {
    return staticTasks[index];
  };

  var unhoverUpComingButton = function unhoverUpComingButton() {
    if (highlightedIndex != 'upcoming') unhighlightUpComingButton();
  };

  var addNavigationBindings = function addNavigationBindings() {
    var updatedItems = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    var domElements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getInitialElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(updatedItems.editItems, editItem, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(updatedItems.deleteItems, deleteItem, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(updatedItems.addProjectLabels, createProjectTasksClick, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(updatedItems.projectContainer, switchPage, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(domElements.projectAdder, activateProjectTask, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(upcomingButton, activateUpComingTask, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(upcomingButton, highlightUpComingButton, 'mouseover');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(upcomingButton, unhoverUpComingButton, 'mouseleave');
    if (updatedItems.addProjectLabels.length != 0) (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(window, createProjectTasksKeys, 'keydown');
  };

  var addProjectButtonWholeOverayBindings = function addProjectButtonWholeOverayBindings() {
    var updatedItems = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(updatedItems.projectButton, createProjectTasksClick, 'click');
  };

  var removeProjectWholeOverlayBindings = function removeProjectWholeOverlayBindings() {
    var updatedItems = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(updatedItems.projectButton, createProjectTasksClick, 'click');
  };

  var setHighlightIndex = function setHighlightIndex(index) {
    highlightedIndex = index;
    _storage_js__WEBPACK_IMPORTED_MODULE_3__.storage.storeHighlighIndex(index);
  };

  var switchPage = function switchPage(event) {
    var title = staticTasks[event.target.currentIndex].task;
    content.activateContent(event.target.currentIndex, false, title);
    setHighlightIndex(event.target.currentIndex);
    renderHighlightElements();
    renderProjectTasks();
  };

  var unHighlightButton = function unHighlightButton() {
    var index = 0;
    unhighlightUpComingButton();
    changedTasks.forEach(function (task) {
      if (task.navTask || task.upComingTask) {
        if (task.highlight) {
          task.highlight = false;
        }
      }

      index++;
    });
  };

  var unhighlightUpComingButton = function unhighlightUpComingButton() {
    upcomingButton.style.background = 'rgb(19, 75, 205)';
  };

  var highlightUpComingButton = function highlightUpComingButton() {
    upcomingButton.style.background = 'rgb(22, 83, 227)';
  };

  var renderHighlightElements = function renderHighlightElements() {
    if (staticTasks.length == 0 && highlightedIndex != 'upcoming') return;
    var isEdit = changedTasks.filter(function (task) {
      return task.edit;
    });

    if (isEdit.length != 0) {
      unHighlightButton();
    } else {
      highlightButton(highlightedIndex);
    }
  };

  var highlightButton = function highlightButton(index) {
    unHighlightButton();
    if (index == 'upcoming') highlightUpComingButton();else changedTasks[index].highlight = true;
  };

  var getCurrentIndex = function getCurrentIndex() {
    var updatedItems = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    var projectLabel = updatedItems.addProjectLabels[0];
    if (!projectLabel) return false;
    var currentIndex = projectLabel.currentIndex;
    return currentIndex;
  };

  var createProjectTasksKeys = function createProjectTasksKeys(event) {
    if (event.key == 'Enter') {
      var currentIndex = getCurrentIndex();
      if (currentIndex === false) return;
      createProjectTasks(currentIndex);
    }
  };

  var createProjectTasksClick = function createProjectTasksClick() {
    var currentIndex = getCurrentIndex();
    createProjectTasks(currentIndex);
  };

  var createProjectTasks = function createProjectTasks(index) {
    var taskText = getTextBoxValues();
    var isEditingTask = false;
    var isUpComing = content.getIsUpComing();
    var task = {
      navTask: true,
      task: taskText,
      highlight: false
    };

    if (taskText.length != 0 && (0,_utilities_js__WEBPACK_IMPORTED_MODULE_6__.checkSpaces)(taskText)) {
      if (staticTasks[index]) {
        staticTasks[index] = task;
        isEditingTask = true;
      } else {
        staticTasks.push(task);
        setHighlightIndex(index);
      }
    }

    changedTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(staticTasks);
    renderHighlightElements();
    if (staticTasks[index]) changedTasks[index].highlight = true;
    renderProjectTasks();

    if (index == staticTasks.length - 1 && !isEditingTask) {
      _send_js__WEBPACK_IMPORTED_MODULE_2__.send.sendName(index, task.task);
      _storage_js__WEBPACK_IMPORTED_MODULE_3__.storage.storeData();
      var title = staticTasks[index].task;
      content.activateContent(index, false, title);
    } else if (isEditingTask) {
      _send_js__WEBPACK_IMPORTED_MODULE_2__.send.sendName(index, task.task);
      _storage_js__WEBPACK_IMPORTED_MODULE_3__.storage.storeData();
      if (isUpComing) content.activateContent('upcoming');
    }

    renderOverlay();
    content.addTaskBindings();
  };

  var deleteItem = function deleteItem(event) {
    var index = event.target.currentIndex;
    staticTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeItem)(staticTasks, index);
    _send_js__WEBPACK_IMPORTED_MODULE_2__.send.deleteData(index);
    _storage_js__WEBPACK_IMPORTED_MODULE_3__.storage.storeData();
    var renderIndex = index - 1;

    if (renderIndex < 0) {
      renderIndex = staticTasks.length - 1;
      if (staticTasks.length == 0) renderIndex = -1;
    }

    var contentIndex = content.getIndex();
    var isUpComing = content.getIsUpComing();
    var normalIndex = renderIndex + 1;

    if (renderIndex == -1) {
      content.activateContent(renderIndex, true);
    } else if (normalIndex == contentIndex) {
      var title = staticTasks[renderIndex].task;
      content.activateContent(renderIndex, true, title);
      setHighlightIndex(renderIndex);
    } else if (isUpComing) {
      content.activateContent('upcoming', true);
      setHighlightIndex('upcoming');
    } else if (contentIndex) {
      var _title = staticTasks[contentIndex].task;
      content.activateContent(contentIndex, true, _title);
      setHighlightIndex(contentIndex);
    } else {
      setHighlightIndex(renderIndex);
    }

    changedTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(staticTasks);
    renderHighlightElements();
    renderProjectTasks();
  };

  var editItem = function editItem(event) {
    var projectTask = lookUpTask(event.target.currentIndex);
    var text = projectTask.task;
    createEditor(text, event.target.currentIndex, true);
  };

  var getTextBoxValues = function getTextBoxValues() {
    var editText = document.querySelector('.editText');
    var text = editText.value;
    return text;
  };

  var assignTaskActions = function assignTaskActions(index, childElement) {
    var childElements = Array.from(childElement.children);
    childElements.forEach(function (newElement) {
      if (newElement.getAttribute('class') == 'deleteItem') {
        newElement.currentIndex = index;
      } else if (newElement.getAttribute('class') == 'editProject') {
        newElement.currentIndex = index;
      }
    });
  };

  var assignValueElements = function assignValueElements() {
    var updatedItems = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    var index = 0;
    updatedItems.projectTaskHolderChildren.forEach(function (element) {
      element.currentIndex = index;
      var elementChildren = Array.from(element.children);
      elementChildren.forEach(function (childElement) {
        if (childElement.getAttribute('class') == 'projectTools') {
          childElement.currentIndex = index;
          assignTaskActions(index, childElement);
        } else if (childElement.getAttribute('class') == 'addProjectLabel') {
          childElement.currentIndex = index;
        }

        if (childElement.getAttribute('class') == 'projectContainer') {
          childElement.currentIndex = index;
          var childArray = Array.from(childElement.children);
          childArray[0].currentIndex = index;
        }
      });
      index++;
    });
  };

  var renderProjectTasks = function renderProjectTasks() {
    domElements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getInitialElements)();
    domElements.projectTaskHolder.innerHTML = '';
    changedTasks.forEach(function (task) {
      if (task.edit) {
        var editorText = (0,_template_js__WEBPACK_IMPORTED_MODULE_4__.createProjectEditor)(task);
        domElements.projectTaskHolder.innerHTML += editorText;
      } else if (task.navTask) {
        var taskText;
        task.highlight ? taskText = (0,_template_js__WEBPACK_IMPORTED_MODULE_4__.createNavTask)(task, true) : taskText = (0,_template_js__WEBPACK_IMPORTED_MODULE_4__.createNavTask)(task);
        domElements.projectTaskHolder.innerHTML += taskText;
      }
    });
    assignValueElements();
    addNavigationBindings();
  };

  var renderOverlay = function renderOverlay() {
    if (checkProjectEditor()) {
      domElements.overlay.style.display = 'block';
      domElements.wholeOverlay.style.display = 'block';
      (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(domElements.wholeOverlay, createProjectTasksClick, 'click');
      addProjectButtonWholeOverayBindings();
    } else {
      domElements.overlay.style.display = 'none';
      (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(domElements.wholeOverlay, createProjectTasksClick, 'click');
      domElements.wholeOverlay.style.display = 'none';
      removeProjectWholeOverlayBindings();
    }
  };

  var removeEditor = function removeEditor() {
    changedTasks = changedTasks.filter(function (task) {
      return task.edit != true;
    });
    renderOverlay();
    renderProjectTasks();
  };

  var checkProjectEditor = function checkProjectEditor() {
    var bool = false;
    changedTasks.forEach(function (task) {
      if (task.edit) bool = true;
    });
    return bool;
  };

  var disablePageContentElements = function disablePageContentElements() {
    removeNavigationBindings(true);
    var updatedElement = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getUpdatedElements)();
    if (updatedElement.projectButton.length == 0) return;
    updatedElement.projectButton.forEach(function (button) {
      button.classList.remove('projectButtonHover');
      button.style.color = 'rgb(157,162,175)';
      button.style.cursor = 'pointer';
    });
  }; //make sure disablePageContentElements and renderOverlay methods are below renderProject tasks.
  //This is because renderOverlay will overwrite the changes causing the page to act werid.


  var createEditor = function createEditor(text, index) {
    var editorText = '';
    if (typeof text != 'undefined') editorText = text;

    if (!checkProjectEditor()) {
      typeof index != 'undefined' ? changedTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addItem)(changedTasks, index, {
        edit: true,
        value: editorText
      }) : changedTasks.push({
        edit: true
      });
    }

    renderHighlightElements();
    renderProjectTasks();
    disablePageContentElements();
    renderOverlay();
    content.removeTaskBindings();
  };

  var activateUpComingTask = function activateUpComingTask() {
    content.activateContent('upcoming');
    setHighlightIndex('upcoming');
    renderHighlightElements();
    renderProjectTasks();
  };

  var activateProjectTask = function activateProjectTask() {
    createEditor();
  };

  var changedTitlesToTasks = function changedTitlesToTasks(titles) {
    var newTasks = [];
    var titleArray = Object.values(titles);
    titleArray.forEach(function (title) {
      var task = {
        navTask: true,
        task: title,
        highlight: false
      };
      newTasks.push(task);
    });
    return newTasks;
  }; // when dom is called it will create the default elements


  var activateNavigation = function activateNavigation() {
    content = _content_js__WEBPACK_IMPORTED_MODULE_5__.contentMenu;
    domElements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getInitialElements)();
    upcomingButton = domElements.upComingButton;
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(domElements.projectAdder, activateProjectTask, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(domElements.upComingButton, activateUpComingTask, 'click');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(upcomingButton, highlightUpComingButton, 'mouseover');
    (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(upcomingButton, unhoverUpComingButton, 'mouseleave');
    var storedData = _storage_js__WEBPACK_IMPORTED_MODULE_3__.storage.retrieveData();

    if (storedData) {
      var newTasks = changedTitlesToTasks(storedData.formatedTitles);
      staticTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(newTasks);
      changedTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(newTasks);
      _send_js__WEBPACK_IMPORTED_MODULE_2__.send.overwriteData(storedData.formatedData);
      _send_js__WEBPACK_IMPORTED_MODULE_2__.send.overwriteTitles(storedData.formatedTitles);
      highlightedIndex = _storage_js__WEBPACK_IMPORTED_MODULE_3__.storage.retrieveHighlightIndex();
      renderProjectTasks();
    }
  };

  return {
    activateNavigation: activateNavigation,
    removeNavigationBindings: removeNavigationBindings,
    addNavigationBindings: addNavigationBindings,
    activateProjectTask: activateProjectTask,
    removeSpecialMobileBindings: removeSpecialMobileBindings,
    createProjectTasksClick: createProjectTasksClick,
    createProjectTasksKeys: createProjectTasksKeys,
    renderOverlay: renderOverlay,
    removeEditor: removeEditor
  };
};

var navigation = nav();


/***/ }),

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
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");
//


var send = function () {
  var items = {};
  var titleItems = {};
  items.upcoming = [];

  var sendData = function sendData(data, index, title) {
    items[index] = data;
    titleItems[index] = title;
  };

  var sendName = function sendName(index, title) {
    titleItems[index] = title;
  };

  var retrieveData = function retrieveData(index) {
    if (items[index]) {
      return items[index];
    } else {
      return false;
    }
  };

  var retrieveTitle = function retrieveTitle(index) {
    if (titleItems[index]) {
      return titleItems[index];
    } else {
      return false;
    }
  };

  var retrieveTitles = function retrieveTitles() {
    return (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setObject)(titleItems);
  };

  var overwriteTitles = function overwriteTitles(titles) {
    titleItems = titles;
  };

  var overwriteData = function overwriteData(data) {
    items = data;
  };

  var getAllData = function getAllData() {
    return (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setObject)(items);
  };

  var deleteName = function deleteName(index) {
    var newTitles = titleItems;
    var newTitleKeys = Object.keys(newTitles);
    var finalTitles = {};
    newTitleKeys = newTitleKeys.filter(function (key) {
      return key != index;
    });

    for (var i = 0; i < newTitleKeys.length; i++) {
      finalTitles[i] = newTitles[newTitleKeys[i]];
    }

    return finalTitles;
  };

  var deleteData = function deleteData(index) {
    titleItems = deleteName(index);
    var newItems = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setObject)(items);
    var newItemsKeys = Object.keys(newItems);
    newItemsKeys = newItemsKeys.filter(function (key) {
      return key != index;
    });
    var newerItems = {};
    newItemsKeys.forEach(function (key) {
      newerItems[key] = newItems[key];
    });
    items = newerItems;
  };

  return {
    sendData: sendData,
    retrieveData: retrieveData,
    retrieveTitle: retrieveTitle,
    deleteData: deleteData,
    getAllData: getAllData,
    overwriteData: overwriteData,
    sendName: sendName,
    retrieveTitles: retrieveTitles,
    overwriteTitles: overwriteTitles
  };
}();



/***/ }),

/***/ "./src/scripts/storage.js":
/*!********************************!*\
  !*** ./src/scripts/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storage": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var _send_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send.js */ "./src/scripts/send.js");
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");



var dataStorage = function dataStorage() {
  var storeData = function storeData() {
    var data = _send_js__WEBPACK_IMPORTED_MODULE_0__.send.getAllData();
    var titles = _send_js__WEBPACK_IMPORTED_MODULE_0__.send.retrieveTitles();
    var newData = turnDataIntoFormat(data);
    var newTitles = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_1__.setObject)(titles);
    var jsonTitles = JSON.stringify(newTitles);
    var jsonData = JSON.stringify(newData);
    localStorage.setItem('data', jsonData);
    localStorage.setItem('titles', jsonTitles);
  };

  var retrieveData = function retrieveData() {
    var retrievedData = localStorage.getItem('data');
    var retrievedTitles = localStorage.getItem('titles');
    if (retrievedData == null || retrievedTitles == null) return false;
    var rawData = JSON.parse(retrievedData);
    var formatedTitles = JSON.parse(retrievedTitles);
    var formatedData = formatData(rawData);
    return {
      formatedData: formatedData,
      formatedTitles: formatedTitles
    };
  };

  var storeHighlighIndex = function storeHighlighIndex(index) {
    localStorage.setItem('highlightIndex', index);
  };

  var retrieveHighlightIndex = function retrieveHighlightIndex() {
    var highlightIndex = localStorage.getItem('highlightIndex');
    return highlightIndex;
  };

  var addDatesToTasks = function addDatesToTasks(tasks) {
    var newTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_1__.setObject)(tasks, true);
    newTasks.forEach(function (task) {
      var dates = task.dates;
      task.date = new Date(dates[0], dates[1], dates[2]);
    });
    return newTasks;
  };

  var formatData = function formatData(data) {
    var newDataKeys = Object.keys(data);
    var newData = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_1__.setObject)(data);
    newDataKeys.forEach(function (key) {
      if (key != 'upcoming') {
        newData[key].forEach(function (board) {
          board.changedBoardLists = [];
          board.tasks = addDatesToTasks(board.tasks);
        });
      } else {
        newData[key] = addDatesToTasks(newData[key]);
      }
    });
    return newData;
  };

  var removeDate = function removeDate(task) {
    var taskKeys = Object.keys(task);
    taskKeys = taskKeys.filter(function (key) {
      return key != 'date';
    });
    var newTask = {};
    taskKeys.forEach(function (key) {
      newTask[key] = task[key];
    });
    return newTask;
  };

  var removeDateObjects = function removeDateObjects(board) {
    board.tasks.forEach(function (task) {
      task = removeDate(task);
    });
  };

  var turnDataIntoFormat = function turnDataIntoFormat(data) {
    var newData = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_1__.setObject)(data);
    var newDataKeys = Object.keys(newData);
    newDataKeys.forEach(function (key) {
      if (key != 'upcoming') {
        newData[key].forEach(function (board) {
          var boardKeys = Object.keys(board);
          boardKeys = boardKeys.filter(function (key) {
            return key != 'changedBoardTasks';
          });
          var newBoard = {};
          boardKeys.forEach(function (key) {
            return newBoard[key] = board[key];
          });
          board = newBoard;
          board = removeDateObjects(board);
        });
      } else {
        newData[key].forEach(function (task) {
          task = removeDate(task);
        });
      }
    });
    return newData;
  };

  return {
    storeData: storeData,
    retrieveData: retrieveData,
    storeHighlighIndex: storeHighlighIndex,
    retrieveHighlightIndex: retrieveHighlightIndex
  };
};

var storage = dataStorage();


/***/ }),

/***/ "./src/scripts/template.js":
/*!*********************************!*\
  !*** ./src/scripts/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



/***/ }),

/***/ "./src/scripts/times.js":
/*!******************************!*\
  !*** ./src/scripts/times.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTimeTasks": () => (/* binding */ renderTimeTasks)
/* harmony export */ });
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isThisWeek */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/scripts/utilities.js");
/* harmony import */ var _send_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send.js */ "./src/scripts/send.js");
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");






var createUpComingTemplate = function createUpComingTemplate(currentText, tasks) {
  var currentTasks = [];
  if (typeof tasks != "undefined") currentTasks = tasks;
  var board = {
    isUpComingBoard: true,
    text: currentText,
    tasks: currentTasks,
    changedBoardLists: []
  };
  return board;
};

var addUpComingBoards = function addUpComingBoards(array) {
  var newArray = array;
  var todayBoard = createUpComingTemplate("Today", []);
  var weekBoard = createUpComingTemplate("Week", []);
  var timeBoards = [todayBoard, weekBoard];
  timeBoards.forEach(function (board) {
    return newArray.push(board);
  });
  return newArray;
};

var getTimeUpcomingValues = function getTimeUpcomingValues(navs, key, todayTasks, weekTasks) {
  var taskIndex = 0;
  navs[key].forEach(function (task) {
    task.taskIndex = taskIndex;
    task.navIndex = "upcoming";
    task.navName = "Upcoming";
    if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_3__["default"])(task.date)) todayTasks.push(task);
    if ((0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_4__["default"])(task.date)) weekTasks.push(task);
    taskIndex++;
  });
  return {
    todayTasks: todayTasks,
    weekTasks: weekTasks
  };
};

var getTimeNormalValues = function getTimeNormalValues(navs, key, todayTasks, weekTasks) {
  var boardIndex = 0;
  navs[key].forEach(function (board) {
    var taskIndex = 0;
    board.tasks.forEach(function (task) {
      task.taskIndex = taskIndex;
      task.boardIndex = boardIndex;
      task.navIndex = key;
      task.navName = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.retrieveTitle(key);
      if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_3__["default"])(task.date)) todayTasks.push(task);
      if ((0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_4__["default"])(task.date)) weekTasks.push(task);
      taskIndex++;
    });
    boardIndex++;
  });
  return {
    todayTasks: todayTasks,
    weekTasks: weekTasks
  };
};

var getTaskTimeValues = function getTaskTimeValues() {
  var data = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.getAllData();
  var navs = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.setObject)(data);
  var navKeys = Object.keys(navs);
  var todayTasks = [];
  var weekTasks = [];
  navKeys.forEach(function (key) {
    if (key == "upcoming") {
      var times = getTimeUpcomingValues(navs, key, todayTasks, weekTasks);
      todayTasks = times.todayTasks;
      weekTasks = times.weekTasks;
    } else {
      var _times = getTimeNormalValues(navs, key, todayTasks, weekTasks);

      todayTasks = _times.todayTasks;
      weekTasks = _times.weekTasks;
    }
  });
  navs = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.getAllData();
  todayTasks = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.sortDatesByLatestDay)(todayTasks);
  weekTasks = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.sortDatesByLatestDay)(weekTasks);
  return {
    todayTasks: todayTasks,
    weekTasks: weekTasks
  };
};

var renderTimeTasks = function renderTimeTasks(array) {
  var newArray = addUpComingBoards(array);
  var times = getTaskTimeValues();
  newArray.forEach(function (board) {
    if (board.text == "Today") {
      board.tasks = times.todayTasks;
      board.changedBoardLists = board.tasks;
    }

    if (board.text == "Week") {
      board.tasks = times.weekTasks;
      board.changedBoardLists = board.tasks;
    }
  });
  return newArray;
};



/***/ }),

/***/ "./src/scripts/uiEffects.js":
/*!**********************************!*\
  !*** ./src/scripts/uiEffects.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeBoardOverlay": () => (/* binding */ removeBoardOverlay),
/* harmony export */   "addBoardOverlay": () => (/* binding */ addBoardOverlay),
/* harmony export */   "shadeButtonColor": () => (/* binding */ shadeButtonColor),
/* harmony export */   "setTaskDate": () => (/* binding */ setTaskDate)
/* harmony export */ });
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ "./src/scripts/utilities.js");



var unshadeButtons = function unshadeButtons() {
  var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_0__.getUpdatedElements)();
  var buttons = elements.button;
  buttons.forEach(function (element) {
    var elementChildren = Array.from(element.children);
    elementChildren.forEach(function (childElement) {
      childElement.style.background = "none";
    });
  });
};

var removeBoardOverlay = function removeBoardOverlay() {
  var elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_0__.getUpdatedElements)();
  elements.boardOverlay.forEach(function (element) {
    element.style.display = "none";
  });
};

var addBoardOverlay = function addBoardOverlay(index) {
  var boardOverlay = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementByBoardIndex)(index, "boardOverlay");
  boardOverlay.style.display = "block";
};

var setTaskDate = function setTaskDate(date) {
  var element = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_0__.getUpdatedElements)();
  var datePicker = element.datePicker[0];
  datePicker.valueAsDate = date;
};

var changeListEditorPriority = function changeListEditorPriority(currentPriority, array) {
  var listEditor = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.findObjectByName)("listEditor", array);
  listEditor.priority = currentPriority;
};

var shadeButtonColor = function shadeButtonColor(event, array) {
  unshadeButtons();
  var paragraph;
  if (event.target.getAttribute("class") == "button high" || event.target.getAttribute("class") == "button medium" || event.target.getAttribute("class") == "button low") paragraph = Array.from(event.target.children)[0];

  if (event.target.getAttribute("class") == "highText") {
    event.target.style.background = "red";
    changeListEditorPriority("High", array);
  } else if (event.target.getAttribute("class") == "mediumText") {
    event.target.style.background = "#ff9800";
    changeListEditorPriority("Medium", array);
  } else if (event.target.getAttribute("class") == "lowText") {
    event.target.style.background = "green";
    changeListEditorPriority("Low", array);
  } else if (event.target.getAttribute("class") == "button high") {
    paragraph.style.background = "red";
    changeListEditorPriority("High", array);
  } else if (event.target.getAttribute("class") == "button medium") {
    paragraph.style.background = "#ff9800";
    changeListEditorPriority("Medium", array);
  } else if (event.target.getAttribute("class") == "button low") {
    paragraph.style.background = "green";
    changeListEditorPriority("Low", array);
  }
};



/***/ }),

/***/ "./src/scripts/utilities.js":
/*!**********************************!*\
  !*** ./src/scripts/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findBoardTextBox": () => (/* binding */ findBoardTextBox),
/* harmony export */   "getElementByBoardIndex": () => (/* binding */ getElementByBoardIndex),
/* harmony export */   "getObjectValue": () => (/* binding */ getObjectValue),
/* harmony export */   "changeValueToDate": () => (/* binding */ changeValueToDate),
/* harmony export */   "sortDatesByLatestDay": () => (/* binding */ sortDatesByLatestDay),
/* harmony export */   "createTaskTemplate": () => (/* binding */ createTaskTemplate),
/* harmony export */   "findObjectByName": () => (/* binding */ findObjectByName),
/* harmony export */   "getUpComingTasks": () => (/* binding */ getUpComingTasks),
/* harmony export */   "checkSpaces": () => (/* binding */ checkSpaces)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_getDayOfYear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/getDayOfYear */ "./node_modules/date-fns/esm/getDayOfYear/index.js");
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");
//helpful functions that ate tucked in this file to make content more clean and readable




var findBoardTextBox = function findBoardTextBox(index) {
  var taskLists = getElementByBoardIndex(index, "taskLists");
  var buttonText = "could not load text";
  var taskListChildren = Array.from(taskLists.children);
  taskListChildren.forEach(function (child) {
    if (child.getAttribute("class") == "boardTextEditor") {
      buttonText = Array.from(child.children)[0].value;
      return;
    }
  });
  return buttonText;
};

var getElementByBoardIndex = function getElementByBoardIndex(index, domElement) {
  var element = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_0__.getUpdatedElements)();
  var newElement = false;
  element[domElement].forEach(function (childElement) {
    if (childElement.boardIndex == index) newElement = childElement;
  });
  return newElement;
};

var getUpComingTasks = function getUpComingTasks(array) {
  var newArray = [];
  array.forEach(function (board) {
    board.tasks.forEach(function (task) {
      if (task.navIndex == "upcoming") {
        newArray.push(task);
      }
    });
  });
  return newArray;
}; // only works with static list tasks which has two arrays
// one that can take different types of editors which is known as
// the changedboardlists and the one that changes very little 
// and values can be added but will be edited in the editors in changedBoardLists


var findObjectByName = function findObjectByName(name, parentArray) {
  var currentObject = false;
  var breakLoop;
  var staticListTasks = parentArray;
  staticListTasks.forEach(function (task) {
    task.changedBoardLists.forEach(function (listTask) {
      if (listTask[name]) {
        currentObject = listTask;
        breakLoop = true;
        return;
      }
    });
    if (breakLoop) return;
  });
  return currentObject;
}; // Takes staticlist tasks array does not work in any other tempalate do not try it


var getObjectValue = function getObjectValue(currentObject, value, array) {
  var objectValue = findObjectByName(currentObject, array);
  var newValue = false;
  if (objectValue != false) newValue = objectValue[value];
  return newValue;
};

var changeValueToDate = function changeValueToDate(value) {
  var newValue = value.split("-");
  var year = newValue[0];
  var monthIndex = newValue[1] - 1;
  var day = newValue[2];
  var date = new Date(year, monthIndex, day);
  return date;
};

var sortDatesByLatestDay = function sortDatesByLatestDay(timeTasks) {
  var newTimeTasks = timeTasks;
  newTimeTasks.sort(function (timeTask1, timeTask2) {
    var days2 = (0,date_fns_getDayOfYear__WEBPACK_IMPORTED_MODULE_1__["default"])(timeTask2.date);
    var days1 = (0,date_fns_getDayOfYear__WEBPACK_IMPORTED_MODULE_1__["default"])(timeTask1.date);
    return days2 - days1;
  });
  return newTimeTasks;
};

var createTaskTemplate = function createTaskTemplate(text, date, priority, projectTypeText, checked) {
  var task = {};
  task.listTask = true;
  task.text = text, task.date = date;
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  task.dates = [year, month, day];
  task.dateText = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(task.date, "MMM d y");
  task.priority = priority;
  !checked ? task.checked = false : task.checked = true;
  if (typeof projectTypeText != "undefined") task.projectTypeText = projectTypeText;
  return task;
};

var checkSpaces = function checkSpaces(text) {
  if (text.trim().length != 0) return true;else return false;
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/board.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/board.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v29-latin-regular.eot */ "./src/fonts/roboto-v29-latin-regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v29-latin-regular.woff2 */ "./src/fonts/roboto-v29-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v29-latin-regular.woff */ "./src/fonts/roboto-v29-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v29-latin-regular.ttf */ "./src/fonts/roboto-v29-latin-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v29-latin-regular.svg */ "./src/fonts/roboto-v29-latin-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hamburgerMenu.svg */ "./src/images/hamburgerMenu.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: "#Roboto" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n  }\n\n\n\n\n\n  .pageContent {\n    display:flex;\n    flex-basis: auto;\n    overflow-y: hidden;\n    height:100%;\n    overflow-x: auto;\n}\n\n\n\n\n\n.addBoard {\n    width: 250px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    background:rgb(198, 198, 198);\n    margin:10px;\n    padding-bottom:10px;\n    \n  \n}\n\n\n\n\n\ninput {\n    outline: none;\n}\n\n\n.boardContent {\n\n    font-family: 'Roboto', sans-serif;\n    overflow-y: auto;\n    overflow-x: hidden;\n    flex-shrink: 0;\n}\n\n.board {\n    position: relative;\n    text-align:center;\n    background:rgb(198, 198, 198);\n    width: 290px;\n    margin:10px;\n\n\n    \n    padding-bottom:5px;\n}\n\n.boardOverlay {\n    background:rgba(0, 0, 0, 0.299);\n    position:absolute;\n    width:100%;\n    height:100%;\n    top:0;\n    z-index:1;\n    display:none;\n}\n\n.deleteBoard, .editBoard {\n    cursor: pointer;\n}\n\n\n.taskHolder {\n\n    display:flex;\n    align-items:center;\n}\n\n.taskTextBox {\n    width:135px;\n}\n.exampleBoardText {\n    position:relative;\n    top:4px;\n    font-size: large\n}\n\n\n.addBoardText {\n    margin-top:5px;\n    font-size: large;\n\n\n}\n\n\n\n.task, .notTask{\n    background:rgb(237, 230, 230);\n    border-left: 8px solid;\n    margin:10px;\n}\n\n.taskTools {\n    display:flex;\n    justify-content:space-between;\n    padding-left:10px;\n    padding-right:10px;\n    margin-top:10px;\n\n}\n.tools {\n    display:flex;\n}\n\n\n.taskLabel {\n    position: relative;\n    top:5px;\n    word-wrap: break-word;\n    margin-bottom:10px;\n    font-size: smaller;\n\n    border: 0;\n\n}\n.generalText {\n    font-size:10px;\n    margin-right: 20px;\n    word-wrap: break-word;\n\n}\n\n.generalTextHolder {\n    display:flex;\n}\n\n\n\n\n.circleIcon {\n    width:10px;\n    height:10px;\n    border-radius:20px;\n    border: 3px solid black;\n    cursor:pointer;\n}\n.edit, .notEdit{\n    width:20px;\n    cursor:pointer;\n    margin-right:6px;\n}\n\n.circleIcon:hover {\n    background:black;\n}\n\n\n\n.taskAdder {\n    margin-top:10px;\n}\n\n\n.taskAdder:hover {\n   cursor:pointer;\n   background:rgb(178, 178, 178);\n}\n\n\n\n\n\n\n\n\n.priority {\n    display:flex;\n    margin:5px;\n\n}\n.editTools {\n    display:flex;\n    width:50px;\n\n}\n.dateTool {\n    margin:5px;\n    margin-right:14px;\n    display:flex;\n}\n.taskTextBox {\n    height:20px;\n    font-family: 'Roboto', sans-serif;\n    margin:5px;\n}\n\n.editToolHolder {\n\n    display:flex;\n    justify-content:space-between;\n    \n}\n\n.buttons {\n    margin-left: 5px;\n}\n\n.datePicker {\n    margin-left:5px;\n    width:135px;\n    height:20px;\n    border:0;\n}\n\n\n\n.taskEditor {\n    background: rgb(237, 230, 230);\n    margin:10px;\n    margin-left:20px;\n    display:flex;\n    align-items: center;\n    border-left: 8px solid;\n    flex-direction: column;\n}\n\n.error {\n    color:rgb(197, 63, 63);\n}\n\n\n.taskTextBox{\n    border:0;\n    margin:5px;\n\n}\n\n\n\n\n.buttons .button {\n\n    cursor: pointer;\n}\n\n.high {\n    border:5px solid red;\n}\n\n.medium {\n    border: 5px solid #ff9800;\n}\n\n\n.notTask {\n    \n     text-decoration: line-through; \n     color:grey; \n } \n\n.notEdit {\n    filter: invert(20%) sepia(10%) saturate(2076%) hue-rotate(86deg) brightness(118%) contrast(10%);\n}\n\n\n\n.low {\n\n    border:5px solid green;\n}\n\n.low:hover {\n    background:green;\n}\n\n.high:hover {\n    background:red;\n}\n\n.medium:hover {\n    background: #ff9800;\n}\n\n.button {\n    color:black;\n    height:15px;\n    width:35px;\n    line-height: 15px;\n    font-size: x-small;\n    margin:2px; \n\n}\n\n\n.buttons {\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n\n}\n\n.trashIt, .finished, .exitEditor{\n    cursor: pointer;\n}\n\n\n.projectTypeText {\n    position:relative;\n    bottom:2px;\n}\n\n.addBoarderButton {\n    background:0;\n    width:100%;\n    border:0;\n    margin-top: 5px;\n    height:20px;\n    cursor:pointer;\n}\n\n.addBoarderButton:hover {\n    background:rgb(178, 178, 178);\n}\n\n\n\n.addBoarderTextBox {\n    font-family: 'Roboto', sans-serif;\n    border:0;\n    margin-top:5px;\n    height:20px;\n    width:220px;\n}\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n.editBoard, .deleteBoard {\n    width:20px;\n}\n\n.editExampleIcons {\n\n    height:25px;\n    \n    display:flex;\n\n\n}\n\n.emptyrow {\n   \n    height:25px;\n    width:100%;\n    text-indent: -9999px;\n    \n}\n\n.editBoard, .deleteBoard {\n    margin-left:10px;\n\n\n}\n\n.boardtextBox {\n    font-family: 'Roboto', sans-serif;\n    text-align: center;\n    font-size: large;\n    width:100%;\n    height:20px;\n    border:0;\n    background:none;\n    \n \n}\n\n.boardTextEditor {\n    background:rgb(215, 213, 213);\n    position:relative;\n    z-index:1;\n    margin-top:10px;\n    margin-bottom:10px;\n    width:100%;\n\n\n\n    justify-content:center;\n    display:flex;\n\n\n \n\n}\n\n\n.changeBoardTitleButton {\n    cursor: pointer;\n}\n\n\n@media only screen and (max-width: 300px){\n\n    .editExampleIcons {\n        height:15px;\n    }\n\n    .emptyrow {\n        height:15px;\n    }\n\n    .deleteBoard, .editBoard {\n        width:12px;\n    }\n\n    .addBoarderButton {\n    \n        height: 10px;\n        font-size: 12px;\n    }\n\n\n\n    .board{\n        width:185px;\n    }\n\n    .taskLabel {\n        font-size:xx-small\n    }\n\n    .edit, .notEdit {\n\n        width:10px;\n        \n\n    }\n\n    .generalText {\n        font-size:6px;\n        \n    }\n\n    \n    .exampleBoardText {\n        word-wrap: break-word;\n        font-size: x-small;\n    }\n\n    .boardtextBox {\n        font-size: x-small;\n        height:12px;\n    }\n\n    .addBoard {\n    \n        width:185px;\n      \n    }\n    .changeBoardTitleButton {\n        font-size: x-small;\n    }\n\n    .addBoardText {\n        font-size:x-small;\n    }\n\n    .addBoarderTextBox {\n        height:12px;\n        font-size: xx-small;\n        width:160px;\n    }\n    \n    .addBoarderButton {\n        font-size: x-small;\n    }\n\n    .task, .notTask {\n        margin:5px; \n    }\n    .circleIcon {\n        width:5px;\n        height:5px\n\n    }\n\n    .circleIcon {\n        border: 2px solid black;\n    }\n\n    .taskHolderText, .dateText, .buttonText {\n        font-size:xx-small;\n        \n    }\n\n    .taskTools {\n        \n        padding-right:5px;\n        padding-left:5px;\n        margin-top:5px;\n\n    }\n\n    .taskTextBox {\n        width:80px;\n        height:12px;\n        font-size: xx-small;\n    }\n\n    .datePicker {\n        width:80px;\n        font-size: 6px;\n        height:12px;\n    }\n\n\n    \n    .high {\n        border: 3px solid red;\n    }\n\n    .medium {\n        border: 3px solid #ff9800;\n    }\n\n    .low {\n        border: 3px solid green;\n   \n    }\n\n    .task, .notTask {\n        border-left: 4px solid;\n       \n    }\n\n    .taskEditor {\n        border-left:  4px solid;\n    }\n\n\n\n\n    .button {\n\n        height:10px;\n        line-height: 10px;\n        width:20px;\n        font-size: 6px;\n    }\n\n    .editTools {\n        margin-left: 30px;\n    }\n\n    .trashIt, .finished, .exitEditor {\n        width:15px;\n\n    }\n\n    .taskAdder {\n        font-size: xx-small;\n    }\n\n\n\n}\n\n.task, .notTask {\n    border-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/board.css"],"names":[],"mappings":"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","sourcesContent":["/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n  }\n\n\n\n\n\n  .pageContent {\n    display:flex;\n    flex-basis: auto;\n    overflow-y: hidden;\n    height:100%;\n    overflow-x: auto;\n}\n\n\n\n\n\n.addBoard {\n    width: 250px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    background:rgb(198, 198, 198);\n    margin:10px;\n    padding-bottom:10px;\n    \n  \n}\n\n\n\n\n\ninput {\n    outline: none;\n}\n\n\n.boardContent {\n\n    font-family: 'Roboto', sans-serif;\n    overflow-y: auto;\n    overflow-x: hidden;\n    flex-shrink: 0;\n}\n\n.board {\n    position: relative;\n    text-align:center;\n    background:rgb(198, 198, 198);\n    width: 290px;\n    margin:10px;\n\n\n    \n    padding-bottom:5px;\n}\n\n.boardOverlay {\n    background:rgba(0, 0, 0, 0.299);\n    position:absolute;\n    width:100%;\n    height:100%;\n    top:0;\n    z-index:1;\n    display:none;\n}\n\n.deleteBoard, .editBoard {\n    cursor: pointer;\n}\n\n\n.taskHolder {\n\n    display:flex;\n    align-items:center;\n}\n\n.taskTextBox {\n    width:135px;\n}\n.exampleBoardText {\n    position:relative;\n    top:4px;\n    font-size: large\n}\n\n\n.addBoardText {\n    margin-top:5px;\n    font-size: large;\n\n\n}\n\n\n\n.task, .notTask{\n    background:rgb(237, 230, 230);\n    border-left: 8px solid;\n    margin:10px;\n}\n\n.taskTools {\n    display:flex;\n    justify-content:space-between;\n    padding-left:10px;\n    padding-right:10px;\n    margin-top:10px;\n\n}\n.tools {\n    display:flex;\n}\n\n\n.taskLabel {\n    position: relative;\n    top:5px;\n    word-wrap: break-word;\n    margin-bottom:10px;\n    font-size: smaller;\n\n    border: 0;\n\n}\n.generalText {\n    font-size:10px;\n    margin-right: 20px;\n    word-wrap: break-word;\n\n}\n\n.generalTextHolder {\n    display:flex;\n}\n\n\n\n\n.circleIcon {\n    width:10px;\n    height:10px;\n    border-radius:20px;\n    border: 3px solid black;\n    cursor:pointer;\n}\n.edit, .notEdit{\n    width:20px;\n    cursor:pointer;\n    margin-right:6px;\n}\n\n.circleIcon:hover {\n    background:black;\n}\n\n\n\n.taskAdder {\n    margin-top:10px;\n}\n\n\n.taskAdder:hover {\n   cursor:pointer;\n   background:rgb(178, 178, 178);\n}\n\n\n\n\n\n\n\n\n.priority {\n    display:flex;\n    margin:5px;\n\n}\n.editTools {\n    display:flex;\n    width:50px;\n\n}\n.dateTool {\n    margin:5px;\n    margin-right:14px;\n    display:flex;\n}\n.taskTextBox {\n    height:20px;\n    font-family: 'Roboto', sans-serif;\n    margin:5px;\n}\n\n.editToolHolder {\n\n    display:flex;\n    justify-content:space-between;\n    \n}\n\n.buttons {\n    margin-left: 5px;\n}\n\n.datePicker {\n    margin-left:5px;\n    width:135px;\n    height:20px;\n    border:0;\n}\n\n\n\n.taskEditor {\n    background: rgb(237, 230, 230);\n    margin:10px;\n    margin-left:20px;\n    display:flex;\n    align-items: center;\n    border-left: 8px solid;\n    flex-direction: column;\n}\n\n.error {\n    color:rgb(197, 63, 63);\n}\n\n\n.taskTextBox{\n    border:0;\n    margin:5px;\n\n}\n\n\n\n\n.buttons .button {\n\n    cursor: pointer;\n}\n\n.high {\n    border:5px solid red;\n}\n\n.medium {\n    border: 5px solid #ff9800;\n}\n\n\n.notTask {\n    \n     text-decoration: line-through; \n     color:grey; \n } \n\n.notEdit {\n    filter: invert(20%) sepia(10%) saturate(2076%) hue-rotate(86deg) brightness(118%) contrast(10%);\n}\n\n\n\n.low {\n\n    border:5px solid green;\n}\n\n.low:hover {\n    background:green;\n}\n\n.high:hover {\n    background:red;\n}\n\n.medium:hover {\n    background: #ff9800;\n}\n\n.button {\n    color:black;\n    height:15px;\n    width:35px;\n    line-height: 15px;\n    font-size: x-small;\n    margin:2px; \n\n}\n\n\n.buttons {\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n\n}\n\n.trashIt, .finished, .exitEditor{\n    cursor: pointer;\n}\n\n\n.projectTypeText {\n    position:relative;\n    bottom:2px;\n}\n\n.addBoarderButton {\n    background:0;\n    width:100%;\n    border:0;\n    margin-top: 5px;\n    height:20px;\n    cursor:pointer;\n}\n\n.addBoarderButton:hover {\n    background:rgb(178, 178, 178);\n}\n\n\n\n.addBoarderTextBox {\n    font-family: 'Roboto', sans-serif;\n    border:0;\n    margin-top:5px;\n    height:20px;\n    width:220px;\n}\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(../images/hamburgerMenu.svg);\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n.editBoard, .deleteBoard {\n    width:20px;\n}\n\n.editExampleIcons {\n\n    height:25px;\n    \n    display:flex;\n\n\n}\n\n.emptyrow {\n   \n    height:25px;\n    width:100%;\n    text-indent: -9999px;\n    \n}\n\n.editBoard, .deleteBoard {\n    margin-left:10px;\n\n\n}\n\n.boardtextBox {\n    font-family: 'Roboto', sans-serif;\n    text-align: center;\n    font-size: large;\n    width:100%;\n    height:20px;\n    border:0;\n    background:none;\n    \n \n}\n\n.boardTextEditor {\n    background:rgb(215, 213, 213);\n    position:relative;\n    z-index:1;\n    margin-top:10px;\n    margin-bottom:10px;\n    width:100%;\n\n\n\n    justify-content:center;\n    display:flex;\n\n\n \n\n}\n\n\n.changeBoardTitleButton {\n    cursor: pointer;\n}\n\n\n@media only screen and (max-width: 300px){\n\n    .editExampleIcons {\n        height:15px;\n    }\n\n    .emptyrow {\n        height:15px;\n    }\n\n    .deleteBoard, .editBoard {\n        width:12px;\n    }\n\n    .addBoarderButton {\n    \n        height: 10px;\n        font-size: 12px;\n    }\n\n\n\n    .board{\n        width:185px;\n    }\n\n    .taskLabel {\n        font-size:xx-small\n    }\n\n    .edit, .notEdit {\n\n        width:10px;\n        \n\n    }\n\n    .generalText {\n        font-size:6px;\n        \n    }\n\n    \n    .exampleBoardText {\n        word-wrap: break-word;\n        font-size: x-small;\n    }\n\n    .boardtextBox {\n        font-size: x-small;\n        height:12px;\n    }\n\n    .addBoard {\n    \n        width:185px;\n      \n    }\n    .changeBoardTitleButton {\n        font-size: x-small;\n    }\n\n    .addBoardText {\n        font-size:x-small;\n    }\n\n    .addBoarderTextBox {\n        height:12px;\n        font-size: xx-small;\n        width:160px;\n    }\n    \n    .addBoarderButton {\n        font-size: x-small;\n    }\n\n    .task, .notTask {\n        margin:5px; \n    }\n    .circleIcon {\n        width:5px;\n        height:5px\n\n    }\n\n    .circleIcon {\n        border: 2px solid black;\n    }\n\n    .taskHolderText, .dateText, .buttonText {\n        font-size:xx-small;\n        \n    }\n\n    .taskTools {\n        \n        padding-right:5px;\n        padding-left:5px;\n        margin-top:5px;\n\n    }\n\n    .taskTextBox {\n        width:80px;\n        height:12px;\n        font-size: xx-small;\n    }\n\n    .datePicker {\n        width:80px;\n        font-size: 6px;\n        height:12px;\n    }\n\n\n    \n    .high {\n        border: 3px solid red;\n    }\n\n    .medium {\n        border: 3px solid #ff9800;\n    }\n\n    .low {\n        border: 3px solid green;\n   \n    }\n\n    .task, .notTask {\n        border-left: 4px solid;\n       \n    }\n\n    .taskEditor {\n        border-left:  4px solid;\n    }\n\n\n\n\n    .button {\n\n        height:10px;\n        line-height: 10px;\n        width:20px;\n        font-size: 6px;\n    }\n\n    .editTools {\n        margin-left: 30px;\n    }\n\n    .trashIt, .finished, .exitEditor {\n        width:15px;\n\n    }\n\n    .taskAdder {\n        font-size: xx-small;\n    }\n\n\n\n}\n\n.task, .notTask {\n    border-color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/navigation.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/navigation.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v29-latin-regular.eot */ "./src/fonts/roboto-v29-latin-regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v29-latin-regular.woff2 */ "./src/fonts/roboto-v29-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v29-latin-regular.woff */ "./src/fonts/roboto-v29-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v29-latin-regular.ttf */ "./src/fonts/roboto-v29-latin-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/roboto-v29-latin-regular.svg */ "./src/fonts/roboto-v29-latin-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/cutive-mono-v9-latin-regular.eot */ "./src/fonts/cutive-mono-v9-latin-regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/cutive-mono-v9-latin-regular.woff2 */ "./src/fonts/cutive-mono-v9-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/cutive-mono-v9-latin-regular.woff */ "./src/fonts/cutive-mono-v9-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/cutive-mono-v9-latin-regular.ttf */ "./src/fonts/cutive-mono-v9-latin-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/cutive-mono-v9-latin-regular.svg */ "./src/fonts/cutive-mono-v9-latin-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hamburgerMenu.svg */ "./src/images/hamburgerMenu.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: "#Roboto" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___, { hash: "#CutiveMono" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n  }\n\n  /* cutive-mono-regular - latin */\n@font-face {\n    font-family: 'Cutive Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Legacy iOS */\n  }\n\n\n  .navigation {\n    width:250px;\n    flex-shrink: 0;\n    font-family: 'Roboto', sans-serif;\n    background:rgb(19, 75, 205);\n    display:block;\n    overflow:auto;\n\n\n}\n\n.projectButton, .upComingButton {\n\n    height:30px;\n    line-height:28px;\n\n    width:100%;\n\n    font-size: small;\n\n    \n    \n}\n\n.deleteItem, .editProject {\n    cursor: pointer;\n}\n\n.mobileMenu {\n    display:none;\n}\n\n.listTitle, .projectText, .plusSign, .deleteAllTaskText {\n    font-family: 'Cutive Mono', monospace;\n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n    cursor:pointer;\n    text-align: center;\n}\n\n.projectTaskHolder {\n    width:100%;\n    z-index:3;\n}\n\n.projectContainer {\n    white-space: nowrap;\n    width:75%;\n    text-align: center;\n\n}\n\n.projectContainerText {\n    cursor: pointer;\n}\n\n.projectContainer p {\n    margin-right:40px;\n}\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n.wholeOverlay {\n    background:none;\n    position:absolute;\n    height:100%;\n    width:100%;\n    z-index:3;\n    cursor: pointer;\n    display:none;\n \n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n\n    text-align: center;\n}\n\n\n.projectContainer {\n    width:75%;\n    text-align: center;\n\n}\n\n\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n\n\n.editProjectButton{\n\n    width:100%;\n    display:flex;\n    z-index:3;\n \n    justify-content:flex-end;\n    background:rgb(22, 83, 227);\n \n\n \n }\n \n \n .addProjectLabel {\n     line-height: 28px;\n     position:relative;\n     right:3px;\n\n     \n     cursor: pointer;\n \n \n }\n \n .editText {\n     background:none;\n \n     color:white;\n     outline:none;\n     border:none;\n     height:30px;\n     margin-right:5px;\n    font-size:small;\n }\n \n\n .elements{\n    margin-top: 20px;\n    color:white;\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n\n\n}\n\n.plusSign {\n    margin-left: 5px;\n}\n\n.projectButtonHover:hover, .projectAdder:hover{\n    background:rgb(22, 83, 227);\n    \n}\n\n \n \n \n.editText::placeholder {\n     \n \n     color:white;\n}\n \n \n .overlay {\n     background:rgba(0, 0, 0, 0.299);\n     height:100%;\n     width:250px;\n     z-index:1;\n     \n     text-indent: -9999px;\n     position:absolute;\n     top:0px;\n\n\n     display:none;\n \n   \n \n}\n\n.projectAdder {\n\n    margin-top:20px;\n    margin-bottom: 20px;\n    justify-content: center;\n    display:flex;\n    cursor:pointer;\n\n    width:100%\n    \n}\n\n\n\n.exit {\n    display:none;\n\n}\n\n\n\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n\n@media only screen and (max-width:550px){\n\n \n    .overlay {\n        width:100%;\n        display:none;\n    }\n\n    .navigation {\n        display:none;\n    }\n\n\n\n    .mobileMenu {\n        display:flex;\n    }\n\n    .pageContent {\n        display:none;\n    }\n\n    .sections {\n        flex-direction: column;\n    }\n\n    .navigation {\n        width:100%;\n        height:100%;\n        \n        \n       \n    }\n\n    .projectButton{\n        justify-content: center;\n    }\n\n    .projectContainer {\n        cursor:pointer;\n        justify-content: flex-start;\n    }\n\n    .projectContainer p {\n    \n        text-align: center;\n        margin-right:50px;\n    }\n    .projectTools {\n        width:15%;\n\n    }\n\n    .editProjectButton{\n        justify-content: center;\n    }\n\n    .editText{\n        margin-left: 100px;\n\n    }\n\n\n\n\n\n    .exit {\n        display:block;\n        text-align: left;\n        color:white;\n        margin:10px;\n        cursor: pointer;\n    }\n}\n\n@media only screen and (max-width: 350px){\n    .deleteItem, .editProject {\n        width:15px;\n    }\n}\n\n@media only screen and (max-width: 225px){\n    .deleteItem, .editProject {\n        width:11.5px;\n    }\n}\n\n@media only screen and (max-width:203px){\n    .listTitle {\n        font-size: x-large;\n    }\n\n\n\n}\n\n\n\n@media only screen and (max-width: 300px){\n\n\n\n    .projectContainer p{\n        margin-right:30px;\n    }\n\n\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/navigation.css"],"names":[],"mappings":"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","sourcesContent":["\n\n/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n  }\n\n  /* cutive-mono-regular - latin */\n@font-face {\n    font-family: 'Cutive Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/cutive-mono-v9-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/cutive-mono-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/cutive-mono-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/cutive-mono-v9-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/cutive-mono-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/cutive-mono-v9-latin-regular.svg#CutiveMono') format('svg'); /* Legacy iOS */\n  }\n\n\n  .navigation {\n    width:250px;\n    flex-shrink: 0;\n    font-family: 'Roboto', sans-serif;\n    background:rgb(19, 75, 205);\n    display:block;\n    overflow:auto;\n\n\n}\n\n.projectButton, .upComingButton {\n\n    height:30px;\n    line-height:28px;\n\n    width:100%;\n\n    font-size: small;\n\n    \n    \n}\n\n.deleteItem, .editProject {\n    cursor: pointer;\n}\n\n.mobileMenu {\n    display:none;\n}\n\n.listTitle, .projectText, .plusSign, .deleteAllTaskText {\n    font-family: 'Cutive Mono', monospace;\n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n    cursor:pointer;\n    text-align: center;\n}\n\n.projectTaskHolder {\n    width:100%;\n    z-index:3;\n}\n\n.projectContainer {\n    white-space: nowrap;\n    width:75%;\n    text-align: center;\n\n}\n\n.projectContainerText {\n    cursor: pointer;\n}\n\n.projectContainer p {\n    margin-right:40px;\n}\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n.wholeOverlay {\n    background:none;\n    position:absolute;\n    height:100%;\n    width:100%;\n    z-index:3;\n    cursor: pointer;\n    display:none;\n \n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n\n    text-align: center;\n}\n\n\n.projectContainer {\n    width:75%;\n    text-align: center;\n\n}\n\n\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n\n\n.editProjectButton{\n\n    width:100%;\n    display:flex;\n    z-index:3;\n \n    justify-content:flex-end;\n    background:rgb(22, 83, 227);\n \n\n \n }\n \n \n .addProjectLabel {\n     line-height: 28px;\n     position:relative;\n     right:3px;\n\n     \n     cursor: pointer;\n \n \n }\n \n .editText {\n     background:none;\n \n     color:white;\n     outline:none;\n     border:none;\n     height:30px;\n     margin-right:5px;\n    font-size:small;\n }\n \n\n .elements{\n    margin-top: 20px;\n    color:white;\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n\n\n}\n\n.plusSign {\n    margin-left: 5px;\n}\n\n.projectButtonHover:hover, .projectAdder:hover{\n    background:rgb(22, 83, 227);\n    \n}\n\n \n \n \n.editText::placeholder {\n     \n \n     color:white;\n}\n \n \n .overlay {\n     background:rgba(0, 0, 0, 0.299);\n     height:100%;\n     width:250px;\n     z-index:1;\n     \n     text-indent: -9999px;\n     position:absolute;\n     top:0px;\n\n\n     display:none;\n \n   \n \n}\n\n.projectAdder {\n\n    margin-top:20px;\n    margin-bottom: 20px;\n    justify-content: center;\n    display:flex;\n    cursor:pointer;\n\n    width:100%\n    \n}\n\n\n\n.exit {\n    display:none;\n\n}\n\n\n\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(../images/hamburgerMenu.svg);\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n\n@media only screen and (max-width:550px){\n\n \n    .overlay {\n        width:100%;\n        display:none;\n    }\n\n    .navigation {\n        display:none;\n    }\n\n\n\n    .mobileMenu {\n        display:flex;\n    }\n\n    .pageContent {\n        display:none;\n    }\n\n    .sections {\n        flex-direction: column;\n    }\n\n    .navigation {\n        width:100%;\n        height:100%;\n        \n        \n       \n    }\n\n    .projectButton{\n        justify-content: center;\n    }\n\n    .projectContainer {\n        cursor:pointer;\n        justify-content: flex-start;\n    }\n\n    .projectContainer p {\n    \n        text-align: center;\n        margin-right:50px;\n    }\n    .projectTools {\n        width:15%;\n\n    }\n\n    .editProjectButton{\n        justify-content: center;\n    }\n\n    .editText{\n        margin-left: 100px;\n\n    }\n\n\n\n\n\n    .exit {\n        display:block;\n        text-align: left;\n        color:white;\n        margin:10px;\n        cursor: pointer;\n    }\n}\n\n@media only screen and (max-width: 350px){\n    .deleteItem, .editProject {\n        width:15px;\n    }\n}\n\n@media only screen and (max-width: 225px){\n    .deleteItem, .editProject {\n        width:11.5px;\n    }\n}\n\n@media only screen and (max-width:203px){\n    .listTitle {\n        font-size: x-large;\n    }\n\n\n\n}\n\n\n\n@media only screen and (max-width: 300px){\n\n\n\n    .projectContainer p{\n        margin-right:30px;\n    }\n\n\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin:0;\n    padding:0;\n    box-sizing: none;\n}\n.sections {\n    display:flex;\n    background:rgb(236, 236, 255);\n    height:100vh;\n}\n\n.errorMessage {\n\n    position:absolute;\n    background:rgba(0, 0, 0, 0.299);\n\n    height:100%;\n    width:100%;\n    z-index:30;\n    display:none;\n\n    justify-content:center;\n    align-items:center;\n    \n}\n\n.messageHolder {\n    font-family: 'Roboto', sans-serif;\n    background:silver;\n    height:150px;\n    width:200px;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n\n\n    align-items: center;\n\n\n}\n\n.contentHolder {\n\n    text-align: center;\n    width:200px;\n}\n\n.exitButton {\n    cursor: pointer;\n    width:100px;\n    height:30px;\n    border:0;\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    background:royalblue;\n\n}\n\n.exitButton:hover{\n    background:rgb(55, 88, 188);\n}\n\n\n.conteentHolder h2, .conteentHolder p, .exitButton {\n    margin:10px;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;;IAEI,iBAAiB;IACjB,+BAA+B;;IAE/B,WAAW;IACX,UAAU;IACV,UAAU;IACV,YAAY;;IAEZ,sBAAsB;IACtB,kBAAkB;;AAEtB;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;;;IAGvB,mBAAmB;;;AAGvB;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,WAAW;IACX,WAAW;IACX,QAAQ;IACR,WAAW;IACX,iCAAiC;IACjC,oBAAoB;;AAExB;;AAEA;IACI,2BAA2B;AAC/B;;;AAGA;IACI,WAAW;AACf","sourcesContent":["* {\n    margin:0;\n    padding:0;\n    box-sizing: none;\n}\n.sections {\n    display:flex;\n    background:rgb(236, 236, 255);\n    height:100vh;\n}\n\n.errorMessage {\n\n    position:absolute;\n    background:rgba(0, 0, 0, 0.299);\n\n    height:100%;\n    width:100%;\n    z-index:30;\n    display:none;\n\n    justify-content:center;\n    align-items:center;\n    \n}\n\n.messageHolder {\n    font-family: 'Roboto', sans-serif;\n    background:silver;\n    height:150px;\n    width:200px;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n\n\n    align-items: center;\n\n\n}\n\n.contentHolder {\n\n    text-align: center;\n    width:200px;\n}\n\n.exitButton {\n    cursor: pointer;\n    width:100px;\n    height:30px;\n    border:0;\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    background:royalblue;\n\n}\n\n.exitButton:hover{\n    background:rgb(55, 88, 188);\n}\n\n\n.conteentHolder h2, .conteentHolder p, .exitButton {\n    margin:10px;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDayOfYear/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/getDayOfYear/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfYear/index.js */ "./node_modules/date-fns/esm/startOfYear/index.js");
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */

function getDayOfYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, (0,_startOfYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date));
  var dayOfYear = diff + 1;
  return dayOfYear;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challange you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfYear/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfYear/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */

function startOfYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var cleanDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/board.css":
/*!******************************!*\
  !*** ./src/styles/board.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./board.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/board.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/navigation.css":
/*!***********************************!*\
  !*** ./src/styles/navigation.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navigation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navigation.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/navigation.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navigation_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navigation_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navigation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navigation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/cutive-mono-v9-latin-regular.eot":
/*!****************************************************!*\
  !*** ./src/fonts/cutive-mono-v9-latin-regular.eot ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96db525e4f906a8db674.eot";

/***/ }),

/***/ "./src/fonts/cutive-mono-v9-latin-regular.svg":
/*!****************************************************!*\
  !*** ./src/fonts/cutive-mono-v9-latin-regular.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "818644c910b4351772af.svg";

/***/ }),

/***/ "./src/fonts/cutive-mono-v9-latin-regular.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/cutive-mono-v9-latin-regular.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6107da9bc9e41b98a571.ttf";

/***/ }),

/***/ "./src/fonts/cutive-mono-v9-latin-regular.woff":
/*!*****************************************************!*\
  !*** ./src/fonts/cutive-mono-v9-latin-regular.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9bdb463e84f42301d81.woff";

/***/ }),

/***/ "./src/fonts/cutive-mono-v9-latin-regular.woff2":
/*!******************************************************!*\
  !*** ./src/fonts/cutive-mono-v9-latin-regular.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b77dc1bbf6ed398f70b.woff2";

/***/ }),

/***/ "./src/fonts/roboto-v29-latin-regular.eot":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v29-latin-regular.eot ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "160fbc69802809bdb0ef.eot";

/***/ }),

/***/ "./src/fonts/roboto-v29-latin-regular.svg":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v29-latin-regular.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f862c8ba4ed785461ee.svg";

/***/ }),

/***/ "./src/fonts/roboto-v29-latin-regular.ttf":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v29-latin-regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69358f64aea6fd09499a.ttf";

/***/ }),

/***/ "./src/fonts/roboto-v29-latin-regular.woff":
/*!*************************************************!*\
  !*** ./src/fonts/roboto-v29-latin-regular.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b78ea3bc4f00e508f01.woff";

/***/ }),

/***/ "./src/fonts/roboto-v29-latin-regular.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/roboto-v29-latin-regular.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4673b4537a84c7f7a130.woff2";

/***/ }),

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

/***/ "./src/images/hamburgerMenu.svg":
/*!**************************************!*\
  !*** ./src/images/hamburgerMenu.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8235882574e17fb850f.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/scripts/nav.js");
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");
/* harmony import */ var _mobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile.js */ "./src/scripts/mobile.js");
//if you want to clear data write localStorage.clear() in the console



(0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.createDomElements)(); //mobile.js, content.js,  nav.js all call there class before we have activated
//any of the elements so makesure to set elements once has everything activated
//or else you will get an error.
// content does not acess navigation or mobile so you do not have to worry that
// much about content however navigation activates before mobile.

_nav_js__WEBPACK_IMPORTED_MODULE_0__.navigation.activateNavigation();
_mobile_js__WEBPACK_IMPORTED_MODULE_2__.mobile.activateMobileMenu();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGNBQWMsV0FBVyxLQUFLLFVBQVUsUUFBUSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sS0FBSyxVQUFVLGNBQWMsU0FBUyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxZQUFZLEtBQUssS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLGNBQWMsS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsV0FBVyxTQUFTLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFNBQVMsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGVBQWUsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxjQUFjLFFBQVEsS0FBSyxXQUFXLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsWUFBWSxlQUFlLFFBQVEsS0FBSyxVQUFVLFFBQVEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxTQUFTLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVB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QUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLHdCQUF3Qiw0Q0FBNEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVEsaUVBQWlFO0FBQ3BGLFdBQVcsZUFBZTtBQUMxQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWSx5R0FBeUc7QUFDakksWUFBWSxZQUFZLHFHQUFxRztBQUM3SCxZQUFZLFlBQVksK0dBQStHO0FBQ3ZJLFlBQVksWUFBWSxpSEFBaUg7QUFDekksWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZDtBQUNBO0FBQ0EsaUNBQWlDLDhEQUFhO0FBQzlDO0FBQ0EsK0VBQStFLG1FQUFTO0FBQ3hGLHFHQUFxRyxtRUFBUyxpQ0FBaUM7O0FBRS9JO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RCxtRUFBUztBQUN0RSwwRUFBMEUsbUVBQVMsd0JBQXdCOztBQUUzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsNERBQU07O0FBRTNCLE9BQU8sNkRBQU87QUFDZDtBQUNBLElBQUk7QUFDSjtBQUNBOzs7QUFHQSx1QkFBdUIseUZBQStCO0FBQ3RELGdCQUFnQixxRUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDJFQUFjO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQix1RUFBVTs7QUFFOUI7QUFDQSxrREFBa0QsdUZBQXdCO0FBQzFFLFFBQVEsa0ZBQW1CO0FBQzNCOztBQUVBLG1EQUFtRCx3RkFBeUI7QUFDNUUsUUFBUSxrRkFBbUI7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hid0M7QUFDVTtBQUMwQjtBQUNuQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixhQUFhLDhFQUF3QixPQUFPLGlFQUFXO0FBQ3ZEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEN5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2dEO0FBQ1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCwyQkFBMkIsZ0VBQVU7QUFDckMsNEJBQTRCLGdFQUFVO0FBQ3RDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmtEO0FBQ087O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLDRCQUE0QixpRUFBVztBQUN2Qyw2QkFBNkIsaUVBQVc7QUFDeEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDZ0Q7QUFDUzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxpQkFBaUI7QUFDckU7QUFDQTtBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLFNBQVMsZ0VBQVU7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QzhDO0FBQ1c7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsU0FBUywrREFBUztBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQndDO0FBQ0E7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7O0FBRWQsT0FBTyw0REFBTTtBQUNiO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdGQUF3Rjs7QUFFeEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9DZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSix5Q0FBeUMsT0FBTztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDdkY0QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTyxPQUFPLE1BQU07QUFDL0IsV0FBVyxPQUFPLE9BQU8sTUFBTTtBQUMvQixhQUFhLE1BQU0sSUFBSSxNQUFNO0FBQzdCLFlBQVksTUFBTSxJQUFJLE1BQU07QUFDNUI7QUFDQTtBQUNBLFFBQVEsMkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsUUFBUSwyRUFBaUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSCxZQUFZLDJFQUFpQjtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNqQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyx5RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMseUVBQWU7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSx5RUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSndDO0FBQ2M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZFQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sc0VBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyxzRUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLHNFQUFZO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sc0VBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSxzRUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR3dDO0FBQ1I7QUFDUTtBQUNaO0FBQ047O0FBRTFDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQWM7QUFDaEMsY0FBYyxnRUFBVTtBQUN4QixrQkFBa0Isb0VBQWM7QUFDaEMsWUFBWSw4REFBUTtBQUNwQixTQUFTLDJEQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JtQjtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QndDO0FBQ1c7QUFDTTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxpQkFBaUI7QUFDbEY7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsbUVBQVM7QUFDdEUsMEVBQTBFLG1FQUFTLHdCQUF3Qjs7QUFFM0c7QUFDQTtBQUNBOztBQUVBLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckR3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxrQkFBa0IsNERBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ21EO0FBQ087QUFDRDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGVBQWUsbUVBQVM7QUFDeEIsU0FBUyxxRUFBZTtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHdLQUF3Szs7QUFFeEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUEyRztBQUMzRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDJGQUFPOzs7O0FBSXFEO0FBQzdFLE9BQU8saUVBQWUsMkZBQU8sSUFBSSxrR0FBYyxHQUFHLGtHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQXVRLGlFQUFpQixJQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBdEgsa0VBQUE7QUFDQTRDLGlFQUFBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9jb250ZW50RWZmZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL2VsZW1lbnRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9wYWdlTGF5b3V0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvc2VuZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3RpbWVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvdWlFZmZlY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9ib2FyZC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL25hdmlnYXRpb24uY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvYm9hcmQuY3NzP2E2MWUiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL25hdmlnYXRpb24uY3NzPzgyMDIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFVwZGF0ZWRFbGVtZW50c30gZnJvbSBcIi4vcGFnZUxheW91dC5qc1wiXG5cbmNvbnN0IGFzc2lnblRvb2xzID0gKGVsZW1lbnRzLGluZGV4LGJvYXJkSW5kZXgpID0+IHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGNoaWxkRWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJ0b29sc1wiKXtcbiAgICAgICAgICAgIGxldCB0b29sc0NoaWxkcmVuID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgdG9vbHNDaGlsZHJlbi5mb3JFYWNoKHRvb2xFbGVtZW50ID0+IFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b29sRWxlbWVudC50YXNrSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB0b29sRWxlbWVudC5ib2FyZEluZGV4ID0gYm9hcmRJbmRleDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuXG5cbn1cblxuY29uc3QgYXNzaWduVGFza0luZGV4ID0gKGVsZW1lbnQsYm9hcmRJbmRleCkgPT4ge1xuICAgIGxldCB0YXNrSW5kZXggPTA7XG4gICAgZWxlbWVudC5mb3JFYWNoKGNoaWxkRWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJ0YXNrXCIgfHxcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcIm5vdFRhc2tcIlxuICAgICAgICApe1xuICAgICAgICAgICAgbGV0IHRhc2tDaGlsZHJlbiA9IEFycmF5LmZyb20oY2hpbGRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIHRhc2tDaGlsZHJlbi5mb3JFYWNoKHRhc2tDaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tDaGlsZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInRhc2tUb29sc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tUb29sc0NoaWxkcmVuID0gQXJyYXkuZnJvbSh0YXNrQ2hpbGQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25Ub29scyh0YXNrVG9vbHNDaGlsZHJlbix0YXNrSW5kZXgsYm9hcmRJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRhc2tJbmRleCsrXG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgXG5cblxuXG59XG5cblxuY29uc3QgYXNzaWduQm9hcmRJY29ucyA9IChlbGVtZW50LCBjdXJyZW50SW5kZXgpID0+ICB7XG4gICAgbGV0IGJvYXJkID0gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKTtcbiAgICBib2FyZC5mb3JFYWNoKGNoaWxkRWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJlZGl0RXhhbXBsZUljb25zXCIpe1xuICAgICAgICAgICAgY2hpbGRFbGVtZW50LmJvYXJkSW5kZXggPSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICBsZXQgZWRpdEV4YW1wbGVJY29ucyA9IEFycmF5LmZyb20oY2hpbGRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGVkaXRFeGFtcGxlSWNvbnMuZm9yRWFjaChpdGVtRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbUVsZW1lbnQuYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJ0YXNrQWRkZXJcIil7XG4gICAgICAgICAgICBsZXQgdGFza1BhcmFncmFwaCA9IEFycmF5LmZyb20oY2hpbGRFbGVtZW50LmNoaWxkcmVuKVswXTtcbiAgICAgICAgICAgIHRhc2tQYXJhZ3JhcGguYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZEVsZW1lbnQuYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICB9KVxufVxuXG5cbmNvbnN0IGFzc2lnbkJvYXJkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IHBhZ2VDb250ZW50Q2hpbGRyZW4gPSBlbGVtZW50cy5wYWdlQ29udGVudENoaWxkcmVuO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgcGFnZUNvbnRlbnRDaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImJvYXJkQ29udGVudFwiKXtcbiAgICAgICAgICAgIGVsZW1lbnQuYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGxldCBib2FyZENvbnRlbnQgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgYm9hcmRDb250ZW50LmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRFbGVtZW50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYm9hcmRcIikgYXNzaWduQm9hcmRJY29ucyhjaGlsZEVsZW1lbnQsY3VycmVudEluZGV4KVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50SW5kZXggKys7XG4gICAgfSlcbn1cblxuZXhwb3J0IHthc3NpZ25Ub29scywgYXNzaWduVGFza0luZGV4LCBhc3NpZ25Cb2FyZEVsZW1lbnRzfTsiLCJcbmltcG9ydCB7cmVtb3ZlSXRlbSwgYWRkQmluZGluZ3MsIHJlbW92ZUJpbmRpbmdzLCBzZXRBcnJheSwgc2V0T2JqZWN0fSBmcm9tIFwiLi9lbGVtZW50RXZlbnRzLmpzXCJcbmltcG9ydCB7c2VuZH0gZnJvbSBcIi4vc2VuZC5qc1wiXG5pbXBvcnQgeyBnZXRJbml0aWFsRWxlbWVudHMsIGdldFVwZGF0ZWRFbGVtZW50cyB9IGZyb20gXCIuL3BhZ2VMYXlvdXQuanNcIjtcbmltcG9ydCB7Y3JlYXRlQm9hcmQsIGNyZWF0ZUFkZEJvYXJkLCBjcmVhdGVCb2FyZEVkaXRvciwgY3JlYXRlTGlzdEVkaXRvciwgY3JlYXRlVXBDb21pbmdCb2FyZCwgY3JlYXRlVGFza0FycmFuZ2VtZW50fSBmcm9tIFwiLi90ZW1wbGF0ZS5qc1wiO1xuaW1wb3J0IHthcHBseVRhc2tDaGFuZ2VzLCByZW1vdmVOYXZFbXB0aWVzLCBhZGRCb2FyZFRhc2tzIH0gZnJvbSBcIi4vY29udGVudEVmZmVjdHMuanNcIjtcblxuXG5pbXBvcnQge3JlbW92ZUJvYXJkT3ZlcmxheSwgYWRkQm9hcmRPdmVybGF5LCBzaGFkZUJ1dHRvbkNvbG9yLCBzZXRUYXNrRGF0ZX0gZnJvbSBcIi4vdWlFZmZlY3RzLmpzXCI7XG5pbXBvcnQge2ZpbmRCb2FyZFRleHRCb3gsIGdldEVsZW1lbnRCeUJvYXJkSW5kZXgsIGdldE9iamVjdFZhbHVlLCBjaGFuZ2VWYWx1ZVRvRGF0ZSxjcmVhdGVUYXNrVGVtcGxhdGUsIGdldFVwQ29taW5nVGFza3N9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiO1xuaW1wb3J0IHtyZW5kZXJUaW1lVGFza3N9IGZyb20gXCIuL3RpbWVzLmpzXCI7XG5pbXBvcnQgaXNUb2RheSBmcm9tICdkYXRlLWZucy9pc1RvZGF5J1xuaW1wb3J0IGlzVGhpc1dlZWsgZnJvbSAnZGF0ZS1mbnMvaXNUaGlzV2VlaydcblxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCB7Y2hlY2tTcGFjZXN9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiO1xuXG5cblxuXG5cblxuaW1wb3J0IHthc3NpZ25UYXNrSW5kZXgsIGFzc2lnbkJvYXJkRWxlbWVudHN9IGZyb20gXCIuL2Fzc2lnbi5qc1wiO1xuXG5cblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcblxuICAgIGxldCBzdGF0aWNMaXN0VGFza3MgPSBbXTtcbiAgICBsZXQgY2hhbmdlZExpc3RUYXNrcyA9IFtdOyBcblxuXG4gICAgbGV0IHRhc2tDaGFuZ2VzID0gW107XG5cbiAgICBsZXQgdXBjb21pbmdUYXNrcyA9IFtdXG5cbiAgICBsZXQgZGVsZXRlZFVwQ29taW5nSXRlbXMgPSBbXTtcblxuICAgIGxldCBpbmRleDtcbiAgICBsZXQgY3VycmVudEluZGV4O1xuICAgIGxldCBpc1VwQ29taW5nID0gZmFsc2U7XG5cbiAgICBsZXQgY2FuRGlzcnVwdCA9IGZhbHNlXG4gICAgbGV0IG5hbWU7XG4gICAgbGV0IGRvbSA9IGdldEluaXRpYWxFbGVtZW50cygpO1xuXG4gICAgY29uc3QgcmVtb3ZlQ29udGVudEJpbmRpbmdzID0gKGJvb2wpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmJvYXJkZXJCdXR0b24sIGFkZEJvYXJkVGFza3NDbGljayxcImNsaWNrXCIpO1xuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5kZWxldGVCb2FyZCxkZWxldGVCb2FyZCwgXCJjbGlja1wiKTtcbiAgICAgICAgcmVtb3ZlQmluZGluZ3MoZWxlbWVudHMuZWRpdEJvYXJkLGVkaXRCb2FyZCxcImNsaWNrXCIpO1xuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy50YXNrQWRkZXJzLCBhZGRMaXN0RWRpdG9yQ2xpY2ssIFwiY2xpY2tcIilcblxuICAgIH1cblxuICAgICBjb25zdCBhZGRDb250ZW50QmluZGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuXG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmJvYXJkZXJCdXR0b24sIGFkZEJvYXJkVGFza3NDbGljayxcImNsaWNrXCIpO1xuICAgICAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5kZWxldGVCb2FyZCxkZWxldGVCb2FyZCwgXCJjbGlja1wiKTtcbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMuZWRpdEJvYXJkLGVkaXRCb2FyZCxcImNsaWNrXCIpO1xuXG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLnRhc2tBZGRlcnMsIGFkZExpc3RFZGl0b3JDbGljaywgXCJjbGlja1wiKTtcblxuXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgY29uc3QgYWRkTGlzdEJpbmRpbmdzID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMuYnV0dG9uLCBzaGFkZUJ1dHRvbkNvbG9yQ2xpY2ssIFwiY2xpY2tcIilcbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMudHJhc2hJdCxkZWxldGVUYXNrLCBcImNsaWNrXCIpO1xuICAgICAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5maW5pc2hlZCxhZGRUYXNrQ2xpY2ssIFwiY2xpY2tcIik7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmVkaXQsIGVkaXRUYXNrLCBcImNsaWNrXCIpO1xuICAgICAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5jaXJjbGVJY29uLCBjcm9zc091dFRhc2ssIFwiY2xpY2tcIik7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmV4aXRFZGl0b3IsIGV4aXRMaXN0RWRpdG9yLCBcImNsaWNrXCIpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0JpbmRpbmdzID0gKCkgPT4ge1xuICAgICAgICBhZGRMaXN0QmluZGluZ3MoKTtcbiAgICAgICAgYWRkQ29udGVudEJpbmRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbW92ZVRhc2tCaW5kaW5ncyA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlTGlzdEJpbmRpbmdzKCk7XG4gICAgICAgIHJlbW92ZUNvbnRlbnRCaW5kaW5ncygpO1xuICAgIH1cblxuXG5cbiAgICBjb25zdCBhZGRDaGFuZ2VOYW1lQmluZGluZyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmNoYW5nZUJvYXJkVGl0bGVCdXR0b25zLCBjaGFuZ2VOYW1lLCBcImNsaWNrXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUxpc3RCaW5kaW5ncyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIFxuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5jaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucyxjaGFuZ2VOYW1lLCBcImNsaWNrXCIpO1xuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5idXR0b24sIHNoYWRlQnV0dG9uQ29sb3JDbGljaywgXCJjbGlja1wiKVxuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy50cmFzaEl0LGRlbGV0ZVRhc2ssIFwiY2xpY2tcIik7XG5cbiAgICAgICAgcmVtb3ZlQmluZGluZ3MoZWxlbWVudHMuZmluaXNoZWQsYWRkVGFza0NsaWNrLCBcImNsaWNrXCIpO1xuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5lZGl0LCBlZGl0VGFzaywgXCJjbGlja1wiKTtcbiAgICAgICAgcmVtb3ZlQmluZGluZ3MoZWxlbWVudHMuY2lyY2xlSWNvbiwgY3Jvc3NPdXRUYXNrLCBcImNsaWNrXCIpO1xuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5leGl0RWRpdG9yLCBleGl0TGlzdEVkaXRvciwgXCJjbGlja1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcm9zc091dER1cGxpY2F0ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBib2FyZC50YXNrcy5mb3JFYWNoKGNoaWxkVGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkVGFzay5uYXZJbmRleCA9PSB0YXNrLm5hdkluZGV4ICYmXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVGFzay5uYXZJbmRleCAhPSBcInVwY29taW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICBpZihjaGlsZFRhc2suYm9hcmRJbmRleCA9PSB0YXNrLmJvYXJkSW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVGFzay50YXNrSW5kZXggPT0gdGFzay50YXNrSW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRUYXNrLmNoZWNrZWQgPSB0YXNrLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDcm9zc091dEVkaXRvcihjaGlsZFRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZFRhc2submF2SW5kZXggPT0gXCJ1cGNvbWluZ1wiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2submF2SW5kZXggPT0gXCJ1cGNvbWluZ1wiXG4gICAgICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVGFzay50YXNrSW5kZXggPT0gdGFzay50YXNrSW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRUYXNrLmNoZWNrZWQgPSB0YXNrLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDcm9zc091dEVkaXRvcihjaGlsZFRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgY29uc3QgY2hlY2tDcm9zc091dEVkaXRvciA9IChuZXdUYXNrKSA9PiB7XG4gICAgICAgIGxldCBib2FyZENvdW50ZXIgPSAwO1xuICAgICAgICBsZXQgY2FuRWRpdCA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB0YXNrSW5kZXggPSBuZXdUYXNrLnRhc2tJbmRleDtcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSBuZXdUYXNrLmJvYXJkSW5kZXg7XG4gICAgICAgIGxldCBuYXZJbmRleCA9IG5ld1Rhc2submF2SW5kZXg7XG5cblxuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBsZXQgdGFza0NvdW50ZXIgPSAwO1xuICAgICAgICAgICAgYm9hcmQuY2hhbmdlZEJvYXJkTGlzdHMuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnRhc2tJbmRleCA9PSB0YXNrSW5kZXggJiZcbiAgICAgICAgICAgICAgICAgICAgdGFzay5ib2FyZEluZGV4ID09IGJvYXJkSW5kZXggJiYgdGFzay5uYXZJbmRleCA9PSBuYXZJbmRleFxuICAgICAgICAgICAgICAgICAgICApe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tJbmRleCA9ICB0YXNrQ291bnRlciArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9hcmRJbmRleCA9IGJvYXJkQ291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrSW5kZXggPD0gc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzLmxlbmd0aCAtIDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlZGl0b3IgPSBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHNbdGFza0luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWRpdG9yLmxpc3RFZGl0b3IpIGNhbkVkaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFza0NvdW50ZXIgKys7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYm9hcmRDb3VudGVyICsrO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY2FuRWRpdDtcbiAgICB9XG5cblxuXG4gICAgY29uc3QgcmVtb3ZlQ3Jvc3NPdXRFZGl0b3IgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgaW5kZXhlcyA9IGdldEluZGV4ZXMoKVxuICAgICAgICBpZiAoaW5kZXhlcyl7XG4gICAgICAgICAgICBpZiAoY2hlY2tDcm9zc091dEVkaXRvcih0YXNrKSl7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTGlzdEVkaXRvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBhZGRMaXN0RWRpdG9yVG9Dcm9zc091dFRhc2tzID0gKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgbGV0IGN1cnJlbnROYW1lID0gc2VuZC5yZXRyaWV2ZVRpdGxlKGluZGV4KTtcbiAgICAgICAgICAgIG5hbWUgPSBjdXJyZW50TmFtZTsgIFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VuZC5zZW5kRGF0YShzdGF0aWNMaXN0VGFza3MsaW5kZXgsbmFtZSk7ICBcbiAgICAgICAgICAgIHN0b3JhZ2Uuc3RvcmVEYXRhKCk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICBzZW5kVXBDb21pbmdDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyQm9hcmRMaXN0cygpO1xuICAgIH1cblxuXG5cbiAgICBjb25zdCBjcm9zc091dFRhc2s9IChldmVudCkgPT4ge1xuXG4gICAgICAgIGxldCB0YXNrSW5kZXggPSBldmVudC50YXJnZXQudGFza0luZGV4O1xuICAgICAgICBsZXQgYm9hcmRJbmRleCA9IGV2ZW50LnRhcmdldC5ib2FyZEluZGV4O1xuXG4gICAgICAgIGxldCB0YXNrID0gc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzW3Rhc2tJbmRleF07XG4gICAgICAgIHRhc2suY2hlY2tlZCA/IHRhc2suY2hlY2tlZCA9IGZhbHNlOiB0YXNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBsZXQgaW5kZXhlcyA9IGdldEluZGV4ZXMoKTtcblxuICAgICAgIGlmIChpc1VwQ29taW5nKSBjcm9zc091dER1cGxpY2F0ZVRhc2sodGFzayk7XG4gICAgICAgZWxzZSB7XG4gICAgICAgICAgIGlmKHR5cGVvZiBpbmRleGVzICE9IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgICAgbGV0IGJvYXJkSW5kZXgyID0gaW5kZXhlcy5ib2FyZEluZGV4O1xuICAgICAgICAgICAgbGV0IGxpc3RJbmRleCA9IGluZGV4ZXMubGlzdEluZGV4O1xuICAgICAgICAgICAgaWYgKGJvYXJkSW5kZXgyID09IGJvYXJkSW5kZXggJiYgbGlzdEluZGV4ID09IHRhc2tJbmRleCl7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTGlzdEVkaXRvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG5cbiAgICAgICB9XG5cbiAgICAgICBhZGRMaXN0RWRpdG9yVG9Dcm9zc091dFRhc2tzKCk7XG4gICAgfVxuXG5cblxuXG4gICAgIFxuICAgIFxuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICAoKSA9PiB7XG4gICAgICAgIGxldCBpbmRleGVzID0gZ2V0SW5kZXhlcygpO1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gaW5kZXhlcy5saXN0SW5kZXg7XG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gaW5kZXhlcy5ib2FyZEluZGV4O1xuICAgICAgICBsZXQgbmV3U3RhdGljTGlzdFRhc2tzID0gc2V0T2JqZWN0KHN0YXRpY0xpc3RUYXNrcyk7XG4gICAgICAgIGxldCBkZWxldGVkVGFzaztcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gbmV3U3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzW3Rhc2tJbmRleF07XG5cbiAgICAgICAgY3VycmVudFRhc2subGlzdFRhc2sgPSBmYWxzZTtcbiAgICAgICAgZGVsZXRlZFRhc2sgPSBjdXJyZW50VGFzaztcblxuICAgICAgICBsZXQgbmV3QXJyYXkgPSBuZXdTdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3M7XG4gICAgICAgIGxldCBuZXdlckFycmF5ID0gbmV3QXJyYXkuZmlsdGVyKHRhc2sgPT4gdGFzay5saXN0VGFzaylcblxuICAgICAgICBkZWxldGVkVXBDb21pbmdJdGVtcy5wdXNoKGRlbGV0ZWRUYXNrKVxuICAgICAgICBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3MgPSBuZXdlckFycmF5XG5cbiAgICAgICAgbGV0IG5ld1Rhc2tzID0gICBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3NcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzID0gbmV3VGFza3NcblxuICAgICAgICByZW1vdmVMaXN0RWRpdG9yKCk7XG4gICAgICAgIGlmKGlzVXBDb21pbmcpIHJlbW92ZVVwQ29taW5nVGFza3MoZGVsZXRlZFRhc2spXG4gICAgICAgIGFjdGl2YXRlQ29udGVudE1lbnUoKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHJlbW92ZVVwQ29taW5nVGFza3MgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgbmV3U3RhdGljTGlzdFRhc2tzID0gc2V0T2JqZWN0KHN0YXRpY0xpc3RUYXNrcyx0cnVlKTtcblxuXG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG5ld1Rhc2tzO1xuXG4gICAgICAgIG5ld1N0YXRpY0xpc3RUYXNrcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIG5ld1Rhc2tzID0gYm9hcmQudGFza3MuZmlsdGVyKGNoaWxkVGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkVGFzay5uYXZJbmRleCA9PSBcInVwY29taW5nXCIgJiYgdGFzay5uYXZJbmRleCA9PSBcInVwY29taW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVGFzay50YXNrSW5kZXggPT0gdGFzay50YXNrSW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgIGlmIChjaGlsZFRhc2submF2SW5kZXggID09ICB0YXNrLm5hdkluZGV4ICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRUYXNrLmJvYXJkSW5kZXggPT0gdGFzay5ib2FyZEluZGV4ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFRhc2sudGFza0luZGV4ID09IHRhc2sudGFza0luZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICApe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzID0gbmV3VGFza3NcbiAgICAgICAgICAgIHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyA9IG5ld1Rhc2tzO1xuICAgICAgICAgICAgYm9hcmRJbmRleCsrO1xuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgY29uc3QgZWRpdFRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSBldmVudC50YXJnZXQuYm9hcmRJbmRleDtcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IGV2ZW50LnRhcmdldC50YXNrSW5kZXg7XG4gICAgICAgIGxldCB0YXNrID0gc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzW3Rhc2tJbmRleF07XG4gICAgICAgIGxldCB0ZXh0ID0gdGFzay50ZXh0O1xuICAgICAgICBsZXQgZGF0ZSA9IHRhc2suZGF0ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gdGFzay5wcmlvcml0eVxuICAgICAgICBhZGRMaXN0RWRpdG9yKGJvYXJkSW5kZXgsIHRhc2tJbmRleCwgdGV4dCwgZGF0ZSxwcmlvcml0eSkgXG4gICAgfVxuXG4gICAgY29uc3QgZXhpdExpc3RFZGl0b3IgPSAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUxpc3RFZGl0b3IoKTtcbiAgICAgICAgcmVuZGVyQm9hcmRMaXN0cygpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcmVtb3ZlTGlzdEVkaXRvciA9ICgpID0+IHtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VGFza3MgPSB0YXNrLmNoYW5nZWRCb2FyZExpc3RzO1xuICAgICAgICAgICAgbmV3VGFza3MgPSBuZXdUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmxpc3RFZGl0b3IgIT0gdHJ1ZSApO1xuICAgICAgICAgICAgdGFzay5jaGFuZ2VkQm9hcmRMaXN0cyA9IG5ld1Rhc2tzO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgZmluZExpc3RFZGl0b3JCb2FyZEluZGV4ID0gKCkgPT4ge1xuICAgICAgICBsZXQgbmV3VGFza3MgPSBzdGF0aWNMaXN0VGFza3M7XG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gMDtcbiAgICAgICAgbGV0IHN0b3BMb29wID0gZmFsc2U7XG5cbiAgICAgICAgbmV3VGFza3MuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBib2FyZC5jaGFuZ2VkQm9hcmRMaXN0cy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmxpc3RFZGl0b3IgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHN0b3BMb29wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChzdG9wTG9vcCkgcmV0dXJuO1xuICAgICAgICAgICAgYm9hcmRJbmRleCArKztcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYm9hcmRJbmRleDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJbmRleGVzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYnJlYWtMb29wID0gZmFsc2U7XG4gICAgICAgIGxldCBpbmRleGVzO1xuICAgICAgICBsZXQgYm9hcmRJbmRleCA9IDA7XG4gICAgICAgIGxldCBsaXN0SW5kZXg7XG5cblxuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIHRhc2suY2hhbmdlZEJvYXJkTGlzdHMuZm9yRWFjaChsaXN0VGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RUYXNrLmxpc3RFZGl0b3IpeyBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0VGFzay5pbmRleCAhPSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJbmRleCA9IGxpc3RUYXNrLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlcyAgPSB7Ym9hcmRJbmRleCwgbGlzdEluZGV4fTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpbmRleGVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChicmVha0xvb3ApIHJldHVybjtcbiAgICAgICAgICAgIGJvYXJkSW5kZXggKys7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tDbGljayA9ICgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ZXMgPSBnZXRJbmRleGVzKCk7XG5cbiAgICAgICAgaWYgKGluZGV4ZXMgIT09IGZhbHNlKXtcbiAgICAgICAgICAgIGFkZFRhc2soaW5kZXhlcy5saXN0SW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkVGFzaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlRHVwbGljYXRlVGFza3MgPSAobmF2SW5kZXgsYm9hcmRJbmRleCx0YXNrSW5kZXgsIG5ld1Rhc2spID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRCb2FyZEluZGV4ID0wO1xuXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFza0luZGV4ID0gMFxuICAgICAgICAgICAgYm9hcmQudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5uYXZJbmRleCA9PSBuYXZJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5ib2FyZEluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmJvYXJkSW5kZXggPT0gYm9hcmRJbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudGFza0luZGV4ID09IHRhc2tJbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNMaXN0VGFza3NbY3VycmVudEJvYXJkSW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdID0gbmV3VGFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrcyA9IHN0YXRpY0xpc3RUYXNrc1tjdXJyZW50Qm9hcmRJbmRleF0udGFza3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNMaXN0VGFza3NbY3VycmVudEJvYXJkSW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzID0gdGFza3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnRhc2tJbmRleCA9PSB0YXNrSW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNMaXN0VGFza3NbY3VycmVudEJvYXJkSW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdID0gbmV3VGFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tzID0gc3RhdGljTGlzdFRhc2tzW2N1cnJlbnRCb2FyZEluZGV4XS50YXNrcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljTGlzdFRhc2tzW2N1cnJlbnRCb2FyZEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyA9IHRhc2tzO1xuICAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50VGFza0luZGV4ICsrXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY3VycmVudEJvYXJkSW5kZXggKys7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBjb25zdCBjaGFuZ2VUYXNrID0gKGJvYXJkSW5kZXgsIHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpc1VwQ29taW5nKXtcbiAgICAgICAgICAgIGxldCBvbGRUYXNrID0gICBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3NbaW5kZXhdO1xuXG4gICAgICAgICAgICB0YXNrLm5hdk5hbWUgPSBvbGRUYXNrLm5hdk5hbWU7XG4gICAgICAgICAgICB0YXNrLnRhc2tJbmRleCA9IG9sZFRhc2sudGFza0luZGV4O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbGRUYXNrLmJvYXJkSW5kZXggIT0gXCJ1bmRlZmluZWRcIikgdGFzay5ib2FyZEluZGV4ID0gb2xkVGFzay5ib2FyZEluZGV4O1xuICAgICAgICAgICAgdGFzay5uYXZJbmRleCA9IG9sZFRhc2submF2SW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3NbaW5kZXhdID0gdGFzaztcbiAgICAgICAgbGV0IHRhc2tzID0gc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzO1xuICAgICAgICBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMgPSB0YXNrcztcblxuXG5cbiAgICAgICAgaWYgKGlzVXBDb21pbmcpIGNoYW5nZUR1cGxpY2F0ZVRhc2tzKHRhc2submF2SW5kZXgsdGFzay5ib2FyZEluZGV4LHRhc2sudGFza0luZGV4LHRhc2spO1xuXG4gICAgICAgIGlmIChpc1VwQ29taW5nKSBhZGRUYXNrVG9UaW1lKHRhc2spO1xuICAgICAgICBpZiAoaXNVcENvbWluZykgcmVtb3ZlT3V0T2ZEYXRlVGFza3MoKTtcbiAgICB9XG5cblxuXG4gICAgY29uc3QgY3JlYXRlVGFzayA9IChib2FyZEluZGV4LHRhc2spID0+IHtcbiAgICAgICAgaWYgKGlzVXBDb21pbmcpe1xuICAgICAgICAgICAgdGFzay5uYXZJbmRleCA9IFwidXBjb21pbmdcIjtcbiAgICAgICAgICAgIHRhc2submF2TmFtZSA9IFwiVXBjb21pbmdcIjtcbiAgICAgICAgICAgIHVwY29taW5nVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIHRhc2sudGFza0luZGV4ID0gdXBjb21pbmdUYXNrcy5sZW5ndGggLTE7XG4gICAgICAgIH1cblxuICAgICAgICAgc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICBsZXQgdGFza3MgPSBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3M7XG4gICAgICAgICBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMgPSB0YXNrczsgXG4gICAgICAgICBpZiAoaXNVcENvbWluZykgYWRkVGFza1RvVGltZSh0YXNrKTtcbiAgICAgICAgIGlmIChpc1VwQ29taW5nKSByZW1vdmVPdXRPZkRhdGVUYXNrcygpO1xuXG5cbiAgICB9XG5cbi8vIHVwY29taW5nIHRhc2sgYXJyYXkgd2lsbCBhbHdheXMgZ2l2ZSBhIHVuaXF1ZSB0YXNrIGluZGV4IGJlY2F1c2UgaXQgdXNpbmcgdGhlIGxlbmd0aCBvZiB0aGUgdXBjb21pbmcgdGFza1xuLy8gd2hpY2ggaXMgb25seSBjaGFnZWQgd2hlbiB3ZSBnZXQgbmV3IGRhdGEuIFRoZSBuZXcgZGF0YSB3aWxsIGNoYW5nZSB0aGUgdGFzayBpbmRleCBzbyB0aGF0IGl0IGlzIGluIG9yZGVyXG4vLyBzbyBpdCBpc24ndCBqdXN0IGEgcmFuZG9tIG51bWJlciBhbmQgdGhhdCBpcyB3aHkgdXBjb21pbmcgd29ya3MuXG5cbiAgICBjb25zdCBhZGRUYXNrID0gIChpbmRleCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgbGV0IGRhdGVWYWx1ZSA9IGVsZW1lbnRzLmRhdGVQaWNrZXJbMF0udmFsdWVcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlO1xuICAgIFxuICAgICAgICBpZiAoZGF0ZVZhbHVlLmxlbmd0aCA9PSAwKSBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGVsc2UgY3VycmVudERhdGUgPSBjaGFuZ2VWYWx1ZVRvRGF0ZShkYXRlVmFsdWUpO1xuICAgICAgICBsZXQgdGFza1RleHQgPSBlbGVtZW50cy50YXNrVGV4dEJveFswXS52YWx1ZTtcbiAgICAgICAgaWYgKHRhc2tUZXh0Lmxlbmd0aCA9PSAwIHx8ICFjaGVja1NwYWNlcyh0YXNrVGV4dCkgKSB0YXNrVGV4dCA9IFwiTmV3IFRhc2tcIjtcblxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBnZXRPYmplY3RWYWx1ZShcImxpc3RFZGl0b3JcIixcInByaW9yaXR5XCIsc3RhdGljTGlzdFRhc2tzKTtcbiAgICAgICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrVGVtcGxhdGUodGFza1RleHQsY3VycmVudERhdGUscHJpb3JpdHkpO1xuICAgICAgICBsZXQgYm9hcmRJbmRleCA9IGZpbmRMaXN0RWRpdG9yQm9hcmRJbmRleCgpO1xuICAgICAgICAgdHlwZW9mIGluZGV4ICE9IFwidW5kZWZpbmVkXCIgPyBjaGFuZ2VUYXNrKGJvYXJkSW5kZXgsIHRhc2ssaW5kZXgpOiBjcmVhdGVUYXNrKGJvYXJkSW5kZXgsdGFzaylcbiAgICAgICBhY3RpdmF0ZUNvbnRlbnRNZW51KCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBnZXROZXdJbmRleGVzID0gKG5ld1Rhc2spID0+IHtcbiAgICAgICAgbGV0IG5ld0JvYXJkSW5kZXg7XG4gICAgICAgIGxldCBicmVha0xvb3AgPSBmYWxzZTtcbiAgICAgICAgbGV0IG5ld1Rhc2tJbmRleDtcblxuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFRhc2tJbmRleCA9IDA7XG4gICAgICAgICAgICBib2FyZC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnRhc2tJbmRleCA9PSBuZXdUYXNrLnRhc2tJbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQudGV4dCA9PSBcIldlZWtcIikgbmV3Qm9hcmRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQudGV4dCA9PSBcIlRvZGF5XCIpIG5ld0JvYXJkSW5kZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtMb29wID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza0luZGV4ID0gY3VycmVudFRhc2tJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50VGFza0luZGV4ICsrO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYoYnJlYWtMb29wKSByZXR1cm47XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7bmV3Qm9hcmRJbmRleCwgbmV3VGFza0luZGV4fTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGFkZFRhc2tUb1RpbWUgPSAobmV3VGFzaykgPT4ge1xuICAgICAgICBsZXQgbmV3SW5kZXg9IGdldE5ld0luZGV4ZXMobmV3VGFzayk7XG4gICAgICAgIGlmICh0eXBlb2YgbmV3SW5kZXgubmV3Qm9hcmRJbmRleCA9PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG4gICAgICAgXG4gICAgICAgIGxldCBuZXdCb2FyZEluZGV4ID0gbmV3SW5kZXgubmV3Qm9hcmRJbmRleDtcbiAgICAgICAgbGV0IG5ld1Rhc2tJbmRleCA9IG5ld0luZGV4Lm5ld1Rhc2tJbmRleDtcbiAgICAgICAgbGV0IGFkZFRhc2sgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjdXJyZW50VGFzayA9IHN0YXRpY0xpc3RUYXNrc1tuZXdCb2FyZEluZGV4XS50YXNrc1tuZXdUYXNrSW5kZXhdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudFRhc2sgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYXNrLnRhc2tJbmRleCA9PSBuZXdUYXNrLnRhc2tJbmRleCAmJiBjdXJyZW50VGFzay5uYXZJbmRleCA9PSBcInVwY29taW5nXCIgJiYgbmV3VGFzay5uYXZJbmRleCA9PSBcInVwY29taW5nXCIpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3RhdGljTGlzdFRhc2tzW25ld0JvYXJkSW5kZXhdLnRhc2tzW25ld1Rhc2tJbmRleF0gPSBuZXdUYXNrO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrcyA9ICBzdGF0aWNMaXN0VGFza3NbbmV3Qm9hcmRJbmRleF0udGFza3M7XG4gICAgICAgICAgICAgICAgc3RhdGljTGlzdFRhc2tzW25ld0JvYXJkSW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzID0gdGFza3M7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRUYXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIiAmJiBuZXdUYXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICAgICAgYWRkVGFzayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRUYXNrID09IFwidW5kZWZpbmVkXCIgfHxcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrLm5hdkluZGV4ICE9IFwidXBjb21pbmdcIiB8fCBhZGRUYXNrXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCFjaGVja1VwQ29taW5nVGFzayhuZXdUYXNrKSl7XG4gICAgICAgICAgICAgICAgc3RhdGljTGlzdFRhc2tzW25ld0JvYXJkSW5kZXhdLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tzID0gIHN0YXRpY0xpc3RUYXNrc1tuZXdCb2FyZEluZGV4XS50YXNrcztcbiAgICAgICAgICAgICAgICBzdGF0aWNMaXN0VGFza3NbbmV3Qm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMgPSB0YXNrcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgY2hlY2tVcENvbWluZ1Rhc2sgPSAobmV3VGFzaykgPT4ge1xuICAgICAgICBsZXQgaXNUYXNrID0gZmFsc2U7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgYm9hcmQudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5uYXZJbmRleCA9PSBcInVwY29taW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50YXNrSW5kZXggPT0gbmV3VGFzay50YXNrSW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlciArKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlciA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Rhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGlzVGFzaztcbiAgICB9XG5cblxuICAgIGNvbnN0IHJlbW92ZU91dE9mRGF0ZVRhc2tzID0gKCkgPT4ge1xuICAgICAgICBhZGRPdXRPZkRhdGVUYXNrc1RvRGVsZXRlZFVwY29taW5nSXRlbXMoKTtcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSAwO1xuICAgICAgICBsZXQgbmV3U3RhdGljTGlzdFRhc2tzID0gc2V0T2JqZWN0KHN0YXRpY0xpc3RUYXNrcywgdHJ1ZSk7XG5cbiAgICAgICAgbmV3U3RhdGljTGlzdFRhc2tzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgYm9hcmQudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFza3MgPSBib2FyZC50YXNrcztcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFza3MgPSB0YXNrcy5maWx0ZXIobmV3VGFzayA9PiBuZXdUYXNrLmRhdGUgIT0gdGFzay5kYXRlKVxuICAgICAgICAgICAgICAgIGlmIChib2FyZEluZGV4ID09IDApe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVG9kYXkodGFzay5kYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3MgPSBuZXdUYXNrcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLm5hdkluZGV4ICE9IFwidXBjb21pbmdcIil0YXNrQ2hhbmdlcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgICghaXNUaGlzV2Vlayh0YXNrLmRhdGUpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzID0gbmV3VGFza3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5uYXZJbmRleCAhPSBcInVwY29taW5nXCIpdGFza0NoYW5nZXMucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3MgPSB0YXNrcztcbiAgICAgICAgICAgICAgICBuZXdTdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMgPSB0YXNrcztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBib2FyZEluZGV4ICsrO1xuICAgICAgICB9KVxuICAgICAgICBzdGF0aWNMaXN0VGFza3MgPSBuZXdTdGF0aWNMaXN0VGFza3NcbiAgICB9XG5cblxuICAgIGNvbnN0IGFkZE91dE9mRGF0ZVRhc2tzVG9EZWxldGVkVXBjb21pbmdJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgYm9hcmQudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZih0YXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIilcbiAgICAgICAgICAgICAgICBpZiAoIWlzVGhpc1dlZWsodGFzay5kYXRlKSl7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRVcENvbWluZ0l0ZW1zLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGNvbnN0IHNoYWRlQnV0dG9uQnlDbGFzcyA9IChjbGFzc05hbWUsY29sb3IpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIGxldCBidXR0b25zID0gZWxlbWVudHMuYnV0dG9uO1xuICAgICAgICBsZXQgYnV0dG9uID0gYnV0dG9ucy5maWx0ZXIoYnV0dG9uID0+IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBjbGFzc05hbWUpWzBdO1xuICAgICAgICBsZXQgYnV0dG9uUGFyYWdyYXBoID0gQXJyYXkuZnJvbShidXR0b24uY2hpbGRyZW4pWzBdO1xuICAgICAgICBidXR0b25QYXJhZ3JhcGguc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hhZGVCdXR0b25CeVByaW9yaXR5ID0gKHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGlmIChwcmlvcml0eSA9PSBcIkhpZ2hcIikgc2hhZGVCdXR0b25CeUNsYXNzKFwiYnV0dG9uIGhpZ2hcIixcInJlZFwiKTtcbiAgICAgICAgZWxzZSBpZiAocHJpb3JpdHkgPT0gXCJNZWRpdW1cIikgc2hhZGVCdXR0b25CeUNsYXNzKFwiYnV0dG9uIG1lZGl1bVwiLCBcIiNmZjk4MDBcIik7XG4gICAgICAgIGVsc2UgaWYgKHByaW9yaXR5ID09IFwiTG93XCIpIHNoYWRlQnV0dG9uQnlDbGFzcyhcImJ1dHRvbiBsb3dcIiwgXCJncmVlblwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFkZUJ1dHRvbkNvbG9yQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2hhZGVCdXR0b25Db2xvcihldmVudCxzdGF0aWNMaXN0VGFza3MpXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlQm9hcmQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzID0gcmVtb3ZlSXRlbShzdGF0aWNMaXN0VGFza3MsIGV2ZW50LnRhcmdldC5ib2FyZEluZGV4KTtcbiAgICAgICAgY2hhbmdlZExpc3RUYXNrcyA9IHN0YXRpY0xpc3RUYXNrc1xuICAgICAgICBhY3RpdmF0ZUNvbnRlbnRNZW51KCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRWRpdFRpdGxlTWVudSA9ICgpID0+IHtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VGFza3MgPSB0YXNrLmNoYW5nZWRCb2FyZExpc3RzO1xuICAgICAgICAgICAgbmV3VGFza3MgPSBuZXdUYXNrcy5maWx0ZXIobGlzdCA9PiBsaXN0LmVkaXRCb2FyZCAhPSB0cnVlKTtcbiAgICAgICAgICAgIHRhc2suY2hhbmdlZEJvYXJkTGlzdHMgPSBuZXdUYXNrcztcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgZWRpdEJvYXJkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IGV2ZW50LnRhcmdldC5ib2FyZEluZGV4O1xuICAgICAgICByZW1vdmVFZGl0VGl0bGVNZW51KCk7XG4gICAgICAgIGxldCBjaGFuZ2VkQm9hcmRMaXN0cyA9IHN0YXRpY0xpc3RUYXNrc1tpbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMgICAgXG4gICAgICAgIGxldCBjdXJyZW50VGV4dCA9IGdldEVsZW1lbnRCeUJvYXJkSW5kZXgoaW5kZXgsXCJleGFtcGxlQm9hcmRUZXh0XCIpLnRleHRDb250ZW50O1xuXG5cbiAgICAgICAgbGV0IGVkaXRCb2FyZFRlbXBsYXRlID0ge2VkaXRCb2FyZDogdHJ1ZSwgdGV4dDpjdXJyZW50VGV4dH07XG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgICBuZXdBcnJheS5wdXNoKGVkaXRCb2FyZFRlbXBsYXRlKTtcbiAgICAgICAgbGV0IGZpbmFsQXJyYXkgPSBuZXdBcnJheS5jb25jYXQoY2hhbmdlZEJvYXJkTGlzdHMpO1xuXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrc1tpbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMgPSBmaW5hbEFycmF5O1xuICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgcmVuZGVyQm9hcmRMaXN0cyh0cnVlKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgYWRkTGlzdEVkaXRvckNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gZXZlbnQudGFyZ2V0LmJvYXJkSW5kZXg7XG4gICAgICAgIGFkZExpc3RFZGl0b3IoYm9hcmRJbmRleClcbiAgICB9XG5cblxuICAgIGNvbnN0IGFkZExpc3RFZGl0b3IgPSAoYm9hcmRJbmRleCxpbmRleCx0ZXh0LGRhdGUscHJpb3JpdHkpID0+IHtcblxuICAgICAgICByZW1vdmVMaXN0RWRpdG9yKClcbiAgICAgICAgbGV0IGZpbmFsQXJyYXk7XG4gICAgICAgIGxldCBsaXN0RWRpdG9yVGVtcGxhdGU7XG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIGluZGV4ICE9IFwidW5kZWZpbmVkXCIpICBsaXN0RWRpdG9yVGVtcGxhdGUgPSB7bGlzdEVkaXRvcjogdHJ1ZSwgdGV4dDp0ZXh0LGRhdGU6IGRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6cHJpb3JpdHksIGJvYXJkSW5kZXg6Ym9hcmRJbmRleCwgaW5kZXg6IGluZGV4fTtcblxuXG4gICAgICAgIGVsc2UgbGlzdEVkaXRvclRlbXBsYXRlID0ge2xpc3RFZGl0b3I6IHRydWUsIHRleHQ6XCJcIixkYXRlOmN1cnJlbnREYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiLGJvYXJkSW5kZXg6Ym9hcmRJbmRleCwgY3JlYXRpbmdUYXNrOiB0cnVlfTtcblxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2tzID0gc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzO1xuICAgICAgICAgICAgbmV3VGFza3Muc3BsaWNlKGluZGV4ICsxLDAsbGlzdEVkaXRvclRlbXBsYXRlKTtcbiAgICAgICAgICAgIGZpbmFsQXJyYXkgPSBuZXdUYXNrc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxpc3RCb2FyZEFycmF5ID0gW2xpc3RFZGl0b3JUZW1wbGF0ZV07XG4gICAgICAgICAgICBsZXQgbmV3VGFza3MgPSBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHM7XG4gICAgICAgICAgICBmaW5hbEFycmF5ID0gbmV3VGFza3MuY29uY2F0KGxpc3RCb2FyZEFycmF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyA9IGZpbmFsQXJyYXk7XG4gICAgICAgIHJlbmRlckJvYXJkTGlzdHMoKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNoYW5nZU5hbWUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgICAgICBsZXQgYm9hcmRUZXh0ID0gZWxlbWVudHMuYm9hcmRDb250ZW50VGV4dEJveFswXS52YWx1ZTtcbiAgICAgICAgaWYgKGJvYXJkVGV4dC5sZW5ndGggPT0gMCApe1xuICAgICAgICAgICAgcmVtb3ZlRWRpdFRpdGxlTWVudSgpO1xuICAgICAgICAgICAgcmVuZGVyQm9hcmRMaXN0cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ICAgXG4gICAgICAgIGxldCBuZXdUYXNrcyA9IHN0YXRpY0xpc3RUYXNrc1tjdXJyZW50SW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzO1xuICAgICAgICBuZXdUYXNrcyA9IG5ld1Rhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZWRpdEJvYXJkICE9IHRydWUpXG4gICAgICAgIFxuICAgICAgICBzdGF0aWNMaXN0VGFza3NbY3VycmVudEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyA9IG5ld1Rhc2tzO1xuICAgICAgICBzdGF0aWNMaXN0VGFza3NbY3VycmVudEluZGV4XS50ZXh0ID0gYm9hcmRUZXh0O1xuICAgICAgIGFjdGl2YXRlQ29udGVudE1lbnUoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJFZGl0Qm9hcmRUZXh0VmFsdWVzICA9ICgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICB0YXNrLmNoYW5nZWRCb2FyZExpc3RzLmZvckVhY2gobGlzdCA9PntcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5lZGl0Qm9hcmQpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRleHQgPSBmaW5kQm9hcmRUZXh0Qm94KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC50ZXh0ID0gY3VycmVudFRleHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJCb2FyZExpc3RzID0gKGlzQ2hhbmdlZE5hbWUpID0+IHtcbiAgICAgICAgcmVtb3ZlTGlzdEJpbmRpbmdzKCk7XG4gICAgICAgIHJlbW92ZUNvbnRlbnRCaW5kaW5ncygpO1xuICAgICAgICByZW1vdmVCb2FyZE92ZXJsYXkoKTtcblxuICAgICAgICBsZXQgaW5kZXhlc0xlbmd0aCA9IHN0YXRpY0xpc3RUYXNrcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGljTGlzdFRhc2tzLmxlbmd0aCAhPSAwKXJlbmRlclNpbmdsZUJvYXJkTGlzdChpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzQ2hhbmdlZE5hbWUpe1xuICAgICAgICAgICAgYWRkTGlzdEJpbmRpbmdzKCk7XG4gICAgICAgICAgICBhZGRDb250ZW50QmluZGluZ3MoKTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgYWRkQ2hhbmdlTmFtZUJpbmRpbmcoKTtcbiAgICB9XG5cblxuXG5cbiAgICBjb25zdCByZW5kZXJTaW5nbGVCb2FyZExpc3QgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHRhc2tMaXN0ID0gZ2V0RWxlbWVudEJ5Qm9hcmRJbmRleChpbmRleCwgXCJ0YXNrTGlzdHNcIik7XG4gICAgICAgIGxldCBhZGREYXRlID0gZmFsc2U7XG4gICAgICAgIGxldCBkYXRlO1xuICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrc1tpbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmVkaXRCb2FyZCl7XG4gICAgICAgICAgICAgICAgbGV0IGJvYXJkVGV4dCA9IGNyZWF0ZUJvYXJkRWRpdG9yKHRhc2spO1xuICAgICAgICAgICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCArPSBib2FyZFRleHQ7XG4gICAgICAgICAgICAgICAgYWRkQm9hcmRPdmVybGF5KGluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5saXN0RWRpdG9yKXtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdFRleHQ9IGNyZWF0ZUxpc3RFZGl0b3IodGFzayk7XG4gICAgICAgICAgICAgICAgdGFza0xpc3QuaW5uZXJIVE1MICs9IGxpc3RUZXh0O1xuXG4gICAgICAgICAgICAgICAgc2hhZGVCdXR0b25CeVByaW9yaXR5KHRhc2sucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIGRhdGUgPSB0YXNrLmRhdGU7XG4gICAgICAgICAgICAgICAgYWRkRGF0ZSA9IHRydWU7XG5cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmxpc3RUYXNrKXtcbiAgICAgICAgICAgICAgICBsZXQgdGFza1RleHQgPSBjcmVhdGVUYXNrQXJyYW5nZW1lbnQodGFzayk7XG4gICAgICAgICAgICAgICAgdGFza0xpc3QuaW5uZXJIVE1MICs9IHRhc2tUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICBcbiAgICAgICAgaWYgKGFkZERhdGUpIHNldFRhc2tEYXRlKGRhdGUpO1xuICAgICAgICBsZXQgdGFza0xpc3RDaGlsZHJlbiA9IEFycmF5LmZyb20odGFza0xpc3QuY2hpbGRyZW4pXG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gdGFza0xpc3QuYm9hcmRJbmRleDtcbiAgICAgICAgYXNzaWduVGFza0luZGV4KHRhc2tMaXN0Q2hpbGRyZW4sYm9hcmRJbmRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkQm9hcmRUYXNrc0NsaWNrID0gKCkgPT4ge1xuICAgICAgICBhZGRCb2FyZFRhc2tzKHN0YXRpY0xpc3RUYXNrcyk7XG4gICAgICAgIGNoYW5nZWRMaXN0VGFza3MgPSBzZXRBcnJheShzdGF0aWNMaXN0VGFza3MpO1xuICAgICAgICBhY3RpdmF0ZUNvbnRlbnRNZW51KCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlQ29udGVudE1lbnUgPSAoKSA9PiB7XG4gICAgICAgIGFjdGl2YXRlQ29udGVudChpbmRleCxmYWxzZSxuYW1lKTtcblxuICAgIH1cblxuXG4gICAgY29uc3QgcmVuZGVyTGlzdFRhc2tzID0gKGlzRW1wdHkpID0+IHtcbiAgICAgICAgbGV0IGRvbSA9IGdldEluaXRpYWxFbGVtZW50cygpO1xuICAgICAgICByZW5kZXJFZGl0Qm9hcmRUZXh0VmFsdWVzKCk7XG4gICAgICAgIHJlbW92ZUNvbnRlbnRCaW5kaW5ncygpO1xuICAgICAgICByZW1vdmVMaXN0QmluZGluZ3MoKTsgXG5cbiAgICAgICAgaWYgKCFpc0VtcHR5ICYmICAhaXNVcENvbWluZyl7XG4gICAgICAgICAgICBsZXQgbmV3VGFza3MgPSBjaGFuZ2VkTGlzdFRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suYWRkQm9hcmQgIT0gdHJ1ZSk7XG4gICAgICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzID0gbmV3VGFza3M7XG4gICAgICAgICAgIGNoYW5nZWRMaXN0VGFza3MucHVzaCh7YWRkQm9hcmQ6IHRydWV9KTtcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICBkb20ucGFnZUNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY2hhbmdlZExpc3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suYm9hcmQpe1xuICAgICAgICAgICAgICAgIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKHRhc2spO1xuICAgICAgICAgICAgICAgIGRvbS5wYWdlQ29udGVudC5pbm5lckhUTUwgKz0gYm9hcmRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5hZGRCb2FyZCl7XG4gICAgICAgICAgICAgICAgbGV0IGFkZEJvYXJkID0gY3JlYXRlQWRkQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBkb20ucGFnZUNvbnRlbnQuaW5uZXJIVE1MICs9IGFkZEJvYXJkO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmlzVXBDb21pbmdCb2FyZCl7XG4gICAgICAgICAgICAgICAgbGV0IHVwQ29taW5nQm9hcmQgPSBjcmVhdGVVcENvbWluZ0JvYXJkKHRhc2spO1xuICAgICAgICAgICAgICAgIGRvbS5wYWdlQ29udGVudC5pbm5lckhUTUwgKz0gdXBDb21pbmdCb2FyZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgICAgICAgXG5cbiAgICAgICAgYWRkQ29udGVudEJpbmRpbmdzKCk7XG4gICAgICAgIGFzc2lnbkJvYXJkRWxlbWVudHMoKTtcbiAgICAgICAgcmVuZGVyQm9hcmRMaXN0cygpO1xuICAgIH1cblxuXG4gICAgY29uc3Qgc2V0Q2hhbmdlZFRvRG9MaXN0c0VtcHR5ID0gKCkgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIHRhc2suY2hhbmdlZEJvYXJkTGlzdHMgPSBbXTtcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNldENoYW5nZWRUb0RvTGlzdHMgPSAoKSA9PiB7XG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgdGFzay5jaGFuZ2VkQm9hcmRMaXN0cyA9ICB0YXNrLnRhc2tzO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlTmF2Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzID0gW107XG4gICAgICAgIGxldCBuZXdUYXNrcyA9IHNlbmQucmV0cmlldmVEYXRhKGluZGV4KTtcbiAgICAgICAgaWYgKCFuZXdUYXNrcyl7XG4gICAgICAgICAgICBzZW5kLnNlbmREYXRhKFtdLGluZGV4LG5hbWUpXG4gICAgICAgICAgICBuZXdUYXNrcyA9IHNlbmQucmV0cmlldmVEYXRhKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWNMaXN0VGFza3MgPSBuZXdUYXNrcztcbiAgICAgICAgY2hhbmdlZExpc3RUYXNrcyA9IHNldEFycmF5KHN0YXRpY0xpc3RUYXNrcylcbiAgICAgICAgc2V0Q2hhbmdlZFRvRG9MaXN0cygpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlVXBDb21pbmdDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MgPSBbXTtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzID0gcmVuZGVyVGltZVRhc2tzKHN0YXRpY0xpc3RUYXNrcyk7XG4gICAgICAgIGlzVXBDb21pbmcgPSB0cnVlO1xuICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzID0gc2V0QXJyYXkoc3RhdGljTGlzdFRhc2tzKVxuICAgICAgICB1cGNvbWluZ1Rhc2tzID0gZ2V0VXBDb21pbmdUYXNrcyhzdGF0aWNMaXN0VGFza3MpO1xuXG4gICAgICBcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVOYXZUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gYm9hcmQudGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2submF2SW5kZXggPT0gXCJ1cGNvbWluZ1wiKTtcbiAgICAgICAgICAgIGJvYXJkLnRhc2tzID0gdGFza3M7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBjb25zdCBkaXNydXB0Q29udGVudCA9IChvYmplY3RJbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVXBDb21pbmcpIHJlbW92ZU5hdlRhc2tzKCk7XG4gICAgICAgICAgICBlbHNlIHN0YXRpY0xpc3RUYXNrcyA9IFtdO1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICAgICAgaWYgKG9iamVjdEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICBpZiAoIWlzVXBDb21pbmcpIHJlbmRlckxpc3RUYXNrcyh0cnVlKTtcbiAgICAgICAgICAgICAgY2FuRGlzcnVwdCA9IHRydWU7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgIH1cblxuICAgICBcbiAgICBjb25zdCByZW1vdmVVcENvbWluZ0l0ZW1zID0gKG5hdnMpID0+IHtcbiAgICAgICAgZGVsZXRlZFVwQ29taW5nSXRlbXMuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICAgICAgbmF2c1t0YXNrLm5hdkluZGV4XVt0YXNrLnRhc2tJbmRleF0gPSBcImVtcHR5XCJcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYXZzW3Rhc2submF2SW5kZXhdW3Rhc2suYm9hcmRJbmRleF0udGFza3NbdGFzay50YXNrSW5kZXhdID0gXCJlbXB0eVwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgbmF2cyA9IHJlbW92ZU5hdkVtcHRpZXMobmF2cyk7XG4gICAgICAgIGRlbGV0ZWRVcENvbWluZ0l0ZW1zID0gW107XG4gICAgICAgIHJldHVybiBuYXZzO1xuXG4gICAgfVxuXG4gICAgY29uc3Qgc2VuZFVwQ29taW5nQ2hhbmdlcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5hdnMgPSBzZW5kLmdldEFsbERhdGEoKTtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgYm9hcmQudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFzayA9IHRhc2s7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2subGlzdFRhc2speyAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLm5hdkluZGV4ICE9IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IHRhc2sudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRlID0gdGFzay5kYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0VHlwZVRleHQgPSB0YXNrLnByb2plY3RUeXBlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2VkID0gdGFzay5jaGVja2VkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzayA9IGNyZWF0ZVRhc2tUZW1wbGF0ZSh0ZXh0LCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdFR5cGVUZXh0LCBjaGVja2VkKVxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYodGFzay5uYXZJbmRleCA9PSBcInVwY29taW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdnNbdGFzay5uYXZJbmRleF1bdGFzay50YXNrSW5kZXhdID0gbmV3VGFzaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIG5hdnNbdGFzay5uYXZJbmRleF1bdGFzay5ib2FyZEluZGV4XS50YXNrc1t0YXNrLnRhc2tJbmRleF0gPSBuZXdUYXNrO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBpZihkZWxldGVkVXBDb21pbmdJdGVtcy5sZW5ndGggIT0gMCkgbmF2cyA9IHJlbW92ZVVwQ29taW5nSXRlbXMobmF2cyk7XG4gICAgICAgIGxldCBuZXdEYXRhID0gc2V0T2JqZWN0KG5hdnMpO1xuICAgICAgICBuZXdEYXRhID0gYXBwbHlUYXNrQ2hhbmdlcyhuZXdEYXRhLHRhc2tDaGFuZ2VzKTtcbiAgICAgICAgdGFza0NoYW5nZXMgPSBbXTtcblxuICAgICAgICBzZW5kLm92ZXJ3cml0ZURhdGEobmV3RGF0YSk7XG4gICAgICAgIHN0b3JhZ2Uuc3RvcmVEYXRhKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SXNVcENvbWluZyAgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1VwQ29taW5nO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEluZGV4ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG5cbiAgICBjb25zdCBhY3RpdmF0ZUNvbnRlbnQgPSAob2JqZWN0SW5kZXgsIGRpc3J1cHRGbG93LG9iamVjdE5hbWUpID0+IHtcbiAgICAgICAgY2hhbmdlZExpc3RUYXNrcyA9IFtdO1xuICAgICAgICB1cGNvbWluZ1Rhc2tzID0gW107XG4gICAgICAgIHNldENoYW5nZWRUb0RvTGlzdHNFbXB0eSgpO1xuICAgICBcbiAgICAgICAgY2FuRGlzcnVwdCA9IGZhbHNlO1xuICAgICAgICBpZiAoZGlzcnVwdEZsb3cpIHtcbiAgICAgICAgICAgIGRpc3J1cHRDb250ZW50KG9iamVjdEluZGV4KVxuICAgICAgICAgICAgaWYgKGNhbkRpc3J1cHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNVcENvbWluZykgYWN0aXZhdGVDb250ZW50KFwidXBjb21pbmdcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgbGV0IGN1cnJlbnROYW1lID0gc2VuZC5yZXRyaWV2ZVRpdGxlKGluZGV4KTtcbiAgICAgICAgICAgIG5hbWUgPSBjdXJyZW50TmFtZTsgIFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VuZC5zZW5kRGF0YShzdGF0aWNMaXN0VGFza3MsaW5kZXgsbmFtZSk7ICBcbiAgICAgICAgICAgIHN0b3JhZ2Uuc3RvcmVEYXRhKCk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICBzZW5kVXBDb21pbmdDaGFuZ2VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpc1VwQ29taW5nID0gZmFsc2U7XG5cbiAgICAgICAgaW5kZXggPSBvYmplY3RJbmRleDtcbiAgICAgICAgbmFtZSA9IG9iamVjdE5hbWU7XG5cbiAgICAgICAgaWYgKGluZGV4ID09IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICBhY3RpdmF0ZVVwQ29taW5nQ29udGVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZhdGVOYXZDb250ZW50KCk7XG5cblxuICAgICAgICB9XG4gICAgICAgIHJlbmRlckxpc3RUYXNrcygpO1xuICAgIH1cbiAgICByZXR1cm4ge2FjdGl2YXRlQ29udGVudCxyZW1vdmVUYXNrQmluZGluZ3MsIGFkZFRhc2tCaW5kaW5ncywgZ2V0SXNVcENvbWluZyxnZXRJbmRleCB9O1xufVxuXG5sZXQgY29udGVudE1lbnUgPSBDb250ZW50KCk7XG5leHBvcnQge2NvbnRlbnRNZW51fTsgICAiLCJpbXBvcnQgeyBjcmVhdGVUYXNrVGVtcGxhdGUsIGZpbmRPYmplY3RCeU5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMuanNcIjtcbmltcG9ydCB7Z2V0VXBkYXRlZEVsZW1lbnRzfSBmcm9tIFwiLi9wYWdlTGF5b3V0LmpzXCI7XG5pbXBvcnQge3NldEFycmF5fSBmcm9tIFwiLi9lbGVtZW50RXZlbnRzLmpzXCI7XG5pbXBvcnQge2NoZWNrU3BhY2VzfSBmcm9tIFwiLi91dGlsaXRpZXMuanNcIjtcblxuXG5jb25zdCBhcHBseVRhc2tDaGFuZ2VzID0gKG5hdnMsdGFza0NoYW5nZXMpID0+IHtcblxuXG4gICAgbGV0IG5ld05hdiA9IG5hdnM7XG4gICAgdGFza0NoYW5nZXMuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgbGV0IG5ld1Rhc2s7XG5cbiAgICAgICAgbGV0IG5hdkluZGV4ID0gdGFzay5uYXZJbmRleDtcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSB0YXNrLmJvYXJkSW5kZXg7XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSB0YXNrLnRhc2tJbmRleDtcblxuICAgICAgICBsZXQgdGV4dCA9IHRhc2sudGV4dDtcbiAgICAgICAgbGV0IGRhdGUgPSB0YXNrLmRhdGU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIGxldCBwcm9qZWN0VHlwZVRleHQgPSB0YXNrLnByb2plY3RUeXBlVGV4dDtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSB0YXNrLmNoZWNrZWQ7XG4gICAgICAgIG5ld1Rhc2sgPSBjcmVhdGVUYXNrVGVtcGxhdGUodGV4dCwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3RUeXBlVGV4dCwgY2hlY2tlZClcbiAgICAgICAgXG4gICAgICAgIG5ld05hdltuYXZJbmRleF1bYm9hcmRJbmRleF0udGFza3NbdGFza0luZGV4XSA9IG5ld1Rhc2s7XG4gICAgfSlcbiAgICByZXR1cm4gbmV3TmF2O1xuXG5cbn1cblxuXG5jb25zdCByZW1vdmVOYXZFbXB0aWVzID0gKG5hdnMpID0+IHtcblxuICAgIGxldCBuYXZLZXlzID0gT2JqZWN0LmtleXMobmF2cyk7XG4gICAgbmF2S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gXCJ1cGNvbWluZ1wiKXtcbiAgICAgICAgICAgIG5hdnNba2V5XSA9IG5hdnNba2V5XS5maWx0ZXIodGFzayA9PiB0YXNrICE9IFwiZW1wdHlcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdnNba2V5XS5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgICAgICBib2FyZC50YXNrcyA9IGJvYXJkLnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sgIT0gXCJlbXB0eVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIG5hdnM7XG5cbn1cblxuXG5jb25zdCBjcmVhdGVCb2FyZFRlbXBsYXRlID0oY3VycmVudFRleHQsdGFza3MpID0+IHtcbiAgICBsZXQgY3VycmVudFRhc2tzID0gW107XG4gICAgaWYgKHR5cGVvZiB0YXNrcyAhPSBcInVuZGVmaW5lZFwiKSBjdXJyZW50VGFza3MgPSB0YXNrczsgXG5cbiAgICBsZXQgYm9hcmQgPSB7Ym9hcmQ6IHRydWUsIHRleHQ6Y3VycmVudFRleHQsIHRhc2tzOiBjdXJyZW50VGFza3MsIGNoYW5nZWRCb2FyZExpc3RzOiBbXSwgfTtcblxuXG4gICAgcmV0dXJuIGJvYXJkO1xufVxuXG5cbmNvbnN0IHJlbmRlckxpc3RFZGl0b3JWYWx1ZSA9ICh0YXNrcykgPT4ge1xuICAgIGxldCBsaXN0RWRpdG9yID0gZmluZE9iamVjdEJ5TmFtZShcImxpc3RFZGl0b3JcIix0YXNrcyk7XG4gICAgaWYgKCFsaXN0RWRpdG9yKSByZXR1cm47XG4gICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IGRhdGVQaWNrZXIgPSBlbGVtZW50cy5kYXRlUGlja2VyWzBdO1xuICAgIGxldCB0YXNrVGV4dEJveCA9IGVsZW1lbnRzLnRhc2tUZXh0Qm94WzBdO1xuICAgIGlmIChkYXRlUGlja2VyKSAgbGlzdEVkaXRvci5kYXRlID0gZGF0ZVBpY2tlci52YWx1ZUFzRGF0ZTtcbiAgICBpZiAodGFza1RleHRCb3gpIGxpc3RFZGl0b3IudGV4dCA9IHRhc2tUZXh0Qm94LnZhbHVlO1xuXG4gICAgXG59XG5cblxuY29uc3QgYWRkQm9hcmRUYXNrcyA9IChzdGF0aWNBcnJheSkgPT4ge1xuICAgIHJlbmRlckxpc3RFZGl0b3JWYWx1ZShzdGF0aWNBcnJheSk7XG4gICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IHRleHQgPSBlbGVtZW50cy5ib2FyZFRleHRCb3hbMF0udmFsdWU7XG4gICAgaWYodGV4dC5sZW5ndGggPT0gMCB8fCAhY2hlY2tTcGFjZXModGV4dCkpIHRleHQgPSBcIk5ldyBCb2FyZFwiO1xuICAgIGxldCB0YXNrID0gY3JlYXRlQm9hcmRUZW1wbGF0ZSh0ZXh0KTtcbiAgICBzdGF0aWNBcnJheS5wdXNoKHRhc2spO1xufVxuXG5cblxuXG5leHBvcnQge2FwcGx5VGFza0NoYW5nZXMsIHJlbW92ZU5hdkVtcHRpZXMscmVuZGVyTGlzdEVkaXRvclZhbHVlLCBhZGRCb2FyZFRhc2tzIH0iLCJpbXBvcnQgXCIuLi9zdHlsZXMvYm9hcmQuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvbmF2aWdhdGlvbi5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZXMuY3NzXCJcblxuICAgIFxuY29uc3QgcmVtb3ZlSXRlbSA9KGFycmF5LCBpbmRleCkgPT4ge1xuICAgIGxldCBuZXdUYXNrcyA9IFtdO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoaSAhPSBpbmRleCl7XG4gICAgICAgICAgICBuZXdUYXNrcy5wdXNoKGFycmF5W2ldKVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRJbmRleCArK1xuICAgIH1cbiAgICByZXR1cm4gbmV3VGFza3M7XG59XG5cblxuY29uc3QgYWRkSXRlbSA9IChhcnJheSxpbmRleCwgaXRlbSkgPT4ge1xuICAgIGxldCBuZXdUYXNrcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICsrKXtcbiAgICAgICAgaWYgKGkgPT0gaW5kZXgpe1xuICAgICAgICAgICAgbmV3VGFza3MucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1Rhc2tzLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1Rhc2tzO1xufVxuXG5cbmNvbnN0IHNldEFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gYXJyYXk7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgbmV3QXJyYXkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgbmV3VGFza3MucHVzaCh0YXNrKTtcbiAgICB9KVxuICAgIHJldHVybiBuZXdUYXNrcztcbn1cblxuXG5cblxuXG5cbmNvbnN0IHNldE9iamVjdCA9IChvYmplY3QsaXNBcnJheSkgPT4ge1xuICAgIGxldCBuZXdPYmplY3QgPSBvYmplY3Q7XG4gICAgbGV0IGJsYW5rT2JqZWN0ID0ge307XG4gICAgbGV0IG5ld09iamVjdEtleXMgPSBPYmplY3Qua2V5cyhuZXdPYmplY3QpO1xuICAgIGxldCBuZXdBcnJheSA9IGZhbHNlO1xuICAgIG5ld0FycmF5ID0gb2JqZWN0O1xuXG4gICAgaWYgKCFpc0FycmF5KXtcbiAgICAgICAgbmV3T2JqZWN0S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld09iamVjdFtrZXldICE9IFwib2JqZWN0XCIgKSAgYmxhbmtPYmplY3Rba2V5XSA9IG5ld09iamVjdFtrZXldOyAgIFxuICAgICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld09iamVjdFtrZXldKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIgKXtcbiAgICAgICAgICAgICAgICBibGFua09iamVjdFtrZXldID0gbmV3T2JqZWN0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGJsYW5rQXJyYXkgPSBbXTtcbiAgICAgICAgbmV3QXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSAhPSBcIm9iamVjdFwiKSBibGFua0FycmF5LnB1c2goaXRlbSlcbiAgICAgICAgICAgIGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIpe1xuICAgICAgICAgICAgICAgIGJsYW5rQXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYmxhbmtPYmplY3QgPSBibGFua0FycmF5O1xuICAgIH1cbiAgICBpZiAoIWlzQXJyYXkpe1xuICAgICAgICBuZXdPYmplY3RLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3T2JqZWN0W2tleV0gPT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShuZXdPYmplY3Rba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3T2JqZWN0W2tleV0pICE9PSBcIltvYmplY3QgRGF0ZV1cIikge1xuICAgICAgICAgICAgICAgICAgICBibGFua09iamVjdFtrZXldID0gc2V0T2JqZWN0KG5ld09iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobmV3T2JqZWN0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgYmxhbmtPYmplY3Rba2V5XSA9IHNldE9iamVjdChuZXdPYmplY3Rba2V5XSx0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgbmV3QXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKSAhPT0gXCJbb2JqZWN0IERhdGVdXCIpe1xuICAgICAgICAgICAgICAgICAgICBibGFua09iamVjdC5zcGxpY2UoY3VycmVudEluZGV4LDAsc2V0T2JqZWN0KGl0ZW0pKVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSl7XG4gICAgICAgICAgICAgICAgYmxhbmtPYmplY3Quc3BsaWNlKGN1cnJlbnRJbmRleCwwLHNldE9iamVjdChpdGVtLHRydWUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEluZGV4ICsrO1xuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gYmxhbmtPYmplY3Q7XG5cblxuXG5cbn1cblxuXG5cbmNvbnN0IGFkZEJpbmRpbmdzID0gKGVsZW1lbnRzLGZ1bmMsYmluZGluZykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKTtcbiAgICBlbHNlIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKSk7XG59XG5cbmNvbnN0IHJlbW92ZUJpbmRpbmdzID0gKGVsZW1lbnRzLGZ1bmMsYmluZGluZykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpIGVsZW1lbnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKTtcbiAgICBlbHNlIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKSk7XG59XG5cblxuXG5cblxuZXhwb3J0IHtyZW1vdmVJdGVtLCBhZGRJdGVtLCBhZGRCaW5kaW5ncywgcmVtb3ZlQmluZGluZ3MsIHNldEFycmF5LCBzZXRPYmplY3R9XG4iLCJpbXBvcnQgeyBhZGRCaW5kaW5ncywgcmVtb3ZlQmluZGluZ3MgfSBmcm9tICcuL2VsZW1lbnRFdmVudHMuanMnO1xuaW1wb3J0IHsgZ2V0SW5pdGlhbEVsZW1lbnRzLCBnZXRVcGRhdGVkRWxlbWVudHMgfSBmcm9tICcuL3BhZ2VMYXlvdXQuanMnO1xuaW1wb3J0IHsgbmF2aWdhdGlvbiB9IGZyb20gJy4vbmF2LmpzJztcblxuaW1wb3J0IHsgY29udGVudE1lbnUgfSBmcm9tICcuL2NvbnRlbnQuanMnO1xuXG5jb25zdCBNb2JpbGUgPSAoKSA9PiB7XG4gIGxldCBkb207XG4gIGxldCBpc01vYmlsZSA9IGZhbHNlO1xuXG4gIGxldCBtb2JpbGVNZW51T24gPSBmYWxzZTtcblxuICBsZXQgcmVtb3ZlTW9iaWxlTWVudSA9IGZhbHNlO1xuXG4gIGxldCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA1NTBweCknKTtcbiAgbGV0IGNvbnRlbnQ7XG4gIGxldCBuYXY7XG5cbiAgY29uc3QgcmVtb3ZlTW9iaWxlQmluZGluZ3MgPSAoKSA9PiB7XG4gICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG5cbiAgICByZW1vdmVCaW5kaW5ncyhkb20uaGFtYnVyZ2VyTWVudSwgb3Blbk5hdmlnYXRpb24sICdjbGljaycpO1xuICAgIHJlbW92ZUJpbmRpbmdzKGRvbS5leGl0LCBvcGVuTmF2aWdhdGlvbiwgJ2NsaWNrJyk7XG4gICAgcmVtb3ZlQmluZGluZ3MoZG9tLnByb2plY3RBZGRlciwgYWRkUmVuZGVyUHJvamVjdEJpbmRpbmdzLCAnY2xpY2snKTtcblxuICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLnByb2plY3RDb250YWluZXIsIG9wZW5OYXZpZ2F0aW9uLCAnY2xpY2snKTtcbiAgICByZW1vdmVCaW5kaW5ncyhkb20udXBDb21pbmdCdXR0b24sIG9wZW5OYXZpZ2F0aW9uLCAnY2xpY2snKTtcbiAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5lZGl0SXRlbXMsIGFkZFJlbmRlck1vYmlsZUJpbmRpbmdzLCAnY2xpY2snKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVSZW5kZXJQcm9qZWN0QmluZGluZ3MgPSAoKSA9PiB7XG4gICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG5cbiAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5hZGRQcm9qZWN0TGFiZWxzLCByZW5kZXJNb2JpbGVNZW51Q2xpY2ssICdjbGljaycpO1xuICAgIHJlbW92ZUJpbmRpbmdzKGRvbS53aG9sZU92ZXJsYXksIHJlbmRlck1vYmlsZU1lbnVDbGljaywgJ2NsaWNrJyk7XG4gICAgcmVtb3ZlQmluZGluZ3Mod2luZG93LCByZW5kZXJNb2JpbGVNZW51S2V5cywgJ2tleWRvd24nKTtcbiAgfTtcblxuICBjb25zdCBhZGRNb2JpbGVCaW5kaW5ncyA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcblxuICAgIGFkZEJpbmRpbmdzKGRvbS5oYW1idXJnZXJNZW51LCBvcGVuTmF2aWdhdGlvbiwgJ2NsaWNrJyk7XG4gICAgYWRkQmluZGluZ3MoZG9tLmV4aXQsIG9wZW5OYXZpZ2F0aW9uLCAnY2xpY2snKTtcbiAgICBhZGRCaW5kaW5ncyhkb20ucHJvamVjdEFkZGVyLCBhZGRSZW5kZXJQcm9qZWN0QmluZGluZ3MsICdjbGljaycpO1xuXG4gICAgYWRkQmluZGluZ3MoZWxlbWVudHMucHJvamVjdENvbnRhaW5lciwgb3Blbk5hdmlnYXRpb24sICdjbGljaycpO1xuICAgIGFkZEJpbmRpbmdzKGRvbS51cENvbWluZ0J1dHRvbiwgb3Blbk5hdmlnYXRpb24sICdjbGljaycpO1xuICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmVkaXRJdGVtcywgYWRkUmVuZGVyTW9iaWxlQmluZGluZ3MsICdjbGljaycpO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5OYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgIG1vYmlsZU1lbnVPbiA9ICFtb2JpbGVNZW51T247XG4gICAgcmVuZGVyTW9iaWxlTWVudSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0TW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBkb20uZXhpdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvbS5tb2JpbGVNZW51LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZG9tLnBhZ2VDb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZG9tLm5hdmlnYXRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCBhZGRSZW5kZXJQcm9qZWN0QmluZGluZ3MgPSAoKSA9PiB7XG4gICAgbmF2LmFjdGl2YXRlUHJvamVjdFRhc2soKTtcblxuICAgIGFkZFJlbmRlck1vYmlsZUJpbmRpbmdzKCk7XG4gIH07XG5cbiAgY29uc3QgYWRkUmVuZGVyTW9iaWxlQmluZGluZ3MgPSAoKSA9PiB7XG4gICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbmF2LnJlbW92ZVNwZWNpYWxNb2JpbGVCaW5kaW5ncygpO1xuXG4gICAgYWRkQmluZGluZ3MoZWxlbWVudHMuYWRkUHJvamVjdExhYmVscywgcmVuZGVyTW9iaWxlTWVudUNsaWNrLCAnY2xpY2snKTtcbiAgICBhZGRCaW5kaW5ncyhkb20ud2hvbGVPdmVybGF5LCByZW5kZXJNb2JpbGVNZW51Q2xpY2ssICdjbGljaycpO1xuICAgIGFkZEJpbmRpbmdzKHdpbmRvdywgcmVuZGVyTW9iaWxlTWVudUtleXMsICdrZXlkb3duJyk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTW9iaWxlTWVudUtleXMgPSAoZXZlbnQpID0+IHtcbiAgICBuYXYuY3JlYXRlUHJvamVjdFRhc2tzS2V5cyhldmVudCk7XG5cbiAgICBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIG5hdi5yZW1vdmVTcGVjaWFsTW9iaWxlQmluZGluZ3MoKTtcbiAgICAgIHJlbW92ZVJlbmRlck1vYmlsZUV2ZW50cygpO1xuICAgICAgcmVuZGVyTW9iaWxlTWVudSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVSZW5kZXJNb2JpbGVFdmVudHMgPSAoKSA9PiB7XG4gICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG5cbiAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5hZGRQcm9qZWN0TGFiZWxzLCByZW5kZXJNb2JpbGVNZW51Q2xpY2ssICdjbGljaycpO1xuICAgIHJlbW92ZUJpbmRpbmdzKGRvbS53aG9sZU92ZXJsYXksIHJlbmRlck1vYmlsZU1lbnVDbGljaywgJ2NsaWNrJyk7XG4gICAgcmVtb3ZlQmluZGluZ3Mod2luZG93LCByZW5kZXJNb2JpbGVNZW51S2V5cywgJ2tleWRvd24nKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJNb2JpbGVNZW51Q2xpY2sgPSAoKSA9PiB7XG4gICAgbmF2LmNyZWF0ZVByb2plY3RUYXNrc0NsaWNrKCk7XG4gICAgbmF2LnJlbW92ZVNwZWNpYWxNb2JpbGVCaW5kaW5ncygpO1xuICAgIHJlbW92ZVJlbmRlck1vYmlsZUV2ZW50cygpO1xuXG4gICAgcmVuZGVyTW9iaWxlTWVudSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1vYmlsZU1lbnUgPSAoY2FuUmVtb3ZlTW9iaWxlTWVudSkgPT4ge1xuICAgIGRvbSA9IGdldEluaXRpYWxFbGVtZW50cygpO1xuICAgIHJlbW92ZU1vYmlsZUJpbmRpbmdzKCk7XG4gICAgbmF2LnJlbW92ZU5hdmlnYXRpb25CaW5kaW5ncygpO1xuICAgIGNvbnRlbnQucmVtb3ZlVGFza0JpbmRpbmdzKCk7XG4gICAgcmVzZXRNb2JpbGVNZW51KCk7XG5cbiAgICBpZiAobW9iaWxlTWVudU9uKSB7XG4gICAgICBkb20ubmF2aWdhdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRvbS5leGl0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZG9tLm1vYmlsZU1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAocmVtb3ZlTW9iaWxlTWVudSAmJiBjYW5SZW1vdmVNb2JpbGVNZW51KSB7XG4gICAgICBkb20ubmF2aWdhdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRvbS5tb2JpbGVNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBkb20ucGFnZUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGRvbS5leGl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIG5hdi5hZGROYXZpZ2F0aW9uQmluZGluZ3MoKTtcbiAgICAgIGNvbnRlbnQuYWRkVGFza0JpbmRpbmdzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFtb2JpbGVNZW51T24pIGNvbnRlbnQuYWRkVGFza0JpbmRpbmdzKCk7XG4gICAgYWRkTmF2aWdhdGlvbkJpbmRpbmdzKCk7XG4gICAgYWRkTW9iaWxlQmluZGluZ3MoKTtcbiAgfTtcblxuICBjb25zdCBhZGROYXZpZ2F0aW9uQmluZGluZ3MgPSAoKSA9PiB7XG4gICAgbmF2LmFkZE5hdmlnYXRpb25CaW5kaW5ncygpO1xuICAgIG5hdi5yZW1vdmVTcGVjaWFsTW9iaWxlQmluZGluZ3MoKTtcbiAgfTtcblxuICBjb25zdCB3YXRjaE1lZGlhID0gKG1lZGlhUXVlcnkpID0+IHtcbiAgICBpZiAobWVkaWEubWF0Y2hlcyB8fCBtZWRpYVF1ZXJ5Lm1hdGNoZXMpIHtcbiAgICAgIGlmICghcmVtb3ZlTW9iaWxlTWVudSkge1xuICAgICAgICBuYXYucmVtb3ZlRWRpdG9yKCk7XG4gICAgICAgIHJlbmRlck1vYmlsZU1lbnUoKTtcblxuICAgICAgICByZW1vdmVNb2JpbGVNZW51ID0gdHJ1ZTtcbiAgICAgICAgaXNNb2JpbGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVtb3ZlTW9iaWxlTWVudSkge1xuICAgICAgICByZW5kZXJNb2JpbGVNZW51KHRydWUpO1xuICAgICAgICByZW1vdmVNb2JpbGVCaW5kaW5ncygpO1xuXG4gICAgICAgIHJlbW92ZVJlbmRlclByb2plY3RCaW5kaW5ncygpO1xuICAgICAgICBuYXYucmVtb3ZlTmF2aWdhdGlvbkJpbmRpbmdzKCk7XG4gICAgICAgIG5hdi5hZGROYXZpZ2F0aW9uQmluZGluZ3MoKTtcbiAgICAgICAgbmF2LnJlbmRlck92ZXJsYXkoKTtcblxuICAgICAgICByZW1vdmVNb2JpbGVNZW51ID0gZmFsc2U7XG4gICAgICAgIGlzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgIG1vYmlsZU1lbnVPbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBhY3RpdmF0ZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgY29udGVudCA9IGNvbnRlbnRNZW51O1xuICAgIG5hdiA9IG5hdmlnYXRpb247XG5cbiAgICBhZGRCaW5kaW5ncyhtZWRpYSwgd2F0Y2hNZWRpYSwgJ2NoYW5nZScpO1xuICAgIHdhdGNoTWVkaWEobWVkaWEpO1xuICB9O1xuXG4gIHJldHVybiB7IGFjdGl2YXRlTW9iaWxlTWVudSB9O1xufTtcblxubGV0IG1vYmlsZSA9IE1vYmlsZSgpO1xuZXhwb3J0IHsgbW9iaWxlIH07XG4iLCJpbXBvcnQge1xuICByZW1vdmVJdGVtLFxuICBhZGRJdGVtLFxuICBhZGRCaW5kaW5ncyxcbiAgcmVtb3ZlQmluZGluZ3MsXG4gIHNldEFycmF5LFxufSBmcm9tICcuL2VsZW1lbnRFdmVudHMuanMnO1xuaW1wb3J0IHsgZ2V0SW5pdGlhbEVsZW1lbnRzLCBnZXRVcGRhdGVkRWxlbWVudHMgfSBmcm9tICcuL3BhZ2VMYXlvdXQuanMnO1xuXG5pbXBvcnQgeyBzZW5kIH0gZnJvbSAnLi9zZW5kLmpzJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5pbXBvcnQgeyBjcmVhdGVOYXZUYXNrLCBjcmVhdGVQcm9qZWN0RWRpdG9yIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbmltcG9ydCB7IGNvbnRlbnRNZW51IH0gZnJvbSAnLi9jb250ZW50LmpzJztcblxuaW1wb3J0IHsgY2hlY2tTcGFjZXMgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XG5cbmNvbnN0IG5hdiA9ICgpID0+IHtcbiAgbGV0IGRvbUVsZW1lbnRzO1xuICBsZXQgY2hhbmdlZFRhc2tzID0gW107XG4gIGxldCBzdGF0aWNUYXNrcyA9IFtdO1xuICBsZXQgY29udGVudDtcbiAgbGV0IGhpZ2hsaWdodGVkSW5kZXg7XG4gIGxldCB1cGNvbWluZ0J1dHRvbjtcblxuICBjb25zdCByZW1vdmVOYXZpZ2F0aW9uQmluZGluZ3MgPSAobm90UmVtb3ZlQWRkUHJvamVjdExhYmVsKSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRJdGVtcyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgIGxldCBkb21FbGVtZW50cyA9IGdldEluaXRpYWxFbGVtZW50cygpO1xuICAgIHVwY29taW5nQnV0dG9uID0gZG9tRWxlbWVudHMudXBDb21pbmdCdXR0b247XG5cbiAgICByZW1vdmVCaW5kaW5ncyh1cGRhdGVkSXRlbXMuZWRpdEl0ZW1zLCBlZGl0SXRlbSwgJ2NsaWNrJyk7XG4gICAgcmVtb3ZlQmluZGluZ3ModXBkYXRlZEl0ZW1zLmRlbGV0ZUl0ZW1zLCBkZWxldGVJdGVtLCAnY2xpY2snKTtcbiAgICByZW1vdmVCaW5kaW5ncyh1cGRhdGVkSXRlbXMucHJvamVjdENvbnRhaW5lciwgc3dpdGNoUGFnZSwgJ2NsaWNrJyk7XG4gICAgcmVtb3ZlQmluZGluZ3MoZG9tRWxlbWVudHMucHJvamVjdEFkZGVyLCBhY3RpdmF0ZVByb2plY3RUYXNrLCAnY2xpY2snKTtcbiAgICByZW1vdmVCaW5kaW5ncyhkb21FbGVtZW50cy51cENvbWluZ0J1dHRvbiwgYWN0aXZhdGVVcENvbWluZ1Rhc2ssICdjbGljaycpO1xuICAgIHJlbW92ZUJpbmRpbmdzKHVwY29taW5nQnV0dG9uLCBoaWdobGlnaHRVcENvbWluZ0J1dHRvbiwgJ21vdXNlb3ZlcicpO1xuICAgIHJlbW92ZUJpbmRpbmdzKHVwY29taW5nQnV0dG9uLCB1bmhvdmVyVXBDb21pbmdCdXR0b24sICdtb3VzZWxlYXZlJyk7XG5cbiAgICBpZiAoIW5vdFJlbW92ZUFkZFByb2plY3RMYWJlbClcbiAgICAgIHJlbW92ZUJpbmRpbmdzKFxuICAgICAgICB1cGRhdGVkSXRlbXMuYWRkUHJvamVjdExhYmVscyxcbiAgICAgICAgY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2ssXG4gICAgICAgICdjbGljaydcbiAgICAgICk7XG4gICAgaWYgKCFub3RSZW1vdmVBZGRQcm9qZWN0TGFiZWwgJiYgdXBkYXRlZEl0ZW1zLmFkZFByb2plY3RMYWJlbHMubGVuZ3RoICE9IDApXG4gICAgICByZW1vdmVCaW5kaW5ncyh3aW5kb3csIGNyZWF0ZVByb2plY3RUYXNrc0tleXMsICdrZXlkb3duJyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU3BlY2lhbE1vYmlsZUJpbmRpbmdzID0gKCkgPT4ge1xuICAgIGxldCB1cGRhdGVkSXRlbXMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcblxuICAgIHJlbW92ZUJpbmRpbmdzKGRvbUVsZW1lbnRzLnByb2plY3RBZGRlciwgYWN0aXZhdGVQcm9qZWN0VGFzaywgJ2NsaWNrJyk7XG4gICAgcmVtb3ZlQmluZGluZ3MoXG4gICAgICB1cGRhdGVkSXRlbXMuYWRkUHJvamVjdExhYmVscyxcbiAgICAgIGNyZWF0ZVByb2plY3RUYXNrc0NsaWNrLFxuICAgICAgJ2NsaWNrJ1xuICAgICk7XG5cbiAgICByZW1vdmVCaW5kaW5ncyhkb21FbGVtZW50cy53aG9sZU92ZXJsYXksIGNyZWF0ZVByb2plY3RUYXNrc0NsaWNrLCAnY2xpY2snKTtcbiAgICByZW1vdmVCaW5kaW5ncyh3aW5kb3csIGNyZWF0ZVByb2plY3RUYXNrc0tleXMsICdrZXlkb3duJyk7XG4gIH07XG5cbiAgY29uc3QgbG9va1VwVGFzayA9IChpbmRleCkgPT4ge1xuICAgIHJldHVybiBzdGF0aWNUYXNrc1tpbmRleF07XG4gIH07XG5cbiAgY29uc3QgdW5ob3ZlclVwQ29taW5nQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmIChoaWdobGlnaHRlZEluZGV4ICE9ICd1cGNvbWluZycpIHVuaGlnaGxpZ2h0VXBDb21pbmdCdXR0b24oKTtcbiAgfTtcblxuICBjb25zdCBhZGROYXZpZ2F0aW9uQmluZGluZ3MgPSAoKSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRJdGVtcyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgIGxldCBkb21FbGVtZW50cyA9IGdldEluaXRpYWxFbGVtZW50cygpO1xuXG4gICAgYWRkQmluZGluZ3ModXBkYXRlZEl0ZW1zLmVkaXRJdGVtcywgZWRpdEl0ZW0sICdjbGljaycpO1xuICAgIGFkZEJpbmRpbmdzKHVwZGF0ZWRJdGVtcy5kZWxldGVJdGVtcywgZGVsZXRlSXRlbSwgJ2NsaWNrJyk7XG4gICAgYWRkQmluZGluZ3MoXG4gICAgICB1cGRhdGVkSXRlbXMuYWRkUHJvamVjdExhYmVscyxcbiAgICAgIGNyZWF0ZVByb2plY3RUYXNrc0NsaWNrLFxuICAgICAgJ2NsaWNrJ1xuICAgICk7XG4gICAgYWRkQmluZGluZ3ModXBkYXRlZEl0ZW1zLnByb2plY3RDb250YWluZXIsIHN3aXRjaFBhZ2UsICdjbGljaycpO1xuICAgIGFkZEJpbmRpbmdzKGRvbUVsZW1lbnRzLnByb2plY3RBZGRlciwgYWN0aXZhdGVQcm9qZWN0VGFzaywgJ2NsaWNrJyk7XG4gICAgYWRkQmluZGluZ3ModXBjb21pbmdCdXR0b24sIGFjdGl2YXRlVXBDb21pbmdUYXNrLCAnY2xpY2snKTtcbiAgICBhZGRCaW5kaW5ncyh1cGNvbWluZ0J1dHRvbiwgaGlnaGxpZ2h0VXBDb21pbmdCdXR0b24sICdtb3VzZW92ZXInKTtcbiAgICBhZGRCaW5kaW5ncyh1cGNvbWluZ0J1dHRvbiwgdW5ob3ZlclVwQ29taW5nQnV0dG9uLCAnbW91c2VsZWF2ZScpO1xuXG4gICAgaWYgKHVwZGF0ZWRJdGVtcy5hZGRQcm9qZWN0TGFiZWxzLmxlbmd0aCAhPSAwKVxuICAgICAgYWRkQmluZGluZ3Mod2luZG93LCBjcmVhdGVQcm9qZWN0VGFza3NLZXlzLCAna2V5ZG93bicpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b25XaG9sZU92ZXJheUJpbmRpbmdzID0gKCkgPT4ge1xuICAgIGxldCB1cGRhdGVkSXRlbXMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICBhZGRCaW5kaW5ncyh1cGRhdGVkSXRlbXMucHJvamVjdEJ1dHRvbiwgY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2ssICdjbGljaycpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3RXaG9sZU92ZXJsYXlCaW5kaW5ncyA9ICgpID0+IHtcbiAgICBsZXQgdXBkYXRlZEl0ZW1zID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgcmVtb3ZlQmluZGluZ3MoXG4gICAgICB1cGRhdGVkSXRlbXMucHJvamVjdEJ1dHRvbixcbiAgICAgIGNyZWF0ZVByb2plY3RUYXNrc0NsaWNrLFxuICAgICAgJ2NsaWNrJ1xuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgc2V0SGlnaGxpZ2h0SW5kZXggPSAoaW5kZXgpID0+IHtcbiAgICBoaWdobGlnaHRlZEluZGV4ID0gaW5kZXg7XG4gICAgc3RvcmFnZS5zdG9yZUhpZ2hsaWdoSW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaFBhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgdGl0bGUgPSBzdGF0aWNUYXNrc1tldmVudC50YXJnZXQuY3VycmVudEluZGV4XS50YXNrO1xuICAgIGNvbnRlbnQuYWN0aXZhdGVDb250ZW50KGV2ZW50LnRhcmdldC5jdXJyZW50SW5kZXgsIGZhbHNlLCB0aXRsZSk7XG4gICAgc2V0SGlnaGxpZ2h0SW5kZXgoZXZlbnQudGFyZ2V0LmN1cnJlbnRJbmRleCk7XG4gICAgcmVuZGVySGlnaGxpZ2h0RWxlbWVudHMoKTtcbiAgICByZW5kZXJQcm9qZWN0VGFza3MoKTtcbiAgfTtcblxuICBjb25zdCB1bkhpZ2hsaWdodEJ1dHRvbiA9ICgpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHVuaGlnaGxpZ2h0VXBDb21pbmdCdXR0b24oKTtcbiAgICBjaGFuZ2VkVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2submF2VGFzayB8fCB0YXNrLnVwQ29taW5nVGFzaykge1xuICAgICAgICBpZiAodGFzay5oaWdobGlnaHQpIHtcbiAgICAgICAgICB0YXNrLmhpZ2hsaWdodCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbmRleCsrO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuaGlnaGxpZ2h0VXBDb21pbmdCdXR0b24gPSAoKSA9PiB7XG4gICAgdXBjb21pbmdCdXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMTksIDc1LCAyMDUpJztcbiAgfTtcblxuICBjb25zdCBoaWdobGlnaHRVcENvbWluZ0J1dHRvbiA9ICgpID0+IHtcbiAgICB1cGNvbWluZ0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigyMiwgODMsIDIyNyknO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckhpZ2hsaWdodEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGlmIChzdGF0aWNUYXNrcy5sZW5ndGggPT0gMCAmJiBoaWdobGlnaHRlZEluZGV4ICE9ICd1cGNvbWluZycpIHJldHVybjtcbiAgICBsZXQgaXNFZGl0ID0gY2hhbmdlZFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5lZGl0KTtcbiAgICBpZiAoaXNFZGl0Lmxlbmd0aCAhPSAwKSB7XG4gICAgICB1bkhpZ2hsaWdodEJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWdobGlnaHRCdXR0b24oaGlnaGxpZ2h0ZWRJbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhpZ2hsaWdodEJ1dHRvbiA9IChpbmRleCkgPT4ge1xuICAgIHVuSGlnaGxpZ2h0QnV0dG9uKCk7XG5cbiAgICBpZiAoaW5kZXggPT0gJ3VwY29taW5nJykgaGlnaGxpZ2h0VXBDb21pbmdCdXR0b24oKTtcbiAgICBlbHNlIGNoYW5nZWRUYXNrc1tpbmRleF0uaGlnaGxpZ2h0ID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRDdXJyZW50SW5kZXggPSAoKSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRJdGVtcyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgIGxldCBwcm9qZWN0TGFiZWwgPSB1cGRhdGVkSXRlbXMuYWRkUHJvamVjdExhYmVsc1swXTtcbiAgICBpZiAoIXByb2plY3RMYWJlbCkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSBwcm9qZWN0TGFiZWwuY3VycmVudEluZGV4O1xuXG4gICAgcmV0dXJuIGN1cnJlbnRJbmRleDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0VGFza3NLZXlzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICBsZXQgY3VycmVudEluZGV4ID0gZ2V0Q3VycmVudEluZGV4KCk7XG4gICAgICBpZiAoY3VycmVudEluZGV4ID09PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgY3JlYXRlUHJvamVjdFRhc2tzKGN1cnJlbnRJbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RUYXNrc0NsaWNrID0gKCkgPT4ge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSBnZXRDdXJyZW50SW5kZXgoKTtcbiAgICBjcmVhdGVQcm9qZWN0VGFza3MoY3VycmVudEluZGV4KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0VGFza3MgPSAoaW5kZXgpID0+IHtcbiAgICBsZXQgdGFza1RleHQgPSBnZXRUZXh0Qm94VmFsdWVzKCk7XG4gICAgbGV0IGlzRWRpdGluZ1Rhc2sgPSBmYWxzZTtcbiAgICBsZXQgaXNVcENvbWluZyA9IGNvbnRlbnQuZ2V0SXNVcENvbWluZygpO1xuXG4gICAgbGV0IHRhc2sgPSB7IG5hdlRhc2s6IHRydWUsIHRhc2s6IHRhc2tUZXh0LCBoaWdobGlnaHQ6IGZhbHNlIH07XG4gICAgaWYgKHRhc2tUZXh0Lmxlbmd0aCAhPSAwICYmIGNoZWNrU3BhY2VzKHRhc2tUZXh0KSkge1xuICAgICAgaWYgKHN0YXRpY1Rhc2tzW2luZGV4XSkge1xuICAgICAgICBzdGF0aWNUYXNrc1tpbmRleF0gPSB0YXNrO1xuICAgICAgICBpc0VkaXRpbmdUYXNrID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgIHNldEhpZ2hsaWdodEluZGV4KGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VkVGFza3MgPSBzZXRBcnJheShzdGF0aWNUYXNrcyk7XG4gICAgcmVuZGVySGlnaGxpZ2h0RWxlbWVudHMoKTtcbiAgICBpZiAoc3RhdGljVGFza3NbaW5kZXhdKSBjaGFuZ2VkVGFza3NbaW5kZXhdLmhpZ2hsaWdodCA9IHRydWU7XG4gICAgcmVuZGVyUHJvamVjdFRhc2tzKCk7XG5cbiAgICBpZiAoaW5kZXggPT0gc3RhdGljVGFza3MubGVuZ3RoIC0gMSAmJiAhaXNFZGl0aW5nVGFzaykge1xuICAgICAgc2VuZC5zZW5kTmFtZShpbmRleCwgdGFzay50YXNrKTtcbiAgICAgIHN0b3JhZ2Uuc3RvcmVEYXRhKCk7XG4gICAgICBsZXQgdGl0bGUgPSBzdGF0aWNUYXNrc1tpbmRleF0udGFzaztcblxuICAgICAgY29udGVudC5hY3RpdmF0ZUNvbnRlbnQoaW5kZXgsIGZhbHNlLCB0aXRsZSk7XG4gICAgfSBlbHNlIGlmIChpc0VkaXRpbmdUYXNrKSB7XG4gICAgICBzZW5kLnNlbmROYW1lKGluZGV4LCB0YXNrLnRhc2spO1xuICAgICAgc3RvcmFnZS5zdG9yZURhdGEoKTtcbiAgICAgIGlmIChpc1VwQ29taW5nKSBjb250ZW50LmFjdGl2YXRlQ29udGVudCgndXBjb21pbmcnKTtcbiAgICB9XG4gICAgcmVuZGVyT3ZlcmxheSgpO1xuICAgIGNvbnRlbnQuYWRkVGFza0JpbmRpbmdzKCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlSXRlbSA9IChldmVudCkgPT4ge1xuICAgIGxldCBpbmRleCA9IGV2ZW50LnRhcmdldC5jdXJyZW50SW5kZXg7XG5cbiAgICBzdGF0aWNUYXNrcyA9IHJlbW92ZUl0ZW0oc3RhdGljVGFza3MsIGluZGV4KTtcblxuICAgIHNlbmQuZGVsZXRlRGF0YShpbmRleCk7XG4gICAgc3RvcmFnZS5zdG9yZURhdGEoKTtcblxuICAgIGxldCByZW5kZXJJbmRleCA9IGluZGV4IC0gMTtcblxuICAgIGlmIChyZW5kZXJJbmRleCA8IDApIHtcbiAgICAgIHJlbmRlckluZGV4ID0gc3RhdGljVGFza3MubGVuZ3RoIC0gMTtcbiAgICAgIGlmIChzdGF0aWNUYXNrcy5sZW5ndGggPT0gMCkgcmVuZGVySW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudEluZGV4ID0gY29udGVudC5nZXRJbmRleCgpO1xuICAgIGxldCBpc1VwQ29taW5nID0gY29udGVudC5nZXRJc1VwQ29taW5nKCk7XG4gICAgbGV0IG5vcm1hbEluZGV4ID0gcmVuZGVySW5kZXggKyAxO1xuXG4gICAgaWYgKHJlbmRlckluZGV4ID09IC0xKSB7XG4gICAgICBjb250ZW50LmFjdGl2YXRlQ29udGVudChyZW5kZXJJbmRleCwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChub3JtYWxJbmRleCA9PSBjb250ZW50SW5kZXgpIHtcbiAgICAgIGxldCB0aXRsZSA9IHN0YXRpY1Rhc2tzW3JlbmRlckluZGV4XS50YXNrO1xuICAgICAgY29udGVudC5hY3RpdmF0ZUNvbnRlbnQocmVuZGVySW5kZXgsIHRydWUsIHRpdGxlKTtcbiAgICAgIHNldEhpZ2hsaWdodEluZGV4KHJlbmRlckluZGV4KTtcbiAgICB9IGVsc2UgaWYgKGlzVXBDb21pbmcpIHtcbiAgICAgIGNvbnRlbnQuYWN0aXZhdGVDb250ZW50KCd1cGNvbWluZycsIHRydWUpO1xuICAgICAgc2V0SGlnaGxpZ2h0SW5kZXgoJ3VwY29taW5nJyk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50SW5kZXgpIHtcbiAgICAgIGxldCB0aXRsZSA9IHN0YXRpY1Rhc2tzW2NvbnRlbnRJbmRleF0udGFzaztcbiAgICAgIGNvbnRlbnQuYWN0aXZhdGVDb250ZW50KGNvbnRlbnRJbmRleCwgdHJ1ZSwgdGl0bGUpO1xuICAgICAgc2V0SGlnaGxpZ2h0SW5kZXgoY29udGVudEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SGlnaGxpZ2h0SW5kZXgocmVuZGVySW5kZXgpO1xuICAgIH1cblxuICAgIGNoYW5nZWRUYXNrcyA9IHNldEFycmF5KHN0YXRpY1Rhc2tzKTtcblxuICAgIHJlbmRlckhpZ2hsaWdodEVsZW1lbnRzKCk7XG4gICAgcmVuZGVyUHJvamVjdFRhc2tzKCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdEl0ZW0gPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgcHJvamVjdFRhc2sgPSBsb29rVXBUYXNrKGV2ZW50LnRhcmdldC5jdXJyZW50SW5kZXgpO1xuICAgIGxldCB0ZXh0ID0gcHJvamVjdFRhc2sudGFzaztcbiAgICBjcmVhdGVFZGl0b3IodGV4dCwgZXZlbnQudGFyZ2V0LmN1cnJlbnRJbmRleCwgdHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGV4dEJveFZhbHVlcyA9ICgpID0+IHtcbiAgICBsZXQgZWRpdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRleHQnKTtcbiAgICBsZXQgdGV4dCA9IGVkaXRUZXh0LnZhbHVlO1xuICAgIHJldHVybiB0ZXh0O1xuICB9O1xuXG4gIGNvbnN0IGFzc2lnblRhc2tBY3Rpb25zID0gKGluZGV4LCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBsZXQgY2hpbGRFbGVtZW50cyA9IEFycmF5LmZyb20oY2hpbGRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKG5ld0VsZW1lbnQpID0+IHtcbiAgICAgIGlmIChuZXdFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAnZGVsZXRlSXRlbScpIHtcbiAgICAgICAgbmV3RWxlbWVudC5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgIH0gZWxzZSBpZiAobmV3RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ2VkaXRQcm9qZWN0Jykge1xuICAgICAgICBuZXdFbGVtZW50LmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFzc2lnblZhbHVlRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRJdGVtcyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgdXBkYXRlZEl0ZW1zLnByb2plY3RUYXNrSG9sZGVyQ2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgIGxldCBlbGVtZW50Q2hpbGRyZW4gPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgZWxlbWVudENoaWxkcmVuLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAncHJvamVjdFRvb2xzJykge1xuICAgICAgICAgIGNoaWxkRWxlbWVudC5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgICBhc3NpZ25UYXNrQWN0aW9ucyhpbmRleCwgY2hpbGRFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICdhZGRQcm9qZWN0TGFiZWwnKSB7XG4gICAgICAgICAgY2hpbGRFbGVtZW50LmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICdwcm9qZWN0Q29udGFpbmVyJykge1xuICAgICAgICAgIGNoaWxkRWxlbWVudC5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgICBsZXQgY2hpbGRBcnJheSA9IEFycmF5LmZyb20oY2hpbGRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICBjaGlsZEFycmF5WzBdLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGluZGV4Kys7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUHJvamVjdFRhc2tzID0gKCkgPT4ge1xuICAgIGRvbUVsZW1lbnRzID0gZ2V0SW5pdGlhbEVsZW1lbnRzKCk7XG5cbiAgICBkb21FbGVtZW50cy5wcm9qZWN0VGFza0hvbGRlci5pbm5lckhUTUwgPSAnJztcbiAgICBjaGFuZ2VkVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2suZWRpdCkge1xuICAgICAgICBsZXQgZWRpdG9yVGV4dCA9IGNyZWF0ZVByb2plY3RFZGl0b3IodGFzayk7XG4gICAgICAgIGRvbUVsZW1lbnRzLnByb2plY3RUYXNrSG9sZGVyLmlubmVySFRNTCArPSBlZGl0b3JUZXh0O1xuICAgICAgfSBlbHNlIGlmICh0YXNrLm5hdlRhc2spIHtcbiAgICAgICAgbGV0IHRhc2tUZXh0O1xuICAgICAgICB0YXNrLmhpZ2hsaWdodFxuICAgICAgICAgID8gKHRhc2tUZXh0ID0gY3JlYXRlTmF2VGFzayh0YXNrLCB0cnVlKSlcbiAgICAgICAgICA6ICh0YXNrVGV4dCA9IGNyZWF0ZU5hdlRhc2sodGFzaykpO1xuICAgICAgICBkb21FbGVtZW50cy5wcm9qZWN0VGFza0hvbGRlci5pbm5lckhUTUwgKz0gdGFza1RleHQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYXNzaWduVmFsdWVFbGVtZW50cygpO1xuICAgIGFkZE5hdmlnYXRpb25CaW5kaW5ncygpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck92ZXJsYXkgPSAoKSA9PiB7XG4gICAgaWYgKGNoZWNrUHJvamVjdEVkaXRvcigpKSB7XG4gICAgICBkb21FbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZG9tRWxlbWVudHMud2hvbGVPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgYWRkQmluZGluZ3MoZG9tRWxlbWVudHMud2hvbGVPdmVybGF5LCBjcmVhdGVQcm9qZWN0VGFza3NDbGljaywgJ2NsaWNrJyk7XG4gICAgICBhZGRQcm9qZWN0QnV0dG9uV2hvbGVPdmVyYXlCaW5kaW5ncygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21FbGVtZW50cy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICByZW1vdmVCaW5kaW5ncyhcbiAgICAgICAgZG9tRWxlbWVudHMud2hvbGVPdmVybGF5LFxuICAgICAgICBjcmVhdGVQcm9qZWN0VGFza3NDbGljayxcbiAgICAgICAgJ2NsaWNrJ1xuICAgICAgKTtcbiAgICAgIGRvbUVsZW1lbnRzLndob2xlT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgcmVtb3ZlUHJvamVjdFdob2xlT3ZlcmxheUJpbmRpbmdzKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUVkaXRvciA9ICgpID0+IHtcbiAgICBjaGFuZ2VkVGFza3MgPSBjaGFuZ2VkVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmVkaXQgIT0gdHJ1ZSk7XG4gICAgcmVuZGVyT3ZlcmxheSgpO1xuICAgIHJlbmRlclByb2plY3RUYXNrcygpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrUHJvamVjdEVkaXRvciA9ICgpID0+IHtcbiAgICBsZXQgYm9vbCA9IGZhbHNlO1xuICAgIGNoYW5nZWRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5lZGl0KSBib29sID0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYm9vbDtcbiAgfTtcbiAgY29uc3QgZGlzYWJsZVBhZ2VDb250ZW50RWxlbWVudHMgPSAoKSA9PiB7XG4gICAgcmVtb3ZlTmF2aWdhdGlvbkJpbmRpbmdzKHRydWUpO1xuICAgIGxldCB1cGRhdGVkRWxlbWVudCA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgIGlmICh1cGRhdGVkRWxlbWVudC5wcm9qZWN0QnV0dG9uLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgdXBkYXRlZEVsZW1lbnQucHJvamVjdEJ1dHRvbi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0QnV0dG9uSG92ZXInKTtcbiAgICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9ICdyZ2IoMTU3LDE2MiwxNzUpJztcbiAgICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgfSk7XG4gIH07XG5cbiAgLy9tYWtlIHN1cmUgZGlzYWJsZVBhZ2VDb250ZW50RWxlbWVudHMgYW5kIHJlbmRlck92ZXJsYXkgbWV0aG9kcyBhcmUgYmVsb3cgcmVuZGVyUHJvamVjdCB0YXNrcy5cbiAgLy9UaGlzIGlzIGJlY2F1c2UgcmVuZGVyT3ZlcmxheSB3aWxsIG92ZXJ3cml0ZSB0aGUgY2hhbmdlcyBjYXVzaW5nIHRoZSBwYWdlIHRvIGFjdCB3ZXJpZC5cbiAgY29uc3QgY3JlYXRlRWRpdG9yID0gKHRleHQsIGluZGV4KSA9PiB7XG4gICAgbGV0IGVkaXRvclRleHQgPSAnJztcbiAgICBpZiAodHlwZW9mIHRleHQgIT0gJ3VuZGVmaW5lZCcpIGVkaXRvclRleHQgPSB0ZXh0O1xuXG4gICAgaWYgKCFjaGVja1Byb2plY3RFZGl0b3IoKSkge1xuICAgICAgdHlwZW9mIGluZGV4ICE9ICd1bmRlZmluZWQnXG4gICAgICAgID8gKGNoYW5nZWRUYXNrcyA9IGFkZEl0ZW0oY2hhbmdlZFRhc2tzLCBpbmRleCwge1xuICAgICAgICAgICAgZWRpdDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBlZGl0b3JUZXh0LFxuICAgICAgICAgIH0pKVxuICAgICAgICA6IGNoYW5nZWRUYXNrcy5wdXNoKHsgZWRpdDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJIaWdobGlnaHRFbGVtZW50cygpO1xuICAgIHJlbmRlclByb2plY3RUYXNrcygpO1xuXG4gICAgZGlzYWJsZVBhZ2VDb250ZW50RWxlbWVudHMoKTtcbiAgICByZW5kZXJPdmVybGF5KCk7XG5cbiAgICBjb250ZW50LnJlbW92ZVRhc2tCaW5kaW5ncygpO1xuICB9O1xuXG4gIGNvbnN0IGFjdGl2YXRlVXBDb21pbmdUYXNrID0gKCkgPT4ge1xuICAgIGNvbnRlbnQuYWN0aXZhdGVDb250ZW50KCd1cGNvbWluZycpO1xuICAgIHNldEhpZ2hsaWdodEluZGV4KCd1cGNvbWluZycpO1xuICAgIHJlbmRlckhpZ2hsaWdodEVsZW1lbnRzKCk7XG4gICAgcmVuZGVyUHJvamVjdFRhc2tzKCk7XG4gIH07XG5cbiAgY29uc3QgYWN0aXZhdGVQcm9qZWN0VGFzayA9ICgpID0+IHtcbiAgICBjcmVhdGVFZGl0b3IoKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VkVGl0bGVzVG9UYXNrcyA9ICh0aXRsZXMpID0+IHtcbiAgICBsZXQgbmV3VGFza3MgPSBbXTtcbiAgICBsZXQgdGl0bGVBcnJheSA9IE9iamVjdC52YWx1ZXModGl0bGVzKTtcbiAgICB0aXRsZUFycmF5LmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgICBsZXQgdGFzayA9IHsgbmF2VGFzazogdHJ1ZSwgdGFzazogdGl0bGUsIGhpZ2hsaWdodDogZmFsc2UgfTtcbiAgICAgIG5ld1Rhc2tzLnB1c2godGFzayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3VGFza3M7XG4gIH07XG5cbiAgLy8gd2hlbiBkb20gaXMgY2FsbGVkIGl0IHdpbGwgY3JlYXRlIHRoZSBkZWZhdWx0IGVsZW1lbnRzXG4gIGNvbnN0IGFjdGl2YXRlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICBjb250ZW50ID0gY29udGVudE1lbnU7XG4gICAgZG9tRWxlbWVudHMgPSBnZXRJbml0aWFsRWxlbWVudHMoKTtcbiAgICB1cGNvbWluZ0J1dHRvbiA9IGRvbUVsZW1lbnRzLnVwQ29taW5nQnV0dG9uO1xuICAgIGFkZEJpbmRpbmdzKGRvbUVsZW1lbnRzLnByb2plY3RBZGRlciwgYWN0aXZhdGVQcm9qZWN0VGFzaywgJ2NsaWNrJyk7XG4gICAgYWRkQmluZGluZ3MoZG9tRWxlbWVudHMudXBDb21pbmdCdXR0b24sIGFjdGl2YXRlVXBDb21pbmdUYXNrLCAnY2xpY2snKTtcbiAgICBhZGRCaW5kaW5ncyh1cGNvbWluZ0J1dHRvbiwgaGlnaGxpZ2h0VXBDb21pbmdCdXR0b24sICdtb3VzZW92ZXInKTtcbiAgICBhZGRCaW5kaW5ncyh1cGNvbWluZ0J1dHRvbiwgdW5ob3ZlclVwQ29taW5nQnV0dG9uLCAnbW91c2VsZWF2ZScpO1xuXG4gICAgbGV0IHN0b3JlZERhdGEgPSBzdG9yYWdlLnJldHJpZXZlRGF0YSgpO1xuXG4gICAgaWYgKHN0b3JlZERhdGEpIHtcbiAgICAgIGxldCBuZXdUYXNrcyA9IGNoYW5nZWRUaXRsZXNUb1Rhc2tzKHN0b3JlZERhdGEuZm9ybWF0ZWRUaXRsZXMpO1xuICAgICAgc3RhdGljVGFza3MgPSBzZXRBcnJheShuZXdUYXNrcyk7XG4gICAgICBjaGFuZ2VkVGFza3MgPSBzZXRBcnJheShuZXdUYXNrcyk7XG5cbiAgICAgIHNlbmQub3ZlcndyaXRlRGF0YShzdG9yZWREYXRhLmZvcm1hdGVkRGF0YSk7XG4gICAgICBzZW5kLm92ZXJ3cml0ZVRpdGxlcyhzdG9yZWREYXRhLmZvcm1hdGVkVGl0bGVzKTtcbiAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBzdG9yYWdlLnJldHJpZXZlSGlnaGxpZ2h0SW5kZXgoKTtcblxuICAgICAgcmVuZGVyUHJvamVjdFRhc2tzKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGFjdGl2YXRlTmF2aWdhdGlvbixcbiAgICByZW1vdmVOYXZpZ2F0aW9uQmluZGluZ3MsXG4gICAgYWRkTmF2aWdhdGlvbkJpbmRpbmdzLFxuICAgIGFjdGl2YXRlUHJvamVjdFRhc2ssXG4gICAgcmVtb3ZlU3BlY2lhbE1vYmlsZUJpbmRpbmdzLFxuICAgIGNyZWF0ZVByb2plY3RUYXNrc0NsaWNrLFxuICAgIGNyZWF0ZVByb2plY3RUYXNrc0tleXMsXG4gICAgcmVuZGVyT3ZlcmxheSxcbiAgICByZW1vdmVFZGl0b3IsXG4gIH07XG59O1xuXG5sZXQgbmF2aWdhdGlvbiA9IG5hdigpO1xuXG5leHBvcnQgeyBuYXZpZ2F0aW9uIH07XG4iLCJjb25zdCBjcmVhdGVEb21FbGVtZW50cyA9ICgpID0+IHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gIGxldCBwYWdlVGV4dCA9IGAgICAgPGRpdiBjbGFzcyA9IFwiY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3MgPSBcIndob2xlT3ZlcmxheVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3MgPSBcImVycm9yTWVzc2FnZVwiPlxuICAgIDxkaXYgY2xhc3MgPSBcIm1lc3NhZ2VIb2xkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29udGVudEhvbGRlclwiPlxuICAgICAgICAgICAgPGgyPkVycm9yPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzID0gXCJlcnJvck1lc3NhZ2VUZXh0XCI+VGV4dCBDYW5ub3QgYmUgb3ZlciAxMCBjaHJhY3RlcnM8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJleGl0QnV0dG9uXCI+RXhpdDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG4gICAgPGRpdiBjbGFzcyA9IFwibW9iaWxlTWVudVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJoYW1idXJnZXJNZW51XCI+PC9idXR0b24+XG4gICAgICAgIDxoMiBjbGFzcyA9IFwibW9iaWxlTWVudVRpdGxlXCI+VG8gRG8gTGlzdDwvaDI+XG5cbiAgICA8L2Rpdj4gXG4gICAgPGRpdiBjbGFzcyA9IFwic2VjdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwib3ZlcmxheVwiPmN1cnJlbnQgb3ZlcmxheTwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzID0gXCJleGl0XCI+WDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJlbGVtZW50c1wiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3MgPSBcImxpc3RUaXRsZVwiID5UbyBEbyBMaXN0PC9oMT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInVwQ29taW5nQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlVwY29taW5nPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0QWRkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJwcm9qZWN0VGV4dFwiPlByb2plY3Q8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcInBsdXNTaWduXCI+KzwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdFRhc2tIb2xkZXJcIj48L2Rpdj5cblxuXG5cblxuIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJwYWdlQ29udGVudFwiPiA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PmA7XG5cbiAgYm9keS5pbm5lckhUTUwgPSBwYWdlVGV4dDtcbn07XG5cbmNvbnN0IGdldEluaXRpYWxFbGVtZW50cyA9ICgpID0+IHtcbiAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbnMnKTtcbiAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpO1xuICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gIGxldCBleGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQnKTtcbiAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzJyk7XG4gIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdFRpdGxlJyk7XG4gIGxldCB1cENvbWluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cENvbWluZ0J1dHRvbicpO1xuICBsZXQgcHJvamVjdEFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RBZGRlcicpO1xuICBsZXQgcHJvamVjdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRleHQnKTtcbiAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXNTaWduJyk7XG4gIGxldCBwcm9qZWN0VGFza0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGFza0hvbGRlcicpO1xuICBsZXQgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3RCdXR0b24nKTtcbiAgbGV0IGVkaXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUZXh0Jyk7XG4gIGxldCBhZGRQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdExhYmVsJyk7XG4gIGxldCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGVudCcpO1xuICBsZXQgd2hvbGVPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndob2xlT3ZlcmxheScpO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yTWVzc2FnZScpO1xuICBsZXQgZXJyb3JNZXNzYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvck1lc3NhZ2VUZXh0Jyk7XG4gIGxldCBleGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXRCdXR0b24nKTtcblxuICBsZXQgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJNZW51Jyk7XG4gIGxldCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZU1lbnUnKTtcblxuICByZXR1cm4ge1xuICAgIHNlY3Rpb24sXG4gICAgbmF2aWdhdGlvbixcbiAgICBvdmVybGF5LFxuICAgIGV4aXQsXG4gICAgZWxlbWVudHMsXG4gICAgbGlzdFRpdGxlLFxuICAgIHVwQ29taW5nQnV0dG9uLFxuICAgIHByb2plY3RBZGRlcixcbiAgICBwcm9qZWN0VGV4dCxcbiAgICBwbHVzU2lnbixcbiAgICBwcm9qZWN0VGFza0hvbGRlcixcbiAgICBlZGl0UHJvamVjdEJ1dHRvbixcbiAgICBlZGl0VGV4dCxcbiAgICBhZGRQcm9qZWN0TGFiZWwsXG4gICAgcGFnZUNvbnRlbnQsXG4gICAgd2hvbGVPdmVybGF5LFxuICAgIGV4aXRCdXR0b24sXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIGVycm9yTWVzc2FnZVRleHQsXG4gICAgaGFtYnVyZ2VyTWVudSxcbiAgICBtb2JpbGVNZW51LFxuICB9O1xufTtcblxuY29uc3QgZ2V0VXBkYXRlZEVsZW1lbnRzID0gKCkgPT4ge1xuICBsZXQgYm9hcmRUZXh0Qm94ID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGRCb2FyZGVyVGV4dEJveCcpXG4gICk7XG4gIGxldCBib2FyZGVyQnV0dG9uID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGRCb2FyZGVyQnV0dG9uJylcbiAgKTtcbiAgbGV0IGVkaXRJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdFByb2plY3QnKSk7XG4gIGxldCBkZWxldGVJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlSXRlbScpKTtcbiAgbGV0IHByb2plY3RDb250YWluZXJUZXh0ID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0Q29udGFpbmVyVGV4dCcpXG4gICk7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0Q29udGFpbmVyJylcbiAgKTtcbiAgbGV0IGFkZFByb2plY3RMYWJlbHMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkZFByb2plY3RMYWJlbCcpXG4gICk7XG4gIGxldCBwcm9qZWN0QnV0dG9uID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0QnV0dG9uJylcbiAgKTtcblxuICBsZXQgcHJvamVjdFRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRhc2tIb2xkZXInKTtcblxuICBsZXQgcHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbiA9IEFycmF5LmZyb20ocHJvamVjdFRhc2tIb2xkZXIuY2hpbGRyZW4pO1xuXG4gIGxldCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGVudCcpO1xuICBsZXQgcGFnZUNvbnRlbnRDaGlsZHJlbiA9IEFycmF5LmZyb20ocGFnZUNvbnRlbnQuY2hpbGRyZW4pO1xuXG4gIGxldCBjaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucyA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbicpXG4gICk7XG5cbiAgbGV0IGRlbGV0ZUJvYXJkID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGVCb2FyZCcpKTtcbiAgbGV0IGVkaXRCb2FyZCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdEJvYXJkJykpO1xuICBsZXQgdGFza0hvbGRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2tIb2xkZXInKSk7XG4gIGxldCB0YXNrTGlzdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2tMaXN0cycpKTtcbiAgbGV0IGJvYXJkQ29udGVudFRleHRCb3ggPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkdGV4dEJveCcpXG4gICk7XG4gIGxldCBib2FyZE92ZXJsYXkgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JvYXJkT3ZlcmxheScpXG4gICk7XG4gIGxldCB0YXNrQWRkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrQWRkZXInKSk7XG5cbiAgbGV0IGV4YW1wbGVCb2FyZFRleHQgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2V4YW1wbGVCb2FyZFRleHQnKVxuICApO1xuICBsZXQgYnV0dG9uID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b24nKSk7XG5cbiAgbGV0IHRyYXNoSXQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RyYXNoSXQnKSk7XG4gIGxldCBmaW5pc2hlZCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmluaXNoZWQnKSk7XG5cbiAgbGV0IHRhc2tUZXh0Qm94ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrVGV4dEJveCcpKTtcbiAgbGV0IGRhdGVQaWNrZXIgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGVQaWNrZXInKSk7XG5cbiAgbGV0IGNpcmNsZUljb24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NpcmNsZUljb24nKSk7XG4gIGxldCBlZGl0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0JykpO1xuICBsZXQgZGF0ZVRvb2xzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlVG9vbCcpKTtcblxuICBsZXQgZXhpdEVkaXRvciA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXhpdEVkaXRvcicpKTtcblxuICByZXR1cm4ge1xuICAgIGVkaXRJdGVtcyxcbiAgICBkZWxldGVJdGVtcyxcbiAgICBhZGRQcm9qZWN0TGFiZWxzLFxuICAgIHByb2plY3RCdXR0b24sXG4gICAgcHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbixcbiAgICBwcm9qZWN0Q29udGFpbmVyVGV4dCxcbiAgICBib2FyZFRleHRCb3gsXG4gICAgYm9hcmRlckJ1dHRvbixcbiAgICBkZWxldGVCb2FyZCxcbiAgICBlZGl0Qm9hcmQsXG4gICAgcGFnZUNvbnRlbnQsXG4gICAgcGFnZUNvbnRlbnRDaGlsZHJlbixcbiAgICB0YXNrSG9sZGVycyxcbiAgICBleGFtcGxlQm9hcmRUZXh0LFxuICAgIGNoYW5nZUJvYXJkVGl0bGVCdXR0b25zLFxuICAgIGJvYXJkQ29udGVudFRleHRCb3gsXG4gICAgYm9hcmRPdmVybGF5LFxuICAgIHRhc2tMaXN0cyxcbiAgICB0YXNrQWRkZXJzLFxuICAgIGJ1dHRvbixcbiAgICB0cmFzaEl0LFxuICAgIGZpbmlzaGVkLFxuICAgIHRhc2tUZXh0Qm94LFxuICAgIGRhdGVQaWNrZXIsXG4gICAgY2lyY2xlSWNvbixcbiAgICBlZGl0LFxuICAgIGRhdGVUb29scyxcbiAgICBleGl0RWRpdG9yLFxuICAgIHByb2plY3RDb250YWluZXIsXG4gIH07XG59O1xuXG5leHBvcnQgeyBnZXRJbml0aWFsRWxlbWVudHMsIGNyZWF0ZURvbUVsZW1lbnRzLCBnZXRVcGRhdGVkRWxlbWVudHMgfTtcbiIsIi8vXG5pbXBvcnQge3NldE9iamVjdH0gZnJvbSBcIi4vZWxlbWVudEV2ZW50cy5qc1wiO1xuXG5jb25zdCBzZW5kID0gKFxuICAgICgpID0+IHtcbiAgICAgICAgbGV0IGl0ZW1zID0ge307XG4gICAgICAgIGxldCB0aXRsZUl0ZW1zID0ge31cbiAgICAgICAgaXRlbXMudXBjb21pbmcgPSBbXVxuXG4gICAgICAgIGNvbnN0IHNlbmREYXRhID0gKGRhdGEsaW5kZXgsdGl0bGUpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zW2luZGV4XSA9IGRhdGE7XG4gICAgICAgICAgICB0aXRsZUl0ZW1zW2luZGV4XSA9IHRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VuZE5hbWUgPSAoaW5kZXgsIHRpdGxlKSA9PiB7XG4gICAgICAgICAgICB0aXRsZUl0ZW1zW2luZGV4XSA9IHRpdGxlO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHJldHJpZXZlRGF0YSA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW1zW2luZGV4XSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zW2luZGV4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCByZXRyaWV2ZVRpdGxlID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodGl0bGVJdGVtc1tpbmRleF0pe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aXRsZUl0ZW1zW2luZGV4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV0cmlldmVUaXRsZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2V0T2JqZWN0KHRpdGxlSXRlbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3ZlcndyaXRlVGl0bGVzID0gKHRpdGxlcykgPT4ge1xuICAgICAgICAgICAgdGl0bGVJdGVtcyA9ICB0aXRsZXNcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3Qgb3ZlcndyaXRlRGF0YSA9IChkYXRhKSA9PiB7IFxuICAgICAgICAgICAgaXRlbXMgPSBkYXRhO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBnZXRBbGxEYXRhID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNldE9iamVjdChpdGVtcyk7XG4gICAgICAgIH1cbiBcbiAgICAgICAgY29uc3QgZGVsZXRlTmFtZSA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1RpdGxlcyA9IHRpdGxlSXRlbXM7XG4gICAgICAgICAgICBsZXQgbmV3VGl0bGVLZXlzID0gT2JqZWN0LmtleXMobmV3VGl0bGVzKTtcbiAgICAgICAgICAgIGxldCBmaW5hbFRpdGxlcyA9IHt9XG4gICAgICAgICAgICBuZXdUaXRsZUtleXMgPSBuZXdUaXRsZUtleXMuZmlsdGVyKGtleSA9PiBrZXkgIT0gaW5kZXgpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8bmV3VGl0bGVLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZmluYWxUaXRsZXNbaV0gPSBuZXdUaXRsZXNbbmV3VGl0bGVLZXlzW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZpbmFsVGl0bGVzO1xuXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgY29uc3QgZGVsZXRlRGF0YSA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGl0bGVJdGVtcyA9IGRlbGV0ZU5hbWUoaW5kZXgpO1xuICAgICAgICAgICAgbGV0IG5ld0l0ZW1zID0gc2V0T2JqZWN0KGl0ZW1zKTtcbiAgICAgICAgICAgIGxldCBuZXdJdGVtc0tleXMgPSBPYmplY3Qua2V5cyhuZXdJdGVtcyk7XG4gICAgICAgICAgICBuZXdJdGVtc0tleXMgPSBuZXdJdGVtc0tleXMuZmlsdGVyKGtleSA9PiBrZXkgIT0gaW5kZXgpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBuZXdlckl0ZW1zID0ge307XG4gICAgICAgICAgICBuZXdJdGVtc0tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIG5ld2VySXRlbXNba2V5XSA9IG5ld0l0ZW1zW2tleV07XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpdGVtcyA9IG5ld2VySXRlbXM7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtzZW5kRGF0YSwgcmV0cmlldmVEYXRhLHJldHJpZXZlVGl0bGUsIFxuICAgICAgICAgICAgZGVsZXRlRGF0YSwgZ2V0QWxsRGF0YSwgb3ZlcndyaXRlRGF0YSwgXG4gICAgICAgICAgICBzZW5kTmFtZSwgcmV0cmlldmVUaXRsZXMsIG92ZXJ3cml0ZVRpdGxlc307XG5cbiAgICB9XG4pKClcblxuZXhwb3J0IHtzZW5kfTsiLCJpbXBvcnQgeyBzZW5kIH0gZnJvbSAnLi9zZW5kLmpzJztcbmltcG9ydCB7IHNldE9iamVjdCB9IGZyb20gJy4vZWxlbWVudEV2ZW50cy5qcyc7XG5cbmNvbnN0IGRhdGFTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZURhdGEgPSAoKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBzZW5kLmdldEFsbERhdGEoKTtcbiAgICBsZXQgdGl0bGVzID0gc2VuZC5yZXRyaWV2ZVRpdGxlcygpO1xuICAgIGxldCBuZXdEYXRhID0gdHVybkRhdGFJbnRvRm9ybWF0KGRhdGEpO1xuICAgIGxldCBuZXdUaXRsZXMgPSBzZXRPYmplY3QodGl0bGVzKTtcbiAgICBsZXQganNvblRpdGxlcyA9IEpTT04uc3RyaW5naWZ5KG5ld1RpdGxlcyk7XG4gICAgbGV0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkobmV3RGF0YSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIGpzb25EYXRhKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGl0bGVzJywganNvblRpdGxlcyk7XG4gIH07XG5cbiAgY29uc3QgcmV0cmlldmVEYXRhID0gKCkgPT4ge1xuICAgIGxldCByZXRyaWV2ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKTtcbiAgICBsZXQgcmV0cmlldmVkVGl0bGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpdGxlcycpO1xuICAgIGlmIChyZXRyaWV2ZWREYXRhID09IG51bGwgfHwgcmV0cmlldmVkVGl0bGVzID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXRyaWV2ZWREYXRhKTtcbiAgICBsZXQgZm9ybWF0ZWRUaXRsZXMgPSBKU09OLnBhcnNlKHJldHJpZXZlZFRpdGxlcyk7XG4gICAgbGV0IGZvcm1hdGVkRGF0YSA9IGZvcm1hdERhdGEocmF3RGF0YSk7XG5cbiAgICByZXR1cm4geyBmb3JtYXRlZERhdGEsIGZvcm1hdGVkVGl0bGVzIH07XG4gIH07XG5cbiAgY29uc3Qgc3RvcmVIaWdobGlnaEluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hsaWdodEluZGV4JywgaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IHJldHJpZXZlSGlnaGxpZ2h0SW5kZXggPSAoKSA9PiB7XG4gICAgbGV0IGhpZ2hsaWdodEluZGV4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hsaWdodEluZGV4Jyk7XG4gICAgcmV0dXJuIGhpZ2hsaWdodEluZGV4O1xuICB9O1xuXG4gIGNvbnN0IGFkZERhdGVzVG9UYXNrcyA9ICh0YXNrcykgPT4ge1xuICAgIGxldCBuZXdUYXNrcyA9IHNldE9iamVjdCh0YXNrcywgdHJ1ZSk7XG5cbiAgICBuZXdUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBsZXQgZGF0ZXMgPSB0YXNrLmRhdGVzO1xuICAgICAgdGFzay5kYXRlID0gbmV3IERhdGUoZGF0ZXNbMF0sIGRhdGVzWzFdLCBkYXRlc1syXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1Rhc2tzO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1hdERhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGxldCBuZXdEYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIGxldCBuZXdEYXRhID0gc2V0T2JqZWN0KGRhdGEpO1xuXG4gICAgbmV3RGF0YUtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ICE9ICd1cGNvbWluZycpIHtcbiAgICAgICAgbmV3RGF0YVtrZXldLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgICAgICAgYm9hcmQuY2hhbmdlZEJvYXJkTGlzdHMgPSBbXTtcbiAgICAgICAgICBib2FyZC50YXNrcyA9IGFkZERhdGVzVG9UYXNrcyhib2FyZC50YXNrcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RGF0YVtrZXldID0gYWRkRGF0ZXNUb1Rhc2tzKG5ld0RhdGFba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVEYXRlID0gKHRhc2spID0+IHtcbiAgICBsZXQgdGFza0tleXMgPSBPYmplY3Qua2V5cyh0YXNrKTtcbiAgICB0YXNrS2V5cyA9IHRhc2tLZXlzLmZpbHRlcigoa2V5KSA9PiBrZXkgIT0gJ2RhdGUnKTtcbiAgICBsZXQgbmV3VGFzayA9IHt9O1xuXG4gICAgdGFza0tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBuZXdUYXNrW2tleV0gPSB0YXNrW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1Rhc2s7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlRGF0ZU9iamVjdHMgPSAoYm9hcmQpID0+IHtcbiAgICBib2FyZC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YXNrID0gcmVtb3ZlRGF0ZSh0YXNrKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0dXJuRGF0YUludG9Gb3JtYXQgPSAoZGF0YSkgPT4ge1xuICAgIGxldCBuZXdEYXRhID0gc2V0T2JqZWN0KGRhdGEpO1xuICAgIGxldCBuZXdEYXRhS2V5cyA9IE9iamVjdC5rZXlzKG5ld0RhdGEpO1xuXG4gICAgbmV3RGF0YUtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ICE9ICd1cGNvbWluZycpIHtcbiAgICAgICAgbmV3RGF0YVtrZXldLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgICAgICAgbGV0IGJvYXJkS2V5cyA9IE9iamVjdC5rZXlzKGJvYXJkKTtcbiAgICAgICAgICBib2FyZEtleXMgPSBib2FyZEtleXMuZmlsdGVyKChrZXkpID0+IGtleSAhPSAnY2hhbmdlZEJvYXJkVGFza3MnKTtcblxuICAgICAgICAgIGxldCBuZXdCb2FyZCA9IHt9O1xuICAgICAgICAgIGJvYXJkS2V5cy5mb3JFYWNoKChrZXkpID0+IChuZXdCb2FyZFtrZXldID0gYm9hcmRba2V5XSkpO1xuICAgICAgICAgIGJvYXJkID0gbmV3Qm9hcmQ7XG4gICAgICAgICAgYm9hcmQgPSByZW1vdmVEYXRlT2JqZWN0cyhib2FyZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RGF0YVtrZXldLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICB0YXNrID0gcmVtb3ZlRGF0ZSh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzdG9yZURhdGEsXG4gICAgcmV0cmlldmVEYXRhLFxuICAgIHN0b3JlSGlnaGxpZ2hJbmRleCxcbiAgICByZXRyaWV2ZUhpZ2hsaWdodEluZGV4LFxuICB9O1xufTtcblxubGV0IHN0b3JhZ2UgPSBkYXRhU3RvcmFnZSgpO1xuXG5leHBvcnQgeyBzdG9yYWdlIH07XG4iLCJcbmltcG9ydCB0cmFzaEltYWdlIGZyb20gXCIuLi9pbWFnZXMvdHJhc2guc3ZnXCI7XG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4uL2ltYWdlcy9lZGl0T2ZmLnN2Z1wiO1xuaW1wb3J0IGNoZWNrTWFya0ljb24gZnJvbSBcIi4uL2ltYWdlcy9maW5pc2hlZC5zdmdcIjtcbmltcG9ydCBleGl0SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2V4aXQuc3ZnXCI7XG5cblxuICAgXG4gICBcbiAgIGNvbnN0IGNyZWF0ZVRhc2tBcnJhbmdlbWVudCA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCBjb2xvcjtcbiAgICAgICAgbGV0IHRhc2tDbGFzcyA9IFwidGFza1wiO1xuICAgICAgICBsZXQgZWRpdENsYXNzID0gXCJlZGl0XCI7XG4gICAgICAgIGxldCBjaXJjbGVJY29uQmFja2dyb3VuZCA9IFwibm9uZVwiO1xuICAgICAgICBsZXQgcHJvamVjdFR5cGVUZXh0ID0gXCJcIlxuXG5cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJIaWdoXCIpIGNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJMb3dcIikgY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTWVkaXVtXCIpIGNvbG9yID0gXCIjZmY5ODAwXCJcbiAgICAgICAgaWYgKHRhc2submF2TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdFR5cGVUZXh0ID0gYCA8cCBjbGFzcz1cImdlbmVyYWxUZXh0IHByb2plY3RUeXBlVGV4dFwiPiBQcm9qZWN0OiAke3Rhc2submF2TmFtZX08L3A+YFxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFzay5jaGVja2VkKSB7XG4gICAgICAgICAgICB0YXNrQ2xhc3MgPSBcIm5vdFRhc2tcIjtcbiAgICAgICAgICAgIGVkaXRDbGFzcyA9IFwibm90RWRpdFwiXG4gICAgICAgICAgICBjaXJjbGVJY29uQmFja2dyb3VuZCA9IFwiYmxhY2tcIjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IG5ld1Rhc2tUZXh0ID0gYDxkaXYgY2xhc3M9XCIke3Rhc2tDbGFzc31cIiBzdHlsZSA9IFwiYm9yZGVyLWNvbG9yOiR7Y29sb3J9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrTGFiZWxcIj4ke3Rhc2sudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tUb29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJhbFRleHRIb2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZ2VuZXJhbFRleHRcIj5EdWU6ICR7dGFzay5kYXRlVGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImdlbmVyYWxUZXh0XCI+UHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiJHtlZGl0Q2xhc3N9XCIgc3JjPVwiJHtlZGl0SWNvbn1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVJY29uXCIgc3R5bGUgPSBcImJhY2tncm91bmQ6JHtjaXJjbGVJY29uQmFja2dyb3VuZH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Byb2plY3RUeXBlVGV4dH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBuZXdUYXNrVGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVCb2FyZCA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBsZXQgdGV4dCA9IHRlbXBsYXRlLnRleHQ7XG4gICAgICAgIGxldCBib2FyZFRleHQgPSBgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZWRpdEV4YW1wbGVJY29uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID1cImRlbGV0ZUJvYXJkXCIgIHNyYz1cIiR7dHJhc2hJbWFnZX1cIiBhbHQ9XCJ0cmFzaCBpY29uIGZvciBkZWxldGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCJlZGl0Qm9hcmRcIiBzcmM9XCIke2VkaXRJY29ufVwiIGFsdD1cImVkaXRpbmcgaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwiZXhhbXBsZUJvYXJkVGV4dFwiPiR7dGV4dH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tMaXN0c1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tBZGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rIEFkZCBUYXNrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIGJvYXJkVGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVVcENvbWluZ0JvYXJkID0gKHRhc2spID0+IHtcblxuXG4gICAgICAgIGxldCBib2FyZFRleHQgPSBgPGRpdiBjbGFzcyA9IFwiYm9hcmRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmRPdmVybGF5XCI+PC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwiZXhhbXBsZUJvYXJkVGV4dFwiPiR7dGFzay50ZXh0fTwvaDI+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0YXNrTGlzdHNcIj48L2Rpdj4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidGFza0FkZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+KyBBZGQgVGFzazwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBib2FyZFRleHQ7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQWRkQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhZGRCb2FyZFRleHQgPSBgPGRpdiBjbGFzcyA9IFwiYm9hcmRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImFkZEJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJlbXB0eXJvd1wiPmVtcHR5IHJvdzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJhZGRCb2FyZFRleHRcIj5BZGQgQm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJhZGRCb2FyZGVyVGV4dEJveFwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJhZGRCb2FyZGVyQnV0dG9uXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIGFkZEJvYXJkVGV4dDtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkRWRpdG9yID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGFzay50ZXh0O1xuICAgICAgICBcbiAgICAgICAgbGV0IGJvYXJkVGV4dCA9IGA8ZGl2IGNsYXNzID0gXCJib2FyZFRleHRFZGl0b3JcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzID0gXCJib2FyZHRleHRCb3hcIiB0eXBlPVwidGV4dFwiIHZhbHVlID0gXCIke3ZhbHVlfVwiPlxuICAgICAgICA8cCBjbGFzcyA9IFwiY2hhbmdlQm9hcmRUaXRsZUJ1dHRvblwiPis8L3A+XG4gICAgPC9kaXY+YFxuICAgICAgICByZXR1cm4gYm9hcmRUZXh0O1xuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlTGlzdEVkaXRvciA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCBkZWZhdWx0Q29sb3IgPSBcImJsdWVcIlxuICAgICAgICBsZXQgaWNvbiA9IHRyYXNoSW1hZ2U7XG4gICAgICAgIGxldCBpY29uQ2xhc3MgPSBcInRyYXNoSXRcIjtcblxuICAgICAgICBpZiAodGFzay5jcmVhdGluZ1Rhc2spIHtcbiAgICAgICAgICAgIGRlZmF1bHRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGljb24gPSBleGl0SWNvbjtcbiAgICAgICAgICAgIGljb25DbGFzcyA9IFwiZXhpdEVkaXRvclwiXG5cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGV4dCA9IHRhc2sudGV4dDtcblxuXG4gICAgICAgIGxldCBsaXN0VGV4dCA9IGA8ZGl2IGNsYXNzID0gXCJ0YXNrRWRpdG9yXCIgc3R5bGUgPSBcImJvcmRlci1jb2xvcjoke2RlZmF1bHRDb2xvcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0YXNrSG9sZGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInRhc2tIb2xkZXJUZXh0XCI+VGl0bGU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcInRhc2tUZXh0Qm94XCIgdHlwZT1cInRleHRcIiB2YWx1ZSA9IFwiJHt0ZXh0fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJkYXRlVG9vbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImRhdGVUZXh0XCI+RGF0ZTogPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJkYXRlUGlja2VyXCIgdHlwZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVkaXRUb29sSG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcmlvcml0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJidXR0b25UZXh0XCI+UHJpb3JpdHk6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYnV0dG9uIGhpZ2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJoaWdoVGV4dFwiPkhpZ2g8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJidXR0b24gbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwibWVkaXVtVGV4dFwiPk1lZGl1bTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1dHRvbiBsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJsb3dUZXh0XCI+TG93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVkaXRUb29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9IFwiJHtpY29uQ2xhc3N9XCIgc3JjPVwiJHtpY29ufVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9IFwiZmluaXNoZWRcIiBzcmM9XCIke2NoZWNrTWFya0ljb259XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgIFxuICAgIHJldHVybiBsaXN0VGV4dDtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZU5hdlRhc2sgPSAodGFzaywgaGlnaGxpZ2h0ZWQpID0+IHtcbiAgICAgICAgbGV0IHN0eWxlVGV4dCA9ICcnXG4gICAgICAgIGlmIChoaWdobGlnaHRlZCkgc3R5bGVUZXh0ID0gJ3N0eWxlID0gXCJiYWNrZ3JvdW5kOnJnYigyMiwgODMsIDIyNyk7XCIgJ1xuXG4gICAgICAgIGxldCB0YXNrVGV4dCA9IGA8ZGl2IGNsYXNzICA9IFwicHJvamVjdEJ1dHRvbiBwcm9qZWN0QnV0dG9uSG92ZXJcIiAke3N0eWxlVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdFRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBjbGFzcyA9IFwiZGVsZXRlSXRlbVwiIHNyYz1cIiR7dHJhc2hJbWFnZX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3MgPSBcImVkaXRQcm9qZWN0XCIgc3JjPVwiJHtlZGl0SWNvbn1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3RDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJwcm9qZWN0Q29udGFpbmVyVGV4dFwiPiR7dGFzay50YXNrfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICByZXR1cm4gdGFza1RleHQ7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0RWRpdG9yID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZS52YWx1ZSAhPSBcInVuZGVmaW5lZFwiKSB0ZXh0ID0gdGVtcGxhdGUudmFsdWU7XG5cbiAgICAgICAgbGV0IGVkaXRvclRleHQgPSBgIDxkaXYgY2xhc3MgPSBcImVkaXRQcm9qZWN0QnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJlZGl0VGV4dFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3RleHR9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImFkZFByb2plY3RMYWJlbFwiPiArPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICByZXR1cm4gZWRpdG9yVGV4dDtcbiAgICB9XG5cblxuZXhwb3J0IHtjcmVhdGVOYXZUYXNrLGNyZWF0ZUJvYXJkLCBjcmVhdGVBZGRCb2FyZCwgY3JlYXRlQm9hcmRFZGl0b3IsIGNyZWF0ZUxpc3RFZGl0b3IsIGNyZWF0ZVVwQ29taW5nQm9hcmQsIGNyZWF0ZVByb2plY3RFZGl0b3IsIGNyZWF0ZVRhc2tBcnJhbmdlbWVudH0iLCJpbXBvcnQgaXNUb2RheSBmcm9tICdkYXRlLWZucy9pc1RvZGF5J1xuaW1wb3J0IGlzVGhpc1dlZWsgZnJvbSAnZGF0ZS1mbnMvaXNUaGlzV2VlaydcblxuaW1wb3J0IHtzb3J0RGF0ZXNCeUxhdGVzdERheX0gZnJvbSBcIi4vdXRpbGl0aWVzLmpzXCJcblxuXG5pbXBvcnQgIHtzZW5kfSBmcm9tIFwiLi9zZW5kLmpzXCJcbmltcG9ydCB7c2V0T2JqZWN0fSBmcm9tIFwiLi9lbGVtZW50RXZlbnRzLmpzXCJcblxuICAgIGNvbnN0IGNyZWF0ZVVwQ29taW5nVGVtcGxhdGUgPSAoY3VycmVudFRleHQsIHRhc2tzKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50VGFza3MgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrcyAhPSBcInVuZGVmaW5lZFwiKSBjdXJyZW50VGFza3MgPSB0YXNrczsgXG4gICAgXG4gICAgICAgIGxldCBib2FyZCA9IHtpc1VwQ29taW5nQm9hcmQ6IHRydWUsdGV4dDpjdXJyZW50VGV4dCwgdGFza3M6IGN1cnJlbnRUYXNrcywgY2hhbmdlZEJvYXJkTGlzdHM6IFtdLCB9O1xuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgXG4gICAgXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVXBDb21pbmdCb2FyZHMgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gYXJyYXk7XG4gICAgICAgIGxldCB0b2RheUJvYXJkID0gY3JlYXRlVXBDb21pbmdUZW1wbGF0ZShcIlRvZGF5XCIsIFtdKTtcbiAgICAgICAgbGV0IHdlZWtCb2FyZCA9IGNyZWF0ZVVwQ29taW5nVGVtcGxhdGUoXCJXZWVrXCIsW10pO1xuICAgICAgICBsZXQgdGltZUJvYXJkcyA9IFt0b2RheUJvYXJkLHdlZWtCb2FyZF07XG4gICAgICAgIHRpbWVCb2FyZHMuZm9yRWFjaChib2FyZCA9PiBuZXdBcnJheS5wdXNoKGJvYXJkKSk7XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0VGltZVVwY29taW5nVmFsdWVzID0gKG5hdnMsa2V5LHRvZGF5VGFza3MsIHdlZWtUYXNrcykgPT4ge1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gMDtcbiAgICBcbiAgICAgICAgbmF2c1trZXldLmZvckVhY2godGFzayA9PiB7XG4gICAgXG4gICAgICAgICAgICB0YXNrLnRhc2tJbmRleCA9IHRhc2tJbmRleDtcbiAgICAgICAgICAgIHRhc2submF2SW5kZXggPSBcInVwY29taW5nXCI7XG4gICAgICAgICAgICB0YXNrLm5hdk5hbWUgPSBcIlVwY29taW5nXCI7XG4gICAgXG4gICAgICAgICAgICBpZiAoaXNUb2RheSh0YXNrLmRhdGUpKSB0b2RheVRhc2tzLnB1c2godGFzaylcbiAgICAgICAgICAgIGlmIChpc1RoaXNXZWVrKHRhc2suZGF0ZSkpIHdlZWtUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgdGFza0luZGV4ICsrO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4ge3RvZGF5VGFza3MsIHdlZWtUYXNrc307XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBnZXRUaW1lTm9ybWFsVmFsdWVzICA9IChuYXZzLGtleSx0b2RheVRhc2tzLHdlZWtUYXNrcykgPT4ge1xuICAgICAgICBsZXQgYm9hcmRJbmRleCA9IDA7XG4gICAgICAgIG5hdnNba2V5XS5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrSW5kZXggPSAwO1xuICAgICAgICAgICAgYm9hcmQudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrLnRhc2tJbmRleCA9IHRhc2tJbmRleDtcbiAgICAgICAgICAgICAgICB0YXNrLmJvYXJkSW5kZXggPSBib2FyZEluZGV4O1xuICAgIFxuICAgICAgICAgICAgICAgIHRhc2submF2SW5kZXggPSBrZXk7XG4gICAgICAgICAgICAgICAgdGFzay5uYXZOYW1lID0gc2VuZC5yZXRyaWV2ZVRpdGxlKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzVG9kYXkodGFzay5kYXRlKSkgdG9kYXlUYXNrcy5wdXNoKHRhc2spXG4gICAgICAgICAgICAgICAgaWYgKGlzVGhpc1dlZWsodGFzay5kYXRlKSkgd2Vla1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgdGFza0luZGV4Kys7XG4gICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYm9hcmRJbmRleCsrO1xuICAgICAgICB9KVxuICAgIFxuICAgICAgICByZXR1cm4ge3RvZGF5VGFza3Msd2Vla1Rhc2tzfVxuICAgIFxuICAgIFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBnZXRUYXNrVGltZVZhbHVlcyA9ICgpID0+IHtcbiAgICAgICAgIGxldCBkYXRhID0gc2VuZC5nZXRBbGxEYXRhKCk7XG4gICAgICAgICBsZXQgbmF2cyA9IHNldE9iamVjdChkYXRhKTtcbiAgICAgICAgIGxldCBuYXZLZXlzID0gT2JqZWN0LmtleXMobmF2cyk7XG4gICAgICAgICBcbiAgICAgICAgIGxldCB0b2RheVRhc2tzID0gW107XG4gICAgICAgICBsZXQgd2Vla1Rhc2tzID0gW107ICAgIFxuICAgICAgICAgbmF2S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgaWYgKGtleSA9PSBcInVwY29taW5nXCIpe1xuICAgICAgICAgICAgICAgICBsZXQgdGltZXMgPSBnZXRUaW1lVXBjb21pbmdWYWx1ZXMobmF2cyxrZXksIHRvZGF5VGFza3MsIHdlZWtUYXNrcyk7XG4gICAgICAgICAgICAgICAgIHRvZGF5VGFza3MgPSB0aW1lcy50b2RheVRhc2tzO1xuICAgICAgICAgICAgICAgICB3ZWVrVGFza3MgPSB0aW1lcy53ZWVrVGFza3M7ICAgIFxuICAgIFxuICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIGxldCB0aW1lcyA9IGdldFRpbWVOb3JtYWxWYWx1ZXMobmF2cyxrZXksdG9kYXlUYXNrcywgd2Vla1Rhc2tzKTtcbiAgICAgICAgICAgICAgICAgdG9kYXlUYXNrcyA9IHRpbWVzLnRvZGF5VGFza3M7XG4gICAgICAgICAgICAgICAgIHdlZWtUYXNrcyA9IHRpbWVzLndlZWtUYXNrcztcbiAgICBcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9KVxuICAgICAgICAgbmF2cyA9IHNlbmQuZ2V0QWxsRGF0YSgpOyAgICBcbiAgICAgICAgIHRvZGF5VGFza3MgPSBzb3J0RGF0ZXNCeUxhdGVzdERheSh0b2RheVRhc2tzKTtcbiAgICAgICAgIHdlZWtUYXNrcyA9IHNvcnREYXRlc0J5TGF0ZXN0RGF5KHdlZWtUYXNrcyk7XG4gICAgICAgICByZXR1cm4ge3RvZGF5VGFza3MsIHdlZWtUYXNrc307XG4gICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXJUaW1lVGFza3MgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gYWRkVXBDb21pbmdCb2FyZHMoYXJyYXkpO1xuICAgICAgICBsZXQgdGltZXMgPSBnZXRUYXNrVGltZVZhbHVlcygpO1xuICAgICAgICBuZXdBcnJheS5mb3JFYWNoKGJvYXJkPT4ge1xuICAgICAgICAgICAgaWYgKGJvYXJkLnRleHQgPT0gXCJUb2RheVwiKXtcbiAgICAgICAgICAgICAgICBib2FyZC50YXNrcyA9IHRpbWVzLnRvZGF5VGFza3M7XG4gICAgICAgICAgICAgICAgYm9hcmQuY2hhbmdlZEJvYXJkTGlzdHMgPSBib2FyZC50YXNrcztcbiAgICBcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAoYm9hcmQudGV4dCA9PSBcIldlZWtcIil7XG4gICAgICAgICAgICAgICAgYm9hcmQudGFza3MgPSB0aW1lcy53ZWVrVGFza3M7XG4gICAgICAgICAgICAgICAgYm9hcmQuY2hhbmdlZEJvYXJkTGlzdHMgPSBib2FyZC50YXNrcztcbiAgICBcbiAgICAgICAgICAgIH0gXG4gICAgXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICBcbiAgICB9XG5cblxuXG5leHBvcnQge3JlbmRlclRpbWVUYXNrc30iLCJpbXBvcnQgeyBnZXRVcGRhdGVkRWxlbWVudHMgfSBmcm9tIFwiLi9wYWdlTGF5b3V0LmpzXCI7XG5pbXBvcnQgeyBnZXRFbGVtZW50QnlCb2FyZEluZGV4LCBmaW5kT2JqZWN0QnlOYW1lfSBmcm9tIFwiLi91dGlsaXRpZXMuanNcIjtcblxuXG5jb25zdCB1bnNoYWRlQnV0dG9ucyA9ICgpPT4ge1xuICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgIGxldCBidXR0b25zID0gZWxlbWVudHMuYnV0dG9uO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRDaGlsZHJlbiA9IEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgIGVsZW1lbnRDaGlsZHJlbi5mb3JFYWNoKGNoaWxkRWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IFwibm9uZVwiO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmNvbnN0IHJlbW92ZUJvYXJkT3ZlcmxheSA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICBlbGVtZW50cy5ib2FyZE92ZXJsYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcbn1cblxuY29uc3QgYWRkQm9hcmRPdmVybGF5ID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IGJvYXJkT3ZlcmxheSA9IGdldEVsZW1lbnRCeUJvYXJkSW5kZXgoaW5kZXgsXCJib2FyZE92ZXJsYXlcIik7XG4gICAgYm9hcmRPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbn1cblxuY29uc3Qgc2V0VGFza0RhdGUgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IGRhdGVQaWNrZXIgPSBlbGVtZW50LmRhdGVQaWNrZXJbMF07XG4gICAgZGF0ZVBpY2tlci52YWx1ZUFzRGF0ZSA9IGRhdGU7XG59XG5cbmNvbnN0IGNoYW5nZUxpc3RFZGl0b3JQcmlvcml0eSAgPSAoY3VycmVudFByaW9yaXR5LGFycmF5KSA9PiB7XG4gICAgbGV0IGxpc3RFZGl0b3IgPSBmaW5kT2JqZWN0QnlOYW1lKFwibGlzdEVkaXRvclwiLGFycmF5KTtcbiAgICBsaXN0RWRpdG9yLnByaW9yaXR5ID0gY3VycmVudFByaW9yaXR5O1xuICAgIFxuXG59XG5cbmNvbnN0IHNoYWRlQnV0dG9uQ29sb3IgPSAoZXZlbnQsYXJyYXkpID0+IHtcbiAgICB1bnNoYWRlQnV0dG9ucygpO1xuICAgIGxldCBwYXJhZ3JhcGg7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImJ1dHRvbiBoaWdoXCIgfHxcbiAgICAgICAgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYnV0dG9uIG1lZGl1bVwiIHx8XG4gICAgICAgIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImJ1dHRvbiBsb3dcIlxuICAgICkgcGFyYWdyYXBoID0gQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2hpbGRyZW4pWzBdO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImhpZ2hUZXh0XCIpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgICAgICBjaGFuZ2VMaXN0RWRpdG9yUHJpb3JpdHkoXCJIaWdoXCIsYXJyYXkpXG5cbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcIm1lZGl1bVRleHRcIil7XG4gICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmY5ODAwXCI7XG4gICAgICAgIGNoYW5nZUxpc3RFZGl0b3JQcmlvcml0eShcIk1lZGl1bVwiLCBhcnJheSlcblxuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwibG93VGV4dFwiKXtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcImdyZWVuXCI7XG4gICAgICAgIGNoYW5nZUxpc3RFZGl0b3JQcmlvcml0eShcIkxvd1wiLCBhcnJheSlcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImJ1dHRvbiBoaWdoXCIpe1xuICAgICAgICBwYXJhZ3JhcGguc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XG4gICAgICAgIGNoYW5nZUxpc3RFZGl0b3JQcmlvcml0eShcIkhpZ2hcIiwgYXJyYXkpXG5cbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImJ1dHRvbiBtZWRpdW1cIil7XG4gICAgICAgIHBhcmFncmFwaC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmY5ODAwXCI7XG4gICAgICAgIGNoYW5nZUxpc3RFZGl0b3JQcmlvcml0eShcIk1lZGl1bVwiLCBhcnJheSlcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImJ1dHRvbiBsb3dcIil7XG4gICAgICAgIHBhcmFncmFwaC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJncmVlblwiO1xuICAgICAgICBjaGFuZ2VMaXN0RWRpdG9yUHJpb3JpdHkoXCJMb3dcIiwgYXJyYXkpXG4gICAgfVxufVxuXG5cbiBcblxuZXhwb3J0IHtyZW1vdmVCb2FyZE92ZXJsYXksIGFkZEJvYXJkT3ZlcmxheSwgc2hhZGVCdXR0b25Db2xvciwgc2V0VGFza0RhdGV9XG5cbiIsIi8vaGVscGZ1bCBmdW5jdGlvbnMgdGhhdCBhdGUgdHVja2VkIGluIHRoaXMgZmlsZSB0byBtYWtlIGNvbnRlbnQgbW9yZSBjbGVhbiBhbmQgcmVhZGFibGVcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xuaW1wb3J0IGdldERheU9mWWVhciBmcm9tICdkYXRlLWZucy9nZXREYXlPZlllYXInXG5cbmltcG9ydCB7Z2V0VXBkYXRlZEVsZW1lbnRzfSBmcm9tIFwiLi9wYWdlTGF5b3V0LmpzXCJcblxuY29uc3QgZmluZEJvYXJkVGV4dEJveCA9ICAoaW5kZXgpID0+IHtcbiAgICBsZXQgdGFza0xpc3RzID0gZ2V0RWxlbWVudEJ5Qm9hcmRJbmRleChpbmRleCxcInRhc2tMaXN0c1wiKTtcbiAgICBsZXQgYnV0dG9uVGV4dCA9IFwiY291bGQgbm90IGxvYWQgdGV4dFwiXG4gICAgbGV0IHRhc2tMaXN0Q2hpbGRyZW4gPSBBcnJheS5mcm9tKHRhc2tMaXN0cy5jaGlsZHJlbilcblxuICAgXG4gICAgdGFza0xpc3RDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYm9hcmRUZXh0RWRpdG9yXCIpIHtcbiAgICAgICAgICAgICBidXR0b25UZXh0ID0gQXJyYXkuZnJvbShjaGlsZC5jaGlsZHJlbilbMF0udmFsdWU7XG4gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG4gICAgcmV0dXJuIGJ1dHRvblRleHQ7XG59XG5cbmNvbnN0IGdldEVsZW1lbnRCeUJvYXJkSW5kZXggPSAoaW5kZXgsZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgbGV0IGVsZW1lbnQgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICBsZXQgbmV3RWxlbWVudCA9IGZhbHNlO1xuICAgIGVsZW1lbnRbZG9tRWxlbWVudF0uZm9yRWFjaChjaGlsZEVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoY2hpbGRFbGVtZW50LmJvYXJkSW5kZXggPT0gaW5kZXgpIG5ld0VsZW1lbnQgPSBjaGlsZEVsZW1lbnRcbiAgICB9KVxuICAgIHJldHVybiBuZXdFbGVtZW50O1xuXG5cbn1cblxuXG5cbmNvbnN0IGdldFVwQ29taW5nVGFza3MgID0gKGFycmF5KSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gW11cblxuICAgIGFycmF5LmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICBib2FyZC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2submF2SW5kZXggPT0gXCJ1cGNvbWluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ld0FycmF5O1xufVxuXG4vLyBvbmx5IHdvcmtzIHdpdGggc3RhdGljIGxpc3QgdGFza3Mgd2hpY2ggaGFzIHR3byBhcnJheXNcbi8vIG9uZSB0aGF0IGNhbiB0YWtlIGRpZmZlcmVudCB0eXBlcyBvZiBlZGl0b3JzIHdoaWNoIGlzIGtub3duIGFzXG4vLyB0aGUgY2hhbmdlZGJvYXJkbGlzdHMgYW5kIHRoZSBvbmUgdGhhdCBjaGFuZ2VzIHZlcnkgbGl0dGxlIFxuLy8gYW5kIHZhbHVlcyBjYW4gYmUgYWRkZWQgYnV0IHdpbGwgYmUgZWRpdGVkIGluIHRoZSBlZGl0b3JzIGluIGNoYW5nZWRCb2FyZExpc3RzXG5jb25zdCBmaW5kT2JqZWN0QnlOYW1lID0gKG5hbWUscGFyZW50QXJyYXkpID0+IHtcbiAgICBsZXQgY3VycmVudE9iamVjdCA9IGZhbHNlO1xuICAgIGxldCBicmVha0xvb3A7XG4gICAgbGV0IHN0YXRpY0xpc3RUYXNrcyA9IHBhcmVudEFycmF5O1xuXG4gICAgc3RhdGljTGlzdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIHRhc2suY2hhbmdlZEJvYXJkTGlzdHMuZm9yRWFjaChsaXN0VGFzayA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdFRhc2tbbmFtZV0pe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRPYmplY3QgPSBsaXN0VGFzaztcbiAgICAgICAgICAgICAgICBicmVha0xvb3AgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChicmVha0xvb3ApIHJldHVybjtcblxuICAgIH0pXG5cbiAgICByZXR1cm4gY3VycmVudE9iamVjdDtcblxufVxuXG4vLyBUYWtlcyBzdGF0aWNsaXN0IHRhc2tzIGFycmF5IGRvZXMgbm90IHdvcmsgaW4gYW55IG90aGVyIHRlbXBhbGF0ZSBkbyBub3QgdHJ5IGl0XG5jb25zdCBnZXRPYmplY3RWYWx1ZSA9IChjdXJyZW50T2JqZWN0LCB2YWx1ZSxhcnJheSkgPT4ge1xuICAgIGxldCBvYmplY3RWYWx1ZSA9IGZpbmRPYmplY3RCeU5hbWUoY3VycmVudE9iamVjdCxhcnJheSk7XG4gICAgbGV0IG5ld1ZhbHVlID0gZmFsc2U7XG4gICAgaWYgKG9iamVjdFZhbHVlICE9IGZhbHNlKSBuZXdWYWx1ZSA9IG9iamVjdFZhbHVlW3ZhbHVlXTtcbiAgICByZXR1cm4gbmV3VmFsdWU7XG59XG5cblxuY29uc3QgY2hhbmdlVmFsdWVUb0RhdGUgPSAodmFsdWUpID0+IHtcbiAgICBsZXQgbmV3VmFsdWUgPSB2YWx1ZS5zcGxpdChcIi1cIik7XG4gICAgbGV0IHllYXIgPSBuZXdWYWx1ZVswXTtcbiAgICBsZXQgbW9udGhJbmRleCA9IG5ld1ZhbHVlWzFdIC0xO1xuICAgIGxldCBkYXkgPSBuZXdWYWx1ZVsyXTtcblxuXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLG1vbnRoSW5kZXgsZGF5KTtcbiAgICByZXR1cm4gZGF0ZTtcbn1cblxuY29uc3Qgc29ydERhdGVzQnlMYXRlc3REYXkgPSAodGltZVRhc2tzKSA9PiB7XG4gICAgbGV0IG5ld1RpbWVUYXNrcyA9IHRpbWVUYXNrcztcbiAgICBuZXdUaW1lVGFza3Muc29ydCgodGltZVRhc2sxLCB0aW1lVGFzazIpID0+IHtcbiAgICAgICAgbGV0IGRheXMyID0gZ2V0RGF5T2ZZZWFyKHRpbWVUYXNrMi5kYXRlKTtcbiAgICAgICAgbGV0IGRheXMxID0gZ2V0RGF5T2ZZZWFyKHRpbWVUYXNrMS5kYXRlKTtcbiAgICAgICAgcmV0dXJuIGRheXMyIC0gZGF5czE7XG4gICAgfSlcbiAgICByZXR1cm4gbmV3VGltZVRhc2tzO1xuXG5cbn1cblxuXG5jb25zdCBjcmVhdGVUYXNrVGVtcGxhdGUgPSAodGV4dCxkYXRlLHByaW9yaXR5LHByb2plY3RUeXBlVGV4dCxjaGVja2VkKSA9PiB7XG4gICAgbGV0IHRhc2sgPSB7fVxuICAgIHRhc2subGlzdFRhc2sgPSB0cnVlO1xuICAgIHRhc2sudGV4dCA9IHRleHQsXG4gICAgdGFzay5kYXRlID0gZGF0ZTtcblxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICB0YXNrLmRhdGVzID0gW3llYXIsIG1vbnRoLCBkYXldO1xuICAgIHRhc2suZGF0ZVRleHQgPSBmb3JtYXQodGFzay5kYXRlLFwiTU1NIGQgeVwiKTtcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICAhY2hlY2tlZD8gdGFzay5jaGVja2VkID0gZmFsc2U6IHRhc2suY2hlY2tlZCA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiBwcm9qZWN0VHlwZVRleHQgIT0gXCJ1bmRlZmluZWRcIikgIHRhc2sucHJvamVjdFR5cGVUZXh0ID0gcHJvamVjdFR5cGVUZXh0O1xuICAgIHJldHVybiB0YXNrO1xuXG59XG5cblxuY29uc3QgY2hlY2tTcGFjZXMgPSAodGV4dCkgPT4ge1xuICAgIGlmICh0ZXh0LnRyaW0oKS5sZW5ndGggIT0gMCkgcmV0dXJuIHRydWVcbiAgICBlbHNlIHJldHVybiBmYWxzZVxufVxuXG5cbmV4cG9ydCB7ZmluZEJvYXJkVGV4dEJveCwgZ2V0RWxlbWVudEJ5Qm9hcmRJbmRleCwgZ2V0T2JqZWN0VmFsdWUsIFxuICAgIGNoYW5nZVZhbHVlVG9EYXRlLCBzb3J0RGF0ZXNCeUxhdGVzdERheSwgY3JlYXRlVGFza1RlbXBsYXRlLFxuICAgIGZpbmRPYmplY3RCeU5hbWUsIGdldFVwQ29taW5nVGFza3MsIGNoZWNrU3BhY2VzXG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9oYW1idXJnZXJNZW51LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXywgeyBoYXNoOiBcIiNSb2JvdG9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSwgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxuICB9XFxuXFxuXFxuXFxuXFxuXFxuICAucGFnZUNvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtYmFzaXM6IGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcblxcblxcblxcblxcbi5hZGRCb2FyZCB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOTgsIDE5OCwgMTk4KTtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XFxuICAgIFxcbiAgXFxufVxcblxcblxcblxcblxcblxcbmlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLmJvYXJkQ29udGVudCB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTk4LCAxOTgsIDE5OCk7XFxuICAgIHdpZHRoOiAyOTBweDtcXG4gICAgbWFyZ2luOjEwcHg7XFxuXFxuXFxuICAgIFxcbiAgICBwYWRkaW5nLWJvdHRvbTo1cHg7XFxufVxcblxcbi5ib2FyZE92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC4yOTkpO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHRvcDowO1xcbiAgICB6LWluZGV4OjE7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLmRlbGV0ZUJvYXJkLCAuZWRpdEJvYXJkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4udGFza0hvbGRlciB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG5cXG4udGFza1RleHRCb3gge1xcbiAgICB3aWR0aDoxMzVweDtcXG59XFxuLmV4YW1wbGVCb2FyZFRleHQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgdG9wOjRweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZVxcbn1cXG5cXG5cXG4uYWRkQm9hcmRUZXh0IHtcXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuXFxuXFxufVxcblxcblxcblxcbi50YXNrLCAubm90VGFza3tcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjM3LCAyMzAsIDIzMCk7XFxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQ7XFxuICAgIG1hcmdpbjoxMHB4O1xcbn1cXG5cXG4udGFza1Rvb2xzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcblxcbn1cXG4udG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcblxcbi50YXNrTGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDo1cHg7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuXFxuICAgIGJvcmRlcjogMDtcXG5cXG59XFxuLmdlbmVyYWxUZXh0IHtcXG4gICAgZm9udC1zaXplOjEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcblxcbn1cXG5cXG4uZ2VuZXJhbFRleHRIb2xkZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcblxcblxcblxcbi5jaXJjbGVJY29uIHtcXG4gICAgd2lkdGg6MTBweDtcXG4gICAgaGVpZ2h0OjEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG4uZWRpdCwgLm5vdEVkaXR7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6NnB4O1xcbn1cXG5cXG4uY2lyY2xlSWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6YmxhY2s7XFxufVxcblxcblxcblxcbi50YXNrQWRkZXIge1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxufVxcblxcblxcbi50YXNrQWRkZXI6aG92ZXIge1xcbiAgIGN1cnNvcjpwb2ludGVyO1xcbiAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIG1hcmdpbjo1cHg7XFxuXFxufVxcbi5lZGl0VG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOjUwcHg7XFxuXFxufVxcbi5kYXRlVG9vbCB7XFxuICAgIG1hcmdpbjo1cHg7XFxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi50YXNrVGV4dEJveCB7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjo1cHg7XFxufVxcblxcbi5lZGl0VG9vbEhvbGRlciB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5kYXRlUGlja2VyIHtcXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xcbiAgICB3aWR0aDoxMzVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGJvcmRlcjowO1xcbn1cXG5cXG5cXG5cXG4udGFza0VkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6cmdiKDE5NywgNjMsIDYzKTtcXG59XFxuXFxuXFxuLnRhc2tUZXh0Qm94e1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luOjVweDtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLmJ1dHRvbnMgLmJ1dHRvbiB7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBib3JkZXI6NXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZjk4MDA7XFxufVxcblxcblxcbi5ub3RUYXNrIHtcXG4gICAgXFxuICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgXFxuICAgICBjb2xvcjpncmV5OyBcXG4gfSBcXG5cXG4ubm90RWRpdCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDIwJSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSgyMDc2JSkgaHVlLXJvdGF0ZSg4NmRlZykgYnJpZ2h0bmVzcygxMTglKSBjb250cmFzdCgxMCUpO1xcbn1cXG5cXG5cXG5cXG4ubG93IHtcXG5cXG4gICAgYm9yZGVyOjVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmxvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6Z3JlZW47XFxufVxcblxcbi5oaWdoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZWQ7XFxufVxcblxcbi5tZWRpdW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ODAwO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGhlaWdodDoxNXB4O1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICBtYXJnaW46MnB4OyBcXG5cXG59XFxuXFxuXFxuLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi50cmFzaEl0LCAuZmluaXNoZWQsIC5leGl0RWRpdG9ye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0VHlwZVRleHQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgYm90dG9tOjJweDtcXG59XFxuXFxuLmFkZEJvYXJkZXJCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOjA7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmFkZEJvYXJkZXJCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxNzgsIDE3OCwgMTc4KTtcXG59XFxuXFxuXFxuXFxuLmFkZEJvYXJkZXJUZXh0Qm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDoyMjBweDtcXG59XFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICB3aWR0aDo0MHB4O1xcbiAgICBoZWlnaHQ6NDBweDtcXG4gICAgYm9yZGVyIDowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOSwgNzUsIDIwNSk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDo1MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG5cXG5cXG59XFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3AgOjVweDtcXG59XFxuXFxuXFxuXFxuLm1vYmlsZU1lbnVUaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIG1hcmdpbjphdXRvO1xcbn1cXG5cXG4uZWRpdEJvYXJkLCAuZGVsZXRlQm9hcmQge1xcbiAgICB3aWR0aDoyMHB4O1xcbn1cXG5cXG4uZWRpdEV4YW1wbGVJY29ucyB7XFxuXFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICBcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcblxcbn1cXG5cXG4uZW1wdHlyb3cge1xcbiAgIFxcbiAgICBoZWlnaHQ6MjVweDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxuICAgIFxcbn1cXG5cXG4uZWRpdEJvYXJkLCAuZGVsZXRlQm9hcmQge1xcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xcblxcblxcbn1cXG5cXG4uYm9hcmR0ZXh0Qm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBib3JkZXI6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBcXG4gXFxufVxcblxcbi5ib2FyZFRleHRFZGl0b3Ige1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMTUsIDIxMywgMjEzKTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHotaW5kZXg6MTtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIHdpZHRoOjEwMCU7XFxuXFxuXFxuXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG5cXG5cXG4gXFxuXFxufVxcblxcblxcbi5jaGFuZ2VCb2FyZFRpdGxlQnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcXG5cXG4gICAgLmVkaXRFeGFtcGxlSWNvbnMge1xcbiAgICAgICAgaGVpZ2h0OjE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmVtcHR5cm93IHtcXG4gICAgICAgIGhlaWdodDoxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGVCb2FyZCwgLmVkaXRCb2FyZCB7XFxuICAgICAgICB3aWR0aDoxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZGVyQnV0dG9uIHtcXG4gICAgXFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG5cXG5cXG5cXG4gICAgLmJvYXJke1xcbiAgICAgICAgd2lkdGg6MTg1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tMYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6eHgtc21hbGxcXG4gICAgfVxcblxcbiAgICAuZWRpdCwgLm5vdEVkaXQge1xcblxcbiAgICAgICAgd2lkdGg6MTBweDtcXG4gICAgICAgIFxcblxcbiAgICB9XFxuXFxuICAgIC5nZW5lcmFsVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6NnB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgXFxuICAgIC5leGFtcGxlQm9hcmRUZXh0IHtcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYm9hcmR0ZXh0Qm94IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZCB7XFxuICAgIFxcbiAgICAgICAgd2lkdGg6MTg1cHg7XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmNoYW5nZUJvYXJkVGl0bGVCdXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOngtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkZXJUZXh0Qm94IHtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgICAgIHdpZHRoOjE2MHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLnRhc2ssIC5ub3RUYXNrIHtcXG4gICAgICAgIG1hcmdpbjo1cHg7IFxcbiAgICB9XFxuICAgIC5jaXJjbGVJY29uIHtcXG4gICAgICAgIHdpZHRoOjVweDtcXG4gICAgICAgIGhlaWdodDo1cHhcXG5cXG4gICAgfVxcblxcbiAgICAuY2lyY2xlSWNvbiB7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgfVxcblxcbiAgICAudGFza0hvbGRlclRleHQsIC5kYXRlVGV4dCwgLmJ1dHRvblRleHQge1xcbiAgICAgICAgZm9udC1zaXplOnh4LXNtYWxsO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2tUb29scyB7XFxuICAgICAgICBcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OjVweDtcXG4gICAgICAgIG1hcmdpbi10b3A6NXB4O1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrVGV4dEJveCB7XFxuICAgICAgICB3aWR0aDo4MHB4O1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5kYXRlUGlja2VyIHtcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICB9XFxuXFxuXFxuICAgIFxcbiAgICAuaGlnaCB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICAgIH1cXG5cXG4gICAgLm1lZGl1bSB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmY5ODAwO1xcbiAgICB9XFxuXFxuICAgIC5sb3cge1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgZ3JlZW47XFxuICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2ssIC5ub3RUYXNrIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XFxuICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrRWRpdG9yIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAgNHB4IHNvbGlkO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuICAgIC5idXR0b24ge1xcblxcbiAgICAgICAgaGVpZ2h0OjEwcHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcXG4gICAgICAgIHdpZHRoOjIwcHg7XFxuICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgfVxcblxcbiAgICAuZWRpdFRvb2xzIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC50cmFzaEl0LCAuZmluaXNoZWQsIC5leGl0RWRpdG9yIHtcXG4gICAgICAgIHdpZHRoOjE1cHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLnRhc2tBZGRlciB7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICB9XFxuXFxuXFxuXFxufVxcblxcbi50YXNrLCAubm90VGFzayB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0Q0FBaUQsRUFBRSxxQkFBcUI7SUFDeEU7Ozs7OzhEQUtzRSxFQUFFLGVBQWU7RUFDekY7Ozs7OztFQU1BO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7Ozs7O0FBTUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxtQkFBbUI7OztBQUd2Qjs7Ozs7O0FBTUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTs7SUFFSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7Ozs7SUFJWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsS0FBSztJQUNMLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLE9BQU87SUFDUDtBQUNKOzs7QUFHQTtJQUNJLGNBQWM7SUFD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Q0ksVUFBVTtRQUNWLGNBQWM7UUFDZCxXQUFXO0lBQ2Y7Ozs7SUFJQTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLHVCQUF1Qjs7SUFFM0I7O0lBRUE7UUFDSSxzQkFBc0I7O0lBRTFCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOzs7OztJQUtBOztRQUVJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVOztJQUVkOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOzs7O0FBSUo7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnN2ZyNSb2JvdG8nKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxuICB9XFxuXFxuXFxuXFxuXFxuXFxuICAucGFnZUNvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtYmFzaXM6IGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcblxcblxcblxcblxcbi5hZGRCb2FyZCB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOTgsIDE5OCwgMTk4KTtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XFxuICAgIFxcbiAgXFxufVxcblxcblxcblxcblxcblxcbmlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLmJvYXJkQ29udGVudCB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTk4LCAxOTgsIDE5OCk7XFxuICAgIHdpZHRoOiAyOTBweDtcXG4gICAgbWFyZ2luOjEwcHg7XFxuXFxuXFxuICAgIFxcbiAgICBwYWRkaW5nLWJvdHRvbTo1cHg7XFxufVxcblxcbi5ib2FyZE92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC4yOTkpO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHRvcDowO1xcbiAgICB6LWluZGV4OjE7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLmRlbGV0ZUJvYXJkLCAuZWRpdEJvYXJkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4udGFza0hvbGRlciB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG5cXG4udGFza1RleHRCb3gge1xcbiAgICB3aWR0aDoxMzVweDtcXG59XFxuLmV4YW1wbGVCb2FyZFRleHQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgdG9wOjRweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZVxcbn1cXG5cXG5cXG4uYWRkQm9hcmRUZXh0IHtcXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuXFxuXFxufVxcblxcblxcblxcbi50YXNrLCAubm90VGFza3tcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjM3LCAyMzAsIDIzMCk7XFxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQ7XFxuICAgIG1hcmdpbjoxMHB4O1xcbn1cXG5cXG4udGFza1Rvb2xzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcblxcbn1cXG4udG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcblxcbi50YXNrTGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDo1cHg7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuXFxuICAgIGJvcmRlcjogMDtcXG5cXG59XFxuLmdlbmVyYWxUZXh0IHtcXG4gICAgZm9udC1zaXplOjEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcblxcbn1cXG5cXG4uZ2VuZXJhbFRleHRIb2xkZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcblxcblxcblxcbi5jaXJjbGVJY29uIHtcXG4gICAgd2lkdGg6MTBweDtcXG4gICAgaGVpZ2h0OjEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG4uZWRpdCwgLm5vdEVkaXR7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6NnB4O1xcbn1cXG5cXG4uY2lyY2xlSWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6YmxhY2s7XFxufVxcblxcblxcblxcbi50YXNrQWRkZXIge1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxufVxcblxcblxcbi50YXNrQWRkZXI6aG92ZXIge1xcbiAgIGN1cnNvcjpwb2ludGVyO1xcbiAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIG1hcmdpbjo1cHg7XFxuXFxufVxcbi5lZGl0VG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOjUwcHg7XFxuXFxufVxcbi5kYXRlVG9vbCB7XFxuICAgIG1hcmdpbjo1cHg7XFxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi50YXNrVGV4dEJveCB7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjo1cHg7XFxufVxcblxcbi5lZGl0VG9vbEhvbGRlciB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5kYXRlUGlja2VyIHtcXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xcbiAgICB3aWR0aDoxMzVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGJvcmRlcjowO1xcbn1cXG5cXG5cXG5cXG4udGFza0VkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6cmdiKDE5NywgNjMsIDYzKTtcXG59XFxuXFxuXFxuLnRhc2tUZXh0Qm94e1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luOjVweDtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLmJ1dHRvbnMgLmJ1dHRvbiB7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBib3JkZXI6NXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZjk4MDA7XFxufVxcblxcblxcbi5ub3RUYXNrIHtcXG4gICAgXFxuICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgXFxuICAgICBjb2xvcjpncmV5OyBcXG4gfSBcXG5cXG4ubm90RWRpdCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDIwJSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSgyMDc2JSkgaHVlLXJvdGF0ZSg4NmRlZykgYnJpZ2h0bmVzcygxMTglKSBjb250cmFzdCgxMCUpO1xcbn1cXG5cXG5cXG5cXG4ubG93IHtcXG5cXG4gICAgYm9yZGVyOjVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmxvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6Z3JlZW47XFxufVxcblxcbi5oaWdoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZWQ7XFxufVxcblxcbi5tZWRpdW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ODAwO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGhlaWdodDoxNXB4O1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICBtYXJnaW46MnB4OyBcXG5cXG59XFxuXFxuXFxuLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi50cmFzaEl0LCAuZmluaXNoZWQsIC5leGl0RWRpdG9ye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0VHlwZVRleHQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgYm90dG9tOjJweDtcXG59XFxuXFxuLmFkZEJvYXJkZXJCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOjA7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmFkZEJvYXJkZXJCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxNzgsIDE3OCwgMTc4KTtcXG59XFxuXFxuXFxuXFxuLmFkZEJvYXJkZXJUZXh0Qm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDoyMjBweDtcXG59XFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICB3aWR0aDo0MHB4O1xcbiAgICBoZWlnaHQ6NDBweDtcXG4gICAgYm9yZGVyIDowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvaGFtYnVyZ2VyTWVudS5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTksIDc1LCAyMDUpO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6NTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuXFxuXFxufVxcblxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBtYXJnaW4tdG9wIDo1cHg7XFxufVxcblxcblxcblxcbi5tb2JpbGVNZW51VGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuXFxuLmVkaXRCb2FyZCwgLmRlbGV0ZUJvYXJkIHtcXG4gICAgd2lkdGg6MjBweDtcXG59XFxuXFxuLmVkaXRFeGFtcGxlSWNvbnMge1xcblxcbiAgICBoZWlnaHQ6MjVweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6ZmxleDtcXG5cXG5cXG59XFxuXFxuLmVtcHR5cm93IHtcXG4gICBcXG4gICAgaGVpZ2h0OjI1cHg7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xcbiAgICBcXG59XFxuXFxuLmVkaXRCb2FyZCwgLmRlbGV0ZUJvYXJkIHtcXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcXG5cXG5cXG59XFxuXFxuLmJvYXJkdGV4dEJveCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgYm9yZGVyOjA7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgXFxuIFxcbn1cXG5cXG4uYm9hcmRUZXh0RWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjE1LCAyMTMsIDIxMyk7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB6LWluZGV4OjE7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICB3aWR0aDoxMDAlO1xcblxcblxcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuXFxuXFxuIFxcblxcbn1cXG5cXG5cXG4uY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XFxuXFxuICAgIC5lZGl0RXhhbXBsZUljb25zIHtcXG4gICAgICAgIGhlaWdodDoxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5lbXB0eXJvdyB7XFxuICAgICAgICBoZWlnaHQ6MTVweDtcXG4gICAgfVxcblxcbiAgICAuZGVsZXRlQm9hcmQsIC5lZGl0Qm9hcmQge1xcbiAgICAgICAgd2lkdGg6MTJweDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgIFxcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuXFxuXFxuXFxuICAgIC5ib2FyZHtcXG4gICAgICAgIHdpZHRoOjE4NXB4O1xcbiAgICB9XFxuXFxuICAgIC50YXNrTGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOnh4LXNtYWxsXFxuICAgIH1cXG5cXG4gICAgLmVkaXQsIC5ub3RFZGl0IHtcXG5cXG4gICAgICAgIHdpZHRoOjEwcHg7XFxuICAgICAgICBcXG5cXG4gICAgfVxcblxcbiAgICAuZ2VuZXJhbFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOjZweDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIFxcbiAgICAuZXhhbXBsZUJvYXJkVGV4dCB7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkdGV4dEJveCB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmQge1xcbiAgICBcXG4gICAgICAgIHdpZHRoOjE4NXB4O1xcbiAgICAgIFxcbiAgICB9XFxuICAgIC5jaGFuZ2VCb2FyZFRpdGxlQnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmRUZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTp4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZGVyVGV4dEJveCB7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgICAgICB3aWR0aDoxNjBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmFkZEJvYXJkZXJCdXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLCAubm90VGFzayB7XFxuICAgICAgICBtYXJnaW46NXB4OyBcXG4gICAgfVxcbiAgICAuY2lyY2xlSWNvbiB7XFxuICAgICAgICB3aWR0aDo1cHg7XFxuICAgICAgICBoZWlnaHQ6NXB4XFxuXFxuICAgIH1cXG5cXG4gICAgLmNpcmNsZUljb24ge1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tIb2xkZXJUZXh0LCAuZGF0ZVRleHQsIC5idXR0b25UZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTp4eC1zbWFsbDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrVG9vbHMge1xcbiAgICAgICAgXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjVweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDo1cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOjVweDtcXG5cXG4gICAgfVxcblxcbiAgICAudGFza1RleHRCb3gge1xcbiAgICAgICAgd2lkdGg6ODBweDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuZGF0ZVBpY2tlciB7XFxuICAgICAgICB3aWR0aDo4MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA2cHg7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgfVxcblxcblxcbiAgICBcXG4gICAgLmhpZ2gge1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbiAgICB9XFxuXFxuICAgIC5tZWRpdW0ge1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmOTgwMDtcXG4gICAgfVxcblxcbiAgICAubG93IHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xcbiAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrLCAubm90VGFzayB7XFxuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAudGFza0VkaXRvciB7XFxuICAgICAgICBib3JkZXItbGVmdDogIDRweCBzb2xpZDtcXG4gICAgfVxcblxcblxcblxcblxcbiAgICAuYnV0dG9uIHtcXG5cXG4gICAgICAgIGhlaWdodDoxMHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDoyMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA2cHg7XFxuICAgIH1cXG5cXG4gICAgLmVkaXRUb29scyB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgfVxcblxcbiAgICAudHJhc2hJdCwgLmZpbmlzaGVkLCAuZXhpdEVkaXRvciB7XFxuICAgICAgICB3aWR0aDoxNXB4O1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrQWRkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcblxcblxcblxcbn1cXG5cXG4udGFzaywgLm5vdFRhc2sge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hhbWJ1cmdlck1lbnUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fLCB7IGhhc2g6IFwiI1JvYm90b1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fLCB7IGhhc2g6IFwiI0N1dGl2ZU1vbm9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG4gIC8qIGN1dGl2ZS1tb25vLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSwgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG5cXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgd2lkdGg6MjUwcHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG5cXG5cXG59XFxuXFxuLnByb2plY3RCdXR0b24sIC51cENvbWluZ0J1dHRvbiB7XFxuXFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBsaW5lLWhlaWdodDoyOHB4O1xcblxcbiAgICB3aWR0aDoxMDAlO1xcblxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcblxcbiAgICBcXG4gICAgXFxufVxcblxcbi5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4ubGlzdFRpdGxlLCAucHJvamVjdFRleHQsIC5wbHVzU2lnbiwgLmRlbGV0ZUFsbFRhc2tUZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnVwQ29taW5nQnV0dG9uIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RUYXNrSG9sZGVyIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOjc1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lclRleHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBtYXJnaW4tcmlnaHQ6NDBweDtcXG59XFxuXFxuLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgIFxcbn1cXG5cXG5cXG4ud2hvbGVPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuIFxcbn1cXG5cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udXBDb21pbmdCdXR0b24ge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6NzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcblxcbi5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MjUlO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLmVkaXRQcm9qZWN0QnV0dG9ue1xcblxcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHotaW5kZXg6MztcXG4gXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjIsIDgzLCAyMjcpO1xcbiBcXG5cXG4gXFxuIH1cXG4gXFxuIFxcbiAuYWRkUHJvamVjdExhYmVsIHtcXG4gICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgICByaWdodDozcHg7XFxuXFxuICAgICBcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gXFxuIFxcbiB9XFxuIFxcbiAuZWRpdFRleHQge1xcbiAgICAgYmFja2dyb3VuZDpub25lO1xcbiBcXG4gICAgIGNvbG9yOndoaXRlO1xcbiAgICAgb3V0bGluZTpub25lO1xcbiAgICAgYm9yZGVyOm5vbmU7XFxuICAgICBoZWlnaHQ6MzBweDtcXG4gICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcXG4gfVxcbiBcXG5cXG4gLmVsZW1lbnRze1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5wbHVzU2lnbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uSG92ZXI6aG92ZXIsIC5wcm9qZWN0QWRkZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcXG4gICAgXFxufVxcblxcbiBcXG4gXFxuIFxcbi5lZGl0VGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgXFxuIFxcbiAgICAgY29sb3I6d2hpdGU7XFxufVxcbiBcXG4gXFxuIC5vdmVybGF5IHtcXG4gICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgIHdpZHRoOjI1MHB4O1xcbiAgICAgei1pbmRleDoxO1xcbiAgICAgXFxuICAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgdG9wOjBweDtcXG5cXG5cXG4gICAgIGRpc3BsYXk6bm9uZTtcXG4gXFxuICAgXFxuIFxcbn1cXG5cXG4ucHJvamVjdEFkZGVyIHtcXG5cXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG5cXG4gICAgd2lkdGg6MTAwJVxcbiAgICBcXG59XFxuXFxuXFxuXFxuLmV4aXQge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuXFxufVxcblxcblxcblxcblxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgd2lkdGg6NDBweDtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIGJvcmRlciA6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NTBweCl7XFxuXFxuIFxcbiAgICAub3ZlcmxheSB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcblxcblxcbiAgICAubW9iaWxlTWVudSB7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2VDb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbnMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1yaWdodDo1MHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MTUlO1xcblxcbiAgICB9XFxuXFxuICAgIC5lZGl0UHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5lZGl0VGV4dHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG5cXG4gICAgfVxcblxcblxcblxcblxcblxcbiAgICAuZXhpdCB7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGNvbG9yOndoaXRlO1xcbiAgICAgICAgbWFyZ2luOjEwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XFxuICAgIC5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6MTVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyNXB4KXtcXG4gICAgLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgICAgICB3aWR0aDoxMS41cHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjIwM3B4KXtcXG4gICAgLmxpc3RUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIH1cXG5cXG5cXG5cXG59XFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XFxuXFxuXFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcXG4gICAgfVxcblxcblxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25hdmlnYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNENBQWlELEVBQUUscUJBQXFCO0lBQ3hFOzs7Ozs4REFLc0UsRUFBRSxlQUFlO0VBQ3pGOztFQUVBLGdDQUFnQztBQUNsQztJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRDQUFxRCxFQUFFLHFCQUFxQjtJQUM1RTs7Ozs7K0RBSzhFLEVBQUUsZUFBZTtFQUNqRzs7O0VBR0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGFBQWE7OztBQUdqQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCOztJQUVoQixVQUFVOztJQUVWLGdCQUFnQjs7OztBQUlwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FB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ckI7OztBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5zdmcjUm9ib3RvJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcbiAgLyogY3V0aXZlLW1vbm8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICAgIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci5zdmcjQ3V0aXZlTW9ubycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG5cXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgd2lkdGg6MjUwcHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG5cXG5cXG59XFxuXFxuLnByb2plY3RCdXR0b24sIC51cENvbWluZ0J1dHRvbiB7XFxuXFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBsaW5lLWhlaWdodDoyOHB4O1xcblxcbiAgICB3aWR0aDoxMDAlO1xcblxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcblxcbiAgICBcXG4gICAgXFxufVxcblxcbi5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4ubGlzdFRpdGxlLCAucHJvamVjdFRleHQsIC5wbHVzU2lnbiwgLmRlbGV0ZUFsbFRhc2tUZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnVwQ29taW5nQnV0dG9uIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RUYXNrSG9sZGVyIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOjc1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lclRleHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBtYXJnaW4tcmlnaHQ6NDBweDtcXG59XFxuXFxuLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgIFxcbn1cXG5cXG5cXG4ud2hvbGVPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuIFxcbn1cXG5cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udXBDb21pbmdCdXR0b24ge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6NzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcblxcbi5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MjUlO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLmVkaXRQcm9qZWN0QnV0dG9ue1xcblxcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHotaW5kZXg6MztcXG4gXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjIsIDgzLCAyMjcpO1xcbiBcXG5cXG4gXFxuIH1cXG4gXFxuIFxcbiAuYWRkUHJvamVjdExhYmVsIHtcXG4gICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgICByaWdodDozcHg7XFxuXFxuICAgICBcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gXFxuIFxcbiB9XFxuIFxcbiAuZWRpdFRleHQge1xcbiAgICAgYmFja2dyb3VuZDpub25lO1xcbiBcXG4gICAgIGNvbG9yOndoaXRlO1xcbiAgICAgb3V0bGluZTpub25lO1xcbiAgICAgYm9yZGVyOm5vbmU7XFxuICAgICBoZWlnaHQ6MzBweDtcXG4gICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcXG4gfVxcbiBcXG5cXG4gLmVsZW1lbnRze1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5wbHVzU2lnbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uSG92ZXI6aG92ZXIsIC5wcm9qZWN0QWRkZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcXG4gICAgXFxufVxcblxcbiBcXG4gXFxuIFxcbi5lZGl0VGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgXFxuIFxcbiAgICAgY29sb3I6d2hpdGU7XFxufVxcbiBcXG4gXFxuIC5vdmVybGF5IHtcXG4gICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgIHdpZHRoOjI1MHB4O1xcbiAgICAgei1pbmRleDoxO1xcbiAgICAgXFxuICAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgdG9wOjBweDtcXG5cXG5cXG4gICAgIGRpc3BsYXk6bm9uZTtcXG4gXFxuICAgXFxuIFxcbn1cXG5cXG4ucHJvamVjdEFkZGVyIHtcXG5cXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG5cXG4gICAgd2lkdGg6MTAwJVxcbiAgICBcXG59XFxuXFxuXFxuXFxuLmV4aXQge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuXFxufVxcblxcblxcblxcblxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgd2lkdGg6NDBweDtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIGJvcmRlciA6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2hhbWJ1cmdlck1lbnUuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NTBweCl7XFxuXFxuIFxcbiAgICAub3ZlcmxheSB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcblxcblxcbiAgICAubW9iaWxlTWVudSB7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2VDb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbnMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1yaWdodDo1MHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MTUlO1xcblxcbiAgICB9XFxuXFxuICAgIC5lZGl0UHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5lZGl0VGV4dHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG5cXG4gICAgfVxcblxcblxcblxcblxcblxcbiAgICAuZXhpdCB7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGNvbG9yOndoaXRlO1xcbiAgICAgICAgbWFyZ2luOjEwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XFxuICAgIC5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6MTVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyNXB4KXtcXG4gICAgLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgICAgICB3aWR0aDoxMS41cHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjIwM3B4KXtcXG4gICAgLmxpc3RUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIH1cXG5cXG5cXG5cXG59XFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XFxuXFxuXFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcXG4gICAgfVxcblxcblxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgYm94LXNpemluZzogbm9uZTtcXG59XFxuLnNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzYsIDIzNiwgMjU1KTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG4uZXJyb3JNZXNzYWdlIHtcXG5cXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuXFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OjMwO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5tZXNzYWdlSG9sZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOnNpbHZlcjtcXG4gICAgaGVpZ2h0OjE1MHB4O1xcbiAgICB3aWR0aDoyMDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLmNvbnRlbnRIb2xkZXIge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOjIwMHB4O1xcbn1cXG5cXG4uZXhpdEJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBib3JkZXI6MDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpyb3lhbGJsdWU7XFxuXFxufVxcblxcbi5leGl0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOnJnYig1NSwgODgsIDE4OCk7XFxufVxcblxcblxcbi5jb250ZWVudEhvbGRlciBoMiwgLmNvbnRlZW50SG9sZGVyIHAsIC5leGl0QnV0dG9uIHtcXG4gICAgbWFyZ2luOjEwcHg7XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLCtCQUErQjs7SUFFL0IsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTs7SUFFWixzQkFBc0I7SUFDdEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7O0lBR3ZCLG1CQUFtQjs7O0FBR3ZCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgYm94LXNpemluZzogbm9uZTtcXG59XFxuLnNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzYsIDIzNiwgMjU1KTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG4uZXJyb3JNZXNzYWdlIHtcXG5cXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuXFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OjMwO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5tZXNzYWdlSG9sZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOnNpbHZlcjtcXG4gICAgaGVpZ2h0OjE1MHB4O1xcbiAgICB3aWR0aDoyMDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLmNvbnRlbnRIb2xkZXIge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOjIwMHB4O1xcbn1cXG5cXG4uZXhpdEJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBib3JkZXI6MDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpyb3lhbGJsdWU7XFxuXFxufVxcblxcbi5leGl0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOnJnYig1NSwgODgsIDE4OCk7XFxufVxcblxcblxcbi5jb250ZWVudEhvbGRlciBoMiwgLmNvbnRlZW50SG9sZGVyIHAsIC5leGl0QnV0dG9uIHtcXG4gICAgbWFyZ2luOjEwcHg7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/Lyk7XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufVxuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mWWVhciBmcm9tIFwiLi4vc3RhcnRPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0RGF5T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBkYXkgb2YgeWVhclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheU9mWWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMTgzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZSwgc3RhcnRPZlllYXIoZGF0ZSkpO1xuICB2YXIgZGF5T2ZZZWFyID0gZGlmZiArIDE7XG4gIHJldHVybiBkYXlPZlllYXI7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5P1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxhbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgeWVhclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgY2xlYW5EYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoY2xlYW5EYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmlnYXRpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZpZ2F0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vaWYgeW91IHdhbnQgdG8gY2xlYXIgZGF0YSB3cml0ZSBsb2NhbFN0b3JhZ2UuY2xlYXIoKSBpbiB0aGUgY29uc29sZVxuXG5pbXBvcnQgeyBuYXZpZ2F0aW9uIH0gZnJvbSAnLi9uYXYuanMnO1xuaW1wb3J0IHsgY3JlYXRlRG9tRWxlbWVudHMgfSBmcm9tICcuL3BhZ2VMYXlvdXQuanMnO1xuaW1wb3J0IHsgbW9iaWxlIH0gZnJvbSAnLi9tb2JpbGUuanMnO1xuXG5jcmVhdGVEb21FbGVtZW50cygpO1xuXG4vL21vYmlsZS5qcywgY29udGVudC5qcywgIG5hdi5qcyBhbGwgY2FsbCB0aGVyZSBjbGFzcyBiZWZvcmUgd2UgaGF2ZSBhY3RpdmF0ZWRcbi8vYW55IG9mIHRoZSBlbGVtZW50cyBzbyBtYWtlc3VyZSB0byBzZXQgZWxlbWVudHMgb25jZSBoYXMgZXZlcnl0aGluZyBhY3RpdmF0ZWRcbi8vb3IgZWxzZSB5b3Ugd2lsbCBnZXQgYW4gZXJyb3IuXG4vLyBjb250ZW50IGRvZXMgbm90IGFjZXNzIG5hdmlnYXRpb24gb3IgbW9iaWxlIHNvIHlvdSBkbyBub3QgaGF2ZSB0byB3b3JyeSB0aGF0XG4vLyBtdWNoIGFib3V0IGNvbnRlbnQgaG93ZXZlciBuYXZpZ2F0aW9uIGFjdGl2YXRlcyBiZWZvcmUgbW9iaWxlLlxubmF2aWdhdGlvbi5hY3RpdmF0ZU5hdmlnYXRpb24oKTtcbm1vYmlsZS5hY3RpdmF0ZU1vYmlsZU1lbnUoKTtcbiJdLCJuYW1lcyI6WyJnZXRVcGRhdGVkRWxlbWVudHMiLCJhc3NpZ25Ub29scyIsImVsZW1lbnRzIiwiaW5kZXgiLCJib2FyZEluZGV4IiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInRvb2xzQ2hpbGRyZW4iLCJBcnJheSIsImZyb20iLCJjaGlsZHJlbiIsInRvb2xFbGVtZW50IiwidGFza0luZGV4IiwiYXNzaWduVGFza0luZGV4IiwiZWxlbWVudCIsInRhc2tDaGlsZHJlbiIsInRhc2tDaGlsZCIsInRhc2tUb29sc0NoaWxkcmVuIiwiYXNzaWduQm9hcmRJY29ucyIsImN1cnJlbnRJbmRleCIsImJvYXJkIiwiZWRpdEV4YW1wbGVJY29ucyIsIml0ZW1FbGVtZW50IiwidGFza1BhcmFncmFwaCIsImFzc2lnbkJvYXJkRWxlbWVudHMiLCJwYWdlQ29udGVudENoaWxkcmVuIiwiYm9hcmRDb250ZW50IiwicmVtb3ZlSXRlbSIsImFkZEJpbmRpbmdzIiwicmVtb3ZlQmluZGluZ3MiLCJzZXRBcnJheSIsInNldE9iamVjdCIsInNlbmQiLCJnZXRJbml0aWFsRWxlbWVudHMiLCJjcmVhdGVCb2FyZCIsImNyZWF0ZUFkZEJvYXJkIiwiY3JlYXRlQm9hcmRFZGl0b3IiLCJjcmVhdGVMaXN0RWRpdG9yIiwiY3JlYXRlVXBDb21pbmdCb2FyZCIsImNyZWF0ZVRhc2tBcnJhbmdlbWVudCIsImFwcGx5VGFza0NoYW5nZXMiLCJyZW1vdmVOYXZFbXB0aWVzIiwiYWRkQm9hcmRUYXNrcyIsInJlbW92ZUJvYXJkT3ZlcmxheSIsImFkZEJvYXJkT3ZlcmxheSIsInNoYWRlQnV0dG9uQ29sb3IiLCJzZXRUYXNrRGF0ZSIsImZpbmRCb2FyZFRleHRCb3giLCJnZXRFbGVtZW50QnlCb2FyZEluZGV4IiwiZ2V0T2JqZWN0VmFsdWUiLCJjaGFuZ2VWYWx1ZVRvRGF0ZSIsImNyZWF0ZVRhc2tUZW1wbGF0ZSIsImdldFVwQ29taW5nVGFza3MiLCJyZW5kZXJUaW1lVGFza3MiLCJpc1RvZGF5IiwiaXNUaGlzV2VlayIsInN0b3JhZ2UiLCJjaGVja1NwYWNlcyIsIkNvbnRlbnQiLCJzdGF0aWNMaXN0VGFza3MiLCJjaGFuZ2VkTGlzdFRhc2tzIiwidGFza0NoYW5nZXMiLCJ1cGNvbWluZ1Rhc2tzIiwiZGVsZXRlZFVwQ29taW5nSXRlbXMiLCJpc1VwQ29taW5nIiwiY2FuRGlzcnVwdCIsIm5hbWUiLCJkb20iLCJyZW1vdmVDb250ZW50QmluZGluZ3MiLCJib29sIiwiYm9hcmRlckJ1dHRvbiIsImFkZEJvYXJkVGFza3NDbGljayIsImRlbGV0ZUJvYXJkIiwiZWRpdEJvYXJkIiwidGFza0FkZGVycyIsImFkZExpc3RFZGl0b3JDbGljayIsImFkZENvbnRlbnRCaW5kaW5ncyIsImFkZExpc3RCaW5kaW5ncyIsImJ1dHRvbiIsInNoYWRlQnV0dG9uQ29sb3JDbGljayIsInRyYXNoSXQiLCJkZWxldGVUYXNrIiwiZmluaXNoZWQiLCJhZGRUYXNrQ2xpY2siLCJlZGl0IiwiZWRpdFRhc2siLCJjaXJjbGVJY29uIiwiY3Jvc3NPdXRUYXNrIiwiZXhpdEVkaXRvciIsImV4aXRMaXN0RWRpdG9yIiwiYWRkVGFza0JpbmRpbmdzIiwicmVtb3ZlVGFza0JpbmRpbmdzIiwicmVtb3ZlTGlzdEJpbmRpbmdzIiwiYWRkQ2hhbmdlTmFtZUJpbmRpbmciLCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucyIsImNoYW5nZU5hbWUiLCJjcm9zc091dER1cGxpY2F0ZVRhc2siLCJ0YXNrIiwidGFza3MiLCJjaGlsZFRhc2siLCJuYXZJbmRleCIsImNoZWNrZWQiLCJyZW1vdmVDcm9zc091dEVkaXRvciIsImNoZWNrQ3Jvc3NPdXRFZGl0b3IiLCJuZXdUYXNrIiwiYm9hcmRDb3VudGVyIiwiY2FuRWRpdCIsInRhc2tDb3VudGVyIiwiY2hhbmdlZEJvYXJkTGlzdHMiLCJsZW5ndGgiLCJlZGl0b3IiLCJsaXN0RWRpdG9yIiwiaW5kZXhlcyIsImdldEluZGV4ZXMiLCJyZW1vdmVMaXN0RWRpdG9yIiwiYWRkTGlzdEVkaXRvclRvQ3Jvc3NPdXRUYXNrcyIsImN1cnJlbnROYW1lIiwicmV0cmlldmVUaXRsZSIsInNlbmREYXRhIiwic3RvcmVEYXRhIiwic2VuZFVwQ29taW5nQ2hhbmdlcyIsInJlbmRlckJvYXJkTGlzdHMiLCJldmVudCIsInRhcmdldCIsImJvYXJkSW5kZXgyIiwibGlzdEluZGV4IiwibmV3U3RhdGljTGlzdFRhc2tzIiwiZGVsZXRlZFRhc2siLCJjdXJyZW50VGFzayIsImxpc3RUYXNrIiwibmV3QXJyYXkiLCJuZXdlckFycmF5IiwiZmlsdGVyIiwicHVzaCIsIm5ld1Rhc2tzIiwicmVtb3ZlVXBDb21pbmdUYXNrcyIsImFjdGl2YXRlQ29udGVudE1lbnUiLCJ0ZXh0IiwiZGF0ZSIsInByaW9yaXR5IiwiYWRkTGlzdEVkaXRvciIsImZpbmRMaXN0RWRpdG9yQm9hcmRJbmRleCIsInN0b3BMb29wIiwiYnJlYWtMb29wIiwiYWRkVGFzayIsImNoYW5nZUR1cGxpY2F0ZVRhc2tzIiwiY3VycmVudEJvYXJkSW5kZXgiLCJjdXJyZW50VGFza0luZGV4IiwiY2hhbmdlVGFzayIsIm9sZFRhc2siLCJuYXZOYW1lIiwiYWRkVGFza1RvVGltZSIsInJlbW92ZU91dE9mRGF0ZVRhc2tzIiwiY3JlYXRlVGFzayIsImRhdGVWYWx1ZSIsImRhdGVQaWNrZXIiLCJ2YWx1ZSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsInRhc2tUZXh0IiwidGFza1RleHRCb3giLCJnZXROZXdJbmRleGVzIiwibmV3Qm9hcmRJbmRleCIsIm5ld1Rhc2tJbmRleCIsIm5ld0luZGV4IiwiY2hlY2tVcENvbWluZ1Rhc2siLCJpc1Rhc2siLCJjb3VudGVyIiwiYWRkT3V0T2ZEYXRlVGFza3NUb0RlbGV0ZWRVcGNvbWluZ0l0ZW1zIiwic2hhZGVCdXR0b25CeUNsYXNzIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJidXR0b25zIiwiYnV0dG9uUGFyYWdyYXBoIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwic2hhZGVCdXR0b25CeVByaW9yaXR5IiwicmVtb3ZlRWRpdFRpdGxlTWVudSIsImxpc3QiLCJjdXJyZW50VGV4dCIsInRleHRDb250ZW50IiwiZWRpdEJvYXJkVGVtcGxhdGUiLCJmaW5hbEFycmF5IiwiY29uY2F0IiwibGlzdEVkaXRvclRlbXBsYXRlIiwiY3JlYXRpbmdUYXNrIiwic3BsaWNlIiwibGlzdEJvYXJkQXJyYXkiLCJib2FyZFRleHQiLCJib2FyZENvbnRlbnRUZXh0Qm94IiwicmVuZGVyRWRpdEJvYXJkVGV4dFZhbHVlcyIsImlzQ2hhbmdlZE5hbWUiLCJpbmRleGVzTGVuZ3RoIiwiaSIsInJlbmRlclNpbmdsZUJvYXJkTGlzdCIsInRhc2tMaXN0IiwiYWRkRGF0ZSIsImlubmVySFRNTCIsImxpc3RUZXh0IiwidGFza0xpc3RDaGlsZHJlbiIsImFjdGl2YXRlQ29udGVudCIsInJlbmRlckxpc3RUYXNrcyIsImlzRW1wdHkiLCJhZGRCb2FyZCIsInBhZ2VDb250ZW50IiwiaXNVcENvbWluZ0JvYXJkIiwidXBDb21pbmdCb2FyZCIsInNldENoYW5nZWRUb0RvTGlzdHNFbXB0eSIsInNldENoYW5nZWRUb0RvTGlzdHMiLCJhY3RpdmF0ZU5hdkNvbnRlbnQiLCJyZXRyaWV2ZURhdGEiLCJhY3RpdmF0ZVVwQ29taW5nQ29udGVudCIsInJlbW92ZU5hdlRhc2tzIiwiZGlzcnVwdENvbnRlbnQiLCJvYmplY3RJbmRleCIsInJlbW92ZVVwQ29taW5nSXRlbXMiLCJuYXZzIiwiZ2V0QWxsRGF0YSIsInByb2plY3RUeXBlVGV4dCIsIm5ld0RhdGEiLCJvdmVyd3JpdGVEYXRhIiwiZ2V0SXNVcENvbWluZyIsImdldEluZGV4IiwiZGlzcnVwdEZsb3ciLCJvYmplY3ROYW1lIiwiY29udGVudE1lbnUiLCJmaW5kT2JqZWN0QnlOYW1lIiwibmV3TmF2IiwibmF2S2V5cyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJjcmVhdGVCb2FyZFRlbXBsYXRlIiwiY3VycmVudFRhc2tzIiwicmVuZGVyTGlzdEVkaXRvclZhbHVlIiwidmFsdWVBc0RhdGUiLCJzdGF0aWNBcnJheSIsImJvYXJkVGV4dEJveCIsImFycmF5IiwiYWRkSXRlbSIsIml0ZW0iLCJvYmplY3QiLCJpc0FycmF5IiwibmV3T2JqZWN0IiwiYmxhbmtPYmplY3QiLCJuZXdPYmplY3RLZXlzIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiYmxhbmtBcnJheSIsImZ1bmMiLCJiaW5kaW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXZpZ2F0aW9uIiwiTW9iaWxlIiwiaXNNb2JpbGUiLCJtb2JpbGVNZW51T24iLCJyZW1vdmVNb2JpbGVNZW51IiwibWVkaWEiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiY29udGVudCIsIm5hdiIsInJlbW92ZU1vYmlsZUJpbmRpbmdzIiwiaGFtYnVyZ2VyTWVudSIsIm9wZW5OYXZpZ2F0aW9uIiwiZXhpdCIsInByb2plY3RBZGRlciIsImFkZFJlbmRlclByb2plY3RCaW5kaW5ncyIsInByb2plY3RDb250YWluZXIiLCJ1cENvbWluZ0J1dHRvbiIsImVkaXRJdGVtcyIsImFkZFJlbmRlck1vYmlsZUJpbmRpbmdzIiwicmVtb3ZlUmVuZGVyUHJvamVjdEJpbmRpbmdzIiwiYWRkUHJvamVjdExhYmVscyIsInJlbmRlck1vYmlsZU1lbnVDbGljayIsIndob2xlT3ZlcmxheSIsInJlbmRlck1vYmlsZU1lbnVLZXlzIiwiYWRkTW9iaWxlQmluZGluZ3MiLCJyZW5kZXJNb2JpbGVNZW51IiwicmVzZXRNb2JpbGVNZW51IiwiZGlzcGxheSIsIm1vYmlsZU1lbnUiLCJhY3RpdmF0ZVByb2plY3RUYXNrIiwicmVtb3ZlU3BlY2lhbE1vYmlsZUJpbmRpbmdzIiwiY3JlYXRlUHJvamVjdFRhc2tzS2V5cyIsInJlbW92ZVJlbmRlck1vYmlsZUV2ZW50cyIsImNyZWF0ZVByb2plY3RUYXNrc0NsaWNrIiwiY2FuUmVtb3ZlTW9iaWxlTWVudSIsInJlbW92ZU5hdmlnYXRpb25CaW5kaW5ncyIsImFkZE5hdmlnYXRpb25CaW5kaW5ncyIsIndhdGNoTWVkaWEiLCJtZWRpYVF1ZXJ5IiwibWF0Y2hlcyIsInJlbW92ZUVkaXRvciIsInJlbmRlck92ZXJsYXkiLCJhY3RpdmF0ZU1vYmlsZU1lbnUiLCJtb2JpbGUiLCJjcmVhdGVOYXZUYXNrIiwiY3JlYXRlUHJvamVjdEVkaXRvciIsImRvbUVsZW1lbnRzIiwiY2hhbmdlZFRhc2tzIiwic3RhdGljVGFza3MiLCJoaWdobGlnaHRlZEluZGV4IiwidXBjb21pbmdCdXR0b24iLCJub3RSZW1vdmVBZGRQcm9qZWN0TGFiZWwiLCJ1cGRhdGVkSXRlbXMiLCJlZGl0SXRlbSIsImRlbGV0ZUl0ZW1zIiwiZGVsZXRlSXRlbSIsInN3aXRjaFBhZ2UiLCJhY3RpdmF0ZVVwQ29taW5nVGFzayIsImhpZ2hsaWdodFVwQ29taW5nQnV0dG9uIiwidW5ob3ZlclVwQ29taW5nQnV0dG9uIiwibG9va1VwVGFzayIsInVuaGlnaGxpZ2h0VXBDb21pbmdCdXR0b24iLCJhZGRQcm9qZWN0QnV0dG9uV2hvbGVPdmVyYXlCaW5kaW5ncyIsInByb2plY3RCdXR0b24iLCJyZW1vdmVQcm9qZWN0V2hvbGVPdmVybGF5QmluZGluZ3MiLCJzZXRIaWdobGlnaHRJbmRleCIsInN0b3JlSGlnaGxpZ2hJbmRleCIsInRpdGxlIiwicmVuZGVySGlnaGxpZ2h0RWxlbWVudHMiLCJyZW5kZXJQcm9qZWN0VGFza3MiLCJ1bkhpZ2hsaWdodEJ1dHRvbiIsIm5hdlRhc2siLCJ1cENvbWluZ1Rhc2siLCJoaWdobGlnaHQiLCJpc0VkaXQiLCJoaWdobGlnaHRCdXR0b24iLCJnZXRDdXJyZW50SW5kZXgiLCJwcm9qZWN0TGFiZWwiLCJjcmVhdGVQcm9qZWN0VGFza3MiLCJnZXRUZXh0Qm94VmFsdWVzIiwiaXNFZGl0aW5nVGFzayIsInNlbmROYW1lIiwiZGVsZXRlRGF0YSIsInJlbmRlckluZGV4IiwiY29udGVudEluZGV4Iiwibm9ybWFsSW5kZXgiLCJwcm9qZWN0VGFzayIsImNyZWF0ZUVkaXRvciIsImVkaXRUZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXNzaWduVGFza0FjdGlvbnMiLCJjaGlsZEVsZW1lbnRzIiwibmV3RWxlbWVudCIsImFzc2lnblZhbHVlRWxlbWVudHMiLCJwcm9qZWN0VGFza0hvbGRlckNoaWxkcmVuIiwiZWxlbWVudENoaWxkcmVuIiwiY2hpbGRBcnJheSIsInByb2plY3RUYXNrSG9sZGVyIiwiZWRpdG9yVGV4dCIsImNoZWNrUHJvamVjdEVkaXRvciIsIm92ZXJsYXkiLCJkaXNhYmxlUGFnZUNvbnRlbnRFbGVtZW50cyIsInVwZGF0ZWRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY3Vyc29yIiwiY2hhbmdlZFRpdGxlc1RvVGFza3MiLCJ0aXRsZXMiLCJ0aXRsZUFycmF5IiwidmFsdWVzIiwiYWN0aXZhdGVOYXZpZ2F0aW9uIiwic3RvcmVkRGF0YSIsImZvcm1hdGVkVGl0bGVzIiwiZm9ybWF0ZWREYXRhIiwib3ZlcndyaXRlVGl0bGVzIiwicmV0cmlldmVIaWdobGlnaHRJbmRleCIsImNyZWF0ZURvbUVsZW1lbnRzIiwiYm9keSIsInBhZ2VUZXh0Iiwic2VjdGlvbiIsImxpc3RUaXRsZSIsInByb2plY3RUZXh0IiwicGx1c1NpZ24iLCJlZGl0UHJvamVjdEJ1dHRvbiIsImFkZFByb2plY3RMYWJlbCIsImVycm9yTWVzc2FnZSIsImVycm9yTWVzc2FnZVRleHQiLCJleGl0QnV0dG9uIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb2plY3RDb250YWluZXJUZXh0IiwidGFza0hvbGRlcnMiLCJ0YXNrTGlzdHMiLCJib2FyZE92ZXJsYXkiLCJleGFtcGxlQm9hcmRUZXh0IiwiZGF0ZVRvb2xzIiwiaXRlbXMiLCJ0aXRsZUl0ZW1zIiwidXBjb21pbmciLCJkYXRhIiwicmV0cmlldmVUaXRsZXMiLCJkZWxldGVOYW1lIiwibmV3VGl0bGVzIiwibmV3VGl0bGVLZXlzIiwiZmluYWxUaXRsZXMiLCJuZXdJdGVtcyIsIm5ld0l0ZW1zS2V5cyIsIm5ld2VySXRlbXMiLCJkYXRhU3RvcmFnZSIsInR1cm5EYXRhSW50b0Zvcm1hdCIsImpzb25UaXRsZXMiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbkRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmV0cmlldmVkRGF0YSIsImdldEl0ZW0iLCJyZXRyaWV2ZWRUaXRsZXMiLCJyYXdEYXRhIiwicGFyc2UiLCJmb3JtYXREYXRhIiwiaGlnaGxpZ2h0SW5kZXgiLCJhZGREYXRlc1RvVGFza3MiLCJkYXRlcyIsIm5ld0RhdGFLZXlzIiwicmVtb3ZlRGF0ZSIsInRhc2tLZXlzIiwicmVtb3ZlRGF0ZU9iamVjdHMiLCJib2FyZEtleXMiLCJuZXdCb2FyZCIsInRyYXNoSW1hZ2UiLCJlZGl0SWNvbiIsImNoZWNrTWFya0ljb24iLCJleGl0SWNvbiIsInRhc2tDbGFzcyIsImVkaXRDbGFzcyIsImNpcmNsZUljb25CYWNrZ3JvdW5kIiwibmV3VGFza1RleHQiLCJkYXRlVGV4dCIsInRlbXBsYXRlIiwiYWRkQm9hcmRUZXh0IiwiZGVmYXVsdENvbG9yIiwiaWNvbiIsImljb25DbGFzcyIsImhpZ2hsaWdodGVkIiwic3R5bGVUZXh0Iiwic29ydERhdGVzQnlMYXRlc3REYXkiLCJjcmVhdGVVcENvbWluZ1RlbXBsYXRlIiwiYWRkVXBDb21pbmdCb2FyZHMiLCJ0b2RheUJvYXJkIiwid2Vla0JvYXJkIiwidGltZUJvYXJkcyIsImdldFRpbWVVcGNvbWluZ1ZhbHVlcyIsInRvZGF5VGFza3MiLCJ3ZWVrVGFza3MiLCJnZXRUaW1lTm9ybWFsVmFsdWVzIiwiZ2V0VGFza1RpbWVWYWx1ZXMiLCJ0aW1lcyIsInVuc2hhZGVCdXR0b25zIiwiY2hhbmdlTGlzdEVkaXRvclByaW9yaXR5IiwiY3VycmVudFByaW9yaXR5IiwicGFyYWdyYXBoIiwiZm9ybWF0IiwiZ2V0RGF5T2ZZZWFyIiwiYnV0dG9uVGV4dCIsImNoaWxkIiwiZG9tRWxlbWVudCIsInBhcmVudEFycmF5IiwiY3VycmVudE9iamVjdCIsIm9iamVjdFZhbHVlIiwibmV3VmFsdWUiLCJzcGxpdCIsInllYXIiLCJtb250aEluZGV4IiwiZGF5IiwidGltZVRhc2tzIiwibmV3VGltZVRhc2tzIiwic29ydCIsInRpbWVUYXNrMSIsInRpbWVUYXNrMiIsImRheXMyIiwiZGF5czEiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=