/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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




    
const removeItem =(array, index) => {
    let newTasks = [];
    let currentIndex = 0;
    for (let i = 0; i < array.length; i++){
        if (i != index){
            newTasks.push(array[i])
        }
        currentIndex ++
    }
    return newTasks;
}


const addItem = (array,index, item) => {
    let newTasks = [];
    for (let i = 0; i < array.length; i ++){
        if (i == index){
            newTasks.push(item);
        } else {
            newTasks.push(array[i])
        }
    }
    return newTasks;
}


const setArray = (array) => {
    let newArray = array;
    let newTasks = [];
    newArray.forEach(task => {
        newTasks.push(task);
    })
    return newTasks;
}






const setObject = (object,isArray) => {
    let newObject = object;
    let blankObject = {};
    let newObjectKeys = Object.keys(newObject);
    let newArray = false;
    newArray = object;

    if (!isArray){
        newObjectKeys.forEach(key => {
            if (typeof newObject[key] != "object" )  blankObject[key] = newObject[key];   
            else if (Object.prototype.toString.call(newObject[key]) === "[object Date]" ){
                blankObject[key] = newObject[key];
            }
        })
    } else {
        let blankArray = [];
        newArray.forEach(item => {
            if (typeof item != "object") blankArray.push(item)
            else if (Object.prototype.toString.call(item) === "[object Date]"){
                blankArray.push(item);
            }
        })
        blankObject = blankArray;
    }
    if (!isArray){
        newObjectKeys.forEach(key => {
            if (typeof newObject[key] == "object" && !Array.isArray(newObject[key])) {
                if(Object.prototype.toString.call(newObject[key]) !== "[object Date]") {
                    blankObject[key] = setObject(newObject[key]);
                }
             
            } else if (Array.isArray(newObject[key])) {
                blankObject[key] = setObject(newObject[key],true);
            }
        })
    } else {
        let currentIndex = 0;
        newArray.forEach(item => {
            if (typeof item == "object" && !Array.isArray(item)) {
                if (Object.prototype.toString.call(item) !== "[object Date]"){
                    blankObject.splice(currentIndex,0,setObject(item))
                }
    
            } else if (Array.isArray(item)){
                blankObject.splice(currentIndex,0,setObject(item,true))
            }
            currentIndex ++;
        })
    }
    return blankObject;




}



const addBindings = (elements,func,binding) => {
    if (!Array.isArray(elements)) elements.addEventListener(binding,func);
    else elements.forEach(element => element.addEventListener(binding,func));
}

const removeBindings = (elements,func,binding) => {
    if (!Array.isArray(elements)) elements.removeEventListener(binding,func);
    else elements.forEach(element => element.removeEventListener(binding,func));
}








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


const send = (
    () => {
        let items = {};
        let titleItems = {}
        items.upcoming = []

        const sendData = (data,index,title) => {
            items[index] = data;
            titleItems[index] = title;
        }

        const sendName = (index, title) => {
            titleItems[index] = title;
        }
    
        const retrieveData = (index) => {
            if (items[index]){
                return items[index];
            } else {
                return false;
            }
        }


        const retrieveTitle = (index) => {
            if (titleItems[index]){
                return titleItems[index];
            } else {
                return false;
            }
        }

        const retrieveTitles = () => {
            return (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setObject)(titleItems);
        }

        const overwriteTitles = (titles) => {
            titleItems =  titles
        }


        const overwriteData = (data) => { 
            items = data;
        }


        const getAllData = () => {
            return (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setObject)(items);
        }
 
        const deleteName = (index) => {
            let newTitles = titleItems;
            let newTitleKeys = Object.keys(newTitles);
            let finalTitles = {}
            newTitleKeys = newTitleKeys.filter(key => key != index);

            for (let i = 0; i <newTitleKeys.length; i++) {
                finalTitles[i] = newTitles[newTitleKeys[i]];
            }

            return finalTitles;

        }



        const deleteData = (index) => {
            titleItems = deleteName(index);
            let newItems = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setObject)(items);
            let newItemsKeys = Object.keys(newItems);
            newItemsKeys = newItemsKeys.filter(key => key != index);

            
            let newerItems = {};
            newItemsKeys.forEach(key => {
                newerItems[key] = newItems[key];
            })

            items = newerItems;

        }
        
        return {sendData, retrieveData,retrieveTitle, 
            deleteData, getAllData, overwriteData, 
            sendName, retrieveTitles, overwriteTitles};

    }
)()



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





const findBoardTextBox =  (index) => {
    let taskLists = getElementByBoardIndex(index,"taskLists");
    let buttonText = "could not load text"
    let taskListChildren = Array.from(taskLists.children)

   
    taskListChildren.forEach(child => {
        if (child.getAttribute("class") == "boardTextEditor") {
             buttonText = Array.from(child.children)[0].value;
             return;
        }
        
    })
    return buttonText;
}

const getElementByBoardIndex = (index,domElement) => {

    let element = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_0__.getUpdatedElements)();
    let newElement = false;
    element[domElement].forEach(childElement => {
        if (childElement.boardIndex == index) newElement = childElement
    })
    return newElement;


}



const getUpComingTasks  = (array) => {
    let newArray = []

    array.forEach(board => {
        board.tasks.forEach(task => {
            if (task.navIndex == "upcoming") {
                newArray.push(task);
            }
        })
    })

    return newArray;
}

// only works with static list tasks which has two arrays
// one that can take different types of editors which is known as
// the changedboardlists and the one that changes very little 
// and values can be added but will be edited in the editors in changedBoardLists
const findObjectByName = (name,parentArray) => {
    let currentObject = false;
    let breakLoop;
    let staticListTasks = parentArray;

    staticListTasks.forEach(task => {
        task.changedBoardLists.forEach(listTask => {
            if (listTask[name]){
                currentObject = listTask;
                breakLoop = true
                return
            }
        })
        if (breakLoop) return;

    })

    return currentObject;

}

// Takes staticlist tasks array does not work in any other tempalate do not try it
const getObjectValue = (currentObject, value,array) => {
    let objectValue = findObjectByName(currentObject,array);
    let newValue = false;
    if (objectValue != false) newValue = objectValue[value];
    return newValue;
}


const changeValueToDate = (value) => {
    let newValue = value.split("-");
    let year = newValue[0];
    let monthIndex = newValue[1] -1;
    let day = newValue[2];


    let date = new Date(year,monthIndex,day);
    return date;
}

const sortDatesByLatestDay = (timeTasks) => {
    let newTimeTasks = timeTasks;
    newTimeTasks.sort((timeTask1, timeTask2) => {
        let days2 = (0,date_fns_getDayOfYear__WEBPACK_IMPORTED_MODULE_1__["default"])(timeTask2.date);
        let days1 = (0,date_fns_getDayOfYear__WEBPACK_IMPORTED_MODULE_1__["default"])(timeTask1.date);
        return days2 - days1;
    })
    return newTimeTasks;


}


const createTaskTemplate = (text,date,priority,projectTypeText,checked) => {
    let task = {}
    task.listTask = true;
    task.text = text,
    task.date = date;

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    task.dates = [year, month, day];
    task.dateText = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(task.date,"MMM d y");
    task.priority = priority;

    !checked? task.checked = false: task.checked = true;
    if (typeof projectTypeText != "undefined")  task.projectTypeText = projectTypeText;
    return task;

}


const checkSpaces = (text) => {
    if (text.trim().length != 0) return true
    else return false
}




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

/***/ "./src/images/hamburgerMenu.svg":
/*!**************************************!*\
  !*** ./src/images/hamburgerMenu.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8235882574e17fb850f.svg";

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
/******/ 		__webpack_require__.p = "/";
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
/******/ 			"times": 0
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
  !*** ./src/scripts/times.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTimeTasks": () => (/* binding */ renderTimeTasks)
/* harmony export */ });
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isThisWeek */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/scripts/utilities.js");
/* harmony import */ var _send_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send.js */ "./src/scripts/send.js");
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");









    const createUpComingTemplate = (currentText, tasks) => {
        let currentTasks = [];
        if (typeof tasks != "undefined") currentTasks = tasks; 
    
        let board = {isUpComingBoard: true,text:currentText, tasks: currentTasks, changedBoardLists: [], };
        return board;
    
    
    }

    const addUpComingBoards = (array) => {
        let newArray = array;
        let todayBoard = createUpComingTemplate("Today", []);
        let weekBoard = createUpComingTemplate("Week",[]);
        let timeBoards = [todayBoard,weekBoard];
        timeBoards.forEach(board => newArray.push(board));
        return newArray;
    }
    
    const getTimeUpcomingValues = (navs,key,todayTasks, weekTasks) => {
        let taskIndex = 0;
    
        navs[key].forEach(task => {
    
            task.taskIndex = taskIndex;
            task.navIndex = "upcoming";
            task.navName = "Upcoming";
    
            if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_3__["default"])(task.date)) todayTasks.push(task)
            if ((0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_4__["default"])(task.date)) weekTasks.push(task);
            taskIndex ++;
        })
        return {todayTasks, weekTasks};
        
    }
    
    const getTimeNormalValues  = (navs,key,todayTasks,weekTasks) => {
        let boardIndex = 0;
        navs[key].forEach(board => {
            let taskIndex = 0;
            board.tasks.forEach(task => {
                task.taskIndex = taskIndex;
                task.boardIndex = boardIndex;
    
                task.navIndex = key;
                task.navName = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.retrieveTitle(key);
                if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_3__["default"])(task.date)) todayTasks.push(task)
                if ((0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_4__["default"])(task.date)) weekTasks.push(task);
                taskIndex++;
    
            })
            boardIndex++;
        })
    
        return {todayTasks,weekTasks}
    
    
    }
    
    const getTaskTimeValues = () => {
         let data = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.getAllData();
         let navs = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.setObject)(data);
         let navKeys = Object.keys(navs);
         
         let todayTasks = [];
         let weekTasks = [];    
         navKeys.forEach(key => {
             if (key == "upcoming"){
                 let times = getTimeUpcomingValues(navs,key, todayTasks, weekTasks);
                 todayTasks = times.todayTasks;
                 weekTasks = times.weekTasks;    
    
             } else {
                 let times = getTimeNormalValues(navs,key,todayTasks, weekTasks);
                 todayTasks = times.todayTasks;
                 weekTasks = times.weekTasks;
    
             }
         })
         navs = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.getAllData();    
         todayTasks = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.sortDatesByLatestDay)(todayTasks);
         weekTasks = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.sortDatesByLatestDay)(weekTasks);
         return {todayTasks, weekTasks};
     }
    
    const renderTimeTasks = (array) => {
        let newArray = addUpComingBoards(array);
        let times = getTaskTimeValues();
        newArray.forEach(board=> {
            if (board.text == "Today"){
                board.tasks = times.todayTasks;
                board.changedBoardLists = board.tasks;
    
            } 
            if (board.text == "Week"){
                board.tasks = times.weekTasks;
                board.changedBoardLists = board.tasks;
    
            } 
    
        })
        return newArray;
    
    }




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsc0pBQXdEO0FBQ3BHLDRDQUE0QywwSkFBMEQ7QUFDdEcsNENBQTRDLHdKQUF5RDtBQUNyRyw0Q0FBNEMsc0pBQXdEO0FBQ3BHLDRDQUE0QyxzSkFBd0Q7QUFDcEcsNENBQTRDLGtJQUE4QztBQUMxRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQixrQ0FBa0MsaUJBQWlCO0FBQzNILHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0Isa0NBQWtDLGlCQUFpQjtBQUMzSCx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esb0ZBQW9GLDRCQUE0Qix5QkFBeUIsdUJBQXVCLDREQUE0RCwwZ0JBQTBnQixxQkFBcUIsNEJBQTRCLG1CQUFtQix1QkFBdUIseUJBQXlCLGtCQUFrQix1QkFBdUIsR0FBRyx1QkFBdUIsbUJBQW1CLG1CQUFtQiw2QkFBNkIsMEJBQTBCLG9DQUFvQyxrQkFBa0IsMEJBQTBCLGFBQWEsbUJBQW1CLG9CQUFvQixHQUFHLHFCQUFxQiwwQ0FBMEMsdUJBQXVCLHlCQUF5QixxQkFBcUIsR0FBRyxZQUFZLHlCQUF5Qix3QkFBd0Isb0NBQW9DLG1CQUFtQixrQkFBa0IsbUNBQW1DLEdBQUcsbUJBQW1CLHNDQUFzQyx3QkFBd0IsaUJBQWlCLGtCQUFrQixZQUFZLGdCQUFnQixtQkFBbUIsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcsbUJBQW1CLHFCQUFxQix5QkFBeUIsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcscUJBQXFCLHdCQUF3QixjQUFjLHlCQUF5QixxQkFBcUIscUJBQXFCLHVCQUF1QixPQUFPLHdCQUF3QixvQ0FBb0MsNkJBQTZCLGtCQUFrQixHQUFHLGdCQUFnQixtQkFBbUIsb0NBQW9DLHdCQUF3Qix5QkFBeUIsc0JBQXNCLEtBQUssVUFBVSxtQkFBbUIsR0FBRyxrQkFBa0IseUJBQXlCLGNBQWMsNEJBQTRCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLEtBQUssZ0JBQWdCLHFCQUFxQix5QkFBeUIsNEJBQTRCLEtBQUssd0JBQXdCLG1CQUFtQixHQUFHLHVCQUF1QixpQkFBaUIsa0JBQWtCLHlCQUF5Qiw4QkFBOEIscUJBQXFCLEdBQUcsa0JBQWtCLGlCQUFpQixxQkFBcUIsdUJBQXVCLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyx3QkFBd0Isb0JBQW9CLG1DQUFtQyxHQUFHLDZCQUE2QixtQkFBbUIsaUJBQWlCLEtBQUssY0FBYyxtQkFBbUIsaUJBQWlCLEtBQUssYUFBYSxpQkFBaUIsd0JBQXdCLG1CQUFtQixHQUFHLGdCQUFnQixrQkFBa0Isd0NBQXdDLGlCQUFpQixHQUFHLHFCQUFxQixxQkFBcUIsb0NBQW9DLFNBQVMsY0FBYyx1QkFBdUIsR0FBRyxpQkFBaUIsc0JBQXNCLGtCQUFrQixrQkFBa0IsZUFBZSxHQUFHLHFCQUFxQixxQ0FBcUMsa0JBQWtCLHVCQUF1QixtQkFBbUIsMEJBQTBCLDZCQUE2Qiw2QkFBNkIsR0FBRyxZQUFZLDZCQUE2QixHQUFHLG1CQUFtQixlQUFlLGlCQUFpQixLQUFLLDRCQUE0Qix3QkFBd0IsR0FBRyxXQUFXLDJCQUEyQixHQUFHLGFBQWEsZ0NBQWdDLEdBQUcsZ0JBQWdCLDRDQUE0QyxtQkFBbUIsS0FBSyxjQUFjLHNHQUFzRyxHQUFHLGNBQWMsK0JBQStCLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLGlCQUFpQixxQkFBcUIsR0FBRyxtQkFBbUIsMEJBQTBCLEdBQUcsYUFBYSxrQkFBa0Isa0JBQWtCLGlCQUFpQix3QkFBd0IseUJBQXlCLGtCQUFrQixLQUFLLGdCQUFnQixtQkFBbUIsNkJBQTZCLDBCQUEwQixPQUFPLHFDQUFxQyxzQkFBc0IsR0FBRyx3QkFBd0Isd0JBQXdCLGlCQUFpQixHQUFHLHVCQUF1QixtQkFBbUIsaUJBQWlCLGVBQWUsc0JBQXNCLGtCQUFrQixxQkFBcUIsR0FBRyw2QkFBNkIsb0NBQW9DLEdBQUcsNEJBQTRCLHdDQUF3QyxlQUFlLHFCQUFxQixrQkFBa0Isa0JBQWtCLEdBQUcsc0JBQXNCLGlCQUFpQixrQkFBa0IsZ0JBQWdCLHNCQUFzQix3RUFBd0Usa0NBQWtDLDRCQUE0QixXQUFXLGlCQUFpQixrQ0FBa0Msa0JBQWtCLHdDQUF3QyxrQkFBa0Isd0JBQXdCLE9BQU8sc0JBQXNCLHNCQUFzQix3QkFBd0IsR0FBRywwQkFBMEIsNENBQTRDLGtCQUFrQixHQUFHLDhCQUE4QixpQkFBaUIsR0FBRyx1QkFBdUIsb0JBQW9CLHlCQUF5QixPQUFPLGVBQWUsdUJBQXVCLGlCQUFpQiwyQkFBMkIsU0FBUyw4QkFBOEIsdUJBQXVCLE9BQU8sbUJBQW1CLHdDQUF3Qyx5QkFBeUIsdUJBQXVCLGlCQUFpQixrQkFBa0IsZUFBZSxzQkFBc0IsWUFBWSxzQkFBc0Isb0NBQW9DLHdCQUF3QixnQkFBZ0Isc0JBQXNCLHlCQUF5QixpQkFBaUIsbUNBQW1DLG1CQUFtQixZQUFZLCtCQUErQixzQkFBc0IsR0FBRyxnREFBZ0QsMkJBQTJCLHNCQUFzQixPQUFPLG1CQUFtQixzQkFBc0IsT0FBTyxrQ0FBa0MscUJBQXFCLE9BQU8sMkJBQTJCLDZCQUE2QiwwQkFBMEIsT0FBTyxtQkFBbUIsc0JBQXNCLE9BQU8sb0JBQW9CLG1DQUFtQyx5QkFBeUIsdUJBQXVCLG1CQUFtQixzQkFBc0Isd0JBQXdCLGlCQUFpQixpQ0FBaUMsZ0NBQWdDLDZCQUE2QixPQUFPLHVCQUF1Qiw2QkFBNkIsc0JBQXNCLE9BQU8sbUJBQW1CLDRCQUE0QixlQUFlLCtCQUErQiw2QkFBNkIsT0FBTyx1QkFBdUIsNEJBQTRCLE9BQU8sNEJBQTRCLHNCQUFzQiw4QkFBOEIsc0JBQXNCLE9BQU8sK0JBQStCLDZCQUE2QixPQUFPLHlCQUF5QixzQkFBc0IsT0FBTyxtQkFBbUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsa0NBQWtDLE9BQU8saURBQWlELDZCQUE2QixpQkFBaUIsb0JBQW9CLHNDQUFzQywyQkFBMkIseUJBQXlCLFNBQVMsc0JBQXNCLHFCQUFxQixzQkFBc0IsOEJBQThCLE9BQU8scUJBQXFCLHFCQUFxQix5QkFBeUIsc0JBQXNCLE9BQU8sdUJBQXVCLGdDQUFnQyxPQUFPLGlCQUFpQixvQ0FBb0MsT0FBTyxjQUFjLGtDQUFrQyxZQUFZLHlCQUF5QixpQ0FBaUMsZ0JBQWdCLHFCQUFxQixrQ0FBa0MsT0FBTyx1QkFBdUIsd0JBQXdCLDRCQUE0QixxQkFBcUIseUJBQXlCLE9BQU8sb0JBQW9CLDRCQUE0QixPQUFPLDBDQUEwQyxxQkFBcUIsU0FBUyxvQkFBb0IsOEJBQThCLE9BQU8sU0FBUyxxQkFBcUIsd0JBQXdCLEdBQUcsU0FBUyw4RkFBOEYsTUFBTSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIsVUFBVSxpQkFBaUIsV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsY0FBYyxXQUFXLEtBQUssVUFBVSxRQUFRLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsUUFBUSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssT0FBTyxLQUFLLFVBQVUsY0FBYyxTQUFTLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLFlBQVksS0FBSyxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxXQUFXLFNBQVMsTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksU0FBUyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksZUFBZSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxlQUFlLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLGNBQWMsUUFBUSxLQUFLLFdBQVcsVUFBVSxTQUFTLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxZQUFZLGVBQWUsUUFBUSxLQUFLLFVBQVUsUUFBUSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFNBQVMsS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxVQUFVLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxTQUFTLE1BQU0sS0FBSyxZQUFZLG9FQUFvRSw0QkFBNEIseUJBQXlCLHVCQUF1Qix5REFBeUQsNGdCQUE0Z0IscUJBQXFCLDRCQUE0QixtQkFBbUIsdUJBQXVCLHlCQUF5QixrQkFBa0IsdUJBQXVCLEdBQUcsdUJBQXVCLG1CQUFtQixtQkFBbUIsNkJBQTZCLDBCQUEwQixvQ0FBb0Msa0JBQWtCLDBCQUEwQixhQUFhLG1CQUFtQixvQkFBb0IsR0FBRyxxQkFBcUIsMENBQTBDLHVCQUF1Qix5QkFBeUIscUJBQXFCLEdBQUcsWUFBWSx5QkFBeUIsd0JBQXdCLG9DQUFvQyxtQkFBbUIsa0JBQWtCLG1DQUFtQyxHQUFHLG1CQUFtQixzQ0FBc0Msd0JBQXdCLGlCQUFpQixrQkFBa0IsWUFBWSxnQkFBZ0IsbUJBQW1CLEdBQUcsOEJBQThCLHNCQUFzQixHQUFHLG1CQUFtQixxQkFBcUIseUJBQXlCLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLHFCQUFxQix3QkFBd0IsY0FBYyx5QkFBeUIscUJBQXFCLHFCQUFxQix1QkFBdUIsT0FBTyx3QkFBd0Isb0NBQW9DLDZCQUE2QixrQkFBa0IsR0FBRyxnQkFBZ0IsbUJBQW1CLG9DQUFvQyx3QkFBd0IseUJBQXlCLHNCQUFzQixLQUFLLFVBQVUsbUJBQW1CLEdBQUcsa0JBQWtCLHlCQUF5QixjQUFjLDRCQUE0Qix5QkFBeUIseUJBQXlCLGtCQUFrQixLQUFLLGdCQUFnQixxQkFBcUIseUJBQXlCLDRCQUE0QixLQUFLLHdCQUF3QixtQkFBbUIsR0FBRyx1QkFBdUIsaUJBQWlCLGtCQUFrQix5QkFBeUIsOEJBQThCLHFCQUFxQixHQUFHLGtCQUFrQixpQkFBaUIscUJBQXFCLHVCQUF1QixHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsd0JBQXdCLG9CQUFvQixtQ0FBbUMsR0FBRyw2QkFBNkIsbUJBQW1CLGlCQUFpQixLQUFLLGNBQWMsbUJBQW1CLGlCQUFpQixLQUFLLGFBQWEsaUJBQWlCLHdCQUF3QixtQkFBbUIsR0FBRyxnQkFBZ0Isa0JBQWtCLHdDQUF3QyxpQkFBaUIsR0FBRyxxQkFBcUIscUJBQXFCLG9DQUFvQyxTQUFTLGNBQWMsdUJBQXVCLEdBQUcsaUJBQWlCLHNCQUFzQixrQkFBa0Isa0JBQWtCLGVBQWUsR0FBRyxxQkFBcUIscUNBQXFDLGtCQUFrQix1QkFBdUIsbUJBQW1CLDBCQUEwQiw2QkFBNkIsNkJBQTZCLEdBQUcsWUFBWSw2QkFBNkIsR0FBRyxtQkFBbUIsZUFBZSxpQkFBaUIsS0FBSyw0QkFBNEIsd0JBQXdCLEdBQUcsV0FBVywyQkFBMkIsR0FBRyxhQUFhLGdDQUFnQyxHQUFHLGdCQUFnQiw0Q0FBNEMsbUJBQW1CLEtBQUssY0FBYyxzR0FBc0csR0FBRyxjQUFjLCtCQUErQixHQUFHLGdCQUFnQix1QkFBdUIsR0FBRyxpQkFBaUIscUJBQXFCLEdBQUcsbUJBQW1CLDBCQUEwQixHQUFHLGFBQWEsa0JBQWtCLGtCQUFrQixpQkFBaUIsd0JBQXdCLHlCQUF5QixrQkFBa0IsS0FBSyxnQkFBZ0IsbUJBQW1CLDZCQUE2QiwwQkFBMEIsT0FBTyxxQ0FBcUMsc0JBQXNCLEdBQUcsd0JBQXdCLHdCQUF3QixpQkFBaUIsR0FBRyx1QkFBdUIsbUJBQW1CLGlCQUFpQixlQUFlLHNCQUFzQixrQkFBa0IscUJBQXFCLEdBQUcsNkJBQTZCLG9DQUFvQyxHQUFHLDRCQUE0Qix3Q0FBd0MsZUFBZSxxQkFBcUIsa0JBQWtCLGtCQUFrQixHQUFHLHNCQUFzQixpQkFBaUIsa0JBQWtCLGdCQUFnQixzQkFBc0IseURBQXlELGtDQUFrQyw0QkFBNEIsV0FBVyxpQkFBaUIsa0NBQWtDLGtCQUFrQix3Q0FBd0Msa0JBQWtCLHdCQUF3QixPQUFPLHNCQUFzQixzQkFBc0Isd0JBQXdCLEdBQUcsMEJBQTBCLDRDQUE0QyxrQkFBa0IsR0FBRyw4QkFBOEIsaUJBQWlCLEdBQUcsdUJBQXVCLG9CQUFvQix5QkFBeUIsT0FBTyxlQUFlLHVCQUF1QixpQkFBaUIsMkJBQTJCLFNBQVMsOEJBQThCLHVCQUF1QixPQUFPLG1CQUFtQix3Q0FBd0MseUJBQXlCLHVCQUF1QixpQkFBaUIsa0JBQWtCLGVBQWUsc0JBQXNCLFlBQVksc0JBQXNCLG9DQUFvQyx3QkFBd0IsZ0JBQWdCLHNCQUFzQix5QkFBeUIsaUJBQWlCLG1DQUFtQyxtQkFBbUIsWUFBWSwrQkFBK0Isc0JBQXNCLEdBQUcsZ0RBQWdELDJCQUEyQixzQkFBc0IsT0FBTyxtQkFBbUIsc0JBQXNCLE9BQU8sa0NBQWtDLHFCQUFxQixPQUFPLDJCQUEyQiw2QkFBNkIsMEJBQTBCLE9BQU8sbUJBQW1CLHNCQUFzQixPQUFPLG9CQUFvQixtQ0FBbUMseUJBQXlCLHVCQUF1QixtQkFBbUIsc0JBQXNCLHdCQUF3QixpQkFBaUIsaUNBQWlDLGdDQUFnQyw2QkFBNkIsT0FBTyx1QkFBdUIsNkJBQTZCLHNCQUFzQixPQUFPLG1CQUFtQiw0QkFBNEIsZUFBZSwrQkFBK0IsNkJBQTZCLE9BQU8sdUJBQXVCLDRCQUE0QixPQUFPLDRCQUE0QixzQkFBc0IsOEJBQThCLHNCQUFzQixPQUFPLCtCQUErQiw2QkFBNkIsT0FBTyx5QkFBeUIsc0JBQXNCLE9BQU8sbUJBQW1CLG9CQUFvQiw2QkFBNkIscUJBQXFCLGtDQUFrQyxPQUFPLGlEQUFpRCw2QkFBNkIsaUJBQWlCLG9CQUFvQixzQ0FBc0MsMkJBQTJCLHlCQUF5QixTQUFTLHNCQUFzQixxQkFBcUIsc0JBQXNCLDhCQUE4QixPQUFPLHFCQUFxQixxQkFBcUIseUJBQXlCLHNCQUFzQixPQUFPLHVCQUF1QixnQ0FBZ0MsT0FBTyxpQkFBaUIsb0NBQW9DLE9BQU8sY0FBYyxrQ0FBa0MsWUFBWSx5QkFBeUIsaUNBQWlDLGdCQUFnQixxQkFBcUIsa0NBQWtDLE9BQU8sdUJBQXVCLHdCQUF3Qiw0QkFBNEIscUJBQXFCLHlCQUF5QixPQUFPLG9CQUFvQiw0QkFBNEIsT0FBTywwQ0FBMEMscUJBQXFCLFNBQVMsb0JBQW9CLDhCQUE4QixPQUFPLFNBQVMscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQjtBQUMvbXBCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCdkM7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsc0pBQXdEO0FBQ3BHLDRDQUE0QywwSkFBMEQ7QUFDdEcsNENBQTRDLHdKQUF5RDtBQUNyRyw0Q0FBNEMsc0pBQXdEO0FBQ3BHLDRDQUE0QyxzSkFBd0Q7QUFDcEcsNENBQTRDLDhKQUE0RDtBQUN4Ryw0Q0FBNEMsa0tBQThEO0FBQzFHLDRDQUE0QyxnS0FBNkQ7QUFDekcsNENBQTRDLDhKQUE0RDtBQUN4Ryw0Q0FBNEMsOEpBQTREO0FBQ3hHLDZDQUE2QyxrSUFBOEM7QUFDM0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0Isa0NBQWtDLGlCQUFpQjtBQUMzSCx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCLGtDQUFrQyxpQkFBaUI7QUFDM0gseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCLGtDQUFrQyxpQkFBaUI7QUFDM0gseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQixrQ0FBa0MscUJBQXFCO0FBQ2hJLDBDQUEwQyxzRkFBK0I7QUFDekU7QUFDQSx3RkFBd0YsNEJBQTRCLHlCQUF5Qix1QkFBdUIsNERBQTRELDBnQkFBMGdCLHFCQUFxQixxREFBcUQsaUNBQWlDLHlCQUF5Qix1QkFBdUIsNERBQTRELDRnQkFBNGdCLHFCQUFxQixxQkFBcUIsa0JBQWtCLHFCQUFxQix3Q0FBd0Msa0NBQWtDLG9CQUFvQixvQkFBb0IsT0FBTyxxQ0FBcUMsb0JBQW9CLHVCQUF1QixtQkFBbUIseUJBQXlCLGlCQUFpQiwrQkFBK0Isc0JBQXNCLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLDZEQUE2RCw0Q0FBNEMsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcscUJBQXFCLHFCQUFxQix5QkFBeUIsR0FBRyx3QkFBd0IsaUJBQWlCLGdCQUFnQixHQUFHLHVCQUF1QiwwQkFBMEIsZ0JBQWdCLHlCQUF5QixLQUFLLDJCQUEyQixzQkFBc0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsbUJBQW1CLG9CQUFvQixTQUFTLHFCQUFxQixzQkFBc0Isd0JBQXdCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHNCQUFzQixtQkFBbUIsTUFBTSxxQkFBcUIsbUJBQW1CLEdBQUcscUJBQXFCLDJCQUEyQixHQUFHLHlCQUF5QixnQkFBZ0IseUJBQXlCLEtBQUssdUJBQXVCLG9CQUFvQixTQUFTLDZCQUE2QixtQkFBbUIsbUJBQW1CLGdCQUFnQixrQ0FBa0Msa0NBQWtDLFlBQVksMkJBQTJCLHlCQUF5Qix5QkFBeUIsaUJBQWlCLGdDQUFnQyxVQUFVLGlCQUFpQix1QkFBdUIsc0JBQXNCLG9CQUFvQixtQkFBbUIsbUJBQW1CLHdCQUF3QixzQkFBc0IsSUFBSSxrQkFBa0IsdUJBQXVCLGtCQUFrQixtQkFBbUIsNEJBQTRCLDBCQUEwQixPQUFPLGVBQWUsdUJBQXVCLEdBQUcsbURBQW1ELGtDQUFrQyxTQUFTLHFDQUFxQyw2QkFBNkIsR0FBRyxtQkFBbUIsdUNBQXVDLG1CQUFtQixtQkFBbUIsaUJBQWlCLG1DQUFtQyx5QkFBeUIsZUFBZSx3QkFBd0IsY0FBYyxtQkFBbUIsd0JBQXdCLDBCQUEwQiw4QkFBOEIsbUJBQW1CLHFCQUFxQiwyQkFBMkIsZUFBZSxtQkFBbUIsS0FBSyw0QkFBNEIsaUJBQWlCLGtCQUFrQixnQkFBZ0Isc0JBQXNCLHlFQUF5RSxrQ0FBa0MsNEJBQTRCLFdBQVcsaUJBQWlCLGtDQUFrQyxrQkFBa0Isd0NBQXdDLGtCQUFrQix3QkFBd0IsT0FBTyxzQkFBc0Isc0JBQXNCLHdCQUF3QixHQUFHLDBCQUEwQiw0Q0FBNEMsa0JBQWtCLEdBQUcsK0NBQStDLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8scUJBQXFCLHVCQUF1QixPQUFPLHlCQUF5Qix1QkFBdUIsT0FBTyxzQkFBc0IsdUJBQXVCLE9BQU8sbUJBQW1CLGlDQUFpQyxPQUFPLHFCQUFxQixxQkFBcUIsc0JBQXNCLG9DQUFvQyx1QkFBdUIsa0NBQWtDLE9BQU8sMkJBQTJCLHlCQUF5QixzQ0FBc0MsT0FBTyw2QkFBNkIsbUNBQW1DLDRCQUE0QixPQUFPLHFCQUFxQixvQkFBb0IsU0FBUywyQkFBMkIsa0NBQWtDLE9BQU8sa0JBQWtCLDZCQUE2QixTQUFTLHVCQUF1Qix3QkFBd0IsMkJBQTJCLHNCQUFzQixzQkFBc0IsMEJBQTBCLE9BQU8sR0FBRyw4Q0FBOEMsaUNBQWlDLHFCQUFxQixPQUFPLEdBQUcsOENBQThDLGlDQUFpQyx1QkFBdUIsT0FBTyxHQUFHLDZDQUE2QyxrQkFBa0IsNkJBQTZCLE9BQU8sU0FBUyxrREFBa0QsZ0NBQWdDLDRCQUE0QixPQUFPLE9BQU8sV0FBVyx5RkFBeUYsWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLHlCQUF5QixVQUFVLGlCQUFpQixPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIsVUFBVSxpQkFBaUIsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLGFBQWEsWUFBWSxlQUFlLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsUUFBUSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksUUFBUSxLQUFLLFVBQVUsYUFBYSxTQUFTLEtBQUssV0FBVyxVQUFVLE1BQU0sVUFBVSxVQUFVLFdBQVcsWUFBWSxnQkFBZ0IsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksZUFBZSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxVQUFVLE9BQU8sVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxRQUFRLEtBQUssV0FBVyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxjQUFjLFFBQVEsS0FBSyxXQUFXLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxTQUFTLFFBQVEsUUFBUSxLQUFLLFlBQVksUUFBUSx1RUFBdUUsNEJBQTRCLHlCQUF5Qix1QkFBdUIseURBQXlELDRnQkFBNGdCLHFCQUFxQixxREFBcUQsaUNBQWlDLHlCQUF5Qix1QkFBdUIsNkRBQTZELG9pQkFBb2lCLHFCQUFxQixxQkFBcUIsa0JBQWtCLHFCQUFxQix3Q0FBd0Msa0NBQWtDLG9CQUFvQixvQkFBb0IsT0FBTyxxQ0FBcUMsb0JBQW9CLHVCQUF1QixtQkFBbUIseUJBQXlCLGlCQUFpQiwrQkFBK0Isc0JBQXNCLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLDZEQUE2RCw0Q0FBNEMsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcscUJBQXFCLHFCQUFxQix5QkFBeUIsR0FBRyx3QkFBd0IsaUJBQWlCLGdCQUFnQixHQUFHLHVCQUF1QiwwQkFBMEIsZ0JBQWdCLHlCQUF5QixLQUFLLDJCQUEyQixzQkFBc0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsbUJBQW1CLG9CQUFvQixTQUFTLHFCQUFxQixzQkFBc0Isd0JBQXdCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHNCQUFzQixtQkFBbUIsTUFBTSxxQkFBcUIsbUJBQW1CLEdBQUcscUJBQXFCLDJCQUEyQixHQUFHLHlCQUF5QixnQkFBZ0IseUJBQXlCLEtBQUssdUJBQXVCLG9CQUFvQixTQUFTLDZCQUE2QixtQkFBbUIsbUJBQW1CLGdCQUFnQixrQ0FBa0Msa0NBQWtDLFlBQVksMkJBQTJCLHlCQUF5Qix5QkFBeUIsaUJBQWlCLGdDQUFnQyxVQUFVLGlCQUFpQix1QkFBdUIsc0JBQXNCLG9CQUFvQixtQkFBbUIsbUJBQW1CLHdCQUF3QixzQkFBc0IsSUFBSSxrQkFBa0IsdUJBQXVCLGtCQUFrQixtQkFBbUIsNEJBQTRCLDBCQUEwQixPQUFPLGVBQWUsdUJBQXVCLEdBQUcsbURBQW1ELGtDQUFrQyxTQUFTLHFDQUFxQyw2QkFBNkIsR0FBRyxtQkFBbUIsdUNBQXVDLG1CQUFtQixtQkFBbUIsaUJBQWlCLG1DQUFtQyx5QkFBeUIsZUFBZSx3QkFBd0IsY0FBYyxtQkFBbUIsd0JBQXdCLDBCQUEwQiw4QkFBOEIsbUJBQW1CLHFCQUFxQiwyQkFBMkIsZUFBZSxtQkFBbUIsS0FBSyw0QkFBNEIsaUJBQWlCLGtCQUFrQixnQkFBZ0Isc0JBQXNCLHlEQUF5RCxrQ0FBa0MsNEJBQTRCLFdBQVcsaUJBQWlCLGtDQUFrQyxrQkFBa0Isd0NBQXdDLGtCQUFrQix3QkFBd0IsT0FBTyxzQkFBc0Isc0JBQXNCLHdCQUF3QixHQUFHLDBCQUEwQiw0Q0FBNEMsa0JBQWtCLEdBQUcsK0NBQStDLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8scUJBQXFCLHVCQUF1QixPQUFPLHlCQUF5Qix1QkFBdUIsT0FBTyxzQkFBc0IsdUJBQXVCLE9BQU8sbUJBQW1CLGlDQUFpQyxPQUFPLHFCQUFxQixxQkFBcUIsc0JBQXNCLG9DQUFvQyx1QkFBdUIsa0NBQWtDLE9BQU8sMkJBQTJCLHlCQUF5QixzQ0FBc0MsT0FBTyw2QkFBNkIsbUNBQW1DLDRCQUE0QixPQUFPLHFCQUFxQixvQkFBb0IsU0FBUywyQkFBMkIsa0NBQWtDLE9BQU8sa0JBQWtCLDZCQUE2QixTQUFTLHVCQUF1Qix3QkFBd0IsMkJBQTJCLHNCQUFzQixzQkFBc0IsMEJBQTBCLE9BQU8sR0FBRyw4Q0FBOEMsaUNBQWlDLHFCQUFxQixPQUFPLEdBQUcsOENBQThDLGlDQUFpQyx1QkFBdUIsT0FBTyxHQUFHLDZDQUE2QyxrQkFBa0IsNkJBQTZCLE9BQU8sU0FBUyxrREFBa0QsZ0NBQWdDLDRCQUE0QixPQUFPLE9BQU8sdUJBQXVCO0FBQy90YztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGVBQWUsZ0JBQWdCLHVCQUF1QixHQUFHLGFBQWEsbUJBQW1CLG9DQUFvQyxtQkFBbUIsR0FBRyxtQkFBbUIsMEJBQTBCLHNDQUFzQyxvQkFBb0IsaUJBQWlCLGlCQUFpQixtQkFBbUIsK0JBQStCLHlCQUF5QixTQUFTLG9CQUFvQix3Q0FBd0Msd0JBQXdCLG1CQUFtQixrQkFBa0IsbUJBQW1CLDZCQUE2Qiw4QkFBOEIsOEJBQThCLE9BQU8sb0JBQW9CLDJCQUEyQixrQkFBa0IsR0FBRyxpQkFBaUIsc0JBQXNCLGtCQUFrQixrQkFBa0IsZUFBZSxrQkFBa0Isd0NBQXdDLDJCQUEyQixLQUFLLHNCQUFzQixrQ0FBa0MsR0FBRywwREFBMEQsa0JBQWtCLEdBQUcsYUFBYSx3RkFBd0YsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGNBQWMsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGVBQWUsZUFBZSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLDRCQUE0QixlQUFlLGdCQUFnQix1QkFBdUIsR0FBRyxhQUFhLG1CQUFtQixvQ0FBb0MsbUJBQW1CLEdBQUcsbUJBQW1CLDBCQUEwQixzQ0FBc0Msb0JBQW9CLGlCQUFpQixpQkFBaUIsbUJBQW1CLCtCQUErQix5QkFBeUIsU0FBUyxvQkFBb0Isd0NBQXdDLHdCQUF3QixtQkFBbUIsa0JBQWtCLG1CQUFtQiw2QkFBNkIsOEJBQThCLDhCQUE4QixPQUFPLG9CQUFvQiwyQkFBMkIsa0JBQWtCLEdBQUcsaUJBQWlCLHNCQUFzQixrQkFBa0Isa0JBQWtCLGVBQWUsa0JBQWtCLHdDQUF3QywyQkFBMkIsS0FBSyxzQkFBc0Isa0NBQWtDLEdBQUcsMERBQTBELGtCQUFrQixHQUFHLHlCQUF5QjtBQUNsbEY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDBEO0FBQ1c7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EseUJBQXlCLHdFQUFjLGlCQUFpQjs7QUFFeEQsNkVBQTZFOztBQUU3RTtBQUNBO0FBQ0EsYUFBYSxxRUFBZTtBQUM1QixNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTs7O0FBR04sV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQiwyRUFBaUIsUUFBUTs7QUFFL0MsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFpQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsb0VBQVU7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQix5RUFBZTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtB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RUFBb0I7QUFDekMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2JvYXJkLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvbmF2aWdhdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0RGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9ib2FyZC5jc3M/YTYxZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvbmF2aWdhdGlvbi5jc3M/ODIwMiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9lbGVtZW50RXZlbnRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvcGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3NlbmQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3RpbWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9oYW1idXJnZXJNZW51LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXywgeyBoYXNoOiBcIiNSb2JvdG9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSwgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxuICB9XFxuXFxuXFxuXFxuXFxuXFxuICAucGFnZUNvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtYmFzaXM6IGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcblxcblxcblxcblxcbi5hZGRCb2FyZCB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOTgsIDE5OCwgMTk4KTtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XFxuICAgIFxcbiAgXFxufVxcblxcblxcblxcblxcblxcbmlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLmJvYXJkQ29udGVudCB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTk4LCAxOTgsIDE5OCk7XFxuICAgIHdpZHRoOiAyOTBweDtcXG4gICAgbWFyZ2luOjEwcHg7XFxuXFxuXFxuICAgIFxcbiAgICBwYWRkaW5nLWJvdHRvbTo1cHg7XFxufVxcblxcbi5ib2FyZE92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC4yOTkpO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHRvcDowO1xcbiAgICB6LWluZGV4OjE7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLmRlbGV0ZUJvYXJkLCAuZWRpdEJvYXJkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4udGFza0hvbGRlciB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG5cXG4udGFza1RleHRCb3gge1xcbiAgICB3aWR0aDoxMzVweDtcXG59XFxuLmV4YW1wbGVCb2FyZFRleHQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgdG9wOjRweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZVxcbn1cXG5cXG5cXG4uYWRkQm9hcmRUZXh0IHtcXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuXFxuXFxufVxcblxcblxcblxcbi50YXNrLCAubm90VGFza3tcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjM3LCAyMzAsIDIzMCk7XFxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQ7XFxuICAgIG1hcmdpbjoxMHB4O1xcbn1cXG5cXG4udGFza1Rvb2xzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcblxcbn1cXG4udG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcblxcbi50YXNrTGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDo1cHg7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuXFxuICAgIGJvcmRlcjogMDtcXG5cXG59XFxuLmdlbmVyYWxUZXh0IHtcXG4gICAgZm9udC1zaXplOjEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcblxcbn1cXG5cXG4uZ2VuZXJhbFRleHRIb2xkZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcblxcblxcblxcbi5jaXJjbGVJY29uIHtcXG4gICAgd2lkdGg6MTBweDtcXG4gICAgaGVpZ2h0OjEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG4uZWRpdCwgLm5vdEVkaXR7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6NnB4O1xcbn1cXG5cXG4uY2lyY2xlSWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6YmxhY2s7XFxufVxcblxcblxcblxcbi50YXNrQWRkZXIge1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxufVxcblxcblxcbi50YXNrQWRkZXI6aG92ZXIge1xcbiAgIGN1cnNvcjpwb2ludGVyO1xcbiAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIG1hcmdpbjo1cHg7XFxuXFxufVxcbi5lZGl0VG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOjUwcHg7XFxuXFxufVxcbi5kYXRlVG9vbCB7XFxuICAgIG1hcmdpbjo1cHg7XFxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi50YXNrVGV4dEJveCB7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjo1cHg7XFxufVxcblxcbi5lZGl0VG9vbEhvbGRlciB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5kYXRlUGlja2VyIHtcXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xcbiAgICB3aWR0aDoxMzVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGJvcmRlcjowO1xcbn1cXG5cXG5cXG5cXG4udGFza0VkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6cmdiKDE5NywgNjMsIDYzKTtcXG59XFxuXFxuXFxuLnRhc2tUZXh0Qm94e1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luOjVweDtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLmJ1dHRvbnMgLmJ1dHRvbiB7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBib3JkZXI6NXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZjk4MDA7XFxufVxcblxcblxcbi5ub3RUYXNrIHtcXG4gICAgXFxuICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgXFxuICAgICBjb2xvcjpncmV5OyBcXG4gfSBcXG5cXG4ubm90RWRpdCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDIwJSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSgyMDc2JSkgaHVlLXJvdGF0ZSg4NmRlZykgYnJpZ2h0bmVzcygxMTglKSBjb250cmFzdCgxMCUpO1xcbn1cXG5cXG5cXG5cXG4ubG93IHtcXG5cXG4gICAgYm9yZGVyOjVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmxvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6Z3JlZW47XFxufVxcblxcbi5oaWdoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZWQ7XFxufVxcblxcbi5tZWRpdW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ODAwO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGhlaWdodDoxNXB4O1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICBtYXJnaW46MnB4OyBcXG5cXG59XFxuXFxuXFxuLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi50cmFzaEl0LCAuZmluaXNoZWQsIC5leGl0RWRpdG9ye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0VHlwZVRleHQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgYm90dG9tOjJweDtcXG59XFxuXFxuLmFkZEJvYXJkZXJCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOjA7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmFkZEJvYXJkZXJCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxNzgsIDE3OCwgMTc4KTtcXG59XFxuXFxuXFxuXFxuLmFkZEJvYXJkZXJUZXh0Qm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDoyMjBweDtcXG59XFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICB3aWR0aDo0MHB4O1xcbiAgICBoZWlnaHQ6NDBweDtcXG4gICAgYm9yZGVyIDowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOSwgNzUsIDIwNSk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDo1MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG5cXG5cXG59XFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3AgOjVweDtcXG59XFxuXFxuXFxuXFxuLm1vYmlsZU1lbnVUaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIG1hcmdpbjphdXRvO1xcbn1cXG5cXG4uZWRpdEJvYXJkLCAuZGVsZXRlQm9hcmQge1xcbiAgICB3aWR0aDoyMHB4O1xcbn1cXG5cXG4uZWRpdEV4YW1wbGVJY29ucyB7XFxuXFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICBcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcblxcbn1cXG5cXG4uZW1wdHlyb3cge1xcbiAgIFxcbiAgICBoZWlnaHQ6MjVweDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxuICAgIFxcbn1cXG5cXG4uZWRpdEJvYXJkLCAuZGVsZXRlQm9hcmQge1xcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xcblxcblxcbn1cXG5cXG4uYm9hcmR0ZXh0Qm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBib3JkZXI6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBcXG4gXFxufVxcblxcbi5ib2FyZFRleHRFZGl0b3Ige1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMTUsIDIxMywgMjEzKTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHotaW5kZXg6MTtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIHdpZHRoOjEwMCU7XFxuXFxuXFxuXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG5cXG5cXG4gXFxuXFxufVxcblxcblxcbi5jaGFuZ2VCb2FyZFRpdGxlQnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcXG5cXG4gICAgLmVkaXRFeGFtcGxlSWNvbnMge1xcbiAgICAgICAgaGVpZ2h0OjE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmVtcHR5cm93IHtcXG4gICAgICAgIGhlaWdodDoxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGVCb2FyZCwgLmVkaXRCb2FyZCB7XFxuICAgICAgICB3aWR0aDoxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZGVyQnV0dG9uIHtcXG4gICAgXFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG5cXG5cXG5cXG4gICAgLmJvYXJke1xcbiAgICAgICAgd2lkdGg6MTg1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tMYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6eHgtc21hbGxcXG4gICAgfVxcblxcbiAgICAuZWRpdCwgLm5vdEVkaXQge1xcblxcbiAgICAgICAgd2lkdGg6MTBweDtcXG4gICAgICAgIFxcblxcbiAgICB9XFxuXFxuICAgIC5nZW5lcmFsVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6NnB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgXFxuICAgIC5leGFtcGxlQm9hcmRUZXh0IHtcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYm9hcmR0ZXh0Qm94IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZCB7XFxuICAgIFxcbiAgICAgICAgd2lkdGg6MTg1cHg7XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmNoYW5nZUJvYXJkVGl0bGVCdXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOngtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkZXJUZXh0Qm94IHtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgICAgIHdpZHRoOjE2MHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLnRhc2ssIC5ub3RUYXNrIHtcXG4gICAgICAgIG1hcmdpbjo1cHg7IFxcbiAgICB9XFxuICAgIC5jaXJjbGVJY29uIHtcXG4gICAgICAgIHdpZHRoOjVweDtcXG4gICAgICAgIGhlaWdodDo1cHhcXG5cXG4gICAgfVxcblxcbiAgICAuY2lyY2xlSWNvbiB7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgfVxcblxcbiAgICAudGFza0hvbGRlclRleHQsIC5kYXRlVGV4dCwgLmJ1dHRvblRleHQge1xcbiAgICAgICAgZm9udC1zaXplOnh4LXNtYWxsO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2tUb29scyB7XFxuICAgICAgICBcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OjVweDtcXG4gICAgICAgIG1hcmdpbi10b3A6NXB4O1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrVGV4dEJveCB7XFxuICAgICAgICB3aWR0aDo4MHB4O1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5kYXRlUGlja2VyIHtcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICB9XFxuXFxuXFxuICAgIFxcbiAgICAuaGlnaCB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICAgIH1cXG5cXG4gICAgLm1lZGl1bSB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmY5ODAwO1xcbiAgICB9XFxuXFxuICAgIC5sb3cge1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgZ3JlZW47XFxuICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2ssIC5ub3RUYXNrIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XFxuICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrRWRpdG9yIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAgNHB4IHNvbGlkO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuICAgIC5idXR0b24ge1xcblxcbiAgICAgICAgaGVpZ2h0OjEwcHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcXG4gICAgICAgIHdpZHRoOjIwcHg7XFxuICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgfVxcblxcbiAgICAuZWRpdFRvb2xzIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC50cmFzaEl0LCAuZmluaXNoZWQsIC5leGl0RWRpdG9yIHtcXG4gICAgICAgIHdpZHRoOjE1cHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLnRhc2tBZGRlciB7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICB9XFxuXFxuXFxuXFxufVxcblxcbi50YXNrLCAubm90VGFzayB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0Q0FBaUQsRUFBRSxxQkFBcUI7SUFDeEU7Ozs7OzhEQUtzRSxFQUFFLGVBQWU7RUFDekY7Ozs7OztFQU1BO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7Ozs7O0FBTUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxtQkFBbUI7OztBQUd2Qjs7Ozs7O0FBTUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTs7SUFFSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7Ozs7SUFJWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsS0FBSztJQUNMLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLE9BQU87SUFDUDtBQUNKOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7OztBQUdwQjs7OztBQUlBO0lBQ0ksNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZC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LHVCQUF1Qjs7SUFFM0I7O0lBRUE7UUFDSSxzQkFBc0I7O0lBRTFCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOzs7OztJQUtBOztRQUVJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVOztJQUVkOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOzs7O0FBSUo7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnN2ZyNSb2JvdG8nKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxuICB9XFxuXFxuXFxuXFxuXFxuXFxuICAucGFnZUNvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtYmFzaXM6IGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcblxcblxcblxcblxcbi5hZGRCb2FyZCB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOTgsIDE5OCwgMTk4KTtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XFxuICAgIFxcbiAgXFxufVxcblxcblxcblxcblxcblxcbmlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLmJvYXJkQ29udGVudCB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTk4LCAxOTgsIDE5OCk7XFxuICAgIHdpZHRoOiAyOTBweDtcXG4gICAgbWFyZ2luOjEwcHg7XFxuXFxuXFxuICAgIFxcbiAgICBwYWRkaW5nLWJvdHRvbTo1cHg7XFxufVxcblxcbi5ib2FyZE92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC4yOTkpO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHRvcDowO1xcbiAgICB6LWluZGV4OjE7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLmRlbGV0ZUJvYXJkLCAuZWRpdEJvYXJkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4udGFza0hvbGRlciB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG5cXG4udGFza1RleHRCb3gge1xcbiAgICB3aWR0aDoxMzVweDtcXG59XFxuLmV4YW1wbGVCb2FyZFRleHQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgdG9wOjRweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZVxcbn1cXG5cXG5cXG4uYWRkQm9hcmRUZXh0IHtcXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuXFxuXFxufVxcblxcblxcblxcbi50YXNrLCAubm90VGFza3tcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjM3LCAyMzAsIDIzMCk7XFxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQ7XFxuICAgIG1hcmdpbjoxMHB4O1xcbn1cXG5cXG4udGFza1Rvb2xzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcblxcbn1cXG4udG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcblxcbi50YXNrTGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDo1cHg7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuXFxuICAgIGJvcmRlcjogMDtcXG5cXG59XFxuLmdlbmVyYWxUZXh0IHtcXG4gICAgZm9udC1zaXplOjEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcblxcbn1cXG5cXG4uZ2VuZXJhbFRleHRIb2xkZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcblxcblxcblxcbi5jaXJjbGVJY29uIHtcXG4gICAgd2lkdGg6MTBweDtcXG4gICAgaGVpZ2h0OjEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG4uZWRpdCwgLm5vdEVkaXR7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6NnB4O1xcbn1cXG5cXG4uY2lyY2xlSWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6YmxhY2s7XFxufVxcblxcblxcblxcbi50YXNrQWRkZXIge1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxufVxcblxcblxcbi50YXNrQWRkZXI6aG92ZXIge1xcbiAgIGN1cnNvcjpwb2ludGVyO1xcbiAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIG1hcmdpbjo1cHg7XFxuXFxufVxcbi5lZGl0VG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOjUwcHg7XFxuXFxufVxcbi5kYXRlVG9vbCB7XFxuICAgIG1hcmdpbjo1cHg7XFxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi50YXNrVGV4dEJveCB7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjo1cHg7XFxufVxcblxcbi5lZGl0VG9vbEhvbGRlciB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5kYXRlUGlja2VyIHtcXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xcbiAgICB3aWR0aDoxMzVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGJvcmRlcjowO1xcbn1cXG5cXG5cXG5cXG4udGFza0VkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6cmdiKDE5NywgNjMsIDYzKTtcXG59XFxuXFxuXFxuLnRhc2tUZXh0Qm94e1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luOjVweDtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLmJ1dHRvbnMgLmJ1dHRvbiB7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBib3JkZXI6NXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZjk4MDA7XFxufVxcblxcblxcbi5ub3RUYXNrIHtcXG4gICAgXFxuICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgXFxuICAgICBjb2xvcjpncmV5OyBcXG4gfSBcXG5cXG4ubm90RWRpdCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDIwJSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSgyMDc2JSkgaHVlLXJvdGF0ZSg4NmRlZykgYnJpZ2h0bmVzcygxMTglKSBjb250cmFzdCgxMCUpO1xcbn1cXG5cXG5cXG5cXG4ubG93IHtcXG5cXG4gICAgYm9yZGVyOjVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmxvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6Z3JlZW47XFxufVxcblxcbi5oaWdoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZWQ7XFxufVxcblxcbi5tZWRpdW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ODAwO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGhlaWdodDoxNXB4O1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICBtYXJnaW46MnB4OyBcXG5cXG59XFxuXFxuXFxuLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi50cmFzaEl0LCAuZmluaXNoZWQsIC5leGl0RWRpdG9ye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0VHlwZVRleHQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgYm90dG9tOjJweDtcXG59XFxuXFxuLmFkZEJvYXJkZXJCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOjA7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmFkZEJvYXJkZXJCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxNzgsIDE3OCwgMTc4KTtcXG59XFxuXFxuXFxuXFxuLmFkZEJvYXJkZXJUZXh0Qm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDoyMjBweDtcXG59XFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICB3aWR0aDo0MHB4O1xcbiAgICBoZWlnaHQ6NDBweDtcXG4gICAgYm9yZGVyIDowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvaGFtYnVyZ2VyTWVudS5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTksIDc1LCAyMDUpO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6NTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuXFxuXFxufVxcblxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBtYXJnaW4tdG9wIDo1cHg7XFxufVxcblxcblxcblxcbi5tb2JpbGVNZW51VGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuXFxuLmVkaXRCb2FyZCwgLmRlbGV0ZUJvYXJkIHtcXG4gICAgd2lkdGg6MjBweDtcXG59XFxuXFxuLmVkaXRFeGFtcGxlSWNvbnMge1xcblxcbiAgICBoZWlnaHQ6MjVweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6ZmxleDtcXG5cXG5cXG59XFxuXFxuLmVtcHR5cm93IHtcXG4gICBcXG4gICAgaGVpZ2h0OjI1cHg7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xcbiAgICBcXG59XFxuXFxuLmVkaXRCb2FyZCwgLmRlbGV0ZUJvYXJkIHtcXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcXG5cXG5cXG59XFxuXFxuLmJvYXJkdGV4dEJveCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgYm9yZGVyOjA7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgXFxuIFxcbn1cXG5cXG4uYm9hcmRUZXh0RWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjE1LCAyMTMsIDIxMyk7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB6LWluZGV4OjE7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICB3aWR0aDoxMDAlO1xcblxcblxcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuXFxuXFxuIFxcblxcbn1cXG5cXG5cXG4uY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XFxuXFxuICAgIC5lZGl0RXhhbXBsZUljb25zIHtcXG4gICAgICAgIGhlaWdodDoxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5lbXB0eXJvdyB7XFxuICAgICAgICBoZWlnaHQ6MTVweDtcXG4gICAgfVxcblxcbiAgICAuZGVsZXRlQm9hcmQsIC5lZGl0Qm9hcmQge1xcbiAgICAgICAgd2lkdGg6MTJweDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgIFxcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuXFxuXFxuXFxuICAgIC5ib2FyZHtcXG4gICAgICAgIHdpZHRoOjE4NXB4O1xcbiAgICB9XFxuXFxuICAgIC50YXNrTGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOnh4LXNtYWxsXFxuICAgIH1cXG5cXG4gICAgLmVkaXQsIC5ub3RFZGl0IHtcXG5cXG4gICAgICAgIHdpZHRoOjEwcHg7XFxuICAgICAgICBcXG5cXG4gICAgfVxcblxcbiAgICAuZ2VuZXJhbFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOjZweDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIFxcbiAgICAuZXhhbXBsZUJvYXJkVGV4dCB7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkdGV4dEJveCB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmQge1xcbiAgICBcXG4gICAgICAgIHdpZHRoOjE4NXB4O1xcbiAgICAgIFxcbiAgICB9XFxuICAgIC5jaGFuZ2VCb2FyZFRpdGxlQnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmRUZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTp4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZGVyVGV4dEJveCB7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgICAgICB3aWR0aDoxNjBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmFkZEJvYXJkZXJCdXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLCAubm90VGFzayB7XFxuICAgICAgICBtYXJnaW46NXB4OyBcXG4gICAgfVxcbiAgICAuY2lyY2xlSWNvbiB7XFxuICAgICAgICB3aWR0aDo1cHg7XFxuICAgICAgICBoZWlnaHQ6NXB4XFxuXFxuICAgIH1cXG5cXG4gICAgLmNpcmNsZUljb24ge1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tIb2xkZXJUZXh0LCAuZGF0ZVRleHQsIC5idXR0b25UZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTp4eC1zbWFsbDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrVG9vbHMge1xcbiAgICAgICAgXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjVweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDo1cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOjVweDtcXG5cXG4gICAgfVxcblxcbiAgICAudGFza1RleHRCb3gge1xcbiAgICAgICAgd2lkdGg6ODBweDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuZGF0ZVBpY2tlciB7XFxuICAgICAgICB3aWR0aDo4MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA2cHg7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgfVxcblxcblxcbiAgICBcXG4gICAgLmhpZ2gge1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbiAgICB9XFxuXFxuICAgIC5tZWRpdW0ge1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmOTgwMDtcXG4gICAgfVxcblxcbiAgICAubG93IHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xcbiAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrLCAubm90VGFzayB7XFxuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAudGFza0VkaXRvciB7XFxuICAgICAgICBib3JkZXItbGVmdDogIDRweCBzb2xpZDtcXG4gICAgfVxcblxcblxcblxcblxcbiAgICAuYnV0dG9uIHtcXG5cXG4gICAgICAgIGhlaWdodDoxMHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDoyMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA2cHg7XFxuICAgIH1cXG5cXG4gICAgLmVkaXRUb29scyB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgfVxcblxcbiAgICAudHJhc2hJdCwgLmZpbmlzaGVkLCAuZXhpdEVkaXRvciB7XFxuICAgICAgICB3aWR0aDoxNXB4O1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrQWRkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcblxcblxcblxcbn1cXG5cXG4udGFzaywgLm5vdFRhc2sge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hhbWJ1cmdlck1lbnUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fLCB7IGhhc2g6IFwiI1JvYm90b1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fLCB7IGhhc2g6IFwiI0N1dGl2ZU1vbm9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG4gIC8qIGN1dGl2ZS1tb25vLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSwgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG5cXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgd2lkdGg6MjUwcHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG5cXG5cXG59XFxuXFxuLnByb2plY3RCdXR0b24sIC51cENvbWluZ0J1dHRvbiB7XFxuXFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBsaW5lLWhlaWdodDoyOHB4O1xcblxcbiAgICB3aWR0aDoxMDAlO1xcblxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcblxcbiAgICBcXG4gICAgXFxufVxcblxcbi5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4ubGlzdFRpdGxlLCAucHJvamVjdFRleHQsIC5wbHVzU2lnbiwgLmRlbGV0ZUFsbFRhc2tUZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnVwQ29taW5nQnV0dG9uIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RUYXNrSG9sZGVyIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOjc1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lclRleHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBtYXJnaW4tcmlnaHQ6NDBweDtcXG59XFxuXFxuLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgIFxcbn1cXG5cXG5cXG4ud2hvbGVPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuIFxcbn1cXG5cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udXBDb21pbmdCdXR0b24ge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6NzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcblxcbi5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MjUlO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLmVkaXRQcm9qZWN0QnV0dG9ue1xcblxcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHotaW5kZXg6MztcXG4gXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjIsIDgzLCAyMjcpO1xcbiBcXG5cXG4gXFxuIH1cXG4gXFxuIFxcbiAuYWRkUHJvamVjdExhYmVsIHtcXG4gICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgICByaWdodDozcHg7XFxuXFxuICAgICBcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gXFxuIFxcbiB9XFxuIFxcbiAuZWRpdFRleHQge1xcbiAgICAgYmFja2dyb3VuZDpub25lO1xcbiBcXG4gICAgIGNvbG9yOndoaXRlO1xcbiAgICAgb3V0bGluZTpub25lO1xcbiAgICAgYm9yZGVyOm5vbmU7XFxuICAgICBoZWlnaHQ6MzBweDtcXG4gICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcXG4gfVxcbiBcXG5cXG4gLmVsZW1lbnRze1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5wbHVzU2lnbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uSG92ZXI6aG92ZXIsIC5wcm9qZWN0QWRkZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcXG4gICAgXFxufVxcblxcbiBcXG4gXFxuIFxcbi5lZGl0VGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgXFxuIFxcbiAgICAgY29sb3I6d2hpdGU7XFxufVxcbiBcXG4gXFxuIC5vdmVybGF5IHtcXG4gICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgIHdpZHRoOjI1MHB4O1xcbiAgICAgei1pbmRleDoxO1xcbiAgICAgXFxuICAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgdG9wOjBweDtcXG5cXG5cXG4gICAgIGRpc3BsYXk6bm9uZTtcXG4gXFxuICAgXFxuIFxcbn1cXG5cXG4ucHJvamVjdEFkZGVyIHtcXG5cXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG5cXG4gICAgd2lkdGg6MTAwJVxcbiAgICBcXG59XFxuXFxuXFxuXFxuLmV4aXQge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuXFxufVxcblxcblxcblxcblxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgd2lkdGg6NDBweDtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIGJvcmRlciA6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NTBweCl7XFxuXFxuIFxcbiAgICAub3ZlcmxheSB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcblxcblxcbiAgICAubW9iaWxlTWVudSB7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2VDb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbnMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1yaWdodDo1MHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MTUlO1xcblxcbiAgICB9XFxuXFxuICAgIC5lZGl0UHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5lZGl0VGV4dHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG5cXG4gICAgfVxcblxcblxcblxcblxcblxcbiAgICAuZXhpdCB7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGNvbG9yOndoaXRlO1xcbiAgICAgICAgbWFyZ2luOjEwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XFxuICAgIC5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6MTVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyNXB4KXtcXG4gICAgLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgICAgICB3aWR0aDoxMS41cHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjIwM3B4KXtcXG4gICAgLmxpc3RUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIH1cXG5cXG5cXG5cXG59XFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XFxuXFxuXFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcXG4gICAgfVxcblxcblxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25hdmlnYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNENBQWlELEVBQUUscUJBQXFCO0lBQ3hFOzs7Ozs4REFLc0UsRUFBRSxlQUFlO0VBQ3pGOztFQUVBLGdDQUFnQztBQUNsQztJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRDQUFxRCxFQUFFLHFCQUFxQjtJQUM1RTs7Ozs7K0RBSzhFLEVBQUUsZUFBZTtFQUNqRzs7O0VBR0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGFBQWE7OztBQUdqQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCOztJQUVoQixVQUFVOztJQUVWLGdCQUFnQjs7OztBQUlwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOzs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7UUFDUSxTQUFTOztBQUVqQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixZQUFZOztBQUVoQjs7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCOztBQUV0Qjs7OztBQUlBO1FBQ1EsU0FBUzs7QUFFakI7Ozs7O0FBS0E7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTOztJQUVULHdCQUF3QjtJQUN4QiwyQkFBMkI7Ozs7Q0FJOUI7OztDQUdBO0tBQ0ksaUJBQWlCO0tBQ2pCLGlCQUFpQjtLQUNqQixTQUFTOzs7S0FHVCxlQUFlOzs7Q0FHbkI7O0NBRUE7S0FDSSxlQUFlOztLQUVmLFdBQVc7S0FDWCxZQUFZO0tBQ1osV0FBVztLQUNYLFdBQVc7S0FDWCxnQkFBZ0I7SUFDakIsZUFBZTtDQUNsQjs7O0NBR0E7SUFDRyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1COzs7QUFHdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7O0FBRS9COzs7OztBQUtBOzs7S0FHSyxXQUFXO0FBQ2hCOzs7Q0FHQztLQUNJLCtCQUErQjtLQUMvQixXQUFXO0tBQ1gsV0FBVztLQUNYLFNBQVM7O0tBRVQsb0JBQW9CO0tBQ3BCLGlCQUFpQjtLQUNqQixPQUFPOzs7S0FHUCxZQUFZOzs7O0FBSWpCOztBQUVBOztJQUVJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjOztJQUVkOztBQUVKOzs7O0FBSUE7SUFDSSxZQUFZOztBQUVoQjs7Ozs7O0FBTUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0lBQ2YsMERBQWtEO0lBQ2xELDJCQUEyQjtJQUMzQixxQkFBcUI7OztBQUd6Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxpQkFBaUI7OztBQUdyQjs7O0FBR0E7SUFDSSxlQUFlOztJQUVmLGVBQWU7QUFDbkI7Ozs7QUFJQTtJQUNJLHFDQUFxQztJQUNyQyxXQUFXO0FBQ2Y7OztBQUdBOzs7SUFHSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7OztJQUlBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsV0FBVzs7OztJQUlmOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksY0FBYztRQUNkLDJCQUEyQjtJQUMvQjs7SUFFQTs7UUFFSSxrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxTQUFTOztJQUViOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksa0JBQWtCOztJQUV0Qjs7Ozs7O0lBTUE7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7Ozs7QUFJSjs7OztBQUlBOzs7O0lBSUk7UUFDSSxpQkFBaUI7SUFDckI7OztBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5zdmcjUm9ib3RvJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcbiAgLyogY3V0aXZlLW1vbm8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICAgIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci5zdmcjQ3V0aXZlTW9ubycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG5cXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgd2lkdGg6MjUwcHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG5cXG5cXG59XFxuXFxuLnByb2plY3RCdXR0b24sIC51cENvbWluZ0J1dHRvbiB7XFxuXFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBsaW5lLWhlaWdodDoyOHB4O1xcblxcbiAgICB3aWR0aDoxMDAlO1xcblxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcblxcbiAgICBcXG4gICAgXFxufVxcblxcbi5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4ubGlzdFRpdGxlLCAucHJvamVjdFRleHQsIC5wbHVzU2lnbiwgLmRlbGV0ZUFsbFRhc2tUZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnVwQ29taW5nQnV0dG9uIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RUYXNrSG9sZGVyIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOjc1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lclRleHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBtYXJnaW4tcmlnaHQ6NDBweDtcXG59XFxuXFxuLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgIFxcbn1cXG5cXG5cXG4ud2hvbGVPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuIFxcbn1cXG5cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udXBDb21pbmdCdXR0b24ge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6NzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcblxcbi5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MjUlO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLmVkaXRQcm9qZWN0QnV0dG9ue1xcblxcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHotaW5kZXg6MztcXG4gXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjIsIDgzLCAyMjcpO1xcbiBcXG5cXG4gXFxuIH1cXG4gXFxuIFxcbiAuYWRkUHJvamVjdExhYmVsIHtcXG4gICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgICByaWdodDozcHg7XFxuXFxuICAgICBcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gXFxuIFxcbiB9XFxuIFxcbiAuZWRpdFRleHQge1xcbiAgICAgYmFja2dyb3VuZDpub25lO1xcbiBcXG4gICAgIGNvbG9yOndoaXRlO1xcbiAgICAgb3V0bGluZTpub25lO1xcbiAgICAgYm9yZGVyOm5vbmU7XFxuICAgICBoZWlnaHQ6MzBweDtcXG4gICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcXG4gfVxcbiBcXG5cXG4gLmVsZW1lbnRze1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5wbHVzU2lnbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uSG92ZXI6aG92ZXIsIC5wcm9qZWN0QWRkZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcXG4gICAgXFxufVxcblxcbiBcXG4gXFxuIFxcbi5lZGl0VGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgXFxuIFxcbiAgICAgY29sb3I6d2hpdGU7XFxufVxcbiBcXG4gXFxuIC5vdmVybGF5IHtcXG4gICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgIHdpZHRoOjI1MHB4O1xcbiAgICAgei1pbmRleDoxO1xcbiAgICAgXFxuICAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgdG9wOjBweDtcXG5cXG5cXG4gICAgIGRpc3BsYXk6bm9uZTtcXG4gXFxuICAgXFxuIFxcbn1cXG5cXG4ucHJvamVjdEFkZGVyIHtcXG5cXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG5cXG4gICAgd2lkdGg6MTAwJVxcbiAgICBcXG59XFxuXFxuXFxuXFxuLmV4aXQge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuXFxufVxcblxcblxcblxcblxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgd2lkdGg6NDBweDtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIGJvcmRlciA6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2hhbWJ1cmdlck1lbnUuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NTBweCl7XFxuXFxuIFxcbiAgICAub3ZlcmxheSB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcblxcblxcbiAgICAubW9iaWxlTWVudSB7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2VDb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbnMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1yaWdodDo1MHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MTUlO1xcblxcbiAgICB9XFxuXFxuICAgIC5lZGl0UHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5lZGl0VGV4dHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG5cXG4gICAgfVxcblxcblxcblxcblxcblxcbiAgICAuZXhpdCB7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGNvbG9yOndoaXRlO1xcbiAgICAgICAgbWFyZ2luOjEwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XFxuICAgIC5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6MTVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyNXB4KXtcXG4gICAgLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgICAgICB3aWR0aDoxMS41cHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjIwM3B4KXtcXG4gICAgLmxpc3RUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIH1cXG5cXG5cXG5cXG59XFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XFxuXFxuXFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcXG4gICAgfVxcblxcblxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgYm94LXNpemluZzogbm9uZTtcXG59XFxuLnNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzYsIDIzNiwgMjU1KTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG4uZXJyb3JNZXNzYWdlIHtcXG5cXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuXFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OjMwO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5tZXNzYWdlSG9sZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOnNpbHZlcjtcXG4gICAgaGVpZ2h0OjE1MHB4O1xcbiAgICB3aWR0aDoyMDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLmNvbnRlbnRIb2xkZXIge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOjIwMHB4O1xcbn1cXG5cXG4uZXhpdEJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBib3JkZXI6MDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpyb3lhbGJsdWU7XFxuXFxufVxcblxcbi5leGl0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOnJnYig1NSwgODgsIDE4OCk7XFxufVxcblxcblxcbi5jb250ZWVudEhvbGRlciBoMiwgLmNvbnRlZW50SG9sZGVyIHAsIC5leGl0QnV0dG9uIHtcXG4gICAgbWFyZ2luOjEwcHg7XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLCtCQUErQjs7SUFFL0IsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTs7SUFFWixzQkFBc0I7SUFDdEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7O0lBR3ZCLG1CQUFtQjs7O0FBR3ZCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgYm94LXNpemluZzogbm9uZTtcXG59XFxuLnNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzYsIDIzNiwgMjU1KTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG4uZXJyb3JNZXNzYWdlIHtcXG5cXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuXFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OjMwO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5tZXNzYWdlSG9sZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOnNpbHZlcjtcXG4gICAgaGVpZ2h0OjE1MHB4O1xcbiAgICB3aWR0aDoyMDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLmNvbnRlbnRIb2xkZXIge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOjIwMHB4O1xcbn1cXG5cXG4uZXhpdEJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBib3JkZXI6MDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpyb3lhbGJsdWU7XFxuXFxufVxcblxcbi5leGl0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOnJnYig1NSwgODgsIDE4OCk7XFxufVxcblxcblxcbi5jb250ZWVudEhvbGRlciBoMiwgLmNvbnRlZW50SG9sZGVyIHAsIC5leGl0QnV0dG9uIHtcXG4gICAgbWFyZ2luOjEwcHg7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/Lyk7XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufVxuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mWWVhciBmcm9tIFwiLi4vc3RhcnRPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0RGF5T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBkYXkgb2YgeWVhclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheU9mWWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMTgzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZSwgc3RhcnRPZlllYXIoZGF0ZSkpO1xuICB2YXIgZGF5T2ZZZWFyID0gZGlmZiArIDE7XG4gIHJldHVybiBkYXlPZlllYXI7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5P1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxhbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgeWVhclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgY2xlYW5EYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoY2xlYW5EYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmlnYXRpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZpZ2F0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4uL3N0eWxlcy9ib2FyZC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9uYXZpZ2F0aW9uLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5jc3NcIlxuXG4gICAgXG5jb25zdCByZW1vdmVJdGVtID0oYXJyYXksIGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChpICE9IGluZGV4KXtcbiAgICAgICAgICAgIG5ld1Rhc2tzLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEluZGV4ICsrXG4gICAgfVxuICAgIHJldHVybiBuZXdUYXNrcztcbn1cblxuXG5jb25zdCBhZGRJdGVtID0gKGFycmF5LGluZGV4LCBpdGVtKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKyspe1xuICAgICAgICBpZiAoaSA9PSBpbmRleCl7XG4gICAgICAgICAgICBuZXdUYXNrcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGFza3MucHVzaChhcnJheVtpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3VGFza3M7XG59XG5cblxuY29uc3Qgc2V0QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgbmV3QXJyYXkgPSBhcnJheTtcbiAgICBsZXQgbmV3VGFza3MgPSBbXTtcbiAgICBuZXdBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBuZXdUYXNrcy5wdXNoKHRhc2spO1xuICAgIH0pXG4gICAgcmV0dXJuIG5ld1Rhc2tzO1xufVxuXG5cblxuXG5cblxuY29uc3Qgc2V0T2JqZWN0ID0gKG9iamVjdCxpc0FycmF5KSA9PiB7XG4gICAgbGV0IG5ld09iamVjdCA9IG9iamVjdDtcbiAgICBsZXQgYmxhbmtPYmplY3QgPSB7fTtcbiAgICBsZXQgbmV3T2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKG5ld09iamVjdCk7XG4gICAgbGV0IG5ld0FycmF5ID0gZmFsc2U7XG4gICAgbmV3QXJyYXkgPSBvYmplY3Q7XG5cbiAgICBpZiAoIWlzQXJyYXkpe1xuICAgICAgICBuZXdPYmplY3RLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3T2JqZWN0W2tleV0gIT0gXCJvYmplY3RcIiApICBibGFua09iamVjdFtrZXldID0gbmV3T2JqZWN0W2tleV07ICAgXG4gICAgICAgICAgICBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3T2JqZWN0W2tleV0pID09PSBcIltvYmplY3QgRGF0ZV1cIiApe1xuICAgICAgICAgICAgICAgIGJsYW5rT2JqZWN0W2tleV0gPSBuZXdPYmplY3Rba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYmxhbmtBcnJheSA9IFtdO1xuICAgICAgICBuZXdBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtICE9IFwib2JqZWN0XCIpIGJsYW5rQXJyYXkucHVzaChpdGVtKVxuICAgICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW0pID09PSBcIltvYmplY3QgRGF0ZV1cIil7XG4gICAgICAgICAgICAgICAgYmxhbmtBcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBibGFua09iamVjdCA9IGJsYW5rQXJyYXk7XG4gICAgfVxuICAgIGlmICghaXNBcnJheSl7XG4gICAgICAgIG5ld09iamVjdEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdPYmplY3Rba2V5XSA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KG5ld09iamVjdFtrZXldKSkge1xuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdPYmplY3Rba2V5XSkgIT09IFwiW29iamVjdCBEYXRlXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsYW5rT2JqZWN0W2tleV0gPSBzZXRPYmplY3QobmV3T2JqZWN0W2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShuZXdPYmplY3Rba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBibGFua09iamVjdFtrZXldID0gc2V0T2JqZWN0KG5ld09iamVjdFtrZXldLHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgICBuZXdBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW0pICE9PSBcIltvYmplY3QgRGF0ZV1cIil7XG4gICAgICAgICAgICAgICAgICAgIGJsYW5rT2JqZWN0LnNwbGljZShjdXJyZW50SW5kZXgsMCxzZXRPYmplY3QoaXRlbSkpXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKXtcbiAgICAgICAgICAgICAgICBibGFua09iamVjdC5zcGxpY2UoY3VycmVudEluZGV4LDAsc2V0T2JqZWN0KGl0ZW0sdHJ1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggKys7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBibGFua09iamVjdDtcblxuXG5cblxufVxuXG5cblxuY29uc3QgYWRkQmluZGluZ3MgPSAoZWxlbWVudHMsZnVuYyxiaW5kaW5nKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzKSkgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lcihiaW5kaW5nLGZ1bmMpO1xuICAgIGVsc2UgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihiaW5kaW5nLGZ1bmMpKTtcbn1cblxuY29uc3QgcmVtb3ZlQmluZGluZ3MgPSAoZWxlbWVudHMsZnVuYyxiaW5kaW5nKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzKSkgZWxlbWVudHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihiaW5kaW5nLGZ1bmMpO1xuICAgIGVsc2UgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihiaW5kaW5nLGZ1bmMpKTtcbn1cblxuXG5cblxuXG5leHBvcnQge3JlbW92ZUl0ZW0sIGFkZEl0ZW0sIGFkZEJpbmRpbmdzLCByZW1vdmVCaW5kaW5ncywgc2V0QXJyYXksIHNldE9iamVjdH1cbiIsImNvbnN0IGNyZWF0ZURvbUVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIGxldCBwYWdlVGV4dCA9IGAgICAgPGRpdiBjbGFzcyA9IFwiY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3MgPSBcIndob2xlT3ZlcmxheVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3MgPSBcImVycm9yTWVzc2FnZVwiPlxuICAgIDxkaXYgY2xhc3MgPSBcIm1lc3NhZ2VIb2xkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwiY29udGVudEhvbGRlclwiPlxuICAgICAgICAgICAgPGgyPkVycm9yPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzID0gXCJlcnJvck1lc3NhZ2VUZXh0XCI+VGV4dCBDYW5ub3QgYmUgb3ZlciAxMCBjaHJhY3RlcnM8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJleGl0QnV0dG9uXCI+RXhpdDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG4gICAgPGRpdiBjbGFzcyA9IFwibW9iaWxlTWVudVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJoYW1idXJnZXJNZW51XCI+PC9idXR0b24+XG4gICAgICAgIDxoMiBjbGFzcyA9IFwibW9iaWxlTWVudVRpdGxlXCI+VG8gRG8gTGlzdDwvaDI+XG5cbiAgICA8L2Rpdj4gXG4gICAgPGRpdiBjbGFzcyA9IFwic2VjdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwib3ZlcmxheVwiPmN1cnJlbnQgb3ZlcmxheTwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzID0gXCJleGl0XCI+WDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJlbGVtZW50c1wiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3MgPSBcImxpc3RUaXRsZVwiID5UbyBEbyBMaXN0PC9oMT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInVwQ29taW5nQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlVwY29taW5nPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0QWRkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJwcm9qZWN0VGV4dFwiPlByb2plY3Q8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcInBsdXNTaWduXCI+KzwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdFRhc2tIb2xkZXJcIj48L2Rpdj5cblxuXG5cblxuIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJwYWdlQ29udGVudFwiPiA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PmBcblxuICAgIGJvZHkuaW5uZXJIVE1MID0gcGFnZVRleHQ7XG5cbn1cblxuXG5cblxuY29uc3QgZ2V0SW5pdGlhbEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uc1wiKTtcbiAgICBsZXQgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvblwiKTtcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBsZXQgZXhpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhpdFwiKTtcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzXCIpO1xuICAgIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RUaXRsZVwiKTtcbiAgICBsZXQgdXBDb21pbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwQ29taW5nQnV0dG9uXCIpO1xuICAgIGxldCBwcm9qZWN0QWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RBZGRlclwiKTtcbiAgICBsZXQgcHJvamVjdFRleHQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGV4dFwiKTtcbiAgICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsdXNTaWduXCIpO1xuICAgIGxldCBwcm9qZWN0VGFza0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRhc2tIb2xkZXJcIik7XG4gICAgbGV0IGVkaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0UHJvamVjdEJ1dHRvblwiKTtcbiAgICBsZXQgZWRpdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRUZXh0XCIpO1xuICAgIGxldCBhZGRQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RMYWJlbFwiKTtcbiAgICBsZXQgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VDb250ZW50XCIpO1xuICAgIGxldCB3aG9sZU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndob2xlT3ZlcmxheVwiKVxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yTWVzc2FnZVwiKVxuICAgIGxldCBlcnJvck1lc3NhZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvck1lc3NhZ2VUZXh0XCIpO1xuICAgIGxldCBleGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leGl0QnV0dG9uXCIpO1xuXG4gICAgbGV0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlck1lbnVcIik7XG4gICAgbGV0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZU1lbnVcIik7XG5cblxuXG4gICAgcmV0dXJuIHtzZWN0aW9uLCBuYXZpZ2F0aW9uLCBvdmVybGF5LCBleGl0LCBlbGVtZW50cyxcbiAgICAgICAgICAgIGxpc3RUaXRsZSwgdXBDb21pbmdCdXR0b24sIHByb2plY3RBZGRlciwgcHJvamVjdFRleHQsXG4gICAgICAgICAgICBwbHVzU2lnbiwgcHJvamVjdFRhc2tIb2xkZXIsIGVkaXRQcm9qZWN0QnV0dG9uLCBlZGl0VGV4dCxcbiAgICAgICAgICAgIGFkZFByb2plY3RMYWJlbCxwYWdlQ29udGVudCwgd2hvbGVPdmVybGF5LCBleGl0QnV0dG9uLCBlcnJvck1lc3NhZ2UsIGVycm9yTWVzc2FnZVRleHQsXG4gICAgICAgICAgICBoYW1idXJnZXJNZW51LCBtb2JpbGVNZW51XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBnZXRVcGRhdGVkRWxlbWVudHMgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IGJvYXJkVGV4dEJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZEJvYXJkZXJUZXh0Qm94XCIpKVxuICAgICAgICBsZXQgYm9hcmRlckJ1dHRvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZEJvYXJkZXJCdXR0b25cIikpXG4gICAgICAgIGxldCBlZGl0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlZGl0UHJvamVjdFwiKSk7XG4gICAgICAgIGxldCBkZWxldGVJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZUl0ZW1cIikpO1xuICAgICAgICBsZXQgcHJvamVjdENvbnRhaW5lclRleHQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0Q29udGFpbmVyVGV4dFwiKSk7XG4gICAgICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdENvbnRhaW5lclwiKSlcbiAgICAgICAgbGV0IGFkZFByb2plY3RMYWJlbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRQcm9qZWN0TGFiZWxcIikpO1xuICAgICAgICBsZXQgcHJvamVjdEJ1dHRvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RCdXR0b25cIikpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0VGFza0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRhc2tIb2xkZXJcIik7XG5cblxuICAgICAgICBsZXQgcHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbiA9IEFycmF5LmZyb20ocHJvamVjdFRhc2tIb2xkZXIuY2hpbGRyZW4pO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlQ29udGVudFwiKTtcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50Q2hpbGRyZW4gPSBBcnJheS5mcm9tKHBhZ2VDb250ZW50LmNoaWxkcmVuKTtcblxuICAgICAgICBsZXQgY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9uXCIpKTtcblxuICAgICAgICBsZXQgZGVsZXRlQm9hcmQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGVCb2FyZFwiKSk7XG4gICAgICAgIGxldCBlZGl0Qm9hcmQgID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdEJvYXJkXCIpKTtcbiAgICAgICAgbGV0IHRhc2tIb2xkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFza0hvbGRlclwiKSk7XG4gICAgICAgIGxldCB0YXNrTGlzdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrTGlzdHNcIikpO1xuICAgICAgICBsZXQgYm9hcmRDb250ZW50VGV4dEJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJvYXJkdGV4dEJveFwiKSk7XG4gICAgICAgIGxldCBib2FyZE92ZXJsYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJib2FyZE92ZXJsYXlcIikpXG4gICAgICAgIGxldCB0YXNrQWRkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFza0FkZGVyXCIpKVxuIFxuICAgICAgICBsZXQgZXhhbXBsZUJvYXJkVGV4dCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImV4YW1wbGVCb2FyZFRleHRcIikpXG4gICAgICAgIGxldCBidXR0b24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidXR0b25cIikpO1xuXG4gICAgICAgIGxldCB0cmFzaEl0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidHJhc2hJdFwiKSk7XG4gICAgICAgIGxldCBmaW5pc2hlZCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZpbmlzaGVkXCIpKTtcblxuICAgICAgICBsZXQgdGFza1RleHRCb3ggPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrVGV4dEJveFwiKSk7XG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGF0ZVBpY2tlclwiKSk7XG5cbiAgICAgICAgbGV0IGNpcmNsZUljb24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXJjbGVJY29uXCIpKTtcbiAgICAgICAgbGV0IGVkaXQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlZGl0XCIpKVxuICAgICAgICBsZXQgZGF0ZVRvb2xzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGF0ZVRvb2xcIikpXG5cbiAgICAgICAgbGV0IGV4aXRFZGl0b3IgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJleGl0RWRpdG9yXCIpKTtcblxuXG5cbiAgICAgICAgcmV0dXJuIHtlZGl0SXRlbXMsIGRlbGV0ZUl0ZW1zLCBhZGRQcm9qZWN0TGFiZWxzLCBwcm9qZWN0QnV0dG9uLFxuICAgICAgICAgICAgcHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbiwgcHJvamVjdENvbnRhaW5lclRleHQsIGJvYXJkVGV4dEJveCwgYm9hcmRlckJ1dHRvbiwgXG4gICAgICAgICAgICBkZWxldGVCb2FyZCwgZWRpdEJvYXJkLCBwYWdlQ29udGVudCwgcGFnZUNvbnRlbnRDaGlsZHJlbiwgdGFza0hvbGRlcnMsIGV4YW1wbGVCb2FyZFRleHQsXG4gICAgICAgICAgICBjaGFuZ2VCb2FyZFRpdGxlQnV0dG9ucywgYm9hcmRDb250ZW50VGV4dEJveCwgYm9hcmRPdmVybGF5LCB0YXNrTGlzdHMsIHRhc2tBZGRlcnMsIGJ1dHRvbixcbiAgICAgICAgICAgIHRyYXNoSXQsIGZpbmlzaGVkLCB0YXNrVGV4dEJveCwgZGF0ZVBpY2tlciwgY2lyY2xlSWNvbiwgZWRpdCwgZGF0ZVRvb2xzLCBleGl0RWRpdG9yLCBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgIH07XG4gICAgXG4gICAgfVxuICAgIFxuXG4gXG5leHBvcnQgIHtnZXRJbml0aWFsRWxlbWVudHMsIGNyZWF0ZURvbUVsZW1lbnRzLCBnZXRVcGRhdGVkRWxlbWVudHN9XG4gICAgXG4iLCJpbXBvcnQge3NldE9iamVjdH0gZnJvbSBcIi4vZWxlbWVudEV2ZW50cy5qc1wiO1xuXG5jb25zdCBzZW5kID0gKFxuICAgICgpID0+IHtcbiAgICAgICAgbGV0IGl0ZW1zID0ge307XG4gICAgICAgIGxldCB0aXRsZUl0ZW1zID0ge31cbiAgICAgICAgaXRlbXMudXBjb21pbmcgPSBbXVxuXG4gICAgICAgIGNvbnN0IHNlbmREYXRhID0gKGRhdGEsaW5kZXgsdGl0bGUpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zW2luZGV4XSA9IGRhdGE7XG4gICAgICAgICAgICB0aXRsZUl0ZW1zW2luZGV4XSA9IHRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VuZE5hbWUgPSAoaW5kZXgsIHRpdGxlKSA9PiB7XG4gICAgICAgICAgICB0aXRsZUl0ZW1zW2luZGV4XSA9IHRpdGxlO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHJldHJpZXZlRGF0YSA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW1zW2luZGV4XSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zW2luZGV4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCByZXRyaWV2ZVRpdGxlID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAodGl0bGVJdGVtc1tpbmRleF0pe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aXRsZUl0ZW1zW2luZGV4XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV0cmlldmVUaXRsZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2V0T2JqZWN0KHRpdGxlSXRlbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3ZlcndyaXRlVGl0bGVzID0gKHRpdGxlcykgPT4ge1xuICAgICAgICAgICAgdGl0bGVJdGVtcyA9ICB0aXRsZXNcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3Qgb3ZlcndyaXRlRGF0YSA9IChkYXRhKSA9PiB7IFxuICAgICAgICAgICAgaXRlbXMgPSBkYXRhO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBnZXRBbGxEYXRhID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNldE9iamVjdChpdGVtcyk7XG4gICAgICAgIH1cbiBcbiAgICAgICAgY29uc3QgZGVsZXRlTmFtZSA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1RpdGxlcyA9IHRpdGxlSXRlbXM7XG4gICAgICAgICAgICBsZXQgbmV3VGl0bGVLZXlzID0gT2JqZWN0LmtleXMobmV3VGl0bGVzKTtcbiAgICAgICAgICAgIGxldCBmaW5hbFRpdGxlcyA9IHt9XG4gICAgICAgICAgICBuZXdUaXRsZUtleXMgPSBuZXdUaXRsZUtleXMuZmlsdGVyKGtleSA9PiBrZXkgIT0gaW5kZXgpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8bmV3VGl0bGVLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZmluYWxUaXRsZXNbaV0gPSBuZXdUaXRsZXNbbmV3VGl0bGVLZXlzW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZpbmFsVGl0bGVzO1xuXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgY29uc3QgZGVsZXRlRGF0YSA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGl0bGVJdGVtcyA9IGRlbGV0ZU5hbWUoaW5kZXgpO1xuICAgICAgICAgICAgbGV0IG5ld0l0ZW1zID0gc2V0T2JqZWN0KGl0ZW1zKTtcbiAgICAgICAgICAgIGxldCBuZXdJdGVtc0tleXMgPSBPYmplY3Qua2V5cyhuZXdJdGVtcyk7XG4gICAgICAgICAgICBuZXdJdGVtc0tleXMgPSBuZXdJdGVtc0tleXMuZmlsdGVyKGtleSA9PiBrZXkgIT0gaW5kZXgpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBuZXdlckl0ZW1zID0ge307XG4gICAgICAgICAgICBuZXdJdGVtc0tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIG5ld2VySXRlbXNba2V5XSA9IG5ld0l0ZW1zW2tleV07XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpdGVtcyA9IG5ld2VySXRlbXM7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtzZW5kRGF0YSwgcmV0cmlldmVEYXRhLHJldHJpZXZlVGl0bGUsIFxuICAgICAgICAgICAgZGVsZXRlRGF0YSwgZ2V0QWxsRGF0YSwgb3ZlcndyaXRlRGF0YSwgXG4gICAgICAgICAgICBzZW5kTmFtZSwgcmV0cmlldmVUaXRsZXMsIG92ZXJ3cml0ZVRpdGxlc307XG5cbiAgICB9XG4pKClcblxuZXhwb3J0IHtzZW5kfTsiLCIvL2hlbHBmdWwgZnVuY3Rpb25zIHRoYXQgYXRlIHR1Y2tlZCBpbiB0aGlzIGZpbGUgdG8gbWFrZSBjb250ZW50IG1vcmUgY2xlYW4gYW5kIHJlYWRhYmxlXG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCdcbmltcG9ydCBnZXREYXlPZlllYXIgZnJvbSAnZGF0ZS1mbnMvZ2V0RGF5T2ZZZWFyJ1xuXG5pbXBvcnQge2dldFVwZGF0ZWRFbGVtZW50c30gZnJvbSBcIi4vcGFnZUxheW91dC5qc1wiXG5cbmNvbnN0IGZpbmRCb2FyZFRleHRCb3ggPSAgKGluZGV4KSA9PiB7XG4gICAgbGV0IHRhc2tMaXN0cyA9IGdldEVsZW1lbnRCeUJvYXJkSW5kZXgoaW5kZXgsXCJ0YXNrTGlzdHNcIik7XG4gICAgbGV0IGJ1dHRvblRleHQgPSBcImNvdWxkIG5vdCBsb2FkIHRleHRcIlxuICAgIGxldCB0YXNrTGlzdENoaWxkcmVuID0gQXJyYXkuZnJvbSh0YXNrTGlzdHMuY2hpbGRyZW4pXG5cbiAgIFxuICAgIHRhc2tMaXN0Q2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImJvYXJkVGV4dEVkaXRvclwiKSB7XG4gICAgICAgICAgICAgYnV0dG9uVGV4dCA9IEFycmF5LmZyb20oY2hpbGQuY2hpbGRyZW4pWzBdLnZhbHVlO1xuICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuICAgIHJldHVybiBidXR0b25UZXh0O1xufVxuXG5jb25zdCBnZXRFbGVtZW50QnlCb2FyZEluZGV4ID0gKGluZGV4LGRvbUVsZW1lbnQpID0+IHtcblxuICAgIGxldCBlbGVtZW50ID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IG5ld0VsZW1lbnQgPSBmYWxzZTtcbiAgICBlbGVtZW50W2RvbUVsZW1lbnRdLmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5ib2FyZEluZGV4ID09IGluZGV4KSBuZXdFbGVtZW50ID0gY2hpbGRFbGVtZW50XG4gICAgfSlcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcblxuXG59XG5cblxuXG5jb25zdCBnZXRVcENvbWluZ1Rhc2tzICA9IChhcnJheSkgPT4ge1xuICAgIGxldCBuZXdBcnJheSA9IFtdXG5cbiAgICBhcnJheS5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgYm9hcmQudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLm5hdkluZGV4ID09IFwidXBjb21pbmdcIikge1xuICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBuZXdBcnJheTtcbn1cblxuLy8gb25seSB3b3JrcyB3aXRoIHN0YXRpYyBsaXN0IHRhc2tzIHdoaWNoIGhhcyB0d28gYXJyYXlzXG4vLyBvbmUgdGhhdCBjYW4gdGFrZSBkaWZmZXJlbnQgdHlwZXMgb2YgZWRpdG9ycyB3aGljaCBpcyBrbm93biBhc1xuLy8gdGhlIGNoYW5nZWRib2FyZGxpc3RzIGFuZCB0aGUgb25lIHRoYXQgY2hhbmdlcyB2ZXJ5IGxpdHRsZSBcbi8vIGFuZCB2YWx1ZXMgY2FuIGJlIGFkZGVkIGJ1dCB3aWxsIGJlIGVkaXRlZCBpbiB0aGUgZWRpdG9ycyBpbiBjaGFuZ2VkQm9hcmRMaXN0c1xuY29uc3QgZmluZE9iamVjdEJ5TmFtZSA9IChuYW1lLHBhcmVudEFycmF5KSA9PiB7XG4gICAgbGV0IGN1cnJlbnRPYmplY3QgPSBmYWxzZTtcbiAgICBsZXQgYnJlYWtMb29wO1xuICAgIGxldCBzdGF0aWNMaXN0VGFza3MgPSBwYXJlbnRBcnJheTtcblxuICAgIHN0YXRpY0xpc3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICB0YXNrLmNoYW5nZWRCb2FyZExpc3RzLmZvckVhY2gobGlzdFRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3RUYXNrW25hbWVdKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50T2JqZWN0ID0gbGlzdFRhc2s7XG4gICAgICAgICAgICAgICAgYnJlYWtMb29wID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZiAoYnJlYWtMb29wKSByZXR1cm47XG5cbiAgICB9KVxuXG4gICAgcmV0dXJuIGN1cnJlbnRPYmplY3Q7XG5cbn1cblxuLy8gVGFrZXMgc3RhdGljbGlzdCB0YXNrcyBhcnJheSBkb2VzIG5vdCB3b3JrIGluIGFueSBvdGhlciB0ZW1wYWxhdGUgZG8gbm90IHRyeSBpdFxuY29uc3QgZ2V0T2JqZWN0VmFsdWUgPSAoY3VycmVudE9iamVjdCwgdmFsdWUsYXJyYXkpID0+IHtcbiAgICBsZXQgb2JqZWN0VmFsdWUgPSBmaW5kT2JqZWN0QnlOYW1lKGN1cnJlbnRPYmplY3QsYXJyYXkpO1xuICAgIGxldCBuZXdWYWx1ZSA9IGZhbHNlO1xuICAgIGlmIChvYmplY3RWYWx1ZSAhPSBmYWxzZSkgbmV3VmFsdWUgPSBvYmplY3RWYWx1ZVt2YWx1ZV07XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuXG5cbmNvbnN0IGNoYW5nZVZhbHVlVG9EYXRlID0gKHZhbHVlKSA9PiB7XG4gICAgbGV0IG5ld1ZhbHVlID0gdmFsdWUuc3BsaXQoXCItXCIpO1xuICAgIGxldCB5ZWFyID0gbmV3VmFsdWVbMF07XG4gICAgbGV0IG1vbnRoSW5kZXggPSBuZXdWYWx1ZVsxXSAtMTtcbiAgICBsZXQgZGF5ID0gbmV3VmFsdWVbMl07XG5cblxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoeWVhcixtb250aEluZGV4LGRheSk7XG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbmNvbnN0IHNvcnREYXRlc0J5TGF0ZXN0RGF5ID0gKHRpbWVUYXNrcykgPT4ge1xuICAgIGxldCBuZXdUaW1lVGFza3MgPSB0aW1lVGFza3M7XG4gICAgbmV3VGltZVRhc2tzLnNvcnQoKHRpbWVUYXNrMSwgdGltZVRhc2syKSA9PiB7XG4gICAgICAgIGxldCBkYXlzMiA9IGdldERheU9mWWVhcih0aW1lVGFzazIuZGF0ZSk7XG4gICAgICAgIGxldCBkYXlzMSA9IGdldERheU9mWWVhcih0aW1lVGFzazEuZGF0ZSk7XG4gICAgICAgIHJldHVybiBkYXlzMiAtIGRheXMxO1xuICAgIH0pXG4gICAgcmV0dXJuIG5ld1RpbWVUYXNrcztcblxuXG59XG5cblxuY29uc3QgY3JlYXRlVGFza1RlbXBsYXRlID0gKHRleHQsZGF0ZSxwcmlvcml0eSxwcm9qZWN0VHlwZVRleHQsY2hlY2tlZCkgPT4ge1xuICAgIGxldCB0YXNrID0ge31cbiAgICB0YXNrLmxpc3RUYXNrID0gdHJ1ZTtcbiAgICB0YXNrLnRleHQgPSB0ZXh0LFxuICAgIHRhc2suZGF0ZSA9IGRhdGU7XG5cbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgdGFzay5kYXRlcyA9IFt5ZWFyLCBtb250aCwgZGF5XTtcbiAgICB0YXNrLmRhdGVUZXh0ID0gZm9ybWF0KHRhc2suZGF0ZSxcIk1NTSBkIHlcIik7XG4gICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgIWNoZWNrZWQ/IHRhc2suY2hlY2tlZCA9IGZhbHNlOiB0YXNrLmNoZWNrZWQgPSB0cnVlO1xuICAgIGlmICh0eXBlb2YgcHJvamVjdFR5cGVUZXh0ICE9IFwidW5kZWZpbmVkXCIpICB0YXNrLnByb2plY3RUeXBlVGV4dCA9IHByb2plY3RUeXBlVGV4dDtcbiAgICByZXR1cm4gdGFzaztcblxufVxuXG5cbmNvbnN0IGNoZWNrU3BhY2VzID0gKHRleHQpID0+IHtcbiAgICBpZiAodGV4dC50cmltKCkubGVuZ3RoICE9IDApIHJldHVybiB0cnVlXG4gICAgZWxzZSByZXR1cm4gZmFsc2Vcbn1cblxuXG5leHBvcnQge2ZpbmRCb2FyZFRleHRCb3gsIGdldEVsZW1lbnRCeUJvYXJkSW5kZXgsIGdldE9iamVjdFZhbHVlLCBcbiAgICBjaGFuZ2VWYWx1ZVRvRGF0ZSwgc29ydERhdGVzQnlMYXRlc3REYXksIGNyZWF0ZVRhc2tUZW1wbGF0ZSxcbiAgICBmaW5kT2JqZWN0QnlOYW1lLCBnZXRVcENvbWluZ1Rhc2tzLCBjaGVja1NwYWNlc1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwidGltZXNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknXG5pbXBvcnQgaXNUaGlzV2VlayBmcm9tICdkYXRlLWZucy9pc1RoaXNXZWVrJ1xuXG5pbXBvcnQge3NvcnREYXRlc0J5TGF0ZXN0RGF5fSBmcm9tIFwiLi91dGlsaXRpZXMuanNcIlxuXG5cbmltcG9ydCAge3NlbmR9IGZyb20gXCIuL3NlbmQuanNcIlxuaW1wb3J0IHtzZXRPYmplY3R9IGZyb20gXCIuL2VsZW1lbnRFdmVudHMuanNcIlxuXG4gICAgY29uc3QgY3JlYXRlVXBDb21pbmdUZW1wbGF0ZSA9IChjdXJyZW50VGV4dCwgdGFza3MpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrcyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIHRhc2tzICE9IFwidW5kZWZpbmVkXCIpIGN1cnJlbnRUYXNrcyA9IHRhc2tzOyBcbiAgICBcbiAgICAgICAgbGV0IGJvYXJkID0ge2lzVXBDb21pbmdCb2FyZDogdHJ1ZSx0ZXh0OmN1cnJlbnRUZXh0LCB0YXNrczogY3VycmVudFRhc2tzLCBjaGFuZ2VkQm9hcmRMaXN0czogW10sIH07XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICBcbiAgICBcbiAgICB9XG5cbiAgICBjb25zdCBhZGRVcENvbWluZ0JvYXJkcyA9IChhcnJheSkgPT4ge1xuICAgICAgICBsZXQgbmV3QXJyYXkgPSBhcnJheTtcbiAgICAgICAgbGV0IHRvZGF5Qm9hcmQgPSBjcmVhdGVVcENvbWluZ1RlbXBsYXRlKFwiVG9kYXlcIiwgW10pO1xuICAgICAgICBsZXQgd2Vla0JvYXJkID0gY3JlYXRlVXBDb21pbmdUZW1wbGF0ZShcIldlZWtcIixbXSk7XG4gICAgICAgIGxldCB0aW1lQm9hcmRzID0gW3RvZGF5Qm9hcmQsd2Vla0JvYXJkXTtcbiAgICAgICAgdGltZUJvYXJkcy5mb3JFYWNoKGJvYXJkID0+IG5ld0FycmF5LnB1c2goYm9hcmQpKTtcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBnZXRUaW1lVXBjb21pbmdWYWx1ZXMgPSAobmF2cyxrZXksdG9kYXlUYXNrcywgd2Vla1Rhc2tzKSA9PiB7XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSAwO1xuICAgIFxuICAgICAgICBuYXZzW2tleV0uZm9yRWFjaCh0YXNrID0+IHtcbiAgICBcbiAgICAgICAgICAgIHRhc2sudGFza0luZGV4ID0gdGFza0luZGV4O1xuICAgICAgICAgICAgdGFzay5uYXZJbmRleCA9IFwidXBjb21pbmdcIjtcbiAgICAgICAgICAgIHRhc2submF2TmFtZSA9IFwiVXBjb21pbmdcIjtcbiAgICBcbiAgICAgICAgICAgIGlmIChpc1RvZGF5KHRhc2suZGF0ZSkpIHRvZGF5VGFza3MucHVzaCh0YXNrKVxuICAgICAgICAgICAgaWYgKGlzVGhpc1dlZWsodGFzay5kYXRlKSkgd2Vla1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICB0YXNrSW5kZXggKys7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7dG9kYXlUYXNrcywgd2Vla1Rhc2tzfTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldFRpbWVOb3JtYWxWYWx1ZXMgID0gKG5hdnMsa2V5LHRvZGF5VGFza3Msd2Vla1Rhc2tzKSA9PiB7XG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gMDtcbiAgICAgICAgbmF2c1trZXldLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2tJbmRleCA9IDA7XG4gICAgICAgICAgICBib2FyZC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2sudGFza0luZGV4ID0gdGFza0luZGV4O1xuICAgICAgICAgICAgICAgIHRhc2suYm9hcmRJbmRleCA9IGJvYXJkSW5kZXg7XG4gICAgXG4gICAgICAgICAgICAgICAgdGFzay5uYXZJbmRleCA9IGtleTtcbiAgICAgICAgICAgICAgICB0YXNrLm5hdk5hbWUgPSBzZW5kLnJldHJpZXZlVGl0bGUoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNUb2RheSh0YXNrLmRhdGUpKSB0b2RheVRhc2tzLnB1c2godGFzaylcbiAgICAgICAgICAgICAgICBpZiAoaXNUaGlzV2Vlayh0YXNrLmRhdGUpKSB3ZWVrVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrSW5kZXgrKztcbiAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBib2FyZEluZGV4Kys7XG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIHJldHVybiB7dG9kYXlUYXNrcyx3ZWVrVGFza3N9XG4gICAgXG4gICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldFRhc2tUaW1lVmFsdWVzID0gKCkgPT4ge1xuICAgICAgICAgbGV0IGRhdGEgPSBzZW5kLmdldEFsbERhdGEoKTtcbiAgICAgICAgIGxldCBuYXZzID0gc2V0T2JqZWN0KGRhdGEpO1xuICAgICAgICAgbGV0IG5hdktleXMgPSBPYmplY3Qua2V5cyhuYXZzKTtcbiAgICAgICAgIFxuICAgICAgICAgbGV0IHRvZGF5VGFza3MgPSBbXTtcbiAgICAgICAgIGxldCB3ZWVrVGFza3MgPSBbXTsgICAgXG4gICAgICAgICBuYXZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICBpZiAoa2V5ID09IFwidXBjb21pbmdcIil7XG4gICAgICAgICAgICAgICAgIGxldCB0aW1lcyA9IGdldFRpbWVVcGNvbWluZ1ZhbHVlcyhuYXZzLGtleSwgdG9kYXlUYXNrcywgd2Vla1Rhc2tzKTtcbiAgICAgICAgICAgICAgICAgdG9kYXlUYXNrcyA9IHRpbWVzLnRvZGF5VGFza3M7XG4gICAgICAgICAgICAgICAgIHdlZWtUYXNrcyA9IHRpbWVzLndlZWtUYXNrczsgICAgXG4gICAgXG4gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgbGV0IHRpbWVzID0gZ2V0VGltZU5vcm1hbFZhbHVlcyhuYXZzLGtleSx0b2RheVRhc2tzLCB3ZWVrVGFza3MpO1xuICAgICAgICAgICAgICAgICB0b2RheVRhc2tzID0gdGltZXMudG9kYXlUYXNrcztcbiAgICAgICAgICAgICAgICAgd2Vla1Rhc2tzID0gdGltZXMud2Vla1Rhc2tzO1xuICAgIFxuICAgICAgICAgICAgIH1cbiAgICAgICAgIH0pXG4gICAgICAgICBuYXZzID0gc2VuZC5nZXRBbGxEYXRhKCk7ICAgIFxuICAgICAgICAgdG9kYXlUYXNrcyA9IHNvcnREYXRlc0J5TGF0ZXN0RGF5KHRvZGF5VGFza3MpO1xuICAgICAgICAgd2Vla1Rhc2tzID0gc29ydERhdGVzQnlMYXRlc3REYXkod2Vla1Rhc2tzKTtcbiAgICAgICAgIHJldHVybiB7dG9kYXlUYXNrcywgd2Vla1Rhc2tzfTtcbiAgICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlclRpbWVUYXNrcyA9IChhcnJheSkgPT4ge1xuICAgICAgICBsZXQgbmV3QXJyYXkgPSBhZGRVcENvbWluZ0JvYXJkcyhhcnJheSk7XG4gICAgICAgIGxldCB0aW1lcyA9IGdldFRhc2tUaW1lVmFsdWVzKCk7XG4gICAgICAgIG5ld0FycmF5LmZvckVhY2goYm9hcmQ9PiB7XG4gICAgICAgICAgICBpZiAoYm9hcmQudGV4dCA9PSBcIlRvZGF5XCIpe1xuICAgICAgICAgICAgICAgIGJvYXJkLnRhc2tzID0gdGltZXMudG9kYXlUYXNrcztcbiAgICAgICAgICAgICAgICBib2FyZC5jaGFuZ2VkQm9hcmRMaXN0cyA9IGJvYXJkLnRhc2tzO1xuICAgIFxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChib2FyZC50ZXh0ID09IFwiV2Vla1wiKXtcbiAgICAgICAgICAgICAgICBib2FyZC50YXNrcyA9IHRpbWVzLndlZWtUYXNrcztcbiAgICAgICAgICAgICAgICBib2FyZC5jaGFuZ2VkQm9hcmRMaXN0cyA9IGJvYXJkLnRhc2tzO1xuICAgIFxuICAgICAgICAgICAgfSBcbiAgICBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIFxuICAgIH1cblxuXG5cbmV4cG9ydCB7cmVuZGVyVGltZVRhc2tzfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==