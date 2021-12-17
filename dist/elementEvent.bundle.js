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
___CSS_LOADER_EXPORT___.push([module.id, "/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n  }\n\n\n\n\n\n  .pageContent {\n    display:flex;\n    flex-basis: auto;\n    overflow-y: hidden;\n    height:100%;\n    overflow-x: auto;\n}\n\n\n\n\n\n.addBoard {\n    width: 250px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    background:rgb(198, 198, 198);\n    margin:10px;\n    padding-bottom:10px;\n    \n  \n}\n\n\n\n\n\ninput {\n    outline: none;\n}\n\n\n.boardContent {\n\n    font-family: 'Roboto', sans-serif;\n    overflow-y: auto;\n    overflow-x: hidden;\n    flex-shrink: 0;\n}\n\n.board {\n    position: relative;\n    text-align:center;\n    background:rgb(198, 198, 198);\n    width: 290px;\n    margin:10px;\n\n\n    \n    padding-bottom:5px;\n}\n\n.boardOverlay {\n    background:rgba(0, 0, 0, 0.299);\n    position:absolute;\n    width:100%;\n    height:100%;\n    top:0;\n    z-index:1;\n    display:none;\n}\n\n.deleteBoard, .editBoard {\n    cursor: pointer;\n}\n\n\n.taskHolder {\n\n    display:flex;\n    align-items:center;\n}\n\n.taskTextBox {\n    width:135px;\n}\n.exampleBoardText {\n    position:relative;\n    top:4px;\n    font-size: large\n}\n\n\n.addBoardText {\n    margin-top:5px;\n    font-size: large;\n\n\n}\n\n\n\n.task, .notTask{\n    background:rgb(237, 230, 230);\n    border-left: 8px solid;\n    margin:10px;\n}\n\n.taskTools {\n    display:flex;\n    justify-content:space-between;\n    padding-left:10px;\n    padding-right:10px;\n    margin-top:10px;\n\n}\n.tools {\n    display:flex;\n}\n\n\n.taskLabel {\n    position: relative;\n    top:5px;\n    word-wrap: break-word;\n    margin-bottom:10px;\n    font-size: smaller;\n\n    border: 0;\n\n}\n.generalText {\n    font-size:10px;\n    margin-right: 20px;\n\n}\n\n.generalTextHolder {\n    display:flex;\n}\n\n\n\n\n.circleIcon {\n    width:10px;\n    height:10px;\n    border-radius:20px;\n    border: 3px solid black;\n    cursor:pointer;\n}\n.edit, .notEdit{\n    width:20px;\n    cursor:pointer;\n    margin-right:6px;\n}\n\n.circleIcon:hover {\n    background:black;\n}\n\n\n\n.taskAdder {\n    margin-top:10px;\n}\n\n\n.taskAdder:hover {\n   cursor:pointer;\n   background:rgb(178, 178, 178);\n}\n\n\n\n\n\n\n\n\n.priority {\n    display:flex;\n    margin:5px;\n\n}\n.editTools {\n    display:flex;\n    width:50px;\n\n}\n.dateTool {\n    margin:5px;\n    margin-right:14px;\n    display:flex;\n}\n.taskTextBox {\n    height:20px;\n    font-family: 'Roboto', sans-serif;\n    margin:5px;\n}\n\n.editToolHolder {\n\n    display:flex;\n    justify-content:space-between;\n    \n}\n\n.buttons {\n    margin-left: 5px;\n}\n\n.datePicker {\n    margin-left:5px;\n    width:135px;\n    height:20px;\n    border:0;\n}\n\n\n\n.taskEditor {\n    background: rgb(237, 230, 230);\n    margin:10px;\n    margin-left:20px;\n    display:flex;\n    align-items: center;\n    border-left: 8px solid;\n    flex-direction: column;\n}\n\n.error {\n    color:rgb(197, 63, 63);\n}\n\n\n.taskTextBox{\n    border:0;\n    margin:5px;\n\n}\n\n\n\n\n.buttons .button {\n\n    cursor: pointer;\n}\n\n.high {\n    border:5px solid red;\n}\n\n.medium {\n    border: 5px solid #ff9800;\n}\n\n\n.notTask {\n    \n     text-decoration: line-through; \n     color:grey; \n } \n\n.notEdit {\n    filter: invert(20%) sepia(10%) saturate(2076%) hue-rotate(86deg) brightness(118%) contrast(10%);\n}\n\n\n\n.low {\n\n    border:5px solid green;\n}\n\n.low:hover {\n    background:green;\n}\n\n.high:hover {\n    background:red;\n}\n\n.medium:hover {\n    background: #ff9800;\n}\n\n.button {\n    color:black;\n    height:15px;\n    width:35px;\n    line-height: 15px;\n    font-size: x-small;\n    margin:2px; \n\n}\n\n\n.buttons {\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n\n}\n\n.trashIt, .finished, .exitEditor{\n    cursor: pointer;\n}\n\n\n.projectTypeText {\n    position:relative;\n    bottom:2px;\n}\n\n.addBoarderButton {\n    background:0;\n    width:100%;\n    border:0;\n    margin-top: 5px;\n    height:20px;\n    cursor:pointer;\n}\n\n.addBoarderButton:hover {\n    background:rgb(178, 178, 178);\n}\n\n\n\n.addBoarderTextBox {\n    font-family: 'Roboto', sans-serif;\n    border:0;\n    margin-top:5px;\n    height:20px;\n    width:220px;\n}\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n.editBoard, .deleteBoard {\n    width:20px;\n}\n\n.editExampleIcons {\n\n    height:25px;\n    \n    display:flex;\n\n\n}\n\n.emptyrow {\n   \n    height:25px;\n    width:100%;\n    text-indent: -9999px;\n    \n}\n\n.editBoard, .deleteBoard {\n    margin-left:10px;\n\n\n}\n\n.boardtextBox {\n    font-family: 'Roboto', sans-serif;\n    text-align: center;\n    font-size: large;\n    width:100%;\n    height:20px;\n    border:0;\n    background:none;\n    \n \n}\n\n.boardTextEditor {\n    background:rgb(215, 213, 213);\n    position:relative;\n    z-index:1;\n    margin-top:10px;\n    margin-bottom:10px;\n    width:100%;\n\n\n\n    justify-content:center;\n    display:flex;\n\n\n \n\n}\n\n\n.changeBoardTitleButton {\n    cursor: pointer;\n}\n\n\n@media only screen and (max-width: 300px){\n\n    .editExampleIcons {\n        height:15px;\n    }\n\n    .emptyrow {\n        height:15px;\n    }\n\n    .deleteBoard, .editBoard {\n        width:12px;\n    }\n\n\n\n    .board{\n        width:185px;\n    }\n\n    .taskLabel {\n        font-size:xx-small\n    }\n\n    .edit {\n\n        width:10px;\n        \n\n    }\n\n    .generalText {\n        font-size:6px;\n        \n    }\n\n    \n    .exampleBoardText {\n        word-wrap: break-word;\n        font-size: x-small;\n    }\n\n    .boardtextBox {\n        font-size: x-small;\n        height:12px;\n    }\n\n    .addBoard {\n    \n        width:185px;\n      \n    }\n    .changeBoardTitleButton {\n        font-size: x-small;\n    }\n\n    .addBoardText {\n        font-size:x-small;\n    }\n\n    .addBoarderTextBox {\n        height:12px;\n        font-size: xx-small;\n        width:160px;\n    }\n    \n    .addBoarderButton {\n        font-size: x-small;\n    }\n\n    .task, .notTask {\n        margin:5px; \n    }\n    .circleIcon {\n        width:2px;\n        height:2px\n    }\n\n    .taskHolderText, .dateText, .buttonText {\n        font-size:xx-small;\n        \n    }\n\n    .taskTools {\n        \n        padding-right:5px;\n        padding-left:5px;\n        margin-top:5px;\n\n    }\n\n    .taskTextBox {\n        width:80px;\n        height:12px;\n        font-size: xx-small;\n    }\n\n    .datePicker {\n        width:80px;\n        font-size: 6px;\n        height:12px;\n    }\n\n\n    \n    .high {\n        border: 3px solid red;\n    }\n\n    .medium {\n        border: 3px solid rgb(255,202,10);\n    }\n\n    .low {\n        border: 3px solid green;\n   \n    }\n\n    .task, .notTask {\n        border-left: 4px solid;\n       \n    }\n\n    .taskEditor {\n        border-left:  4px solid;\n    }\n\n\n\n\n    .button {\n\n        height:10px;\n        line-height: 10px;\n        width:20px;\n        font-size: 6px;\n    }\n\n    .editTools {\n        margin-left: 30px;\n    }\n\n    .trashIt, .finished, .exitEditor {\n        width:15px;\n\n    }\n\n    .taskAdder {\n        font-size: xx-small;\n    }\n\n\n\n}\n\n.task, .notTask {\n    border-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/board.css"],"names":[],"mappings":"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","sourcesContent":["/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n  }\n\n\n\n\n\n  .pageContent {\n    display:flex;\n    flex-basis: auto;\n    overflow-y: hidden;\n    height:100%;\n    overflow-x: auto;\n}\n\n\n\n\n\n.addBoard {\n    width: 250px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    background:rgb(198, 198, 198);\n    margin:10px;\n    padding-bottom:10px;\n    \n  \n}\n\n\n\n\n\ninput {\n    outline: none;\n}\n\n\n.boardContent {\n\n    font-family: 'Roboto', sans-serif;\n    overflow-y: auto;\n    overflow-x: hidden;\n    flex-shrink: 0;\n}\n\n.board {\n    position: relative;\n    text-align:center;\n    background:rgb(198, 198, 198);\n    width: 290px;\n    margin:10px;\n\n\n    \n    padding-bottom:5px;\n}\n\n.boardOverlay {\n    background:rgba(0, 0, 0, 0.299);\n    position:absolute;\n    width:100%;\n    height:100%;\n    top:0;\n    z-index:1;\n    display:none;\n}\n\n.deleteBoard, .editBoard {\n    cursor: pointer;\n}\n\n\n.taskHolder {\n\n    display:flex;\n    align-items:center;\n}\n\n.taskTextBox {\n    width:135px;\n}\n.exampleBoardText {\n    position:relative;\n    top:4px;\n    font-size: large\n}\n\n\n.addBoardText {\n    margin-top:5px;\n    font-size: large;\n\n\n}\n\n\n\n.task, .notTask{\n    background:rgb(237, 230, 230);\n    border-left: 8px solid;\n    margin:10px;\n}\n\n.taskTools {\n    display:flex;\n    justify-content:space-between;\n    padding-left:10px;\n    padding-right:10px;\n    margin-top:10px;\n\n}\n.tools {\n    display:flex;\n}\n\n\n.taskLabel {\n    position: relative;\n    top:5px;\n    word-wrap: break-word;\n    margin-bottom:10px;\n    font-size: smaller;\n\n    border: 0;\n\n}\n.generalText {\n    font-size:10px;\n    margin-right: 20px;\n\n}\n\n.generalTextHolder {\n    display:flex;\n}\n\n\n\n\n.circleIcon {\n    width:10px;\n    height:10px;\n    border-radius:20px;\n    border: 3px solid black;\n    cursor:pointer;\n}\n.edit, .notEdit{\n    width:20px;\n    cursor:pointer;\n    margin-right:6px;\n}\n\n.circleIcon:hover {\n    background:black;\n}\n\n\n\n.taskAdder {\n    margin-top:10px;\n}\n\n\n.taskAdder:hover {\n   cursor:pointer;\n   background:rgb(178, 178, 178);\n}\n\n\n\n\n\n\n\n\n.priority {\n    display:flex;\n    margin:5px;\n\n}\n.editTools {\n    display:flex;\n    width:50px;\n\n}\n.dateTool {\n    margin:5px;\n    margin-right:14px;\n    display:flex;\n}\n.taskTextBox {\n    height:20px;\n    font-family: 'Roboto', sans-serif;\n    margin:5px;\n}\n\n.editToolHolder {\n\n    display:flex;\n    justify-content:space-between;\n    \n}\n\n.buttons {\n    margin-left: 5px;\n}\n\n.datePicker {\n    margin-left:5px;\n    width:135px;\n    height:20px;\n    border:0;\n}\n\n\n\n.taskEditor {\n    background: rgb(237, 230, 230);\n    margin:10px;\n    margin-left:20px;\n    display:flex;\n    align-items: center;\n    border-left: 8px solid;\n    flex-direction: column;\n}\n\n.error {\n    color:rgb(197, 63, 63);\n}\n\n\n.taskTextBox{\n    border:0;\n    margin:5px;\n\n}\n\n\n\n\n.buttons .button {\n\n    cursor: pointer;\n}\n\n.high {\n    border:5px solid red;\n}\n\n.medium {\n    border: 5px solid #ff9800;\n}\n\n\n.notTask {\n    \n     text-decoration: line-through; \n     color:grey; \n } \n\n.notEdit {\n    filter: invert(20%) sepia(10%) saturate(2076%) hue-rotate(86deg) brightness(118%) contrast(10%);\n}\n\n\n\n.low {\n\n    border:5px solid green;\n}\n\n.low:hover {\n    background:green;\n}\n\n.high:hover {\n    background:red;\n}\n\n.medium:hover {\n    background: #ff9800;\n}\n\n.button {\n    color:black;\n    height:15px;\n    width:35px;\n    line-height: 15px;\n    font-size: x-small;\n    margin:2px; \n\n}\n\n\n.buttons {\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n\n}\n\n.trashIt, .finished, .exitEditor{\n    cursor: pointer;\n}\n\n\n.projectTypeText {\n    position:relative;\n    bottom:2px;\n}\n\n.addBoarderButton {\n    background:0;\n    width:100%;\n    border:0;\n    margin-top: 5px;\n    height:20px;\n    cursor:pointer;\n}\n\n.addBoarderButton:hover {\n    background:rgb(178, 178, 178);\n}\n\n\n\n.addBoarderTextBox {\n    font-family: 'Roboto', sans-serif;\n    border:0;\n    margin-top:5px;\n    height:20px;\n    width:220px;\n}\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(../images/hamburgerMenu.svg);\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n.editBoard, .deleteBoard {\n    width:20px;\n}\n\n.editExampleIcons {\n\n    height:25px;\n    \n    display:flex;\n\n\n}\n\n.emptyrow {\n   \n    height:25px;\n    width:100%;\n    text-indent: -9999px;\n    \n}\n\n.editBoard, .deleteBoard {\n    margin-left:10px;\n\n\n}\n\n.boardtextBox {\n    font-family: 'Roboto', sans-serif;\n    text-align: center;\n    font-size: large;\n    width:100%;\n    height:20px;\n    border:0;\n    background:none;\n    \n \n}\n\n.boardTextEditor {\n    background:rgb(215, 213, 213);\n    position:relative;\n    z-index:1;\n    margin-top:10px;\n    margin-bottom:10px;\n    width:100%;\n\n\n\n    justify-content:center;\n    display:flex;\n\n\n \n\n}\n\n\n.changeBoardTitleButton {\n    cursor: pointer;\n}\n\n\n@media only screen and (max-width: 300px){\n\n    .editExampleIcons {\n        height:15px;\n    }\n\n    .emptyrow {\n        height:15px;\n    }\n\n    .deleteBoard, .editBoard {\n        width:12px;\n    }\n\n\n\n    .board{\n        width:185px;\n    }\n\n    .taskLabel {\n        font-size:xx-small\n    }\n\n    .edit {\n\n        width:10px;\n        \n\n    }\n\n    .generalText {\n        font-size:6px;\n        \n    }\n\n    \n    .exampleBoardText {\n        word-wrap: break-word;\n        font-size: x-small;\n    }\n\n    .boardtextBox {\n        font-size: x-small;\n        height:12px;\n    }\n\n    .addBoard {\n    \n        width:185px;\n      \n    }\n    .changeBoardTitleButton {\n        font-size: x-small;\n    }\n\n    .addBoardText {\n        font-size:x-small;\n    }\n\n    .addBoarderTextBox {\n        height:12px;\n        font-size: xx-small;\n        width:160px;\n    }\n    \n    .addBoarderButton {\n        font-size: x-small;\n    }\n\n    .task, .notTask {\n        margin:5px; \n    }\n    .circleIcon {\n        width:2px;\n        height:2px\n    }\n\n    .taskHolderText, .dateText, .buttonText {\n        font-size:xx-small;\n        \n    }\n\n    .taskTools {\n        \n        padding-right:5px;\n        padding-left:5px;\n        margin-top:5px;\n\n    }\n\n    .taskTextBox {\n        width:80px;\n        height:12px;\n        font-size: xx-small;\n    }\n\n    .datePicker {\n        width:80px;\n        font-size: 6px;\n        height:12px;\n    }\n\n\n    \n    .high {\n        border: 3px solid red;\n    }\n\n    .medium {\n        border: 3px solid rgb(255,202,10);\n    }\n\n    .low {\n        border: 3px solid green;\n   \n    }\n\n    .task, .notTask {\n        border-left: 4px solid;\n       \n    }\n\n    .taskEditor {\n        border-left:  4px solid;\n    }\n\n\n\n\n    .button {\n\n        height:10px;\n        line-height: 10px;\n        width:20px;\n        font-size: 6px;\n    }\n\n    .editTools {\n        margin-left: 30px;\n    }\n\n    .trashIt, .finished, .exitEditor {\n        width:15px;\n\n    }\n\n    .taskAdder {\n        font-size: xx-small;\n    }\n\n\n\n}\n\n.task, .notTask {\n    border-color: red;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n  }\n\n  /* cutive-mono-regular - latin */\n@font-face {\n    font-family: 'Cutive Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Legacy iOS */\n  }\n\n\n  .navigation {\n    width:250px;\n    flex-shrink: 0;\n    font-family: 'Roboto', sans-serif;\n    background:rgb(19, 75, 205);\n    display:block;\n    overflow:auto;\n\n\n}\n\n.projectButton, .upComingButton {\n\n    height:30px;\n    line-height:28px;\n\n    width:100%;\n\n    font-size: small;\n\n    \n    \n}\n\n.deleteItem, .editProject {\n    cursor: pointer;\n}\n\n.mobileMenu {\n    display:none;\n}\n\n.listTitle, .projectText, .plusSign {\n    font-family: 'Cutive Mono', monospace;\n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n    cursor:pointer;\n    text-align: center;\n}\n\n.projectTaskHolder {\n    width:100%;\n    z-index:3;\n}\n\n.projectContainer {\n    white-space: nowrap;\n    width:75%;\n    text-align: center;\n\n}\n\n.projectContainerText {\n    cursor: pointer;\n}\n\n.projectContainer p {\n    margin-right:40px;\n}\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n.wholeOverlay {\n    background:none;\n    position:absolute;\n    height:100%;\n    width:100%;\n    z-index:3;\n    cursor: pointer;\n    display:none;\n \n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n\n    text-align: center;\n}\n\n\n.projectContainer {\n    width:75%;\n    text-align: center;\n\n}\n\n\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n\n\n.editProjectButton{\n\n    width:100%;\n    display:flex;\n    z-index:3;\n \n    justify-content:flex-end;\n    background:rgb(22, 83, 227);\n \n\n \n }\n \n \n .addProjectLabel {\n     line-height: 28px;\n     position:relative;\n     right:3px;\n\n     \n     cursor: pointer;\n \n \n }\n \n .editText {\n     background:none;\n \n     color:white;\n     outline:none;\n     border:none;\n     height:30px;\n     margin-right:5px;\n    font-size:small;\n }\n \n\n .elements{\n    margin-top: 20px;\n    color:white;\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n\n\n}\n\n.plusSign {\n    margin-left: 5px;\n}\n\n.projectButtonHover:hover, .projectAdder:hover{\n    background:rgb(22, 83, 227);\n    \n}\n\n \n \n \n.editText::placeholder {\n     \n \n     color:white;\n}\n \n \n .overlay {\n     background:rgba(0, 0, 0, 0.299);\n     height:100%;\n     width:250px;\n     z-index:1;\n     \n     text-indent: -9999px;\n     position:absolute;\n     top:0px;\n\n\n     display:none;\n \n   \n \n}\n\n.projectAdder {\n\n    margin-top:20px;\n    margin-bottom: 20px;\n    justify-content: center;\n    display:flex;\n    cursor:pointer;\n\n    width:100%\n    \n}\n\n.exit {\n    display:none;\n}\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n\n@media only screen and (max-width:550px){\n\n \n    .overlay {\n        width:100%;\n        display:none;\n    }\n\n    .navigation {\n        display:none;\n    }\n\n    .mobileMenu {\n        display:flex;\n    }\n\n    .pageContent {\n        display:none;\n    }\n\n    .sections {\n        flex-direction: column;\n    }\n\n    .navigation {\n        width:100%;\n        height:100%;\n        \n        \n       \n    }\n\n    .projectButton{\n        justify-content: center;\n    }\n\n    .projectContainer {\n        cursor:pointer;\n        justify-content: flex-start;\n    }\n\n    .projectContainer p {\n    \n        text-align: center;\n        margin-right:50px;\n    }\n    .projectTools {\n        width:15%;\n\n    }\n\n    .editProjectButton{\n        justify-content: center;\n    }\n\n    .editText{\n        margin-left: 100px;\n\n    }\n\n\n\n\n\n    .exit {\n        display:block;\n        text-align: left;\n        color:white;\n        margin:10px;\n        cursor: pointer;\n    }\n}\n\n@media only screen and (max-width: 350px){\n    .deleteItem, .editProject {\n        width:15px;\n    }\n}\n\n@media only screen and (max-width: 225px){\n    .deleteItem, .editProject {\n        width:11.5px;\n    }\n}\n\n@media only screen and (max-width:200px){\n    .listTitle {\n        font-size: x-large;\n    }\n}\n\n\n\n@media only screen and (max-width: 300px){\n\n\n\n    .projectContainer p{\n        margin-right:30px;\n    }\n\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/navigation.css"],"names":[],"mappings":"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","sourcesContent":["\n\n/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n  }\n\n  /* cutive-mono-regular - latin */\n@font-face {\n    font-family: 'Cutive Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/cutive-mono-v9-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/cutive-mono-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/cutive-mono-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/cutive-mono-v9-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/cutive-mono-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/cutive-mono-v9-latin-regular.svg#CutiveMono') format('svg'); /* Legacy iOS */\n  }\n\n\n  .navigation {\n    width:250px;\n    flex-shrink: 0;\n    font-family: 'Roboto', sans-serif;\n    background:rgb(19, 75, 205);\n    display:block;\n    overflow:auto;\n\n\n}\n\n.projectButton, .upComingButton {\n\n    height:30px;\n    line-height:28px;\n\n    width:100%;\n\n    font-size: small;\n\n    \n    \n}\n\n.deleteItem, .editProject {\n    cursor: pointer;\n}\n\n.mobileMenu {\n    display:none;\n}\n\n.listTitle, .projectText, .plusSign {\n    font-family: 'Cutive Mono', monospace;\n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n    cursor:pointer;\n    text-align: center;\n}\n\n.projectTaskHolder {\n    width:100%;\n    z-index:3;\n}\n\n.projectContainer {\n    white-space: nowrap;\n    width:75%;\n    text-align: center;\n\n}\n\n.projectContainerText {\n    cursor: pointer;\n}\n\n.projectContainer p {\n    margin-right:40px;\n}\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n.wholeOverlay {\n    background:none;\n    position:absolute;\n    height:100%;\n    width:100%;\n    z-index:3;\n    cursor: pointer;\n    display:none;\n \n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n\n    text-align: center;\n}\n\n\n.projectContainer {\n    width:75%;\n    text-align: center;\n\n}\n\n\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n\n\n.editProjectButton{\n\n    width:100%;\n    display:flex;\n    z-index:3;\n \n    justify-content:flex-end;\n    background:rgb(22, 83, 227);\n \n\n \n }\n \n \n .addProjectLabel {\n     line-height: 28px;\n     position:relative;\n     right:3px;\n\n     \n     cursor: pointer;\n \n \n }\n \n .editText {\n     background:none;\n \n     color:white;\n     outline:none;\n     border:none;\n     height:30px;\n     margin-right:5px;\n    font-size:small;\n }\n \n\n .elements{\n    margin-top: 20px;\n    color:white;\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n\n\n}\n\n.plusSign {\n    margin-left: 5px;\n}\n\n.projectButtonHover:hover, .projectAdder:hover{\n    background:rgb(22, 83, 227);\n    \n}\n\n \n \n \n.editText::placeholder {\n     \n \n     color:white;\n}\n \n \n .overlay {\n     background:rgba(0, 0, 0, 0.299);\n     height:100%;\n     width:250px;\n     z-index:1;\n     \n     text-indent: -9999px;\n     position:absolute;\n     top:0px;\n\n\n     display:none;\n \n   \n \n}\n\n.projectAdder {\n\n    margin-top:20px;\n    margin-bottom: 20px;\n    justify-content: center;\n    display:flex;\n    cursor:pointer;\n\n    width:100%\n    \n}\n\n.exit {\n    display:none;\n}\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(../images/hamburgerMenu.svg);\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n\n@media only screen and (max-width:550px){\n\n \n    .overlay {\n        width:100%;\n        display:none;\n    }\n\n    .navigation {\n        display:none;\n    }\n\n    .mobileMenu {\n        display:flex;\n    }\n\n    .pageContent {\n        display:none;\n    }\n\n    .sections {\n        flex-direction: column;\n    }\n\n    .navigation {\n        width:100%;\n        height:100%;\n        \n        \n       \n    }\n\n    .projectButton{\n        justify-content: center;\n    }\n\n    .projectContainer {\n        cursor:pointer;\n        justify-content: flex-start;\n    }\n\n    .projectContainer p {\n    \n        text-align: center;\n        margin-right:50px;\n    }\n    .projectTools {\n        width:15%;\n\n    }\n\n    .editProjectButton{\n        justify-content: center;\n    }\n\n    .editText{\n        margin-left: 100px;\n\n    }\n\n\n\n\n\n    .exit {\n        display:block;\n        text-align: left;\n        color:white;\n        margin:10px;\n        cursor: pointer;\n    }\n}\n\n@media only screen and (max-width: 350px){\n    .deleteItem, .editProject {\n        width:15px;\n    }\n}\n\n@media only screen and (max-width: 225px){\n    .deleteItem, .editProject {\n        width:11.5px;\n    }\n}\n\n@media only screen and (max-width:200px){\n    .listTitle {\n        font-size: x-large;\n    }\n}\n\n\n\n@media only screen and (max-width: 300px){\n\n\n\n    .projectContainer p{\n        margin-right:30px;\n    }\n\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/scripts/emit.js":
/*!*****************************!*\
  !*** ./src/scripts/emit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let emit = (
    function(){
        let events = {};

        function subscribe(name,func){
            if (events[name]){
                if (Array.isArray(func)) func.forEach(f => events[name].push(f));
                else events[name].push(func)
            } else {
                events[name] = [];
                subscribe(name,func);
            }
        }

        function unsubscribe(name,func){
            if (events[name]){
                let newArray = events[name];
                newArray = newArray.filter(f => f != func);
                events[name] = newArray;
            }
        }

        function suspend(name){
            let newEvents = {};
            let currentEvents = events;
            let currentEventKeys = Object.keys(currentEvents);
            currentEventKeys = currentEventKeys.filter(key => key != name);

            currentEventKeys.forEach(key => {
                newEvents[key] = currentEvents[key];
            })
            events = newEvents;
        }

        function fire(name,data){
            if (events[name]){
                events[name].forEach(func => func(data));
            }
        }

        return {subscribe,unsubscribe,suspend,fire};
    }
)()


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emit);

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
/******/ 			"elementEvent": 0
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
/*!**************************************!*\
  !*** ./src/scripts/elementEvents.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeItem": () => (/* binding */ removeItem),
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "addBindings": () => (/* binding */ addBindings),
/* harmony export */   "removeBindings": () => (/* binding */ removeBindings),
/* harmony export */   "setArray": () => (/* binding */ setArray),
/* harmony export */   "setObject": () => (/* binding */ setObject)
/* harmony export */ });
/* harmony import */ var _emit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emit.js */ "./src/scripts/emit.js");
/* harmony import */ var _styles_board_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/board.css */ "./src/styles/board.css");
/* harmony import */ var _styles_navigation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/navigation.css */ "./src/styles/navigation.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");






    
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

    console.log(newArray, "the current array")
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







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxLQUFLLFVBQVUsWUFBWSxjQUFjLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFdBQVcsU0FBUyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxTQUFTLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxlQUFlLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGVBQWUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsY0FBYyxRQUFRLEtBQUssV0FBVyxVQUFVLFNBQVMsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLFlBQVksZUFBZSxRQUFRLEtBQUssVUFBVSxRQUFRLE1BQU0sS0FB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USxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLGFBQWEsWUFBWSxlQUFlLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsUUFBUSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksUUFBUSxLQUFLLFVBQVUsYUFBYSxTQUFTLEtBQUssV0FBVyxVQUFVLE1BQU0sVUFBVSxVQUFVLFdBQVcsWUFBWSxnQkFBZ0IsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksZUFBZSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxVQUFVLE9BQU8sVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxjQUFjLFFBQVEsS0FBSyxXQUFXLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLFFBQVEsUUFBUSxLQUFLLFlBQVksT0FBTyx1RUFBdUUsNEJBQTRCLHlCQUF5Qix1QkFBdUIseURBQXlELDRnQkFBNGdCLHFCQUFxQixxREFBcUQsaUNBQWlDLHlCQUF5Qix1QkFBdUIsNkRBQTZELG9pQkFBb2lCLHFCQUFxQixxQkFBcUIsa0JBQWtCLHFCQUFxQix3Q0FBd0Msa0NBQWtDLG9CQUFvQixvQkFBb0IsT0FBTyxxQ0FBcUMsb0JBQW9CLHVCQUF1QixtQkFBbUIseUJBQXlCLGlCQUFpQiwrQkFBK0Isc0JBQXNCLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLHlDQUF5Qyw0Q0FBNEMsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcscUJBQXFCLHFCQUFxQix5QkFBeUIsR0FBRyx3QkFBd0IsaUJBQWlCLGdCQUFnQixHQUFHLHVCQUF1QiwwQkFBMEIsZ0JBQWdCLHlCQUF5QixLQUFLLDJCQUEyQixzQkFBc0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsbUJBQW1CLG9CQUFvQixTQUFTLHFCQUFxQixzQkFBc0Isd0JBQXdCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHNCQUFzQixtQkFBbUIsTUFBTSxxQkFBcUIsbUJBQW1CLEdBQUcscUJBQXFCLDJCQUEyQixHQUFHLHlCQUF5QixnQkFBZ0IseUJBQXlCLEtBQUssdUJBQXVCLG9CQUFvQixTQUFTLDZCQUE2QixtQkFBbUIsbUJBQW1CLGdCQUFnQixrQ0FBa0Msa0NBQWtDLFlBQVksMkJBQTJCLHlCQUF5Qix5QkFBeUIsaUJBQWlCLGdDQUFnQyxVQUFVLGlCQUFpQix1QkFBdUIsc0JBQXNCLG9CQUFvQixtQkFBbUIsbUJBQW1CLHdCQUF3QixzQkFBc0IsSUFBSSxrQkFBa0IsdUJBQXVCLGtCQUFrQixtQkFBbUIsNEJBQTRCLDBCQUEwQixPQUFPLGVBQWUsdUJBQXVCLEdBQUcsbURBQW1ELGtDQUFrQyxTQUFTLHFDQUFxQyw2QkFBNkIsR0FBRyxtQkFBbUIsdUNBQXVDLG1CQUFtQixtQkFBbUIsaUJBQWlCLG1DQUFtQyx5QkFBeUIsZUFBZSx3QkFBd0IsY0FBYyxtQkFBbUIsd0JBQXdCLDBCQUEwQiw4QkFBOEIsbUJBQW1CLHFCQUFxQiwyQkFBMkIsV0FBVyxtQkFBbUIsR0FBRyxvQkFBb0IsaUJBQWlCLGtCQUFrQixnQkFBZ0Isc0JBQXNCLHlEQUF5RCxrQ0FBa0MsNEJBQTRCLFdBQVcsaUJBQWlCLGtDQUFrQyxrQkFBa0Isd0NBQXdDLGtCQUFrQix3QkFBd0IsT0FBTyxzQkFBc0Isc0JBQXNCLHdCQUF3QixHQUFHLDBCQUEwQiw0Q0FBNEMsa0JBQWtCLEdBQUcsK0NBQStDLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8scUJBQXFCLHVCQUF1QixPQUFPLHFCQUFxQix1QkFBdUIsT0FBTyxzQkFBc0IsdUJBQXVCLE9BQU8sbUJBQW1CLGlDQUFpQyxPQUFPLHFCQUFxQixxQkFBcUIsc0JBQXNCLG9DQUFvQyx1QkFBdUIsa0NBQWtDLE9BQU8sMkJBQTJCLHlCQUF5QixzQ0FBc0MsT0FBTyw2QkFBNkIsbUNBQW1DLDRCQUE0QixPQUFPLHFCQUFxQixvQkFBb0IsU0FBUywyQkFBMkIsa0NBQWtDLE9BQU8sa0JBQWtCLDZCQUE2QixTQUFTLHVCQUF1Qix3QkFBd0IsMkJBQTJCLHNCQUFzQixzQkFBc0IsMEJBQTBCLE9BQU8sR0FBRyw4Q0FBOEMsaUNBQWlDLHFCQUFxQixPQUFPLEdBQUcsOENBQThDLGlDQUFpQyx1QkFBdUIsT0FBTyxHQUFHLDZDQUE2QyxrQkFBa0IsNkJBQTZCLE9BQU8sR0FBRyxrREFBa0QsZ0NBQWdDLDRCQUE0QixPQUFPLEtBQUssdUJBQXVCO0FBQ3RuYztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGVBQWUsZ0JBQWdCLHVCQUF1QixHQUFHLGFBQWEsbUJBQW1CLG9DQUFvQyxtQkFBbUIsR0FBRyxtQkFBbUIsMEJBQTBCLHNDQUFzQyxvQkFBb0IsaUJBQWlCLGlCQUFpQixtQkFBbUIsK0JBQStCLHlCQUF5QixTQUFTLG9CQUFvQix3Q0FBd0Msd0JBQXdCLG1CQUFtQixrQkFBa0IsbUJBQW1CLDZCQUE2Qiw4QkFBOEIsOEJBQThCLE9BQU8sb0JBQW9CLDJCQUEyQixrQkFBa0IsR0FBRyxpQkFBaUIsc0JBQXNCLGtCQUFrQixrQkFBa0IsZUFBZSxrQkFBa0Isd0NBQXdDLDJCQUEyQixLQUFLLHNCQUFzQixrQ0FBa0MsR0FBRywwREFBMEQsa0JBQWtCLEdBQUcsYUFBYSx3RkFBd0YsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGNBQWMsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGVBQWUsZUFBZSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLDRCQUE0QixlQUFlLGdCQUFnQix1QkFBdUIsR0FBRyxhQUFhLG1CQUFtQixvQ0FBb0MsbUJBQW1CLEdBQUcsbUJBQW1CLDBCQUEwQixzQ0FBc0Msb0JBQW9CLGlCQUFpQixpQkFBaUIsbUJBQW1CLCtCQUErQix5QkFBeUIsU0FBUyxvQkFBb0Isd0NBQXdDLHdCQUF3QixtQkFBbUIsa0JBQWtCLG1CQUFtQiw2QkFBNkIsOEJBQThCLDhCQUE4QixPQUFPLG9CQUFvQiwyQkFBMkIsa0JBQWtCLEdBQUcsaUJBQWlCLHNCQUFzQixrQkFBa0Isa0JBQWtCLGVBQWUsa0JBQWtCLHdDQUF3QywyQkFBMkIsS0FBSyxzQkFBc0Isa0NBQWtDLEdBQUcsMERBQTBELGtCQUFrQixHQUFHLHlCQUF5QjtBQUNsbEY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUEyRztBQUMzRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDJGQUFPOzs7O0FBSXFEO0FBQzdFLE9BQU8saUVBQWUsMkZBQU8sSUFBSSxrR0FBYyxHQUFHLGtHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBOzs7QUFHQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdDbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckI2Qjs7QUFFQTtBQUNLO0FBQ0w7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7OztBQUtBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU04RSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9ib2FyZC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL25hdmlnYXRpb24uY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvYm9hcmQuY3NzP2E2MWUiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL25hdmlnYXRpb24uY3NzPzgyMDIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvZW1pdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvZWxlbWVudEV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGFtYnVyZ2VyTWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18sIHsgaGFzaDogXCIjUm9ib3RvXCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICAgIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcblxcblxcblxcblxcbiAgLnBhZ2VDb250ZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uYWRkQm9hcmQge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTk4LCAxOTgsIDE5OCk7XFxuICAgIG1hcmdpbjoxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xcbiAgICBcXG4gIFxcbn1cXG5cXG5cXG5cXG5cXG5cXG5pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi5ib2FyZENvbnRlbnQge1xcblxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5OCwgMTk4LCAxOTgpO1xcbiAgICB3aWR0aDogMjkwcHg7XFxuICAgIG1hcmdpbjoxMHB4O1xcblxcblxcbiAgICBcXG4gICAgcGFkZGluZy1ib3R0b206NXB4O1xcbn1cXG5cXG4uYm9hcmRPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuMjk5KTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB0b3A6MDtcXG4gICAgei1pbmRleDoxO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5kZWxldGVCb2FyZCwgLmVkaXRCb2FyZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnRhc2tIb2xkZXIge1xcblxcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuXFxuLnRhc2tUZXh0Qm94IHtcXG4gICAgd2lkdGg6MTM1cHg7XFxufVxcbi5leGFtcGxlQm9hcmRUZXh0IHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHRvcDo0cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VcXG59XFxuXFxuXFxuLmFkZEJvYXJkVGV4dCB7XFxuICAgIG1hcmdpbi10b3A6NXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcblxcblxcbn1cXG5cXG5cXG5cXG4udGFzaywgLm5vdFRhc2t7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIzNywgMjMwLCAyMzApO1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkO1xcbiAgICBtYXJnaW46MTBweDtcXG59XFxuXFxuLnRhc2tUb29scyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG5cXG59XFxuLnRvb2xzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG5cXG4udGFza0xhYmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6NXB4O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcblxcbiAgICBib3JkZXI6IDA7XFxuXFxufVxcbi5nZW5lcmFsVGV4dCB7XFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuXFxufVxcblxcbi5nZW5lcmFsVGV4dEhvbGRlciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuXFxuXFxuXFxuLmNpcmNsZUljb24ge1xcbiAgICB3aWR0aDoxMHB4O1xcbiAgICBoZWlnaHQ6MTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcbi5lZGl0LCAubm90RWRpdHtcXG4gICAgd2lkdGg6MjBweDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDo2cHg7XFxufVxcblxcbi5jaXJjbGVJY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpibGFjaztcXG59XFxuXFxuXFxuXFxuLnRhc2tBZGRlciB7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuXFxuXFxuLnRhc2tBZGRlcjpob3ZlciB7XFxuICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgYmFja2dyb3VuZDpyZ2IoMTc4LCAxNzgsIDE3OCk7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcbi5wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgbWFyZ2luOjVweDtcXG5cXG59XFxuLmVkaXRUb29scyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgd2lkdGg6NTBweDtcXG5cXG59XFxuLmRhdGVUb29sIHtcXG4gICAgbWFyZ2luOjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjE0cHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuLnRhc2tUZXh0Qm94IHtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOjVweDtcXG59XFxuXFxuLmVkaXRUb29sSG9sZGVyIHtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmRhdGVQaWNrZXIge1xcbiAgICBtYXJnaW4tbGVmdDo1cHg7XFxuICAgIHdpZHRoOjEzNXB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgYm9yZGVyOjA7XFxufVxcblxcblxcblxcbi50YXNrRWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNywgMjMwLCAyMzApO1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjpyZ2IoMTk3LCA2MywgNjMpO1xcbn1cXG5cXG5cXG4udGFza1RleHRCb3h7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW46NXB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG4uYnV0dG9ucyAuYnV0dG9uIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmOTgwMDtcXG59XFxuXFxuXFxuLm5vdFRhc2sge1xcbiAgICBcXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyBcXG4gICAgIGNvbG9yOmdyZXk7IFxcbiB9IFxcblxcbi5ub3RFZGl0IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjAlKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDIwNzYlKSBodWUtcm90YXRlKDg2ZGVnKSBicmlnaHRuZXNzKDExOCUpIGNvbnRyYXN0KDEwJSk7XFxufVxcblxcblxcblxcbi5sb3cge1xcblxcbiAgICBib3JkZXI6NXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4ubG93OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpncmVlbjtcXG59XFxuXFxuLmhpZ2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJlZDtcXG59XFxuXFxuLm1lZGl1bTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjk4MDA7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgaGVpZ2h0OjE1cHg7XFxuICAgIHdpZHRoOjM1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIG1hcmdpbjoycHg7IFxcblxcbn1cXG5cXG5cXG4uYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnRyYXNoSXQsIC5maW5pc2hlZCwgLmV4aXRFZGl0b3J7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RUeXBlVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBib3R0b206MnB4O1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6MDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYm9yZGVyOjA7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG4uYWRkQm9hcmRlclRleHRCb3gge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOjIyMHB4O1xcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIHdpZHRoOjQwcHg7XFxuICAgIGhlaWdodDo0MHB4O1xcbiAgICBib3JkZXIgOjA7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcbi5lZGl0Qm9hcmQsIC5kZWxldGVCb2FyZCB7XFxuICAgIHdpZHRoOjIwcHg7XFxufVxcblxcbi5lZGl0RXhhbXBsZUljb25zIHtcXG5cXG4gICAgaGVpZ2h0OjI1cHg7XFxuICAgIFxcbiAgICBkaXNwbGF5OmZsZXg7XFxuXFxuXFxufVxcblxcbi5lbXB0eXJvdyB7XFxuICAgXFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgXFxufVxcblxcbi5lZGl0Qm9hcmQsIC5kZWxldGVCb2FyZCB7XFxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XFxuXFxuXFxufVxcblxcbi5ib2FyZHRleHRCb3gge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGJvcmRlcjowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIFxcbiBcXG59XFxuXFxuLmJvYXJkVGV4dEVkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIxNSwgMjEzLCAyMTMpO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgei1pbmRleDoxO1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG5cXG5cXG5cXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcblxcbiBcXG5cXG59XFxuXFxuXFxuLmNoYW5nZUJvYXJkVGl0bGVCdXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xcblxcbiAgICAuZWRpdEV4YW1wbGVJY29ucyB7XFxuICAgICAgICBoZWlnaHQ6MTVweDtcXG4gICAgfVxcblxcbiAgICAuZW1wdHlyb3cge1xcbiAgICAgICAgaGVpZ2h0OjE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmRlbGV0ZUJvYXJkLCAuZWRpdEJvYXJkIHtcXG4gICAgICAgIHdpZHRoOjEycHg7XFxuICAgIH1cXG5cXG5cXG5cXG4gICAgLmJvYXJke1xcbiAgICAgICAgd2lkdGg6MTg1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tMYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6eHgtc21hbGxcXG4gICAgfVxcblxcbiAgICAuZWRpdCB7XFxuXFxuICAgICAgICB3aWR0aDoxMHB4O1xcbiAgICAgICAgXFxuXFxuICAgIH1cXG5cXG4gICAgLmdlbmVyYWxUZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTo2cHg7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICBcXG4gICAgLmV4YW1wbGVCb2FyZFRleHQge1xcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZHRleHRCb3gge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkIHtcXG4gICAgXFxuICAgICAgICB3aWR0aDoxODVweDtcXG4gICAgICBcXG4gICAgfVxcbiAgICAuY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6eC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmRlclRleHRCb3gge1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICAgICAgd2lkdGg6MTYwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5hZGRCb2FyZGVyQnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAudGFzaywgLm5vdFRhc2sge1xcbiAgICAgICAgbWFyZ2luOjVweDsgXFxuICAgIH1cXG4gICAgLmNpcmNsZUljb24ge1xcbiAgICAgICAgd2lkdGg6MnB4O1xcbiAgICAgICAgaGVpZ2h0OjJweFxcbiAgICB9XFxuXFxuICAgIC50YXNrSG9sZGVyVGV4dCwgLmRhdGVUZXh0LCAuYnV0dG9uVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6eHgtc21hbGw7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAudGFza1Rvb2xzIHtcXG4gICAgICAgIFxcbiAgICAgICAgcGFkZGluZy1yaWdodDo1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6NXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDo1cHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLnRhc2tUZXh0Qm94IHtcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmRhdGVQaWNrZXIge1xcbiAgICAgICAgd2lkdGg6ODBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgIH1cXG5cXG5cXG4gICAgXFxuICAgIC5oaWdoIHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gICAgfVxcblxcbiAgICAubWVkaXVtIHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsMjAyLDEwKTtcXG4gICAgfVxcblxcbiAgICAubG93IHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xcbiAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrLCAubm90VGFzayB7XFxuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAudGFza0VkaXRvciB7XFxuICAgICAgICBib3JkZXItbGVmdDogIDRweCBzb2xpZDtcXG4gICAgfVxcblxcblxcblxcblxcbiAgICAuYnV0dG9uIHtcXG5cXG4gICAgICAgIGhlaWdodDoxMHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDoyMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA2cHg7XFxuICAgIH1cXG5cXG4gICAgLmVkaXRUb29scyB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgfVxcblxcbiAgICAudHJhc2hJdCwgLmZpbmlzaGVkLCAuZXhpdEVkaXRvciB7XFxuICAgICAgICB3aWR0aDoxNXB4O1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrQWRkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcblxcblxcblxcbn1cXG5cXG4udGFzaywgLm5vdFRhc2sge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9i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QTtRQUNJLFVBQVU7O0lBRWQ7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7Ozs7QUFJSjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICAgIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuc3ZnI1JvYm90bycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG5cXG5cXG5cXG5cXG4gIC5wYWdlQ29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1iYXNpczogYXV0bztcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG59XFxuXFxuXFxuXFxuXFxuXFxuLmFkZEJvYXJkIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5OCwgMTk4LCAxOTgpO1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206MTBweDtcXG4gICAgXFxuICBcXG59XFxuXFxuXFxuXFxuXFxuXFxuaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4uYm9hcmRDb250ZW50IHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOTgsIDE5OCwgMTk4KTtcXG4gICAgd2lkdGg6IDI5MHB4O1xcbiAgICBtYXJnaW46MTBweDtcXG5cXG5cXG4gICAgXFxuICAgIHBhZGRpbmctYm90dG9tOjVweDtcXG59XFxuXFxuLmJvYXJkT3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgdG9wOjA7XFxuICAgIHotaW5kZXg6MTtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4uZGVsZXRlQm9hcmQsIC5lZGl0Qm9hcmQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50YXNrSG9sZGVyIHtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcblxcbi50YXNrVGV4dEJveCB7XFxuICAgIHdpZHRoOjEzNXB4O1xcbn1cXG4uZXhhbXBsZUJvYXJkVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB0b3A6NHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlXFxufVxcblxcblxcbi5hZGRCb2FyZFRleHQge1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG5cXG5cXG59XFxuXFxuXFxuXFxuLnRhc2ssIC5ub3RUYXNre1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZDtcXG4gICAgbWFyZ2luOjEwcHg7XFxufVxcblxcbi50YXNrVG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxuXFxufVxcbi50b29scyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuXFxuLnRhc2tMYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOjVweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG5cXG4gICAgYm9yZGVyOiAwO1xcblxcbn1cXG4uZ2VuZXJhbFRleHQge1xcbiAgICBmb250LXNpemU6MTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcbn1cXG5cXG4uZ2VuZXJhbFRleHRIb2xkZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcblxcblxcblxcbi5jaXJjbGVJY29uIHtcXG4gICAgd2lkdGg6MTBweDtcXG4gICAgaGVpZ2h0OjEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG4uZWRpdCwgLm5vdEVkaXR7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6NnB4O1xcbn1cXG5cXG4uY2lyY2xlSWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6YmxhY2s7XFxufVxcblxcblxcblxcbi50YXNrQWRkZXIge1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxufVxcblxcblxcbi50YXNrQWRkZXI6aG92ZXIge1xcbiAgIGN1cnNvcjpwb2ludGVyO1xcbiAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIG1hcmdpbjo1cHg7XFxuXFxufVxcbi5lZGl0VG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOjUwcHg7XFxuXFxufVxcbi5kYXRlVG9vbCB7XFxuICAgIG1hcmdpbjo1cHg7XFxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi50YXNrVGV4dEJveCB7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjo1cHg7XFxufVxcblxcbi5lZGl0VG9vbEhvbGRlciB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5kYXRlUGlja2VyIHtcXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xcbiAgICB3aWR0aDoxMzVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGJvcmRlcjowO1xcbn1cXG5cXG5cXG5cXG4udGFza0VkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6cmdiKDE5NywgNjMsIDYzKTtcXG59XFxuXFxuXFxuLnRhc2tUZXh0Qm94e1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luOjVweDtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLmJ1dHRvbnMgLmJ1dHRvbiB7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBib3JkZXI6NXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZjk4MDA7XFxufVxcblxcblxcbi5ub3RUYXNrIHtcXG4gICAgXFxuICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgXFxuICAgICBjb2xvcjpncmV5OyBcXG4gfSBcXG5cXG4ubm90RWRpdCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDIwJSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSgyMDc2JSkgaHVlLXJvdGF0ZSg4NmRlZykgYnJpZ2h0bmVzcygxMTglKSBjb250cmFzdCgxMCUpO1xcbn1cXG5cXG5cXG5cXG4ubG93IHtcXG5cXG4gICAgYm9yZGVyOjVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmxvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6Z3JlZW47XFxufVxcblxcbi5oaWdoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZWQ7XFxufVxcblxcbi5tZWRpdW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ODAwO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGhlaWdodDoxNXB4O1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICBtYXJnaW46MnB4OyBcXG5cXG59XFxuXFxuXFxuLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi50cmFzaEl0LCAuZmluaXNoZWQsIC5leGl0RWRpdG9ye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0VHlwZVRleHQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgYm90dG9tOjJweDtcXG59XFxuXFxuLmFkZEJvYXJkZXJCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOjA7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmFkZEJvYXJkZXJCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxNzgsIDE3OCwgMTc4KTtcXG59XFxuXFxuXFxuXFxuLmFkZEJvYXJkZXJUZXh0Qm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luLXRvcDo1cHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDoyMjBweDtcXG59XFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICB3aWR0aDo0MHB4O1xcbiAgICBoZWlnaHQ6NDBweDtcXG4gICAgYm9yZGVyIDowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvaGFtYnVyZ2VyTWVudS5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTksIDc1LCAyMDUpO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6NTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuXFxuXFxufVxcblxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBtYXJnaW4tdG9wIDo1cHg7XFxufVxcblxcblxcblxcbi5tb2JpbGVNZW51VGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuXFxuLmVkaXRCb2FyZCwgLmRlbGV0ZUJvYXJkIHtcXG4gICAgd2lkdGg6MjBweDtcXG59XFxuXFxuLmVkaXRFeGFtcGxlSWNvbnMge1xcblxcbiAgICBoZWlnaHQ6MjVweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6ZmxleDtcXG5cXG5cXG59XFxuXFxuLmVtcHR5cm93IHtcXG4gICBcXG4gICAgaGVpZ2h0OjI1cHg7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xcbiAgICBcXG59XFxuXFxuLmVkaXRCb2FyZCwgLmRlbGV0ZUJvYXJkIHtcXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcXG5cXG5cXG59XFxuXFxuLmJvYXJkdGV4dEJveCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgYm9yZGVyOjA7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgXFxuIFxcbn1cXG5cXG4uYm9hcmRUZXh0RWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjE1LCAyMTMsIDIxMyk7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB6LWluZGV4OjE7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICB3aWR0aDoxMDAlO1xcblxcblxcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuXFxuXFxuIFxcblxcbn1cXG5cXG5cXG4uY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XFxuXFxuICAgIC5lZGl0RXhhbXBsZUljb25zIHtcXG4gICAgICAgIGhlaWdodDoxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5lbXB0eXJvdyB7XFxuICAgICAgICBoZWlnaHQ6MTVweDtcXG4gICAgfVxcblxcbiAgICAuZGVsZXRlQm9hcmQsIC5lZGl0Qm9hcmQge1xcbiAgICAgICAgd2lkdGg6MTJweDtcXG4gICAgfVxcblxcblxcblxcbiAgICAuYm9hcmR7XFxuICAgICAgICB3aWR0aDoxODVweDtcXG4gICAgfVxcblxcbiAgICAudGFza0xhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTp4eC1zbWFsbFxcbiAgICB9XFxuXFxuICAgIC5lZGl0IHtcXG5cXG4gICAgICAgIHdpZHRoOjEwcHg7XFxuICAgICAgICBcXG5cXG4gICAgfVxcblxcbiAgICAuZ2VuZXJhbFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOjZweDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIFxcbiAgICAuZXhhbXBsZUJvYXJkVGV4dCB7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkdGV4dEJveCB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmQge1xcbiAgICBcXG4gICAgICAgIHdpZHRoOjE4NXB4O1xcbiAgICAgIFxcbiAgICB9XFxuICAgIC5jaGFuZ2VCb2FyZFRpdGxlQnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmRUZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTp4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZGVyVGV4dEJveCB7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgICAgICB3aWR0aDoxNjBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmFkZEJvYXJkZXJCdXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLCAubm90VGFzayB7XFxuICAgICAgICBtYXJnaW46NXB4OyBcXG4gICAgfVxcbiAgICAuY2lyY2xlSWNvbiB7XFxuICAgICAgICB3aWR0aDoycHg7XFxuICAgICAgICBoZWlnaHQ6MnB4XFxuICAgIH1cXG5cXG4gICAgLnRhc2tIb2xkZXJUZXh0LCAuZGF0ZVRleHQsIC5idXR0b25UZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTp4eC1zbWFsbDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrVG9vbHMge1xcbiAgICAgICAgXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjVweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDo1cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOjVweDtcXG5cXG4gICAgfVxcblxcbiAgICAudGFza1RleHRCb3gge1xcbiAgICAgICAgd2lkdGg6ODBweDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuZGF0ZVBpY2tlciB7XFxuICAgICAgICB3aWR0aDo4MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA2cHg7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgfVxcblxcblxcbiAgICBcXG4gICAgLmhpZ2gge1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbiAgICB9XFxuXFxuICAgIC5tZWRpdW0ge1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDI1NSwyMDIsMTApO1xcbiAgICB9XFxuXFxuICAgIC5sb3cge1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgZ3JlZW47XFxuICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2ssIC5ub3RUYXNrIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XFxuICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrRWRpdG9yIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAgNHB4IHNvbGlkO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuICAgIC5idXR0b24ge1xcblxcbiAgICAgICAgaGVpZ2h0OjEwcHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcXG4gICAgICAgIHdpZHRoOjIwcHg7XFxuICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgfVxcblxcbiAgICAuZWRpdFRvb2xzIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC50cmFzaEl0LCAuZmluaXNoZWQsIC5leGl0RWRpdG9yIHtcXG4gICAgICAgIHdpZHRoOjE1cHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLnRhc2tBZGRlciB7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICB9XFxuXFxuXFxuXFxufVxcblxcbi50YXNrLCAubm90VGFzayB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGFtYnVyZ2VyTWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18sIHsgaGFzaDogXCIjUm9ib3RvXCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18sIHsgaGFzaDogXCIjQ3V0aXZlTW9ub1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICAgIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcbiAgLyogY3V0aXZlLW1vbm8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcblxcbiAgLm5hdmlnYXRpb24ge1xcbiAgICB3aWR0aDoyNTBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTksIDc1LCAyMDUpO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcblxcblxcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbiwgLnVwQ29taW5nQnV0dG9uIHtcXG5cXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OjI4cHg7XFxuXFxuICAgIHdpZHRoOjEwMCU7XFxuXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5saXN0VGl0bGUsIC5wcm9qZWN0VGV4dCwgLnBsdXNTaWduIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnVwQ29taW5nQnV0dG9uIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RUYXNrSG9sZGVyIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOjc1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lclRleHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBtYXJnaW4tcmlnaHQ6NDBweDtcXG59XFxuXFxuLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgIFxcbn1cXG5cXG5cXG4ud2hvbGVPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuIFxcbn1cXG5cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udXBDb21pbmdCdXR0b24ge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6NzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcblxcbi5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MjUlO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLmVkaXRQcm9qZWN0QnV0dG9ue1xcblxcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHotaW5kZXg6MztcXG4gXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjIsIDgzLCAyMjcpO1xcbiBcXG5cXG4gXFxuIH1cXG4gXFxuIFxcbiAuYWRkUHJvamVjdExhYmVsIHtcXG4gICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgICByaWdodDozcHg7XFxuXFxuICAgICBcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gXFxuIFxcbiB9XFxuIFxcbiAuZWRpdFRleHQge1xcbiAgICAgYmFja2dyb3VuZDpub25lO1xcbiBcXG4gICAgIGNvbG9yOndoaXRlO1xcbiAgICAgb3V0bGluZTpub25lO1xcbiAgICAgYm9yZGVyOm5vbmU7XFxuICAgICBoZWlnaHQ6MzBweDtcXG4gICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcXG4gfVxcbiBcXG5cXG4gLmVsZW1lbnRze1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5wbHVzU2lnbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uSG92ZXI6aG92ZXIsIC5wcm9qZWN0QWRkZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcXG4gICAgXFxufVxcblxcbiBcXG4gXFxuIFxcbi5lZGl0VGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgXFxuIFxcbiAgICAgY29sb3I6d2hpdGU7XFxufVxcbiBcXG4gXFxuIC5vdmVybGF5IHtcXG4gICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgIHdpZHRoOjI1MHB4O1xcbiAgICAgei1pbmRleDoxO1xcbiAgICAgXFxuICAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgdG9wOjBweDtcXG5cXG5cXG4gICAgIGRpc3BsYXk6bm9uZTtcXG4gXFxuICAgXFxuIFxcbn1cXG5cXG4ucHJvamVjdEFkZGVyIHtcXG5cXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG5cXG4gICAgd2lkdGg6MTAwJVxcbiAgICBcXG59XFxuXFxuLmV4aXQge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgd2lkdGg6NDBweDtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIGJvcmRlciA6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NTBweCl7XFxuXFxuIFxcbiAgICAub3ZlcmxheSB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlTWVudSB7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2VDb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbnMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1yaWdodDo1MHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MTUlO1xcblxcbiAgICB9XFxuXFxuICAgIC5lZGl0UHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5lZGl0VGV4dHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG5cXG4gICAgfVxcblxcblxcblxcblxcblxcbiAgICAuZXhpdCB7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGNvbG9yOndoaXRlO1xcbiAgICAgICAgbWFyZ2luOjEwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XFxuICAgIC5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6MTVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyNXB4KXtcXG4gICAgLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgICAgICB3aWR0aDoxMS41cHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjIwMHB4KXtcXG4gICAgLmxpc3RUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XFxuXFxuXFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcXG4gICAgfVxcblxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25hdmlnYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6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QUFVO1FBQ1YsV0FBVzs7OztJQUlmOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksY0FBYztRQUNkLDJCQUEyQjtJQUMvQjs7SUFFQTs7UUFFSSxrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxTQUFTOztJQUViOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksa0JBQWtCOztJQUV0Qjs7Ozs7O0lBTUE7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7OztBQUlBOzs7O0lBSUk7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnN2ZyNSb2JvdG8nKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxuICB9XFxuXFxuICAvKiBjdXRpdmUtbW9uby1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubyc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLnN2ZyNDdXRpdmVNb25vJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcblxcbiAgLm5hdmlnYXRpb24ge1xcbiAgICB3aWR0aDoyNTBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTksIDc1LCAyMDUpO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcblxcblxcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbiwgLnVwQ29taW5nQnV0dG9uIHtcXG5cXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OjI4cHg7XFxuXFxuICAgIHdpZHRoOjEwMCU7XFxuXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5saXN0VGl0bGUsIC5wcm9qZWN0VGV4dCwgLnBsdXNTaWduIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnVwQ29taW5nQnV0dG9uIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RUYXNrSG9sZGVyIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOjc1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lclRleHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBtYXJnaW4tcmlnaHQ6NDBweDtcXG59XFxuXFxuLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgIFxcbn1cXG5cXG5cXG4ud2hvbGVPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuIFxcbn1cXG5cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udXBDb21pbmdCdXR0b24ge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6NzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcblxcbi5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MjUlO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLmVkaXRQcm9qZWN0QnV0dG9ue1xcblxcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHotaW5kZXg6MztcXG4gXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjIsIDgzLCAyMjcpO1xcbiBcXG5cXG4gXFxuIH1cXG4gXFxuIFxcbiAuYWRkUHJvamVjdExhYmVsIHtcXG4gICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgICByaWdodDozcHg7XFxuXFxuICAgICBcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gXFxuIFxcbiB9XFxuIFxcbiAuZWRpdFRleHQge1xcbiAgICAgYmFja2dyb3VuZDpub25lO1xcbiBcXG4gICAgIGNvbG9yOndoaXRlO1xcbiAgICAgb3V0bGluZTpub25lO1xcbiAgICAgYm9yZGVyOm5vbmU7XFxuICAgICBoZWlnaHQ6MzBweDtcXG4gICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcXG4gfVxcbiBcXG5cXG4gLmVsZW1lbnRze1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5wbHVzU2lnbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uSG92ZXI6aG92ZXIsIC5wcm9qZWN0QWRkZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcXG4gICAgXFxufVxcblxcbiBcXG4gXFxuIFxcbi5lZGl0VGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgXFxuIFxcbiAgICAgY29sb3I6d2hpdGU7XFxufVxcbiBcXG4gXFxuIC5vdmVybGF5IHtcXG4gICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgIHdpZHRoOjI1MHB4O1xcbiAgICAgei1pbmRleDoxO1xcbiAgICAgXFxuICAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgdG9wOjBweDtcXG5cXG5cXG4gICAgIGRpc3BsYXk6bm9uZTtcXG4gXFxuICAgXFxuIFxcbn1cXG5cXG4ucHJvamVjdEFkZGVyIHtcXG5cXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG5cXG4gICAgd2lkdGg6MTAwJVxcbiAgICBcXG59XFxuXFxuLmV4aXQge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgd2lkdGg6NDBweDtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIGJvcmRlciA6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2hhbWJ1cmdlck1lbnUuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NTBweCl7XFxuXFxuIFxcbiAgICAub3ZlcmxheSB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlTWVudSB7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2VDb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbnMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1yaWdodDo1MHB4O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MTUlO1xcblxcbiAgICB9XFxuXFxuICAgIC5lZGl0UHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5lZGl0VGV4dHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG5cXG4gICAgfVxcblxcblxcblxcblxcblxcbiAgICAuZXhpdCB7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGNvbG9yOndoaXRlO1xcbiAgICAgICAgbWFyZ2luOjEwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XFxuICAgIC5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6MTVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyNXB4KXtcXG4gICAgLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgICAgICB3aWR0aDoxMS41cHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjIwMHB4KXtcXG4gICAgLmxpc3RUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XFxuXFxuXFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcXG4gICAgfVxcblxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgYm94LXNpemluZzogbm9uZTtcXG59XFxuLnNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzYsIDIzNiwgMjU1KTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG4uZXJyb3JNZXNzYWdlIHtcXG5cXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuXFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OjMwO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5tZXNzYWdlSG9sZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOnNpbHZlcjtcXG4gICAgaGVpZ2h0OjE1MHB4O1xcbiAgICB3aWR0aDoyMDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLmNvbnRlbnRIb2xkZXIge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOjIwMHB4O1xcbn1cXG5cXG4uZXhpdEJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBib3JkZXI6MDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpyb3lhbGJsdWU7XFxuXFxufVxcblxcbi5leGl0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOnJnYig1NSwgODgsIDE4OCk7XFxufVxcblxcblxcbi5jb250ZWVudEhvbGRlciBoMiwgLmNvbnRlZW50SG9sZGVyIHAsIC5leGl0QnV0dG9uIHtcXG4gICAgbWFyZ2luOjEwcHg7XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLCtCQUErQjs7SUFFL0IsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTs7SUFFWixzQkFBc0I7SUFDdEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7O0lBR3ZCLG1CQUFtQjs7O0FBR3ZCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgYm94LXNpemluZzogbm9uZTtcXG59XFxuLnNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzYsIDIzNiwgMjU1KTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG4uZXJyb3JNZXNzYWdlIHtcXG5cXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuXFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OjMwO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5tZXNzYWdlSG9sZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOnNpbHZlcjtcXG4gICAgaGVpZ2h0OjE1MHB4O1xcbiAgICB3aWR0aDoyMDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLmNvbnRlbnRIb2xkZXIge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOjIwMHB4O1xcbn1cXG5cXG4uZXhpdEJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBib3JkZXI6MDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpyb3lhbGJsdWU7XFxuXFxufVxcblxcbi5leGl0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOnJnYig1NSwgODgsIDE4OCk7XFxufVxcblxcblxcbi5jb250ZWVudEhvbGRlciBoMiwgLmNvbnRlZW50SG9sZGVyIHAsIC5leGl0QnV0dG9uIHtcXG4gICAgbWFyZ2luOjEwcHg7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZpZ2F0aW9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2aWdhdGlvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgZW1pdCA9IChcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZXZlbnRzID0ge307XG5cbiAgICAgICAgZnVuY3Rpb24gc3Vic2NyaWJlKG5hbWUsZnVuYyl7XG4gICAgICAgICAgICBpZiAoZXZlbnRzW25hbWVdKXtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmdW5jKSkgZnVuYy5mb3JFYWNoKGYgPT4gZXZlbnRzW25hbWVdLnB1c2goZikpO1xuICAgICAgICAgICAgICAgIGVsc2UgZXZlbnRzW25hbWVdLnB1c2goZnVuYylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzW25hbWVdID0gW107XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlKG5hbWUsZnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1bnN1YnNjcmliZShuYW1lLGZ1bmMpe1xuICAgICAgICAgICAgaWYgKGV2ZW50c1tuYW1lXSl7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0FycmF5ID0gZXZlbnRzW25hbWVdO1xuICAgICAgICAgICAgICAgIG5ld0FycmF5ID0gbmV3QXJyYXkuZmlsdGVyKGYgPT4gZiAhPSBmdW5jKTtcbiAgICAgICAgICAgICAgICBldmVudHNbbmFtZV0gPSBuZXdBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN1c3BlbmQobmFtZSl7XG4gICAgICAgICAgICBsZXQgbmV3RXZlbnRzID0ge307XG4gICAgICAgICAgICBsZXQgY3VycmVudEV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgICAgIGxldCBjdXJyZW50RXZlbnRLZXlzID0gT2JqZWN0LmtleXMoY3VycmVudEV2ZW50cyk7XG4gICAgICAgICAgICBjdXJyZW50RXZlbnRLZXlzID0gY3VycmVudEV2ZW50S2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPSBuYW1lKTtcblxuICAgICAgICAgICAgY3VycmVudEV2ZW50S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3RXZlbnRzW2tleV0gPSBjdXJyZW50RXZlbnRzW2tleV07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZXZlbnRzID0gbmV3RXZlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmlyZShuYW1lLGRhdGEpe1xuICAgICAgICAgICAgaWYgKGV2ZW50c1tuYW1lXSl7XG4gICAgICAgICAgICAgICAgZXZlbnRzW25hbWVdLmZvckVhY2goZnVuYyA9PiBmdW5jKGRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7c3Vic2NyaWJlLHVuc3Vic2NyaWJlLHN1c3BlbmQsZmlyZX07XG4gICAgfVxuKSgpXG5cblxuZXhwb3J0IGRlZmF1bHQgZW1pdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiZWxlbWVudEV2ZW50XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgZW1pdCBmcm9tIFwiLi9lbWl0LmpzXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9ib2FyZC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9uYXZpZ2F0aW9uLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5jc3NcIlxuXG4gICAgXG5jb25zdCByZW1vdmVJdGVtID0oYXJyYXksIGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChpICE9IGluZGV4KXtcbiAgICAgICAgICAgIG5ld1Rhc2tzLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEluZGV4ICsrXG4gICAgfVxuICAgIHJldHVybiBuZXdUYXNrcztcbn1cblxuXG5jb25zdCBhZGRJdGVtID0gKGFycmF5LGluZGV4LCBpdGVtKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKyspe1xuICAgICAgICBpZiAoaSA9PSBpbmRleCl7XG4gICAgICAgICAgICBuZXdUYXNrcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGFza3MucHVzaChhcnJheVtpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3VGFza3M7XG59XG5cblxuY29uc3Qgc2V0QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgbmV3QXJyYXkgPSBhcnJheTtcbiAgICBsZXQgbmV3VGFza3MgPSBbXTtcblxuICAgIGNvbnNvbGUubG9nKG5ld0FycmF5LCBcInRoZSBjdXJyZW50IGFycmF5XCIpXG4gICAgbmV3QXJyYXkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgbmV3VGFza3MucHVzaCh0YXNrKTtcbiAgICB9KVxuICAgIHJldHVybiBuZXdUYXNrcztcbn1cblxuXG5cblxuXG5cbmNvbnN0IHNldE9iamVjdCA9IChvYmplY3QsaXNBcnJheSkgPT4ge1xuICAgIGxldCBuZXdPYmplY3QgPSBvYmplY3Q7XG4gICAgbGV0IGJsYW5rT2JqZWN0ID0ge307XG4gICAgbGV0IG5ld09iamVjdEtleXMgPSBPYmplY3Qua2V5cyhuZXdPYmplY3QpO1xuICAgIGxldCBuZXdBcnJheSA9IGZhbHNlO1xuICAgIG5ld0FycmF5ID0gb2JqZWN0O1xuXG4gICAgaWYgKCFpc0FycmF5KXtcbiAgICAgICAgbmV3T2JqZWN0S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld09iamVjdFtrZXldICE9IFwib2JqZWN0XCIgKSAgYmxhbmtPYmplY3Rba2V5XSA9IG5ld09iamVjdFtrZXldOyAgIFxuICAgICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld09iamVjdFtrZXldKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIgKXtcbiAgICAgICAgICAgICAgICBibGFua09iamVjdFtrZXldID0gbmV3T2JqZWN0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGJsYW5rQXJyYXkgPSBbXTtcbiAgICAgICAgbmV3QXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSAhPSBcIm9iamVjdFwiKSBibGFua0FycmF5LnB1c2goaXRlbSlcbiAgICAgICAgICAgIGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIpe1xuICAgICAgICAgICAgICAgIGJsYW5rQXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYmxhbmtPYmplY3QgPSBibGFua0FycmF5O1xuICAgIH1cbiAgICBpZiAoIWlzQXJyYXkpe1xuICAgICAgICBuZXdPYmplY3RLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3T2JqZWN0W2tleV0gPT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShuZXdPYmplY3Rba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3T2JqZWN0W2tleV0pICE9PSBcIltvYmplY3QgRGF0ZV1cIikge1xuICAgICAgICAgICAgICAgICAgICBibGFua09iamVjdFtrZXldID0gc2V0T2JqZWN0KG5ld09iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobmV3T2JqZWN0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgYmxhbmtPYmplY3Rba2V5XSA9IHNldE9iamVjdChuZXdPYmplY3Rba2V5XSx0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgbmV3QXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKSAhPT0gXCJbb2JqZWN0IERhdGVdXCIpe1xuICAgICAgICAgICAgICAgICAgICBibGFua09iamVjdC5zcGxpY2UoY3VycmVudEluZGV4LDAsc2V0T2JqZWN0KGl0ZW0pKVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSl7XG4gICAgICAgICAgICAgICAgYmxhbmtPYmplY3Quc3BsaWNlKGN1cnJlbnRJbmRleCwwLHNldE9iamVjdChpdGVtLHRydWUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEluZGV4ICsrO1xuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gYmxhbmtPYmplY3Q7XG5cblxuXG5cbn1cblxuXG5cbmNvbnN0IGFkZEJpbmRpbmdzID0gKGVsZW1lbnRzLGZ1bmMsYmluZGluZykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKTtcbiAgICBlbHNlIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKSk7XG59XG5cbmNvbnN0IHJlbW92ZUJpbmRpbmdzID0gKGVsZW1lbnRzLGZ1bmMsYmluZGluZykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpIGVsZW1lbnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKTtcbiAgICBlbHNlIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKSk7XG59XG5cblxuXG5cblxuZXhwb3J0IHtyZW1vdmVJdGVtLCBhZGRJdGVtLCBhZGRCaW5kaW5ncywgcmVtb3ZlQmluZGluZ3MsIHNldEFycmF5LCBzZXRPYmplY3R9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=