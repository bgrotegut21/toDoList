import {
  removeItem,
  addItem,
  addBindings,
  removeBindings,
  setArray,
} from './elementEvents.js';
import { getInitialElements, getUpdatedElements } from './pageLayout.js';

import { send } from './send.js';
import { storage } from './storage.js';

import { createNavTask, createProjectEditor } from './template.js';

import { contentMenu } from './content.js';

import { checkSpaces } from './utilities.js';

console.log('somethings');
const nav = () => {
  let domElements;
  let changedTasks = [];
  let staticTasks = [];
  let content;
  let highlightedIndex;
  let upcomingButton;

  const removeNavigationBindings = (notRemoveAddProjectLabel) => {
    let updatedItems = getUpdatedElements();
    let domElements = getInitialElements();
    upcomingButton = domElements.upComingButton;

    removeBindings(updatedItems.editItems, editItem, 'click');
    removeBindings(updatedItems.deleteItems, deleteItem, 'click');
    removeBindings(updatedItems.projectContainer, switchPage, 'click');
    removeBindings(domElements.projectAdder, activateProjectTask, 'click');
    removeBindings(domElements.upComingButton, activateUpComingTask, 'click');
    removeBindings(upcomingButton, highlightUpComingButton, 'mouseover');
    removeBindings(upcomingButton, unhoverUpComingButton, 'mouseleave');

    if (!notRemoveAddProjectLabel)
      removeBindings(
        updatedItems.addProjectLabels,
        createProjectTasksClick,
        'click'
      );
    if (!notRemoveAddProjectLabel && updatedItems.addProjectLabels.length != 0)
      removeBindings(window, createProjectTasksKeys, 'keydown');
  };

  const removeSpecialMobileBindings = () => {
    let updatedItems = getUpdatedElements();

    removeBindings(domElements.projectAdder, activateProjectTask, 'click');
    removeBindings(
      updatedItems.addProjectLabels,
      createProjectTasksClick,
      'click'
    );

    removeBindings(domElements.wholeOverlay, createProjectTasksClick, 'click');
    removeBindings(window, createProjectTasksKeys, 'keydown');
  };

  const lookUpTask = (index) => {
    return staticTasks[index];
  };

  const unhoverUpComingButton = () => {
    if (highlightedIndex != 'upcoming') unhighlightUpComingButton();
  };

  const addNavigationBindings = () => {
    let updatedItems = getUpdatedElements();
    let domElements = getInitialElements();

    addBindings(updatedItems.editItems, editItem, 'click');
    addBindings(updatedItems.deleteItems, deleteItem, 'click');
    addBindings(
      updatedItems.addProjectLabels,
      createProjectTasksClick,
      'click'
    );
    addBindings(updatedItems.projectContainer, switchPage, 'click');
    addBindings(domElements.projectAdder, activateProjectTask, 'click');
    addBindings(upcomingButton, activateUpComingTask, 'click');
    addBindings(upcomingButton, highlightUpComingButton, 'mouseover');
    addBindings(upcomingButton, unhoverUpComingButton, 'mouseleave');

    if (updatedItems.addProjectLabels.length != 0)
      addBindings(window, createProjectTasksKeys, 'keydown');
  };

  const addProjectButtonWholeOverayBindings = () => {
    let updatedItems = getUpdatedElements();
    addBindings(updatedItems.projectButton, createProjectTasksClick, 'click');
  };

  const removeProjectWholeOverlayBindings = () => {
    let updatedItems = getUpdatedElements();
    removeBindings(
      updatedItems.projectButton,
      createProjectTasksClick,
      'click'
    );
  };

  const setHighlightIndex = (index) => {
    highlightedIndex = index;
    storage.storeHighlighIndex(index);
  };

  const switchPage = (event) => {
    let title = staticTasks[event.target.currentIndex].task;
    content.activateContent(event.target.currentIndex, false, title);
    setHighlightIndex(event.target.currentIndex);
    renderHighlightElements();
    renderProjectTasks();
  };

  const unHighlightButton = () => {
    let index = 0;
    unhighlightUpComingButton();
    changedTasks.forEach((task) => {
      if (task.navTask || task.upComingTask) {
        if (task.highlight) {
          task.highlight = false;
        }
      }
      index++;
    });
  };

  const unhighlightUpComingButton = () => {
    upcomingButton.style.background = 'rgb(19, 75, 205)';
  };

  const highlightUpComingButton = () => {
    upcomingButton.style.background = 'rgb(22, 83, 227)';
  };

  const renderHighlightElements = () => {
    if (staticTasks.length == 0 && highlightedIndex != 'upcoming') return;
    let isEdit = changedTasks.filter((task) => task.edit);
    if (isEdit.length != 0) {
      unHighlightButton();
    } else {
      highlightButton(highlightedIndex);
    }
  };

  const highlightButton = (index) => {
    unHighlightButton();

    if (index == 'upcoming') highlightUpComingButton();
    else changedTasks[index].highlight = true;
  };

  const getCurrentIndex = () => {
    let updatedItems = getUpdatedElements();
    let projectLabel = updatedItems.addProjectLabels[0];
    if (!projectLabel) return false;
    let currentIndex = projectLabel.currentIndex;

    return currentIndex;
  };

  const createProjectTasksKeys = (event) => {
    if (event.key == 'Enter') {
      let currentIndex = getCurrentIndex();
      if (currentIndex === false) return;
      createProjectTasks(currentIndex);
    }
  };

  const createProjectTasksClick = () => {
    let currentIndex = getCurrentIndex();
    createProjectTasks(currentIndex);
  };

  const createProjectTasks = (index) => {
    let taskText = getTextBoxValues();
    let isEditingTask = false;
    let isUpComing = content.getIsUpComing();

    let task = { navTask: true, task: taskText, highlight: false };
    if (taskText.length != 0 && checkSpaces(taskText)) {
      if (staticTasks[index]) {
        staticTasks[index] = task;
        isEditingTask = true;
      } else {
        staticTasks.push(task);
        setHighlightIndex(index);
      }
    }

    changedTasks = setArray(staticTasks);
    renderHighlightElements();
    if (staticTasks[index]) changedTasks[index].highlight = true;
    renderProjectTasks();

    if (index == staticTasks.length - 1 && !isEditingTask) {
      send.sendName(index, task.task);
      storage.storeData();
      let title = staticTasks[index].task;

      content.activateContent(index, false, title);
    } else if (isEditingTask) {
      send.sendName(index, task.task);
      storage.storeData();
      if (isUpComing) content.activateContent('upcoming');
    }
    renderOverlay();
    content.addTaskBindings();
  };

  const deleteItem = (event) => {
    let index = event.target.currentIndex;
    staticTasks = removeItem(staticTasks, index);

    send.deleteData(index);
    storage.storeData();

    let renderIndex = index - 1;
    if (renderIndex < 0) {
      renderIndex = staticTasks.length - 1;
      if (staticTasks.length == 0) renderIndex = -1;
    }

    let contentIndex = content.getIndex();
    let isUpComing = content.getIsUpComing();
    let normalIndex = renderIndex + 1;

    if (renderIndex == -1) {
      content.activateContent(renderIndex, true);
    } else if (normalIndex == contentIndex) {
      let title = staticTasks[renderIndex].task;
      content.activateContent(renderIndex, true, title);
      setHighlightIndex(renderIndex);
    } else if (isUpComing) {
      content.activateContent('upcoming', true);
      setHighlightIndex('upcoming');
    } else {
      let title = staticTasks[contentIndex].task;
      content.activateContent(contentIndex, true, title);
      setHighlightIndex(contentIndex);
    }

    changedTasks = setArray(staticTasks);
    renderHighlightElements();
    renderProjectTasks();
  };

  const editItem = (event) => {
    let projectTask = lookUpTask(event.target.currentIndex);
    let text = projectTask.task;
    createEditor(text, event.target.currentIndex, true);
  };

  const getTextBoxValues = () => {
    let editText = document.querySelector('.editText');
    let text = editText.value;
    return text;
  };

  const assignTaskActions = (index, childElement) => {
    let childElements = Array.from(childElement.children);
    childElements.forEach((newElement) => {
      if (newElement.getAttribute('class') == 'deleteItem') {
        newElement.currentIndex = index;
      } else if (newElement.getAttribute('class') == 'editProject') {
        newElement.currentIndex = index;
      }
    });
  };

  const assignValueElements = () => {
    let updatedItems = getUpdatedElements();
    let index = 0;
    updatedItems.projectTaskHolderChildren.forEach((element) => {
      element.currentIndex = index;
      let elementChildren = Array.from(element.children);
      elementChildren.forEach((childElement) => {
        if (childElement.getAttribute('class') == 'projectTools') {
          childElement.currentIndex = index;
          assignTaskActions(index, childElement);
        } else if (childElement.getAttribute('class') == 'addProjectLabel') {
          childElement.currentIndex = index;
        }
        if (childElement.getAttribute('class') == 'projectContainer') {
          childElement.currentIndex = index;
          let childArray = Array.from(childElement.children);
          childArray[0].currentIndex = index;
        }
      });
      index++;
    });
  };

  const renderProjectTasks = () => {
    domElements = getInitialElements();

    domElements.projectTaskHolder.innerHTML = '';
    changedTasks.forEach((task) => {
      if (task.edit) {
        let editorText = createProjectEditor(task);
        domElements.projectTaskHolder.innerHTML += editorText;
      } else if (task.navTask) {
        let taskText;
        task.highlight
          ? (taskText = createNavTask(task, true))
          : (taskText = createNavTask(task));
        domElements.projectTaskHolder.innerHTML += taskText;
      }
    });
    assignValueElements();
    addNavigationBindings();
  };

  const renderOverlay = () => {
    if (checkProjectEditor()) {
      domElements.overlay.style.display = 'block';
      domElements.wholeOverlay.style.display = 'block';
      addBindings(domElements.wholeOverlay, createProjectTasksClick, 'click');
      addProjectButtonWholeOverayBindings();
    } else {
      domElements.overlay.style.display = 'none';
      removeBindings(
        domElements.wholeOverlay,
        createProjectTasksClick,
        'click'
      );
      domElements.wholeOverlay.style.display = 'none';
      removeProjectWholeOverlayBindings();
    }
  };

  const removeEditor = () => {
    changedTasks = changedTasks.filter((task) => task.edit != true);
    renderOverlay();
    renderProjectTasks();
  };

  const checkProjectEditor = () => {
    let bool = false;
    changedTasks.forEach((task) => {
      if (task.edit) bool = true;
    });
    return bool;
  };
  const disablePageContentElements = () => {
    removeNavigationBindings(true);
    let updatedElement = getUpdatedElements();
    if (updatedElement.projectButton.length == 0) return;
    updatedElement.projectButton.forEach((button) => {
      button.classList.remove('projectButtonHover');
      button.style.color = 'rgb(157,162,175)';
      button.style.cursor = 'pointer';
    });
  };

  //make sure disablePageContentElements and renderOverlay methods are below renderProject tasks.
  //This is because renderOverlay will overwrite the changes causing the page to act werid.
  const createEditor = (text, index) => {
    let editorText = '';
    if (typeof text != 'undefined') editorText = text;

    if (!checkProjectEditor()) {
      typeof index != 'undefined'
        ? (changedTasks = addItem(changedTasks, index, {
            edit: true,
            value: editorText,
          }))
        : changedTasks.push({ edit: true });
    }

    renderHighlightElements();
    renderProjectTasks();

    disablePageContentElements();
    renderOverlay();

    content.removeTaskBindings();
  };

  const activateUpComingTask = () => {
    content.activateContent('upcoming');
    setHighlightIndex('upcoming');
    renderHighlightElements();
    renderProjectTasks();
  };

  const activateProjectTask = () => {
    createEditor();
  };

  const changedTitlesToTasks = (titles) => {
    let newTasks = [];
    let titleArray = Object.values(titles);
    titleArray.forEach((title) => {
      let task = { navTask: true, task: title, highlight: false };
      newTasks.push(task);
    });

    return newTasks;
  };

  // when dom is called it will create the default elements
  const activateNavigation = () => {
    content = contentMenu;
    domElements = getInitialElements();
    upcomingButton = domElements.upComingButton;
    addBindings(domElements.projectAdder, activateProjectTask, 'click');
    addBindings(domElements.upComingButton, activateUpComingTask, 'click');
    addBindings(upcomingButton, highlightUpComingButton, 'mouseover');
    addBindings(upcomingButton, unhoverUpComingButton, 'mouseleave');

    let storedData = storage.retrieveData();

    if (storedData) {
      let newTasks = changedTitlesToTasks(storedData.formatedTitles);
      staticTasks = setArray(newTasks);
      changedTasks = setArray(newTasks);

      send.overwriteData(storedData.formatedData);
      send.overwriteTitles(storedData.formatedTitles);
      highlightedIndex = storage.retrieveHighlightIndex();

      renderProjectTasks();
    }
  };
  return {
    activateNavigation,
    removeNavigationBindings,
    addNavigationBindings,
    activateProjectTask,
    removeSpecialMobileBindings,
    createProjectTasksClick,
    createProjectTasksKeys,
    renderOverlay,
    removeEditor,
  };
};

let navigation = nav();

export { navigation };
