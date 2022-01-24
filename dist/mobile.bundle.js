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
___CSS_LOADER_EXPORT___.push([module.id, "/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n  }\n\n\n\n\n\n  .pageContent {\n    display:flex;\n    flex-basis: auto;\n    overflow-y: hidden;\n    height:100%;\n    overflow-x: auto;\n}\n\n\n\n\n\n.addBoard {\n    width: 250px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    background:rgb(198, 198, 198);\n    margin:10px;\n    padding-bottom:10px;\n    \n  \n}\n\n\n\n\n\ninput {\n    outline: none;\n}\n\n\n.boardContent {\n\n    font-family: 'Roboto', sans-serif;\n    overflow-y: auto;\n    overflow-x: hidden;\n    flex-shrink: 0;\n}\n\n.board {\n    position: relative;\n    text-align:center;\n    background:rgb(198, 198, 198);\n    width: 290px;\n    margin:10px;\n\n\n    \n    padding-bottom:5px;\n}\n\n.boardOverlay {\n    background:rgba(0, 0, 0, 0.299);\n    position:absolute;\n    width:100%;\n    height:100%;\n    top:0;\n    z-index:1;\n    display:none;\n}\n\n.deleteBoard, .editBoard {\n    cursor: pointer;\n}\n\n\n.taskHolder {\n\n    display:flex;\n    align-items:center;\n}\n\n.taskTextBox {\n    width:135px;\n}\n.exampleBoardText {\n    position:relative;\n    top:4px;\n    font-size: large\n}\n\n\n.addBoardText {\n    margin-top:5px;\n    font-size: large;\n\n\n}\n\n\n\n.task, .notTask{\n    background:rgb(237, 230, 230);\n    border-left: 8px solid;\n    margin:10px;\n}\n\n.taskTools {\n    display:flex;\n    justify-content:space-between;\n    padding-left:10px;\n    padding-right:10px;\n    margin-top:10px;\n\n}\n.tools {\n    display:flex;\n}\n\n\n.taskLabel {\n    position: relative;\n    top:5px;\n    word-wrap: break-word;\n    margin-bottom:10px;\n    font-size: smaller;\n\n    border: 0;\n\n}\n.generalText {\n    font-size:10px;\n    margin-right: 20px;\n    word-wrap: break-word;\n\n}\n\n.generalTextHolder {\n    display:flex;\n}\n\n\n\n\n.circleIcon {\n    width:10px;\n    height:10px;\n    border-radius:20px;\n    border: 3px solid black;\n    cursor:pointer;\n}\n.edit, .notEdit{\n    width:20px;\n    cursor:pointer;\n    margin-right:6px;\n}\n\n.circleIcon:hover {\n    background:black;\n}\n\n\n\n.taskAdder {\n    margin-top:10px;\n}\n\n\n.taskAdder:hover {\n   cursor:pointer;\n   background:rgb(178, 178, 178);\n}\n\n\n\n\n\n\n\n\n.priority {\n    display:flex;\n    margin:5px;\n\n}\n.editTools {\n    display:flex;\n    width:50px;\n\n}\n.dateTool {\n    margin:5px;\n    margin-right:14px;\n    display:flex;\n}\n.taskTextBox {\n    height:20px;\n    font-family: 'Roboto', sans-serif;\n    margin:5px;\n}\n\n.editToolHolder {\n\n    display:flex;\n    justify-content:space-between;\n    \n}\n\n.buttons {\n    margin-left: 5px;\n}\n\n.datePicker {\n    margin-left:5px;\n    width:135px;\n    height:20px;\n    border:0;\n}\n\n\n\n.taskEditor {\n    background: rgb(237, 230, 230);\n    margin:10px;\n    margin-left:20px;\n    display:flex;\n    align-items: center;\n    border-left: 8px solid;\n    flex-direction: column;\n}\n\n.error {\n    color:rgb(197, 63, 63);\n}\n\n\n.taskTextBox{\n    border:0;\n    margin:5px;\n\n}\n\n\n\n\n.buttons .button {\n\n    cursor: pointer;\n}\n\n.high {\n    border:5px solid red;\n}\n\n.medium {\n    border: 5px solid #ff9800;\n}\n\n\n.notTask {\n    \n     text-decoration: line-through; \n     color:grey; \n } \n\n.notEdit {\n    filter: invert(20%) sepia(10%) saturate(2076%) hue-rotate(86deg) brightness(118%) contrast(10%);\n}\n\n\n\n.low {\n\n    border:5px solid green;\n}\n\n.low:hover {\n    background:green;\n}\n\n.high:hover {\n    background:red;\n}\n\n.medium:hover {\n    background: #ff9800;\n}\n\n.button {\n    color:black;\n    height:15px;\n    width:35px;\n    line-height: 15px;\n    font-size: x-small;\n    margin:2px; \n\n}\n\n\n.buttons {\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n\n}\n\n.trashIt, .finished, .exitEditor{\n    cursor: pointer;\n}\n\n\n.projectTypeText {\n    position:relative;\n    bottom:2px;\n}\n\n.addBoarderButton {\n    background:0;\n    width:100%;\n    border:0;\n    margin-top: 5px;\n    height:20px;\n    cursor:pointer;\n}\n\n.addBoarderButton:hover {\n    background:rgb(178, 178, 178);\n}\n\n\n\n.addBoarderTextBox {\n    font-family: 'Roboto', sans-serif;\n    border:0;\n    margin-top:5px;\n    height:20px;\n    width:220px;\n}\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n.editBoard, .deleteBoard {\n    width:20px;\n}\n\n.editExampleIcons {\n\n    height:25px;\n    \n    display:flex;\n\n\n}\n\n.emptyrow {\n   \n    height:25px;\n    width:100%;\n    text-indent: -9999px;\n    \n}\n\n.editBoard, .deleteBoard {\n    margin-left:10px;\n\n\n}\n\n.boardtextBox {\n    font-family: 'Roboto', sans-serif;\n    text-align: center;\n    font-size: large;\n    width:100%;\n    height:20px;\n    border:0;\n    background:none;\n    \n \n}\n\n.boardTextEditor {\n    background:rgb(215, 213, 213);\n    position:relative;\n    z-index:1;\n    margin-top:10px;\n    margin-bottom:10px;\n    width:100%;\n\n\n\n    justify-content:center;\n    display:flex;\n\n\n \n\n}\n\n\n.changeBoardTitleButton {\n    cursor: pointer;\n}\n\n\n@media only screen and (max-width: 300px){\n\n    .editExampleIcons {\n        height:15px;\n    }\n\n    .emptyrow {\n        height:15px;\n    }\n\n    .deleteBoard, .editBoard {\n        width:12px;\n    }\n\n    .addBoarderButton {\n    \n        height: 10px;\n        font-size: 12px;\n    }\n\n\n\n    .board{\n        width:185px;\n    }\n\n    .taskLabel {\n        font-size:xx-small\n    }\n\n    .edit, .notEdit {\n\n        width:10px;\n        \n\n    }\n\n    .generalText {\n        font-size:6px;\n        \n    }\n\n    \n    .exampleBoardText {\n        word-wrap: break-word;\n        font-size: x-small;\n    }\n\n    .boardtextBox {\n        font-size: x-small;\n        height:12px;\n    }\n\n    .addBoard {\n    \n        width:185px;\n      \n    }\n    .changeBoardTitleButton {\n        font-size: x-small;\n    }\n\n    .addBoardText {\n        font-size:x-small;\n    }\n\n    .addBoarderTextBox {\n        height:12px;\n        font-size: xx-small;\n        width:160px;\n    }\n    \n    .addBoarderButton {\n        font-size: x-small;\n    }\n\n    .task, .notTask {\n        margin:5px; \n    }\n    .circleIcon {\n        width:5px;\n        height:5px\n\n    }\n\n    .circleIcon {\n        border: 2px solid black;\n    }\n\n    .taskHolderText, .dateText, .buttonText {\n        font-size:xx-small;\n        \n    }\n\n    .taskTools {\n        \n        padding-right:5px;\n        padding-left:5px;\n        margin-top:5px;\n\n    }\n\n    .taskTextBox {\n        width:80px;\n        height:12px;\n        font-size: xx-small;\n    }\n\n    .datePicker {\n        width:80px;\n        font-size: 6px;\n        height:12px;\n    }\n\n\n    \n    .high {\n        border: 3px solid red;\n    }\n\n    .medium {\n        border: 3px solid #ff9800;\n    }\n\n    .low {\n        border: 3px solid green;\n   \n    }\n\n    .task, .notTask {\n        border-left: 4px solid;\n       \n    }\n\n    .taskEditor {\n        border-left:  4px solid;\n    }\n\n\n\n\n    .button {\n\n        height:10px;\n        line-height: 10px;\n        width:20px;\n        font-size: 6px;\n    }\n\n    .editTools {\n        margin-left: 30px;\n    }\n\n    .trashIt, .finished, .exitEditor {\n        width:15px;\n\n    }\n\n    .taskAdder {\n        font-size: xx-small;\n    }\n\n\n\n}\n\n.task, .notTask {\n    border-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/board.css"],"names":[],"mappings":"AAAA,2BAA2B;AAC3B;IACI,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,4CAAiD,EAAE,qBAAqB;IACxE;;;;;8DAKsE,EAAE,eAAe;EACzF;;;;;;EAMA;IACE,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,gBAAgB;AACpB;;;;;;AAMA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,WAAW;IACX,mBAAmB;;;AAGvB;;;;;;AAMA;IACI,aAAa;AACjB;;;AAGA;;IAEI,iCAAiC;IACjC,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;IAC7B,YAAY;IACZ,WAAW;;;;IAIX,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,iBAAiB;IACjB,UAAU;IACV,WAAW;IACX,KAAK;IACL,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;;AAGA;;IAEI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;AACA;IACI,iBAAiB;IACjB,OAAO;IACP;AACJ;;;AAGA;IACI,cAAc;IACd,gBAAgB;;;AAGpB;;;;AAIA;IACI,6BAA6B;IAC7B,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;;AAEnB;AACA;IACI,YAAY;AAChB;;;AAGA;IACI,kBAAkB;IAClB,OAAO;IACP,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;;IAElB,SAAS;;AAEb;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,qBAAqB;;AAEzB;;AAEA;IACI,YAAY;AAChB;;;;;AAKA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,uBAAuB;IACvB,cAAc;AAClB;AACA;IACI,UAAU;IACV,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;;;AAIA;IACI,eAAe;AACnB;;;AAGA;GACG,cAAc;GACd,6BAA6B;AAChC;;;;;;;;;AASA;IACI,YAAY;IACZ,UAAU;;AAEd;AACA;IACI,YAAY;IACZ,UAAU;;AAEd;AACA;IACI,UAAU;IACV,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,WAAW;IACX,iCAAiC;IACjC,UAAU;AACd;;AAEA;;IAEI,YAAY;IACZ,6BAA6B;;AAEjC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,WAAW;IACX,QAAQ;AACZ;;;;AAIA;IACI,8BAA8B;IAC9B,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;IACI,QAAQ;IACR,UAAU;;AAEd;;;;;AAKA;;IAEI,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;AAC7B;;;AAGA;;KAEK,6BAA6B;KAC7B,UAAU;CACd;;AAED;IACI,+FAA+F;AACnG;;;;AAIA;;IAEI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;;AAEd;;;AAGA;IACI,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;;;AAGvB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,QAAQ;IACR,eAAe;IACf,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,6BAA6B;AACjC;;;;AAIA;IACI,iCAAiC;IACjC,QAAQ;IACR,cAAc;IACd,WAAW;IACX,WAAW;AACf;;;AAGA;IACI,UAAU;IACV,WAAW;IACX,SAAS;IACT,eAAe;IACf,yDAAkD;IAClD,2BAA2B;IAC3B,qBAAqB;;;AAGzB;;AAEA;IACI,2BAA2B;IAC3B,WAAW;IACX,iCAAiC;IACjC,WAAW;IACX,iBAAiB;;;AAGrB;;;AAGA;IACI,eAAe;;IAEf,eAAe;AACnB;;;;AAIA;IACI,qCAAqC;IACrC,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;;IAEI,WAAW;;IAEX,YAAY;;;AAGhB;;AAEA;;IAEI,WAAW;IACX,UAAU;IACV,oBAAoB;;AAExB;;AAEA;IACI,gBAAgB;;;AAGpB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,QAAQ;IACR,eAAe;;;AAGnB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,SAAS;IACT,eAAe;IACf,kBAAkB;IAClB,UAAU;;;;IAIV,sBAAsB;IACtB,YAAY;;;;;AAKhB;;;AAGA;IACI,eAAe;AACnB;;;AAGA;;IAEI;QACI,WAAW;IACf;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,UAAU;IACd;;IAEA;;QAEI,YAAY;QACZ,eAAe;IACnB;;;;IAIA;QACI,WAAW;IACf;;IAEA;QACI;IACJ;;IAEA;;QAEI,UAAU;;;IAGd;;IAEA;QACI,aAAa;;IAEjB;;;IAGA;QACI,qBAAqB;QACrB,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;QAClB,WAAW;IACf;;IAEA;;QAEI,WAAW;;IAEf;IACA;QACI,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,WAAW;QACX,mBAAmB;QACnB,WAAW;IACf;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,UAAU;IACd;IACA;QACI,SAAS;QACT;;IAEJ;;IAEA;QACI,uBAAuB;IAC3B;;IAEA;QACI,kBAAkB;;IAEtB;;IAEA;;QAEI,iBAAiB;QACjB,gBAAgB;QAChB,cAAc;;IAElB;;IAEA;QACI,UAAU;QACV,WAAW;QACX,mBAAmB;IACvB;;IAEA;QACI,UAAU;QACV,cAAc;QACd,WAAW;IACf;;;;IAIA;QACI,qBAAqB;IACzB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,uBAAuB;;IAE3B;;IAEA;QACI,sBAAsB;;IAE1B;;IAEA;QACI,uBAAuB;IAC3B;;;;;IAKA;;QAEI,WAAW;QACX,iBAAiB;QACjB,UAAU;QACV,cAAc;IAClB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,UAAU;;IAEd;;IAEA;QACI,mBAAmB;IACvB;;;;AAIJ;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n  }\n\n\n\n\n\n  .pageContent {\n    display:flex;\n    flex-basis: auto;\n    overflow-y: hidden;\n    height:100%;\n    overflow-x: auto;\n}\n\n\n\n\n\n.addBoard {\n    width: 250px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    background:rgb(198, 198, 198);\n    margin:10px;\n    padding-bottom:10px;\n    \n  \n}\n\n\n\n\n\ninput {\n    outline: none;\n}\n\n\n.boardContent {\n\n    font-family: 'Roboto', sans-serif;\n    overflow-y: auto;\n    overflow-x: hidden;\n    flex-shrink: 0;\n}\n\n.board {\n    position: relative;\n    text-align:center;\n    background:rgb(198, 198, 198);\n    width: 290px;\n    margin:10px;\n\n\n    \n    padding-bottom:5px;\n}\n\n.boardOverlay {\n    background:rgba(0, 0, 0, 0.299);\n    position:absolute;\n    width:100%;\n    height:100%;\n    top:0;\n    z-index:1;\n    display:none;\n}\n\n.deleteBoard, .editBoard {\n    cursor: pointer;\n}\n\n\n.taskHolder {\n\n    display:flex;\n    align-items:center;\n}\n\n.taskTextBox {\n    width:135px;\n}\n.exampleBoardText {\n    position:relative;\n    top:4px;\n    font-size: large\n}\n\n\n.addBoardText {\n    margin-top:5px;\n    font-size: large;\n\n\n}\n\n\n\n.task, .notTask{\n    background:rgb(237, 230, 230);\n    border-left: 8px solid;\n    margin:10px;\n}\n\n.taskTools {\n    display:flex;\n    justify-content:space-between;\n    padding-left:10px;\n    padding-right:10px;\n    margin-top:10px;\n\n}\n.tools {\n    display:flex;\n}\n\n\n.taskLabel {\n    position: relative;\n    top:5px;\n    word-wrap: break-word;\n    margin-bottom:10px;\n    font-size: smaller;\n\n    border: 0;\n\n}\n.generalText {\n    font-size:10px;\n    margin-right: 20px;\n    word-wrap: break-word;\n\n}\n\n.generalTextHolder {\n    display:flex;\n}\n\n\n\n\n.circleIcon {\n    width:10px;\n    height:10px;\n    border-radius:20px;\n    border: 3px solid black;\n    cursor:pointer;\n}\n.edit, .notEdit{\n    width:20px;\n    cursor:pointer;\n    margin-right:6px;\n}\n\n.circleIcon:hover {\n    background:black;\n}\n\n\n\n.taskAdder {\n    margin-top:10px;\n}\n\n\n.taskAdder:hover {\n   cursor:pointer;\n   background:rgb(178, 178, 178);\n}\n\n\n\n\n\n\n\n\n.priority {\n    display:flex;\n    margin:5px;\n\n}\n.editTools {\n    display:flex;\n    width:50px;\n\n}\n.dateTool {\n    margin:5px;\n    margin-right:14px;\n    display:flex;\n}\n.taskTextBox {\n    height:20px;\n    font-family: 'Roboto', sans-serif;\n    margin:5px;\n}\n\n.editToolHolder {\n\n    display:flex;\n    justify-content:space-between;\n    \n}\n\n.buttons {\n    margin-left: 5px;\n}\n\n.datePicker {\n    margin-left:5px;\n    width:135px;\n    height:20px;\n    border:0;\n}\n\n\n\n.taskEditor {\n    background: rgb(237, 230, 230);\n    margin:10px;\n    margin-left:20px;\n    display:flex;\n    align-items: center;\n    border-left: 8px solid;\n    flex-direction: column;\n}\n\n.error {\n    color:rgb(197, 63, 63);\n}\n\n\n.taskTextBox{\n    border:0;\n    margin:5px;\n\n}\n\n\n\n\n.buttons .button {\n\n    cursor: pointer;\n}\n\n.high {\n    border:5px solid red;\n}\n\n.medium {\n    border: 5px solid #ff9800;\n}\n\n\n.notTask {\n    \n     text-decoration: line-through; \n     color:grey; \n } \n\n.notEdit {\n    filter: invert(20%) sepia(10%) saturate(2076%) hue-rotate(86deg) brightness(118%) contrast(10%);\n}\n\n\n\n.low {\n\n    border:5px solid green;\n}\n\n.low:hover {\n    background:green;\n}\n\n.high:hover {\n    background:red;\n}\n\n.medium:hover {\n    background: #ff9800;\n}\n\n.button {\n    color:black;\n    height:15px;\n    width:35px;\n    line-height: 15px;\n    font-size: x-small;\n    margin:2px; \n\n}\n\n\n.buttons {\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n\n}\n\n.trashIt, .finished, .exitEditor{\n    cursor: pointer;\n}\n\n\n.projectTypeText {\n    position:relative;\n    bottom:2px;\n}\n\n.addBoarderButton {\n    background:0;\n    width:100%;\n    border:0;\n    margin-top: 5px;\n    height:20px;\n    cursor:pointer;\n}\n\n.addBoarderButton:hover {\n    background:rgb(178, 178, 178);\n}\n\n\n\n.addBoarderTextBox {\n    font-family: 'Roboto', sans-serif;\n    border:0;\n    margin-top:5px;\n    height:20px;\n    width:220px;\n}\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(../images/hamburgerMenu.svg);\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n.editBoard, .deleteBoard {\n    width:20px;\n}\n\n.editExampleIcons {\n\n    height:25px;\n    \n    display:flex;\n\n\n}\n\n.emptyrow {\n   \n    height:25px;\n    width:100%;\n    text-indent: -9999px;\n    \n}\n\n.editBoard, .deleteBoard {\n    margin-left:10px;\n\n\n}\n\n.boardtextBox {\n    font-family: 'Roboto', sans-serif;\n    text-align: center;\n    font-size: large;\n    width:100%;\n    height:20px;\n    border:0;\n    background:none;\n    \n \n}\n\n.boardTextEditor {\n    background:rgb(215, 213, 213);\n    position:relative;\n    z-index:1;\n    margin-top:10px;\n    margin-bottom:10px;\n    width:100%;\n\n\n\n    justify-content:center;\n    display:flex;\n\n\n \n\n}\n\n\n.changeBoardTitleButton {\n    cursor: pointer;\n}\n\n\n@media only screen and (max-width: 300px){\n\n    .editExampleIcons {\n        height:15px;\n    }\n\n    .emptyrow {\n        height:15px;\n    }\n\n    .deleteBoard, .editBoard {\n        width:12px;\n    }\n\n    .addBoarderButton {\n    \n        height: 10px;\n        font-size: 12px;\n    }\n\n\n\n    .board{\n        width:185px;\n    }\n\n    .taskLabel {\n        font-size:xx-small\n    }\n\n    .edit, .notEdit {\n\n        width:10px;\n        \n\n    }\n\n    .generalText {\n        font-size:6px;\n        \n    }\n\n    \n    .exampleBoardText {\n        word-wrap: break-word;\n        font-size: x-small;\n    }\n\n    .boardtextBox {\n        font-size: x-small;\n        height:12px;\n    }\n\n    .addBoard {\n    \n        width:185px;\n      \n    }\n    .changeBoardTitleButton {\n        font-size: x-small;\n    }\n\n    .addBoardText {\n        font-size:x-small;\n    }\n\n    .addBoarderTextBox {\n        height:12px;\n        font-size: xx-small;\n        width:160px;\n    }\n    \n    .addBoarderButton {\n        font-size: x-small;\n    }\n\n    .task, .notTask {\n        margin:5px; \n    }\n    .circleIcon {\n        width:5px;\n        height:5px\n\n    }\n\n    .circleIcon {\n        border: 2px solid black;\n    }\n\n    .taskHolderText, .dateText, .buttonText {\n        font-size:xx-small;\n        \n    }\n\n    .taskTools {\n        \n        padding-right:5px;\n        padding-left:5px;\n        margin-top:5px;\n\n    }\n\n    .taskTextBox {\n        width:80px;\n        height:12px;\n        font-size: xx-small;\n    }\n\n    .datePicker {\n        width:80px;\n        font-size: 6px;\n        height:12px;\n    }\n\n\n    \n    .high {\n        border: 3px solid red;\n    }\n\n    .medium {\n        border: 3px solid #ff9800;\n    }\n\n    .low {\n        border: 3px solid green;\n   \n    }\n\n    .task, .notTask {\n        border-left: 4px solid;\n       \n    }\n\n    .taskEditor {\n        border-left:  4px solid;\n    }\n\n\n\n\n    .button {\n\n        height:10px;\n        line-height: 10px;\n        width:20px;\n        font-size: 6px;\n    }\n\n    .editTools {\n        margin-left: 30px;\n    }\n\n    .trashIt, .finished, .exitEditor {\n        width:15px;\n\n    }\n\n    .taskAdder {\n        font-size: xx-small;\n    }\n\n\n\n}\n\n.task, .notTask {\n    border-color: red;\n}\n"],"sourceRoot":""}]);
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
/******/ 			"mobile": 0
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
/*!*******************************!*\
  !*** ./src/scripts/mobile.js ***!
  \*******************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFdBQVcsU0FBUyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxTQUFTLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxlQUFlLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGVBQWUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsY0FBYyxRQUFRLEtBQUssV0FBVyxVQUFVLFNBQVMsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLFlBQVksZUFBZSxRQUFRLEtBQUssVUFBVSxRQUFRLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUs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YUFBYSxhQUFhLHlCQUF5QixVQUFVLGlCQUFpQixRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsYUFBYSxZQUFZLGVBQWUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxRQUFRLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxRQUFRLEtBQUssVUFBVSxhQUFhLFNBQVMsS0FBSyxXQUFXLFVBQVUsTUFBTSxVQUFVLFVBQVUsV0FBVyxZQUFZLGdCQUFnQixRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxlQUFlLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLFVBQVUsT0FBTyxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxNQUFNLFFBQVEsS0FBSyxXQUFXLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxlQUFlLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLGNBQWMsUUFBUSxLQUFLLFdBQVcsVUFBVSxTQUFTLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFh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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFHLEdBQUd5RiwrQ0FBTjtBQUVBN1QsSUFBQUEsOERBQVcsQ0FBQ29iLEtBQUQsRUFBUWMsVUFBUixFQUFvQixRQUFwQixDQUFYO0FBQ0FBLElBQUFBLFVBQVUsQ0FBQ2QsS0FBRCxDQUFWO0FBQ0QsR0FORDs7QUFRQSxTQUFPO0FBQUVpQixJQUFBQSxrQkFBa0IsRUFBbEJBO0FBQUYsR0FBUDtBQUNELENBdEtEOztBQXdLQSxJQUFJQyxNQUFNLEdBQUd0QixNQUFNLEVBQW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9jb250ZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvY29udGVudEVmZmVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9lbGVtZW50RXZlbnRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvbmF2LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvcGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3NlbmQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy90aW1lcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3VpRWZmZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvYm9hcmQuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9uYXZpZ2F0aW9uLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2JvYXJkLmNzcz9hNjFlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9uYXZpZ2F0aW9uLmNzcz84MjAyIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvbW9iaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0VXBkYXRlZEVsZW1lbnRzfSBmcm9tIFwiLi9wYWdlTGF5b3V0LmpzXCJcblxuY29uc3QgYXNzaWduVG9vbHMgPSAoZWxlbWVudHMsaW5kZXgsYm9hcmRJbmRleCkgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInRvb2xzXCIpe1xuICAgICAgICAgICAgbGV0IHRvb2xzQ2hpbGRyZW4gPSBBcnJheS5mcm9tKGNoaWxkRWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgICAgICB0b29sc0NoaWxkcmVuLmZvckVhY2godG9vbEVsZW1lbnQgPT4gXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvb2xFbGVtZW50LnRhc2tJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHRvb2xFbGVtZW50LmJvYXJkSW5kZXggPSBib2FyZEluZGV4O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG5cblxufVxuXG5jb25zdCBhc3NpZ25UYXNrSW5kZXggPSAoZWxlbWVudCxib2FyZEluZGV4KSA9PiB7XG4gICAgbGV0IHRhc2tJbmRleCA9MDtcbiAgICBlbGVtZW50LmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInRhc2tcIiB8fFxuICAgICAgICAgICAgY2hpbGRFbGVtZW50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwibm90VGFza1wiXG4gICAgICAgICl7XG4gICAgICAgICAgICBsZXQgdGFza0NoaWxkcmVuID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgdGFza0NoaWxkcmVuLmZvckVhY2godGFza0NoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFza0NoaWxkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwidGFza1Rvb2xzXCIpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza1Rvb2xzQ2hpbGRyZW4gPSBBcnJheS5mcm9tKHRhc2tDaGlsZC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnblRvb2xzKHRhc2tUb29sc0NoaWxkcmVuLHRhc2tJbmRleCxib2FyZEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGFza0luZGV4KytcbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICBcblxuXG5cbn1cblxuXG5jb25zdCBhc3NpZ25Cb2FyZEljb25zID0gKGVsZW1lbnQsIGN1cnJlbnRJbmRleCkgPT4gIHtcbiAgICBsZXQgYm9hcmQgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGJvYXJkLmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImVkaXRFeGFtcGxlSWNvbnNcIil7XG4gICAgICAgICAgICBjaGlsZEVsZW1lbnQuYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGxldCBlZGl0RXhhbXBsZUljb25zID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgZWRpdEV4YW1wbGVJY29ucy5mb3JFYWNoKGl0ZW1FbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtRWxlbWVudC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInRhc2tBZGRlclwiKXtcbiAgICAgICAgICAgIGxldCB0YXNrUGFyYWdyYXBoID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pWzBdO1xuICAgICAgICAgICAgdGFza1BhcmFncmFwaC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkRWxlbWVudC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgIH0pXG59XG5cblxuY29uc3QgYXNzaWduQm9hcmRFbGVtZW50cyA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICBsZXQgcGFnZUNvbnRlbnRDaGlsZHJlbiA9IGVsZW1lbnRzLnBhZ2VDb250ZW50Q2hpbGRyZW47XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBwYWdlQ29udGVudENoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYm9hcmRDb250ZW50XCIpe1xuICAgICAgICAgICAgZWxlbWVudC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgbGV0IGJvYXJkQ29udGVudCA9IEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgICAgICBib2FyZENvbnRlbnQuZm9yRWFjaChjaGlsZEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJib2FyZFwiKSBhc3NpZ25Cb2FyZEljb25zKGNoaWxkRWxlbWVudCxjdXJyZW50SW5kZXgpXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRJbmRleCArKztcbiAgICB9KVxufVxuXG5leHBvcnQge2Fzc2lnblRvb2xzLCBhc3NpZ25UYXNrSW5kZXgsIGFzc2lnbkJvYXJkRWxlbWVudHN9OyIsIlxuaW1wb3J0IHtyZW1vdmVJdGVtLCBhZGRCaW5kaW5ncywgcmVtb3ZlQmluZGluZ3MsIHNldEFycmF5LCBzZXRPYmplY3R9IGZyb20gXCIuL2VsZW1lbnRFdmVudHMuanNcIlxuaW1wb3J0IHtzZW5kfSBmcm9tIFwiLi9zZW5kLmpzXCJcbmltcG9ydCB7IGdldEluaXRpYWxFbGVtZW50cywgZ2V0VXBkYXRlZEVsZW1lbnRzIH0gZnJvbSBcIi4vcGFnZUxheW91dC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVCb2FyZCwgY3JlYXRlQWRkQm9hcmQsIGNyZWF0ZUJvYXJkRWRpdG9yLCBjcmVhdGVMaXN0RWRpdG9yLCBjcmVhdGVVcENvbWluZ0JvYXJkLCBjcmVhdGVUYXNrQXJyYW5nZW1lbnR9IGZyb20gXCIuL3RlbXBsYXRlLmpzXCI7XG5pbXBvcnQge2FwcGx5VGFza0NoYW5nZXMsIHJlbW92ZU5hdkVtcHRpZXMsIGFkZEJvYXJkVGFza3MgfSBmcm9tIFwiLi9jb250ZW50RWZmZWN0cy5qc1wiO1xuXG5cbmltcG9ydCB7cmVtb3ZlQm9hcmRPdmVybGF5LCBhZGRCb2FyZE92ZXJsYXksIHNoYWRlQnV0dG9uQ29sb3IsIHNldFRhc2tEYXRlfSBmcm9tIFwiLi91aUVmZmVjdHMuanNcIjtcbmltcG9ydCB7ZmluZEJvYXJkVGV4dEJveCwgZ2V0RWxlbWVudEJ5Qm9hcmRJbmRleCwgZ2V0T2JqZWN0VmFsdWUsIGNoYW5nZVZhbHVlVG9EYXRlLGNyZWF0ZVRhc2tUZW1wbGF0ZSwgZ2V0VXBDb21pbmdUYXNrc30gZnJvbSBcIi4vdXRpbGl0aWVzLmpzXCI7XG5pbXBvcnQge3JlbmRlclRpbWVUYXNrc30gZnJvbSBcIi4vdGltZXMuanNcIjtcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknXG5pbXBvcnQgaXNUaGlzV2VlayBmcm9tICdkYXRlLWZucy9pc1RoaXNXZWVrJ1xuXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHtjaGVja1NwYWNlc30gZnJvbSBcIi4vdXRpbGl0aWVzLmpzXCI7XG5cblxuXG5cblxuXG5pbXBvcnQge2Fzc2lnblRhc2tJbmRleCwgYXNzaWduQm9hcmRFbGVtZW50c30gZnJvbSBcIi4vYXNzaWduLmpzXCI7XG5cblxuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuXG4gICAgbGV0IHN0YXRpY0xpc3RUYXNrcyA9IFtdO1xuICAgIGxldCBjaGFuZ2VkTGlzdFRhc2tzID0gW107IFxuXG5cbiAgICBsZXQgdGFza0NoYW5nZXMgPSBbXTtcblxuICAgIGxldCB1cGNvbWluZ1Rhc2tzID0gW11cblxuICAgIGxldCBkZWxldGVkVXBDb21pbmdJdGVtcyA9IFtdO1xuXG4gICAgbGV0IGluZGV4O1xuICAgIGxldCBjdXJyZW50SW5kZXg7XG4gICAgbGV0IGlzVXBDb21pbmcgPSBmYWxzZTtcblxuICAgIGxldCBjYW5EaXNydXB0ID0gZmFsc2VcbiAgICBsZXQgbmFtZTtcbiAgICBsZXQgZG9tID0gZ2V0SW5pdGlhbEVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCByZW1vdmVDb250ZW50QmluZGluZ3MgPSAoYm9vbCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgcmVtb3ZlQmluZGluZ3MoZWxlbWVudHMuYm9hcmRlckJ1dHRvbiwgYWRkQm9hcmRUYXNrc0NsaWNrLFwiY2xpY2tcIik7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmRlbGV0ZUJvYXJkLGRlbGV0ZUJvYXJkLCBcImNsaWNrXCIpO1xuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5lZGl0Qm9hcmQsZWRpdEJvYXJkLFwiY2xpY2tcIik7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLnRhc2tBZGRlcnMsIGFkZExpc3RFZGl0b3JDbGljaywgXCJjbGlja1wiKVxuXG4gICAgfVxuXG4gICAgIGNvbnN0IGFkZENvbnRlbnRCaW5kaW5ncyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG5cbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMuYm9hcmRlckJ1dHRvbiwgYWRkQm9hcmRUYXNrc0NsaWNrLFwiY2xpY2tcIik7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmRlbGV0ZUJvYXJkLGRlbGV0ZUJvYXJkLCBcImNsaWNrXCIpO1xuICAgICAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5lZGl0Qm9hcmQsZWRpdEJvYXJkLFwiY2xpY2tcIik7XG5cbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMudGFza0FkZGVycywgYWRkTGlzdEVkaXRvckNsaWNrLCBcImNsaWNrXCIpO1xuXG5cbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBjb25zdCBhZGRMaXN0QmluZGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgICAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5idXR0b24sIHNoYWRlQnV0dG9uQ29sb3JDbGljaywgXCJjbGlja1wiKVxuICAgICAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy50cmFzaEl0LGRlbGV0ZVRhc2ssIFwiY2xpY2tcIik7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmZpbmlzaGVkLGFkZFRhc2tDbGljaywgXCJjbGlja1wiKTtcbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMuZWRpdCwgZWRpdFRhc2ssIFwiY2xpY2tcIik7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmNpcmNsZUljb24sIGNyb3NzT3V0VGFzaywgXCJjbGlja1wiKTtcbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMuZXhpdEVkaXRvciwgZXhpdExpc3RFZGl0b3IsIFwiY2xpY2tcIik7XG5cbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrQmluZGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIGFkZExpc3RCaW5kaW5ncygpO1xuICAgICAgICBhZGRDb250ZW50QmluZGluZ3MoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVtb3ZlVGFza0JpbmRpbmdzID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVMaXN0QmluZGluZ3MoKTtcbiAgICAgICAgcmVtb3ZlQ29udGVudEJpbmRpbmdzKCk7XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGFkZENoYW5nZU5hbWVCaW5kaW5nID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMuY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbnMsIGNoYW5nZU5hbWUsIFwiY2xpY2tcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlTGlzdEJpbmRpbmdzID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgXG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmNoYW5nZUJvYXJkVGl0bGVCdXR0b25zLGNoYW5nZU5hbWUsIFwiY2xpY2tcIik7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmJ1dHRvbiwgc2hhZGVCdXR0b25Db2xvckNsaWNrLCBcImNsaWNrXCIpXG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLnRyYXNoSXQsZGVsZXRlVGFzaywgXCJjbGlja1wiKTtcblxuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5maW5pc2hlZCxhZGRUYXNrQ2xpY2ssIFwiY2xpY2tcIik7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmVkaXQsIGVkaXRUYXNrLCBcImNsaWNrXCIpO1xuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5jaXJjbGVJY29uLCBjcm9zc091dFRhc2ssIFwiY2xpY2tcIik7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmV4aXRFZGl0b3IsIGV4aXRMaXN0RWRpdG9yLCBcImNsaWNrXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyb3NzT3V0RHVwbGljYXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIGJvYXJkLnRhc2tzLmZvckVhY2goY2hpbGRUYXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRUYXNrLm5hdkluZGV4ID09IHRhc2submF2SW5kZXggJiZcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUYXNrLm5hdkluZGV4ICE9IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNoaWxkVGFzay5ib2FyZEluZGV4ID09IHRhc2suYm9hcmRJbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRUYXNrLnRhc2tJbmRleCA9PSB0YXNrLnRhc2tJbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFRhc2suY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUNyb3NzT3V0RWRpdG9yKGNoaWxkVGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkVGFzay5uYXZJbmRleCA9PSBcInVwY29taW5nXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5uYXZJbmRleCA9PSBcInVwY29taW5nXCJcbiAgICAgICAgICAgICAgICApe1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRUYXNrLnRhc2tJbmRleCA9PSB0YXNrLnRhc2tJbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFRhc2suY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUNyb3NzT3V0RWRpdG9yKGNoaWxkVGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBjaGVja0Nyb3NzT3V0RWRpdG9yID0gKG5ld1Rhc2spID0+IHtcbiAgICAgICAgbGV0IGJvYXJkQ291bnRlciA9IDA7XG4gICAgICAgIGxldCBjYW5FZGl0ID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IG5ld1Rhc2sudGFza0luZGV4O1xuICAgICAgICBsZXQgYm9hcmRJbmRleCA9IG5ld1Rhc2suYm9hcmRJbmRleDtcbiAgICAgICAgbGV0IG5hdkluZGV4ID0gbmV3VGFzay5uYXZJbmRleDtcblxuXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrQ291bnRlciA9IDA7XG4gICAgICAgICAgICBib2FyZC5jaGFuZ2VkQm9hcmRMaXN0cy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRhc2sudGFza0luZGV4ID09IHRhc2tJbmRleCAmJlxuICAgICAgICAgICAgICAgICAgICB0YXNrLmJvYXJkSW5kZXggPT0gYm9hcmRJbmRleCAmJiB0YXNrLm5hdkluZGV4ID09IG5hdkluZGV4XG4gICAgICAgICAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0luZGV4ID0gIHRhc2tDb3VudGVyICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib2FyZEluZGV4ID0gYm9hcmRDb3VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tJbmRleCA8PSBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMubGVuZ3RoIC0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRvciA9IHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0c1t0YXNrSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlZGl0b3IubGlzdEVkaXRvcikgY2FuRWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YXNrQ291bnRlciArKztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBib2FyZENvdW50ZXIgKys7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjYW5FZGl0O1xuICAgIH1cblxuXG5cbiAgICBjb25zdCByZW1vdmVDcm9zc091dEVkaXRvciA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCBpbmRleGVzID0gZ2V0SW5kZXhlcygpXG4gICAgICAgIGlmIChpbmRleGVzKXtcbiAgICAgICAgICAgIGlmIChjaGVja0Nyb3NzT3V0RWRpdG9yKHRhc2spKXtcbiAgICAgICAgICAgICAgICByZW1vdmVMaXN0RWRpdG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGFkZExpc3RFZGl0b3JUb0Nyb3NzT3V0VGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICBsZXQgY3VycmVudE5hbWUgPSBzZW5kLnJldHJpZXZlVGl0bGUoaW5kZXgpO1xuICAgICAgICAgICAgbmFtZSA9IGN1cnJlbnROYW1lOyAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBzZW5kLnNlbmREYXRhKHN0YXRpY0xpc3RUYXNrcyxpbmRleCxuYW1lKTsgIFxuICAgICAgICAgICAgc3RvcmFnZS5zdG9yZURhdGEoKTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gXCJ1cGNvbWluZ1wiKXtcbiAgICAgICAgICAgIHNlbmRVcENvbWluZ0NoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJCb2FyZExpc3RzKCk7XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGNyb3NzT3V0VGFzaz0gKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IGV2ZW50LnRhcmdldC50YXNrSW5kZXg7XG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gZXZlbnQudGFyZ2V0LmJvYXJkSW5kZXg7XG5cbiAgICAgICAgbGV0IHRhc2sgPSBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3NbdGFza0luZGV4XTtcbiAgICAgICAgdGFzay5jaGVja2VkID8gdGFzay5jaGVja2VkID0gZmFsc2U6IHRhc2suY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGxldCBpbmRleGVzID0gZ2V0SW5kZXhlcygpO1xuXG4gICAgICAgaWYgKGlzVXBDb21pbmcpIGNyb3NzT3V0RHVwbGljYXRlVGFzayh0YXNrKTtcbiAgICAgICBlbHNlIHtcbiAgICAgICAgICAgaWYodHlwZW9mIGluZGV4ZXMgIT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgICBsZXQgYm9hcmRJbmRleDIgPSBpbmRleGVzLmJvYXJkSW5kZXg7XG4gICAgICAgICAgICBsZXQgbGlzdEluZGV4ID0gaW5kZXhlcy5saXN0SW5kZXg7XG4gICAgICAgICAgICBpZiAoYm9hcmRJbmRleDIgPT0gYm9hcmRJbmRleCAmJiBsaXN0SW5kZXggPT0gdGFza0luZGV4KXtcbiAgICAgICAgICAgICAgICByZW1vdmVMaXN0RWRpdG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIH1cblxuICAgICAgIH1cblxuICAgICAgIGFkZExpc3RFZGl0b3JUb0Nyb3NzT3V0VGFza3MoKTtcbiAgICB9XG5cblxuXG5cbiAgICAgXG4gICAgXG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gICgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ZXMgPSBnZXRJbmRleGVzKCk7XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSBpbmRleGVzLmxpc3RJbmRleDtcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSBpbmRleGVzLmJvYXJkSW5kZXg7XG4gICAgICAgIGxldCBuZXdTdGF0aWNMaXN0VGFza3MgPSBzZXRPYmplY3Qoc3RhdGljTGlzdFRhc2tzKTtcbiAgICAgICAgbGV0IGRlbGV0ZWRUYXNrO1xuICAgICAgICBsZXQgY3VycmVudFRhc2sgPSBuZXdTdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3NbdGFza0luZGV4XTtcblxuICAgICAgICBjdXJyZW50VGFzay5saXN0VGFzayA9IGZhbHNlO1xuICAgICAgICBkZWxldGVkVGFzayA9IGN1cnJlbnRUYXNrO1xuXG4gICAgICAgIGxldCBuZXdBcnJheSA9IG5ld1N0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS50YXNrcztcbiAgICAgICAgbGV0IG5ld2VyQXJyYXkgPSBuZXdBcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLmxpc3RUYXNrKVxuXG4gICAgICAgIGRlbGV0ZWRVcENvbWluZ0l0ZW1zLnB1c2goZGVsZXRlZFRhc2spXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS50YXNrcyA9IG5ld2VyQXJyYXlcblxuICAgICAgICBsZXQgbmV3VGFza3MgPSAgIHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS50YXNrc1xuICAgICAgICBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMgPSBuZXdUYXNrc1xuXG4gICAgICAgIHJlbW92ZUxpc3RFZGl0b3IoKTtcbiAgICAgICAgaWYoaXNVcENvbWluZykgcmVtb3ZlVXBDb21pbmdUYXNrcyhkZWxldGVkVGFzaylcbiAgICAgICAgYWN0aXZhdGVDb250ZW50TWVudSgpO1xuICAgIH1cblxuXG4gICAgY29uc3QgcmVtb3ZlVXBDb21pbmdUYXNrcyA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCBuZXdTdGF0aWNMaXN0VGFza3MgPSBzZXRPYmplY3Qoc3RhdGljTGlzdFRhc2tzLHRydWUpO1xuXG5cbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSAwO1xuICAgICAgICBsZXQgbmV3VGFza3M7XG5cbiAgICAgICAgbmV3U3RhdGljTGlzdFRhc2tzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgbmV3VGFza3MgPSBib2FyZC50YXNrcy5maWx0ZXIoY2hpbGRUYXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRUYXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIiAmJiB0YXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRUYXNrLnRhc2tJbmRleCA9PSB0YXNrLnRhc2tJbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSAgaWYgKGNoaWxkVGFzay5uYXZJbmRleCAgPT0gIHRhc2submF2SW5kZXggKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZFRhc2suYm9hcmRJbmRleCA9PSB0YXNrLmJvYXJkSW5kZXggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVGFzay50YXNrSW5kZXggPT0gdGFzay50YXNrSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3MgPSBuZXdUYXNrc1xuICAgICAgICAgICAgc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzID0gbmV3VGFza3M7XG4gICAgICAgICAgICBib2FyZEluZGV4Kys7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBjb25zdCBlZGl0VGFzayA9IChldmVudCkgPT4ge1xuICAgICAgICBsZXQgYm9hcmRJbmRleCA9IGV2ZW50LnRhcmdldC5ib2FyZEluZGV4O1xuICAgICAgICBsZXQgdGFza0luZGV4ID0gZXZlbnQudGFyZ2V0LnRhc2tJbmRleDtcbiAgICAgICAgbGV0IHRhc2sgPSBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3NbdGFza0luZGV4XTtcbiAgICAgICAgbGV0IHRleHQgPSB0YXNrLnRleHQ7XG4gICAgICAgIGxldCBkYXRlID0gdGFzay5kYXRlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSB0YXNrLnByaW9yaXR5XG4gICAgICAgIGFkZExpc3RFZGl0b3IoYm9hcmRJbmRleCwgdGFza0luZGV4LCB0ZXh0LCBkYXRlLHByaW9yaXR5KSBcbiAgICB9XG5cbiAgICBjb25zdCBleGl0TGlzdEVkaXRvciA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlTGlzdEVkaXRvcigpO1xuICAgICAgICByZW5kZXJCb2FyZExpc3RzKCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCByZW1vdmVMaXN0RWRpdG9yID0gKCkgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdUYXNrcyA9IHRhc2suY2hhbmdlZEJvYXJkTGlzdHM7XG4gICAgICAgICAgICBuZXdUYXNrcyA9IG5ld1Rhc2tzLmZpbHRlcih0YXNrID0+IHRhc2subGlzdEVkaXRvciAhPSB0cnVlICk7XG4gICAgICAgICAgICB0YXNrLmNoYW5nZWRCb2FyZExpc3RzID0gbmV3VGFza3M7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBjb25zdCBmaW5kTGlzdEVkaXRvckJvYXJkSW5kZXggPSAoKSA9PiB7XG4gICAgICAgIGxldCBuZXdUYXNrcyA9IHN0YXRpY0xpc3RUYXNrcztcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSAwO1xuICAgICAgICBsZXQgc3RvcExvb3AgPSBmYWxzZTtcblxuICAgICAgICBuZXdUYXNrcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIGJvYXJkLmNoYW5nZWRCb2FyZExpc3RzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2subGlzdEVkaXRvciA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgc3RvcExvb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKHN0b3BMb29wKSByZXR1cm47XG4gICAgICAgICAgICBib2FyZEluZGV4ICsrO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBib2FyZEluZGV4O1xuICAgIH1cblxuICAgIGNvbnN0IGdldEluZGV4ZXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBicmVha0xvb3AgPSBmYWxzZTtcbiAgICAgICAgbGV0IGluZGV4ZXM7XG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGxpc3RJbmRleDtcblxuXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgdGFzay5jaGFuZ2VkQm9hcmRMaXN0cy5mb3JFYWNoKGxpc3RUYXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdFRhc2subGlzdEVkaXRvcil7IFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RUYXNrLmluZGV4ICE9IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEluZGV4ID0gbGlzdFRhc2suaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzICA9IHtib2FyZEluZGV4LCBsaXN0SW5kZXh9O1xuICAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGluZGV4ZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGJyZWFrTG9vcCkgcmV0dXJuO1xuICAgICAgICAgICAgYm9hcmRJbmRleCArKztcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0NsaWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgaW5kZXhlcyA9IGdldEluZGV4ZXMoKTtcblxuICAgICAgICBpZiAoaW5kZXhlcyAhPT0gZmFsc2Upe1xuICAgICAgICAgICAgYWRkVGFzayhpbmRleGVzLmxpc3RJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRUYXNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VEdXBsaWNhdGVUYXNrcyA9IChuYXZJbmRleCxib2FyZEluZGV4LHRhc2tJbmRleCwgbmV3VGFzaykgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEJvYXJkSW5kZXggPTA7XG5cbiAgICAgICAgc3RhdGljTGlzdFRhc2tzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXNrSW5kZXggPSAwXG4gICAgICAgICAgICBib2FyZC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLm5hdkluZGV4ID09IG5hdkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmJvYXJkSW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suYm9hcmRJbmRleCA9PSBib2FyZEluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50YXNrSW5kZXggPT0gdGFza0luZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0xpc3RUYXNrc1tjdXJyZW50Qm9hcmRJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0gPSBuZXdUYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tzID0gc3RhdGljTGlzdFRhc2tzW2N1cnJlbnRCb2FyZEluZGV4XS50YXNrcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0xpc3RUYXNrc1tjdXJyZW50Qm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMgPSB0YXNrcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudGFza0luZGV4ID09IHRhc2tJbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0xpc3RUYXNrc1tjdXJyZW50Qm9hcmRJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0gPSBuZXdUYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza3MgPSBzdGF0aWNMaXN0VGFza3NbY3VycmVudEJvYXJkSW5kZXhdLnRhc2tzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNMaXN0VGFza3NbY3VycmVudEJvYXJkSW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzID0gdGFza3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrSW5kZXggKytcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjdXJyZW50Qm9hcmRJbmRleCArKztcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGNvbnN0IGNoYW5nZVRhc2sgPSAoYm9hcmRJbmRleCwgdGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGlzVXBDb21pbmcpe1xuICAgICAgICAgICAgbGV0IG9sZFRhc2sgPSAgIHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS50YXNrc1tpbmRleF07XG5cbiAgICAgICAgICAgIHRhc2submF2TmFtZSA9IG9sZFRhc2submF2TmFtZTtcbiAgICAgICAgICAgIHRhc2sudGFza0luZGV4ID0gb2xkVGFzay50YXNrSW5kZXg7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9sZFRhc2suYm9hcmRJbmRleCAhPSBcInVuZGVmaW5lZFwiKSB0YXNrLmJvYXJkSW5kZXggPSBvbGRUYXNrLmJvYXJkSW5kZXg7XG4gICAgICAgICAgICB0YXNrLm5hdkluZGV4ID0gb2xkVGFzay5uYXZJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS50YXNrc1tpbmRleF0gPSB0YXNrO1xuICAgICAgICBsZXQgdGFza3MgPSBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3M7XG4gICAgICAgIHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyA9IHRhc2tzO1xuXG5cblxuICAgICAgICBpZiAoaXNVcENvbWluZykgY2hhbmdlRHVwbGljYXRlVGFza3ModGFzay5uYXZJbmRleCx0YXNrLmJvYXJkSW5kZXgsdGFzay50YXNrSW5kZXgsdGFzayk7XG5cbiAgICAgICAgaWYgKGlzVXBDb21pbmcpIGFkZFRhc2tUb1RpbWUodGFzayk7XG4gICAgICAgIGlmIChpc1VwQ29taW5nKSByZW1vdmVPdXRPZkRhdGVUYXNrcygpO1xuICAgIH1cblxuXG5cbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKGJvYXJkSW5kZXgsdGFzaykgPT4ge1xuICAgICAgICBpZiAoaXNVcENvbWluZyl7XG4gICAgICAgICAgICB0YXNrLm5hdkluZGV4ID0gXCJ1cGNvbWluZ1wiO1xuICAgICAgICAgICAgdGFzay5uYXZOYW1lID0gXCJVcGNvbWluZ1wiO1xuICAgICAgICAgICAgdXBjb21pbmdUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgdGFzay50YXNrSW5kZXggPSB1cGNvbWluZ1Rhc2tzLmxlbmd0aCAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgICBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgIGxldCB0YXNrcyA9IHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS50YXNrcztcbiAgICAgICAgIHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyA9IHRhc2tzOyBcbiAgICAgICAgIGlmIChpc1VwQ29taW5nKSBhZGRUYXNrVG9UaW1lKHRhc2spO1xuICAgICAgICAgaWYgKGlzVXBDb21pbmcpIHJlbW92ZU91dE9mRGF0ZVRhc2tzKCk7XG5cblxuICAgIH1cblxuLy8gdXBjb21pbmcgdGFzayBhcnJheSB3aWxsIGFsd2F5cyBnaXZlIGEgdW5pcXVlIHRhc2sgaW5kZXggYmVjYXVzZSBpdCB1c2luZyB0aGUgbGVuZ3RoIG9mIHRoZSB1cGNvbWluZyB0YXNrXG4vLyB3aGljaCBpcyBvbmx5IGNoYWdlZCB3aGVuIHdlIGdldCBuZXcgZGF0YS4gVGhlIG5ldyBkYXRhIHdpbGwgY2hhbmdlIHRoZSB0YXNrIGluZGV4IHNvIHRoYXQgaXQgaXMgaW4gb3JkZXJcbi8vIHNvIGl0IGlzbid0IGp1c3QgYSByYW5kb20gbnVtYmVyIGFuZCB0aGF0IGlzIHdoeSB1cGNvbWluZyB3b3Jrcy5cblxuICAgIGNvbnN0IGFkZFRhc2sgPSAgKGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgICAgICBsZXQgZGF0ZVZhbHVlID0gZWxlbWVudHMuZGF0ZVBpY2tlclswXS52YWx1ZVxuICAgICAgICBsZXQgY3VycmVudERhdGU7XG4gICAgXG4gICAgICAgIGlmIChkYXRlVmFsdWUubGVuZ3RoID09IDApIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZWxzZSBjdXJyZW50RGF0ZSA9IGNoYW5nZVZhbHVlVG9EYXRlKGRhdGVWYWx1ZSk7XG4gICAgICAgIGxldCB0YXNrVGV4dCA9IGVsZW1lbnRzLnRhc2tUZXh0Qm94WzBdLnZhbHVlO1xuICAgICAgICBpZiAodGFza1RleHQubGVuZ3RoID09IDAgfHwgIWNoZWNrU3BhY2VzKHRhc2tUZXh0KSApIHRhc2tUZXh0ID0gXCJOZXcgVGFza1wiO1xuXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGdldE9iamVjdFZhbHVlKFwibGlzdEVkaXRvclwiLFwicHJpb3JpdHlcIixzdGF0aWNMaXN0VGFza3MpO1xuICAgICAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2tUZW1wbGF0ZSh0YXNrVGV4dCxjdXJyZW50RGF0ZSxwcmlvcml0eSk7XG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gZmluZExpc3RFZGl0b3JCb2FyZEluZGV4KCk7XG4gICAgICAgICB0eXBlb2YgaW5kZXggIT0gXCJ1bmRlZmluZWRcIiA/IGNoYW5nZVRhc2soYm9hcmRJbmRleCwgdGFzayxpbmRleCk6IGNyZWF0ZVRhc2soYm9hcmRJbmRleCx0YXNrKVxuICAgICAgIGFjdGl2YXRlQ29udGVudE1lbnUoKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGdldE5ld0luZGV4ZXMgPSAobmV3VGFzaykgPT4ge1xuICAgICAgICBsZXQgbmV3Qm9hcmRJbmRleDtcbiAgICAgICAgbGV0IGJyZWFrTG9vcCA9IGZhbHNlO1xuICAgICAgICBsZXQgbmV3VGFza0luZGV4O1xuXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFza0luZGV4ID0gMDtcbiAgICAgICAgICAgIGJvYXJkLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2submF2SW5kZXggPT0gXCJ1cGNvbWluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudGFza0luZGV4ID09IG5ld1Rhc2sudGFza0luZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC50ZXh0ID09IFwiV2Vla1wiKSBuZXdCb2FyZEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2FyZC50ZXh0ID09IFwiVG9kYXlcIikgbmV3Qm9hcmRJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha0xvb3AgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrSW5kZXggPSBjdXJyZW50VGFza0luZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrSW5kZXggKys7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZihicmVha0xvb3ApIHJldHVybjtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHtuZXdCb2FyZEluZGV4LCBuZXdUYXNrSW5kZXh9O1xuICAgIH1cblxuXG4gICAgY29uc3QgYWRkVGFza1RvVGltZSA9IChuZXdUYXNrKSA9PiB7XG4gICAgICAgIGxldCBuZXdJbmRleD0gZ2V0TmV3SW5kZXhlcyhuZXdUYXNrKTtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdJbmRleC5uZXdCb2FyZEluZGV4ID09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICAgICBcbiAgICAgICAgbGV0IG5ld0JvYXJkSW5kZXggPSBuZXdJbmRleC5uZXdCb2FyZEluZGV4O1xuICAgICAgICBsZXQgbmV3VGFza0luZGV4ID0gbmV3SW5kZXgubmV3VGFza0luZGV4O1xuICAgICAgICBsZXQgYWRkVGFzayA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gc3RhdGljTGlzdFRhc2tzW25ld0JvYXJkSW5kZXhdLnRhc2tzW25ld1Rhc2tJbmRleF07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50VGFzayAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRhc2sudGFza0luZGV4ID09IG5ld1Rhc2sudGFza0luZGV4ICYmIGN1cnJlbnRUYXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIiAmJiBuZXdUYXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdGF0aWNMaXN0VGFza3NbbmV3Qm9hcmRJbmRleF0udGFza3NbbmV3VGFza0luZGV4XSA9IG5ld1Rhc2s7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tzID0gIHN0YXRpY0xpc3RUYXNrc1tuZXdCb2FyZEluZGV4XS50YXNrcztcbiAgICAgICAgICAgICAgICBzdGF0aWNMaXN0VGFza3NbbmV3Qm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMgPSB0YXNrcztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFRhc2submF2SW5kZXggPT0gXCJ1cGNvbWluZ1wiICYmIG5ld1Rhc2submF2SW5kZXggPT0gXCJ1cGNvbWluZ1wiKXtcbiAgICAgICAgICAgICAgICBhZGRUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudFRhc2sgPT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgICAgICAgICAgY3VycmVudFRhc2submF2SW5kZXggIT0gXCJ1cGNvbWluZ1wiIHx8IGFkZFRhc2tcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrVXBDb21pbmdUYXNrKG5ld1Rhc2spKXtcbiAgICAgICAgICAgICAgICBzdGF0aWNMaXN0VGFza3NbbmV3Qm9hcmRJbmRleF0udGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICBsZXQgdGFza3MgPSAgc3RhdGljTGlzdFRhc2tzW25ld0JvYXJkSW5kZXhdLnRhc2tzO1xuICAgICAgICAgICAgICAgIHN0YXRpY0xpc3RUYXNrc1tuZXdCb2FyZEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyA9IHRhc2tzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBjaGVja1VwQ29taW5nVGFzayA9IChuZXdUYXNrKSA9PiB7XG4gICAgICAgIGxldCBpc1Rhc2sgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBib2FyZC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnRhc2tJbmRleCA9PSBuZXdUYXNrLnRhc2tJbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyICsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudGVyID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaXNUYXNrO1xuICAgIH1cblxuXG4gICAgY29uc3QgcmVtb3ZlT3V0T2ZEYXRlVGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGFkZE91dE9mRGF0ZVRhc2tzVG9EZWxldGVkVXBjb21pbmdJdGVtcygpO1xuICAgICAgICBsZXQgYm9hcmRJbmRleCA9IDA7XG4gICAgICAgIGxldCBuZXdTdGF0aWNMaXN0VGFza3MgPSBzZXRPYmplY3Qoc3RhdGljTGlzdFRhc2tzLCB0cnVlKTtcblxuICAgICAgICBuZXdTdGF0aWNMaXN0VGFza3MuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBib2FyZC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrcyA9IGJvYXJkLnRhc2tzO1xuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrcyA9IHRhc2tzLmZpbHRlcihuZXdUYXNrID0+IG5ld1Rhc2suZGF0ZSAhPSB0YXNrLmRhdGUpXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkSW5kZXggPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNUb2RheSh0YXNrLmRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrcyA9IG5ld1Rhc2tzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2submF2SW5kZXggIT0gXCJ1cGNvbWluZ1wiKXRhc2tDaGFuZ2VzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAgKCFpc1RoaXNXZWVrKHRhc2suZGF0ZSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3MgPSBuZXdUYXNrcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLm5hdkluZGV4ICE9IFwidXBjb21pbmdcIil0YXNrQ2hhbmdlcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1N0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS50YXNrcyA9IHRhc2tzO1xuICAgICAgICAgICAgICAgIG5ld1N0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyA9IHRhc2tzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJvYXJkSW5kZXggKys7XG4gICAgICAgIH0pXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcyA9IG5ld1N0YXRpY0xpc3RUYXNrc1xuICAgIH1cblxuXG4gICAgY29uc3QgYWRkT3V0T2ZEYXRlVGFza3NUb0RlbGV0ZWRVcGNvbWluZ0l0ZW1zID0gKCkgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBib2FyZC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRhc2submF2SW5kZXggPT0gXCJ1cGNvbWluZ1wiKVxuICAgICAgICAgICAgICAgIGlmICghaXNUaGlzV2Vlayh0YXNrLmRhdGUpKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlZFVwQ29taW5nSXRlbXMucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgY29uc3Qgc2hhZGVCdXR0b25CeUNsYXNzID0gKGNsYXNzTmFtZSxjb2xvcikgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBlbGVtZW50cy5idXR0b247XG4gICAgICAgIGxldCBidXR0b24gPSBidXR0b25zLmZpbHRlcihidXR0b24gPT4gYnV0dG9uLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IGNsYXNzTmFtZSlbMF07XG4gICAgICAgIGxldCBidXR0b25QYXJhZ3JhcGggPSBBcnJheS5mcm9tKGJ1dHRvbi5jaGlsZHJlbilbMF07XG4gICAgICAgIGJ1dHRvblBhcmFncmFwaC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG5cbiAgICB9XG5cbiAgICBjb25zdCBzaGFkZUJ1dHRvbkJ5UHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09IFwiSGlnaFwiKSBzaGFkZUJ1dHRvbkJ5Q2xhc3MoXCJidXR0b24gaGlnaFwiLFwicmVkXCIpO1xuICAgICAgICBlbHNlIGlmIChwcmlvcml0eSA9PSBcIk1lZGl1bVwiKSBzaGFkZUJ1dHRvbkJ5Q2xhc3MoXCJidXR0b24gbWVkaXVtXCIsIFwiI2ZmOTgwMFwiKTtcbiAgICAgICAgZWxzZSBpZiAocHJpb3JpdHkgPT0gXCJMb3dcIikgc2hhZGVCdXR0b25CeUNsYXNzKFwiYnV0dG9uIGxvd1wiLCBcImdyZWVuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNoYWRlQnV0dG9uQ29sb3JDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBzaGFkZUJ1dHRvbkNvbG9yKGV2ZW50LHN0YXRpY0xpc3RUYXNrcylcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVCb2FyZCA9IChldmVudCkgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MgPSByZW1vdmVJdGVtKHN0YXRpY0xpc3RUYXNrcywgZXZlbnQudGFyZ2V0LmJvYXJkSW5kZXgpO1xuICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzID0gc3RhdGljTGlzdFRhc2tzXG4gICAgICAgIGFjdGl2YXRlQ29udGVudE1lbnUoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVFZGl0VGl0bGVNZW51ID0gKCkgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdUYXNrcyA9IHRhc2suY2hhbmdlZEJvYXJkTGlzdHM7XG4gICAgICAgICAgICBuZXdUYXNrcyA9IG5ld1Rhc2tzLmZpbHRlcihsaXN0ID0+IGxpc3QuZWRpdEJvYXJkICE9IHRydWUpO1xuICAgICAgICAgICAgdGFzay5jaGFuZ2VkQm9hcmRMaXN0cyA9IG5ld1Rhc2tzO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0Qm9hcmQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmJvYXJkSW5kZXg7XG4gICAgICAgIHJlbW92ZUVkaXRUaXRsZU1lbnUoKTtcbiAgICAgICAgbGV0IGNoYW5nZWRCb2FyZExpc3RzID0gc3RhdGljTGlzdFRhc2tzW2luZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRUZXh0ID0gZ2V0RWxlbWVudEJ5Qm9hcmRJbmRleChpbmRleCxcImV4YW1wbGVCb2FyZFRleHRcIikudGV4dENvbnRlbnQ7XG5cblxuICAgICAgICBsZXQgZWRpdEJvYXJkVGVtcGxhdGUgPSB7ZWRpdEJvYXJkOiB0cnVlLCB0ZXh0OmN1cnJlbnRUZXh0fTtcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgICAgIG5ld0FycmF5LnB1c2goZWRpdEJvYXJkVGVtcGxhdGUpO1xuICAgICAgICBsZXQgZmluYWxBcnJheSA9IG5ld0FycmF5LmNvbmNhdChjaGFuZ2VkQm9hcmRMaXN0cyk7XG5cbiAgICAgICAgc3RhdGljTGlzdFRhc2tzW2luZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyA9IGZpbmFsQXJyYXk7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICByZW5kZXJCb2FyZExpc3RzKHRydWUpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBhZGRMaXN0RWRpdG9yQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSBldmVudC50YXJnZXQuYm9hcmRJbmRleDtcbiAgICAgICAgYWRkTGlzdEVkaXRvcihib2FyZEluZGV4KVxuICAgIH1cblxuXG4gICAgY29uc3QgYWRkTGlzdEVkaXRvciA9IChib2FyZEluZGV4LGluZGV4LHRleHQsZGF0ZSxwcmlvcml0eSkgPT4ge1xuXG4gICAgICAgIHJlbW92ZUxpc3RFZGl0b3IoKVxuICAgICAgICBsZXQgZmluYWxBcnJheTtcbiAgICAgICAgbGV0IGxpc3RFZGl0b3JUZW1wbGF0ZTtcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT0gXCJ1bmRlZmluZWRcIikgIGxpc3RFZGl0b3JUZW1wbGF0ZSA9IHtsaXN0RWRpdG9yOiB0cnVlLCB0ZXh0OnRleHQsZGF0ZTogZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTpwcmlvcml0eSwgYm9hcmRJbmRleDpib2FyZEluZGV4LCBpbmRleDogaW5kZXh9O1xuXG5cbiAgICAgICAgZWxzZSBsaXN0RWRpdG9yVGVtcGxhdGUgPSB7bGlzdEVkaXRvcjogdHJ1ZSwgdGV4dDpcIlwiLGRhdGU6Y3VycmVudERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJIaWdoXCIsYm9hcmRJbmRleDpib2FyZEluZGV4LCBjcmVhdGluZ1Rhc2s6IHRydWV9O1xuXG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBsZXQgbmV3VGFza3MgPSBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHM7XG4gICAgICAgICAgICBuZXdUYXNrcy5zcGxpY2UoaW5kZXggKzEsMCxsaXN0RWRpdG9yVGVtcGxhdGUpO1xuICAgICAgICAgICAgZmluYWxBcnJheSA9IG5ld1Rhc2tzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGlzdEJvYXJkQXJyYXkgPSBbbGlzdEVkaXRvclRlbXBsYXRlXTtcbiAgICAgICAgICAgIGxldCBuZXdUYXNrcyA9IHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cztcbiAgICAgICAgICAgIGZpbmFsQXJyYXkgPSBuZXdUYXNrcy5jb25jYXQobGlzdEJvYXJkQXJyYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzID0gZmluYWxBcnJheTtcbiAgICAgICAgcmVuZGVyQm9hcmRMaXN0cygpO1xuICAgIH1cblxuXG4gICAgY29uc3QgY2hhbmdlTmFtZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIGxldCBib2FyZFRleHQgPSBlbGVtZW50cy5ib2FyZENvbnRlbnRUZXh0Qm94WzBdLnZhbHVlO1xuICAgICAgICBpZiAoYm9hcmRUZXh0Lmxlbmd0aCA9PSAwICl7XG4gICAgICAgICAgICByZW1vdmVFZGl0VGl0bGVNZW51KCk7XG4gICAgICAgICAgICByZW5kZXJCb2FyZExpc3RzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gICBcbiAgICAgICAgbGV0IG5ld1Rhc2tzID0gc3RhdGljTGlzdFRhc2tzW2N1cnJlbnRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHM7XG4gICAgICAgIG5ld1Rhc2tzID0gbmV3VGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5lZGl0Qm9hcmQgIT0gdHJ1ZSlcbiAgICAgICAgXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrc1tjdXJyZW50SW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzID0gbmV3VGFza3M7XG4gICAgICAgIHN0YXRpY0xpc3RUYXNrc1tjdXJyZW50SW5kZXhdLnRleHQgPSBib2FyZFRleHQ7XG4gICAgICAgYWN0aXZhdGVDb250ZW50TWVudSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckVkaXRCb2FyZFRleHRWYWx1ZXMgID0gKCkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIHRhc2suY2hhbmdlZEJvYXJkTGlzdHMuZm9yRWFjaChsaXN0ID0+e1xuICAgICAgICAgICAgICAgIGlmIChsaXN0LmVkaXRCb2FyZCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGV4dCA9IGZpbmRCb2FyZFRleHRCb3goaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnRleHQgPSBjdXJyZW50VGV4dDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckJvYXJkTGlzdHMgPSAoaXNDaGFuZ2VkTmFtZSkgPT4ge1xuICAgICAgICByZW1vdmVMaXN0QmluZGluZ3MoKTtcbiAgICAgICAgcmVtb3ZlQ29udGVudEJpbmRpbmdzKCk7XG4gICAgICAgIHJlbW92ZUJvYXJkT3ZlcmxheSgpO1xuXG4gICAgICAgIGxldCBpbmRleGVzTGVuZ3RoID0gc3RhdGljTGlzdFRhc2tzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdGF0aWNMaXN0VGFza3MubGVuZ3RoICE9IDApcmVuZGVyU2luZ2xlQm9hcmRMaXN0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNDaGFuZ2VkTmFtZSl7XG4gICAgICAgICAgICBhZGRMaXN0QmluZGluZ3MoKTtcbiAgICAgICAgICAgIGFkZENvbnRlbnRCaW5kaW5ncygpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBhZGRDaGFuZ2VOYW1lQmluZGluZygpO1xuICAgIH1cblxuXG5cblxuICAgIGNvbnN0IHJlbmRlclNpbmdsZUJvYXJkTGlzdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBsZXQgdGFza0xpc3QgPSBnZXRFbGVtZW50QnlCb2FyZEluZGV4KGluZGV4LCBcInRhc2tMaXN0c1wiKTtcbiAgICAgICAgbGV0IGFkZERhdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGRhdGU7XG4gICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgc3RhdGljTGlzdFRhc2tzW2luZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suZWRpdEJvYXJkKXtcbiAgICAgICAgICAgICAgICBsZXQgYm9hcmRUZXh0ID0gY3JlYXRlQm9hcmRFZGl0b3IodGFzayk7XG4gICAgICAgICAgICAgICAgdGFza0xpc3QuaW5uZXJIVE1MICs9IGJvYXJkVGV4dDtcbiAgICAgICAgICAgICAgICBhZGRCb2FyZE92ZXJsYXkoaW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmxpc3RFZGl0b3Ipe1xuICAgICAgICAgICAgICAgIGxldCBsaXN0VGV4dD0gY3JlYXRlTGlzdEVkaXRvcih0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgKz0gbGlzdFRleHQ7XG5cbiAgICAgICAgICAgICAgICBzaGFkZUJ1dHRvbkJ5UHJpb3JpdHkodGFzay5wcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IHRhc2suZGF0ZTtcbiAgICAgICAgICAgICAgICBhZGREYXRlID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2subGlzdFRhc2spe1xuICAgICAgICAgICAgICAgIGxldCB0YXNrVGV4dCA9IGNyZWF0ZVRhc2tBcnJhbmdlbWVudCh0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgKz0gdGFza1RleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgIFxuICAgICAgICBpZiAoYWRkRGF0ZSkgc2V0VGFza0RhdGUoZGF0ZSk7XG4gICAgICAgIGxldCB0YXNrTGlzdENoaWxkcmVuID0gQXJyYXkuZnJvbSh0YXNrTGlzdC5jaGlsZHJlbilcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSB0YXNrTGlzdC5ib2FyZEluZGV4O1xuICAgICAgICBhc3NpZ25UYXNrSW5kZXgodGFza0xpc3RDaGlsZHJlbixib2FyZEluZGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRCb2FyZFRhc2tzQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGFkZEJvYXJkVGFza3Moc3RhdGljTGlzdFRhc2tzKTtcbiAgICAgICAgY2hhbmdlZExpc3RUYXNrcyA9IHNldEFycmF5KHN0YXRpY0xpc3RUYXNrcyk7XG4gICAgICAgIGFjdGl2YXRlQ29udGVudE1lbnUoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVDb250ZW50TWVudSA9ICgpID0+IHtcbiAgICAgICAgYWN0aXZhdGVDb250ZW50KGluZGV4LGZhbHNlLG5hbWUpO1xuXG4gICAgfVxuXG5cbiAgICBjb25zdCByZW5kZXJMaXN0VGFza3MgPSAoaXNFbXB0eSkgPT4ge1xuICAgICAgICBsZXQgZG9tID0gZ2V0SW5pdGlhbEVsZW1lbnRzKCk7XG4gICAgICAgIHJlbmRlckVkaXRCb2FyZFRleHRWYWx1ZXMoKTtcbiAgICAgICAgcmVtb3ZlQ29udGVudEJpbmRpbmdzKCk7XG4gICAgICAgIHJlbW92ZUxpc3RCaW5kaW5ncygpOyBcblxuICAgICAgICBpZiAoIWlzRW1wdHkgJiYgICFpc1VwQ29taW5nKXtcbiAgICAgICAgICAgIGxldCBuZXdUYXNrcyA9IGNoYW5nZWRMaXN0VGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5hZGRCb2FyZCAhPSB0cnVlKTtcbiAgICAgICAgICAgIGNoYW5nZWRMaXN0VGFza3MgPSBuZXdUYXNrcztcbiAgICAgICAgICAgY2hhbmdlZExpc3RUYXNrcy5wdXNoKHthZGRCb2FyZDogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGRvbS5wYWdlQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5ib2FyZCl7XG4gICAgICAgICAgICAgICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQodGFzayk7XG4gICAgICAgICAgICAgICAgZG9tLnBhZ2VDb250ZW50LmlubmVySFRNTCArPSBib2FyZFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmFkZEJvYXJkKXtcbiAgICAgICAgICAgICAgICBsZXQgYWRkQm9hcmQgPSBjcmVhdGVBZGRCb2FyZCgpO1xuICAgICAgICAgICAgICAgIGRvbS5wYWdlQ29udGVudC5pbm5lckhUTUwgKz0gYWRkQm9hcmQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suaXNVcENvbWluZ0JvYXJkKXtcbiAgICAgICAgICAgICAgICBsZXQgdXBDb21pbmdCb2FyZCA9IGNyZWF0ZVVwQ29taW5nQm9hcmQodGFzayk7XG4gICAgICAgICAgICAgICAgZG9tLnBhZ2VDb250ZW50LmlubmVySFRNTCArPSB1cENvbWluZ0JvYXJkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSAgICAgICBcblxuICAgICAgICBhZGRDb250ZW50QmluZGluZ3MoKTtcbiAgICAgICAgYXNzaWduQm9hcmRFbGVtZW50cygpO1xuICAgICAgICByZW5kZXJCb2FyZExpc3RzKCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBzZXRDaGFuZ2VkVG9Eb0xpc3RzRW1wdHkgPSAoKSA9PiB7XG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgdGFzay5jaGFuZ2VkQm9hcmRMaXN0cyA9IFtdO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q2hhbmdlZFRvRG9MaXN0cyA9ICgpID0+IHtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICB0YXNrLmNoYW5nZWRCb2FyZExpc3RzID0gIHRhc2sudGFza3M7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVOYXZDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MgPSBbXTtcbiAgICAgICAgbGV0IG5ld1Rhc2tzID0gc2VuZC5yZXRyaWV2ZURhdGEoaW5kZXgpO1xuICAgICAgICBpZiAoIW5ld1Rhc2tzKXtcbiAgICAgICAgICAgIHNlbmQuc2VuZERhdGEoW10saW5kZXgsbmFtZSlcbiAgICAgICAgICAgIG5ld1Rhc2tzID0gc2VuZC5yZXRyaWV2ZURhdGEoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcyA9IG5ld1Rhc2tzO1xuICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzID0gc2V0QXJyYXkoc3RhdGljTGlzdFRhc2tzKVxuICAgICAgICBzZXRDaGFuZ2VkVG9Eb0xpc3RzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVVcENvbWluZ0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcyA9IFtdO1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MgPSByZW5kZXJUaW1lVGFza3Moc3RhdGljTGlzdFRhc2tzKTtcbiAgICAgICAgaXNVcENvbWluZyA9IHRydWU7XG4gICAgICAgIGNoYW5nZWRMaXN0VGFza3MgPSBzZXRBcnJheShzdGF0aWNMaXN0VGFza3MpXG4gICAgICAgIHVwY29taW5nVGFza3MgPSBnZXRVcENvbWluZ1Rhc2tzKHN0YXRpY0xpc3RUYXNrcyk7XG5cbiAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZU5hdlRhc2tzID0gKCkgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBsZXQgdGFza3MgPSBib2FyZC50YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5uYXZJbmRleCA9PSBcInVwY29taW5nXCIpO1xuICAgICAgICAgICAgYm9hcmQudGFza3MgPSB0YXNrcztcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGNvbnN0IGRpc3J1cHRDb250ZW50ID0gKG9iamVjdEluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNVcENvbWluZykgcmVtb3ZlTmF2VGFza3MoKTtcbiAgICAgICAgICAgIGVsc2Ugc3RhdGljTGlzdFRhc2tzID0gW107XG4gICAgICAgICAgICBpbmRleCA9IG51bGw7XG4gICAgICAgICAgICBpZiAob2JqZWN0SW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgIGlmICghaXNVcENvbWluZykgcmVuZGVyTGlzdFRhc2tzKHRydWUpO1xuICAgICAgICAgICAgICBjYW5EaXNydXB0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgfVxuXG4gICAgIFxuICAgIGNvbnN0IHJlbW92ZVVwQ29taW5nSXRlbXMgPSAobmF2cykgPT4ge1xuICAgICAgICBkZWxldGVkVXBDb21pbmdJdGVtcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2submF2SW5kZXggPT0gXCJ1cGNvbWluZ1wiKXtcbiAgICAgICAgICAgICAgICBuYXZzW3Rhc2submF2SW5kZXhdW3Rhc2sudGFza0luZGV4XSA9IFwiZW1wdHlcIlxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5hdnNbdGFzay5uYXZJbmRleF1bdGFzay5ib2FyZEluZGV4XS50YXNrc1t0YXNrLnRhc2tJbmRleF0gPSBcImVtcHR5XCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICBuYXZzID0gcmVtb3ZlTmF2RW1wdGllcyhuYXZzKTtcbiAgICAgICAgZGVsZXRlZFVwQ29taW5nSXRlbXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIG5hdnM7XG5cbiAgICB9XG5cbiAgICBjb25zdCBzZW5kVXBDb21pbmdDaGFuZ2VzID0gKCkgPT4ge1xuICAgICAgICBsZXQgbmF2cyA9IHNlbmQuZ2V0QWxsRGF0YSgpO1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBib2FyZC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrID0gdGFzaztcbiAgICAgICAgICAgICAgICBpZiAodGFzay5saXN0VGFzayl7ICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2submF2SW5kZXggIT0gXCJ1cGNvbWluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gdGFzay50ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSB0YXNrLmRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RUeXBlVGV4dCA9IHRhc2sucHJvamVjdFR5cGVUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrZWQgPSB0YXNrLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrID0gY3JlYXRlVGFza1RlbXBsYXRlKHRleHQsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0VHlwZVRleHQsIGNoZWNrZWQpXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih0YXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2c1t0YXNrLm5hdkluZGV4XVt0YXNrLnRhc2tJbmRleF0gPSBuZXdUYXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgbmF2c1t0YXNrLm5hdkluZGV4XVt0YXNrLmJvYXJkSW5kZXhdLnRhc2tzW3Rhc2sudGFza0luZGV4XSA9IG5ld1Rhc2s7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGlmKGRlbGV0ZWRVcENvbWluZ0l0ZW1zLmxlbmd0aCAhPSAwKSBuYXZzID0gcmVtb3ZlVXBDb21pbmdJdGVtcyhuYXZzKTtcbiAgICAgICAgbGV0IG5ld0RhdGEgPSBzZXRPYmplY3QobmF2cyk7XG4gICAgICAgIG5ld0RhdGEgPSBhcHBseVRhc2tDaGFuZ2VzKG5ld0RhdGEsdGFza0NoYW5nZXMpO1xuICAgICAgICB0YXNrQ2hhbmdlcyA9IFtdO1xuXG4gICAgICAgIHNlbmQub3ZlcndyaXRlRGF0YShuZXdEYXRhKTtcbiAgICAgICAgc3RvcmFnZS5zdG9yZURhdGEoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJc1VwQ29taW5nICA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlzVXBDb21pbmc7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5kZXggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cblxuICAgIGNvbnN0IGFjdGl2YXRlQ29udGVudCA9IChvYmplY3RJbmRleCwgZGlzcnVwdEZsb3csb2JqZWN0TmFtZSkgPT4ge1xuICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzID0gW107XG4gICAgICAgIHVwY29taW5nVGFza3MgPSBbXTtcbiAgICAgICAgc2V0Q2hhbmdlZFRvRG9MaXN0c0VtcHR5KCk7XG4gICAgIFxuICAgICAgICBjYW5EaXNydXB0ID0gZmFsc2U7XG4gICAgICAgIGlmIChkaXNydXB0Rmxvdykge1xuICAgICAgICAgICAgZGlzcnVwdENvbnRlbnQob2JqZWN0SW5kZXgpXG4gICAgICAgICAgICBpZiAoY2FuRGlzcnVwdCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1VwQ29taW5nKSBhY3RpdmF0ZUNvbnRlbnQoXCJ1cGNvbWluZ1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICBsZXQgY3VycmVudE5hbWUgPSBzZW5kLnJldHJpZXZlVGl0bGUoaW5kZXgpO1xuICAgICAgICAgICAgbmFtZSA9IGN1cnJlbnROYW1lOyAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBzZW5kLnNlbmREYXRhKHN0YXRpY0xpc3RUYXNrcyxpbmRleCxuYW1lKTsgIFxuICAgICAgICAgICAgc3RvcmFnZS5zdG9yZURhdGEoKTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gXCJ1cGNvbWluZ1wiKXtcbiAgICAgICAgICAgIHNlbmRVcENvbWluZ0NoYW5nZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzVXBDb21pbmcgPSBmYWxzZTtcblxuICAgICAgICBpbmRleCA9IG9iamVjdEluZGV4O1xuICAgICAgICBuYW1lID0gb2JqZWN0TmFtZTtcblxuICAgICAgICBpZiAoaW5kZXggPT0gXCJ1cGNvbWluZ1wiKXtcbiAgICAgICAgICAgIGFjdGl2YXRlVXBDb21pbmdDb250ZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmF0ZU5hdkNvbnRlbnQoKTtcblxuXG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyTGlzdFRhc2tzKCk7XG4gICAgfVxuICAgIHJldHVybiB7YWN0aXZhdGVDb250ZW50LHJlbW92ZVRhc2tCaW5kaW5ncywgYWRkVGFza0JpbmRpbmdzLCBnZXRJc1VwQ29taW5nLGdldEluZGV4IH07XG59XG5cbmxldCBjb250ZW50TWVudSA9IENvbnRlbnQoKTtcbmV4cG9ydCB7Y29udGVudE1lbnV9OyAgICIsImltcG9ydCB7IGNyZWF0ZVRhc2tUZW1wbGF0ZSwgZmluZE9iamVjdEJ5TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiO1xuaW1wb3J0IHtnZXRVcGRhdGVkRWxlbWVudHN9IGZyb20gXCIuL3BhZ2VMYXlvdXQuanNcIjtcbmltcG9ydCB7c2V0QXJyYXl9IGZyb20gXCIuL2VsZW1lbnRFdmVudHMuanNcIjtcbmltcG9ydCB7Y2hlY2tTcGFjZXN9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiO1xuXG5cbmNvbnN0IGFwcGx5VGFza0NoYW5nZXMgPSAobmF2cyx0YXNrQ2hhbmdlcykgPT4ge1xuXG5cbiAgICBsZXQgbmV3TmF2ID0gbmF2cztcbiAgICB0YXNrQ2hhbmdlcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBsZXQgbmV3VGFzaztcblxuICAgICAgICBsZXQgbmF2SW5kZXggPSB0YXNrLm5hdkluZGV4O1xuICAgICAgICBsZXQgYm9hcmRJbmRleCA9IHRhc2suYm9hcmRJbmRleDtcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IHRhc2sudGFza0luZGV4O1xuXG4gICAgICAgIGxldCB0ZXh0ID0gdGFzay50ZXh0O1xuICAgICAgICBsZXQgZGF0ZSA9IHRhc2suZGF0ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgbGV0IHByb2plY3RUeXBlVGV4dCA9IHRhc2sucHJvamVjdFR5cGVUZXh0O1xuICAgICAgICBsZXQgY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgICAgICAgbmV3VGFzayA9IGNyZWF0ZVRhc2tUZW1wbGF0ZSh0ZXh0LCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdFR5cGVUZXh0LCBjaGVja2VkKVxuICAgICAgICBcbiAgICAgICAgbmV3TmF2W25hdkluZGV4XVtib2FyZEluZGV4XS50YXNrc1t0YXNrSW5kZXhdID0gbmV3VGFzaztcbiAgICB9KVxuICAgIHJldHVybiBuZXdOYXY7XG5cblxufVxuXG5cbmNvbnN0IHJlbW92ZU5hdkVtcHRpZXMgPSAobmF2cykgPT4ge1xuXG4gICAgbGV0IG5hdktleXMgPSBPYmplY3Qua2V5cyhuYXZzKTtcbiAgICBuYXZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGtleSA9PSBcInVwY29taW5nXCIpe1xuICAgICAgICAgICAgbmF2c1trZXldID0gbmF2c1trZXldLmZpbHRlcih0YXNrID0+IHRhc2sgIT0gXCJlbXB0eVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2c1trZXldLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgICAgIGJvYXJkLnRhc2tzID0gYm9hcmQudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzayAhPSBcImVtcHR5XCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmF2cztcblxufVxuXG5cbmNvbnN0IGNyZWF0ZUJvYXJkVGVtcGxhdGUgPShjdXJyZW50VGV4dCx0YXNrcykgPT4ge1xuICAgIGxldCBjdXJyZW50VGFza3MgPSBbXTtcbiAgICBpZiAodHlwZW9mIHRhc2tzICE9IFwidW5kZWZpbmVkXCIpIGN1cnJlbnRUYXNrcyA9IHRhc2tzOyBcblxuICAgIGxldCBib2FyZCA9IHtib2FyZDogdHJ1ZSwgdGV4dDpjdXJyZW50VGV4dCwgdGFza3M6IGN1cnJlbnRUYXNrcywgY2hhbmdlZEJvYXJkTGlzdHM6IFtdLCB9O1xuXG5cbiAgICByZXR1cm4gYm9hcmQ7XG59XG5cblxuY29uc3QgcmVuZGVyTGlzdEVkaXRvclZhbHVlID0gKHRhc2tzKSA9PiB7XG4gICAgbGV0IGxpc3RFZGl0b3IgPSBmaW5kT2JqZWN0QnlOYW1lKFwibGlzdEVkaXRvclwiLHRhc2tzKTtcbiAgICBpZiAoIWxpc3RFZGl0b3IpIHJldHVybjtcbiAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICBsZXQgZGF0ZVBpY2tlciA9IGVsZW1lbnRzLmRhdGVQaWNrZXJbMF07XG4gICAgbGV0IHRhc2tUZXh0Qm94ID0gZWxlbWVudHMudGFza1RleHRCb3hbMF07XG4gICAgaWYgKGRhdGVQaWNrZXIpICBsaXN0RWRpdG9yLmRhdGUgPSBkYXRlUGlja2VyLnZhbHVlQXNEYXRlO1xuICAgIGlmICh0YXNrVGV4dEJveCkgbGlzdEVkaXRvci50ZXh0ID0gdGFza1RleHRCb3gudmFsdWU7XG5cbiAgICBcbn1cblxuXG5jb25zdCBhZGRCb2FyZFRhc2tzID0gKHN0YXRpY0FycmF5KSA9PiB7XG4gICAgcmVuZGVyTGlzdEVkaXRvclZhbHVlKHN0YXRpY0FycmF5KTtcbiAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICBsZXQgdGV4dCA9IGVsZW1lbnRzLmJvYXJkVGV4dEJveFswXS52YWx1ZTtcbiAgICBpZih0ZXh0Lmxlbmd0aCA9PSAwIHx8ICFjaGVja1NwYWNlcyh0ZXh0KSkgdGV4dCA9IFwiTmV3IEJvYXJkXCI7XG4gICAgbGV0IHRhc2sgPSBjcmVhdGVCb2FyZFRlbXBsYXRlKHRleHQpO1xuICAgIHN0YXRpY0FycmF5LnB1c2godGFzayk7XG59XG5cblxuXG5cbmV4cG9ydCB7YXBwbHlUYXNrQ2hhbmdlcywgcmVtb3ZlTmF2RW1wdGllcyxyZW5kZXJMaXN0RWRpdG9yVmFsdWUsIGFkZEJvYXJkVGFza3MgfSIsImltcG9ydCBcIi4uL3N0eWxlcy9ib2FyZC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9uYXZpZ2F0aW9uLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5jc3NcIlxuXG4gICAgXG5jb25zdCByZW1vdmVJdGVtID0oYXJyYXksIGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChpICE9IGluZGV4KXtcbiAgICAgICAgICAgIG5ld1Rhc2tzLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEluZGV4ICsrXG4gICAgfVxuICAgIHJldHVybiBuZXdUYXNrcztcbn1cblxuXG5jb25zdCBhZGRJdGVtID0gKGFycmF5LGluZGV4LCBpdGVtKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKyspe1xuICAgICAgICBpZiAoaSA9PSBpbmRleCl7XG4gICAgICAgICAgICBuZXdUYXNrcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGFza3MucHVzaChhcnJheVtpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3VGFza3M7XG59XG5cblxuY29uc3Qgc2V0QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgbmV3QXJyYXkgPSBhcnJheTtcbiAgICBsZXQgbmV3VGFza3MgPSBbXTtcbiAgICBuZXdBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBuZXdUYXNrcy5wdXNoKHRhc2spO1xuICAgIH0pXG4gICAgcmV0dXJuIG5ld1Rhc2tzO1xufVxuXG5cblxuXG5cblxuY29uc3Qgc2V0T2JqZWN0ID0gKG9iamVjdCxpc0FycmF5KSA9PiB7XG4gICAgbGV0IG5ld09iamVjdCA9IG9iamVjdDtcbiAgICBsZXQgYmxhbmtPYmplY3QgPSB7fTtcbiAgICBsZXQgbmV3T2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKG5ld09iamVjdCk7XG4gICAgbGV0IG5ld0FycmF5ID0gZmFsc2U7XG4gICAgbmV3QXJyYXkgPSBvYmplY3Q7XG5cbiAgICBpZiAoIWlzQXJyYXkpe1xuICAgICAgICBuZXdPYmplY3RLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3T2JqZWN0W2tleV0gIT0gXCJvYmplY3RcIiApICBibGFua09iamVjdFtrZXldID0gbmV3T2JqZWN0W2tleV07ICAgXG4gICAgICAgICAgICBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3T2JqZWN0W2tleV0pID09PSBcIltvYmplY3QgRGF0ZV1cIiApe1xuICAgICAgICAgICAgICAgIGJsYW5rT2JqZWN0W2tleV0gPSBuZXdPYmplY3Rba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYmxhbmtBcnJheSA9IFtdO1xuICAgICAgICBuZXdBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtICE9IFwib2JqZWN0XCIpIGJsYW5rQXJyYXkucHVzaChpdGVtKVxuICAgICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW0pID09PSBcIltvYmplY3QgRGF0ZV1cIil7XG4gICAgICAgICAgICAgICAgYmxhbmtBcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBibGFua09iamVjdCA9IGJsYW5rQXJyYXk7XG4gICAgfVxuICAgIGlmICghaXNBcnJheSl7XG4gICAgICAgIG5ld09iamVjdEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdPYmplY3Rba2V5XSA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KG5ld09iamVjdFtrZXldKSkge1xuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdPYmplY3Rba2V5XSkgIT09IFwiW29iamVjdCBEYXRlXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsYW5rT2JqZWN0W2tleV0gPSBzZXRPYmplY3QobmV3T2JqZWN0W2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShuZXdPYmplY3Rba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBibGFua09iamVjdFtrZXldID0gc2V0T2JqZWN0KG5ld09iamVjdFtrZXldLHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgICBuZXdBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW0pICE9PSBcIltvYmplY3QgRGF0ZV1cIil7XG4gICAgICAgICAgICAgICAgICAgIGJsYW5rT2JqZWN0LnNwbGljZShjdXJyZW50SW5kZXgsMCxzZXRPYmplY3QoaXRlbSkpXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKXtcbiAgICAgICAgICAgICAgICBibGFua09iamVjdC5zcGxpY2UoY3VycmVudEluZGV4LDAsc2V0T2JqZWN0KGl0ZW0sdHJ1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggKys7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBibGFua09iamVjdDtcblxuXG5cblxufVxuXG5cblxuY29uc3QgYWRkQmluZGluZ3MgPSAoZWxlbWVudHMsZnVuYyxiaW5kaW5nKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzKSkgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lcihiaW5kaW5nLGZ1bmMpO1xuICAgIGVsc2UgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihiaW5kaW5nLGZ1bmMpKTtcbn1cblxuY29uc3QgcmVtb3ZlQmluZGluZ3MgPSAoZWxlbWVudHMsZnVuYyxiaW5kaW5nKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzKSkgZWxlbWVudHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihiaW5kaW5nLGZ1bmMpO1xuICAgIGVsc2UgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihiaW5kaW5nLGZ1bmMpKTtcbn1cblxuXG5cblxuXG5leHBvcnQge3JlbW92ZUl0ZW0sIGFkZEl0ZW0sIGFkZEJpbmRpbmdzLCByZW1vdmVCaW5kaW5ncywgc2V0QXJyYXksIHNldE9iamVjdH1cbiIsImltcG9ydCB7XG4gIHJlbW92ZUl0ZW0sXG4gIGFkZEl0ZW0sXG4gIGFkZEJpbmRpbmdzLFxuICByZW1vdmVCaW5kaW5ncyxcbiAgc2V0QXJyYXksXG59IGZyb20gJy4vZWxlbWVudEV2ZW50cy5qcyc7XG5pbXBvcnQgeyBnZXRJbml0aWFsRWxlbWVudHMsIGdldFVwZGF0ZWRFbGVtZW50cyB9IGZyb20gJy4vcGFnZUxheW91dC5qcyc7XG5cbmltcG9ydCB7IHNlbmQgfSBmcm9tICcuL3NlbmQuanMnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbmltcG9ydCB7IGNyZWF0ZU5hdlRhc2ssIGNyZWF0ZVByb2plY3RFZGl0b3IgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuaW1wb3J0IHsgY29udGVudE1lbnUgfSBmcm9tICcuL2NvbnRlbnQuanMnO1xuXG5pbXBvcnQgeyBjaGVja1NwYWNlcyB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuY29uc3QgbmF2ID0gKCkgPT4ge1xuICBsZXQgZG9tRWxlbWVudHM7XG4gIGxldCBjaGFuZ2VkVGFza3MgPSBbXTtcbiAgbGV0IHN0YXRpY1Rhc2tzID0gW107XG4gIGxldCBjb250ZW50O1xuICBsZXQgaGlnaGxpZ2h0ZWRJbmRleDtcbiAgbGV0IHVwY29taW5nQnV0dG9uO1xuXG4gIGNvbnN0IHJlbW92ZU5hdmlnYXRpb25CaW5kaW5ncyA9IChub3RSZW1vdmVBZGRQcm9qZWN0TGFiZWwpID0+IHtcbiAgICBsZXQgdXBkYXRlZEl0ZW1zID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IGRvbUVsZW1lbnRzID0gZ2V0SW5pdGlhbEVsZW1lbnRzKCk7XG4gICAgdXBjb21pbmdCdXR0b24gPSBkb21FbGVtZW50cy51cENvbWluZ0J1dHRvbjtcblxuICAgIHJlbW92ZUJpbmRpbmdzKHVwZGF0ZWRJdGVtcy5lZGl0SXRlbXMsIGVkaXRJdGVtLCAnY2xpY2snKTtcbiAgICByZW1vdmVCaW5kaW5ncyh1cGRhdGVkSXRlbXMuZGVsZXRlSXRlbXMsIGRlbGV0ZUl0ZW0sICdjbGljaycpO1xuICAgIHJlbW92ZUJpbmRpbmdzKHVwZGF0ZWRJdGVtcy5wcm9qZWN0Q29udGFpbmVyLCBzd2l0Y2hQYWdlLCAnY2xpY2snKTtcbiAgICByZW1vdmVCaW5kaW5ncyhkb21FbGVtZW50cy5wcm9qZWN0QWRkZXIsIGFjdGl2YXRlUHJvamVjdFRhc2ssICdjbGljaycpO1xuICAgIHJlbW92ZUJpbmRpbmdzKGRvbUVsZW1lbnRzLnVwQ29taW5nQnV0dG9uLCBhY3RpdmF0ZVVwQ29taW5nVGFzaywgJ2NsaWNrJyk7XG4gICAgcmVtb3ZlQmluZGluZ3ModXBjb21pbmdCdXR0b24sIGhpZ2hsaWdodFVwQ29taW5nQnV0dG9uLCAnbW91c2VvdmVyJyk7XG4gICAgcmVtb3ZlQmluZGluZ3ModXBjb21pbmdCdXR0b24sIHVuaG92ZXJVcENvbWluZ0J1dHRvbiwgJ21vdXNlbGVhdmUnKTtcblxuICAgIGlmICghbm90UmVtb3ZlQWRkUHJvamVjdExhYmVsKVxuICAgICAgcmVtb3ZlQmluZGluZ3MoXG4gICAgICAgIHVwZGF0ZWRJdGVtcy5hZGRQcm9qZWN0TGFiZWxzLFxuICAgICAgICBjcmVhdGVQcm9qZWN0VGFza3NDbGljayxcbiAgICAgICAgJ2NsaWNrJ1xuICAgICAgKTtcbiAgICBpZiAoIW5vdFJlbW92ZUFkZFByb2plY3RMYWJlbCAmJiB1cGRhdGVkSXRlbXMuYWRkUHJvamVjdExhYmVscy5sZW5ndGggIT0gMClcbiAgICAgIHJlbW92ZUJpbmRpbmdzKHdpbmRvdywgY3JlYXRlUHJvamVjdFRhc2tzS2V5cywgJ2tleWRvd24nKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTcGVjaWFsTW9iaWxlQmluZGluZ3MgPSAoKSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRJdGVtcyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuXG4gICAgcmVtb3ZlQmluZGluZ3MoZG9tRWxlbWVudHMucHJvamVjdEFkZGVyLCBhY3RpdmF0ZVByb2plY3RUYXNrLCAnY2xpY2snKTtcbiAgICByZW1vdmVCaW5kaW5ncyhcbiAgICAgIHVwZGF0ZWRJdGVtcy5hZGRQcm9qZWN0TGFiZWxzLFxuICAgICAgY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2ssXG4gICAgICAnY2xpY2snXG4gICAgKTtcblxuICAgIHJlbW92ZUJpbmRpbmdzKGRvbUVsZW1lbnRzLndob2xlT3ZlcmxheSwgY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2ssICdjbGljaycpO1xuICAgIHJlbW92ZUJpbmRpbmdzKHdpbmRvdywgY3JlYXRlUHJvamVjdFRhc2tzS2V5cywgJ2tleWRvd24nKTtcbiAgfTtcblxuICBjb25zdCBsb29rVXBUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHN0YXRpY1Rhc2tzW2luZGV4XTtcbiAgfTtcblxuICBjb25zdCB1bmhvdmVyVXBDb21pbmdCdXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKGhpZ2hsaWdodGVkSW5kZXggIT0gJ3VwY29taW5nJykgdW5oaWdobGlnaHRVcENvbWluZ0J1dHRvbigpO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5hdmlnYXRpb25CaW5kaW5ncyA9ICgpID0+IHtcbiAgICBsZXQgdXBkYXRlZEl0ZW1zID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IGRvbUVsZW1lbnRzID0gZ2V0SW5pdGlhbEVsZW1lbnRzKCk7XG5cbiAgICBhZGRCaW5kaW5ncyh1cGRhdGVkSXRlbXMuZWRpdEl0ZW1zLCBlZGl0SXRlbSwgJ2NsaWNrJyk7XG4gICAgYWRkQmluZGluZ3ModXBkYXRlZEl0ZW1zLmRlbGV0ZUl0ZW1zLCBkZWxldGVJdGVtLCAnY2xpY2snKTtcbiAgICBhZGRCaW5kaW5ncyhcbiAgICAgIHVwZGF0ZWRJdGVtcy5hZGRQcm9qZWN0TGFiZWxzLFxuICAgICAgY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2ssXG4gICAgICAnY2xpY2snXG4gICAgKTtcbiAgICBhZGRCaW5kaW5ncyh1cGRhdGVkSXRlbXMucHJvamVjdENvbnRhaW5lciwgc3dpdGNoUGFnZSwgJ2NsaWNrJyk7XG4gICAgYWRkQmluZGluZ3MoZG9tRWxlbWVudHMucHJvamVjdEFkZGVyLCBhY3RpdmF0ZVByb2plY3RUYXNrLCAnY2xpY2snKTtcbiAgICBhZGRCaW5kaW5ncyh1cGNvbWluZ0J1dHRvbiwgYWN0aXZhdGVVcENvbWluZ1Rhc2ssICdjbGljaycpO1xuICAgIGFkZEJpbmRpbmdzKHVwY29taW5nQnV0dG9uLCBoaWdobGlnaHRVcENvbWluZ0J1dHRvbiwgJ21vdXNlb3ZlcicpO1xuICAgIGFkZEJpbmRpbmdzKHVwY29taW5nQnV0dG9uLCB1bmhvdmVyVXBDb21pbmdCdXR0b24sICdtb3VzZWxlYXZlJyk7XG5cbiAgICBpZiAodXBkYXRlZEl0ZW1zLmFkZFByb2plY3RMYWJlbHMubGVuZ3RoICE9IDApXG4gICAgICBhZGRCaW5kaW5ncyh3aW5kb3csIGNyZWF0ZVByb2plY3RUYXNrc0tleXMsICdrZXlkb3duJyk7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbldob2xlT3ZlcmF5QmluZGluZ3MgPSAoKSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRJdGVtcyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgIGFkZEJpbmRpbmdzKHVwZGF0ZWRJdGVtcy5wcm9qZWN0QnV0dG9uLCBjcmVhdGVQcm9qZWN0VGFza3NDbGljaywgJ2NsaWNrJyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdFdob2xlT3ZlcmxheUJpbmRpbmdzID0gKCkgPT4ge1xuICAgIGxldCB1cGRhdGVkSXRlbXMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICByZW1vdmVCaW5kaW5ncyhcbiAgICAgIHVwZGF0ZWRJdGVtcy5wcm9qZWN0QnV0dG9uLFxuICAgICAgY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2ssXG4gICAgICAnY2xpY2snXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBzZXRIaWdobGlnaHRJbmRleCA9IChpbmRleCkgPT4ge1xuICAgIGhpZ2hsaWdodGVkSW5kZXggPSBpbmRleDtcbiAgICBzdG9yYWdlLnN0b3JlSGlnaGxpZ2hJbmRleChpbmRleCk7XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoUGFnZSA9IChldmVudCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IHN0YXRpY1Rhc2tzW2V2ZW50LnRhcmdldC5jdXJyZW50SW5kZXhdLnRhc2s7XG4gICAgY29udGVudC5hY3RpdmF0ZUNvbnRlbnQoZXZlbnQudGFyZ2V0LmN1cnJlbnRJbmRleCwgZmFsc2UsIHRpdGxlKTtcbiAgICBzZXRIaWdobGlnaHRJbmRleChldmVudC50YXJnZXQuY3VycmVudEluZGV4KTtcbiAgICByZW5kZXJIaWdobGlnaHRFbGVtZW50cygpO1xuICAgIHJlbmRlclByb2plY3RUYXNrcygpO1xuICB9O1xuXG4gIGNvbnN0IHVuSGlnaGxpZ2h0QnV0dG9uID0gKCkgPT4ge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgdW5oaWdobGlnaHRVcENvbWluZ0J1dHRvbigpO1xuICAgIGNoYW5nZWRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5uYXZUYXNrIHx8IHRhc2sudXBDb21pbmdUYXNrKSB7XG4gICAgICAgIGlmICh0YXNrLmhpZ2hsaWdodCkge1xuICAgICAgICAgIHRhc2suaGlnaGxpZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGluZGV4Kys7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdW5oaWdobGlnaHRVcENvbWluZ0J1dHRvbiA9ICgpID0+IHtcbiAgICB1cGNvbWluZ0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigxOSwgNzUsIDIwNSknO1xuICB9O1xuXG4gIGNvbnN0IGhpZ2hsaWdodFVwQ29taW5nQnV0dG9uID0gKCkgPT4ge1xuICAgIHVwY29taW5nQnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDIyLCA4MywgMjI3KSc7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySGlnaGxpZ2h0RWxlbWVudHMgPSAoKSA9PiB7XG4gICAgaWYgKHN0YXRpY1Rhc2tzLmxlbmd0aCA9PSAwICYmIGhpZ2hsaWdodGVkSW5kZXggIT0gJ3VwY29taW5nJykgcmV0dXJuO1xuICAgIGxldCBpc0VkaXQgPSBjaGFuZ2VkVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmVkaXQpO1xuICAgIGlmIChpc0VkaXQubGVuZ3RoICE9IDApIHtcbiAgICAgIHVuSGlnaGxpZ2h0QnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZ2hsaWdodEJ1dHRvbihoaWdobGlnaHRlZEluZGV4KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGlnaGxpZ2h0QnV0dG9uID0gKGluZGV4KSA9PiB7XG4gICAgdW5IaWdobGlnaHRCdXR0b24oKTtcblxuICAgIGlmIChpbmRleCA9PSAndXBjb21pbmcnKSBoaWdobGlnaHRVcENvbWluZ0J1dHRvbigpO1xuICAgIGVsc2UgY2hhbmdlZFRhc2tzW2luZGV4XS5oaWdobGlnaHQgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGdldEN1cnJlbnRJbmRleCA9ICgpID0+IHtcbiAgICBsZXQgdXBkYXRlZEl0ZW1zID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IHByb2plY3RMYWJlbCA9IHVwZGF0ZWRJdGVtcy5hZGRQcm9qZWN0TGFiZWxzWzBdO1xuICAgIGlmICghcHJvamVjdExhYmVsKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHByb2plY3RMYWJlbC5jdXJyZW50SW5kZXg7XG5cbiAgICByZXR1cm4gY3VycmVudEluZGV4O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RUYXNrc0tleXMgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHtcbiAgICAgIGxldCBjdXJyZW50SW5kZXggPSBnZXRDdXJyZW50SW5kZXgoKTtcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IGZhbHNlKSByZXR1cm47XG4gICAgICBjcmVhdGVQcm9qZWN0VGFza3MoY3VycmVudEluZGV4KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2sgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IGdldEN1cnJlbnRJbmRleCgpO1xuICAgIGNyZWF0ZVByb2plY3RUYXNrcyhjdXJyZW50SW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RUYXNrcyA9IChpbmRleCkgPT4ge1xuICAgIGxldCB0YXNrVGV4dCA9IGdldFRleHRCb3hWYWx1ZXMoKTtcbiAgICBsZXQgaXNFZGl0aW5nVGFzayA9IGZhbHNlO1xuICAgIGxldCBpc1VwQ29taW5nID0gY29udGVudC5nZXRJc1VwQ29taW5nKCk7XG5cbiAgICBsZXQgdGFzayA9IHsgbmF2VGFzazogdHJ1ZSwgdGFzazogdGFza1RleHQsIGhpZ2hsaWdodDogZmFsc2UgfTtcbiAgICBpZiAodGFza1RleHQubGVuZ3RoICE9IDAgJiYgY2hlY2tTcGFjZXModGFza1RleHQpKSB7XG4gICAgICBpZiAoc3RhdGljVGFza3NbaW5kZXhdKSB7XG4gICAgICAgIHN0YXRpY1Rhc2tzW2luZGV4XSA9IHRhc2s7XG4gICAgICAgIGlzRWRpdGluZ1Rhc2sgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgc2V0SGlnaGxpZ2h0SW5kZXgoaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZWRUYXNrcyA9IHNldEFycmF5KHN0YXRpY1Rhc2tzKTtcbiAgICByZW5kZXJIaWdobGlnaHRFbGVtZW50cygpO1xuICAgIGlmIChzdGF0aWNUYXNrc1tpbmRleF0pIGNoYW5nZWRUYXNrc1tpbmRleF0uaGlnaGxpZ2h0ID0gdHJ1ZTtcbiAgICByZW5kZXJQcm9qZWN0VGFza3MoKTtcblxuICAgIGlmIChpbmRleCA9PSBzdGF0aWNUYXNrcy5sZW5ndGggLSAxICYmICFpc0VkaXRpbmdUYXNrKSB7XG4gICAgICBzZW5kLnNlbmROYW1lKGluZGV4LCB0YXNrLnRhc2spO1xuICAgICAgc3RvcmFnZS5zdG9yZURhdGEoKTtcbiAgICAgIGxldCB0aXRsZSA9IHN0YXRpY1Rhc2tzW2luZGV4XS50YXNrO1xuXG4gICAgICBjb250ZW50LmFjdGl2YXRlQ29udGVudChpbmRleCwgZmFsc2UsIHRpdGxlKTtcbiAgICB9IGVsc2UgaWYgKGlzRWRpdGluZ1Rhc2spIHtcbiAgICAgIHNlbmQuc2VuZE5hbWUoaW5kZXgsIHRhc2sudGFzayk7XG4gICAgICBzdG9yYWdlLnN0b3JlRGF0YSgpO1xuICAgICAgaWYgKGlzVXBDb21pbmcpIGNvbnRlbnQuYWN0aXZhdGVDb250ZW50KCd1cGNvbWluZycpO1xuICAgIH1cbiAgICByZW5kZXJPdmVybGF5KCk7XG4gICAgY29udGVudC5hZGRUYXNrQmluZGluZ3MoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVJdGVtID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmN1cnJlbnRJbmRleDtcblxuICAgIHN0YXRpY1Rhc2tzID0gcmVtb3ZlSXRlbShzdGF0aWNUYXNrcywgaW5kZXgpO1xuXG4gICAgc2VuZC5kZWxldGVEYXRhKGluZGV4KTtcbiAgICBzdG9yYWdlLnN0b3JlRGF0YSgpO1xuXG4gICAgbGV0IHJlbmRlckluZGV4ID0gaW5kZXggLSAxO1xuXG4gICAgaWYgKHJlbmRlckluZGV4IDwgMCkge1xuICAgICAgcmVuZGVySW5kZXggPSBzdGF0aWNUYXNrcy5sZW5ndGggLSAxO1xuICAgICAgaWYgKHN0YXRpY1Rhc2tzLmxlbmd0aCA9PSAwKSByZW5kZXJJbmRleCA9IC0xO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50SW5kZXggPSBjb250ZW50LmdldEluZGV4KCk7XG4gICAgbGV0IGlzVXBDb21pbmcgPSBjb250ZW50LmdldElzVXBDb21pbmcoKTtcbiAgICBsZXQgbm9ybWFsSW5kZXggPSByZW5kZXJJbmRleCArIDE7XG5cbiAgICBpZiAocmVuZGVySW5kZXggPT0gLTEpIHtcbiAgICAgIGNvbnRlbnQuYWN0aXZhdGVDb250ZW50KHJlbmRlckluZGV4LCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG5vcm1hbEluZGV4ID09IGNvbnRlbnRJbmRleCkge1xuICAgICAgbGV0IHRpdGxlID0gc3RhdGljVGFza3NbcmVuZGVySW5kZXhdLnRhc2s7XG4gICAgICBjb250ZW50LmFjdGl2YXRlQ29udGVudChyZW5kZXJJbmRleCwgdHJ1ZSwgdGl0bGUpO1xuICAgICAgc2V0SGlnaGxpZ2h0SW5kZXgocmVuZGVySW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoaXNVcENvbWluZykge1xuICAgICAgY29udGVudC5hY3RpdmF0ZUNvbnRlbnQoJ3VwY29taW5nJywgdHJ1ZSk7XG4gICAgICBzZXRIaWdobGlnaHRJbmRleCgndXBjb21pbmcnKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRJbmRleCkge1xuICAgICAgbGV0IHRpdGxlID0gc3RhdGljVGFza3NbY29udGVudEluZGV4XS50YXNrO1xuICAgICAgY29udGVudC5hY3RpdmF0ZUNvbnRlbnQoY29udGVudEluZGV4LCB0cnVlLCB0aXRsZSk7XG4gICAgICBzZXRIaWdobGlnaHRJbmRleChjb250ZW50SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRIaWdobGlnaHRJbmRleChyZW5kZXJJbmRleCk7XG4gICAgfVxuXG4gICAgY2hhbmdlZFRhc2tzID0gc2V0QXJyYXkoc3RhdGljVGFza3MpO1xuXG4gICAgcmVuZGVySGlnaGxpZ2h0RWxlbWVudHMoKTtcbiAgICByZW5kZXJQcm9qZWN0VGFza3MoKTtcbiAgfTtcblxuICBjb25zdCBlZGl0SXRlbSA9IChldmVudCkgPT4ge1xuICAgIGxldCBwcm9qZWN0VGFzayA9IGxvb2tVcFRhc2soZXZlbnQudGFyZ2V0LmN1cnJlbnRJbmRleCk7XG4gICAgbGV0IHRleHQgPSBwcm9qZWN0VGFzay50YXNrO1xuICAgIGNyZWF0ZUVkaXRvcih0ZXh0LCBldmVudC50YXJnZXQuY3VycmVudEluZGV4LCB0cnVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRUZXh0Qm94VmFsdWVzID0gKCkgPT4ge1xuICAgIGxldCBlZGl0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0VGV4dCcpO1xuICAgIGxldCB0ZXh0ID0gZWRpdFRleHQudmFsdWU7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgY29uc3QgYXNzaWduVGFza0FjdGlvbnMgPSAoaW5kZXgsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGxldCBjaGlsZEVsZW1lbnRzID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgobmV3RWxlbWVudCkgPT4ge1xuICAgICAgaWYgKG5ld0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICdkZWxldGVJdGVtJykge1xuICAgICAgICBuZXdFbGVtZW50LmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgfSBlbHNlIGlmIChuZXdFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAnZWRpdFByb2plY3QnKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYXNzaWduVmFsdWVFbGVtZW50cyA9ICgpID0+IHtcbiAgICBsZXQgdXBkYXRlZEl0ZW1zID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB1cGRhdGVkSXRlbXMucHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgbGV0IGVsZW1lbnRDaGlsZHJlbiA9IEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICBlbGVtZW50Q2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICdwcm9qZWN0VG9vbHMnKSB7XG4gICAgICAgICAgY2hpbGRFbGVtZW50LmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgIGFzc2lnblRhc2tBY3Rpb25zKGluZGV4LCBjaGlsZEVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ2FkZFByb2plY3RMYWJlbCcpIHtcbiAgICAgICAgICBjaGlsZEVsZW1lbnQuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ3Byb2plY3RDb250YWluZXInKSB7XG4gICAgICAgICAgY2hpbGRFbGVtZW50LmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgIGxldCBjaGlsZEFycmF5ID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgIGNoaWxkQXJyYXlbMF0uY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaW5kZXgrKztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQcm9qZWN0VGFza3MgPSAoKSA9PiB7XG4gICAgZG9tRWxlbWVudHMgPSBnZXRJbml0aWFsRWxlbWVudHMoKTtcblxuICAgIGRvbUVsZW1lbnRzLnByb2plY3RUYXNrSG9sZGVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNoYW5nZWRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5lZGl0KSB7XG4gICAgICAgIGxldCBlZGl0b3JUZXh0ID0gY3JlYXRlUHJvamVjdEVkaXRvcih0YXNrKTtcbiAgICAgICAgZG9tRWxlbWVudHMucHJvamVjdFRhc2tIb2xkZXIuaW5uZXJIVE1MICs9IGVkaXRvclRleHQ7XG4gICAgICB9IGVsc2UgaWYgKHRhc2submF2VGFzaykge1xuICAgICAgICBsZXQgdGFza1RleHQ7XG4gICAgICAgIHRhc2suaGlnaGxpZ2h0XG4gICAgICAgICAgPyAodGFza1RleHQgPSBjcmVhdGVOYXZUYXNrKHRhc2ssIHRydWUpKVxuICAgICAgICAgIDogKHRhc2tUZXh0ID0gY3JlYXRlTmF2VGFzayh0YXNrKSk7XG4gICAgICAgIGRvbUVsZW1lbnRzLnByb2plY3RUYXNrSG9sZGVyLmlubmVySFRNTCArPSB0YXNrVGV4dDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhc3NpZ25WYWx1ZUVsZW1lbnRzKCk7XG4gICAgYWRkTmF2aWdhdGlvbkJpbmRpbmdzKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyT3ZlcmxheSA9ICgpID0+IHtcbiAgICBpZiAoY2hlY2tQcm9qZWN0RWRpdG9yKCkpIHtcbiAgICAgIGRvbUVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBkb21FbGVtZW50cy53aG9sZU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBhZGRCaW5kaW5ncyhkb21FbGVtZW50cy53aG9sZU92ZXJsYXksIGNyZWF0ZVByb2plY3RUYXNrc0NsaWNrLCAnY2xpY2snKTtcbiAgICAgIGFkZFByb2plY3RCdXR0b25XaG9sZU92ZXJheUJpbmRpbmdzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUVsZW1lbnRzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHJlbW92ZUJpbmRpbmdzKFxuICAgICAgICBkb21FbGVtZW50cy53aG9sZU92ZXJsYXksXG4gICAgICAgIGNyZWF0ZVByb2plY3RUYXNrc0NsaWNrLFxuICAgICAgICAnY2xpY2snXG4gICAgICApO1xuICAgICAgZG9tRWxlbWVudHMud2hvbGVPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICByZW1vdmVQcm9qZWN0V2hvbGVPdmVybGF5QmluZGluZ3MoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlRWRpdG9yID0gKCkgPT4ge1xuICAgIGNoYW5nZWRUYXNrcyA9IGNoYW5nZWRUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZWRpdCAhPSB0cnVlKTtcbiAgICByZW5kZXJPdmVybGF5KCk7XG4gICAgcmVuZGVyUHJvamVjdFRhc2tzKCk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tQcm9qZWN0RWRpdG9yID0gKCkgPT4ge1xuICAgIGxldCBib29sID0gZmFsc2U7XG4gICAgY2hhbmdlZFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLmVkaXQpIGJvb2wgPSB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiBib29sO1xuICB9O1xuICBjb25zdCBkaXNhYmxlUGFnZUNvbnRlbnRFbGVtZW50cyA9ICgpID0+IHtcbiAgICByZW1vdmVOYXZpZ2F0aW9uQmluZGluZ3ModHJ1ZSk7XG4gICAgbGV0IHVwZGF0ZWRFbGVtZW50ID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgaWYgKHVwZGF0ZWRFbGVtZW50LnByb2plY3RCdXR0b24ubGVuZ3RoID09IDApIHJldHVybjtcbiAgICB1cGRhdGVkRWxlbWVudC5wcm9qZWN0QnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2plY3RCdXR0b25Ib3ZlcicpO1xuICAgICAgYnV0dG9uLnN0eWxlLmNvbG9yID0gJ3JnYigxNTcsMTYyLDE3NSknO1xuICAgICAgYnV0dG9uLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICB9KTtcbiAgfTtcblxuICAvL21ha2Ugc3VyZSBkaXNhYmxlUGFnZUNvbnRlbnRFbGVtZW50cyBhbmQgcmVuZGVyT3ZlcmxheSBtZXRob2RzIGFyZSBiZWxvdyByZW5kZXJQcm9qZWN0IHRhc2tzLlxuICAvL1RoaXMgaXMgYmVjYXVzZSByZW5kZXJPdmVybGF5IHdpbGwgb3ZlcndyaXRlIHRoZSBjaGFuZ2VzIGNhdXNpbmcgdGhlIHBhZ2UgdG8gYWN0IHdlcmlkLlxuICBjb25zdCBjcmVhdGVFZGl0b3IgPSAodGV4dCwgaW5kZXgpID0+IHtcbiAgICBsZXQgZWRpdG9yVGV4dCA9ICcnO1xuICAgIGlmICh0eXBlb2YgdGV4dCAhPSAndW5kZWZpbmVkJykgZWRpdG9yVGV4dCA9IHRleHQ7XG5cbiAgICBpZiAoIWNoZWNrUHJvamVjdEVkaXRvcigpKSB7XG4gICAgICB0eXBlb2YgaW5kZXggIT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyAoY2hhbmdlZFRhc2tzID0gYWRkSXRlbShjaGFuZ2VkVGFza3MsIGluZGV4LCB7XG4gICAgICAgICAgICBlZGl0OiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IGVkaXRvclRleHQsXG4gICAgICAgICAgfSkpXG4gICAgICAgIDogY2hhbmdlZFRhc2tzLnB1c2goeyBlZGl0OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHJlbmRlckhpZ2hsaWdodEVsZW1lbnRzKCk7XG4gICAgcmVuZGVyUHJvamVjdFRhc2tzKCk7XG5cbiAgICBkaXNhYmxlUGFnZUNvbnRlbnRFbGVtZW50cygpO1xuICAgIHJlbmRlck92ZXJsYXkoKTtcblxuICAgIGNvbnRlbnQucmVtb3ZlVGFza0JpbmRpbmdzKCk7XG4gIH07XG5cbiAgY29uc3QgYWN0aXZhdGVVcENvbWluZ1Rhc2sgPSAoKSA9PiB7XG4gICAgY29udGVudC5hY3RpdmF0ZUNvbnRlbnQoJ3VwY29taW5nJyk7XG4gICAgc2V0SGlnaGxpZ2h0SW5kZXgoJ3VwY29taW5nJyk7XG4gICAgcmVuZGVySGlnaGxpZ2h0RWxlbWVudHMoKTtcbiAgICByZW5kZXJQcm9qZWN0VGFza3MoKTtcbiAgfTtcblxuICBjb25zdCBhY3RpdmF0ZVByb2plY3RUYXNrID0gKCkgPT4ge1xuICAgIGNyZWF0ZUVkaXRvcigpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZWRUaXRsZXNUb1Rhc2tzID0gKHRpdGxlcykgPT4ge1xuICAgIGxldCBuZXdUYXNrcyA9IFtdO1xuICAgIGxldCB0aXRsZUFycmF5ID0gT2JqZWN0LnZhbHVlcyh0aXRsZXMpO1xuICAgIHRpdGxlQXJyYXkuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICAgIGxldCB0YXNrID0geyBuYXZUYXNrOiB0cnVlLCB0YXNrOiB0aXRsZSwgaGlnaGxpZ2h0OiBmYWxzZSB9O1xuICAgICAgbmV3VGFza3MucHVzaCh0YXNrKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdUYXNrcztcbiAgfTtcblxuICAvLyB3aGVuIGRvbSBpcyBjYWxsZWQgaXQgd2lsbCBjcmVhdGUgdGhlIGRlZmF1bHQgZWxlbWVudHNcbiAgY29uc3QgYWN0aXZhdGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnRlbnQgPSBjb250ZW50TWVudTtcbiAgICBkb21FbGVtZW50cyA9IGdldEluaXRpYWxFbGVtZW50cygpO1xuICAgIHVwY29taW5nQnV0dG9uID0gZG9tRWxlbWVudHMudXBDb21pbmdCdXR0b247XG4gICAgYWRkQmluZGluZ3MoZG9tRWxlbWVudHMucHJvamVjdEFkZGVyLCBhY3RpdmF0ZVByb2plY3RUYXNrLCAnY2xpY2snKTtcbiAgICBhZGRCaW5kaW5ncyhkb21FbGVtZW50cy51cENvbWluZ0J1dHRvbiwgYWN0aXZhdGVVcENvbWluZ1Rhc2ssICdjbGljaycpO1xuICAgIGFkZEJpbmRpbmdzKHVwY29taW5nQnV0dG9uLCBoaWdobGlnaHRVcENvbWluZ0J1dHRvbiwgJ21vdXNlb3ZlcicpO1xuICAgIGFkZEJpbmRpbmdzKHVwY29taW5nQnV0dG9uLCB1bmhvdmVyVXBDb21pbmdCdXR0b24sICdtb3VzZWxlYXZlJyk7XG5cbiAgICBsZXQgc3RvcmVkRGF0YSA9IHN0b3JhZ2UucmV0cmlldmVEYXRhKCk7XG5cbiAgICBpZiAoc3RvcmVkRGF0YSkge1xuICAgICAgbGV0IG5ld1Rhc2tzID0gY2hhbmdlZFRpdGxlc1RvVGFza3Moc3RvcmVkRGF0YS5mb3JtYXRlZFRpdGxlcyk7XG4gICAgICBzdGF0aWNUYXNrcyA9IHNldEFycmF5KG5ld1Rhc2tzKTtcbiAgICAgIGNoYW5nZWRUYXNrcyA9IHNldEFycmF5KG5ld1Rhc2tzKTtcblxuICAgICAgc2VuZC5vdmVyd3JpdGVEYXRhKHN0b3JlZERhdGEuZm9ybWF0ZWREYXRhKTtcbiAgICAgIHNlbmQub3ZlcndyaXRlVGl0bGVzKHN0b3JlZERhdGEuZm9ybWF0ZWRUaXRsZXMpO1xuICAgICAgaGlnaGxpZ2h0ZWRJbmRleCA9IHN0b3JhZ2UucmV0cmlldmVIaWdobGlnaHRJbmRleCgpO1xuXG4gICAgICByZW5kZXJQcm9qZWN0VGFza3MoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVOYXZpZ2F0aW9uLFxuICAgIHJlbW92ZU5hdmlnYXRpb25CaW5kaW5ncyxcbiAgICBhZGROYXZpZ2F0aW9uQmluZGluZ3MsXG4gICAgYWN0aXZhdGVQcm9qZWN0VGFzayxcbiAgICByZW1vdmVTcGVjaWFsTW9iaWxlQmluZGluZ3MsXG4gICAgY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2ssXG4gICAgY3JlYXRlUHJvamVjdFRhc2tzS2V5cyxcbiAgICByZW5kZXJPdmVybGF5LFxuICAgIHJlbW92ZUVkaXRvcixcbiAgfTtcbn07XG5cbmxldCBuYXZpZ2F0aW9uID0gbmF2KCk7XG5cbmV4cG9ydCB7IG5hdmlnYXRpb24gfTtcbiIsImNvbnN0IGNyZWF0ZURvbUVsZW1lbnRzID0gKCkgPT4ge1xuICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgbGV0IHBhZ2VUZXh0ID0gYCAgICA8ZGl2IGNsYXNzID0gXCJjb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcyA9IFwid2hvbGVPdmVybGF5XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcyA9IFwiZXJyb3JNZXNzYWdlXCI+XG4gICAgPGRpdiBjbGFzcyA9IFwibWVzc2FnZUhvbGRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb250ZW50SG9sZGVyXCI+XG4gICAgICAgICAgICA8aDI+RXJyb3I8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3MgPSBcImVycm9yTWVzc2FnZVRleHRcIj5UZXh0IENhbm5vdCBiZSBvdmVyIDEwIGNocmFjdGVyczwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImV4aXRCdXR0b25cIj5FeGl0PC9idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuXG48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJtb2JpbGVNZW51XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3MgPSBcImhhbWJ1cmdlck1lbnVcIj48L2J1dHRvbj5cbiAgICAgICAgPGgyIGNsYXNzID0gXCJtb2JpbGVNZW51VGl0bGVcIj5UbyBEbyBMaXN0PC9oMj5cblxuICAgIDwvZGl2PiBcbiAgICA8ZGl2IGNsYXNzID0gXCJzZWN0aW9uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJvdmVybGF5XCI+Y3VycmVudCBvdmVybGF5PC9kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3MgPSBcImV4aXRcIj5YPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVsZW1lbnRzXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcyA9IFwibGlzdFRpdGxlXCIgPlRvIERvIExpc3Q8L2gxPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidXBDb21pbmdCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VXBjb21pbmc8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3RBZGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcInByb2plY3RUZXh0XCI+UHJvamVjdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwicGx1c1NpZ25cIj4rPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0VGFza0hvbGRlclwiPjwvZGl2PlxuXG5cblxuXG4gXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInBhZ2VDb250ZW50XCI+IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+YDtcblxuICBib2R5LmlubmVySFRNTCA9IHBhZ2VUZXh0O1xufTtcblxuY29uc3QgZ2V0SW5pdGlhbEVsZW1lbnRzID0gKCkgPT4ge1xuICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9ucycpO1xuICBsZXQgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XG4gIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgbGV0IGV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdCcpO1xuICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHMnKTtcbiAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0VGl0bGUnKTtcbiAgbGV0IHVwQ29taW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwQ29taW5nQnV0dG9uJyk7XG4gIGxldCBwcm9qZWN0QWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEFkZGVyJyk7XG4gIGxldCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGV4dCcpO1xuICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1c1NpZ24nKTtcbiAgbGV0IHByb2plY3RUYXNrSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RUYXNrSG9sZGVyJyk7XG4gIGxldCBlZGl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0UHJvamVjdEJ1dHRvbicpO1xuICBsZXQgZWRpdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRleHQnKTtcbiAgbGV0IGFkZFByb2plY3RMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0TGFiZWwnKTtcbiAgbGV0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VDb250ZW50Jyk7XG4gIGxldCB3aG9sZU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2hvbGVPdmVybGF5Jyk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JNZXNzYWdlJyk7XG4gIGxldCBlcnJvck1lc3NhZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yTWVzc2FnZVRleHQnKTtcbiAgbGV0IGV4aXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdEJ1dHRvbicpO1xuXG4gIGxldCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlck1lbnUnKTtcbiAgbGV0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlTWVudScpO1xuXG4gIHJldHVybiB7XG4gICAgc2VjdGlvbixcbiAgICBuYXZpZ2F0aW9uLFxuICAgIG92ZXJsYXksXG4gICAgZXhpdCxcbiAgICBlbGVtZW50cyxcbiAgICBsaXN0VGl0bGUsXG4gICAgdXBDb21pbmdCdXR0b24sXG4gICAgcHJvamVjdEFkZGVyLFxuICAgIHByb2plY3RUZXh0LFxuICAgIHBsdXNTaWduLFxuICAgIHByb2plY3RUYXNrSG9sZGVyLFxuICAgIGVkaXRQcm9qZWN0QnV0dG9uLFxuICAgIGVkaXRUZXh0LFxuICAgIGFkZFByb2plY3RMYWJlbCxcbiAgICBwYWdlQ29udGVudCxcbiAgICB3aG9sZU92ZXJsYXksXG4gICAgZXhpdEJ1dHRvbixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgZXJyb3JNZXNzYWdlVGV4dCxcbiAgICBoYW1idXJnZXJNZW51LFxuICAgIG1vYmlsZU1lbnUsXG4gIH07XG59O1xuXG5jb25zdCBnZXRVcGRhdGVkRWxlbWVudHMgPSAoKSA9PiB7XG4gIGxldCBib2FyZFRleHRCb3ggPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkZEJvYXJkZXJUZXh0Qm94JylcbiAgKTtcbiAgbGV0IGJvYXJkZXJCdXR0b24gPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FkZEJvYXJkZXJCdXR0b24nKVxuICApO1xuICBsZXQgZWRpdEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0UHJvamVjdCcpKTtcbiAgbGV0IGRlbGV0ZUl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGVJdGVtJykpO1xuICBsZXQgcHJvamVjdENvbnRhaW5lclRleHQgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RDb250YWluZXJUZXh0JylcbiAgKTtcbiAgbGV0IHByb2plY3RDb250YWluZXIgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RDb250YWluZXInKVxuICApO1xuICBsZXQgYWRkUHJvamVjdExhYmVscyA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWRkUHJvamVjdExhYmVsJylcbiAgKTtcbiAgbGV0IHByb2plY3RCdXR0b24gPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RCdXR0b24nKVxuICApO1xuXG4gIGxldCBwcm9qZWN0VGFza0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0VGFza0hvbGRlcicpO1xuXG4gIGxldCBwcm9qZWN0VGFza0hvbGRlckNoaWxkcmVuID0gQXJyYXkuZnJvbShwcm9qZWN0VGFza0hvbGRlci5jaGlsZHJlbik7XG5cbiAgbGV0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VDb250ZW50Jyk7XG4gIGxldCBwYWdlQ29udGVudENoaWxkcmVuID0gQXJyYXkuZnJvbShwYWdlQ29udGVudC5jaGlsZHJlbik7XG5cbiAgbGV0IGNoYW5nZUJvYXJkVGl0bGVCdXR0b25zID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGFuZ2VCb2FyZFRpdGxlQnV0dG9uJylcbiAgKTtcblxuICBsZXQgZGVsZXRlQm9hcmQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlbGV0ZUJvYXJkJykpO1xuICBsZXQgZWRpdEJvYXJkID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0Qm9hcmQnKSk7XG4gIGxldCB0YXNrSG9sZGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza0hvbGRlcicpKTtcbiAgbGV0IHRhc2tMaXN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza0xpc3RzJykpO1xuICBsZXQgYm9hcmRDb250ZW50VGV4dEJveCA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmR0ZXh0Qm94JylcbiAgKTtcbiAgbGV0IGJvYXJkT3ZlcmxheSA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9hcmRPdmVybGF5JylcbiAgKTtcbiAgbGV0IHRhc2tBZGRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2tBZGRlcicpKTtcblxuICBsZXQgZXhhbXBsZUJvYXJkVGV4dCA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXhhbXBsZUJvYXJkVGV4dCcpXG4gICk7XG4gIGxldCBidXR0b24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1dHRvbicpKTtcblxuICBsZXQgdHJhc2hJdCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHJhc2hJdCcpKTtcbiAgbGV0IGZpbmlzaGVkID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaW5pc2hlZCcpKTtcblxuICBsZXQgdGFza1RleHRCb3ggPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2tUZXh0Qm94JykpO1xuICBsZXQgZGF0ZVBpY2tlciA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGF0ZVBpY2tlcicpKTtcblxuICBsZXQgY2lyY2xlSWNvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2lyY2xlSWNvbicpKTtcbiAgbGV0IGVkaXQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXQnKSk7XG4gIGxldCBkYXRlVG9vbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGVUb29sJykpO1xuXG4gIGxldCBleGl0RWRpdG9yID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdleGl0RWRpdG9yJykpO1xuXG4gIHJldHVybiB7XG4gICAgZWRpdEl0ZW1zLFxuICAgIGRlbGV0ZUl0ZW1zLFxuICAgIGFkZFByb2plY3RMYWJlbHMsXG4gICAgcHJvamVjdEJ1dHRvbixcbiAgICBwcm9qZWN0VGFza0hvbGRlckNoaWxkcmVuLFxuICAgIHByb2plY3RDb250YWluZXJUZXh0LFxuICAgIGJvYXJkVGV4dEJveCxcbiAgICBib2FyZGVyQnV0dG9uLFxuICAgIGRlbGV0ZUJvYXJkLFxuICAgIGVkaXRCb2FyZCxcbiAgICBwYWdlQ29udGVudCxcbiAgICBwYWdlQ29udGVudENoaWxkcmVuLFxuICAgIHRhc2tIb2xkZXJzLFxuICAgIGV4YW1wbGVCb2FyZFRleHQsXG4gICAgY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbnMsXG4gICAgYm9hcmRDb250ZW50VGV4dEJveCxcbiAgICBib2FyZE92ZXJsYXksXG4gICAgdGFza0xpc3RzLFxuICAgIHRhc2tBZGRlcnMsXG4gICAgYnV0dG9uLFxuICAgIHRyYXNoSXQsXG4gICAgZmluaXNoZWQsXG4gICAgdGFza1RleHRCb3gsXG4gICAgZGF0ZVBpY2tlcixcbiAgICBjaXJjbGVJY29uLFxuICAgIGVkaXQsXG4gICAgZGF0ZVRvb2xzLFxuICAgIGV4aXRFZGl0b3IsXG4gICAgcHJvamVjdENvbnRhaW5lcixcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGdldEluaXRpYWxFbGVtZW50cywgY3JlYXRlRG9tRWxlbWVudHMsIGdldFVwZGF0ZWRFbGVtZW50cyB9O1xuIiwiLy9cbmltcG9ydCB7c2V0T2JqZWN0fSBmcm9tIFwiLi9lbGVtZW50RXZlbnRzLmpzXCI7XG5cbmNvbnN0IHNlbmQgPSAoXG4gICAgKCkgPT4ge1xuICAgICAgICBsZXQgaXRlbXMgPSB7fTtcbiAgICAgICAgbGV0IHRpdGxlSXRlbXMgPSB7fVxuICAgICAgICBpdGVtcy51cGNvbWluZyA9IFtdXG5cbiAgICAgICAgY29uc3Qgc2VuZERhdGEgPSAoZGF0YSxpbmRleCx0aXRsZSkgPT4ge1xuICAgICAgICAgICAgaXRlbXNbaW5kZXhdID0gZGF0YTtcbiAgICAgICAgICAgIHRpdGxlSXRlbXNbaW5kZXhdID0gdGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZW5kTmFtZSA9IChpbmRleCwgdGl0bGUpID0+IHtcbiAgICAgICAgICAgIHRpdGxlSXRlbXNbaW5kZXhdID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgcmV0cmlldmVEYXRhID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaW5kZXhdKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbaW5kZXhdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IHJldHJpZXZlVGl0bGUgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aXRsZUl0ZW1zW2luZGV4XSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpdGxlSXRlbXNbaW5kZXhdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXRyaWV2ZVRpdGxlcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzZXRPYmplY3QodGl0bGVJdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdmVyd3JpdGVUaXRsZXMgPSAodGl0bGVzKSA9PiB7XG4gICAgICAgICAgICB0aXRsZUl0ZW1zID0gIHRpdGxlc1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBvdmVyd3JpdGVEYXRhID0gKGRhdGEpID0+IHsgXG4gICAgICAgICAgICBpdGVtcyA9IGRhdGE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGdldEFsbERhdGEgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2V0T2JqZWN0KGl0ZW1zKTtcbiAgICAgICAgfVxuIFxuICAgICAgICBjb25zdCBkZWxldGVOYW1lID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VGl0bGVzID0gdGl0bGVJdGVtcztcbiAgICAgICAgICAgIGxldCBuZXdUaXRsZUtleXMgPSBPYmplY3Qua2V5cyhuZXdUaXRsZXMpO1xuICAgICAgICAgICAgbGV0IGZpbmFsVGl0bGVzID0ge31cbiAgICAgICAgICAgIG5ld1RpdGxlS2V5cyA9IG5ld1RpdGxlS2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPSBpbmRleCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDxuZXdUaXRsZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmaW5hbFRpdGxlc1tpXSA9IG5ld1RpdGxlc1tuZXdUaXRsZUtleXNbaV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmluYWxUaXRsZXM7XG5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBjb25zdCBkZWxldGVEYXRhID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aXRsZUl0ZW1zID0gZGVsZXRlTmFtZShpbmRleCk7XG4gICAgICAgICAgICBsZXQgbmV3SXRlbXMgPSBzZXRPYmplY3QoaXRlbXMpO1xuICAgICAgICAgICAgbGV0IG5ld0l0ZW1zS2V5cyA9IE9iamVjdC5rZXlzKG5ld0l0ZW1zKTtcbiAgICAgICAgICAgIG5ld0l0ZW1zS2V5cyA9IG5ld0l0ZW1zS2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPSBpbmRleCk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5ld2VySXRlbXMgPSB7fTtcbiAgICAgICAgICAgIG5ld0l0ZW1zS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3ZXJJdGVtc1trZXldID0gbmV3SXRlbXNba2V5XTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGl0ZW1zID0gbmV3ZXJJdGVtcztcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge3NlbmREYXRhLCByZXRyaWV2ZURhdGEscmV0cmlldmVUaXRsZSwgXG4gICAgICAgICAgICBkZWxldGVEYXRhLCBnZXRBbGxEYXRhLCBvdmVyd3JpdGVEYXRhLCBcbiAgICAgICAgICAgIHNlbmROYW1lLCByZXRyaWV2ZVRpdGxlcywgb3ZlcndyaXRlVGl0bGVzfTtcblxuICAgIH1cbikoKVxuXG5leHBvcnQge3NlbmR9OyIsImltcG9ydCB7IHNlbmQgfSBmcm9tICcuL3NlbmQuanMnO1xuaW1wb3J0IHsgc2V0T2JqZWN0IH0gZnJvbSAnLi9lbGVtZW50RXZlbnRzLmpzJztcblxuY29uc3QgZGF0YVN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlRGF0YSA9ICgpID0+IHtcbiAgICBsZXQgZGF0YSA9IHNlbmQuZ2V0QWxsRGF0YSgpO1xuICAgIGxldCB0aXRsZXMgPSBzZW5kLnJldHJpZXZlVGl0bGVzKCk7XG4gICAgbGV0IG5ld0RhdGEgPSB0dXJuRGF0YUludG9Gb3JtYXQoZGF0YSk7XG4gICAgbGV0IG5ld1RpdGxlcyA9IHNldE9iamVjdCh0aXRsZXMpO1xuICAgIGxldCBqc29uVGl0bGVzID0gSlNPTi5zdHJpbmdpZnkobmV3VGl0bGVzKTtcbiAgICBsZXQganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeShuZXdEYXRhKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywganNvbkRhdGEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aXRsZXMnLCBqc29uVGl0bGVzKTtcbiAgfTtcblxuICBjb25zdCByZXRyaWV2ZURhdGEgPSAoKSA9PiB7XG4gICAgbGV0IHJldHJpZXZlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpO1xuICAgIGxldCByZXRyaWV2ZWRUaXRsZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGl0bGVzJyk7XG4gICAgaWYgKHJldHJpZXZlZERhdGEgPT0gbnVsbCB8fCByZXRyaWV2ZWRUaXRsZXMgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IHJhd0RhdGEgPSBKU09OLnBhcnNlKHJldHJpZXZlZERhdGEpO1xuICAgIGxldCBmb3JtYXRlZFRpdGxlcyA9IEpTT04ucGFyc2UocmV0cmlldmVkVGl0bGVzKTtcbiAgICBsZXQgZm9ybWF0ZWREYXRhID0gZm9ybWF0RGF0YShyYXdEYXRhKTtcblxuICAgIHJldHVybiB7IGZvcm1hdGVkRGF0YSwgZm9ybWF0ZWRUaXRsZXMgfTtcbiAgfTtcblxuICBjb25zdCBzdG9yZUhpZ2hsaWdoSW5kZXggPSAoaW5kZXgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaGxpZ2h0SW5kZXgnLCBpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgcmV0cmlldmVIaWdobGlnaHRJbmRleCA9ICgpID0+IHtcbiAgICBsZXQgaGlnaGxpZ2h0SW5kZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaGxpZ2h0SW5kZXgnKTtcbiAgICByZXR1cm4gaGlnaGxpZ2h0SW5kZXg7XG4gIH07XG5cbiAgY29uc3QgYWRkRGF0ZXNUb1Rhc2tzID0gKHRhc2tzKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tzID0gc2V0T2JqZWN0KHRhc2tzLCB0cnVlKTtcblxuICAgIG5ld1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGxldCBkYXRlcyA9IHRhc2suZGF0ZXM7XG4gICAgICB0YXNrLmRhdGUgPSBuZXcgRGF0ZShkYXRlc1swXSwgZGF0ZXNbMV0sIGRhdGVzWzJdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3VGFza3M7XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0RGF0YSA9IChkYXRhKSA9PiB7XG4gICAgbGV0IG5ld0RhdGFLZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gICAgbGV0IG5ld0RhdGEgPSBzZXRPYmplY3QoZGF0YSk7XG5cbiAgICBuZXdEYXRhS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgIT0gJ3VwY29taW5nJykge1xuICAgICAgICBuZXdEYXRhW2tleV0uZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICAgICAgICBib2FyZC5jaGFuZ2VkQm9hcmRMaXN0cyA9IFtdO1xuICAgICAgICAgIGJvYXJkLnRhc2tzID0gYWRkRGF0ZXNUb1Rhc2tzKGJvYXJkLnRhc2tzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdEYXRhW2tleV0gPSBhZGREYXRlc1RvVGFza3MobmV3RGF0YVtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdEYXRhO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZURhdGUgPSAodGFzaykgPT4ge1xuICAgIGxldCB0YXNrS2V5cyA9IE9iamVjdC5rZXlzKHRhc2spO1xuICAgIHRhc2tLZXlzID0gdGFza0tleXMuZmlsdGVyKChrZXkpID0+IGtleSAhPSAnZGF0ZScpO1xuICAgIGxldCBuZXdUYXNrID0ge307XG5cbiAgICB0YXNrS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIG5ld1Rhc2tba2V5XSA9IHRhc2tba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3VGFzaztcbiAgfTtcblxuICBjb25zdCByZW1vdmVEYXRlT2JqZWN0cyA9IChib2FyZCkgPT4ge1xuICAgIGJvYXJkLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2sgPSByZW1vdmVEYXRlKHRhc2spO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHR1cm5EYXRhSW50b0Zvcm1hdCA9IChkYXRhKSA9PiB7XG4gICAgbGV0IG5ld0RhdGEgPSBzZXRPYmplY3QoZGF0YSk7XG4gICAgbGV0IG5ld0RhdGFLZXlzID0gT2JqZWN0LmtleXMobmV3RGF0YSk7XG5cbiAgICBuZXdEYXRhS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgIT0gJ3VwY29taW5nJykge1xuICAgICAgICBuZXdEYXRhW2tleV0uZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICAgICAgICBsZXQgYm9hcmRLZXlzID0gT2JqZWN0LmtleXMoYm9hcmQpO1xuICAgICAgICAgIGJvYXJkS2V5cyA9IGJvYXJkS2V5cy5maWx0ZXIoKGtleSkgPT4ga2V5ICE9ICdjaGFuZ2VkQm9hcmRUYXNrcycpO1xuXG4gICAgICAgICAgbGV0IG5ld0JvYXJkID0ge307XG4gICAgICAgICAgYm9hcmRLZXlzLmZvckVhY2goKGtleSkgPT4gKG5ld0JvYXJkW2tleV0gPSBib2FyZFtrZXldKSk7XG4gICAgICAgICAgYm9hcmQgPSBuZXdCb2FyZDtcbiAgICAgICAgICBib2FyZCA9IHJlbW92ZURhdGVPYmplY3RzKGJvYXJkKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdEYXRhW2tleV0uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgIHRhc2sgPSByZW1vdmVEYXRlKHRhc2spO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHN0b3JlRGF0YSxcbiAgICByZXRyaWV2ZURhdGEsXG4gICAgc3RvcmVIaWdobGlnaEluZGV4LFxuICAgIHJldHJpZXZlSGlnaGxpZ2h0SW5kZXgsXG4gIH07XG59O1xuXG5sZXQgc3RvcmFnZSA9IGRhdGFTdG9yYWdlKCk7XG5cbmV4cG9ydCB7IHN0b3JhZ2UgfTtcbiIsIlxuaW1wb3J0IHRyYXNoSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy90cmFzaC5zdmdcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2VkaXRPZmYuc3ZnXCI7XG5pbXBvcnQgY2hlY2tNYXJrSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2ZpbmlzaGVkLnN2Z1wiO1xuaW1wb3J0IGV4aXRJY29uIGZyb20gXCIuLi9pbWFnZXMvZXhpdC5zdmdcIjtcblxuXG4gICBcbiAgIFxuICAgY29uc3QgY3JlYXRlVGFza0FycmFuZ2VtZW50ID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IGNvbG9yO1xuICAgICAgICBsZXQgdGFza0NsYXNzID0gXCJ0YXNrXCI7XG4gICAgICAgIGxldCBlZGl0Q2xhc3MgPSBcImVkaXRcIjtcbiAgICAgICAgbGV0IGNpcmNsZUljb25CYWNrZ3JvdW5kID0gXCJub25lXCI7XG4gICAgICAgIGxldCBwcm9qZWN0VHlwZVRleHQgPSBcIlwiXG5cblxuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PSBcIkhpZ2hcIikgY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PSBcIkxvd1wiKSBjb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJNZWRpdW1cIikgY29sb3IgPSBcIiNmZjk4MDBcIlxuICAgICAgICBpZiAodGFzay5uYXZOYW1lKSB7XG4gICAgICAgICAgICBwcm9qZWN0VHlwZVRleHQgPSBgIDxwIGNsYXNzPVwiZ2VuZXJhbFRleHQgcHJvamVjdFR5cGVUZXh0XCI+IFByb2plY3Q6ICR7dGFzay5uYXZOYW1lfTwvcD5gXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRhc2tDbGFzcyA9IFwibm90VGFza1wiO1xuICAgICAgICAgICAgZWRpdENsYXNzID0gXCJub3RFZGl0XCJcbiAgICAgICAgICAgIGNpcmNsZUljb25CYWNrZ3JvdW5kID0gXCJibGFja1wiO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgbmV3VGFza1RleHQgPSBgPGRpdiBjbGFzcz1cIiR7dGFza0NsYXNzfVwiIHN0eWxlID0gXCJib3JkZXItY29sb3I6JHtjb2xvcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2tMYWJlbFwiPiR7dGFzay50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1Rvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZW5lcmFsVGV4dEhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJnZW5lcmFsVGV4dFwiPkR1ZTogJHt0YXNrLmRhdGVUZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZ2VuZXJhbFRleHRcIj5Qcmlvcml0eTogJHt0YXNrLnByaW9yaXR5fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCIke2VkaXRDbGFzc31cIiBzcmM9XCIke2VkaXRJY29ufVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZUljb25cIiBzdHlsZSA9IFwiYmFja2dyb3VuZDoke2NpcmNsZUljb25CYWNrZ3JvdW5kfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdFR5cGVUZXh0fSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tUZXh0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGxldCB0ZXh0ID0gdGVtcGxhdGUudGV4dDtcbiAgICAgICAgbGV0IGJvYXJkVGV4dCA9IGAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJib2FyZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJlZGl0RXhhbXBsZUljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3MgPVwiZGVsZXRlQm9hcmRcIiAgc3JjPVwiJHt0cmFzaEltYWdlfVwiIGFsdD1cInRyYXNoIGljb24gZm9yIGRlbGV0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3MgPSBcImVkaXRCb2FyZFwiIHNyYz1cIiR7ZWRpdEljb259XCIgYWx0PVwiZWRpdGluZyBpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJleGFtcGxlQm9hcmRUZXh0XCI+JHt0ZXh0fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidGFza0xpc3RzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidGFza0FkZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPisgQWRkIFRhc2s8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICByZXR1cm4gYm9hcmRUZXh0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVVwQ29taW5nQm9hcmQgPSAodGFzaykgPT4ge1xuXG5cbiAgICAgICAgbGV0IGJvYXJkVGV4dCA9IGA8ZGl2IGNsYXNzID0gXCJib2FyZENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJib2FyZE92ZXJsYXlcIj48L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJleGFtcGxlQm9hcmRUZXh0XCI+JHt0YXNrLnRleHR9PC9oMj4gICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tMaXN0c1wiPjwvZGl2PiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0YXNrQWRkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rIEFkZCBUYXNrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIGJvYXJkVGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVBZGRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFkZEJvYXJkVGV4dCA9IGA8ZGl2IGNsYXNzID0gXCJib2FyZENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYWRkQm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVtcHR5cm93XCI+ZW1wdHkgcm93PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcImFkZEJvYXJkVGV4dFwiPkFkZCBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImFkZEJvYXJkZXJUZXh0Qm94XCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImFkZEJvYXJkZXJCdXR0b25cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICByZXR1cm4gYWRkQm9hcmRUZXh0O1xuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlQm9hcmRFZGl0b3IgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0YXNrLnRleHQ7XG4gICAgICAgIFxuICAgICAgICBsZXQgYm9hcmRUZXh0ID0gYDxkaXYgY2xhc3MgPSBcImJvYXJkVGV4dEVkaXRvclwiPlxuICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImJvYXJkdGV4dEJveFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWUgPSBcIiR7dmFsdWV9XCI+XG4gICAgICAgIDxwIGNsYXNzID0gXCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9uXCI+KzwvcD5cbiAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBib2FyZFRleHQ7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjcmVhdGVMaXN0RWRpdG9yID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IGRlZmF1bHRDb2xvciA9IFwiYmx1ZVwiXG4gICAgICAgIGxldCBpY29uID0gdHJhc2hJbWFnZTtcbiAgICAgICAgbGV0IGljb25DbGFzcyA9IFwidHJhc2hJdFwiO1xuXG4gICAgICAgIGlmICh0YXNrLmNyZWF0aW5nVGFzaykge1xuICAgICAgICAgICAgZGVmYXVsdENvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgaWNvbiA9IGV4aXRJY29uO1xuICAgICAgICAgICAgaWNvbkNsYXNzID0gXCJleGl0RWRpdG9yXCJcblxuICAgICAgICB9XG4gICAgICAgIGxldCB0ZXh0ID0gdGFzay50ZXh0O1xuXG5cbiAgICAgICAgbGV0IGxpc3RUZXh0ID0gYDxkaXYgY2xhc3MgPSBcInRhc2tFZGl0b3JcIiBzdHlsZSA9IFwiYm9yZGVyLWNvbG9yOiR7ZGVmYXVsdENvbG9yfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tIb2xkZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwidGFza0hvbGRlclRleHRcIj5UaXRsZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcyA9IFwidGFza1RleHRCb3hcIiB0eXBlPVwidGV4dFwiIHZhbHVlID0gXCIke3RleHR9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImRhdGVUb29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwiZGF0ZVRleHRcIj5EYXRlOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImRhdGVQaWNrZXJcIiB0eXBlPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZWRpdFRvb2xIb2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByaW9yaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImJ1dHRvblRleHRcIj5Qcmlvcml0eTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJidXR0b24gaGlnaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImhpZ2hUZXh0XCI+SGlnaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1dHRvbiBtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJtZWRpdW1UZXh0XCI+TWVkaXVtPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYnV0dG9uIGxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImxvd1RleHRcIj5Mb3c8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZWRpdFRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCIke2ljb25DbGFzc31cIiBzcmM9XCIke2ljb259XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCJmaW5pc2hlZFwiIHNyYz1cIiR7Y2hlY2tNYXJrSWNvbn1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCAgXG4gICAgcmV0dXJuIGxpc3RUZXh0O1xuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlTmF2VGFzayA9ICh0YXNrLCBoaWdobGlnaHRlZCkgPT4ge1xuICAgICAgICBsZXQgc3R5bGVUZXh0ID0gJydcbiAgICAgICAgaWYgKGhpZ2hsaWdodGVkKSBzdHlsZVRleHQgPSAnc3R5bGUgPSBcImJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcIiAnXG5cbiAgICAgICAgbGV0IHRhc2tUZXh0ID0gYDxkaXYgY2xhc3MgID0gXCJwcm9qZWN0QnV0dG9uIHByb2plY3RCdXR0b25Ib3ZlclwiICR7c3R5bGVUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0VG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGNsYXNzID0gXCJkZWxldGVJdGVtXCIgc3JjPVwiJHt0cmFzaEltYWdlfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9IFwiZWRpdFByb2plY3RcIiBzcmM9XCIke2VkaXRJY29ufVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInByb2plY3RDb250YWluZXJUZXh0XCI+JHt0YXNrLnRhc2t9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiB0YXNrVGV4dDtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RFZGl0b3IgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlLnZhbHVlICE9IFwidW5kZWZpbmVkXCIpIHRleHQgPSB0ZW1wbGF0ZS52YWx1ZTtcblxuICAgICAgICBsZXQgZWRpdG9yVGV4dCA9IGAgPGRpdiBjbGFzcyA9IFwiZWRpdFByb2plY3RCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImVkaXRUZXh0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7dGV4dH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwiYWRkUHJvamVjdExhYmVsXCI+ICs8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBlZGl0b3JUZXh0O1xuICAgIH1cblxuXG5leHBvcnQge2NyZWF0ZU5hdlRhc2ssY3JlYXRlQm9hcmQsIGNyZWF0ZUFkZEJvYXJkLCBjcmVhdGVCb2FyZEVkaXRvciwgY3JlYXRlTGlzdEVkaXRvciwgY3JlYXRlVXBDb21pbmdCb2FyZCwgY3JlYXRlUHJvamVjdEVkaXRvciwgY3JlYXRlVGFza0FycmFuZ2VtZW50fSIsImltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknXG5pbXBvcnQgaXNUaGlzV2VlayBmcm9tICdkYXRlLWZucy9pc1RoaXNXZWVrJ1xuXG5pbXBvcnQge3NvcnREYXRlc0J5TGF0ZXN0RGF5fSBmcm9tIFwiLi91dGlsaXRpZXMuanNcIlxuXG5cbmltcG9ydCAge3NlbmR9IGZyb20gXCIuL3NlbmQuanNcIlxuaW1wb3J0IHtzZXRPYmplY3R9IGZyb20gXCIuL2VsZW1lbnRFdmVudHMuanNcIlxuXG4gICAgY29uc3QgY3JlYXRlVXBDb21pbmdUZW1wbGF0ZSA9IChjdXJyZW50VGV4dCwgdGFza3MpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrcyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIHRhc2tzICE9IFwidW5kZWZpbmVkXCIpIGN1cnJlbnRUYXNrcyA9IHRhc2tzOyBcbiAgICBcbiAgICAgICAgbGV0IGJvYXJkID0ge2lzVXBDb21pbmdCb2FyZDogdHJ1ZSx0ZXh0OmN1cnJlbnRUZXh0LCB0YXNrczogY3VycmVudFRhc2tzLCBjaGFuZ2VkQm9hcmRMaXN0czogW10sIH07XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICBcbiAgICBcbiAgICB9XG5cbiAgICBjb25zdCBhZGRVcENvbWluZ0JvYXJkcyA9IChhcnJheSkgPT4ge1xuICAgICAgICBsZXQgbmV3QXJyYXkgPSBhcnJheTtcbiAgICAgICAgbGV0IHRvZGF5Qm9hcmQgPSBjcmVhdGVVcENvbWluZ1RlbXBsYXRlKFwiVG9kYXlcIiwgW10pO1xuICAgICAgICBsZXQgd2Vla0JvYXJkID0gY3JlYXRlVXBDb21pbmdUZW1wbGF0ZShcIldlZWtcIixbXSk7XG4gICAgICAgIGxldCB0aW1lQm9hcmRzID0gW3RvZGF5Qm9hcmQsd2Vla0JvYXJkXTtcbiAgICAgICAgdGltZUJvYXJkcy5mb3JFYWNoKGJvYXJkID0+IG5ld0FycmF5LnB1c2goYm9hcmQpKTtcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBnZXRUaW1lVXBjb21pbmdWYWx1ZXMgPSAobmF2cyxrZXksdG9kYXlUYXNrcywgd2Vla1Rhc2tzKSA9PiB7XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSAwO1xuICAgIFxuICAgICAgICBuYXZzW2tleV0uZm9yRWFjaCh0YXNrID0+IHtcbiAgICBcbiAgICAgICAgICAgIHRhc2sudGFza0luZGV4ID0gdGFza0luZGV4O1xuICAgICAgICAgICAgdGFzay5uYXZJbmRleCA9IFwidXBjb21pbmdcIjtcbiAgICAgICAgICAgIHRhc2submF2TmFtZSA9IFwiVXBjb21pbmdcIjtcbiAgICBcbiAgICAgICAgICAgIGlmIChpc1RvZGF5KHRhc2suZGF0ZSkpIHRvZGF5VGFza3MucHVzaCh0YXNrKVxuICAgICAgICAgICAgaWYgKGlzVGhpc1dlZWsodGFzay5kYXRlKSkgd2Vla1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICB0YXNrSW5kZXggKys7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7dG9kYXlUYXNrcywgd2Vla1Rhc2tzfTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldFRpbWVOb3JtYWxWYWx1ZXMgID0gKG5hdnMsa2V5LHRvZGF5VGFza3Msd2Vla1Rhc2tzKSA9PiB7XG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gMDtcbiAgICAgICAgbmF2c1trZXldLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2tJbmRleCA9IDA7XG4gICAgICAgICAgICBib2FyZC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2sudGFza0luZGV4ID0gdGFza0luZGV4O1xuICAgICAgICAgICAgICAgIHRhc2suYm9hcmRJbmRleCA9IGJvYXJkSW5kZXg7XG4gICAgXG4gICAgICAgICAgICAgICAgdGFzay5uYXZJbmRleCA9IGtleTtcbiAgICAgICAgICAgICAgICB0YXNrLm5hdk5hbWUgPSBzZW5kLnJldHJpZXZlVGl0bGUoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNUb2RheSh0YXNrLmRhdGUpKSB0b2RheVRhc2tzLnB1c2godGFzaylcbiAgICAgICAgICAgICAgICBpZiAoaXNUaGlzV2Vlayh0YXNrLmRhdGUpKSB3ZWVrVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrSW5kZXgrKztcbiAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBib2FyZEluZGV4Kys7XG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIHJldHVybiB7dG9kYXlUYXNrcyx3ZWVrVGFza3N9XG4gICAgXG4gICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldFRhc2tUaW1lVmFsdWVzID0gKCkgPT4ge1xuICAgICAgICAgbGV0IGRhdGEgPSBzZW5kLmdldEFsbERhdGEoKTtcbiAgICAgICAgIGxldCBuYXZzID0gc2V0T2JqZWN0KGRhdGEpO1xuICAgICAgICAgbGV0IG5hdktleXMgPSBPYmplY3Qua2V5cyhuYXZzKTtcbiAgICAgICAgIFxuICAgICAgICAgbGV0IHRvZGF5VGFza3MgPSBbXTtcbiAgICAgICAgIGxldCB3ZWVrVGFza3MgPSBbXTsgICAgXG4gICAgICAgICBuYXZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICBpZiAoa2V5ID09IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICAgICAgIGxldCB0aW1lcyA9IGdldFRpbWVVcGNvbWluZ1ZhbHVlcyhuYXZzLGtleSwgdG9kYXlUYXNrcywgd2Vla1Rhc2tzKTtcbiAgICAgICAgICAgICAgICAgdG9kYXlUYXNrcyA9IHRpbWVzLnRvZGF5VGFza3M7XG4gICAgICAgICAgICAgICAgIHdlZWtUYXNrcyA9IHRpbWVzLndlZWtUYXNrczsgICAgXG4gICAgXG4gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgbGV0IHRpbWVzID0gZ2V0VGltZU5vcm1hbFZhbHVlcyhuYXZzLGtleSx0b2RheVRhc2tzLCB3ZWVrVGFza3MpO1xuICAgICAgICAgICAgICAgICB0b2RheVRhc2tzID0gdGltZXMudG9kYXlUYXNrcztcbiAgICAgICAgICAgICAgICAgd2Vla1Rhc2tzID0gdGltZXMud2Vla1Rhc2tzO1xuICAgIFxuICAgICAgICAgICAgIH1cbiAgICAgICAgIH0pXG4gICAgICAgICBuYXZzID0gc2VuZC5nZXRBbGxEYXRhKCk7ICAgIFxuICAgICAgICAgdG9kYXlUYXNrcyA9IHNvcnREYXRlc0J5TGF0ZXN0RGF5KHRvZGF5VGFza3MpO1xuICAgICAgICAgd2Vla1Rhc2tzID0gc29ydERhdGVzQnlMYXRlc3REYXkod2Vla1Rhc2tzKTtcbiAgICAgICAgIHJldHVybiB7dG9kYXlUYXNrcywgd2Vla1Rhc2tzfTtcbiAgICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlclRpbWVUYXNrcyA9IChhcnJheSkgPT4ge1xuICAgICAgICBsZXQgbmV3QXJyYXkgPSBhZGRVcENvbWluZ0JvYXJkcyhhcnJheSk7XG4gICAgICAgIGxldCB0aW1lcyA9IGdldFRhc2tUaW1lVmFsdWVzKCk7XG4gICAgICAgIG5ld0FycmF5LmZvckVhY2goYm9hcmQ9PiB7XG4gICAgICAgICAgICBpZiAoYm9hcmQudGV4dCA9PSBcIlRvZGF5XCIpe1xuICAgICAgICAgICAgICAgIGJvYXJkLnRhc2tzID0gdGltZXMudG9kYXlUYXNrcztcbiAgICAgICAgICAgICAgICBib2FyZC5jaGFuZ2VkQm9hcmRMaXN0cyA9IGJvYXJkLnRhc2tzO1xuICAgIFxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChib2FyZC50ZXh0ID09IFwiV2Vla1wiKXtcbiAgICAgICAgICAgICAgICBib2FyZC50YXNrcyA9IHRpbWVzLndlZWtUYXNrcztcbiAgICAgICAgICAgICAgICBib2FyZC5jaGFuZ2VkQm9hcmRMaXN0cyA9IGJvYXJkLnRhc2tzO1xuICAgIFxuICAgICAgICAgICAgfSBcbiAgICBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIFxuICAgIH1cblxuXG5cbmV4cG9ydCB7cmVuZGVyVGltZVRhc2tzfSIsImltcG9ydCB7IGdldFVwZGF0ZWRFbGVtZW50cyB9IGZyb20gXCIuL3BhZ2VMYXlvdXQuanNcIjtcbmltcG9ydCB7IGdldEVsZW1lbnRCeUJvYXJkSW5kZXgsIGZpbmRPYmplY3RCeU5hbWV9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiO1xuXG5cbmNvbnN0IHVuc2hhZGVCdXR0b25zID0gKCk9PiB7XG4gICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IGJ1dHRvbnMgPSBlbGVtZW50cy5idXR0b247XG4gICAgYnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudENoaWxkcmVuID0gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgZWxlbWVudENoaWxkcmVuLmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuY29uc3QgcmVtb3ZlQm9hcmRPdmVybGF5ID0gKCkgPT4ge1xuICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgIGVsZW1lbnRzLmJvYXJkT3ZlcmxheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxufVxuXG5jb25zdCBhZGRCb2FyZE92ZXJsYXkgPSAoaW5kZXgpID0+IHtcbiAgICBsZXQgYm9hcmRPdmVybGF5ID0gZ2V0RWxlbWVudEJ5Qm9hcmRJbmRleChpbmRleCxcImJvYXJkT3ZlcmxheVwiKTtcbiAgICBib2FyZE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxufVxuXG5jb25zdCBzZXRUYXNrRGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICBsZXQgZGF0ZVBpY2tlciA9IGVsZW1lbnQuZGF0ZVBpY2tlclswXTtcbiAgICBkYXRlUGlja2VyLnZhbHVlQXNEYXRlID0gZGF0ZTtcbn1cblxuY29uc3QgY2hhbmdlTGlzdEVkaXRvclByaW9yaXR5ICA9IChjdXJyZW50UHJpb3JpdHksYXJyYXkpID0+IHtcbiAgICBsZXQgbGlzdEVkaXRvciA9IGZpbmRPYmplY3RCeU5hbWUoXCJsaXN0RWRpdG9yXCIsYXJyYXkpO1xuICAgIGxpc3RFZGl0b3IucHJpb3JpdHkgPSBjdXJyZW50UHJpb3JpdHk7XG4gICAgXG5cbn1cblxuY29uc3Qgc2hhZGVCdXR0b25Db2xvciA9IChldmVudCxhcnJheSkgPT4ge1xuICAgIHVuc2hhZGVCdXR0b25zKCk7XG4gICAgbGV0IHBhcmFncmFwaDtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYnV0dG9uIGhpZ2hcIiB8fFxuICAgICAgICBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJidXR0b24gbWVkaXVtXCIgfHxcbiAgICAgICAgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYnV0dG9uIGxvd1wiXG4gICAgKSBwYXJhZ3JhcGggPSBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jaGlsZHJlbilbMF07XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiaGlnaFRleHRcIikge1xuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XG4gICAgICAgIGNoYW5nZUxpc3RFZGl0b3JQcmlvcml0eShcIkhpZ2hcIixhcnJheSlcblxuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwibWVkaXVtVGV4dFwiKXtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZjk4MDBcIjtcbiAgICAgICAgY2hhbmdlTGlzdEVkaXRvclByaW9yaXR5KFwiTWVkaXVtXCIsIGFycmF5KVxuXG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJsb3dUZXh0XCIpe1xuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiZ3JlZW5cIjtcbiAgICAgICAgY2hhbmdlTGlzdEVkaXRvclByaW9yaXR5KFwiTG93XCIsIGFycmF5KVxuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYnV0dG9uIGhpZ2hcIil7XG4gICAgICAgIHBhcmFncmFwaC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZWRcIjtcbiAgICAgICAgY2hhbmdlTGlzdEVkaXRvclByaW9yaXR5KFwiSGlnaFwiLCBhcnJheSlcblxuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYnV0dG9uIG1lZGl1bVwiKXtcbiAgICAgICAgcGFyYWdyYXBoLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmZjk4MDBcIjtcbiAgICAgICAgY2hhbmdlTGlzdEVkaXRvclByaW9yaXR5KFwiTWVkaXVtXCIsIGFycmF5KVxuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYnV0dG9uIGxvd1wiKXtcbiAgICAgICAgcGFyYWdyYXBoLnN0eWxlLmJhY2tncm91bmQgPSBcImdyZWVuXCI7XG4gICAgICAgIGNoYW5nZUxpc3RFZGl0b3JQcmlvcml0eShcIkxvd1wiLCBhcnJheSlcbiAgICB9XG59XG5cblxuIFxuXG5leHBvcnQge3JlbW92ZUJvYXJkT3ZlcmxheSwgYWRkQm9hcmRPdmVybGF5LCBzaGFkZUJ1dHRvbkNvbG9yLCBzZXRUYXNrRGF0ZX1cblxuIiwiLy9oZWxwZnVsIGZ1bmN0aW9ucyB0aGF0IGF0ZSB0dWNrZWQgaW4gdGhpcyBmaWxlIHRvIG1ha2UgY29udGVudCBtb3JlIGNsZWFuIGFuZCByZWFkYWJsZVxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnXG5pbXBvcnQgZ2V0RGF5T2ZZZWFyIGZyb20gJ2RhdGUtZm5zL2dldERheU9mWWVhcidcblxuaW1wb3J0IHtnZXRVcGRhdGVkRWxlbWVudHN9IGZyb20gXCIuL3BhZ2VMYXlvdXQuanNcIlxuXG5jb25zdCBmaW5kQm9hcmRUZXh0Qm94ID0gIChpbmRleCkgPT4ge1xuICAgIGxldCB0YXNrTGlzdHMgPSBnZXRFbGVtZW50QnlCb2FyZEluZGV4KGluZGV4LFwidGFza0xpc3RzXCIpO1xuICAgIGxldCBidXR0b25UZXh0ID0gXCJjb3VsZCBub3QgbG9hZCB0ZXh0XCJcbiAgICBsZXQgdGFza0xpc3RDaGlsZHJlbiA9IEFycmF5LmZyb20odGFza0xpc3RzLmNoaWxkcmVuKVxuXG4gICBcbiAgICB0YXNrTGlzdENoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJib2FyZFRleHRFZGl0b3JcIikge1xuICAgICAgICAgICAgIGJ1dHRvblRleHQgPSBBcnJheS5mcm9tKGNoaWxkLmNoaWxkcmVuKVswXS52YWx1ZTtcbiAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICByZXR1cm4gYnV0dG9uVGV4dDtcbn1cblxuY29uc3QgZ2V0RWxlbWVudEJ5Qm9hcmRJbmRleCA9IChpbmRleCxkb21FbGVtZW50KSA9PiB7XG5cbiAgICBsZXQgZWxlbWVudCA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgIGxldCBuZXdFbGVtZW50ID0gZmFsc2U7XG4gICAgZWxlbWVudFtkb21FbGVtZW50XS5mb3JFYWNoKGNoaWxkRWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuYm9hcmRJbmRleCA9PSBpbmRleCkgbmV3RWxlbWVudCA9IGNoaWxkRWxlbWVudFxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG5cblxufVxuXG5cblxuY29uc3QgZ2V0VXBDb21pbmdUYXNrcyAgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgbmV3QXJyYXkgPSBbXVxuXG4gICAgYXJyYXkuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgIGJvYXJkLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5uYXZJbmRleCA9PSBcInVwY29taW5nXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3QXJyYXk7XG59XG5cbi8vIG9ubHkgd29ya3Mgd2l0aCBzdGF0aWMgbGlzdCB0YXNrcyB3aGljaCBoYXMgdHdvIGFycmF5c1xuLy8gb25lIHRoYXQgY2FuIHRha2UgZGlmZmVyZW50IHR5cGVzIG9mIGVkaXRvcnMgd2hpY2ggaXMga25vd24gYXNcbi8vIHRoZSBjaGFuZ2VkYm9hcmRsaXN0cyBhbmQgdGhlIG9uZSB0aGF0IGNoYW5nZXMgdmVyeSBsaXR0bGUgXG4vLyBhbmQgdmFsdWVzIGNhbiBiZSBhZGRlZCBidXQgd2lsbCBiZSBlZGl0ZWQgaW4gdGhlIGVkaXRvcnMgaW4gY2hhbmdlZEJvYXJkTGlzdHNcbmNvbnN0IGZpbmRPYmplY3RCeU5hbWUgPSAobmFtZSxwYXJlbnRBcnJheSkgPT4ge1xuICAgIGxldCBjdXJyZW50T2JqZWN0ID0gZmFsc2U7XG4gICAgbGV0IGJyZWFrTG9vcDtcbiAgICBsZXQgc3RhdGljTGlzdFRhc2tzID0gcGFyZW50QXJyYXk7XG5cbiAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5jaGFuZ2VkQm9hcmRMaXN0cy5mb3JFYWNoKGxpc3RUYXNrID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0VGFza1tuYW1lXSl7XG4gICAgICAgICAgICAgICAgY3VycmVudE9iamVjdCA9IGxpc3RUYXNrO1xuICAgICAgICAgICAgICAgIGJyZWFrTG9vcCA9IHRydWVcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGJyZWFrTG9vcCkgcmV0dXJuO1xuXG4gICAgfSlcblxuICAgIHJldHVybiBjdXJyZW50T2JqZWN0O1xuXG59XG5cbi8vIFRha2VzIHN0YXRpY2xpc3QgdGFza3MgYXJyYXkgZG9lcyBub3Qgd29yayBpbiBhbnkgb3RoZXIgdGVtcGFsYXRlIGRvIG5vdCB0cnkgaXRcbmNvbnN0IGdldE9iamVjdFZhbHVlID0gKGN1cnJlbnRPYmplY3QsIHZhbHVlLGFycmF5KSA9PiB7XG4gICAgbGV0IG9iamVjdFZhbHVlID0gZmluZE9iamVjdEJ5TmFtZShjdXJyZW50T2JqZWN0LGFycmF5KTtcbiAgICBsZXQgbmV3VmFsdWUgPSBmYWxzZTtcbiAgICBpZiAob2JqZWN0VmFsdWUgIT0gZmFsc2UpIG5ld1ZhbHVlID0gb2JqZWN0VmFsdWVbdmFsdWVdO1xuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cblxuXG5jb25zdCBjaGFuZ2VWYWx1ZVRvRGF0ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlLnNwbGl0KFwiLVwiKTtcbiAgICBsZXQgeWVhciA9IG5ld1ZhbHVlWzBdO1xuICAgIGxldCBtb250aEluZGV4ID0gbmV3VmFsdWVbMV0gLTE7XG4gICAgbGV0IGRheSA9IG5ld1ZhbHVlWzJdO1xuXG5cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHllYXIsbW9udGhJbmRleCxkYXkpO1xuICAgIHJldHVybiBkYXRlO1xufVxuXG5jb25zdCBzb3J0RGF0ZXNCeUxhdGVzdERheSA9ICh0aW1lVGFza3MpID0+IHtcbiAgICBsZXQgbmV3VGltZVRhc2tzID0gdGltZVRhc2tzO1xuICAgIG5ld1RpbWVUYXNrcy5zb3J0KCh0aW1lVGFzazEsIHRpbWVUYXNrMikgPT4ge1xuICAgICAgICBsZXQgZGF5czIgPSBnZXREYXlPZlllYXIodGltZVRhc2syLmRhdGUpO1xuICAgICAgICBsZXQgZGF5czEgPSBnZXREYXlPZlllYXIodGltZVRhc2sxLmRhdGUpO1xuICAgICAgICByZXR1cm4gZGF5czIgLSBkYXlzMTtcbiAgICB9KVxuICAgIHJldHVybiBuZXdUaW1lVGFza3M7XG5cblxufVxuXG5cbmNvbnN0IGNyZWF0ZVRhc2tUZW1wbGF0ZSA9ICh0ZXh0LGRhdGUscHJpb3JpdHkscHJvamVjdFR5cGVUZXh0LGNoZWNrZWQpID0+IHtcbiAgICBsZXQgdGFzayA9IHt9XG4gICAgdGFzay5saXN0VGFzayA9IHRydWU7XG4gICAgdGFzay50ZXh0ID0gdGV4dCxcbiAgICB0YXNrLmRhdGUgPSBkYXRlO1xuXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcblxuICAgIHRhc2suZGF0ZXMgPSBbeWVhciwgbW9udGgsIGRheV07XG4gICAgdGFzay5kYXRlVGV4dCA9IGZvcm1hdCh0YXNrLmRhdGUsXCJNTU0gZCB5XCIpO1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgICFjaGVja2VkPyB0YXNrLmNoZWNrZWQgPSBmYWxzZTogdGFzay5jaGVja2VkID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIHByb2plY3RUeXBlVGV4dCAhPSBcInVuZGVmaW5lZFwiKSAgdGFzay5wcm9qZWN0VHlwZVRleHQgPSBwcm9qZWN0VHlwZVRleHQ7XG4gICAgcmV0dXJuIHRhc2s7XG5cbn1cblxuXG5jb25zdCBjaGVja1NwYWNlcyA9ICh0ZXh0KSA9PiB7XG4gICAgaWYgKHRleHQudHJpbSgpLmxlbmd0aCAhPSAwKSByZXR1cm4gdHJ1ZVxuICAgIGVsc2UgcmV0dXJuIGZhbHNlXG59XG5cblxuZXhwb3J0IHtmaW5kQm9hcmRUZXh0Qm94LCBnZXRFbGVtZW50QnlCb2FyZEluZGV4LCBnZXRPYmplY3RWYWx1ZSwgXG4gICAgY2hhbmdlVmFsdWVUb0RhdGUsIHNvcnREYXRlc0J5TGF0ZXN0RGF5LCBjcmVhdGVUYXNrVGVtcGxhdGUsXG4gICAgZmluZE9iamVjdEJ5TmFtZSwgZ2V0VXBDb21pbmdUYXNrcywgY2hlY2tTcGFjZXNcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hhbWJ1cmdlck1lbnUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fLCB7IGhhc2g6IFwiI1JvYm90b1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG5cXG5cXG5cXG5cXG4gIC5wYWdlQ29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1iYXNpczogYXV0bztcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG59XFxuXFxuXFxuXFxuXFxuXFxuLmFkZEJvYXJkIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5OCwgMTk4LCAxOTgpO1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206MTBweDtcXG4gICAgXFxuICBcXG59XFxuXFxuXFxuXFxuXFxuXFxuaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4uYm9hcmRDb250ZW50IHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOTgsIDE5OCwgMTk4KTtcXG4gICAgd2lkdGg6IDI5MHB4O1xcbiAgICBtYXJnaW46MTBweDtcXG5cXG5cXG4gICAgXFxuICAgIHBhZGRpbmctYm90dG9tOjVweDtcXG59XFxuXFxuLmJvYXJkT3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgdG9wOjA7XFxuICAgIHotaW5kZXg6MTtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4uZGVsZXRlQm9hcmQsIC5lZGl0Qm9hcmQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50YXNrSG9sZGVyIHtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcblxcbi50YXNrVGV4dEJveCB7XFxuICAgIHdpZHRoOjEzNXB4O1xcbn1cXG4uZXhhbXBsZUJvYXJkVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB0b3A6NHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlXFxufVxcblxcblxcbi5hZGRCb2FyZFRleHQge1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG5cXG5cXG59XFxuXFxuXFxuXFxuLnRhc2ssIC5ub3RUYXNre1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZDtcXG4gICAgbWFyZ2luOjEwcHg7XFxufVxcblxcbi50YXNrVG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxuXFxufVxcbi50b29scyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuXFxuLnRhc2tMYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOjVweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG5cXG4gICAgYm9yZGVyOiAwO1xcblxcbn1cXG4uZ2VuZXJhbFRleHQge1xcbiAgICBmb250LXNpemU6MTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFxufVxcblxcbi5nZW5lcmFsVGV4dEhvbGRlciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuXFxuXFxuXFxuLmNpcmNsZUljb24ge1xcbiAgICB3aWR0aDoxMHB4O1xcbiAgICBoZWlnaHQ6MTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcbi5lZGl0LCAubm90RWRpdHtcXG4gICAgd2lkdGg6MjBweDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDo2cHg7XFxufVxcblxcbi5jaXJjbGVJY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpibGFjaztcXG59XFxuXFxuXFxuXFxuLnRhc2tBZGRlciB7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuXFxuXFxuLnRhc2tBZGRlcjpob3ZlciB7XFxuICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgYmFja2dyb3VuZDpyZ2IoMTc4LCAxNzgsIDE3OCk7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcbi5wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgbWFyZ2luOjVweDtcXG5cXG59XFxuLmVkaXRUb29scyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgd2lkdGg6NTBweDtcXG5cXG59XFxuLmRhdGVUb29sIHtcXG4gICAgbWFyZ2luOjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjE0cHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuLnRhc2tUZXh0Qm94IHtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOjVweDtcXG59XFxuXFxuLmVkaXRUb29sSG9sZGVyIHtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmRhdGVQaWNrZXIge1xcbiAgICBtYXJnaW4tbGVmdDo1cHg7XFxuICAgIHdpZHRoOjEzNXB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgYm9yZGVyOjA7XFxufVxcblxcblxcblxcbi50YXNrRWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNywgMjMwLCAyMzApO1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjpyZ2IoMTk3LCA2MywgNjMpO1xcbn1cXG5cXG5cXG4udGFza1RleHRCb3h7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW46NXB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG4uYnV0dG9ucyAuYnV0dG9uIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmOTgwMDtcXG59XFxuXFxuXFxuLm5vdFRhc2sge1xcbiAgICBcXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyBcXG4gICAgIGNvbG9yOmdyZXk7IFxcbiB9IFxcblxcbi5ub3RFZGl0IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjAlKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDIwNzYlKSBodWUtcm90YXRlKDg2ZGVnKSBicmlnaHRuZXNzKDExOCUpIGNvbnRyYXN0KDEwJSk7XFxufVxcblxcblxcblxcbi5sb3cge1xcblxcbiAgICBib3JkZXI6NXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4ubG93OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpncmVlbjtcXG59XFxuXFxuLmhpZ2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJlZDtcXG59XFxuXFxuLm1lZGl1bTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjk4MDA7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgaGVpZ2h0OjE1cHg7XFxuICAgIHdpZHRoOjM1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIG1hcmdpbjoycHg7IFxcblxcbn1cXG5cXG5cXG4uYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnRyYXNoSXQsIC5maW5pc2hlZCwgLmV4aXRFZGl0b3J7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RUeXBlVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBib3R0b206MnB4O1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6MDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYm9yZGVyOjA7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG4uYWRkQm9hcmRlclRleHRCb3gge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOjIyMHB4O1xcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIHdpZHRoOjQwcHg7XFxuICAgIGhlaWdodDo0MHB4O1xcbiAgICBib3JkZXIgOjA7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcbi5lZGl0Qm9hcmQsIC5kZWxldGVCb2FyZCB7XFxuICAgIHdpZHRoOjIwcHg7XFxufVxcblxcbi5lZGl0RXhhbXBsZUljb25zIHtcXG5cXG4gICAgaGVpZ2h0OjI1cHg7XFxuICAgIFxcbiAgICBkaXNwbGF5OmZsZXg7XFxuXFxuXFxufVxcblxcbi5lbXB0eXJvdyB7XFxuICAgXFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgXFxufVxcblxcbi5lZGl0Qm9hcmQsIC5kZWxldGVCb2FyZCB7XFxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XFxuXFxuXFxufVxcblxcbi5ib2FyZHRleHRCb3gge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGJvcmRlcjowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIFxcbiBcXG59XFxuXFxuLmJvYXJkVGV4dEVkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIxNSwgMjEzLCAyMTMpO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgei1pbmRleDoxO1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG5cXG5cXG5cXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcblxcbiBcXG5cXG59XFxuXFxuXFxuLmNoYW5nZUJvYXJkVGl0bGVCdXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xcblxcbiAgICAuZWRpdEV4YW1wbGVJY29ucyB7XFxuICAgICAgICBoZWlnaHQ6MTVweDtcXG4gICAgfVxcblxcbiAgICAuZW1wdHlyb3cge1xcbiAgICAgICAgaGVpZ2h0OjE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmRlbGV0ZUJvYXJkLCAuZWRpdEJvYXJkIHtcXG4gICAgICAgIHdpZHRoOjEycHg7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkZXJCdXR0b24ge1xcbiAgICBcXG4gICAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcblxcblxcblxcbiAgICAuYm9hcmR7XFxuICAgICAgICB3aWR0aDoxODVweDtcXG4gICAgfVxcblxcbiAgICAudGFza0xhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTp4eC1zbWFsbFxcbiAgICB9XFxuXFxuICAgIC5lZGl0LCAubm90RWRpdCB7XFxuXFxuICAgICAgICB3aWR0aDoxMHB4O1xcbiAgICAgICAgXFxuXFxuICAgIH1cXG5cXG4gICAgLmdlbmVyYWxUZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTo2cHg7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICBcXG4gICAgLmV4YW1wbGVCb2FyZFRleHQge1xcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZHRleHRCb3gge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkIHtcXG4gICAgXFxuICAgICAgICB3aWR0aDoxODVweDtcXG4gICAgICBcXG4gICAgfVxcbiAgICAuY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6eC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmRlclRleHRCb3gge1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICAgICAgd2lkdGg6MTYwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5hZGRCb2FyZGVyQnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAudGFzaywgLm5vdFRhc2sge1xcbiAgICAgICAgbWFyZ2luOjVweDsgXFxuICAgIH1cXG4gICAgLmNpcmNsZUljb24ge1xcbiAgICAgICAgd2lkdGg6NXB4O1xcbiAgICAgICAgaGVpZ2h0OjVweFxcblxcbiAgICB9XFxuXFxuICAgIC5jaXJjbGVJY29uIHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB9XFxuXFxuICAgIC50YXNrSG9sZGVyVGV4dCwgLmRhdGVUZXh0LCAuYnV0dG9uVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6eHgtc21hbGw7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAudGFza1Rvb2xzIHtcXG4gICAgICAgIFxcbiAgICAgICAgcGFkZGluZy1yaWdodDo1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6NXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDo1cHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLnRhc2tUZXh0Qm94IHtcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmRhdGVQaWNrZXIge1xcbiAgICAgICAgd2lkdGg6ODBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgIH1cXG5cXG5cXG4gICAgXFxuICAgIC5oaWdoIHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gICAgfVxcblxcbiAgICAubWVkaXVtIHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZjk4MDA7XFxuICAgIH1cXG5cXG4gICAgLmxvdyB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcXG4gICBcXG4gICAgfVxcblxcbiAgICAudGFzaywgLm5vdFRhc2sge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcXG4gICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2tFZGl0b3Ige1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICA0cHggc29saWQ7XFxuICAgIH1cXG5cXG5cXG5cXG5cXG4gICAgLmJ1dHRvbiB7XFxuXFxuICAgICAgICBoZWlnaHQ6MTBweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcbiAgICAgICAgd2lkdGg6MjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgICB9XFxuXFxuICAgIC5lZGl0VG9vbHMge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRyYXNoSXQsIC5maW5pc2hlZCwgLmV4aXRFZGl0b3Ige1xcbiAgICAgICAgd2lkdGg6MTVweDtcXG5cXG4gICAgfVxcblxcbiAgICAudGFza0FkZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgIH1cXG5cXG5cXG5cXG59XFxuXFxuLnRhc2ssIC5ub3RUYXNrIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRDQUFpRCxFQUFFLHFCQUFxQjtJQUN4RTs7Ozs7OERBS3NFLEVBQUUsZUFBZTtFQUN6Rjs7Ozs7O0VBTUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOzs7Ozs7QUFNQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLG1CQUFtQjs7O0FBR3ZCOzs7Ozs7QUFNQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBOztJQUVJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVzs7OztJQUlYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxLQUFLO0lB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QUNUOztJQUVKOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksa0JBQWtCOztJQUV0Qjs7SUFFQTs7UUFFSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGNBQWM7O0lBRWxCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsY0FBYztRQUNkLFdBQVc7SUFDZjs7OztJQUlBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksdUJBQXVCOztJQUUzQjs7SUFFQTtRQUNJLHNCQUFzQjs7SUFFMUI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7Ozs7O0lBS0E7O1FBRUksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFVBQVU7O0lBRWQ7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7Ozs7QUFJSjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICAgIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuc3ZnI1JvYm90bycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG5cXG5cXG5cXG5cXG4gIC5wYWdlQ29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1iYXNpczogYXV0bztcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG59XFxuXFxuXFxuXFxuXFxuXFxuLmFkZEJvYXJkIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5OCwgMTk4LCAxOTgpO1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206MTBweDtcXG4gICAgXFxuICBcXG59XFxuXFxuXFxuXFxuXFxuXFxuaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4uYm9hcmRDb250ZW50IHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOTgsIDE5OCwgMTk4KTtcXG4gICAgd2lkdGg6IDI5MHB4O1xcbiAgICBtYXJnaW46MTBweDtcXG5cXG5cXG4gICAgXFxuICAgIHBhZGRpbmctYm90dG9tOjVweDtcXG59XFxuXFxuLmJvYXJkT3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgdG9wOjA7XFxuICAgIHotaW5kZXg6MTtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4uZGVsZXRlQm9hcmQsIC5lZGl0Qm9hcmQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50YXNrSG9sZGVyIHtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcblxcbi50YXNrVGV4dEJveCB7XFxuICAgIHdpZHRoOjEzNXB4O1xcbn1cXG4uZXhhbXBsZUJvYXJkVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB0b3A6NHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlXFxufVxcblxcblxcbi5hZGRCb2FyZFRleHQge1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG5cXG5cXG59XFxuXFxuXFxuXFxuLnRhc2ssIC5ub3RUYXNre1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZDtcXG4gICAgbWFyZ2luOjEwcHg7XFxufVxcblxcbi50YXNrVG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxuXFxufVxcbi50b29scyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuXFxuLnRhc2tMYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOjVweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG5cXG4gICAgYm9yZGVyOiAwO1xcblxcbn1cXG4uZ2VuZXJhbFRleHQge1xcbiAgICBmb250LXNpemU6MTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFxufVxcblxcbi5nZW5lcmFsVGV4dEhvbGRlciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuXFxuXFxuXFxuLmNpcmNsZUljb24ge1xcbiAgICB3aWR0aDoxMHB4O1xcbiAgICBoZWlnaHQ6MTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcbi5lZGl0LCAubm90RWRpdHtcXG4gICAgd2lkdGg6MjBweDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDo2cHg7XFxufVxcblxcbi5jaXJjbGVJY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpibGFjaztcXG59XFxuXFxuXFxuXFxuLnRhc2tBZGRlciB7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuXFxuXFxuLnRhc2tBZGRlcjpob3ZlciB7XFxuICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgYmFja2dyb3VuZDpyZ2IoMTc4LCAxNzgsIDE3OCk7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcbi5wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgbWFyZ2luOjVweDtcXG5cXG59XFxuLmVkaXRUb29scyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgd2lkdGg6NTBweDtcXG5cXG59XFxuLmRhdGVUb29sIHtcXG4gICAgbWFyZ2luOjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjE0cHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuLnRhc2tUZXh0Qm94IHtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOjVweDtcXG59XFxuXFxuLmVkaXRUb29sSG9sZGVyIHtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmRhdGVQaWNrZXIge1xcbiAgICBtYXJnaW4tbGVmdDo1cHg7XFxuICAgIHdpZHRoOjEzNXB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgYm9yZGVyOjA7XFxufVxcblxcblxcblxcbi50YXNrRWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNywgMjMwLCAyMzApO1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjpyZ2IoMTk3LCA2MywgNjMpO1xcbn1cXG5cXG5cXG4udGFza1RleHRCb3h7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW46NXB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG4uYnV0dG9ucyAuYnV0dG9uIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmOTgwMDtcXG59XFxuXFxuXFxuLm5vdFRhc2sge1xcbiAgICBcXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyBcXG4gICAgIGNvbG9yOmdyZXk7IFxcbiB9IFxcblxcbi5ub3RFZGl0IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjAlKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDIwNzYlKSBodWUtcm90YXRlKDg2ZGVnKSBicmlnaHRuZXNzKDExOCUpIGNvbnRyYXN0KDEwJSk7XFxufVxcblxcblxcblxcbi5sb3cge1xcblxcbiAgICBib3JkZXI6NXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4ubG93OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpncmVlbjtcXG59XFxuXFxuLmhpZ2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJlZDtcXG59XFxuXFxuLm1lZGl1bTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjk4MDA7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgaGVpZ2h0OjE1cHg7XFxuICAgIHdpZHRoOjM1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIG1hcmdpbjoycHg7IFxcblxcbn1cXG5cXG5cXG4uYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnRyYXNoSXQsIC5maW5pc2hlZCwgLmV4aXRFZGl0b3J7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RUeXBlVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBib3R0b206MnB4O1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6MDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYm9yZGVyOjA7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG4uYWRkQm9hcmRlclRleHRCb3gge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOjIyMHB4O1xcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIHdpZHRoOjQwcHg7XFxuICAgIGhlaWdodDo0MHB4O1xcbiAgICBib3JkZXIgOjA7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9oYW1idXJnZXJNZW51LnN2Zyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOSwgNzUsIDIwNSk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDo1MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG5cXG5cXG59XFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3AgOjVweDtcXG59XFxuXFxuXFxuXFxuLm1vYmlsZU1lbnVUaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIG1hcmdpbjphdXRvO1xcbn1cXG5cXG4uZWRpdEJvYXJkLCAuZGVsZXRlQm9hcmQge1xcbiAgICB3aWR0aDoyMHB4O1xcbn1cXG5cXG4uZWRpdEV4YW1wbGVJY29ucyB7XFxuXFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICBcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcblxcbn1cXG5cXG4uZW1wdHlyb3cge1xcbiAgIFxcbiAgICBoZWlnaHQ6MjVweDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxuICAgIFxcbn1cXG5cXG4uZWRpdEJvYXJkLCAuZGVsZXRlQm9hcmQge1xcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xcblxcblxcbn1cXG5cXG4uYm9hcmR0ZXh0Qm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBib3JkZXI6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBcXG4gXFxufVxcblxcbi5ib2FyZFRleHRFZGl0b3Ige1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMTUsIDIxMywgMjEzKTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHotaW5kZXg6MTtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIHdpZHRoOjEwMCU7XFxuXFxuXFxuXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG5cXG5cXG4gXFxuXFxufVxcblxcblxcbi5jaGFuZ2VCb2FyZFRpdGxlQnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcXG5cXG4gICAgLmVkaXRFeGFtcGxlSWNvbnMge1xcbiAgICAgICAgaGVpZ2h0OjE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmVtcHR5cm93IHtcXG4gICAgICAgIGhlaWdodDoxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGVCb2FyZCwgLmVkaXRCb2FyZCB7XFxuICAgICAgICB3aWR0aDoxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZGVyQnV0dG9uIHtcXG4gICAgXFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG5cXG5cXG5cXG4gICAgLmJvYXJke1xcbiAgICAgICAgd2lkdGg6MTg1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tMYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6eHgtc21hbGxcXG4gICAgfVxcblxcbiAgICAuZWRpdCwgLm5vdEVkaXQge1xcblxcbiAgICAgICAgd2lkdGg6MTBweDtcXG4gICAgICAgIFxcblxcbiAgICB9XFxuXFxuICAgIC5nZW5lcmFsVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6NnB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgXFxuICAgIC5leGFtcGxlQm9hcmRUZXh0IHtcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYm9hcmR0ZXh0Qm94IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZCB7XFxuICAgIFxcbiAgICAgICAgd2lkdGg6MTg1cHg7XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmNoYW5nZUJvYXJkVGl0bGVCdXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOngtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkZXJUZXh0Qm94IHtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgICAgIHdpZHRoOjE2MHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLnRhc2ssIC5ub3RUYXNrIHtcXG4gICAgICAgIG1hcmdpbjo1cHg7IFxcbiAgICB9XFxuICAgIC5jaXJjbGVJY29uIHtcXG4gICAgICAgIHdpZHRoOjVweDtcXG4gICAgICAgIGhlaWdodDo1cHhcXG5cXG4gICAgfVxcblxcbiAgICAuY2lyY2xlSWNvbiB7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgfVxcblxcbiAgICAudGFza0hvbGRlclRleHQsIC5kYXRlVGV4dCwgLmJ1dHRvblRleHQge1xcbiAgICAgICAgZm9udC1zaXplOnh4LXNtYWxsO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2tUb29scyB7XFxuICAgICAgICBcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OjVweDtcXG4gICAgICAgIG1hcmdpbi10b3A6NXB4O1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrVGV4dEJveCB7XFxuICAgICAgICB3aWR0aDo4MHB4O1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5kYXRlUGlja2VyIHtcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICB9XFxuXFxuXFxuICAgIFxcbiAgICAuaGlnaCB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICAgIH1cXG5cXG4gICAgLm1lZGl1bSB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmY5ODAwO1xcbiAgICB9XFxuXFxuICAgIC5sb3cge1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgZ3JlZW47XFxuICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2ssIC5ub3RUYXNrIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XFxuICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrRWRpdG9yIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAgNHB4IHNvbGlkO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuICAgIC5idXR0b24ge1xcblxcbiAgICAgICAgaGVpZ2h0OjEwcHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcXG4gICAgICAgIHdpZHRoOjIwcHg7XFxuICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgfVxcblxcbiAgICAuZWRpdFRvb2xzIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC50cmFzaEl0LCAuZmluaXNoZWQsIC5leGl0RWRpdG9yIHtcXG4gICAgICAgIHdpZHRoOjE1cHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLnRhc2tBZGRlciB7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICB9XFxuXFxuXFxuXFxufVxcblxcbi50YXNrLCAubm90VGFzayB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGFtYnVyZ2VyTWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18sIHsgaGFzaDogXCIjUm9ib3RvXCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18sIHsgaGFzaDogXCIjQ3V0aXZlTW9ub1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICAgIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcbiAgLyogY3V0aXZlLW1vbm8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcblxcbiAgLm5hdmlnYXRpb24ge1xcbiAgICB3aWR0aDoyNTBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTksIDc1LCAyMDUpO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcblxcblxcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbiwgLnVwQ29taW5nQnV0dG9uIHtcXG5cXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OjI4cHg7XFxuXFxuICAgIHdpZHRoOjEwMCU7XFxuXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5saXN0VGl0bGUsIC5wcm9qZWN0VGV4dCwgLnBsdXNTaWduLCAuZGVsZXRlQWxsVGFza1RleHQge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udXBDb21pbmdCdXR0b24ge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdFRhc2tIb2xkZXIge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OjM7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgd2lkdGg6NzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyVGV4dCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIgcCB7XFxuICAgIG1hcmdpbi1yaWdodDo0MHB4O1xcbn1cXG5cXG4ucHJvamVjdFRvb2xzIHtcXG4gICAgICAgIHdpZHRoOjI1JTtcXG4gICAgXFxufVxcblxcblxcbi53aG9sZU92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gXFxufVxcblxcblxcbi5wcm9qZWN0QnV0dG9ue1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi51cENvbWluZ0J1dHRvbiB7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgICB3aWR0aDo3NSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuXFxuXFxuLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG5cXG4uZWRpdFByb2plY3RCdXR0b257XFxuXFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgei1pbmRleDozO1xcbiBcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMiwgODMsIDIyNyk7XFxuIFxcblxcbiBcXG4gfVxcbiBcXG4gXFxuIC5hZGRQcm9qZWN0TGFiZWwge1xcbiAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgIHJpZ2h0OjNweDtcXG5cXG4gICAgIFxcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiBcXG4gXFxuIH1cXG4gXFxuIC5lZGl0VGV4dCB7XFxuICAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuIFxcbiAgICAgY29sb3I6d2hpdGU7XFxuICAgICBvdXRsaW5lOm5vbmU7XFxuICAgICBib3JkZXI6bm9uZTtcXG4gICAgIGhlaWdodDozMHB4O1xcbiAgICAgbWFyZ2luLXJpZ2h0OjVweDtcXG4gICAgZm9udC1zaXplOnNtYWxsO1xcbiB9XFxuIFxcblxcbiAuZWxlbWVudHN7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnBsdXNTaWduIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnByb2plY3RCdXR0b25Ib3Zlcjpob3ZlciwgLnByb2plY3RBZGRlcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjIsIDgzLCAyMjcpO1xcbiAgICBcXG59XFxuXFxuIFxcbiBcXG4gXFxuLmVkaXRUZXh0OjpwbGFjZWhvbGRlciB7XFxuICAgICBcXG4gXFxuICAgICBjb2xvcjp3aGl0ZTtcXG59XFxuIFxcbiBcXG4gLm92ZXJsYXkge1xcbiAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuMjk5KTtcXG4gICAgIGhlaWdodDoxMDAlO1xcbiAgICAgd2lkdGg6MjUwcHg7XFxuICAgICB6LWluZGV4OjE7XFxuICAgICBcXG4gICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xcbiAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICB0b3A6MHB4O1xcblxcblxcbiAgICAgZGlzcGxheTpub25lO1xcbiBcXG4gICBcXG4gXFxufVxcblxcbi5wcm9qZWN0QWRkZXIge1xcblxcbiAgICBtYXJnaW4tdG9wOjIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcblxcbiAgICB3aWR0aDoxMDAlXFxuICAgIFxcbn1cXG5cXG5cXG5cXG4uZXhpdCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICB3aWR0aDo0MHB4O1xcbiAgICBoZWlnaHQ6NDBweDtcXG4gICAgYm9yZGVyIDowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTksIDc1LCAyMDUpO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6NTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuXFxuXFxufVxcblxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBtYXJnaW4tdG9wIDo1cHg7XFxufVxcblxcblxcblxcbi5tb2JpbGVNZW51VGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MHB4KXtcXG5cXG4gXFxuICAgIC5vdmVybGF5IHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm5hdmlnYXRpb24ge1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuXFxuXFxuICAgIC5tb2JpbGVNZW51IHtcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgfVxcblxcbiAgICAucGFnZUNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5zZWN0aW9ucyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uIHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0QnV0dG9ue1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RDb250YWluZXIge1xcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RDb250YWluZXIgcCB7XFxuICAgIFxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjUwcHg7XFxuICAgIH1cXG4gICAgLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoxNSU7XFxuXFxuICAgIH1cXG5cXG4gICAgLmVkaXRQcm9qZWN0QnV0dG9ue1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmVkaXRUZXh0e1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcblxcbiAgICB9XFxuXFxuXFxuXFxuXFxuXFxuICAgIC5leGl0IHtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgY29sb3I6d2hpdGU7XFxuICAgICAgICBtYXJnaW46MTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KXtcXG4gICAgLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgICAgICB3aWR0aDoxNXB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjI1cHgpe1xcbiAgICAuZGVsZXRlSXRlbSwgLmVkaXRQcm9qZWN0IHtcXG4gICAgICAgIHdpZHRoOjExLjVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MjAzcHgpe1xcbiAgICAubGlzdFRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgfVxcblxcblxcblxcbn1cXG5cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcXG5cXG5cXG5cXG4gICAgLnByb2plY3RDb250YWluZXIgcHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDozMHB4O1xcbiAgICB9XFxuXFxuXFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbmF2aWdhdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0Q0FBaUQsRUFBRSxxQkFBcUI7SUFDeEU7Ozs7OzhEQUtzRSxFQUFFLGVBQWU7RUFDekY7O0VBRUEsZ0NBQWdDO0FBQ2xDO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNENBQXFELEVBQUUscUJBQXFCO0lBQzVFOzs7OzsrREFLOEUsRUFBRSxlQUFlO0VBQ2pHOzs7RUFHQTtJ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QUNYLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7OztBQUlKOzs7O0FBSUE7Ozs7SUFJSTtRQUNJLGlCQUFpQjtJQUNyQjs7O0FBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnN2ZyNSb2JvdG8nKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxuICB9XFxuXFxuICAvKiBjdXRpdmUtbW9uby1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubyc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLnN2ZyNDdXRpdmVNb25vJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcblxcbiAgLm5hdmlnYXRpb24ge1xcbiAgICB3aWR0aDoyNTBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTksIDc1LCAyMDUpO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcblxcblxcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbiwgLnVwQ29taW5nQnV0dG9uIHtcXG5cXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OjI4cHg7XFxuXFxuICAgIHdpZHRoOjEwMCU7XFxuXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5saXN0VGl0bGUsIC5wcm9qZWN0VGV4dCwgLnBsdXNTaWduLCAuZGVsZXRlQWxsVGFza1RleHQge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udXBDb21pbmdCdXR0b24ge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdFRhc2tIb2xkZXIge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OjM7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgd2lkdGg6NzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyVGV4dCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIgcCB7XFxuICAgIG1hcmdpbi1yaWdodDo0MHB4O1xcbn1cXG5cXG4ucHJvamVjdFRvb2xzIHtcXG4gICAgICAgIHdpZHRoOjI1JTtcXG4gICAgXFxufVxcblxcblxcbi53aG9sZU92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gXFxufVxcblxcblxcbi5wcm9qZWN0QnV0dG9ue1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi51cENvbWluZ0J1dHRvbiB7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgICB3aWR0aDo3NSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuXFxuXFxuLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG5cXG4uZWRpdFByb2plY3RCdXR0b257XFxuXFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgei1pbmRleDozO1xcbiBcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMiwgODMsIDIyNyk7XFxuIFxcblxcbiBcXG4gfVxcbiBcXG4gXFxuIC5hZGRQcm9qZWN0TGFiZWwge1xcbiAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgIHJpZ2h0OjNweDtcXG5cXG4gICAgIFxcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiBcXG4gXFxuIH1cXG4gXFxuIC5lZGl0VGV4dCB7XFxuICAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuIFxcbiAgICAgY29sb3I6d2hpdGU7XFxuICAgICBvdXRsaW5lOm5vbmU7XFxuICAgICBib3JkZXI6bm9uZTtcXG4gICAgIGhlaWdodDozMHB4O1xcbiAgICAgbWFyZ2luLXJpZ2h0OjVweDtcXG4gICAgZm9udC1zaXplOnNtYWxsO1xcbiB9XFxuIFxcblxcbiAuZWxlbWVudHN7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnBsdXNTaWduIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnByb2plY3RCdXR0b25Ib3Zlcjpob3ZlciwgLnByb2plY3RBZGRlcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjIsIDgzLCAyMjcpO1xcbiAgICBcXG59XFxuXFxuIFxcbiBcXG4gXFxuLmVkaXRUZXh0OjpwbGFjZWhvbGRlciB7XFxuICAgICBcXG4gXFxuICAgICBjb2xvcjp3aGl0ZTtcXG59XFxuIFxcbiBcXG4gLm92ZXJsYXkge1xcbiAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuMjk5KTtcXG4gICAgIGhlaWdodDoxMDAlO1xcbiAgICAgd2lkdGg6MjUwcHg7XFxuICAgICB6LWluZGV4OjE7XFxuICAgICBcXG4gICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xcbiAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICB0b3A6MHB4O1xcblxcblxcbiAgICAgZGlzcGxheTpub25lO1xcbiBcXG4gICBcXG4gXFxufVxcblxcbi5wcm9qZWN0QWRkZXIge1xcblxcbiAgICBtYXJnaW4tdG9wOjIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcblxcbiAgICB3aWR0aDoxMDAlXFxuICAgIFxcbn1cXG5cXG5cXG5cXG4uZXhpdCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICB3aWR0aDo0MHB4O1xcbiAgICBoZWlnaHQ6NDBweDtcXG4gICAgYm9yZGVyIDowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvaGFtYnVyZ2VyTWVudS5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTksIDc1LCAyMDUpO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6NTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuXFxuXFxufVxcblxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBtYXJnaW4tdG9wIDo1cHg7XFxufVxcblxcblxcblxcbi5tb2JpbGVNZW51VGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MHB4KXtcXG5cXG4gXFxuICAgIC5vdmVybGF5IHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm5hdmlnYXRpb24ge1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuXFxuXFxuICAgIC5tb2JpbGVNZW51IHtcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgfVxcblxcbiAgICAucGFnZUNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5zZWN0aW9ucyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uIHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0QnV0dG9ue1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RDb250YWluZXIge1xcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RDb250YWluZXIgcCB7XFxuICAgIFxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjUwcHg7XFxuICAgIH1cXG4gICAgLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoxNSU7XFxuXFxuICAgIH1cXG5cXG4gICAgLmVkaXRQcm9qZWN0QnV0dG9ue1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmVkaXRUZXh0e1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcblxcbiAgICB9XFxuXFxuXFxuXFxuXFxuXFxuICAgIC5leGl0IHtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgY29sb3I6d2hpdGU7XFxuICAgICAgICBtYXJnaW46MTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KXtcXG4gICAgLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgICAgICB3aWR0aDoxNXB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjI1cHgpe1xcbiAgICAuZGVsZXRlSXRlbSwgLmVkaXRQcm9qZWN0IHtcXG4gICAgICAgIHdpZHRoOjExLjVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MjAzcHgpe1xcbiAgICAubGlzdFRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgfVxcblxcblxcblxcbn1cXG5cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcXG5cXG5cXG5cXG4gICAgLnByb2plY3RDb250YWluZXIgcHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDozMHB4O1xcbiAgICB9XFxuXFxuXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBib3gtc2l6aW5nOiBub25lO1xcbn1cXG4uc2VjdGlvbnMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIzNiwgMjM2LCAyNTUpO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxufVxcblxcbi5lcnJvck1lc3NhZ2Uge1xcblxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuMjk5KTtcXG5cXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MzA7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBcXG59XFxuXFxuLm1lc3NhZ2VIb2xkZXIge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6c2lsdmVyO1xcbiAgICBoZWlnaHQ6MTUwcHg7XFxuICAgIHdpZHRoOjIwMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbn1cXG5cXG4uY29udGVudEhvbGRlciB7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6MjAwcHg7XFxufVxcblxcbi5leGl0QnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDoxMDBweDtcXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIGJvcmRlcjowO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOnJveWFsYmx1ZTtcXG5cXG59XFxuXFxuLmV4aXRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDU1LCA4OCwgMTg4KTtcXG59XFxuXFxuXFxuLmNvbnRlZW50SG9sZGVyIGgyLCAuY29udGVlbnRIb2xkZXIgcCwgLmV4aXRCdXR0b24ge1xcbiAgICBtYXJnaW46MTBweDtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsK0JBQStCOztJQUUvQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZOztJQUVaLHNCQUFzQjtJQUN0QixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCOzs7SUFHdkIsbUJBQW1COzs7QUFHdkI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFFBQVE7SUFDUixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBib3gtc2l6aW5nOiBub25lO1xcbn1cXG4uc2VjdGlvbnMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIzNiwgMjM2LCAyNTUpO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxufVxcblxcbi5lcnJvck1lc3NhZ2Uge1xcblxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuMjk5KTtcXG5cXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MzA7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBcXG59XFxuXFxuLm1lc3NhZ2VIb2xkZXIge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6c2lsdmVyO1xcbiAgICBoZWlnaHQ6MTUwcHg7XFxuICAgIHdpZHRoOjIwMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbn1cXG5cXG4uY29udGVudEhvbGRlciB7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6MjAwcHg7XFxufVxcblxcbi5leGl0QnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDoxMDBweDtcXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIGJvcmRlcjowO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOnJveWFsYmx1ZTtcXG5cXG59XFxuXFxuLmV4aXRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDU1LCA4OCwgMTg4KTtcXG59XFxuXFxuXFxuLmNvbnRlZW50SG9sZGVyIGgyLCAuY29udGVlbnRIb2xkZXIgcCwgLmV4aXRCdXR0b24ge1xcbiAgICBtYXJnaW46MTBweDtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRoZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZZZWFyIGZyb20gXCIuLi9zdGFydE9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlPZlllYXJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIGRheSBvZiB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlLCBzdGFydE9mWWVhcihkYXRlKSk7XG4gIHZhciBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGFuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBjbGVhbkRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2aWdhdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmlnYXRpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtb2JpbGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IGFkZEJpbmRpbmdzLCByZW1vdmVCaW5kaW5ncyB9IGZyb20gJy4vZWxlbWVudEV2ZW50cy5qcyc7XG5pbXBvcnQgeyBnZXRJbml0aWFsRWxlbWVudHMsIGdldFVwZGF0ZWRFbGVtZW50cyB9IGZyb20gJy4vcGFnZUxheW91dC5qcyc7XG5pbXBvcnQgeyBuYXZpZ2F0aW9uIH0gZnJvbSAnLi9uYXYuanMnO1xuXG5pbXBvcnQgeyBjb250ZW50TWVudSB9IGZyb20gJy4vY29udGVudC5qcyc7XG5cbmNvbnN0IE1vYmlsZSA9ICgpID0+IHtcbiAgbGV0IGRvbTtcbiAgbGV0IGlzTW9iaWxlID0gZmFsc2U7XG5cbiAgbGV0IG1vYmlsZU1lbnVPbiA9IGZhbHNlO1xuXG4gIGxldCByZW1vdmVNb2JpbGVNZW51ID0gZmFsc2U7XG5cbiAgbGV0IG1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDU1MHB4KScpO1xuICBsZXQgY29udGVudDtcbiAgbGV0IG5hdjtcblxuICBjb25zdCByZW1vdmVNb2JpbGVCaW5kaW5ncyA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcblxuICAgIHJlbW92ZUJpbmRpbmdzKGRvbS5oYW1idXJnZXJNZW51LCBvcGVuTmF2aWdhdGlvbiwgJ2NsaWNrJyk7XG4gICAgcmVtb3ZlQmluZGluZ3MoZG9tLmV4aXQsIG9wZW5OYXZpZ2F0aW9uLCAnY2xpY2snKTtcbiAgICByZW1vdmVCaW5kaW5ncyhkb20ucHJvamVjdEFkZGVyLCBhZGRSZW5kZXJQcm9qZWN0QmluZGluZ3MsICdjbGljaycpO1xuXG4gICAgcmVtb3ZlQmluZGluZ3MoZWxlbWVudHMucHJvamVjdENvbnRhaW5lciwgb3Blbk5hdmlnYXRpb24sICdjbGljaycpO1xuICAgIHJlbW92ZUJpbmRpbmdzKGRvbS51cENvbWluZ0J1dHRvbiwgb3Blbk5hdmlnYXRpb24sICdjbGljaycpO1xuICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmVkaXRJdGVtcywgYWRkUmVuZGVyTW9iaWxlQmluZGluZ3MsICdjbGljaycpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVJlbmRlclByb2plY3RCaW5kaW5ncyA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcblxuICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmFkZFByb2plY3RMYWJlbHMsIHJlbmRlck1vYmlsZU1lbnVDbGljaywgJ2NsaWNrJyk7XG4gICAgcmVtb3ZlQmluZGluZ3MoZG9tLndob2xlT3ZlcmxheSwgcmVuZGVyTW9iaWxlTWVudUNsaWNrLCAnY2xpY2snKTtcbiAgICByZW1vdmVCaW5kaW5ncyh3aW5kb3csIHJlbmRlck1vYmlsZU1lbnVLZXlzLCAna2V5ZG93bicpO1xuICB9O1xuXG4gIGNvbnN0IGFkZE1vYmlsZUJpbmRpbmdzID0gKCkgPT4ge1xuICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuXG4gICAgYWRkQmluZGluZ3MoZG9tLmhhbWJ1cmdlck1lbnUsIG9wZW5OYXZpZ2F0aW9uLCAnY2xpY2snKTtcbiAgICBhZGRCaW5kaW5ncyhkb20uZXhpdCwgb3Blbk5hdmlnYXRpb24sICdjbGljaycpO1xuICAgIGFkZEJpbmRpbmdzKGRvbS5wcm9qZWN0QWRkZXIsIGFkZFJlbmRlclByb2plY3RCaW5kaW5ncywgJ2NsaWNrJyk7XG5cbiAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5wcm9qZWN0Q29udGFpbmVyLCBvcGVuTmF2aWdhdGlvbiwgJ2NsaWNrJyk7XG4gICAgYWRkQmluZGluZ3MoZG9tLnVwQ29taW5nQnV0dG9uLCBvcGVuTmF2aWdhdGlvbiwgJ2NsaWNrJyk7XG4gICAgYWRkQmluZGluZ3MoZWxlbWVudHMuZWRpdEl0ZW1zLCBhZGRSZW5kZXJNb2JpbGVCaW5kaW5ncywgJ2NsaWNrJyk7XG4gIH07XG5cbiAgY29uc3Qgb3Blbk5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgbW9iaWxlTWVudU9uID0gIW1vYmlsZU1lbnVPbjtcbiAgICByZW5kZXJNb2JpbGVNZW51KCk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRNb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIGRvbS5leGl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9tLm1vYmlsZU1lbnUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBkb20ucGFnZUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBkb20ubmF2aWdhdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IGFkZFJlbmRlclByb2plY3RCaW5kaW5ncyA9ICgpID0+IHtcbiAgICBuYXYuYWN0aXZhdGVQcm9qZWN0VGFzaygpO1xuXG4gICAgYWRkUmVuZGVyTW9iaWxlQmluZGluZ3MoKTtcbiAgfTtcblxuICBjb25zdCBhZGRSZW5kZXJNb2JpbGVCaW5kaW5ncyA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICBuYXYucmVtb3ZlU3BlY2lhbE1vYmlsZUJpbmRpbmdzKCk7XG5cbiAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5hZGRQcm9qZWN0TGFiZWxzLCByZW5kZXJNb2JpbGVNZW51Q2xpY2ssICdjbGljaycpO1xuICAgIGFkZEJpbmRpbmdzKGRvbS53aG9sZU92ZXJsYXksIHJlbmRlck1vYmlsZU1lbnVDbGljaywgJ2NsaWNrJyk7XG4gICAgYWRkQmluZGluZ3Mod2luZG93LCByZW5kZXJNb2JpbGVNZW51S2V5cywgJ2tleWRvd24nKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJNb2JpbGVNZW51S2V5cyA9IChldmVudCkgPT4ge1xuICAgIG5hdi5jcmVhdGVQcm9qZWN0VGFza3NLZXlzKGV2ZW50KTtcblxuICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgbmF2LnJlbW92ZVNwZWNpYWxNb2JpbGVCaW5kaW5ncygpO1xuICAgICAgcmVtb3ZlUmVuZGVyTW9iaWxlRXZlbnRzKCk7XG4gICAgICByZW5kZXJNb2JpbGVNZW51KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVJlbmRlck1vYmlsZUV2ZW50cyA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcblxuICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmFkZFByb2plY3RMYWJlbHMsIHJlbmRlck1vYmlsZU1lbnVDbGljaywgJ2NsaWNrJyk7XG4gICAgcmVtb3ZlQmluZGluZ3MoZG9tLndob2xlT3ZlcmxheSwgcmVuZGVyTW9iaWxlTWVudUNsaWNrLCAnY2xpY2snKTtcbiAgICByZW1vdmVCaW5kaW5ncyh3aW5kb3csIHJlbmRlck1vYmlsZU1lbnVLZXlzLCAna2V5ZG93bicpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1vYmlsZU1lbnVDbGljayA9ICgpID0+IHtcbiAgICBuYXYuY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2soKTtcbiAgICBuYXYucmVtb3ZlU3BlY2lhbE1vYmlsZUJpbmRpbmdzKCk7XG4gICAgcmVtb3ZlUmVuZGVyTW9iaWxlRXZlbnRzKCk7XG5cbiAgICByZW5kZXJNb2JpbGVNZW51KCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTW9iaWxlTWVudSA9IChjYW5SZW1vdmVNb2JpbGVNZW51KSA9PiB7XG4gICAgZG9tID0gZ2V0SW5pdGlhbEVsZW1lbnRzKCk7XG4gICAgcmVtb3ZlTW9iaWxlQmluZGluZ3MoKTtcbiAgICBuYXYucmVtb3ZlTmF2aWdhdGlvbkJpbmRpbmdzKCk7XG4gICAgY29udGVudC5yZW1vdmVUYXNrQmluZGluZ3MoKTtcbiAgICByZXNldE1vYmlsZU1lbnUoKTtcblxuICAgIGlmIChtb2JpbGVNZW51T24pIHtcbiAgICAgIGRvbS5uYXZpZ2F0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZG9tLmV4aXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBkb20ubW9iaWxlTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChyZW1vdmVNb2JpbGVNZW51ICYmIGNhblJlbW92ZU1vYmlsZU1lbnUpIHtcbiAgICAgIGRvbS5uYXZpZ2F0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZG9tLm1vYmlsZU1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRvbS5wYWdlQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgZG9tLmV4aXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgbmF2LmFkZE5hdmlnYXRpb25CaW5kaW5ncygpO1xuICAgICAgY29udGVudC5hZGRUYXNrQmluZGluZ3MoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW1vYmlsZU1lbnVPbikgY29udGVudC5hZGRUYXNrQmluZGluZ3MoKTtcbiAgICBhZGROYXZpZ2F0aW9uQmluZGluZ3MoKTtcbiAgICBhZGRNb2JpbGVCaW5kaW5ncygpO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5hdmlnYXRpb25CaW5kaW5ncyA9ICgpID0+IHtcbiAgICBuYXYuYWRkTmF2aWdhdGlvbkJpbmRpbmdzKCk7XG4gICAgbmF2LnJlbW92ZVNwZWNpYWxNb2JpbGVCaW5kaW5ncygpO1xuICB9O1xuXG4gIGNvbnN0IHdhdGNoTWVkaWEgPSAobWVkaWFRdWVyeSkgPT4ge1xuICAgIGlmIChtZWRpYS5tYXRjaGVzIHx8IG1lZGlhUXVlcnkubWF0Y2hlcykge1xuICAgICAgaWYgKCFyZW1vdmVNb2JpbGVNZW51KSB7XG4gICAgICAgIG5hdi5yZW1vdmVFZGl0b3IoKTtcbiAgICAgICAgcmVuZGVyTW9iaWxlTWVudSgpO1xuXG4gICAgICAgIHJlbW92ZU1vYmlsZU1lbnUgPSB0cnVlO1xuICAgICAgICBpc01vYmlsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW1vdmVNb2JpbGVNZW51KSB7XG4gICAgICAgIHJlbmRlck1vYmlsZU1lbnUodHJ1ZSk7XG4gICAgICAgIHJlbW92ZU1vYmlsZUJpbmRpbmdzKCk7XG5cbiAgICAgICAgcmVtb3ZlUmVuZGVyUHJvamVjdEJpbmRpbmdzKCk7XG4gICAgICAgIG5hdi5yZW1vdmVOYXZpZ2F0aW9uQmluZGluZ3MoKTtcbiAgICAgICAgbmF2LmFkZE5hdmlnYXRpb25CaW5kaW5ncygpO1xuICAgICAgICBuYXYucmVuZGVyT3ZlcmxheSgpO1xuXG4gICAgICAgIHJlbW92ZU1vYmlsZU1lbnUgPSBmYWxzZTtcbiAgICAgICAgaXNNb2JpbGUgPSBmYWxzZTtcbiAgICAgICAgbW9iaWxlTWVudU9uID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFjdGl2YXRlTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBjb250ZW50ID0gY29udGVudE1lbnU7XG4gICAgbmF2ID0gbmF2aWdhdGlvbjtcblxuICAgIGFkZEJpbmRpbmdzKG1lZGlhLCB3YXRjaE1lZGlhLCAnY2hhbmdlJyk7XG4gICAgd2F0Y2hNZWRpYShtZWRpYSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWN0aXZhdGVNb2JpbGVNZW51IH07XG59O1xuXG5sZXQgbW9iaWxlID0gTW9iaWxlKCk7XG5leHBvcnQgeyBtb2JpbGUgfTtcbiJdLCJuYW1lcyI6WyJnZXRVcGRhdGVkRWxlbWVudHMiLCJhc3NpZ25Ub29scyIsImVsZW1lbnRzIiwiaW5kZXgiLCJib2FyZEluZGV4IiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInRvb2xzQ2hpbGRyZW4iLCJBcnJheSIsImZyb20iLCJjaGlsZHJlbiIsInRvb2xFbGVtZW50IiwidGFza0luZGV4IiwiYXNzaWduVGFza0luZGV4IiwiZWxlbWVudCIsInRhc2tDaGlsZHJlbiIsInRhc2tDaGlsZCIsInRhc2tUb29sc0NoaWxkcmVuIiwiYXNzaWduQm9hcmRJY29ucyIsImN1cnJlbnRJbmRleCIsImJvYXJkIiwiZWRpdEV4YW1wbGVJY29ucyIsIml0ZW1FbGVtZW50IiwidGFza1BhcmFncmFwaCIsImFzc2lnbkJvYXJkRWxlbWVudHMiLCJwYWdlQ29udGVudENoaWxkcmVuIiwiYm9hcmRDb250ZW50IiwicmVtb3ZlSXRlbSIsImFkZEJpbmRpbmdzIiwicmVtb3ZlQmluZGluZ3MiLCJzZXRBcnJheSIsInNldE9iamVjdCIsInNlbmQiLCJnZXRJbml0aWFsRWxlbWVudHMiLCJjcmVhdGVCb2FyZCIsImNyZWF0ZUFkZEJvYXJkIiwiY3JlYXRlQm9hcmRFZGl0b3IiLCJjcmVhdGVMaXN0RWRpdG9yIiwiY3JlYXRlVXBDb21pbmdCb2FyZCIsImNyZWF0ZVRhc2tBcnJhbmdlbWVudCIsImFwcGx5VGFza0NoYW5nZXMiLCJyZW1vdmVOYXZFbXB0aWVzIiwiYWRkQm9hcmRUYXNrcyIsInJlbW92ZUJvYXJkT3ZlcmxheSIsImFkZEJvYXJkT3ZlcmxheSIsInNoYWRlQnV0dG9uQ29sb3IiLCJzZXRUYXNrRGF0ZSIsImZpbmRCb2FyZFRleHRCb3giLCJnZXRFbGVtZW50QnlCb2FyZEluZGV4IiwiZ2V0T2JqZWN0VmFsdWUiLCJjaGFuZ2VWYWx1ZVRvRGF0ZSIsImNyZWF0ZVRhc2tUZW1wbGF0ZSIsImdldFVwQ29taW5nVGFza3MiLCJyZW5kZXJUaW1lVGFza3MiLCJpc1RvZGF5IiwiaXNUaGlzV2VlayIsInN0b3JhZ2UiLCJjaGVja1NwYWNlcyIsIkNvbnRlbnQiLCJzdGF0aWNMaXN0VGFza3MiLCJjaGFuZ2VkTGlzdFRhc2tzIiwidGFza0NoYW5nZXMiLCJ1cGNvbWluZ1Rhc2tzIiwiZGVsZXRlZFVwQ29taW5nSXRlbXMiLCJpc1VwQ29taW5nIiwiY2FuRGlzcnVwdCIsIm5hbWUiLCJkb20iLCJyZW1vdmVDb250ZW50QmluZGluZ3MiLCJib29sIiwiYm9hcmRlckJ1dHRvbiIsImFkZEJvYXJkVGFza3NDbGljayIsImRlbGV0ZUJvYXJkIiwiZWRpdEJvYXJkIiwidGFza0FkZGVycyIsImFkZExpc3RFZGl0b3JDbGljayIsImFkZENvbnRlbnRCaW5kaW5ncyIsImFkZExpc3RCaW5kaW5ncyIsImJ1dHRvbiIsInNoYWRlQnV0dG9uQ29sb3JDbGljayIsInRyYXNoSXQiLCJkZWxldGVUYXNrIiwiZmluaXNoZWQiLCJhZGRUYXNrQ2xpY2siLCJlZGl0IiwiZWRpdFRhc2siLCJjaXJjbGVJY29uIiwiY3Jvc3NPdXRUYXNrIiwiZXhpdEVkaXRvciIsImV4aXRMaXN0RWRpdG9yIiwiYWRkVGFza0JpbmRpbmdzIiwicmVtb3ZlVGFza0JpbmRpbmdzIiwicmVtb3ZlTGlzdEJpbmRpbmdzIiwiYWRkQ2hhbmdlTmFtZUJpbmRpbmciLCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucyIsImNoYW5nZU5hbWUiLCJjcm9zc091dER1cGxpY2F0ZVRhc2siLCJ0YXNrIiwidGFza3MiLCJjaGlsZFRhc2siLCJuYXZJbmRleCIsImNoZWNrZWQiLCJyZW1vdmVDcm9zc091dEVkaXRvciIsImNoZWNrQ3Jvc3NPdXRFZGl0b3IiLCJuZXdUYXNrIiwiYm9hcmRDb3VudGVyIiwiY2FuRWRpdCIsInRhc2tDb3VudGVyIiwiY2hhbmdlZEJvYXJkTGlzdHMiLCJsZW5ndGgiLCJlZGl0b3IiLCJsaXN0RWRpdG9yIiwiaW5kZXhlcyIsImdldEluZGV4ZXMiLCJyZW1vdmVMaXN0RWRpdG9yIiwiYWRkTGlzdEVkaXRvclRvQ3Jvc3NPdXRUYXNrcyIsImN1cnJlbnROYW1lIiwicmV0cmlldmVUaXRsZSIsInNlbmREYXRhIiwic3RvcmVEYXRhIiwic2VuZFVwQ29taW5nQ2hhbmdlcyIsInJlbmRlckJvYXJkTGlzdHMiLCJldmVudCIsInRhcmdldCIsImJvYXJkSW5kZXgyIiwibGlzdEluZGV4IiwibmV3U3RhdGljTGlzdFRhc2tzIiwiZGVsZXRlZFRhc2siLCJjdXJyZW50VGFzayIsImxpc3RUYXNrIiwibmV3QXJyYXkiLCJuZXdlckFycmF5IiwiZmlsdGVyIiwicHVzaCIsIm5ld1Rhc2tzIiwicmVtb3ZlVXBDb21pbmdUYXNrcyIsImFjdGl2YXRlQ29udGVudE1lbnUiLCJ0ZXh0IiwiZGF0ZSIsInByaW9yaXR5IiwiYWRkTGlzdEVkaXRvciIsImZpbmRMaXN0RWRpdG9yQm9hcmRJbmRleCIsInN0b3BMb29wIiwiYnJlYWtMb29wIiwiYWRkVGFzayIsImNoYW5nZUR1cGxpY2F0ZVRhc2tzIiwiY3VycmVudEJvYXJkSW5kZXgiLCJjdXJyZW50VGFza0luZGV4IiwiY2hhbmdlVGFzayIsIm9sZFRhc2siLCJuYXZOYW1lIiwiYWRkVGFza1RvVGltZSIsInJlbW92ZU91dE9mRGF0ZVRhc2tzIiwiY3JlYXRlVGFzayIsImRhdGVWYWx1ZSIsImRhdGVQaWNrZXIiLCJ2YWx1ZSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsInRhc2tUZXh0IiwidGFza1RleHRCb3giLCJnZXROZXdJbmRleGVzIiwibmV3Qm9hcmRJbmRleCIsIm5ld1Rhc2tJbmRleCIsIm5ld0luZGV4IiwiY2hlY2tVcENvbWluZ1Rhc2siLCJpc1Rhc2siLCJjb3VudGVyIiwiYWRkT3V0T2ZEYXRlVGFza3NUb0RlbGV0ZWRVcGNvbWluZ0l0ZW1zIiwic2hhZGVCdXR0b25CeUNsYXNzIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJidXR0b25zIiwiYnV0dG9uUGFyYWdyYXBoIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwic2hhZGVCdXR0b25CeVByaW9yaXR5IiwicmVtb3ZlRWRpdFRpdGxlTWVudSIsImxpc3QiLCJjdXJyZW50VGV4dCIsInRleHRDb250ZW50IiwiZWRpdEJvYXJkVGVtcGxhdGUiLCJmaW5hbEFycmF5IiwiY29uY2F0IiwibGlzdEVkaXRvclRlbXBsYXRlIiwiY3JlYXRpbmdUYXNrIiwic3BsaWNlIiwibGlzdEJvYXJkQXJyYXkiLCJib2FyZFRleHQiLCJib2FyZENvbnRlbnRUZXh0Qm94IiwicmVuZGVyRWRpdEJvYXJkVGV4dFZhbHVlcyIsImlzQ2hhbmdlZE5hbWUiLCJpbmRleGVzTGVuZ3RoIiwiaSIsInJlbmRlclNpbmdsZUJvYXJkTGlzdCIsInRhc2tMaXN0IiwiYWRkRGF0ZSIsImlubmVySFRNTCIsImxpc3RUZXh0IiwidGFza0xpc3RDaGlsZHJlbiIsImFjdGl2YXRlQ29udGVudCIsInJlbmRlckxpc3RUYXNrcyIsImlzRW1wdHkiLCJhZGRCb2FyZCIsInBhZ2VDb250ZW50IiwiaXNVcENvbWluZ0JvYXJkIiwidXBDb21pbmdCb2FyZCIsInNldENoYW5nZWRUb0RvTGlzdHNFbXB0eSIsInNldENoYW5nZWRUb0RvTGlzdHMiLCJhY3RpdmF0ZU5hdkNvbnRlbnQiLCJyZXRyaWV2ZURhdGEiLCJhY3RpdmF0ZVVwQ29taW5nQ29udGVudCIsInJlbW92ZU5hdlRhc2tzIiwiZGlzcnVwdENvbnRlbnQiLCJvYmplY3RJbmRleCIsInJlbW92ZVVwQ29taW5nSXRlbXMiLCJuYXZzIiwiZ2V0QWxsRGF0YSIsInByb2plY3RUeXBlVGV4dCIsIm5ld0RhdGEiLCJvdmVyd3JpdGVEYXRhIiwiZ2V0SXNVcENvbWluZyIsImdldEluZGV4IiwiZGlzcnVwdEZsb3ciLCJvYmplY3ROYW1lIiwiY29udGVudE1lbnUiLCJmaW5kT2JqZWN0QnlOYW1lIiwibmV3TmF2IiwibmF2S2V5cyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJjcmVhdGVCb2FyZFRlbXBsYXRlIiwiY3VycmVudFRhc2tzIiwicmVuZGVyTGlzdEVkaXRvclZhbHVlIiwidmFsdWVBc0RhdGUiLCJzdGF0aWNBcnJheSIsImJvYXJkVGV4dEJveCIsImFycmF5IiwiYWRkSXRlbSIsIml0ZW0iLCJvYmplY3QiLCJpc0FycmF5IiwibmV3T2JqZWN0IiwiYmxhbmtPYmplY3QiLCJuZXdPYmplY3RLZXlzIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiYmxhbmtBcnJheSIsImZ1bmMiLCJiaW5kaW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjcmVhdGVOYXZUYXNrIiwiY3JlYXRlUHJvamVjdEVkaXRvciIsIm5hdiIsImRvbUVsZW1lbnRzIiwiY2hhbmdlZFRhc2tzIiwic3RhdGljVGFza3MiLCJjb250ZW50IiwiaGlnaGxpZ2h0ZWRJbmRleCIsInVwY29taW5nQnV0dG9uIiwicmVtb3ZlTmF2aWdhdGlvbkJpbmRpbmdzIiwibm90UmVtb3ZlQWRkUHJvamVjdExhYmVsIiwidXBkYXRlZEl0ZW1zIiwidXBDb21pbmdCdXR0b24iLCJlZGl0SXRlbXMiLCJlZGl0SXRlbSIsImRlbGV0ZUl0ZW1zIiwiZGVsZXRlSXRlbSIsInByb2plY3RDb250YWluZXIiLCJzd2l0Y2hQYWdlIiwicHJvamVjdEFkZGVyIiwiYWN0aXZhdGVQcm9qZWN0VGFzayIsImFjdGl2YXRlVXBDb21pbmdUYXNrIiwiaGlnaGxpZ2h0VXBDb21pbmdCdXR0b24iLCJ1bmhvdmVyVXBDb21pbmdCdXR0b24iLCJhZGRQcm9qZWN0TGFiZWxzIiwiY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2siLCJ3aW5kb3ciLCJjcmVhdGVQcm9qZWN0VGFza3NLZXlzIiwicmVtb3ZlU3BlY2lhbE1vYmlsZUJpbmRpbmdzIiwid2hvbGVPdmVybGF5IiwibG9va1VwVGFzayIsInVuaGlnaGxpZ2h0VXBDb21pbmdCdXR0b24iLCJhZGROYXZpZ2F0aW9uQmluZGluZ3MiLCJhZGRQcm9qZWN0QnV0dG9uV2hvbGVPdmVyYXlCaW5kaW5ncyIsInByb2plY3RCdXR0b24iLCJyZW1vdmVQcm9qZWN0V2hvbGVPdmVybGF5QmluZGluZ3MiLCJzZXRIaWdobGlnaHRJbmRleCIsInN0b3JlSGlnaGxpZ2hJbmRleCIsInRpdGxlIiwicmVuZGVySGlnaGxpZ2h0RWxlbWVudHMiLCJyZW5kZXJQcm9qZWN0VGFza3MiLCJ1bkhpZ2hsaWdodEJ1dHRvbiIsIm5hdlRhc2siLCJ1cENvbWluZ1Rhc2siLCJoaWdobGlnaHQiLCJpc0VkaXQiLCJoaWdobGlnaHRCdXR0b24iLCJnZXRDdXJyZW50SW5kZXgiLCJwcm9qZWN0TGFiZWwiLCJjcmVhdGVQcm9qZWN0VGFza3MiLCJnZXRUZXh0Qm94VmFsdWVzIiwiaXNFZGl0aW5nVGFzayIsInNlbmROYW1lIiwicmVuZGVyT3ZlcmxheSIsImRlbGV0ZURhdGEiLCJyZW5kZXJJbmRleCIsImNvbnRlbnRJbmRleCIsIm5vcm1hbEluZGV4IiwicHJvamVjdFRhc2siLCJjcmVhdGVFZGl0b3IiLCJlZGl0VGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFzc2lnblRhc2tBY3Rpb25zIiwiY2hpbGRFbGVtZW50cyIsIm5ld0VsZW1lbnQiLCJhc3NpZ25WYWx1ZUVsZW1lbnRzIiwicHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbiIsImVsZW1lbnRDaGlsZHJlbiIsImNoaWxkQXJyYXkiLCJwcm9qZWN0VGFza0hvbGRlciIsImVkaXRvclRleHQiLCJjaGVja1Byb2plY3RFZGl0b3IiLCJvdmVybGF5IiwiZGlzcGxheSIsInJlbW92ZUVkaXRvciIsImRpc2FibGVQYWdlQ29udGVudEVsZW1lbnRzIiwidXBkYXRlZEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjdXJzb3IiLCJjaGFuZ2VkVGl0bGVzVG9UYXNrcyIsInRpdGxlcyIsInRpdGxlQXJyYXkiLCJ2YWx1ZXMiLCJhY3RpdmF0ZU5hdmlnYXRpb24iLCJzdG9yZWREYXRhIiwiZm9ybWF0ZWRUaXRsZXMiLCJmb3JtYXRlZERhdGEiLCJvdmVyd3JpdGVUaXRsZXMiLCJyZXRyaWV2ZUhpZ2hsaWdodEluZGV4IiwibmF2aWdhdGlvbiIsImNyZWF0ZURvbUVsZW1lbnRzIiwiYm9keSIsInBhZ2VUZXh0Iiwic2VjdGlvbiIsImV4aXQiLCJsaXN0VGl0bGUiLCJwcm9qZWN0VGV4dCIsInBsdXNTaWduIiwiZWRpdFByb2plY3RCdXR0b24iLCJhZGRQcm9qZWN0TGFiZWwiLCJlcnJvck1lc3NhZ2UiLCJlcnJvck1lc3NhZ2VUZXh0IiwiZXhpdEJ1dHRvbiIsImhhbWJ1cmdlck1lbnUiLCJtb2JpbGVNZW51IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb2plY3RDb250YWluZXJUZXh0IiwidGFza0hvbGRlcnMiLCJ0YXNrTGlzdHMiLCJib2FyZE92ZXJsYXkiLCJleGFtcGxlQm9hcmRUZXh0IiwiZGF0ZVRvb2xzIiwiaXRlbXMiLCJ0aXRsZUl0ZW1zIiwidXBjb21pbmciLCJkYXRhIiwicmV0cmlldmVUaXRsZXMiLCJkZWxldGVOYW1lIiwibmV3VGl0bGVzIiwibmV3VGl0bGVLZXlzIiwiZmluYWxUaXRsZXMiLCJuZXdJdGVtcyIsIm5ld0l0ZW1zS2V5cyIsIm5ld2VySXRlbXMiLCJkYXRhU3RvcmFnZSIsInR1cm5EYXRhSW50b0Zvcm1hdCIsImpzb25UaXRsZXMiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbkRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmV0cmlldmVkRGF0YSIsImdldEl0ZW0iLCJyZXRyaWV2ZWRUaXRsZXMiLCJyYXdEYXRhIiwicGFyc2UiLCJmb3JtYXREYXRhIiwiaGlnaGxpZ2h0SW5kZXgiLCJhZGREYXRlc1RvVGFza3MiLCJkYXRlcyIsIm5ld0RhdGFLZXlzIiwicmVtb3ZlRGF0ZSIsInRhc2tLZXlzIiwicmVtb3ZlRGF0ZU9iamVjdHMiLCJib2FyZEtleXMiLCJuZXdCb2FyZCIsInRyYXNoSW1hZ2UiLCJlZGl0SWNvbiIsImNoZWNrTWFya0ljb24iLCJleGl0SWNvbiIsInRhc2tDbGFzcyIsImVkaXRDbGFzcyIsImNpcmNsZUljb25CYWNrZ3JvdW5kIiwibmV3VGFza1RleHQiLCJkYXRlVGV4dCIsInRlbXBsYXRlIiwiYWRkQm9hcmRUZXh0IiwiZGVmYXVsdENvbG9yIiwiaWNvbiIsImljb25DbGFzcyIsImhpZ2hsaWdodGVkIiwic3R5bGVUZXh0Iiwic29ydERhdGVzQnlMYXRlc3REYXkiLCJjcmVhdGVVcENvbWluZ1RlbXBsYXRlIiwiYWRkVXBDb21pbmdCb2FyZHMiLCJ0b2RheUJvYXJkIiwid2Vla0JvYXJkIiwidGltZUJvYXJkcyIsImdldFRpbWVVcGNvbWluZ1ZhbHVlcyIsInRvZGF5VGFza3MiLCJ3ZWVrVGFza3MiLCJnZXRUaW1lTm9ybWFsVmFsdWVzIiwiZ2V0VGFza1RpbWVWYWx1ZXMiLCJ0aW1lcyIsInVuc2hhZGVCdXR0b25zIiwiY2hhbmdlTGlzdEVkaXRvclByaW9yaXR5IiwiY3VycmVudFByaW9yaXR5IiwicGFyYWdyYXBoIiwiZm9ybWF0IiwiZ2V0RGF5T2ZZZWFyIiwiYnV0dG9uVGV4dCIsImNoaWxkIiwiZG9tRWxlbWVudCIsInBhcmVudEFycmF5IiwiY3VycmVudE9iamVjdCIsIm9iamVjdFZhbHVlIiwibmV3VmFsdWUiLCJzcGxpdCIsInllYXIiLCJtb250aEluZGV4IiwiZGF5IiwidGltZVRhc2tzIiwibmV3VGltZVRhc2tzIiwic29ydCIsInRpbWVUYXNrMSIsInRpbWVUYXNrMiIsImRheXMyIiwiZGF5czEiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwidHJpbSIsIk1vYmlsZSIsImlzTW9iaWxlIiwibW9iaWxlTWVudU9uIiwicmVtb3ZlTW9iaWxlTWVudSIsIm1lZGlhIiwibWF0Y2hNZWRpYSIsInJlbW92ZU1vYmlsZUJpbmRpbmdzIiwib3Blbk5hdmlnYXRpb24iLCJhZGRSZW5kZXJQcm9qZWN0QmluZGluZ3MiLCJhZGRSZW5kZXJNb2JpbGVCaW5kaW5ncyIsInJlbW92ZVJlbmRlclByb2plY3RCaW5kaW5ncyIsInJlbmRlck1vYmlsZU1lbnVDbGljayIsInJlbmRlck1vYmlsZU1lbnVLZXlzIiwiYWRkTW9iaWxlQmluZGluZ3MiLCJyZW5kZXJNb2JpbGVNZW51IiwicmVzZXRNb2JpbGVNZW51IiwicmVtb3ZlUmVuZGVyTW9iaWxlRXZlbnRzIiwiY2FuUmVtb3ZlTW9iaWxlTWVudSIsIndhdGNoTWVkaWEiLCJtZWRpYVF1ZXJ5IiwibWF0Y2hlcyIsImFjdGl2YXRlTW9iaWxlTWVudSIsIm1vYmlsZSJdLCJzb3VyY2VSb290IjoiIn0=