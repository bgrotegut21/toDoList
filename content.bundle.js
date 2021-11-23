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
___CSS_LOADER_EXPORT___.push([module.id, "/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n  }\n\n\n\n\n\n  .pageContent {\n    display:flex;\n    overflow:auto;\n}\n\n.addBoard {\n    width: 250px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    background:rgb(198, 198, 198);\n    margin:10px;\n    padding-bottom:10px;\n    \n  \n}\n\n\n\n\n\ninput {\n    outline: none;\n}\n\n\n.boardContent {\n\n    font-family: 'Roboto', sans-serif;\n}\n\n.board {\n    position: relative;\n    text-align:center;\n    background:rgb(198, 198, 198);\n    width: 290px;\n    margin:10px;\n\n\n    \n    padding-bottom:5px;\n}\n\n.boardOverlay {\n    background:rgba(0, 0, 0, 0.299);\n    position:absolute;\n    width:100%;\n    height:100%;\n    top:0;\n    z-index:1;\n    display:none;\n}\n\n.deleteBoard, .editBoard {\n    cursor: pointer;\n}\n\n\n.taskHolder {\n\n    display:flex;\n    align-items:center;\n}\n\n.taskTextBox {\n    width:135px;\n}\n.exampleBoardText {\n    position:relative;\n    top:4px;\n    font-size: large\n}\n\n\n.addBoardText {\n    margin-top:5px;\n    font-size: large;\n\n\n}\n\n\n\n.task, .notTask{\n    background:rgb(237, 230, 230);\n    border-left: 8px solid;\n    margin:10px;\n}\n\n.taskTools {\n    display:flex;\n    justify-content:space-between;\n    padding-left:10px;\n    padding-right:10px;\n    margin-top:10px;\n\n}\n.tools {\n    display:flex;\n}\n\n\n.taskLabel {\n    position: relative;\n    top:5px;\n    word-wrap: break-word;\n    margin-bottom:10px;\n    font-size: smaller;\n\n    border: 0;\n\n}\n.generalText {\n    font-size:10px;\n    margin-right: 20px;\n\n}\n\n.generalTextHolder {\n    display:flex;\n}\n\n\n\n\n.circleIcon {\n    width:10px;\n    height:10px;\n    border-radius:20px;\n    border: 3px solid black;\n    cursor:pointer;\n}\n.edit, .notEdit{\n    width:20px;\n    cursor:pointer;\n    margin-right:6px;\n}\n\n.circleIcon:hover {\n    background:black;\n}\n\n\n\n.taskAdder {\n    margin-top:10px;\n}\n\n\n.taskAdder:hover {\n   cursor:pointer;\n   background:rgb(178, 178, 178);\n}\n\n\n\n\n\n\n\n\n.priority {\n    display:flex;\n    margin:5px;\n\n}\n.editTools {\n    display:flex;\n    width:50px;\n\n}\n.dateTool {\n    margin:5px;\n    margin-right:14px;\n    display:flex;\n}\n.taskTextBox {\n    height:20px;\n    font-family: 'Roboto', sans-serif;\n    margin:5px;\n}\n\n.editToolHolder {\n\n    display:flex;\n    justify-content:space-between;\n    \n}\n\n.buttons {\n    margin-left: 5px;\n}\n\n.datePicker {\n    margin-left:5px;\n    width:135px;\n    height:20px;\n    border:0;\n}\n\n\n\n.taskEditor {\n    background: rgb(237, 230, 230);\n    margin:10px;\n    margin-left:20px;\n    display:flex;\n    align-items: center;\n    border-left: 8px solid;\n    flex-direction: column;\n}\n\n.error {\n    color:rgb(197, 63, 63);\n}\n\n\n.taskTextBox{\n    border:0;\n    margin:5px;\n\n}\n\n\n\n\n.buttons .button {\n\n    cursor: pointer;\n}\n\n.high {\n    border:5px solid red;\n}\n\n.medium {\n    border: 5px solid #ff9800;\n}\n\n\n.notTask {\n    \n     text-decoration: line-through; \n     color:grey; \n } \n\n.notEdit {\n    filter: invert(20%) sepia(10%) saturate(2076%) hue-rotate(86deg) brightness(118%) contrast(10%);\n}\n\n\n\n.low {\n\n    border:5px solid green;\n}\n\n.low:hover {\n    background:green;\n}\n\n.high:hover {\n    background:red;\n}\n\n.medium:hover {\n    background: #ff9800;\n}\n\n.button {\n    color:black;\n    height:15px;\n    width:35px;\n    line-height: 15px;\n    font-size: x-small;\n    margin:2px; \n\n}\n\n\n.buttons {\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n\n}\n\n.trashIt, .finished, .exitEditor{\n    cursor: pointer;\n}\n\n\n.projectTypeText {\n    position:relative;\n    bottom:2px;\n}\n\n.addBoarderButton {\n    background:0;\n    width:100%;\n    border:0;\n    margin-top: 5px;\n    height:20px;\n    cursor:pointer;\n}\n\n.addBoarderButton:hover {\n    background:rgb(178, 178, 178);\n}\n\n\n\n.addBoarderTextBox {\n    font-family: 'Roboto', sans-serif;\n    border:0;\n    margin-top:5px;\n    height:20px;\n    width:220px;\n}\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n.editBoard, .deleteBoard {\n    width:20px;\n}\n\n.editExampleIcons {\n\n    height:25px;\n    \n    display:flex;\n\n\n}\n\n.emptyrow {\n   \n    height:25px;\n    width:100%;\n    text-indent: -9999px;\n    \n}\n\n.editBoard, .deleteBoard {\n    margin-left:10px;\n\n\n}\n\n.boardtextBox {\n    font-family: 'Roboto', sans-serif;\n    text-align: center;\n    font-size: large;\n    width:100%;\n    height:20px;\n    border:0;\n    background:none;\n    \n \n}\n\n.boardTextEditor {\n    background:rgb(215, 213, 213);\n    position:relative;\n    z-index:1;\n    margin-top:10px;\n    margin-bottom:10px;\n    width:100%;\n\n\n\n    justify-content:center;\n    display:flex;\n\n\n \n\n}\n\n\n.changeBoardTitleButton {\n    cursor: pointer;\n}\n\n\n@media only screen and (max-width: 300px){\n\n    .editExampleIcons {\n        height:15px;\n    }\n\n    .emptyrow {\n        height:15px;\n    }\n\n    .deleteBoard, .editBoard {\n        width:12px;\n    }\n\n\n\n    .board{\n        width:185px;\n    }\n\n    .taskLabel {\n        font-size:xx-small\n    }\n\n    .edit {\n\n        width:10px;\n        \n\n    }\n\n    .generalText {\n        font-size:6px;\n        \n    }\n\n    \n    .exampleBoardText {\n        word-wrap: break-word;\n        font-size: x-small;\n    }\n\n    .boardtextBox {\n        font-size: x-small;\n        height:12px;\n    }\n\n    .addBoard {\n    \n        width:185px;\n      \n    }\n    .changeBoardTitleButton {\n        font-size: x-small;\n    }\n\n    .addBoardText {\n        font-size:x-small;\n    }\n\n    .addBoarderTextBox {\n        height:12px;\n        font-size: xx-small;\n        width:160px;\n    }\n    \n    .addBoarderButton {\n        font-size: x-small;\n    }\n\n    .task, .notTask {\n        margin:5px; \n    }\n    .circleIcon {\n        width:2px;\n        height:2px\n    }\n\n    .taskHolderText, .dateText, .buttonText {\n        font-size:xx-small;\n        \n    }\n\n    .taskTools {\n        \n        padding-right:5px;\n        padding-left:5px;\n        margin-top:5px;\n\n    }\n\n    .taskTextBox {\n        width:80px;\n        height:12px;\n        font-size: xx-small;\n    }\n\n    .datePicker {\n        width:80px;\n        font-size: 6px;\n        height:12px;\n    }\n\n\n    \n    .high {\n        border: 3px solid red;\n    }\n\n    .medium {\n        border: 3px solid rgb(255,202,10);\n    }\n\n    .low {\n        border: 3px solid green;\n   \n    }\n\n    .task, .notTask {\n        border-left: 4px solid;\n       \n    }\n\n    .taskEditor {\n        border-left:  4px solid;\n    }\n\n\n\n\n    .button {\n\n        height:10px;\n        line-height: 10px;\n        width:20px;\n        font-size: 6px;\n    }\n\n    .editTools {\n        margin-left: 30px;\n    }\n\n    .trashIt, .finished, .exitEditor {\n        width:15px;\n\n    }\n\n    .taskAdder {\n        font-size: xx-small;\n    }\n\n\n\n}\n\n.task, .notTask {\n    border-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/board.css"],"names":[],"mappings":"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","sourcesContent":["/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n  }\n\n\n\n\n\n  .pageContent {\n    display:flex;\n    overflow:auto;\n}\n\n.addBoard {\n    width: 250px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    background:rgb(198, 198, 198);\n    margin:10px;\n    padding-bottom:10px;\n    \n  \n}\n\n\n\n\n\ninput {\n    outline: none;\n}\n\n\n.boardContent {\n\n    font-family: 'Roboto', sans-serif;\n}\n\n.board {\n    position: relative;\n    text-align:center;\n    background:rgb(198, 198, 198);\n    width: 290px;\n    margin:10px;\n\n\n    \n    padding-bottom:5px;\n}\n\n.boardOverlay {\n    background:rgba(0, 0, 0, 0.299);\n    position:absolute;\n    width:100%;\n    height:100%;\n    top:0;\n    z-index:1;\n    display:none;\n}\n\n.deleteBoard, .editBoard {\n    cursor: pointer;\n}\n\n\n.taskHolder {\n\n    display:flex;\n    align-items:center;\n}\n\n.taskTextBox {\n    width:135px;\n}\n.exampleBoardText {\n    position:relative;\n    top:4px;\n    font-size: large\n}\n\n\n.addBoardText {\n    margin-top:5px;\n    font-size: large;\n\n\n}\n\n\n\n.task, .notTask{\n    background:rgb(237, 230, 230);\n    border-left: 8px solid;\n    margin:10px;\n}\n\n.taskTools {\n    display:flex;\n    justify-content:space-between;\n    padding-left:10px;\n    padding-right:10px;\n    margin-top:10px;\n\n}\n.tools {\n    display:flex;\n}\n\n\n.taskLabel {\n    position: relative;\n    top:5px;\n    word-wrap: break-word;\n    margin-bottom:10px;\n    font-size: smaller;\n\n    border: 0;\n\n}\n.generalText {\n    font-size:10px;\n    margin-right: 20px;\n\n}\n\n.generalTextHolder {\n    display:flex;\n}\n\n\n\n\n.circleIcon {\n    width:10px;\n    height:10px;\n    border-radius:20px;\n    border: 3px solid black;\n    cursor:pointer;\n}\n.edit, .notEdit{\n    width:20px;\n    cursor:pointer;\n    margin-right:6px;\n}\n\n.circleIcon:hover {\n    background:black;\n}\n\n\n\n.taskAdder {\n    margin-top:10px;\n}\n\n\n.taskAdder:hover {\n   cursor:pointer;\n   background:rgb(178, 178, 178);\n}\n\n\n\n\n\n\n\n\n.priority {\n    display:flex;\n    margin:5px;\n\n}\n.editTools {\n    display:flex;\n    width:50px;\n\n}\n.dateTool {\n    margin:5px;\n    margin-right:14px;\n    display:flex;\n}\n.taskTextBox {\n    height:20px;\n    font-family: 'Roboto', sans-serif;\n    margin:5px;\n}\n\n.editToolHolder {\n\n    display:flex;\n    justify-content:space-between;\n    \n}\n\n.buttons {\n    margin-left: 5px;\n}\n\n.datePicker {\n    margin-left:5px;\n    width:135px;\n    height:20px;\n    border:0;\n}\n\n\n\n.taskEditor {\n    background: rgb(237, 230, 230);\n    margin:10px;\n    margin-left:20px;\n    display:flex;\n    align-items: center;\n    border-left: 8px solid;\n    flex-direction: column;\n}\n\n.error {\n    color:rgb(197, 63, 63);\n}\n\n\n.taskTextBox{\n    border:0;\n    margin:5px;\n\n}\n\n\n\n\n.buttons .button {\n\n    cursor: pointer;\n}\n\n.high {\n    border:5px solid red;\n}\n\n.medium {\n    border: 5px solid #ff9800;\n}\n\n\n.notTask {\n    \n     text-decoration: line-through; \n     color:grey; \n } \n\n.notEdit {\n    filter: invert(20%) sepia(10%) saturate(2076%) hue-rotate(86deg) brightness(118%) contrast(10%);\n}\n\n\n\n.low {\n\n    border:5px solid green;\n}\n\n.low:hover {\n    background:green;\n}\n\n.high:hover {\n    background:red;\n}\n\n.medium:hover {\n    background: #ff9800;\n}\n\n.button {\n    color:black;\n    height:15px;\n    width:35px;\n    line-height: 15px;\n    font-size: x-small;\n    margin:2px; \n\n}\n\n\n.buttons {\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n\n}\n\n.trashIt, .finished, .exitEditor{\n    cursor: pointer;\n}\n\n\n.projectTypeText {\n    position:relative;\n    bottom:2px;\n}\n\n.addBoarderButton {\n    background:0;\n    width:100%;\n    border:0;\n    margin-top: 5px;\n    height:20px;\n    cursor:pointer;\n}\n\n.addBoarderButton:hover {\n    background:rgb(178, 178, 178);\n}\n\n\n\n.addBoarderTextBox {\n    font-family: 'Roboto', sans-serif;\n    border:0;\n    margin-top:5px;\n    height:20px;\n    width:220px;\n}\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(../images/hamburgerMenu.svg);\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n.editBoard, .deleteBoard {\n    width:20px;\n}\n\n.editExampleIcons {\n\n    height:25px;\n    \n    display:flex;\n\n\n}\n\n.emptyrow {\n   \n    height:25px;\n    width:100%;\n    text-indent: -9999px;\n    \n}\n\n.editBoard, .deleteBoard {\n    margin-left:10px;\n\n\n}\n\n.boardtextBox {\n    font-family: 'Roboto', sans-serif;\n    text-align: center;\n    font-size: large;\n    width:100%;\n    height:20px;\n    border:0;\n    background:none;\n    \n \n}\n\n.boardTextEditor {\n    background:rgb(215, 213, 213);\n    position:relative;\n    z-index:1;\n    margin-top:10px;\n    margin-bottom:10px;\n    width:100%;\n\n\n\n    justify-content:center;\n    display:flex;\n\n\n \n\n}\n\n\n.changeBoardTitleButton {\n    cursor: pointer;\n}\n\n\n@media only screen and (max-width: 300px){\n\n    .editExampleIcons {\n        height:15px;\n    }\n\n    .emptyrow {\n        height:15px;\n    }\n\n    .deleteBoard, .editBoard {\n        width:12px;\n    }\n\n\n\n    .board{\n        width:185px;\n    }\n\n    .taskLabel {\n        font-size:xx-small\n    }\n\n    .edit {\n\n        width:10px;\n        \n\n    }\n\n    .generalText {\n        font-size:6px;\n        \n    }\n\n    \n    .exampleBoardText {\n        word-wrap: break-word;\n        font-size: x-small;\n    }\n\n    .boardtextBox {\n        font-size: x-small;\n        height:12px;\n    }\n\n    .addBoard {\n    \n        width:185px;\n      \n    }\n    .changeBoardTitleButton {\n        font-size: x-small;\n    }\n\n    .addBoardText {\n        font-size:x-small;\n    }\n\n    .addBoarderTextBox {\n        height:12px;\n        font-size: xx-small;\n        width:160px;\n    }\n    \n    .addBoarderButton {\n        font-size: x-small;\n    }\n\n    .task, .notTask {\n        margin:5px; \n    }\n    .circleIcon {\n        width:2px;\n        height:2px\n    }\n\n    .taskHolderText, .dateText, .buttonText {\n        font-size:xx-small;\n        \n    }\n\n    .taskTools {\n        \n        padding-right:5px;\n        padding-left:5px;\n        margin-top:5px;\n\n    }\n\n    .taskTextBox {\n        width:80px;\n        height:12px;\n        font-size: xx-small;\n    }\n\n    .datePicker {\n        width:80px;\n        font-size: 6px;\n        height:12px;\n    }\n\n\n    \n    .high {\n        border: 3px solid red;\n    }\n\n    .medium {\n        border: 3px solid rgb(255,202,10);\n    }\n\n    .low {\n        border: 3px solid green;\n   \n    }\n\n    .task, .notTask {\n        border-left: 4px solid;\n       \n    }\n\n    .taskEditor {\n        border-left:  4px solid;\n    }\n\n\n\n\n    .button {\n\n        height:10px;\n        line-height: 10px;\n        width:20px;\n        font-size: 6px;\n    }\n\n    .editTools {\n        margin-left: 30px;\n    }\n\n    .trashIt, .finished, .exitEditor {\n        width:15px;\n\n    }\n\n    .taskAdder {\n        font-size: xx-small;\n    }\n\n\n\n}\n\n.task, .notTask {\n    border-color: red;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n  }\n\n  /* cutive-mono-regular - latin */\n@font-face {\n    font-family: 'Cutive Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Legacy iOS */\n  }\n\n\n  .navigation {\n    width:250px;\n    flex-shrink: 0;\n    font-family: 'Roboto', sans-serif;\n    background:rgb(19, 75, 205);\n    overflow:auto;\n\n\n}\n\n.projectButton, .upComingButton {\n\n    height:30px;\n    line-height:28px;\n\n    width:100%;\n\n    font-size: small;\n\n    \n    \n}\n\n.deleteItem, .editProject {\n    cursor: pointer;\n}\n\n.mobileMenu {\n    display:none;\n}\n\n.listTitle, .projectText, .plusSign {\n    font-family: 'Cutive Mono', monospace;\n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n    cursor:pointer;\n    text-align: center;\n}\n\n.projectTaskHolder {\n    width:100%;\n    z-index:3;\n}\n\n.projectContainer {\n    white-space: nowrap;\n    width:75%;\n    text-align: center;\n\n}\n\n.projectContainerText {\n    cursor: pointer;\n}\n\n.projectContainer p {\n    margin-right:40px;\n}\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n.wholeOverlay {\n    background:none;\n    position:absolute;\n    height:100%;\n    width:100%;\n    z-index:3;\n    cursor: pointer;\n    display:none;\n \n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n\n    text-align: center;\n}\n\n\n.projectContainer {\n    width:75%;\n    text-align: center;\n\n}\n\n\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n\n\n.editProjectButton{\n\n    width:100%;\n    display:flex;\n    z-index:3;\n \n    justify-content:flex-end;\n    background:rgb(22, 83, 227);\n \n\n \n }\n \n \n .addProjectLabel {\n     line-height: 28px;\n     position:relative;\n     right:3px;\n\n     \n     cursor: pointer;\n \n \n }\n \n .editText {\n     background:none;\n \n     color:white;\n     outline:none;\n     border:none;\n     height:30px;\n     margin-right:5px;\n    font-size:small;\n }\n \n\n .elements{\n    margin-top: 20px;\n    color:white;\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n\n\n}\n\n.plusSign {\n    margin-left: 5px;\n}\n\n.projectButtonHover:hover, .projectAdder:hover, .upComingButton:hover{\n    background:rgb(22, 83, 227);\n    \n}\n\n \n \n \n.editText::placeholder {\n     \n \n     color:white;\n}\n \n \n .overlay {\n     background:rgba(0, 0, 0, 0.299);\n     height:100%;\n     width:250px;\n     z-index:1;\n     \n     text-indent: -9999px;\n     position:absolute;\n     top:0px;\n\n\n     display:none;\n \n   \n \n}\n\n.projectAdder {\n\n    margin-top:20px;\n    margin-bottom: 20px;\n    justify-content: center;\n    display:flex;\n    cursor:pointer;\n\n    width:100%\n    \n}\n\n.exit {\n    display:none;\n}\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n\n@media only screen and (max-width:550px){\n\n \n    .overlay {\n        width:100%;\n        display:none;\n    }\n\n    .navigation {\n        display:none;\n    }\n\n    .mobileMenu {\n        display:flex;\n    }\n\n    .pageContent {\n        display:none;\n    }\n\n    .sections {\n        flex-direction: column;\n    }\n\n    .navigation {\n        width:100%;\n        height:100%;\n        \n        \n       \n    }\n\n    .projectButton{\n        justify-content: center;\n    }\n\n    .projectContainer {\n        cursor:pointer;\n        justify-content: flex-start;\n    }\n\n    .projectContainer p {\n    \n        text-align: center;\n        margin-right:50px;\n    }\n    .projectTools {\n        width:15%;\n\n    }\n\n    .editProjectButton{\n        justify-content: center;\n    }\n\n    .editText{\n        margin-left: 100px;\n\n    }\n\n\n\n\n\n    .exit {\n        display:block;\n        text-align: left;\n        color:white;\n        margin:10px;\n        cursor: pointer;\n    }\n}\n\n@media only screen and (max-width: 350px){\n    .deleteItem, .editProject {\n        width:15px;\n    }\n}\n\n@media only screen and (max-width: 225px){\n    .deleteItem, .editProject {\n        width:11.5px;\n    }\n}\n\n@media only screen and (max-width:200px){\n    .listTitle {\n        font-size: x-large;\n    }\n}\n\n\n\n@media only screen and (max-width: 300px){\n\n\n\n    .projectContainer p{\n        margin-right:30px;\n    }\n\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/navigation.css"],"names":[],"mappings":"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","sourcesContent":["\n\n/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n  }\n\n  /* cutive-mono-regular - latin */\n@font-face {\n    font-family: 'Cutive Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/cutive-mono-v9-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/cutive-mono-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/cutive-mono-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/cutive-mono-v9-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/cutive-mono-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/cutive-mono-v9-latin-regular.svg#CutiveMono') format('svg'); /* Legacy iOS */\n  }\n\n\n  .navigation {\n    width:250px;\n    flex-shrink: 0;\n    font-family: 'Roboto', sans-serif;\n    background:rgb(19, 75, 205);\n    overflow:auto;\n\n\n}\n\n.projectButton, .upComingButton {\n\n    height:30px;\n    line-height:28px;\n\n    width:100%;\n\n    font-size: small;\n\n    \n    \n}\n\n.deleteItem, .editProject {\n    cursor: pointer;\n}\n\n.mobileMenu {\n    display:none;\n}\n\n.listTitle, .projectText, .plusSign {\n    font-family: 'Cutive Mono', monospace;\n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n    cursor:pointer;\n    text-align: center;\n}\n\n.projectTaskHolder {\n    width:100%;\n    z-index:3;\n}\n\n.projectContainer {\n    white-space: nowrap;\n    width:75%;\n    text-align: center;\n\n}\n\n.projectContainerText {\n    cursor: pointer;\n}\n\n.projectContainer p {\n    margin-right:40px;\n}\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n.wholeOverlay {\n    background:none;\n    position:absolute;\n    height:100%;\n    width:100%;\n    z-index:3;\n    cursor: pointer;\n    display:none;\n \n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n\n    text-align: center;\n}\n\n\n.projectContainer {\n    width:75%;\n    text-align: center;\n\n}\n\n\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n\n\n.editProjectButton{\n\n    width:100%;\n    display:flex;\n    z-index:3;\n \n    justify-content:flex-end;\n    background:rgb(22, 83, 227);\n \n\n \n }\n \n \n .addProjectLabel {\n     line-height: 28px;\n     position:relative;\n     right:3px;\n\n     \n     cursor: pointer;\n \n \n }\n \n .editText {\n     background:none;\n \n     color:white;\n     outline:none;\n     border:none;\n     height:30px;\n     margin-right:5px;\n    font-size:small;\n }\n \n\n .elements{\n    margin-top: 20px;\n    color:white;\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n\n\n}\n\n.plusSign {\n    margin-left: 5px;\n}\n\n.projectButtonHover:hover, .projectAdder:hover, .upComingButton:hover{\n    background:rgb(22, 83, 227);\n    \n}\n\n \n \n \n.editText::placeholder {\n     \n \n     color:white;\n}\n \n \n .overlay {\n     background:rgba(0, 0, 0, 0.299);\n     height:100%;\n     width:250px;\n     z-index:1;\n     \n     text-indent: -9999px;\n     position:absolute;\n     top:0px;\n\n\n     display:none;\n \n   \n \n}\n\n.projectAdder {\n\n    margin-top:20px;\n    margin-bottom: 20px;\n    justify-content: center;\n    display:flex;\n    cursor:pointer;\n\n    width:100%\n    \n}\n\n.exit {\n    display:none;\n}\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(../images/hamburgerMenu.svg);\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n\n@media only screen and (max-width:550px){\n\n \n    .overlay {\n        width:100%;\n        display:none;\n    }\n\n    .navigation {\n        display:none;\n    }\n\n    .mobileMenu {\n        display:flex;\n    }\n\n    .pageContent {\n        display:none;\n    }\n\n    .sections {\n        flex-direction: column;\n    }\n\n    .navigation {\n        width:100%;\n        height:100%;\n        \n        \n       \n    }\n\n    .projectButton{\n        justify-content: center;\n    }\n\n    .projectContainer {\n        cursor:pointer;\n        justify-content: flex-start;\n    }\n\n    .projectContainer p {\n    \n        text-align: center;\n        margin-right:50px;\n    }\n    .projectTools {\n        width:15%;\n\n    }\n\n    .editProjectButton{\n        justify-content: center;\n    }\n\n    .editText{\n        margin-left: 100px;\n\n    }\n\n\n\n\n\n    .exit {\n        display:block;\n        text-align: left;\n        color:white;\n        margin:10px;\n        cursor: pointer;\n    }\n}\n\n@media only screen and (max-width: 350px){\n    .deleteItem, .editProject {\n        width:15px;\n    }\n}\n\n@media only screen and (max-width: 225px){\n    .deleteItem, .editProject {\n        width:11.5px;\n    }\n}\n\n@media only screen and (max-width:200px){\n    .listTitle {\n        font-size: x-large;\n    }\n}\n\n\n\n@media only screen and (max-width: 300px){\n\n\n\n    .projectContainer p{\n        margin-right:30px;\n    }\n\n}\n\n"],"sourceRoot":""}]);
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


const assignTools = (elements,index,boardIndex) => {
    elements.forEach(childElement => {
        if (childElement.getAttribute("class") == "tools"){
            let toolsChildren = Array.from(childElement.children);
            toolsChildren.forEach(toolElement => 
                {
                // console.log(toolElement, "current tool element")
                toolElement.taskIndex = index;
                toolElement.boardIndex = boardIndex;
            })
        }
    })


}

const assignTaskIndex = (element,boardIndex) => {

    let taskIndex =0;
    // console.log(boardIndex, "the current boardIndex")

    element.forEach(childElement => {
        // console.log(childElement, "the child element")
        if (childElement.getAttribute("class") == "task" ||
            childElement.getAttribute("class") == "notTask"
        ){
            let taskChildren = Array.from(childElement.children);
            taskChildren.forEach(taskChild => {
                if (taskChild.getAttribute("class") == "taskTools"){
                    let taskToolsChildren = Array.from(taskChild.children);
                    assignTools(taskToolsChildren,taskIndex,boardIndex);
                }
            })
            taskIndex++
        }

    })
    



}


const assignBoardIcons = (element, currentIndex) =>  {
    let board = Array.from(element.children);
    board.forEach(childElement => {
        if (childElement.getAttribute("class") == "editExampleIcons"){
            childElement.boardIndex = currentIndex;
            let editExampleIcons = Array.from(childElement.children);
            editExampleIcons.forEach(itemElement => {
                itemElement.boardIndex = currentIndex;
            })

        }

        if (childElement.getAttribute("class") == "taskAdder"){
            let taskParagraph = Array.from(childElement.children)[0];
            // console.log(taskParagraph, "the task paragraph")
            taskParagraph.boardIndex = currentIndex;
        }
      //  console.log(childElement, "the child element")
        childElement.boardIndex = currentIndex;
       // console.log(childElement.boardIndex, "child element board index")
    })
}


const assignBoardElements = () => {

    
    let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_0__.getUpdatedElements)();
    let pageContentChildren = elements.pageContentChildren;
    let currentIndex = 0;


 //   console.log(pageContentChildren, " the page content children")
    pageContentChildren.forEach(element => {
        if (element.getAttribute("class") == "boardContent"){
            element.boardIndex = currentIndex;
            let boardContent = Array.from(element.children);
            boardContent.forEach(childElement => {
                childElement.boardIndex = currentIndex;
                console.log(childElement.getAttribute("class"), "the current child element calss")
                if (childElement.getAttribute("class") == "board") assignBoardIcons(childElement,currentIndex)
             
            })
        }
        currentIndex ++;
    })
}



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
/* harmony export */   "setArray": () => (/* binding */ setArray)
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
    newArray.forEach(task => {
        newTasks.push(task);
    })
    return newTasks;
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


const send = (
    () => {
        let items = {};
        let titleItems = {}
        items.upcoming = []

        
        const sendData = (data,index,title) => {
            items[index] = data;
            titleItems[index] = title;

        }
    
        const retrieveData = (index) => {
            console.log(items, "items retrieve data")
            if (items[index]){
                return items[index]
            } else {
                return false;
            }
        }


        const retrieveTitle = (index) => {
            if (titleItems[index]){
                return titleItems[index]
            } else {
                return false;
            }

        }

        const overwriteData = (data) => {
            items = data;

        }

        const getAllData = () => {
            return items;
        }

        const deleteData = (index) => {
          //  console.log(index, "the current index")
            let newItems = items;
            let newItemsKeys = Object.keys(newItems);
            newItemsKeys = newItemsKeys.filter(key => key != index)
        //    console.log(newItemsKeys, "first new items keys")
            newItemsKeys.forEach(key => newItems[key] = newItems[key]);
            let newerItems = {};
       //     console.log(newItems, "new items")
        //    console.log(newItemsKeys, "the new items keys");

         //   console.log(newItemsKeys, "the new items keys")
          //  console.log(newItems, "the new items")
            for (let i = 0; i < newItemsKeys.length; i++) {
                newerItems[i] = newItems[newItemsKeys[i]]
            };
        //    console.log(newerItems, "the newer items");
            items = newerItems;
        
        }
        
        return {sendData, retrieveData,retrieveTitle, deleteData, getAllData, overwriteData};

    }
)()



/***/ }),

/***/ "./src/scripts/template.js":
/*!*********************************!*\
  !*** ./src/scripts/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "createAddBoard": () => (/* binding */ createAddBoard),
/* harmony export */   "createBoardEditor": () => (/* binding */ createBoardEditor),
/* harmony export */   "createListEditor": () => (/* binding */ createListEditor),
/* harmony export */   "createUpComingBoard": () => (/* binding */ createUpComingBoard)
/* harmony export */ });
/* harmony import */ var _images_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/trash.svg */ "./src/images/trash.svg");
/* harmony import */ var _images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/editOff.svg */ "./src/images/editOff.svg");
/* harmony import */ var _images_finished_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/finished.svg */ "./src/images/finished.svg");
/* harmony import */ var _images_exit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/exit.svg */ "./src/images/exit.svg");







   
   
   const createTask = (task) => {
        let color;
        let taskClass = "task";
        let editClass = "edit";
        let circleIconBackground = "none";
        let projectTypeText = ""


        if (task.priority == "High") color = "red";
        if (task.priority == "Low") color = "green";
        if (task.priority == "Medium") color = "#ff9800"
        if (task.navName) {
            projectTypeText = ` <p class="generalText projectTypeText"> Project: ${task.navName}</p>`

        }




        if (task.checked) {
            taskClass = "notTask";
            editClass = "notEdit"
            circleIconBackground = "black";
        }


        let newTaskText = `<div class="${taskClass}" style = "border-color:${color}">
                            <p class="taskLabel">${task.text}</p>
                            <div class="taskTools">
                                <div class="generalTextHolder">
                                    <p class="generalText">Due: ${task.dateText}</p>
                                    <p class="generalText">Priority: ${task.priority}</p>

                                </div>

                                <div class="tools">
                                    <img class="${editClass}" src="${_images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="">
                                    <div class="circleIcon" style = "background:${circleIconBackground}"></div>
                                </div>
                            </div>

                            ${projectTypeText}
                           

                            
                        </div>`
        return newTaskText;
    }

    const createBoard = (template) => {
        let text = template.text;
        let boardText = `                <div class = "boardContent">
                                            <div class = "board">
                                                <div class = "boardOverlay"></div>
                                                    <div class = "editExampleIcons">
                                                        <img class ="deleteBoard"  src="${_images_trash_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="trash icon for deleting">
                                                        <img class = "editBoard" src="${_images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="editing icon">
                                                    </div>
                                                    <h2 class = "exampleBoardText">${text}</h2>
                                                    <div class = "taskLists"></div>
                                                    <div class = "taskAdder">
                                                        <p>+ Add Task</p>
                                                    </div>
                                                </div> 
                                                    </div>`
        return boardText;
    }

    const createUpComingBoard = (task) => {


        let boardText = `<div class = "boardContent">
                            <div class = "board">
                                <div class = "boardOverlay"></div>                          
                                    <h2 class = "exampleBoardText">${task.text}</h2>   
                                    <div class = "taskLists"></div>     
                                    <div class = "taskAdder">
                                        <p>+ Add Task</p>
                                    </div>
                                
                                    
                                </div>  
                                
                                </div>`
        return boardText;
    }

    const createAddBoard = () => {
        let addBoardText = `<div class = "boardContent">
                                <div class = "addBoard">
                                    <div class = "emptyrow">empty row</div>
                                    <h2 class = "addBoardText">Add Board</h2>
                                    <input class = "addBoarderTextBox" type="text">
                                    <button class = "addBoarderButton">Add</button>
                                </div>
                            </div>`
        return addBoardText;
    }


    const createBoardEditor = (task) => {
        let value = task.text;
        
        let boardText = `<div class = "boardTextEditor">
        <input class = "boardtextBox" type="text" value = "${value}">
        <p class = "changeBoardTitleButton">+</p>
    </div>`
        return boardText;
    }


    const createDatePicker = (date) => {
        
    }

    const createListEditor = (task) => {
        let defaultColor = "blue"
        let icon = _images_trash_svg__WEBPACK_IMPORTED_MODULE_0__;
        let iconClass = "trashIt";



        if (task.creatingTask) {
            defaultColor = "black";
            icon = _images_exit_svg__WEBPACK_IMPORTED_MODULE_3__;
            iconClass = "exitEditor"

        }
        let text = task.text;


        let listText = `<div class = "taskEditor" style = "border-color:${defaultColor}">
                            <div class = "taskHolder">

                                <p class = "taskHolderText">Title:</p>
                                <input class = "taskTextBox" type="text" value = "${text}">
                            </div>
                                <div class = "dateTool">
                                    <p class = "dateText">Date: </p>
                                    <input class = "datePicker" type="date">
                                </div>
                                <div class = "editToolHolder">
                                    <div class = "priority">
                                        <p class = "buttonText">Priority:</p>
                                        <div class = "buttons">
                                            <div class = "button high">
                                                <p class = "highText">High</p>
                                            </div>
                                            <div class = "button medium">
                                                <p class = "mediumText">Medium</p>
                                            </div>
                                            <div class = "button low">
                                                <p class = "lowText">Low</p>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                                <div class = "editTools">
                                    <img class = "${iconClass}" src="${icon}" alt="">
                                    <img class = "finished" src="${_images_finished_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="">
                                </div>
                            </div>`  
    return listText;
    }



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
/* harmony export */   "unshadeButtons": () => (/* binding */ unshadeButtons),
/* harmony export */   "createTaskTemplate": () => (/* binding */ createTaskTemplate),
/* harmony export */   "findObjectByName": () => (/* binding */ findObjectByName)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
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

    // console.log(currentObject, "the current object")
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

const unshadeButtons = ()=> {
    let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_0__.getUpdatedElements)();
    let buttons = elements.button;
    buttons.forEach(element => {
        let elementChildren = Array.from(element.children);
        elementChildren.forEach(childElement => {
            childElement.style.background = "none";
            // console.log(childElement, "the current child element")
        })
    })
}


const createTaskTemplate = (text,date,priority,projectTypeText) => {
    let task = {}
    task.listTask = true;
    task.text = text,
    task.date = date;
    task.dateText = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(task.date,"MMM d y")
    task.priority = priority;
    task.checked = false;
    if (typeof projectTypeText != "undefined")  task.projectTypeText = projectTypeText;
    return task;

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
/******/ 			"content": 0
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
/*!********************************!*\
  !*** ./src/scripts/content.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");
/* harmony import */ var _send_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send.js */ "./src/scripts/send.js");
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities.js */ "./src/scripts/utilities.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.js */ "./src/scripts/template.js");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/isThisWeek */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns_getDayOfYear__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/getDayOfYear */ "./node_modules/date-fns/esm/getDayOfYear/index.js");
/* harmony import */ var _assign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assign.js */ "./src/scripts/assign.js");


// do not forget to fix spaces problem
// do not forget to fix spaces problem
// do not forget to fix spaces problem
// do not forget to fix spaces problem
// do not forget to fix spaces problem

// do not forget to fix spaces problem
// do not forget to fix spaces problem



















const Content = () => {

    let staticListTasks = [];
    let changedListTasks = []; 

    let staticBoardLists = [];
    let changedBoardLists = [];

    let index;
    let currentIndex;
    let isUpComing = false;

    let newIndex = false;
    let canDisrupt = false
    let name;




    let dom = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getInitialElements)();

    const assignBoardBindings = () => {
        return
    }

    const activateAddBoard =() => {
        return
    }



// will add key bindings at a later date
    const removeContentBindings = (bool) => {
        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.boarderButton, addBoardTasks,"click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.deleteBoard,deleteBoard, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.editBoard,editBoard,"click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.taskAdders, addListEditorClick, "click")

    }




     const addContentBindings = () => {
        // //console.log("adding the content bindings")
        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        // //console.log(elements.boarderButton, "elements boarder button")
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.boarderButton, addBoardTasks,"click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.deleteBoard,deleteBoard, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.editBoard,editBoard,"click");

        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.taskAdders, addListEditorClick, "click");


        
    }


    const addListBindings = () => {
        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.button, shadeButtonColor, "click")
        ;(0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.trashIt,deleteTask, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.finished,addTaskClick, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.edit, editTask, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.circleIcon, crossOutTask, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.exitEditor, exitListEditor, "click");

    }

    const addTaskBindings = () => {
        addListBindings();
        addContentBindings();
    }
    
    const removeTaskBindings = () => {
        removeListBindings();
        removeContentBindings();
    }



    const addChangeNameBinding = () => {
        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(elements.changeBoardTitleButtons, changeName, "click");
    }

    const removeListBindings = () => {
        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.changeBoardTitleButtons,changeName, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.button, shadeButtonColor, "click")
        ;(0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.trashIt,deleteTask, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.finished,addTaskClick, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.edit, editTask, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.circleIcon, crossOutTask, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(elements.exitEditor, exitListEditor, "click");
    }



    const crossOutTask= (event) => {

        let taskIndex = event.target.taskIndex;
        let boardIndex = event.target.boardIndex;

        //console.log(taskIndex, "the current taskindex");
        //console.log(boardIndex, "the current board index")

        let task = staticListTasks[boardIndex].tasks[taskIndex];
        //console.log(task, "the current task")

        task.checked ? task.checked = false: task.checked = true;


        let indexes = getIndexes()

        if (indexes) {
            let listIndex = indexes.listIndex;
            let boardIndex2 = indexes.boardIndex;

            //console.log(listIndex, "the current list index");
            //console.log(taskIndex,"the current task index")

            if (taskIndex == listIndex && boardIndex == boardIndex2) removeListEditor()
        }

        //console.log(indexes, "the current list index");
        //console.log(taskIndex, "the current task index")
       

        renderListEditorValue();
        renderBoardLists();

    }



    const deleteTask =  () => {
        let indexes = getIndexes();
        let taskIndex = indexes.listIndex;
        let boardIndex = indexes.boardIndex;

        //console.log(taskIndex, "the current task index");
        //console.log(boardIndex, "the board index")

        //console.log(staticListTasks[boardIndex].tasks[taskIndex])

        let task = staticListTasks[boardIndex].tasks[taskIndex];
        task.listTask = false;

        let newArray = staticListTasks[boardIndex].tasks;
        //console.log(newArray, "the before new array")

        let newerArray = [];

        newArray.forEach(task => {
            if (task.listTask != false){
                newerArray.push(task)
            }
        })

        //console.log(newerArray, "the newer array")

        staticListTasks[boardIndex].tasks = newerArray




        removeListEditor();

        renderBoardLists();




        
    }




    const editTask = (event) => {

        // //console.log([event.target])
        let boardIndex = event.target.boardIndex;
        let taskIndex = event.target.taskIndex;

        // //console.log("\n")
        //console.log(taskIndex, "the current task index")
 
        // //console.log(boardIndex,"the current board index")
        // //console.log(staticListTasks[boardIndex].changedBoardLists, "changed board lists")
        let task = staticListTasks[boardIndex].tasks[taskIndex];
        //console.log(task.text, "the task text")
        let text = task.text;
        let date = task.date;
        let priority = task.priority;

       // //console.log(date, "the current date")
      //  //console.log(task, "the current task")
        // //console.log(task.date, "the current date")


        // //console.log(priority, "the current priotrity")
        // //console.log(taskIndex);
        // //console.log(text);
        // //console.log(boardIndex);

        

        addListEditor(boardIndex, taskIndex, text, date,priority)
        

        
    }



    const exitListEditor = () => {
        removeListEditor();
        renderBoardLists();
    }


    const removeListEditor = () => {
        staticListTasks.forEach(task => {
            let newTasks = task.changedBoardLists;
            newTasks = newTasks.filter(task => task.listEditor != true );
            task.changedBoardLists = newTasks;
        })

    }

    const findListEditorBoardIndex = () => {
        let newTasks = staticListTasks;
        let boardIndex = 0;
        let stopLoop = false;

        newTasks.forEach(board => {
            // //console.log(board, "the current board")
            board.changedBoardLists.forEach(task => {
                if (task.listEditor == true){
                    stopLoop = true;
                    return
                }
            })
            if (stopLoop) return;
            boardIndex ++;
            
        })
        return boardIndex;
    }





    const getIndexes = () => {
        let breakLoop = false;
        let indexes;
        let boardIndex = 0;
        let listIndex;
        staticListTasks.forEach(task => {
            task.changedBoardLists.forEach(listTask => {
                if (listTask.listEditor){
                    if (typeof listTask.index != "undefined"){
                        listIndex = listTask.index;
                        indexes  = {boardIndex, listIndex};
                    }       
                    else indexes = false;
                    breakLoop = true;
                }
            })
            if (breakLoop) return;
            boardIndex ++;
        })
        return indexes;
    }






    const addTaskClick = () => {
        let indexes = getIndexes();

        if (indexes !== false){
            addTask(indexes.listIndex);
        } else {
            addTask();
        }
    }

    const getTaskByListIndex = (index) => {
        let boardIndex = 0
        let currentBoardIndex = false;
        changedListTasks.forEach(board => {
            if (board[index].listEditor) {
                currentBoardIndex = boardIndex;
                return
            }
            boardIndex ++;
        })

        if (!currentBoardIndex) return currentBoardIndex;
        return staticListTasks[boardIndex].tasks[index];

    }


    const updateNavTasks = (navIndex, boardIndex, taskIndex, newTask) => {
        let allTasks = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.getAllData();
        allTasks[navIndex][boardIndex].tasks[taskIndex] = newTask;
        _send_js__WEBPACK_IMPORTED_MODULE_1__.send.overwriteData(allTasks);
        


    }



    const addTask =  (index) => {
    

    

        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        let dateValue = elements.datePicker[0].value
        let currentDate;
    
        if (dateValue.length == 0) currentDate = new Date();
        else currentDate = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.changeValueToDate)(dateValue);
        // //console.log(currentDate, "the current date")
        let taskText = elements.taskTextBox[0].value;
        if (taskText.length == 0) taskText = "New Task";

        let priority = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.getObjectValue)("listEditor","priority",staticListTasks);


        
        let task = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.createTaskTemplate)(taskText,currentDate,priority);
        let boardIndex = findListEditorBoardIndex();
        // //console.log(boardIndex);
        // //console.log(task,"the current task")

        // //console.log(index, "the current value of index")

         if (typeof index != "undefined") {
            let currentTask = getTaskByListIndex(index);

             if (isUpComing && currentTask.boardIndex != "undefined") {
                 let navIndex = currentTask.navIndex;
                 let boardIndex = currentTask.boardIndex;
                 let taskIndex = currentTask.taskIndex
                 updateNavTasks(navIndex,boardIndex,taskIndex,task)
             }
            staticListTasks[boardIndex].tasks[index] = task;
            let tasks = staticListTasks[boardIndex].tasks;
            staticListTasks[boardIndex].changedBoardLists = tasks;

         } else {
             staticListTasks[boardIndex].tasks.push(task);
             let tasks = staticListTasks[boardIndex].tasks;
            //  //console.log(tasks, "the current tasks")
             staticListTasks[boardIndex].changedBoardLists = tasks;
         }
        //  //console.log(staticListTasks[boardIndex].changedBoardLists, "static change board lists");
        //  //console.log(staticListTasks[boardIndex].tasks, "taskos")

        renderBoardLists();
    }





    const shadeButtonByClass = (className,color) => {
        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        let buttons = elements.button;
        let button = buttons.filter(button => button.getAttribute("class") == className)[0];
        let buttonParagraph = Array.from(button.children)[0];
        // //console.log(buttonParagraph,"The current button paragraph")
        buttonParagraph.style.background = color;

    }

    const shadeButtonByPriority = (priority) => {


        if (priority == "High") shadeButtonByClass("button high","red");
        else if (priority == "Medium") shadeButtonByClass("button medium", "#ff9800");
        else if (priority == "Low") shadeButtonByClass("button low", "green");

    }




    const changeListEditorPriority  = (currentPriority) => {
        let listEditor = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.findObjectByName)("listEditor",staticListTasks);
        // //console.log(listEditor, "current list editor")
        listEditor.priority = currentPriority;
        

    }


    const shadeButtonColor = (event) => {
        ;(0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.unshadeButtons)();
        let paragraph;
        if (event.target.getAttribute("class") == "button high" ||
            event.target.getAttribute("class") == "button medium" ||
            event.target.getAttribute("class") == "button low"
        ) paragraph = Array.from(event.target.children)[0];
        
        // //console.log(paragraph, "the current paragraph")

        if (event.target.getAttribute("class") == "highText") {
            event.target.style.background = "red";
            changeListEditorPriority("High")

        } else if (event.target.getAttribute("class") == "mediumText"){
            event.target.style.background = "#ff9800";
            changeListEditorPriority("Medium")

        } else if (event.target.getAttribute("class") == "lowText"){
            event.target.style.background = "green";
            changeListEditorPriority("Low")
        } else if (event.target.getAttribute("class") == "button high"){
            paragraph.style.background = "red";
            changeListEditorPriority("High")

        } else if (event.target.getAttribute("class") == "button medium"){
            paragraph.style.background = "#ff9800";
            changeListEditorPriority("Medium")
        } else if (event.target.getAttribute("class") == "button low"){
            paragraph.style.background = "green";
            changeListEditorPriority("Low")
        }
    }



    const deleteBoard = (event) => {
        // //console.log(staticListTasks, " the static list tasks");
        // //console.log(send.retrieveData(index), "send retrieve index")

        staticListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeItem)(staticListTasks, event.target.boardIndex);
    

        // //console.log(staticListTasks, "static list tasks");
        changedListTasks = staticListTasks
        // //console.log(changedListTasks, "the changed list tasks");
        renderListTasks();

    }

    const removeEditTitleMenu = () => {
        staticListTasks.forEach(task => {
            let newTasks = task.changedBoardLists;
            newTasks = newTasks.filter(list => list.editBoard != true);
            task.changedBoardLists = newTasks;
        })
        
    }


    



    const editBoard = (event) => {
        let index = event.target.boardIndex;


        removeEditTitleMenu();
        

        // //console.log(index, " the index")
        let changedBoardLists = staticListTasks[index].changedBoardLists
        // //console.log(changedBoardLists, " the changed board lists")
    
        let currentText = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.getElementByBoardIndex)(index,"exampleBoardText").textContent;


        let editBoardTemplate = {editBoard: true, text:currentText};
        let newArray = [];
        newArray.push(editBoardTemplate);
        let finalArray = newArray.concat(changedBoardLists);

        staticListTasks[index].changedBoardLists = finalArray;

        // //console.log(staticListTasks[index].changedBoardLists, "changed boar list")
        currentIndex = index;
        renderBoardLists(true);
        
    }

    const addListEditorClick = (event) => {
        let boardIndex = event.target.boardIndex;
        addListEditor(boardIndex)


    }

    


    const addListEditor = (boardIndex,index,text,date,priority) => {


        removeListEditor()
    
        // //console.log("adding list editor")
        // //console.log(boardIndex, "the current board index")


    
        let finalArray;
        let listEditorTemplate;
        let currentDate = new Date();

        // //console.log(index, "the current index")
        // //console.log(typeof index != "undefined")
        // //console.log(priority, "the current priority")

        // //console.log(index, "the current index")
       //  //console.log(date, "the current date")
        
        if (typeof index != "undefined")  listEditorTemplate = {listEditor: true, text:text,date: date,
                                                                priority:priority, boardIndex:boardIndex, index: index};
        else listEditorTemplate = {listEditor: true, text:"",date:currentDate,
                                    priority: "High",boardIndex:boardIndex, creatingTask: true};
        
       
        //  //console.log(listEditorTemplate.priority, "list editor priority")

    

        if (typeof index != "undefined") {
        
            let newTasks = staticListTasks[boardIndex].changedBoardLists;
            newTasks.splice(index +1,0,listEditorTemplate);
            finalArray = newTasks
        } else {
            let listBoardArray = [listEditorTemplate];
            let newTasks = staticListTasks[boardIndex].changedBoardLists;
            finalArray = newTasks.concat(listBoardArray);

        }



        staticListTasks[boardIndex].changedBoardLists = finalArray;

        renderBoardLists();
    }


    const changeName = (event) => {
        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        let boardText = elements.boardContentTextBox[0].value;
        if (boardText.length == 0 ){
            removeEditTitleMenu();
            renderBoardLists();
            return;
        }   
 //       //console.log(exampleText, "the example text")

        
      //  //console.log(boardText, " current board text")
     //   console.frendlog(exampleText, "the example text content")
        let newTasks = staticListTasks[currentIndex].changedBoardLists;
        newTasks = newTasks.filter(task => task.editBoard != true)
        
        staticListTasks[currentIndex].changedBoardLists = newTasks;
        staticListTasks[currentIndex].text = boardText;

        // //console.log(staticListTasks, "the static list tasks")

        renderListTasks();
    

    }


//dom element names come from the updated element types



    const renderEditBoardTextValues  = () => {
        let index = 0;
        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        staticListTasks.forEach(task => {
            task.changedBoardLists.forEach(list =>{
                // //console.log(index, " the current index")
                if (list.editBoard){
                    let currentText = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.findBoardTextBox)(index);
                    // //console.log(currentText, " the current text")
                    list.text = currentText;
                }

            })
            index++;
        })
    }





    const renderBoardLists = (isChangedName) => {


        removeListBindings();
        removeBoardOverlay();
        let indexesLength = staticListTasks.length;
        //console.log(staticListTasks, "the static list tasks")

        console.log(staticListTasks, "the static list task")
        for (let i = 0; i < indexesLength; i++) {
             //console.log(i, "the index")
            if (staticListTasks.length != 0)renderSingleBoardList(i);

        }

        if (!isChangedName)addListBindings();
        else addChangeNameBinding();
    }




    const removeBoardOverlay = () => {
        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        elements.boardOverlay.forEach(element => {
            element.style.display = "none";
        })
    }


    const addBoardOverlay = (index) => {
        let boardOverlay = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.getElementByBoardIndex)(index,"boardOverlay");
        boardOverlay.style.display = "block";

    }



    const renderSingleBoardList = (index) => {
        console.log(renderSingleBoardList, "render single board list")
        let taskList = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.getElementByBoardIndex)(index, "taskLists");
        let addDate = false;
        let date;
        console.log(taskList, "the current task list")

       // //console.log(taskHolder, "the task holder")
        taskList.innerHTML = "";
  ////      console.log(taskList, "the current task list")
 //       //console.log(index, "the index");
//        //console.log(staticListTasks[index], "static list current index");
        // //console.log(staticListTasks[index], "static list tasks indexes")
        // //console.log(staticListTasks[index].changedBoardLists, "static change board lists")

        staticListTasks[index].changedBoardLists.forEach(task => {
            // console.log(task, "each individual task")
            if (task.editBoard){
                let boardText = (0,_template_js__WEBPACK_IMPORTED_MODULE_4__.createBoardEditor)(task);
                taskList.innerHTML += boardText;
                addBoardOverlay(index);
            } else if (task.listEditor){

                
           

                let listText= (0,_template_js__WEBPACK_IMPORTED_MODULE_4__.createListEditor)(task);
                taskList.innerHTML += listText;
                // //console.log(task.listEditor, "task list editor date")
                // //console.log(task.priority, "task priority")
                shadeButtonByPriority(task.priority);
                date = task.date;
                addDate = true;


            } else if (task.listTask){
                // console.log(task, "the current task")
                let taskText = (0,_template_js__WEBPACK_IMPORTED_MODULE_4__.createTask)(task);
                // console.log(taskText, "the current task text");
                taskList.innerHTML += taskText;
                // console.log(taskList," the text list")




            }
        })
     


        if (addDate) setTaskDate(date);
        let taskListChildren = Array.from(taskList.children)
       console.log(taskList, "current task list")
        let boardIndex = taskList.boardIndex;
        (0,_assign_js__WEBPACK_IMPORTED_MODULE_5__.assignTaskIndex)(taskListChildren,boardIndex);



    }


    const setTaskDate = (date) => {
        let element = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        let datePicker = element.datePicker[0];
        datePicker.valueAsDate = date;
    }
     

    const addBoardTaskKeys = (event) => {
     //   //console.log(event.key);
        if (event.key == "Enter") {
            addBoardTasks();
        }
    }


    const renderListEditorValue = () => {
        let listEditor = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.findObjectByName)("listEditor",staticListTasks);
        if (!listEditor) return;

        // //console.log(listEditor, "the current list editor")


        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        let datePicker = elements.datePicker[0];
        let taskTextBox = elements.taskTextBox[0];

        // //console.log(datePicker);
        // //console.log(taskTextBox);
        // if(datePicker) //console.log(datePicker.valueAsDate, "date picker current date");
        // if (taskTextBox)//console.log(taskTextBox.value, "textbox")
        if (datePicker)  listEditor.date = datePicker.valueAsDate;
        if (taskTextBox) listEditor.text = taskTextBox.value;

        
    }
    
    const addBoardTasks = () => {
        // //console.log("adding board tasks")


        renderListEditorValue();
        let elements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_2__.getUpdatedElements)();
        let text = elements.boardTextBox[0].value;
        if(text.length == 0) text = "New Board";
        let task = createBoardTemplate(text);
        staticListTasks.push(task);
        changedListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(staticListTasks)

    //    //console.log(staticListTasks, "the static list tasks")

        renderListTasks();
    }

    const addToDoTasks = (currentIndex) => {
        

    }



    const createBoardTemplate =(currentText,tasks) => {
        let currentTasks = [];
        if (typeof tasks != "undefined") currentTasks = tasks; 

        let board = {board: true, text:currentText, tasks: currentTasks, changedBoardLists: [], };


        return board;
    }
    

    const createUpComingTemplate = (currentText, tasks) => {
        let currentTasks = [];
        if (typeof tasks != "undefined") currentTasks = tasks; 

        let board = {isUpComingBoard: true,text:currentText, tasks: currentTasks, changedBoardLists: [], };
        return board;


    }



    const sortDatesByLatestDay = (timeTasks) => {
        let newTimeTasks = timeTasks;
        newTimeTasks.sort((timeTask1, timeTask2) => {
            let days2 = (0,date_fns_getDayOfYear__WEBPACK_IMPORTED_MODULE_6__["default"])(timeTask2.date);
            let days1 = (0,date_fns_getDayOfYear__WEBPACK_IMPORTED_MODULE_6__["default"])(timeTask1.date);
            return days2 - days1;
        })
        return newTimeTasks;

    }


    const getTaskTimeValues = () => {
        let navs = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.getAllData();
        let navKeys = Object.keys(navs);


        console.log(navs, "the navs");
        
        let todayTasks = [];
        let weekTasks = []
        


        navKeys.forEach(key => {
            let boardIndex = 0;
            navs[key].forEach(board => {
                let taskIndex = 0;
                board.tasks.forEach(task => {
                    task.taskIndex = taskIndex;
                    task.boardIndex = boardIndex;
                    task.navIndex = key;
                    task.navName = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.retrieveTitle(key);
                    console.log(task.navName,"current nav name")
                    if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_7__["default"])(task.date)) todayTasks.push(task)
                    if ((0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_8__["default"])(task.date)) weekTasks.push(task);
                    taskIndex++;
   
                })
                boardIndex++;
            })
        })



        console.log(navs, "the after navs")


        todayTasks = sortDatesByLatestDay(todayTasks);
        weekTasks = sortDatesByLatestDay(weekTasks);

        return {todayTasks, weekTasks};
    }






    const addUpComingBoards = (array) => {
        let newArray = array;
        let todayBoard = createUpComingTemplate("Today", []);
        let weekBoard = createUpComingTemplate("Week",[]);
        let timeBoards = [todayBoard,weekBoard];
        timeBoards.forEach(board => newArray.push(board));
        return newArray;



    }


    const renderListTasks = (isEmpty) => {
        //console.log("rendering list tasks")
        renderEditBoardTextValues();
        removeContentBindings();
        removeListBindings(); 


        

        if (!isEmpty &&  !isUpComing){
            let newTasks = changedListTasks.filter(task => task.addBoard != true);
            changedListTasks = newTasks;
           changedListTasks.push({addBoard: true});

        }
        
        
        dom.pageContent.innerHTML = "";
        changedListTasks.forEach(task => {
            if (task.board){
                let board = (0,_template_js__WEBPACK_IMPORTED_MODULE_4__.createBoard)(task);
                dom.pageContent.innerHTML += board
            } else if (task.addBoard){
                let addBoard = (0,_template_js__WEBPACK_IMPORTED_MODULE_4__.createAddBoard)();
                dom.pageContent.innerHTML += addBoard;
            } else if (task.isUpComingBoard){
                let upComingBoard = (0,_template_js__WEBPACK_IMPORTED_MODULE_4__.createUpComingBoard)(task);
                dom.pageContent.innerHTML += upComingBoard;
            }
        })       

        
        addContentBindings();
        (0,_assign_js__WEBPACK_IMPORTED_MODULE_5__.assignBoardElements)();
        renderBoardLists();
    }




    const setChangedToDoListsEmpty = () => {
        staticListTasks.forEach(task => {
            task.changedBoardLists = [];

        })
    }

    const setChangedToDoLists = () => {
        staticListTasks.forEach(task => {
            task.changedBoardLists =  task.tasks;
        })
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

    const activateNavContent = () => {
        let newTasks = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.retrieveData(index);
        // //console.log(newTasks, " the new task")
        //console.log(newTasks,"current new task")
        if (!newTasks){
            _send_js__WEBPACK_IMPORTED_MODULE_1__.send.sendData([],index,name)
            newTasks = _send_js__WEBPACK_IMPORTED_MODULE_1__.send.retrieveData(index);
        }


        //console.log(newTasks, "current new task")

        staticListTasks = newTasks;


        //console.log(staticListTasks, "the static list tasks")
        changedListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(staticListTasks)
        setChangedToDoLists();

    }

    const activateUpComingContent = () => {
        staticListTasks = [];
        staticListTasks = renderTimeTasks(staticListTasks);
        console.log(staticListTasks, "the static list tasks");

        isUpComing = true;
        changedListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(staticListTasks)
      
    }




    const disruptContent = (objectIndex) => {
            staticListTasks = [];
            index = null;
            if (objectIndex < 0) {
                renderListTasks(true);
                canDisrupt = true;
            } 

        }


    const activateContent = (objectIndex, disruptFlow,objectName) => {
        changedListTasks = [];
        setChangedToDoListsEmpty();
        isUpComing = false;
        canDisrupt = false;

        if (disruptFlow) {
            disruptContent(objectIndex)
            if (canDisrupt) return;
        }

        if (typeof index == "number"){
            _send_js__WEBPACK_IMPORTED_MODULE_1__.send.sendData(staticListTasks,index,name);  
        } 
        index = objectIndex;
        name = objectName;

        if (index == "upcoming"){
            activateUpComingContent();
        } else {
            activateNavContent();


        }




        console.log(staticListTasks, "new times")
        renderListTasks();
    }

    return {activateContent,removeTaskBindings, addTaskBindings };
    




}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsV0FBVyxTQUFTLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFNBQVMsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGVBQWUsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxjQUFjLFFBQVEsS0FBSyxXQUFXLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsWUFBWSxlQUFlLFFBQVEsS0FBSyxVQUFVLFFBQVEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlB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SyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsUUFBUSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksUUFBUSxLQUFLLFVBQVUsYUFBYSxTQUFTLEtBQUssV0FBVyxVQUFVLE1BQU0sVUFBVSxVQUFVLFdBQVcsWUFBWSxnQkFBZ0IsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksZUFBZSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxVQUFVLE9BQU8sVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxjQUFjLFFBQVEsS0FBSyxXQUFXLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLFFBQVEsUUFBUSxLQUFLLFlBQVksT0FBTyx1RUFBdUUsNEJBQTRCLHlCQUF5Qix1QkFBdUIseURBQXlELDRnQkFBNGdCLHFCQUFxQixxREFBcUQsaUNBQWlDLHlCQUF5Qix1QkFBdUIsNkRBQTZELG9pQkFBb2lCLHFCQUFxQixxQkFBcUIsa0JBQWtCLHFCQUFxQix3Q0FBd0Msa0NBQWtDLG9CQUFvQixPQUFPLHFDQUFxQyxvQkFBb0IsdUJBQXVCLG1CQUFtQix5QkFBeUIsaUJBQWlCLCtCQUErQixzQkFBc0IsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcseUNBQXlDLDRDQUE0QyxHQUFHLHFCQUFxQixtQkFBbUIsR0FBRyxxQkFBcUIscUJBQXFCLHlCQUF5QixHQUFHLHdCQUF3QixpQkFBaUIsZ0JBQWdCLEdBQUcsdUJBQXVCLDBCQUEwQixnQkFBZ0IseUJBQXlCLEtBQUssMkJBQTJCLHNCQUFzQixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxtQkFBbUIsb0JBQW9CLFNBQVMscUJBQXFCLHNCQUFzQix3QkFBd0Isa0JBQWtCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG1CQUFtQixNQUFNLHFCQUFxQixtQkFBbUIsR0FBRyxxQkFBcUIsMkJBQTJCLEdBQUcseUJBQXlCLGdCQUFnQix5QkFBeUIsS0FBSyx1QkFBdUIsb0JBQW9CLFNBQVMsNkJBQTZCLG1CQUFtQixtQkFBbUIsZ0JBQWdCLGtDQUFrQyxrQ0FBa0MsWUFBWSwyQkFBMkIseUJBQXlCLHlCQUF5QixpQkFBaUIsZ0NBQWdDLFVBQVUsaUJBQWlCLHVCQUF1QixzQkFBc0Isb0JBQW9CLG1CQUFtQixtQkFBbUIsd0JBQXdCLHNCQUFzQixJQUFJLGtCQUFrQix1QkFBdUIsa0JBQWtCLG1CQUFtQiw0QkFBNEIsMEJBQTBCLE9BQU8sZUFBZSx1QkFBdUIsR0FBRywwRUFBMEUsa0NBQWtDLFNBQVMscUNBQXFDLDZCQUE2QixHQUFHLG1CQUFtQix1Q0FBdUMsbUJBQW1CLG1CQUFtQixpQkFBaUIsbUNBQW1DLHlCQUF5QixlQUFlLHdCQUF3QixjQUFjLG1CQUFtQix3QkFBd0IsMEJBQTBCLDhCQUE4QixtQkFBbUIscUJBQXFCLDJCQUEyQixXQUFXLG1CQUFtQixHQUFHLG9CQUFvQixpQkFBaUIsa0JBQWtCLGdCQUFnQixzQkFBc0IseURBQXlELGtDQUFrQyw0QkFBNEIsV0FBVyxpQkFBaUIsa0NBQWtDLGtCQUFrQix3Q0FBd0Msa0JBQWtCLHdCQUF3QixPQUFPLHNCQUFzQixzQkFBc0Isd0JBQXdCLEdBQUcsMEJBQTBCLDRDQUE0QyxrQkFBa0IsR0FBRywrQ0FBK0MscUJBQXFCLHFCQUFxQix1QkFBdUIsT0FBTyxxQkFBcUIsdUJBQXVCLE9BQU8scUJBQXFCLHVCQUF1QixPQUFPLHNCQUFzQix1QkFBdUIsT0FBTyxtQkFBbUIsaUNBQWlDLE9BQU8scUJBQXFCLHFCQUFxQixzQkFBc0Isb0NBQW9DLHVCQUF1QixrQ0FBa0MsT0FBTywyQkFBMkIseUJBQXlCLHNDQUFzQyxPQUFPLDZCQUE2QixtQ0FBbUMsNEJBQTRCLE9BQU8scUJBQXFCLG9CQUFvQixTQUFTLDJCQUEyQixrQ0FBa0MsT0FBTyxrQkFBa0IsNkJBQTZCLFNBQVMsdUJBQXVCLHdCQUF3QiwyQkFBMkIsc0JBQXNCLHNCQUFzQiwwQkFBMEIsT0FBTyxHQUFHLDhDQUE4QyxpQ0FBaUMscUJBQXFCLE9BQU8sR0FBRyw4Q0FBOEMsaUNBQWlDLHVCQUF1QixPQUFPLEdBQUcsNkNBQTZDLGtCQUFrQiw2QkFBNkIsT0FBTyxHQUFHLGtEQUFrRCxnQ0FBZ0MsNEJBQTRCLE9BQU8sS0FBSyx1QkFBdUI7QUFDbG5jO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3ZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsZUFBZSxnQkFBZ0IsdUJBQXVCLEdBQUcsYUFBYSxtQkFBbUIsb0NBQW9DLG1CQUFtQixHQUFHLG1CQUFtQiwwQkFBMEIsc0NBQXNDLG9CQUFvQixpQkFBaUIsaUJBQWlCLG1CQUFtQiwrQkFBK0IseUJBQXlCLFNBQVMsb0JBQW9CLHdDQUF3Qyx3QkFBd0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsNkJBQTZCLDhCQUE4Qiw4QkFBOEIsT0FBTyxvQkFBb0IsMkJBQTJCLGtCQUFrQixHQUFHLGlCQUFpQixzQkFBc0Isa0JBQWtCLGtCQUFrQixlQUFlLGtCQUFrQix3Q0FBd0MsMkJBQTJCLEtBQUssc0JBQXNCLGtDQUFrQyxHQUFHLDBEQUEwRCxrQkFBa0IsR0FBRyxhQUFhLHdGQUF3RixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksZUFBZSxlQUFlLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsNEJBQTRCLGVBQWUsZ0JBQWdCLHVCQUF1QixHQUFHLGFBQWEsbUJBQW1CLG9DQUFvQyxtQkFBbUIsR0FBRyxtQkFBbUIsMEJBQTBCLHNDQUFzQyxvQkFBb0IsaUJBQWlCLGlCQUFpQixtQkFBbUIsK0JBQStCLHlCQUF5QixTQUFTLG9CQUFvQix3Q0FBd0Msd0JBQXdCLG1CQUFtQixrQkFBa0IsbUJBQW1CLDZCQUE2Qiw4QkFBOEIsOEJBQThCLE9BQU8sb0JBQW9CLDJCQUEyQixrQkFBa0IsR0FBRyxpQkFBaUIsc0JBQXNCLGtCQUFrQixrQkFBa0IsZUFBZSxrQkFBa0Isd0NBQXdDLDJCQUEyQixLQUFLLHNCQUFzQixrQ0FBa0MsR0FBRywwREFBMEQsa0JBQWtCLEdBQUcseUJBQXlCO0FBQ2xsRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUMEQ7QUFDVztBQUNKO0FBQ1E7QUFDZDtBQUNRO0FBQ047QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQWMsaUJBQWlCOztBQUV4RCw2RUFBNkU7O0FBRTdFO0FBQ0E7QUFDQSxhQUFhLHFFQUFlO0FBQzVCLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOzs7QUFHTixXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFpQixRQUFROztBQUUvQyxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUVBQWlCO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsdUVBQWE7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFlOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNtRTtBQUNuRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakU2QztBQUNBO0FBQ007QUFDVDs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsYUFBYTs7QUFFaEc7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EseUNBQXlDLFVBQVUsMEJBQTBCLE1BQU07QUFDbkYsbURBQW1ELFVBQVU7QUFDN0Q7QUFDQTtBQUNBLGtFQUFrRSxjQUFjO0FBQ2hGLHVFQUF1RSxjQUFjOztBQUVyRjs7QUFFQTtBQUNBLGtEQUFrRCxVQUFVLFNBQVMsZ0RBQVEsQ0FBQztBQUM5RSxrRkFBa0YscUJBQXFCO0FBQ3ZHO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRiw4Q0FBVSxDQUFDO0FBQ3JHLHdGQUF3RixnREFBUSxDQUFDO0FBQ2pHO0FBQ0EscUZBQXFGLEtBQUs7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLFVBQVU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxNQUFNO0FBQ25FO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBVTtBQUM3Qjs7OztBQUlBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVE7QUFDM0I7O0FBRUE7QUFDQTs7O0FBR0EsMEVBQTBFLGFBQWE7QUFDdkY7O0FBRUE7QUFDQSxvRkFBb0YsS0FBSztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxVQUFVLFNBQVMsS0FBSztBQUM1RSxtRUFBbUUsaURBQWEsQ0FBQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUtBO0FBQ29DO0FBQ2M7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLGtFQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtFQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBRzZGO0FBQy9EO0FBQzJDO0FBQ3lGO0FBQ25DOztBQUV6RjtBQUNNO0FBQ0k7Ozs7O0FBSzhCOzs7O0FBSTlFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBLGNBQWMsa0VBQWtCOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLHVCQUF1QixrRUFBa0I7QUFDekMsUUFBUSxpRUFBYztBQUN0QixRQUFRLGlFQUFjO0FBQ3RCLFFBQVEsaUVBQWM7QUFDdEIsUUFBUSxpRUFBYzs7QUFFdEI7Ozs7O0FBS0E7QUFDQTtBQUNBLHVCQUF1QixrRUFBa0I7QUFDekM7QUFDQSxRQUFRLDhEQUFXO0FBQ25CLFFBQVEsOERBQVc7QUFDbkIsUUFBUSw4REFBVzs7QUFFbkIsUUFBUSw4REFBVzs7O0FBR25CO0FBQ0E7OztBQUdBO0FBQ0EsdUJBQXVCLGtFQUFrQjtBQUN6QyxRQUFRLDhEQUFXO0FBQ25CLFFBQVEsK0RBQVc7QUFDbkIsUUFBUSw4REFBVztBQUNuQixRQUFRLDhEQUFXO0FBQ25CLFFBQVEsOERBQVc7QUFDbkIsUUFBUSw4REFBVzs7QUFFbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSx1QkFBdUIsa0VBQWtCO0FBQ3pDLFFBQVEsOERBQVc7QUFDbkI7O0FBRUE7QUFDQSx1QkFBdUIsa0VBQWtCO0FBQ3pDLFFBQVEsaUVBQWM7QUFDdEIsUUFBUSxpRUFBYztBQUN0QixRQUFRLGtFQUFjO0FBQ3RCLFFBQVEsaUVBQWM7QUFDdEIsUUFBUSxpRUFBYztBQUN0QixRQUFRLGlFQUFjO0FBQ3RCLFFBQVEsaUVBQWM7QUFDdEI7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7QUFLQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7O0FBT0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsdUJBQXVCLHFEQUFlO0FBQ3RDO0FBQ0EsUUFBUSx3REFBa0I7QUFDMUI7OztBQUdBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsa0VBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdFQUFpQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDZEQUFjOzs7QUFHckM7QUFDQSxtQkFBbUIsaUVBQWtCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O0FBTUE7QUFDQSx1QkFBdUIsa0VBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBLHlCQUF5QiwrREFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLFFBQVEsOERBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLDZEQUFVO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFFQUFzQjs7O0FBR2hELGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLHVCQUF1QixrRUFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQSx1QkFBdUIsa0VBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLCtEQUFnQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUOzs7Ozs7QUFNQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0EsdUJBQXVCLGtFQUFrQjtBQUN6QztBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBLDJCQUEyQixxRUFBc0I7QUFDakQ7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0EsdUJBQXVCLHFFQUFzQjtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLCtEQUFpQjtBQUNqRDtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBOztBQUVBLDhCQUE4Qiw4REFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxjQUFjO0FBQ2Q7QUFDQSwrQkFBK0Isd0RBQVU7QUFDekM7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWU7Ozs7QUFJdkI7OztBQUdBO0FBQ0Esc0JBQXNCLGtFQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EseUJBQXlCLCtEQUFnQjtBQUN6Qzs7QUFFQTs7O0FBR0EsdUJBQXVCLGtFQUFrQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHVCQUF1QixrRUFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkRBQVE7O0FBRW5DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7OztBQUdyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjs7O0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQVk7QUFDcEMsd0JBQXdCLGlFQUFZO0FBQ3BDO0FBQ0EsU0FBUztBQUNUOztBQUVBOzs7QUFHQTtBQUNBLG1CQUFtQixxREFBZTtBQUNsQzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3REFBa0I7QUFDckQ7QUFDQSx3QkFBd0IsNERBQU87QUFDL0Isd0JBQXdCLCtEQUFVO0FBQ2xDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7OztBQUlUOzs7QUFHQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxlQUFlOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseURBQVc7QUFDdkM7QUFDQSxjQUFjO0FBQ2QsK0JBQStCLDREQUFjO0FBQzdDO0FBQ0EsY0FBYztBQUNkLG9DQUFvQyxpRUFBbUI7QUFDdkQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFFBQVEsK0RBQW1CO0FBQzNCO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHVEQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFhO0FBQ3pCLHVCQUF1Qix1REFBaUI7QUFDeEM7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBLDJCQUEyQiwyREFBUTtBQUNuQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiwyREFBUTtBQUNuQztBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtREFBYTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjs7O0FBR0E7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7Ozs7QUFLQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvYm9hcmQuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9uYXZpZ2F0aW9uLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2JvYXJkLmNzcz9hNjFlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9uYXZpZ2F0aW9uLmNzcz84MjAyIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL2VsZW1lbnRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9lbWl0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvcGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3NlbmQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGFtYnVyZ2VyTWVudS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18sIHsgaGFzaDogXCIjUm9ib3RvXCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICAgIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcblxcblxcblxcblxcbiAgLnBhZ2VDb250ZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbn1cXG5cXG4uYWRkQm9hcmQge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTk4LCAxOTgsIDE5OCk7XFxuICAgIG1hcmdpbjoxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xcbiAgICBcXG4gIFxcbn1cXG5cXG5cXG5cXG5cXG5cXG5pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi5ib2FyZENvbnRlbnQge1xcblxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5OCwgMTk4LCAxOTgpO1xcbiAgICB3aWR0aDogMjkwcHg7XFxuICAgIG1hcmdpbjoxMHB4O1xcblxcblxcbiAgICBcXG4gICAgcGFkZGluZy1ib3R0b206NXB4O1xcbn1cXG5cXG4uYm9hcmRPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuMjk5KTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB0b3A6MDtcXG4gICAgei1pbmRleDoxO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5kZWxldGVCb2FyZCwgLmVkaXRCb2FyZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnRhc2tIb2xkZXIge1xcblxcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuXFxuLnRhc2tUZXh0Qm94IHtcXG4gICAgd2lkdGg6MTM1cHg7XFxufVxcbi5leGFtcGxlQm9hcmRUZXh0IHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHRvcDo0cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VcXG59XFxuXFxuXFxuLmFkZEJvYXJkVGV4dCB7XFxuICAgIG1hcmdpbi10b3A6NXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcblxcblxcbn1cXG5cXG5cXG5cXG4udGFzaywgLm5vdFRhc2t7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIzNywgMjMwLCAyMzApO1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkO1xcbiAgICBtYXJnaW46MTBweDtcXG59XFxuXFxuLnRhc2tUb29scyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG5cXG59XFxuLnRvb2xzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG5cXG4udGFza0xhYmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6NXB4O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcblxcbiAgICBib3JkZXI6IDA7XFxuXFxufVxcbi5nZW5lcmFsVGV4dCB7XFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuXFxufVxcblxcbi5nZW5lcmFsVGV4dEhvbGRlciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuXFxuXFxuXFxuLmNpcmNsZUljb24ge1xcbiAgICB3aWR0aDoxMHB4O1xcbiAgICBoZWlnaHQ6MTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcbi5lZGl0LCAubm90RWRpdHtcXG4gICAgd2lkdGg6MjBweDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDo2cHg7XFxufVxcblxcbi5jaXJjbGVJY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpibGFjaztcXG59XFxuXFxuXFxuXFxuLnRhc2tBZGRlciB7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuXFxuXFxuLnRhc2tBZGRlcjpob3ZlciB7XFxuICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgYmFja2dyb3VuZDpyZ2IoMTc4LCAxNzgsIDE3OCk7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcbi5wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgbWFyZ2luOjVweDtcXG5cXG59XFxuLmVkaXRUb29scyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgd2lkdGg6NTBweDtcXG5cXG59XFxuLmRhdGVUb29sIHtcXG4gICAgbWFyZ2luOjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjE0cHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuLnRhc2tUZXh0Qm94IHtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOjVweDtcXG59XFxuXFxuLmVkaXRUb29sSG9sZGVyIHtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmRhdGVQaWNrZXIge1xcbiAgICBtYXJnaW4tbGVmdDo1cHg7XFxuICAgIHdpZHRoOjEzNXB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgYm9yZGVyOjA7XFxufVxcblxcblxcblxcbi50YXNrRWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNywgMjMwLCAyMzApO1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjpyZ2IoMTk3LCA2MywgNjMpO1xcbn1cXG5cXG5cXG4udGFza1RleHRCb3h7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW46NXB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG4uYnV0dG9ucyAuYnV0dG9uIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmOTgwMDtcXG59XFxuXFxuXFxuLm5vdFRhc2sge1xcbiAgICBcXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyBcXG4gICAgIGNvbG9yOmdyZXk7IFxcbiB9IFxcblxcbi5ub3RFZGl0IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjAlKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDIwNzYlKSBodWUtcm90YXRlKDg2ZGVnKSBicmlnaHRuZXNzKDExOCUpIGNvbnRyYXN0KDEwJSk7XFxufVxcblxcblxcblxcbi5sb3cge1xcblxcbiAgICBib3JkZXI6NXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4ubG93OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpncmVlbjtcXG59XFxuXFxuLmhpZ2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJlZDtcXG59XFxuXFxuLm1lZGl1bTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjk4MDA7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgaGVpZ2h0OjE1cHg7XFxuICAgIHdpZHRoOjM1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIG1hcmdpbjoycHg7IFxcblxcbn1cXG5cXG5cXG4uYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnRyYXNoSXQsIC5maW5pc2hlZCwgLmV4aXRFZGl0b3J7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RUeXBlVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBib3R0b206MnB4O1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6MDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYm9yZGVyOjA7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG4uYWRkQm9hcmRlclRleHRCb3gge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOjIyMHB4O1xcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIHdpZHRoOjQwcHg7XFxuICAgIGhlaWdodDo0MHB4O1xcbiAgICBib3JkZXIgOjA7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcbi5lZGl0Qm9hcmQsIC5kZWxldGVCb2FyZCB7XFxuICAgIHdpZHRoOjIwcHg7XFxufVxcblxcbi5lZGl0RXhhbXBsZUljb25zIHtcXG5cXG4gICAgaGVpZ2h0OjI1cHg7XFxuICAgIFxcbiAgICBkaXNwbGF5OmZsZXg7XFxuXFxuXFxufVxcblxcbi5lbXB0eXJvdyB7XFxuICAgXFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgXFxufVxcblxcbi5lZGl0Qm9hcmQsIC5kZWxldGVCb2FyZCB7XFxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XFxuXFxuXFxufVxcblxcbi5ib2FyZHRleHRCb3gge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGJvcmRlcjowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIFxcbiBcXG59XFxuXFxuLmJvYXJkVGV4dEVkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIxNSwgMjEzLCAyMTMpO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgei1pbmRleDoxO1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG5cXG5cXG5cXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcblxcbiBcXG5cXG59XFxuXFxuXFxuLmNoYW5nZUJvYXJkVGl0bGVCdXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xcblxcbiAgICAuZWRpdEV4YW1wbGVJY29ucyB7XFxuICAgICAgICBoZWlnaHQ6MTVweDtcXG4gICAgfVxcblxcbiAgICAuZW1wdHlyb3cge1xcbiAgICAgICAgaGVpZ2h0OjE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmRlbGV0ZUJvYXJkLCAuZWRpdEJvYXJkIHtcXG4gICAgICAgIHdpZHRoOjEycHg7XFxuICAgIH1cXG5cXG5cXG5cXG4gICAgLmJvYXJke1xcbiAgICAgICAgd2lkdGg6MTg1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tMYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6eHgtc21hbGxcXG4gICAgfVxcblxcbiAgICAuZWRpdCB7XFxuXFxuICAgICAgICB3aWR0aDoxMHB4O1xcbiAgICAgICAgXFxuXFxuICAgIH1cXG5cXG4gICAgLmdlbmVyYWxUZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTo2cHg7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICBcXG4gICAgLmV4YW1wbGVCb2FyZFRleHQge1xcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZHRleHRCb3gge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkIHtcXG4gICAgXFxuICAgICAgICB3aWR0aDoxODVweDtcXG4gICAgICBcXG4gICAgfVxcbiAgICAuY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6eC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmRlclRleHRCb3gge1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICAgICAgd2lkdGg6MTYwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5hZGRCb2FyZGVyQnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAudGFzaywgLm5vdFRhc2sge1xcbiAgICAgICAgbWFyZ2luOjVweDsgXFxuICAgIH1cXG4gICAgLmNpcmNsZUljb24ge1xcbiAgICAgICAgd2lkdGg6MnB4O1xcbiAgICAgICAgaGVpZ2h0OjJweFxcbiAgICB9XFxuXFxuICAgIC50YXNrSG9sZGVyVGV4dCwgLmRhdGVUZXh0LCAuYnV0dG9uVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6eHgtc21hbGw7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAudGFza1Rvb2xzIHtcXG4gICAgICAgIFxcbiAgICAgICAgcGFkZGluZy1yaWdodDo1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6NXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDo1cHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLnRhc2tUZXh0Qm94IHtcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmRhdGVQaWNrZXIge1xcbiAgICAgICAgd2lkdGg6ODBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgIH1cXG5cXG5cXG4gICAgXFxuICAgIC5oaWdoIHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gICAgfVxcblxcbiAgICAubWVkaXVtIHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsMjAyLDEwKTtcXG4gICAgfVxcblxcbiAgICAubG93IHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xcbiAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrLCAubm90VGFzayB7XFxuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAudGFza0VkaXRvciB7XFxuICAgICAgICBib3JkZXItbGVmdDogIDRweCBzb2xpZDtcXG4gICAgfVxcblxcblxcblxcblxcbiAgICAuYnV0dG9uIHtcXG5cXG4gICAgICAgIGhlaWdodDoxMHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDoyMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA2cHg7XFxuICAgIH1cXG5cXG4gICAgLmVkaXRUb29scyB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgfVxcblxcbiAgICAudHJhc2hJdCwgLmZpbmlzaGVkLCAuZXhpdEVkaXRvciB7XFxuICAgICAgICB3aWR0aDoxNXB4O1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrQWRkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcblxcblxcblxcbn1cXG5cXG4udGFzaywgLm5vdFRhc2sge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkJBQTJCO0FBQzNCO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNENBQWlELEVBQUUscUJBQXFCO0lBQ3hFOzs7Ozs4REFLc0UsRUFBRSxlQUFlO0VBQ3pGOzs7Ozs7RUFNQTtJ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O0lBR2Q7O0lBRUE7UUFDSSxhQUFhOztJQUVqQjs7O0lBR0E7UUFDSSxxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjs7SUFFQTs7UUFFSSxXQUFXOztJQUVmO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksU0FBUztRQUNUO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7O0lBRXRCOztJQUVBOztRQUVJLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsY0FBYzs7SUFFbEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixjQUFjO1FBQ2QsV0FBVztJQUNmOzs7O0lBSUE7UUFDSSxxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxpQ0FBaUM7SUFDckM7O0lBRUE7UUFDSSx1QkFBdUI7O0lBRTNCOztJQUVBO1FBQ0ksc0JBQXNCOztJQUUxQjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7Ozs7SUFLQTs7UUFFSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksVUFBVTs7SUFFZDs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7OztBQUlKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5zdmcjUm9ib3RvJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcblxcblxcblxcblxcbiAgLnBhZ2VDb250ZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbn1cXG5cXG4uYWRkQm9hcmQge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTk4LCAxOTgsIDE5OCk7XFxuICAgIG1hcmdpbjoxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xcbiAgICBcXG4gIFxcbn1cXG5cXG5cXG5cXG5cXG5cXG5pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi5ib2FyZENvbnRlbnQge1xcblxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5OCwgMTk4LCAxOTgpO1xcbiAgICB3aWR0aDogMjkwcHg7XFxuICAgIG1hcmdpbjoxMHB4O1xcblxcblxcbiAgICBcXG4gICAgcGFkZGluZy1ib3R0b206NXB4O1xcbn1cXG5cXG4uYm9hcmRPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuMjk5KTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB0b3A6MDtcXG4gICAgei1pbmRleDoxO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5kZWxldGVCb2FyZCwgLmVkaXRCb2FyZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnRhc2tIb2xkZXIge1xcblxcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuXFxuLnRhc2tUZXh0Qm94IHtcXG4gICAgd2lkdGg6MTM1cHg7XFxufVxcbi5leGFtcGxlQm9hcmRUZXh0IHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHRvcDo0cHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VcXG59XFxuXFxuXFxuLmFkZEJvYXJkVGV4dCB7XFxuICAgIG1hcmdpbi10b3A6NXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcblxcblxcbn1cXG5cXG5cXG5cXG4udGFzaywgLm5vdFRhc2t7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIzNywgMjMwLCAyMzApO1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkO1xcbiAgICBtYXJnaW46MTBweDtcXG59XFxuXFxuLnRhc2tUb29scyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG5cXG59XFxuLnRvb2xzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG5cXG4udGFza0xhYmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6NXB4O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcblxcbiAgICBib3JkZXI6IDA7XFxuXFxufVxcbi5nZW5lcmFsVGV4dCB7XFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuXFxufVxcblxcbi5nZW5lcmFsVGV4dEhvbGRlciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuXFxuXFxuXFxuLmNpcmNsZUljb24ge1xcbiAgICB3aWR0aDoxMHB4O1xcbiAgICBoZWlnaHQ6MTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcbi5lZGl0LCAubm90RWRpdHtcXG4gICAgd2lkdGg6MjBweDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDo2cHg7XFxufVxcblxcbi5jaXJjbGVJY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpibGFjaztcXG59XFxuXFxuXFxuXFxuLnRhc2tBZGRlciB7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuXFxuXFxuLnRhc2tBZGRlcjpob3ZlciB7XFxuICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgYmFja2dyb3VuZDpyZ2IoMTc4LCAxNzgsIDE3OCk7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcbi5wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgbWFyZ2luOjVweDtcXG5cXG59XFxuLmVkaXRUb29scyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgd2lkdGg6NTBweDtcXG5cXG59XFxuLmRhdGVUb29sIHtcXG4gICAgbWFyZ2luOjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjE0cHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuLnRhc2tUZXh0Qm94IHtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOjVweDtcXG59XFxuXFxuLmVkaXRUb29sSG9sZGVyIHtcXG5cXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmRhdGVQaWNrZXIge1xcbiAgICBtYXJnaW4tbGVmdDo1cHg7XFxuICAgIHdpZHRoOjEzNXB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgYm9yZGVyOjA7XFxufVxcblxcblxcblxcbi50YXNrRWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNywgMjMwLCAyMzApO1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjpyZ2IoMTk3LCA2MywgNjMpO1xcbn1cXG5cXG5cXG4udGFza1RleHRCb3h7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW46NXB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG4uYnV0dG9ucyAuYnV0dG9uIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmOTgwMDtcXG59XFxuXFxuXFxuLm5vdFRhc2sge1xcbiAgICBcXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyBcXG4gICAgIGNvbG9yOmdyZXk7IFxcbiB9IFxcblxcbi5ub3RFZGl0IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjAlKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDIwNzYlKSBodWUtcm90YXRlKDg2ZGVnKSBicmlnaHRuZXNzKDExOCUpIGNvbnRyYXN0KDEwJSk7XFxufVxcblxcblxcblxcbi5sb3cge1xcblxcbiAgICBib3JkZXI6NXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4ubG93OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpncmVlbjtcXG59XFxuXFxuLmhpZ2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJlZDtcXG59XFxuXFxuLm1lZGl1bTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjk4MDA7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgaGVpZ2h0OjE1cHg7XFxuICAgIHdpZHRoOjM1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIG1hcmdpbjoycHg7IFxcblxcbn1cXG5cXG5cXG4uYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnRyYXNoSXQsIC5maW5pc2hlZCwgLmV4aXRFZGl0b3J7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RUeXBlVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBib3R0b206MnB4O1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6MDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYm9yZGVyOjA7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG4uYWRkQm9hcmRlclRleHRCb3gge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOjIyMHB4O1xcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIHdpZHRoOjQwcHg7XFxuICAgIGhlaWdodDo0MHB4O1xcbiAgICBib3JkZXIgOjA7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9oYW1idXJnZXJNZW51LnN2Zyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOSwgNzUsIDIwNSk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDo1MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG5cXG5cXG59XFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3AgOjVweDtcXG59XFxuXFxuXFxuXFxuLm1vYmlsZU1lbnVUaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIG1hcmdpbjphdXRvO1xcbn1cXG5cXG4uZWRpdEJvYXJkLCAuZGVsZXRlQm9hcmQge1xcbiAgICB3aWR0aDoyMHB4O1xcbn1cXG5cXG4uZWRpdEV4YW1wbGVJY29ucyB7XFxuXFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICBcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcblxcbn1cXG5cXG4uZW1wdHlyb3cge1xcbiAgIFxcbiAgICBoZWlnaHQ6MjVweDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxuICAgIFxcbn1cXG5cXG4uZWRpdEJvYXJkLCAuZGVsZXRlQm9hcmQge1xcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xcblxcblxcbn1cXG5cXG4uYm9hcmR0ZXh0Qm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBib3JkZXI6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBcXG4gXFxufVxcblxcbi5ib2FyZFRleHRFZGl0b3Ige1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMTUsIDIxMywgMjEzKTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHotaW5kZXg6MTtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIHdpZHRoOjEwMCU7XFxuXFxuXFxuXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG5cXG5cXG4gXFxuXFxufVxcblxcblxcbi5jaGFuZ2VCb2FyZFRpdGxlQnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcXG5cXG4gICAgLmVkaXRFeGFtcGxlSWNvbnMge1xcbiAgICAgICAgaGVpZ2h0OjE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmVtcHR5cm93IHtcXG4gICAgICAgIGhlaWdodDoxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGVCb2FyZCwgLmVkaXRCb2FyZCB7XFxuICAgICAgICB3aWR0aDoxMnB4O1xcbiAgICB9XFxuXFxuXFxuXFxuICAgIC5ib2FyZHtcXG4gICAgICAgIHdpZHRoOjE4NXB4O1xcbiAgICB9XFxuXFxuICAgIC50YXNrTGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOnh4LXNtYWxsXFxuICAgIH1cXG5cXG4gICAgLmVkaXQge1xcblxcbiAgICAgICAgd2lkdGg6MTBweDtcXG4gICAgICAgIFxcblxcbiAgICB9XFxuXFxuICAgIC5nZW5lcmFsVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6NnB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgXFxuICAgIC5leGFtcGxlQm9hcmRUZXh0IHtcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYm9hcmR0ZXh0Qm94IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZCB7XFxuICAgIFxcbiAgICAgICAgd2lkdGg6MTg1cHg7XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmNoYW5nZUJvYXJkVGl0bGVCdXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOngtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkZXJUZXh0Qm94IHtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgICAgIHdpZHRoOjE2MHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLnRhc2ssIC5ub3RUYXNrIHtcXG4gICAgICAgIG1hcmdpbjo1cHg7IFxcbiAgICB9XFxuICAgIC5jaXJjbGVJY29uIHtcXG4gICAgICAgIHdpZHRoOjJweDtcXG4gICAgICAgIGhlaWdodDoycHhcXG4gICAgfVxcblxcbiAgICAudGFza0hvbGRlclRleHQsIC5kYXRlVGV4dCwgLmJ1dHRvblRleHQge1xcbiAgICAgICAgZm9udC1zaXplOnh4LXNtYWxsO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2tUb29scyB7XFxuICAgICAgICBcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OjVweDtcXG4gICAgICAgIG1hcmdpbi10b3A6NXB4O1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrVGV4dEJveCB7XFxuICAgICAgICB3aWR0aDo4MHB4O1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5kYXRlUGlja2VyIHtcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICB9XFxuXFxuXFxuICAgIFxcbiAgICAuaGlnaCB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICAgIH1cXG5cXG4gICAgLm1lZGl1bSB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LDIwMiwxMCk7XFxuICAgIH1cXG5cXG4gICAgLmxvdyB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcXG4gICBcXG4gICAgfVxcblxcbiAgICAudGFzaywgLm5vdFRhc2sge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcXG4gICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2tFZGl0b3Ige1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICA0cHggc29saWQ7XFxuICAgIH1cXG5cXG5cXG5cXG5cXG4gICAgLmJ1dHRvbiB7XFxuXFxuICAgICAgICBoZWlnaHQ6MTBweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcbiAgICAgICAgd2lkdGg6MjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgICB9XFxuXFxuICAgIC5lZGl0VG9vbHMge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRyYXNoSXQsIC5maW5pc2hlZCwgLmV4aXRFZGl0b3Ige1xcbiAgICAgICAgd2lkdGg6MTVweDtcXG5cXG4gICAgfVxcblxcbiAgICAudGFza0FkZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgIH1cXG5cXG5cXG5cXG59XFxuXFxuLnRhc2ssIC5ub3RUYXNrIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9oYW1idXJnZXJNZW51LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXywgeyBoYXNoOiBcIiNSb2JvdG9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXywgeyBoYXNoOiBcIiNDdXRpdmVNb25vXCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4vKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSwgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxuICB9XFxuXFxuICAvKiBjdXRpdmUtbW9uby1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubyc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICAgIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxuICB9XFxuXFxuXFxuICAubmF2aWdhdGlvbiB7XFxuICAgIHdpZHRoOjI1MHB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOSwgNzUsIDIwNSk7XFxuICAgIG92ZXJmbG93OmF1dG87XFxuXFxuXFxufVxcblxcbi5wcm9qZWN0QnV0dG9uLCAudXBDb21pbmdCdXR0b24ge1xcblxcbiAgICBoZWlnaHQ6MzBweDtcXG4gICAgbGluZS1oZWlnaHQ6MjhweDtcXG5cXG4gICAgd2lkdGg6MTAwJTtcXG5cXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG5cXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uZGVsZXRlSXRlbSwgLmVkaXRQcm9qZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLmxpc3RUaXRsZSwgLnByb2plY3RUZXh0LCAucGx1c1NpZ24ge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udXBDb21pbmdCdXR0b24ge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdFRhc2tIb2xkZXIge1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OjM7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgd2lkdGg6NzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyVGV4dCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIgcCB7XFxuICAgIG1hcmdpbi1yaWdodDo0MHB4O1xcbn1cXG5cXG4ucHJvamVjdFRvb2xzIHtcXG4gICAgICAgIHdpZHRoOjI1JTtcXG4gICAgXFxufVxcblxcblxcbi53aG9sZU92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gXFxufVxcblxcblxcbi5wcm9qZWN0QnV0dG9ue1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi51cENvbWluZ0J1dHRvbiB7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgICB3aWR0aDo3NSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuXFxuXFxuLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG5cXG4uZWRpdFByb2plY3RCdXR0b257XFxuXFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgei1pbmRleDozO1xcbiBcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMiwgODMsIDIyNyk7XFxuIFxcblxcbiBcXG4gfVxcbiBcXG4gXFxuIC5hZGRQcm9qZWN0TGFiZWwge1xcbiAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgIHJpZ2h0OjNweDtcXG5cXG4gICAgIFxcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiBcXG4gXFxuIH1cXG4gXFxuIC5lZGl0VGV4dCB7XFxuICAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuIFxcbiAgICAgY29sb3I6d2hpdGU7XFxuICAgICBvdXRsaW5lOm5vbmU7XFxuICAgICBib3JkZXI6bm9uZTtcXG4gICAgIGhlaWdodDozMHB4O1xcbiAgICAgbWFyZ2luLXJpZ2h0OjVweDtcXG4gICAgZm9udC1zaXplOnNtYWxsO1xcbiB9XFxuIFxcblxcbiAuZWxlbWVudHN7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnBsdXNTaWduIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnByb2plY3RCdXR0b25Ib3Zlcjpob3ZlciwgLnByb2plY3RBZGRlcjpob3ZlciwgLnVwQ29taW5nQnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMiwgODMsIDIyNyk7XFxuICAgIFxcbn1cXG5cXG4gXFxuIFxcbiBcXG4uZWRpdFRleHQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgIFxcbiBcXG4gICAgIGNvbG9yOndoaXRlO1xcbn1cXG4gXFxuIFxcbiAub3ZlcmxheSB7XFxuICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC4yOTkpO1xcbiAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICB3aWR0aDoyNTBweDtcXG4gICAgIHotaW5kZXg6MTtcXG4gICAgIFxcbiAgICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxuICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgIHRvcDowcHg7XFxuXFxuXFxuICAgICBkaXNwbGF5Om5vbmU7XFxuIFxcbiAgIFxcbiBcXG59XFxuXFxuLnByb2plY3RBZGRlciB7XFxuXFxuICAgIG1hcmdpbi10b3A6MjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuXFxuICAgIHdpZHRoOjEwMCVcXG4gICAgXFxufVxcblxcbi5leGl0IHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIHdpZHRoOjQwcHg7XFxuICAgIGhlaWdodDo0MHB4O1xcbiAgICBib3JkZXIgOjA7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOSwgNzUsIDIwNSk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDo1MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG5cXG5cXG59XFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3AgOjVweDtcXG59XFxuXFxuXFxuXFxuLm1vYmlsZU1lbnVUaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIG1hcmdpbjphdXRvO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTUwcHgpe1xcblxcbiBcXG4gICAgLm92ZXJsYXkge1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdGlvbiB7XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm1vYmlsZU1lbnUge1xcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5wYWdlQ29udGVudCB7XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnNlY3Rpb25zIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLm5hdmlnYXRpb24ge1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgICAgIGhlaWdodDoxMDAlO1xcbiAgICAgICAgXFxuICAgICAgICBcXG4gICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RCdXR0b257XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdENvbnRhaW5lciB7XFxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdENvbnRhaW5lciBwIHtcXG4gICAgXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6NTBweDtcXG4gICAgfVxcbiAgICAucHJvamVjdFRvb2xzIHtcXG4gICAgICAgIHdpZHRoOjE1JTtcXG5cXG4gICAgfVxcblxcbiAgICAuZWRpdFByb2plY3RCdXR0b257XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZWRpdFRleHR7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuXFxuICAgIH1cXG5cXG5cXG5cXG5cXG5cXG4gICAgLmV4aXQge1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBjb2xvcjp3aGl0ZTtcXG4gICAgICAgIG1hcmdpbjoxMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpe1xcbiAgICAuZGVsZXRlSXRlbSwgLmVkaXRQcm9qZWN0IHtcXG4gICAgICAgIHdpZHRoOjE1cHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMjVweCl7XFxuICAgIC5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6MTEuNXB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoyMDBweCl7XFxuICAgIC5saXN0VGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICB9XFxufVxcblxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xcblxcblxcblxcbiAgICAucHJvamVjdENvbnRhaW5lciBwe1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjMwcHg7XFxuICAgIH1cXG5cXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9uYXZpZ2F0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRDQUFpRCxFQUFFLHFCQUFxQjtJQUN4RTs7Ozs7OERBS3NFLEVBQUUsZUFBZTtFQUN6Rjs7RUFFQSxnQ0FBZ0M7QUFDbEM7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0Q0FBcUQsRUFBRSxxQkFBcUI7SUFDNUU7Ozs7OytEQUs4RSxFQUFFLGVBQWU7RUFDakc7OztFQUdBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLGFBQWE7OztBQUdqQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCOztJQUVoQixVQUFVOztJQUVWLGdCQUFnQjs7OztBQUlwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFD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ZXNDb250ZW50XCI6W1wiXFxuXFxuLyogcm9ib3RvLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnN2ZyNSb2JvdG8nKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXFxuICB9XFxuXFxuICAvKiBjdXRpdmUtbW9uby1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubyc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLnN2ZyNDdXRpdmVNb25vJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcblxcbiAgLm5hdmlnYXRpb24ge1xcbiAgICB3aWR0aDoyNTBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTksIDc1LCAyMDUpO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcblxcblxcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbiwgLnVwQ29taW5nQnV0dG9uIHtcXG5cXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OjI4cHg7XFxuXFxuICAgIHdpZHRoOjEwMCU7XFxuXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5saXN0VGl0bGUsIC5wcm9qZWN0VGV4dCwgLnBsdXNTaWduIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnVwQ29taW5nQnV0dG9uIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RUYXNrSG9sZGVyIHtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOjc1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lclRleHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHAge1xcbiAgICBtYXJnaW4tcmlnaHQ6NDBweDtcXG59XFxuXFxuLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgIFxcbn1cXG5cXG5cXG4ud2hvbGVPdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuIFxcbn1cXG5cXG5cXG4ucHJvamVjdEJ1dHRvbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udXBDb21pbmdCdXR0b24ge1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6NzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcblxcbi5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MjUlO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLmVkaXRQcm9qZWN0QnV0dG9ue1xcblxcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHotaW5kZXg6MztcXG4gXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjIsIDgzLCAyMjcpO1xcbiBcXG5cXG4gXFxuIH1cXG4gXFxuIFxcbiAuYWRkUHJvamVjdExhYmVsIHtcXG4gICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgICByaWdodDozcHg7XFxuXFxuICAgICBcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gXFxuIFxcbiB9XFxuIFxcbiAuZWRpdFRleHQge1xcbiAgICAgYmFja2dyb3VuZDpub25lO1xcbiBcXG4gICAgIGNvbG9yOndoaXRlO1xcbiAgICAgb3V0bGluZTpub25lO1xcbiAgICAgYm9yZGVyOm5vbmU7XFxuICAgICBoZWlnaHQ6MzBweDtcXG4gICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcXG4gfVxcbiBcXG5cXG4gLmVsZW1lbnRze1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5wbHVzU2lnbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uSG92ZXI6aG92ZXIsIC5wcm9qZWN0QWRkZXI6aG92ZXIsIC51cENvbWluZ0J1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjIsIDgzLCAyMjcpO1xcbiAgICBcXG59XFxuXFxuIFxcbiBcXG4gXFxuLmVkaXRUZXh0OjpwbGFjZWhvbGRlciB7XFxuICAgICBcXG4gXFxuICAgICBjb2xvcjp3aGl0ZTtcXG59XFxuIFxcbiBcXG4gLm92ZXJsYXkge1xcbiAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuMjk5KTtcXG4gICAgIGhlaWdodDoxMDAlO1xcbiAgICAgd2lkdGg6MjUwcHg7XFxuICAgICB6LWluZGV4OjE7XFxuICAgICBcXG4gICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xcbiAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICB0b3A6MHB4O1xcblxcblxcbiAgICAgZGlzcGxheTpub25lO1xcbiBcXG4gICBcXG4gXFxufVxcblxcbi5wcm9qZWN0QWRkZXIge1xcblxcbiAgICBtYXJnaW4tdG9wOjIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcblxcbiAgICB3aWR0aDoxMDAlXFxuICAgIFxcbn1cXG5cXG4uZXhpdCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICB3aWR0aDo0MHB4O1xcbiAgICBoZWlnaHQ6NDBweDtcXG4gICAgYm9yZGVyIDowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvaGFtYnVyZ2VyTWVudS5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTksIDc1LCAyMDUpO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6NTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuXFxuXFxufVxcblxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBtYXJnaW4tdG9wIDo1cHg7XFxufVxcblxcblxcblxcbi5tb2JpbGVNZW51VGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MHB4KXtcXG5cXG4gXFxuICAgIC5vdmVybGF5IHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm5hdmlnYXRpb24ge1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGVNZW51IHtcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgfVxcblxcbiAgICAucGFnZUNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5zZWN0aW9ucyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uIHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgICAgIFxcbiAgICAgICAgXFxuICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0QnV0dG9ue1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RDb250YWluZXIge1xcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RDb250YWluZXIgcCB7XFxuICAgIFxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjUwcHg7XFxuICAgIH1cXG4gICAgLnByb2plY3RUb29scyB7XFxuICAgICAgICB3aWR0aDoxNSU7XFxuXFxuICAgIH1cXG5cXG4gICAgLmVkaXRQcm9qZWN0QnV0dG9ue1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmVkaXRUZXh0e1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcblxcbiAgICB9XFxuXFxuXFxuXFxuXFxuXFxuICAgIC5leGl0IHtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgY29sb3I6d2hpdGU7XFxuICAgICAgICBtYXJnaW46MTBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KXtcXG4gICAgLmRlbGV0ZUl0ZW0sIC5lZGl0UHJvamVjdCB7XFxuICAgICAgICB3aWR0aDoxNXB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjI1cHgpe1xcbiAgICAuZGVsZXRlSXRlbSwgLmVkaXRQcm9qZWN0IHtcXG4gICAgICAgIHdpZHRoOjExLjVweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MjAwcHgpe1xcbiAgICAubGlzdFRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcXG5cXG5cXG5cXG4gICAgLnByb2plY3RDb250YWluZXIgcHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDozMHB4O1xcbiAgICB9XFxuXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBib3gtc2l6aW5nOiBub25lO1xcbn1cXG4uc2VjdGlvbnMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIzNiwgMjM2LCAyNTUpO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxufVxcblxcbi5lcnJvck1lc3NhZ2Uge1xcblxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuMjk5KTtcXG5cXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MzA7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBcXG59XFxuXFxuLm1lc3NhZ2VIb2xkZXIge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6c2lsdmVyO1xcbiAgICBoZWlnaHQ6MTUwcHg7XFxuICAgIHdpZHRoOjIwMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbn1cXG5cXG4uY29udGVudEhvbGRlciB7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6MjAwcHg7XFxufVxcblxcbi5leGl0QnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDoxMDBweDtcXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIGJvcmRlcjowO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOnJveWFsYmx1ZTtcXG5cXG59XFxuXFxuLmV4aXRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDU1LCA4OCwgMTg4KTtcXG59XFxuXFxuXFxuLmNvbnRlZW50SG9sZGVyIGgyLCAuY29udGVlbnRIb2xkZXIgcCwgLmV4aXRCdXR0b24ge1xcbiAgICBtYXJnaW46MTBweDtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsK0JBQStCOztJQUUvQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZOztJQUVaLHNCQUFzQjtJQUN0QixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCOzs7SUFHdkIsbUJBQW1COzs7QUFHdkI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFFBQVE7SUFDUixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBib3gtc2l6aW5nOiBub25lO1xcbn1cXG4uc2VjdGlvbnMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIzNiwgMjM2LCAyNTUpO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxufVxcblxcbi5lcnJvck1lc3NhZ2Uge1xcblxcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuMjk5KTtcXG5cXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MzA7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBcXG59XFxuXFxuLm1lc3NhZ2VIb2xkZXIge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6c2lsdmVyO1xcbiAgICBoZWlnaHQ6MTUwcHg7XFxuICAgIHdpZHRoOjIwMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbn1cXG5cXG4uY29udGVudEhvbGRlciB7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6MjAwcHg7XFxufVxcblxcbi5leGl0QnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDoxMDBweDtcXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIGJvcmRlcjowO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOnJveWFsYmx1ZTtcXG5cXG59XFxuXFxuLmV4aXRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDU1LCA4OCwgMTg4KTtcXG59XFxuXFxuXFxuLmNvbnRlZW50SG9sZGVyIGgyLCAuY29udGVlbnRIb2xkZXIgcCwgLmV4aXRCdXR0b24ge1xcbiAgICBtYXJnaW46MTBweDtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRoZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZZZWFyIGZyb20gXCIuLi9zdGFydE9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlPZlllYXJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIGRheSBvZiB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlLCBzdGFydE9mWWVhcihkYXRlKSk7XG4gIHZhciBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGFuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBjbGVhbkRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2aWdhdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmlnYXRpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtnZXRVcGRhdGVkRWxlbWVudHN9IGZyb20gXCIuL3BhZ2VMYXlvdXQuanNcIlxuXG5jb25zdCBhc3NpZ25Ub29scyA9IChlbGVtZW50cyxpbmRleCxib2FyZEluZGV4KSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChjaGlsZEVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoY2hpbGRFbGVtZW50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwidG9vbHNcIil7XG4gICAgICAgICAgICBsZXQgdG9vbHNDaGlsZHJlbiA9IEFycmF5LmZyb20oY2hpbGRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIHRvb2xzQ2hpbGRyZW4uZm9yRWFjaCh0b29sRWxlbWVudCA9PiBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9vbEVsZW1lbnQsIFwiY3VycmVudCB0b29sIGVsZW1lbnRcIilcbiAgICAgICAgICAgICAgICB0b29sRWxlbWVudC50YXNrSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB0b29sRWxlbWVudC5ib2FyZEluZGV4ID0gYm9hcmRJbmRleDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuXG5cbn1cblxuY29uc3QgYXNzaWduVGFza0luZGV4ID0gKGVsZW1lbnQsYm9hcmRJbmRleCkgPT4ge1xuXG4gICAgbGV0IHRhc2tJbmRleCA9MDtcbiAgICAvLyBjb25zb2xlLmxvZyhib2FyZEluZGV4LCBcInRoZSBjdXJyZW50IGJvYXJkSW5kZXhcIilcblxuICAgIGVsZW1lbnQuZm9yRWFjaChjaGlsZEVsZW1lbnQgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGlsZEVsZW1lbnQsIFwidGhlIGNoaWxkIGVsZW1lbnRcIilcbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInRhc2tcIiB8fFxuICAgICAgICAgICAgY2hpbGRFbGVtZW50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwibm90VGFza1wiXG4gICAgICAgICl7XG4gICAgICAgICAgICBsZXQgdGFza0NoaWxkcmVuID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgdGFza0NoaWxkcmVuLmZvckVhY2godGFza0NoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFza0NoaWxkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwidGFza1Rvb2xzXCIpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza1Rvb2xzQ2hpbGRyZW4gPSBBcnJheS5mcm9tKHRhc2tDaGlsZC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnblRvb2xzKHRhc2tUb29sc0NoaWxkcmVuLHRhc2tJbmRleCxib2FyZEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGFza0luZGV4KytcbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICBcblxuXG5cbn1cblxuXG5jb25zdCBhc3NpZ25Cb2FyZEljb25zID0gKGVsZW1lbnQsIGN1cnJlbnRJbmRleCkgPT4gIHtcbiAgICBsZXQgYm9hcmQgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGJvYXJkLmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImVkaXRFeGFtcGxlSWNvbnNcIil7XG4gICAgICAgICAgICBjaGlsZEVsZW1lbnQuYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGxldCBlZGl0RXhhbXBsZUljb25zID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgZWRpdEV4YW1wbGVJY29ucy5mb3JFYWNoKGl0ZW1FbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtRWxlbWVudC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInRhc2tBZGRlclwiKXtcbiAgICAgICAgICAgIGxldCB0YXNrUGFyYWdyYXBoID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pWzBdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFza1BhcmFncmFwaCwgXCJ0aGUgdGFzayBwYXJhZ3JhcGhcIilcbiAgICAgICAgICAgIHRhc2tQYXJhZ3JhcGguYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgfVxuICAgICAgLy8gIGNvbnNvbGUubG9nKGNoaWxkRWxlbWVudCwgXCJ0aGUgY2hpbGQgZWxlbWVudFwiKVxuICAgICAgICBjaGlsZEVsZW1lbnQuYm9hcmRJbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhjaGlsZEVsZW1lbnQuYm9hcmRJbmRleCwgXCJjaGlsZCBlbGVtZW50IGJvYXJkIGluZGV4XCIpXG4gICAgfSlcbn1cblxuXG5jb25zdCBhc3NpZ25Cb2FyZEVsZW1lbnRzID0gKCkgPT4ge1xuXG4gICAgXG4gICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IHBhZ2VDb250ZW50Q2hpbGRyZW4gPSBlbGVtZW50cy5wYWdlQ29udGVudENoaWxkcmVuO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG5cbiAvLyAgIGNvbnNvbGUubG9nKHBhZ2VDb250ZW50Q2hpbGRyZW4sIFwiIHRoZSBwYWdlIGNvbnRlbnQgY2hpbGRyZW5cIilcbiAgICBwYWdlQ29udGVudENoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYm9hcmRDb250ZW50XCIpe1xuICAgICAgICAgICAgZWxlbWVudC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgbGV0IGJvYXJkQ29udGVudCA9IEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgICAgICBib2FyZENvbnRlbnQuZm9yRWFjaChjaGlsZEVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5ib2FyZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSwgXCJ0aGUgY3VycmVudCBjaGlsZCBlbGVtZW50IGNhbHNzXCIpXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImJvYXJkXCIpIGFzc2lnbkJvYXJkSWNvbnMoY2hpbGRFbGVtZW50LGN1cnJlbnRJbmRleClcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEluZGV4ICsrO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7YXNzaWduVG9vbHMsIGFzc2lnblRhc2tJbmRleCwgYXNzaWduQm9hcmRFbGVtZW50c307IiwiaW1wb3J0IGVtaXQgZnJvbSBcIi4vZW1pdC5qc1wiO1xuXG5pbXBvcnQgXCIuLi9zdHlsZXMvYm9hcmQuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvbmF2aWdhdGlvbi5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZXMuY3NzXCJcblxuICAgIFxuY29uc3QgcmVtb3ZlSXRlbSA9KGFycmF5LCBpbmRleCkgPT4ge1xuICAgIGxldCBuZXdUYXNrcyA9IFtdO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoaSAhPSBpbmRleCl7XG4gICAgICAgICAgICBuZXdUYXNrcy5wdXNoKGFycmF5W2ldKVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRJbmRleCArK1xuICAgIH1cbiAgICByZXR1cm4gbmV3VGFza3M7XG59XG5cblxuY29uc3QgYWRkSXRlbSA9IChhcnJheSxpbmRleCwgaXRlbSkgPT4ge1xuICAgIGxldCBuZXdUYXNrcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICsrKXtcbiAgICAgICAgaWYgKGkgPT0gaW5kZXgpe1xuICAgICAgICAgICAgbmV3VGFza3MucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1Rhc2tzLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1Rhc2tzO1xufVxuXG5cbmNvbnN0IHNldEFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gYXJyYXk7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgbmV3QXJyYXkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgbmV3VGFza3MucHVzaCh0YXNrKTtcbiAgICB9KVxuICAgIHJldHVybiBuZXdUYXNrcztcbn1cblxuXG5jb25zdCBhZGRCaW5kaW5ncyA9IChlbGVtZW50cyxmdW5jLGJpbmRpbmcpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHMpKSBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyKGJpbmRpbmcsZnVuYyk7XG4gICAgZWxzZSBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGJpbmRpbmcsZnVuYykpO1xufVxuXG5jb25zdCByZW1vdmVCaW5kaW5ncyA9IChlbGVtZW50cyxmdW5jLGJpbmRpbmcpID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHMpKSBlbGVtZW50cy5yZW1vdmVFdmVudExpc3RlbmVyKGJpbmRpbmcsZnVuYyk7XG4gICAgZWxzZSBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGJpbmRpbmcsZnVuYykpO1xufVxuXG5cblxuXG5cbmV4cG9ydCB7cmVtb3ZlSXRlbSwgYWRkSXRlbSwgYWRkQmluZGluZ3MsIHJlbW92ZUJpbmRpbmdzLCBzZXRBcnJheX1cbiIsImxldCBlbWl0ID0gKFxuICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBldmVudHMgPSB7fTtcblxuICAgICAgICBmdW5jdGlvbiBzdWJzY3JpYmUobmFtZSxmdW5jKXtcbiAgICAgICAgICAgIGlmIChldmVudHNbbmFtZV0pe1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZ1bmMpKSBmdW5jLmZvckVhY2goZiA9PiBldmVudHNbbmFtZV0ucHVzaChmKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBldmVudHNbbmFtZV0ucHVzaChmdW5jKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmUobmFtZSxmdW5jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKG5hbWUsZnVuYyl7XG4gICAgICAgICAgICBpZiAoZXZlbnRzW25hbWVdKXtcbiAgICAgICAgICAgICAgICBsZXQgbmV3QXJyYXkgPSBldmVudHNbbmFtZV07XG4gICAgICAgICAgICAgICAgbmV3QXJyYXkgPSBuZXdBcnJheS5maWx0ZXIoZiA9PiBmICE9IGZ1bmMpO1xuICAgICAgICAgICAgICAgIGV2ZW50c1tuYW1lXSA9IG5ld0FycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3VzcGVuZChuYW1lKXtcbiAgICAgICAgICAgIGxldCBuZXdFdmVudHMgPSB7fTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RXZlbnRzID0gZXZlbnRzO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRFdmVudEtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50RXZlbnRzKTtcbiAgICAgICAgICAgIGN1cnJlbnRFdmVudEtleXMgPSBjdXJyZW50RXZlbnRLZXlzLmZpbHRlcihrZXkgPT4ga2V5ICE9IG5hbWUpO1xuXG4gICAgICAgICAgICBjdXJyZW50RXZlbnRLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBuZXdFdmVudHNba2V5XSA9IGN1cnJlbnRFdmVudHNba2V5XTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBldmVudHMgPSBuZXdFdmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmaXJlKG5hbWUsZGF0YSl7XG4gICAgICAgICAgICBpZiAoZXZlbnRzW25hbWVdKXtcbiAgICAgICAgICAgICAgICBldmVudHNbbmFtZV0uZm9yRWFjaChmdW5jID0+IGZ1bmMoZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtzdWJzY3JpYmUsdW5zdWJzY3JpYmUsc3VzcGVuZCxmaXJlfTtcbiAgICB9XG4pKClcblxuXG5leHBvcnQgZGVmYXVsdCBlbWl0OyIsIlxuXG5cbi8vY3JlYXRlaW5nIG5ldyBlbG1lbnQgaW52b2x2ZXMgdXNpbmcgYSB0ZW1wbGF0ZSB3aGljaCBpcyB7ZWxlbWVudDpcIlwiLCAgY2xhc3NOYW1lOiBcIlwiLCBzb3VyY2U6XCJcIix0eXBlOlwiXCJ9O1xuXG5jb25zdCBjcmVhdGVEb21FbGVtZW50cyA9ICgpID0+IHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICBsZXQgcGFnZVRleHQgPSBgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzID0gXCJ3aG9sZU92ZXJsYXlcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJlcnJvck1lc3NhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzID0gXCJtZXNzYWdlSG9sZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRlbnRIb2xkZXJcIj5cbiAgICAgICAgICAgIDxoMj5FcnJvcjwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzcyA9IFwiZXJyb3JNZXNzYWdlVGV4dFwiPlRleHQgQ2Fubm90IGJlIG92ZXIgMTAgY2hyYWN0ZXJzPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiZXhpdEJ1dHRvblwiPkV4aXQ8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuICAgIDxkaXYgY2xhc3MgPSBcIm1vYmlsZU1lbnVcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiaGFtYnVyZ2VyTWVudVwiPjwvYnV0dG9uPlxuICAgICAgICA8aDIgY2xhc3MgPSBcIm1vYmlsZU1lbnVUaXRsZVwiPlRvIERvIExpc3Q8L2gyPlxuXG4gICAgPC9kaXY+IFxuICAgIDxkaXYgY2xhc3MgPSBcInNlY3Rpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcIm5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm92ZXJsYXlcIj5jdXJyZW50IG92ZXJsYXk8L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzcyA9IFwiZXhpdFwiPlg8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZWxlbWVudHNcIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzID0gXCJsaXN0VGl0bGVcIiA+VG8gRG8gTGlzdDwvaDE+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ1cENvbWluZ0J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5VcGNvbWluZzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicHJvamVjdEFkZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwicHJvamVjdFRleHRcIj5Qcm9qZWN0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzID0gXCJwbHVzU2lnblwiPis8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3RUYXNrSG9sZGVyXCI+PC9kaXY+IFxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicGFnZUNvbnRlbnRcIj4gPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmBcblxuICAgIGJvZHkuaW5uZXJIVE1MID0gcGFnZVRleHQ7XG5cbn1cblxuXG5cblxuY29uc3QgZ2V0SW5pdGlhbEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uc1wiKTtcbiAgICBsZXQgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvblwiKTtcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBsZXQgZXhpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhpdFwiKTtcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzXCIpO1xuICAgIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RUaXRsZVwiKTtcbiAgICBsZXQgdXBDb21pbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwQ29taW5nQnV0dG9uXCIpO1xuICAgIGxldCBwcm9qZWN0QWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RBZGRlclwiKTtcbiAgICBsZXQgcHJvamVjdFRleHQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGV4dFwiKTtcbiAgICBsZXQgcGx1c1NpZ24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsdXNTaWduXCIpO1xuICAgIGxldCBwcm9qZWN0VGFza0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRhc2tIb2xkZXJcIik7XG4gICAgbGV0IGVkaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0UHJvamVjdEJ1dHRvblwiKTtcbiAgICBsZXQgZWRpdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRUZXh0XCIpO1xuICAgIGxldCBhZGRQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RMYWJlbFwiKTtcbiAgICBsZXQgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VDb250ZW50XCIpO1xuICAgIGxldCB3aG9sZU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndob2xlT3ZlcmxheVwiKVxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yTWVzc2FnZVwiKVxuICAgIGxldCBlcnJvck1lc3NhZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvck1lc3NhZ2VUZXh0XCIpO1xuICAgIGxldCBleGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leGl0QnV0dG9uXCIpO1xuXG4gICAgcmV0dXJuIHtzZWN0aW9uLCBuYXZpZ2F0aW9uLCBvdmVybGF5LCBleGl0LCBlbGVtZW50cyxcbiAgICAgICAgICAgIGxpc3RUaXRsZSwgdXBDb21pbmdCdXR0b24sIHByb2plY3RBZGRlciwgcHJvamVjdFRleHQsXG4gICAgICAgICAgICBwbHVzU2lnbiwgcHJvamVjdFRhc2tIb2xkZXIsIGVkaXRQcm9qZWN0QnV0dG9uLCBlZGl0VGV4dCxcbiAgICAgICAgICAgIGFkZFByb2plY3RMYWJlbCxwYWdlQ29udGVudCwgd2hvbGVPdmVybGF5LCBleGl0QnV0dG9uLCBlcnJvck1lc3NhZ2UsIGVycm9yTWVzc2FnZVRleHR9XG4gICAgfVxuXG5cbiAgICBjb25zdCBnZXRVcGRhdGVkRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBib2FyZFRleHRCb3ggPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRCb2FyZGVyVGV4dEJveFwiKSlcbiAgICAgICAgbGV0IGJvYXJkZXJCdXR0b24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRCb2FyZGVyQnV0dG9uXCIpKVxuICAgICAgICBsZXQgZWRpdEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdFByb2plY3RcIikpO1xuICAgICAgICBsZXQgZGVsZXRlSXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGVJdGVtXCIpKTtcbiAgICAgICAgbGV0IHByb2plY3RDb250YWluZXJUZXh0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdENvbnRhaW5lclRleHRcIikpO1xuICAgICAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RDb250YWluZXJcIikpXG4gICAgICAgIGxldCBhZGRQcm9qZWN0TGFiZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkUHJvamVjdExhYmVsXCIpKTtcbiAgICAgICAgbGV0IHByb2plY3RCdXR0b24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0QnV0dG9uXCIpKTtcblxuICAgICAgICBsZXQgcHJvamVjdFRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUYXNrSG9sZGVyXCIpO1xuICAgICAgICBsZXQgcHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbiA9IEFycmF5LmZyb20ocHJvamVjdFRhc2tIb2xkZXIuY2hpbGRyZW4pO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlQ29udGVudFwiKTtcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50Q2hpbGRyZW4gPSBBcnJheS5mcm9tKHBhZ2VDb250ZW50LmNoaWxkcmVuKTtcblxuICAgICAgICBsZXQgY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9uXCIpKTtcblxuICAgICAgICBsZXQgZGVsZXRlQm9hcmQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGVCb2FyZFwiKSk7XG4gICAgICAgIGxldCBlZGl0Qm9hcmQgID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWRpdEJvYXJkXCIpKTtcbiAgICAgICAgbGV0IHRhc2tIb2xkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFza0hvbGRlclwiKSk7XG4gICAgICAgIGxldCB0YXNrTGlzdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrTGlzdHNcIikpO1xuICAgICAgICBsZXQgYm9hcmRDb250ZW50VGV4dEJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJvYXJkdGV4dEJveFwiKSk7XG4gICAgICAgIGxldCBib2FyZE92ZXJsYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJib2FyZE92ZXJsYXlcIikpXG4gICAgICAgIGxldCB0YXNrQWRkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFza0FkZGVyXCIpKVxuIFxuICAgICAgICBsZXQgZXhhbXBsZUJvYXJkVGV4dCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImV4YW1wbGVCb2FyZFRleHRcIikpXG4gICAgICAgIGxldCBidXR0b24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidXR0b25cIikpO1xuXG4gICAgICAgIGxldCB0cmFzaEl0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidHJhc2hJdFwiKSk7XG4gICAgICAgIGxldCBmaW5pc2hlZCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZpbmlzaGVkXCIpKTtcblxuICAgICAgICBsZXQgdGFza1RleHRCb3ggPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrVGV4dEJveFwiKSk7XG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGF0ZVBpY2tlclwiKSk7XG5cbiAgICAgICAgbGV0IGNpcmNsZUljb24gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXJjbGVJY29uXCIpKTtcbiAgICAgICAgbGV0IGVkaXQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlZGl0XCIpKVxuICAgICAgICBsZXQgZGF0ZVRvb2xzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGF0ZVRvb2xcIikpXG5cbiAgICAgICAgbGV0IGV4aXRFZGl0b3IgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJleGl0RWRpdG9yXCIpKTtcblxuXG4gICAgICAgIHJldHVybiB7ZWRpdEl0ZW1zLCBkZWxldGVJdGVtcywgYWRkUHJvamVjdExhYmVscywgcHJvamVjdEJ1dHRvbixcbiAgICAgICAgICAgIHByb2plY3RUYXNrSG9sZGVyQ2hpbGRyZW4sIHByb2plY3RDb250YWluZXJUZXh0LCBib2FyZFRleHRCb3gsIGJvYXJkZXJCdXR0b24sIFxuICAgICAgICAgICAgZGVsZXRlQm9hcmQsIGVkaXRCb2FyZCwgcGFnZUNvbnRlbnQsIHBhZ2VDb250ZW50Q2hpbGRyZW4sIHRhc2tIb2xkZXJzLCBleGFtcGxlQm9hcmRUZXh0LFxuICAgICAgICAgICAgY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbnMsIGJvYXJkQ29udGVudFRleHRCb3gsIGJvYXJkT3ZlcmxheSwgdGFza0xpc3RzLCB0YXNrQWRkZXJzLCBidXR0b24sXG4gICAgICAgICAgICB0cmFzaEl0LCBmaW5pc2hlZCwgdGFza1RleHRCb3gsIGRhdGVQaWNrZXIsIGNpcmNsZUljb24sIGVkaXQsIGRhdGVUb29scywgZXhpdEVkaXRvciwgcHJvamVjdENvbnRhaW5lclxuICAgICAgICB9O1xuICAgIFxuICAgIH1cbiAgICBcblxuIFxuZXhwb3J0ICB7Z2V0SW5pdGlhbEVsZW1lbnRzLCBjcmVhdGVEb21FbGVtZW50cywgZ2V0VXBkYXRlZEVsZW1lbnRzfVxuICAgIFxuIiwiXG5cbmNvbnN0IHNlbmQgPSAoXG4gICAgKCkgPT4ge1xuICAgICAgICBsZXQgaXRlbXMgPSB7fTtcbiAgICAgICAgbGV0IHRpdGxlSXRlbXMgPSB7fVxuICAgICAgICBpdGVtcy51cGNvbWluZyA9IFtdXG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNlbmREYXRhID0gKGRhdGEsaW5kZXgsdGl0bGUpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zW2luZGV4XSA9IGRhdGE7XG4gICAgICAgICAgICB0aXRsZUl0ZW1zW2luZGV4XSA9IHRpdGxlO1xuXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgcmV0cmlldmVEYXRhID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtcywgXCJpdGVtcyByZXRyaWV2ZSBkYXRhXCIpXG4gICAgICAgICAgICBpZiAoaXRlbXNbaW5kZXhdKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbaW5kZXhdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgcmV0cmlldmVUaXRsZSA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRpdGxlSXRlbXNbaW5kZXhdKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGl0bGVJdGVtc1tpbmRleF1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdmVyd3JpdGVEYXRhID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zID0gZGF0YTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0QWxsRGF0YSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZURhdGEgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coaW5kZXgsIFwidGhlIGN1cnJlbnQgaW5kZXhcIilcbiAgICAgICAgICAgIGxldCBuZXdJdGVtcyA9IGl0ZW1zO1xuICAgICAgICAgICAgbGV0IG5ld0l0ZW1zS2V5cyA9IE9iamVjdC5rZXlzKG5ld0l0ZW1zKTtcbiAgICAgICAgICAgIG5ld0l0ZW1zS2V5cyA9IG5ld0l0ZW1zS2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPSBpbmRleClcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2cobmV3SXRlbXNLZXlzLCBcImZpcnN0IG5ldyBpdGVtcyBrZXlzXCIpXG4gICAgICAgICAgICBuZXdJdGVtc0tleXMuZm9yRWFjaChrZXkgPT4gbmV3SXRlbXNba2V5XSA9IG5ld0l0ZW1zW2tleV0pO1xuICAgICAgICAgICAgbGV0IG5ld2VySXRlbXMgPSB7fTtcbiAgICAgICAvLyAgICAgY29uc29sZS5sb2cobmV3SXRlbXMsIFwibmV3IGl0ZW1zXCIpXG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKG5ld0l0ZW1zS2V5cywgXCJ0aGUgbmV3IGl0ZW1zIGtleXNcIik7XG5cbiAgICAgICAgIC8vICAgY29uc29sZS5sb2cobmV3SXRlbXNLZXlzLCBcInRoZSBuZXcgaXRlbXMga2V5c1wiKVxuICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhuZXdJdGVtcywgXCJ0aGUgbmV3IGl0ZW1zXCIpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0l0ZW1zS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5ld2VySXRlbXNbaV0gPSBuZXdJdGVtc1tuZXdJdGVtc0tleXNbaV1dXG4gICAgICAgICAgICB9O1xuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhuZXdlckl0ZW1zLCBcInRoZSBuZXdlciBpdGVtc1wiKTtcbiAgICAgICAgICAgIGl0ZW1zID0gbmV3ZXJJdGVtcztcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7c2VuZERhdGEsIHJldHJpZXZlRGF0YSxyZXRyaWV2ZVRpdGxlLCBkZWxldGVEYXRhLCBnZXRBbGxEYXRhLCBvdmVyd3JpdGVEYXRhfTtcblxuICAgIH1cbikoKVxuXG5leHBvcnQge3NlbmR9OyIsIlxuXG5pbXBvcnQgdHJhc2hJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL3RyYXNoLnN2Z1wiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuLi9pbWFnZXMvZWRpdE9mZi5zdmdcIjtcbmltcG9ydCBjaGVja01hcmtJY29uIGZyb20gXCIuLi9pbWFnZXMvZmluaXNoZWQuc3ZnXCI7XG5pbXBvcnQgZXhpdEljb24gZnJvbSBcIi4uL2ltYWdlcy9leGl0LnN2Z1wiO1xuXG4gICBcbiAgIFxuICAgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCBjb2xvcjtcbiAgICAgICAgbGV0IHRhc2tDbGFzcyA9IFwidGFza1wiO1xuICAgICAgICBsZXQgZWRpdENsYXNzID0gXCJlZGl0XCI7XG4gICAgICAgIGxldCBjaXJjbGVJY29uQmFja2dyb3VuZCA9IFwibm9uZVwiO1xuICAgICAgICBsZXQgcHJvamVjdFR5cGVUZXh0ID0gXCJcIlxuXG5cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJIaWdoXCIpIGNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJMb3dcIikgY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTWVkaXVtXCIpIGNvbG9yID0gXCIjZmY5ODAwXCJcbiAgICAgICAgaWYgKHRhc2submF2TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdFR5cGVUZXh0ID0gYCA8cCBjbGFzcz1cImdlbmVyYWxUZXh0IHByb2plY3RUeXBlVGV4dFwiPiBQcm9qZWN0OiAke3Rhc2submF2TmFtZX08L3A+YFxuXG4gICAgICAgIH1cblxuXG5cblxuICAgICAgICBpZiAodGFzay5jaGVja2VkKSB7XG4gICAgICAgICAgICB0YXNrQ2xhc3MgPSBcIm5vdFRhc2tcIjtcbiAgICAgICAgICAgIGVkaXRDbGFzcyA9IFwibm90RWRpdFwiXG4gICAgICAgICAgICBjaXJjbGVJY29uQmFja2dyb3VuZCA9IFwiYmxhY2tcIjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IG5ld1Rhc2tUZXh0ID0gYDxkaXYgY2xhc3M9XCIke3Rhc2tDbGFzc31cIiBzdHlsZSA9IFwiYm9yZGVyLWNvbG9yOiR7Y29sb3J9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrTGFiZWxcIj4ke3Rhc2sudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tUb29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJhbFRleHRIb2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZ2VuZXJhbFRleHRcIj5EdWU6ICR7dGFzay5kYXRlVGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImdlbmVyYWxUZXh0XCI+UHJpb3JpdHk6ICR7dGFzay5wcmlvcml0eX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiJHtlZGl0Q2xhc3N9XCIgc3JjPVwiJHtlZGl0SWNvbn1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVJY29uXCIgc3R5bGUgPSBcImJhY2tncm91bmQ6JHtjaXJjbGVJY29uQmFja2dyb3VuZH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3Byb2plY3RUeXBlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBuZXdUYXNrVGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVCb2FyZCA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBsZXQgdGV4dCA9IHRlbXBsYXRlLnRleHQ7XG4gICAgICAgIGxldCBib2FyZFRleHQgPSBgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmRPdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZWRpdEV4YW1wbGVJY29uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID1cImRlbGV0ZUJvYXJkXCIgIHNyYz1cIiR7dHJhc2hJbWFnZX1cIiBhbHQ9XCJ0cmFzaCBpY29uIGZvciBkZWxldGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCJlZGl0Qm9hcmRcIiBzcmM9XCIke2VkaXRJY29ufVwiIGFsdD1cImVkaXRpbmcgaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwiZXhhbXBsZUJvYXJkVGV4dFwiPiR7dGV4dH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tMaXN0c1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tBZGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rIEFkZCBUYXNrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIGJvYXJkVGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVVcENvbWluZ0JvYXJkID0gKHRhc2spID0+IHtcblxuXG4gICAgICAgIGxldCBib2FyZFRleHQgPSBgPGRpdiBjbGFzcyA9IFwiYm9hcmRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmRPdmVybGF5XCI+PC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwiZXhhbXBsZUJvYXJkVGV4dFwiPiR7dGFzay50ZXh0fTwvaDI+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0YXNrTGlzdHNcIj48L2Rpdj4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidGFza0FkZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+KyBBZGQgVGFzazwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICByZXR1cm4gYm9hcmRUZXh0O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUFkZEJvYXJkID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWRkQm9hcmRUZXh0ID0gYDxkaXYgY2xhc3MgPSBcImJvYXJkQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJhZGRCb2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZW1wdHlyb3dcIj5lbXB0eSByb3c8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwiYWRkQm9hcmRUZXh0XCI+QWRkIEJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcyA9IFwiYWRkQm9hcmRlclRleHRCb3hcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiYWRkQm9hcmRlckJ1dHRvblwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBhZGRCb2FyZFRleHQ7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjcmVhdGVCb2FyZEVkaXRvciA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRhc2sudGV4dDtcbiAgICAgICAgXG4gICAgICAgIGxldCBib2FyZFRleHQgPSBgPGRpdiBjbGFzcyA9IFwiYm9hcmRUZXh0RWRpdG9yXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcyA9IFwiYm9hcmR0ZXh0Qm94XCIgdHlwZT1cInRleHRcIiB2YWx1ZSA9IFwiJHt2YWx1ZX1cIj5cbiAgICAgICAgPHAgY2xhc3MgPSBcImNoYW5nZUJvYXJkVGl0bGVCdXR0b25cIj4rPC9wPlxuICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIGJvYXJkVGV4dDtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNyZWF0ZURhdGVQaWNrZXIgPSAoZGF0ZSkgPT4ge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVMaXN0RWRpdG9yID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IGRlZmF1bHRDb2xvciA9IFwiYmx1ZVwiXG4gICAgICAgIGxldCBpY29uID0gdHJhc2hJbWFnZTtcbiAgICAgICAgbGV0IGljb25DbGFzcyA9IFwidHJhc2hJdFwiO1xuXG5cblxuICAgICAgICBpZiAodGFzay5jcmVhdGluZ1Rhc2spIHtcbiAgICAgICAgICAgIGRlZmF1bHRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGljb24gPSBleGl0SWNvbjtcbiAgICAgICAgICAgIGljb25DbGFzcyA9IFwiZXhpdEVkaXRvclwiXG5cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGV4dCA9IHRhc2sudGV4dDtcblxuXG4gICAgICAgIGxldCBsaXN0VGV4dCA9IGA8ZGl2IGNsYXNzID0gXCJ0YXNrRWRpdG9yXCIgc3R5bGUgPSBcImJvcmRlci1jb2xvcjoke2RlZmF1bHRDb2xvcn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0YXNrSG9sZGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcInRhc2tIb2xkZXJUZXh0XCI+VGl0bGU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcInRhc2tUZXh0Qm94XCIgdHlwZT1cInRleHRcIiB2YWx1ZSA9IFwiJHt0ZXh0fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJkYXRlVG9vbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3MgPSBcImRhdGVUZXh0XCI+RGF0ZTogPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJkYXRlUGlja2VyXCIgdHlwZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVkaXRUb29sSG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcmlvcml0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJidXR0b25UZXh0XCI+UHJpb3JpdHk6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYnV0dG9uIGhpZ2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJoaWdoVGV4dFwiPkhpZ2g8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJidXR0b24gbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwibWVkaXVtVGV4dFwiPk1lZGl1bTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJ1dHRvbiBsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJsb3dUZXh0XCI+TG93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVkaXRUb29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9IFwiJHtpY29uQ2xhc3N9XCIgc3JjPVwiJHtpY29ufVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcyA9IFwiZmluaXNoZWRcIiBzcmM9XCIke2NoZWNrTWFya0ljb259XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgIFxuICAgIHJldHVybiBsaXN0VGV4dDtcbiAgICB9XG5cbmV4cG9ydCB7Y3JlYXRlVGFzayxjcmVhdGVCb2FyZCwgY3JlYXRlQWRkQm9hcmQsIGNyZWF0ZUJvYXJkRWRpdG9yLCBjcmVhdGVMaXN0RWRpdG9yLCBjcmVhdGVVcENvbWluZ0JvYXJkfSIsIi8vaGVscGZ1bCBmdW5jdGlvbnMgdGhhdCBhdGUgdHVja2VkIGluIHRoaXMgZmlsZSB0byBtYWtlIGNvbnRlbnQgbW9yZSBjbGVhbiBhbmQgcmVhZGFibGVcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xuaW1wb3J0IHtnZXRVcGRhdGVkRWxlbWVudHN9IGZyb20gXCIuL3BhZ2VMYXlvdXQuanNcIlxuXG5jb25zdCBmaW5kQm9hcmRUZXh0Qm94ID0gIChpbmRleCkgPT4ge1xuICAgIGxldCB0YXNrTGlzdHMgPSBnZXRFbGVtZW50QnlCb2FyZEluZGV4KGluZGV4LFwidGFza0xpc3RzXCIpO1xuICAgIGxldCBidXR0b25UZXh0ID0gXCJjb3VsZCBub3QgbG9hZCB0ZXh0XCJcbiAgICBsZXQgdGFza0xpc3RDaGlsZHJlbiA9IEFycmF5LmZyb20odGFza0xpc3RzLmNoaWxkcmVuKVxuXG4gICBcbiAgICB0YXNrTGlzdENoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJib2FyZFRleHRFZGl0b3JcIikge1xuICAgICAgICAgICAgIGJ1dHRvblRleHQgPSBBcnJheS5mcm9tKGNoaWxkLmNoaWxkcmVuKVswXS52YWx1ZTtcbiAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICByZXR1cm4gYnV0dG9uVGV4dDtcbn1cblxuY29uc3QgZ2V0RWxlbWVudEJ5Qm9hcmRJbmRleCA9IChpbmRleCxkb21FbGVtZW50KSA9PiB7XG5cbiAgICBsZXQgZWxlbWVudCA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgIGxldCBuZXdFbGVtZW50ID0gZmFsc2U7XG4gICAgZWxlbWVudFtkb21FbGVtZW50XS5mb3JFYWNoKGNoaWxkRWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChjaGlsZEVsZW1lbnQuYm9hcmRJbmRleCA9PSBpbmRleCkgbmV3RWxlbWVudCA9IGNoaWxkRWxlbWVudFxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG5cblxufVxuXG5cbi8vIG9ubHkgd29ya3Mgd2l0aCBzdGF0aWMgbGlzdCB0YXNrcyB3aGljaCBoYXMgdHdvIGFycmF5c1xuLy8gb25lIHRoYXQgY2FuIHRha2UgZGlmZmVyZW50IHR5cGVzIG9mIGVkaXRvcnMgd2hpY2ggaXMga25vd24gYXNcbi8vIHRoZSBjaGFuZ2VkYm9hcmRsaXN0cyBhbmQgdGhlIG9uZSB0aGF0IGNoYW5nZXMgdmVyeSBsaXR0bGUgXG4vLyBhbmQgdmFsdWVzIGNhbiBiZSBhZGRlZCBidXQgd2lsbCBiZSBlZGl0ZWQgaW4gdGhlIGVkaXRvcnMgaW4gY2hhbmdlZEJvYXJkTGlzdHNcbmNvbnN0IGZpbmRPYmplY3RCeU5hbWUgPSAobmFtZSxwYXJlbnRBcnJheSkgPT4ge1xuICAgIGxldCBjdXJyZW50T2JqZWN0ID0gZmFsc2U7XG4gICAgbGV0IGJyZWFrTG9vcDtcbiAgICBsZXQgc3RhdGljTGlzdFRhc2tzID0gcGFyZW50QXJyYXk7XG5cbiAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5jaGFuZ2VkQm9hcmRMaXN0cy5mb3JFYWNoKGxpc3RUYXNrID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0VGFza1tuYW1lXSl7XG4gICAgICAgICAgICAgICAgY3VycmVudE9iamVjdCA9IGxpc3RUYXNrO1xuICAgICAgICAgICAgICAgIGJyZWFrTG9vcCA9IHRydWVcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGJyZWFrTG9vcCkgcmV0dXJuO1xuXG4gICAgfSlcblxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRPYmplY3QsIFwidGhlIGN1cnJlbnQgb2JqZWN0XCIpXG4gICAgcmV0dXJuIGN1cnJlbnRPYmplY3Q7XG5cbn1cblxuLy8gVGFrZXMgc3RhdGljbGlzdCB0YXNrcyBhcnJheSBkb2VzIG5vdCB3b3JrIGluIGFueSBvdGhlciB0ZW1wYWxhdGUgZG8gbm90IHRyeSBpdFxuY29uc3QgZ2V0T2JqZWN0VmFsdWUgPSAoY3VycmVudE9iamVjdCwgdmFsdWUsYXJyYXkpID0+IHtcbiAgICBsZXQgb2JqZWN0VmFsdWUgPSBmaW5kT2JqZWN0QnlOYW1lKGN1cnJlbnRPYmplY3QsYXJyYXkpO1xuICAgIGxldCBuZXdWYWx1ZSA9IGZhbHNlO1xuICAgIGlmIChvYmplY3RWYWx1ZSAhPSBmYWxzZSkgbmV3VmFsdWUgPSBvYmplY3RWYWx1ZVt2YWx1ZV07XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuXG5cbmNvbnN0IGNoYW5nZVZhbHVlVG9EYXRlID0gKHZhbHVlKSA9PiB7XG4gICAgbGV0IG5ld1ZhbHVlID0gdmFsdWUuc3BsaXQoXCItXCIpO1xuICAgIGxldCB5ZWFyID0gbmV3VmFsdWVbMF07XG4gICAgbGV0IG1vbnRoSW5kZXggPSBuZXdWYWx1ZVsxXSAtMTtcbiAgICBsZXQgZGF5ID0gbmV3VmFsdWVbMl07XG5cblxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoeWVhcixtb250aEluZGV4LGRheSk7XG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbmNvbnN0IHVuc2hhZGVCdXR0b25zID0gKCk9PiB7XG4gICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgbGV0IGJ1dHRvbnMgPSBlbGVtZW50cy5idXR0b247XG4gICAgYnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudENoaWxkcmVuID0gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgZWxlbWVudENoaWxkcmVuLmZvckVhY2goY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJub25lXCI7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGlsZEVsZW1lbnQsIFwidGhlIGN1cnJlbnQgY2hpbGQgZWxlbWVudFwiKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuY29uc3QgY3JlYXRlVGFza1RlbXBsYXRlID0gKHRleHQsZGF0ZSxwcmlvcml0eSxwcm9qZWN0VHlwZVRleHQpID0+IHtcbiAgICBsZXQgdGFzayA9IHt9XG4gICAgdGFzay5saXN0VGFzayA9IHRydWU7XG4gICAgdGFzay50ZXh0ID0gdGV4dCxcbiAgICB0YXNrLmRhdGUgPSBkYXRlO1xuICAgIHRhc2suZGF0ZVRleHQgPSBmb3JtYXQodGFzay5kYXRlLFwiTU1NIGQgeVwiKVxuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0YXNrLmNoZWNrZWQgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIHByb2plY3RUeXBlVGV4dCAhPSBcInVuZGVmaW5lZFwiKSAgdGFzay5wcm9qZWN0VHlwZVRleHQgPSBwcm9qZWN0VHlwZVRleHQ7XG4gICAgcmV0dXJuIHRhc2s7XG5cbn1cblxuXG5cbmV4cG9ydCB7ZmluZEJvYXJkVGV4dEJveCwgZ2V0RWxlbWVudEJ5Qm9hcmRJbmRleCwgZ2V0T2JqZWN0VmFsdWUsIGNoYW5nZVZhbHVlVG9EYXRlLCB1bnNoYWRlQnV0dG9ucywgY3JlYXRlVGFza1RlbXBsYXRlLGZpbmRPYmplY3RCeU5hbWV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjb250ZW50XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJcblxuLy8gZG8gbm90IGZvcmdldCB0byBmaXggc3BhY2VzIHByb2JsZW1cbi8vIGRvIG5vdCBmb3JnZXQgdG8gZml4IHNwYWNlcyBwcm9ibGVtXG4vLyBkbyBub3QgZm9yZ2V0IHRvIGZpeCBzcGFjZXMgcHJvYmxlbVxuLy8gZG8gbm90IGZvcmdldCB0byBmaXggc3BhY2VzIHByb2JsZW1cbi8vIGRvIG5vdCBmb3JnZXQgdG8gZml4IHNwYWNlcyBwcm9ibGVtXG5cbi8vIGRvIG5vdCBmb3JnZXQgdG8gZml4IHNwYWNlcyBwcm9ibGVtXG4vLyBkbyBub3QgZm9yZ2V0IHRvIGZpeCBzcGFjZXMgcHJvYmxlbVxuXG5cbmltcG9ydCB7cmVtb3ZlSXRlbSwgYWRkSXRlbSwgYWRkQmluZGluZ3MsIHJlbW92ZUJpbmRpbmdzLCBzZXRBcnJheX0gZnJvbSBcIi4vZWxlbWVudEV2ZW50cy5qc1wiXG5pbXBvcnQge3NlbmR9IGZyb20gXCIuL3NlbmQuanNcIlxuaW1wb3J0IHsgZ2V0SW5pdGlhbEVsZW1lbnRzLCBnZXRVcGRhdGVkRWxlbWVudHMgfSBmcm9tIFwiLi9wYWdlTGF5b3V0LmpzXCI7XG5pbXBvcnQge2ZpbmRCb2FyZFRleHRCb3gsIGdldEVsZW1lbnRCeUJvYXJkSW5kZXgsIGdldE9iamVjdFZhbHVlLCBjaGFuZ2VWYWx1ZVRvRGF0ZSwgdW5zaGFkZUJ1dHRvbnMsIGNyZWF0ZVRhc2tUZW1wbGF0ZSwgZmluZE9iamVjdEJ5TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiO1xuaW1wb3J0IHtjcmVhdGVUYXNrLGNyZWF0ZUJvYXJkLCBjcmVhdGVBZGRCb2FyZCwgY3JlYXRlQm9hcmRFZGl0b3IsIGNyZWF0ZUxpc3RFZGl0b3IsIGNyZWF0ZVVwQ29taW5nQm9hcmR9IGZyb20gXCIuL3RlbXBsYXRlLmpzXCI7XG5cbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknXG5pbXBvcnQgaXNUaGlzV2VlayBmcm9tICdkYXRlLWZucy9pc1RoaXNXZWVrJ1xuaW1wb3J0IGdldERheU9mWWVhciBmcm9tICdkYXRlLWZucy9nZXREYXlPZlllYXInXG5cblxuXG5cbmltcG9ydCB7YXNzaWduVG9vbHMsIGFzc2lnblRhc2tJbmRleCwgYXNzaWduQm9hcmRFbGVtZW50c30gZnJvbSBcIi4vYXNzaWduLmpzXCI7XG5cblxuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuXG4gICAgbGV0IHN0YXRpY0xpc3RUYXNrcyA9IFtdO1xuICAgIGxldCBjaGFuZ2VkTGlzdFRhc2tzID0gW107IFxuXG4gICAgbGV0IHN0YXRpY0JvYXJkTGlzdHMgPSBbXTtcbiAgICBsZXQgY2hhbmdlZEJvYXJkTGlzdHMgPSBbXTtcblxuICAgIGxldCBpbmRleDtcbiAgICBsZXQgY3VycmVudEluZGV4O1xuICAgIGxldCBpc1VwQ29taW5nID0gZmFsc2U7XG5cbiAgICBsZXQgbmV3SW5kZXggPSBmYWxzZTtcbiAgICBsZXQgY2FuRGlzcnVwdCA9IGZhbHNlXG4gICAgbGV0IG5hbWU7XG5cblxuXG5cbiAgICBsZXQgZG9tID0gZ2V0SW5pdGlhbEVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCBhc3NpZ25Cb2FyZEJpbmRpbmdzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUFkZEJvYXJkID0oKSA9PiB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuXG5cbi8vIHdpbGwgYWRkIGtleSBiaW5kaW5ncyBhdCBhIGxhdGVyIGRhdGVcbiAgICBjb25zdCByZW1vdmVDb250ZW50QmluZGluZ3MgPSAoYm9vbCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgcmVtb3ZlQmluZGluZ3MoZWxlbWVudHMuYm9hcmRlckJ1dHRvbiwgYWRkQm9hcmRUYXNrcyxcImNsaWNrXCIpO1xuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy5kZWxldGVCb2FyZCxkZWxldGVCb2FyZCwgXCJjbGlja1wiKTtcbiAgICAgICAgcmVtb3ZlQmluZGluZ3MoZWxlbWVudHMuZWRpdEJvYXJkLGVkaXRCb2FyZCxcImNsaWNrXCIpO1xuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy50YXNrQWRkZXJzLCBhZGRMaXN0RWRpdG9yQ2xpY2ssIFwiY2xpY2tcIilcblxuICAgIH1cblxuXG5cblxuICAgICBjb25zdCBhZGRDb250ZW50QmluZGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJhZGRpbmcgdGhlIGNvbnRlbnQgYmluZGluZ3NcIilcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIC8vIC8vY29uc29sZS5sb2coZWxlbWVudHMuYm9hcmRlckJ1dHRvbiwgXCJlbGVtZW50cyBib2FyZGVyIGJ1dHRvblwiKVxuICAgICAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5ib2FyZGVyQnV0dG9uLCBhZGRCb2FyZFRhc2tzLFwiY2xpY2tcIik7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmRlbGV0ZUJvYXJkLGRlbGV0ZUJvYXJkLCBcImNsaWNrXCIpO1xuICAgICAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5lZGl0Qm9hcmQsZWRpdEJvYXJkLFwiY2xpY2tcIik7XG5cbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMudGFza0FkZGVycywgYWRkTGlzdEVkaXRvckNsaWNrLCBcImNsaWNrXCIpO1xuXG5cbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBjb25zdCBhZGRMaXN0QmluZGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgICAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5idXR0b24sIHNoYWRlQnV0dG9uQ29sb3IsIFwiY2xpY2tcIilcbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMudHJhc2hJdCxkZWxldGVUYXNrLCBcImNsaWNrXCIpO1xuICAgICAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5maW5pc2hlZCxhZGRUYXNrQ2xpY2ssIFwiY2xpY2tcIik7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmVkaXQsIGVkaXRUYXNrLCBcImNsaWNrXCIpO1xuICAgICAgICBhZGRCaW5kaW5ncyhlbGVtZW50cy5jaXJjbGVJY29uLCBjcm9zc091dFRhc2ssIFwiY2xpY2tcIik7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmV4aXRFZGl0b3IsIGV4aXRMaXN0RWRpdG9yLCBcImNsaWNrXCIpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0JpbmRpbmdzID0gKCkgPT4ge1xuICAgICAgICBhZGRMaXN0QmluZGluZ3MoKTtcbiAgICAgICAgYWRkQ29udGVudEJpbmRpbmdzKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbW92ZVRhc2tCaW5kaW5ncyA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlTGlzdEJpbmRpbmdzKCk7XG4gICAgICAgIHJlbW92ZUNvbnRlbnRCaW5kaW5ncygpO1xuICAgIH1cblxuXG5cbiAgICBjb25zdCBhZGRDaGFuZ2VOYW1lQmluZGluZyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmNoYW5nZUJvYXJkVGl0bGVCdXR0b25zLCBjaGFuZ2VOYW1lLCBcImNsaWNrXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUxpc3RCaW5kaW5ncyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmNoYW5nZUJvYXJkVGl0bGVCdXR0b25zLGNoYW5nZU5hbWUsIFwiY2xpY2tcIik7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmJ1dHRvbiwgc2hhZGVCdXR0b25Db2xvciwgXCJjbGlja1wiKVxuICAgICAgICByZW1vdmVCaW5kaW5ncyhlbGVtZW50cy50cmFzaEl0LGRlbGV0ZVRhc2ssIFwiY2xpY2tcIik7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmZpbmlzaGVkLGFkZFRhc2tDbGljaywgXCJjbGlja1wiKTtcbiAgICAgICAgcmVtb3ZlQmluZGluZ3MoZWxlbWVudHMuZWRpdCwgZWRpdFRhc2ssIFwiY2xpY2tcIik7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmNpcmNsZUljb24sIGNyb3NzT3V0VGFzaywgXCJjbGlja1wiKTtcbiAgICAgICAgcmVtb3ZlQmluZGluZ3MoZWxlbWVudHMuZXhpdEVkaXRvciwgZXhpdExpc3RFZGl0b3IsIFwiY2xpY2tcIik7XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGNyb3NzT3V0VGFzaz0gKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IGV2ZW50LnRhcmdldC50YXNrSW5kZXg7XG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gZXZlbnQudGFyZ2V0LmJvYXJkSW5kZXg7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyh0YXNrSW5kZXgsIFwidGhlIGN1cnJlbnQgdGFza2luZGV4XCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGJvYXJkSW5kZXgsIFwidGhlIGN1cnJlbnQgYm9hcmQgaW5kZXhcIilcblxuICAgICAgICBsZXQgdGFzayA9IHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS50YXNrc1t0YXNrSW5kZXhdO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRhc2ssIFwidGhlIGN1cnJlbnQgdGFza1wiKVxuXG4gICAgICAgIHRhc2suY2hlY2tlZCA/IHRhc2suY2hlY2tlZCA9IGZhbHNlOiB0YXNrLmNoZWNrZWQgPSB0cnVlO1xuXG5cbiAgICAgICAgbGV0IGluZGV4ZXMgPSBnZXRJbmRleGVzKClcblxuICAgICAgICBpZiAoaW5kZXhlcykge1xuICAgICAgICAgICAgbGV0IGxpc3RJbmRleCA9IGluZGV4ZXMubGlzdEluZGV4O1xuICAgICAgICAgICAgbGV0IGJvYXJkSW5kZXgyID0gaW5kZXhlcy5ib2FyZEluZGV4O1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGxpc3RJbmRleCwgXCJ0aGUgY3VycmVudCBsaXN0IGluZGV4XCIpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0YXNrSW5kZXgsXCJ0aGUgY3VycmVudCB0YXNrIGluZGV4XCIpXG5cbiAgICAgICAgICAgIGlmICh0YXNrSW5kZXggPT0gbGlzdEluZGV4ICYmIGJvYXJkSW5kZXggPT0gYm9hcmRJbmRleDIpIHJlbW92ZUxpc3RFZGl0b3IoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbmRleGVzLCBcInRoZSBjdXJyZW50IGxpc3QgaW5kZXhcIik7XG4gICAgICAgIC8vY29uc29sZS5sb2codGFza0luZGV4LCBcInRoZSBjdXJyZW50IHRhc2sgaW5kZXhcIilcbiAgICAgICBcblxuICAgICAgICByZW5kZXJMaXN0RWRpdG9yVmFsdWUoKTtcbiAgICAgICAgcmVuZGVyQm9hcmRMaXN0cygpO1xuXG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAgKCkgPT4ge1xuICAgICAgICBsZXQgaW5kZXhlcyA9IGdldEluZGV4ZXMoKTtcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IGluZGV4ZXMubGlzdEluZGV4O1xuICAgICAgICBsZXQgYm9hcmRJbmRleCA9IGluZGV4ZXMuYm9hcmRJbmRleDtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKHRhc2tJbmRleCwgXCJ0aGUgY3VycmVudCB0YXNrIGluZGV4XCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGJvYXJkSW5kZXgsIFwidGhlIGJvYXJkIGluZGV4XCIpXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3NbdGFza0luZGV4XSlcblxuICAgICAgICBsZXQgdGFzayA9IHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS50YXNrc1t0YXNrSW5kZXhdO1xuICAgICAgICB0YXNrLmxpc3RUYXNrID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IG5ld0FycmF5ID0gc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKG5ld0FycmF5LCBcInRoZSBiZWZvcmUgbmV3IGFycmF5XCIpXG5cbiAgICAgICAgbGV0IG5ld2VyQXJyYXkgPSBbXTtcblxuICAgICAgICBuZXdBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2subGlzdFRhc2sgIT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIG5ld2VyQXJyYXkucHVzaCh0YXNrKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vY29uc29sZS5sb2cobmV3ZXJBcnJheSwgXCJ0aGUgbmV3ZXIgYXJyYXlcIilcblxuICAgICAgICBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0udGFza3MgPSBuZXdlckFycmF5XG5cblxuXG5cbiAgICAgICAgcmVtb3ZlTGlzdEVkaXRvcigpO1xuXG4gICAgICAgIHJlbmRlckJvYXJkTGlzdHMoKTtcblxuXG5cblxuICAgICAgICBcbiAgICB9XG5cblxuXG5cbiAgICBjb25zdCBlZGl0VGFzayA9IChldmVudCkgPT4ge1xuXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2coW2V2ZW50LnRhcmdldF0pXG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gZXZlbnQudGFyZ2V0LmJvYXJkSW5kZXg7XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSBldmVudC50YXJnZXQudGFza0luZGV4O1xuXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJcXG5cIilcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0YXNrSW5kZXgsIFwidGhlIGN1cnJlbnQgdGFzayBpbmRleFwiKVxuIFxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKGJvYXJkSW5kZXgsXCJ0aGUgY3VycmVudCBib2FyZCBpbmRleFwiKVxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cywgXCJjaGFuZ2VkIGJvYXJkIGxpc3RzXCIpXG4gICAgICAgIGxldCB0YXNrID0gc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzW3Rhc2tJbmRleF07XG4gICAgICAgIC8vY29uc29sZS5sb2codGFzay50ZXh0LCBcInRoZSB0YXNrIHRleHRcIilcbiAgICAgICAgbGV0IHRleHQgPSB0YXNrLnRleHQ7XG4gICAgICAgIGxldCBkYXRlID0gdGFzay5kYXRlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhkYXRlLCBcInRoZSBjdXJyZW50IGRhdGVcIilcbiAgICAgIC8vICAvL2NvbnNvbGUubG9nKHRhc2ssIFwidGhlIGN1cnJlbnQgdGFza1wiKVxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRhc2suZGF0ZSwgXCJ0aGUgY3VycmVudCBkYXRlXCIpXG5cblxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHByaW9yaXR5LCBcInRoZSBjdXJyZW50IHByaW90cml0eVwiKVxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRhc2tJbmRleCk7XG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codGV4dCk7XG4gICAgICAgIC8vIC8vY29uc29sZS5sb2coYm9hcmRJbmRleCk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgYWRkTGlzdEVkaXRvcihib2FyZEluZGV4LCB0YXNrSW5kZXgsIHRleHQsIGRhdGUscHJpb3JpdHkpXG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICBjb25zdCBleGl0TGlzdEVkaXRvciA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlTGlzdEVkaXRvcigpO1xuICAgICAgICByZW5kZXJCb2FyZExpc3RzKCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCByZW1vdmVMaXN0RWRpdG9yID0gKCkgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdUYXNrcyA9IHRhc2suY2hhbmdlZEJvYXJkTGlzdHM7XG4gICAgICAgICAgICBuZXdUYXNrcyA9IG5ld1Rhc2tzLmZpbHRlcih0YXNrID0+IHRhc2subGlzdEVkaXRvciAhPSB0cnVlICk7XG4gICAgICAgICAgICB0YXNrLmNoYW5nZWRCb2FyZExpc3RzID0gbmV3VGFza3M7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBjb25zdCBmaW5kTGlzdEVkaXRvckJvYXJkSW5kZXggPSAoKSA9PiB7XG4gICAgICAgIGxldCBuZXdUYXNrcyA9IHN0YXRpY0xpc3RUYXNrcztcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSAwO1xuICAgICAgICBsZXQgc3RvcExvb3AgPSBmYWxzZTtcblxuICAgICAgICBuZXdUYXNrcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIC8vIC8vY29uc29sZS5sb2coYm9hcmQsIFwidGhlIGN1cnJlbnQgYm9hcmRcIilcbiAgICAgICAgICAgIGJvYXJkLmNoYW5nZWRCb2FyZExpc3RzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2subGlzdEVkaXRvciA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgc3RvcExvb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKHN0b3BMb29wKSByZXR1cm47XG4gICAgICAgICAgICBib2FyZEluZGV4ICsrO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBib2FyZEluZGV4O1xuICAgIH1cblxuXG5cblxuXG4gICAgY29uc3QgZ2V0SW5kZXhlcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGJyZWFrTG9vcCA9IGZhbHNlO1xuICAgICAgICBsZXQgaW5kZXhlcztcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSAwO1xuICAgICAgICBsZXQgbGlzdEluZGV4O1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIHRhc2suY2hhbmdlZEJvYXJkTGlzdHMuZm9yRWFjaChsaXN0VGFzayA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RUYXNrLmxpc3RFZGl0b3Ipe1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RUYXNrLmluZGV4ICE9IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEluZGV4ID0gbGlzdFRhc2suaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzICA9IHtib2FyZEluZGV4LCBsaXN0SW5kZXh9O1xuICAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGluZGV4ZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGJyZWFrTG9vcCkgcmV0dXJuO1xuICAgICAgICAgICAgYm9hcmRJbmRleCArKztcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgfVxuXG5cblxuXG5cblxuICAgIGNvbnN0IGFkZFRhc2tDbGljayA9ICgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ZXMgPSBnZXRJbmRleGVzKCk7XG5cbiAgICAgICAgaWYgKGluZGV4ZXMgIT09IGZhbHNlKXtcbiAgICAgICAgICAgIGFkZFRhc2soaW5kZXhlcy5saXN0SW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkVGFzaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFza0J5TGlzdEluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBib2FyZEluZGV4ID0gMFxuICAgICAgICBsZXQgY3VycmVudEJvYXJkSW5kZXggPSBmYWxzZTtcbiAgICAgICAgY2hhbmdlZExpc3RUYXNrcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIGlmIChib2FyZFtpbmRleF0ubGlzdEVkaXRvcikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCb2FyZEluZGV4ID0gYm9hcmRJbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkSW5kZXggKys7XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCFjdXJyZW50Qm9hcmRJbmRleCkgcmV0dXJuIGN1cnJlbnRCb2FyZEluZGV4O1xuICAgICAgICByZXR1cm4gc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzW2luZGV4XTtcblxuICAgIH1cblxuXG4gICAgY29uc3QgdXBkYXRlTmF2VGFza3MgPSAobmF2SW5kZXgsIGJvYXJkSW5kZXgsIHRhc2tJbmRleCwgbmV3VGFzaykgPT4ge1xuICAgICAgICBsZXQgYWxsVGFza3MgPSBzZW5kLmdldEFsbERhdGEoKTtcbiAgICAgICAgYWxsVGFza3NbbmF2SW5kZXhdW2JvYXJkSW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0gPSBuZXdUYXNrO1xuICAgICAgICBzZW5kLm92ZXJ3cml0ZURhdGEoYWxsVGFza3MpO1xuICAgICAgICBcblxuXG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGFkZFRhc2sgPSAgKGluZGV4KSA9PiB7XG4gICAgXG5cbiAgICBcblxuICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgbGV0IGRhdGVWYWx1ZSA9IGVsZW1lbnRzLmRhdGVQaWNrZXJbMF0udmFsdWVcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlO1xuICAgIFxuICAgICAgICBpZiAoZGF0ZVZhbHVlLmxlbmd0aCA9PSAwKSBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGVsc2UgY3VycmVudERhdGUgPSBjaGFuZ2VWYWx1ZVRvRGF0ZShkYXRlVmFsdWUpO1xuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKGN1cnJlbnREYXRlLCBcInRoZSBjdXJyZW50IGRhdGVcIilcbiAgICAgICAgbGV0IHRhc2tUZXh0ID0gZWxlbWVudHMudGFza1RleHRCb3hbMF0udmFsdWU7XG4gICAgICAgIGlmICh0YXNrVGV4dC5sZW5ndGggPT0gMCkgdGFza1RleHQgPSBcIk5ldyBUYXNrXCI7XG5cbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZ2V0T2JqZWN0VmFsdWUoXCJsaXN0RWRpdG9yXCIsXCJwcmlvcml0eVwiLHN0YXRpY0xpc3RUYXNrcyk7XG5cblxuICAgICAgICBcbiAgICAgICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrVGVtcGxhdGUodGFza1RleHQsY3VycmVudERhdGUscHJpb3JpdHkpO1xuICAgICAgICBsZXQgYm9hcmRJbmRleCA9IGZpbmRMaXN0RWRpdG9yQm9hcmRJbmRleCgpO1xuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKGJvYXJkSW5kZXgpO1xuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRhc2ssXCJ0aGUgY3VycmVudCB0YXNrXCIpXG5cbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhpbmRleCwgXCJ0aGUgY3VycmVudCB2YWx1ZSBvZiBpbmRleFwiKVxuXG4gICAgICAgICBpZiAodHlwZW9mIGluZGV4ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFzayA9IGdldFRhc2tCeUxpc3RJbmRleChpbmRleCk7XG5cbiAgICAgICAgICAgICBpZiAoaXNVcENvbWluZyAmJiBjdXJyZW50VGFzay5ib2FyZEluZGV4ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgbGV0IG5hdkluZGV4ID0gY3VycmVudFRhc2submF2SW5kZXg7XG4gICAgICAgICAgICAgICAgIGxldCBib2FyZEluZGV4ID0gY3VycmVudFRhc2suYm9hcmRJbmRleDtcbiAgICAgICAgICAgICAgICAgbGV0IHRhc2tJbmRleCA9IGN1cnJlbnRUYXNrLnRhc2tJbmRleFxuICAgICAgICAgICAgICAgICB1cGRhdGVOYXZUYXNrcyhuYXZJbmRleCxib2FyZEluZGV4LHRhc2tJbmRleCx0YXNrKVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS50YXNrc1tpbmRleF0gPSB0YXNrO1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzO1xuICAgICAgICAgICAgc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzID0gdGFza3M7XG5cbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgbGV0IHRhc2tzID0gc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLnRhc2tzO1xuICAgICAgICAgICAgLy8gIC8vY29uc29sZS5sb2codGFza3MsIFwidGhlIGN1cnJlbnQgdGFza3NcIilcbiAgICAgICAgICAgICBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHMgPSB0YXNrcztcbiAgICAgICAgIH1cbiAgICAgICAgLy8gIC8vY29uc29sZS5sb2coc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzLCBcInN0YXRpYyBjaGFuZ2UgYm9hcmQgbGlzdHNcIik7XG4gICAgICAgIC8vICAvL2NvbnNvbGUubG9nKHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS50YXNrcywgXCJ0YXNrb3NcIilcblxuICAgICAgICByZW5kZXJCb2FyZExpc3RzKCk7XG4gICAgfVxuXG5cblxuXG5cbiAgICBjb25zdCBzaGFkZUJ1dHRvbkJ5Q2xhc3MgPSAoY2xhc3NOYW1lLGNvbG9yKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgICAgICBsZXQgYnV0dG9ucyA9IGVsZW1lbnRzLmJ1dHRvbjtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGJ1dHRvbnMuZmlsdGVyKGJ1dHRvbiA9PiBidXR0b24uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gY2xhc3NOYW1lKVswXTtcbiAgICAgICAgbGV0IGJ1dHRvblBhcmFncmFwaCA9IEFycmF5LmZyb20oYnV0dG9uLmNoaWxkcmVuKVswXTtcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhidXR0b25QYXJhZ3JhcGgsXCJUaGUgY3VycmVudCBidXR0b24gcGFyYWdyYXBoXCIpXG4gICAgICAgIGJ1dHRvblBhcmFncmFwaC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG5cbiAgICB9XG5cbiAgICBjb25zdCBzaGFkZUJ1dHRvbkJ5UHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcblxuXG4gICAgICAgIGlmIChwcmlvcml0eSA9PSBcIkhpZ2hcIikgc2hhZGVCdXR0b25CeUNsYXNzKFwiYnV0dG9uIGhpZ2hcIixcInJlZFwiKTtcbiAgICAgICAgZWxzZSBpZiAocHJpb3JpdHkgPT0gXCJNZWRpdW1cIikgc2hhZGVCdXR0b25CeUNsYXNzKFwiYnV0dG9uIG1lZGl1bVwiLCBcIiNmZjk4MDBcIik7XG4gICAgICAgIGVsc2UgaWYgKHByaW9yaXR5ID09IFwiTG93XCIpIHNoYWRlQnV0dG9uQnlDbGFzcyhcImJ1dHRvbiBsb3dcIiwgXCJncmVlblwiKTtcblxuICAgIH1cblxuXG5cblxuICAgIGNvbnN0IGNoYW5nZUxpc3RFZGl0b3JQcmlvcml0eSAgPSAoY3VycmVudFByaW9yaXR5KSA9PiB7XG4gICAgICAgIGxldCBsaXN0RWRpdG9yID0gZmluZE9iamVjdEJ5TmFtZShcImxpc3RFZGl0b3JcIixzdGF0aWNMaXN0VGFza3MpO1xuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKGxpc3RFZGl0b3IsIFwiY3VycmVudCBsaXN0IGVkaXRvclwiKVxuICAgICAgICBsaXN0RWRpdG9yLnByaW9yaXR5ID0gY3VycmVudFByaW9yaXR5O1xuICAgICAgICBcblxuICAgIH1cblxuXG4gICAgY29uc3Qgc2hhZGVCdXR0b25Db2xvciA9IChldmVudCkgPT4ge1xuICAgICAgICB1bnNoYWRlQnV0dG9ucygpO1xuICAgICAgICBsZXQgcGFyYWdyYXBoO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYnV0dG9uIGhpZ2hcIiB8fFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYnV0dG9uIG1lZGl1bVwiIHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJidXR0b24gbG93XCJcbiAgICAgICAgKSBwYXJhZ3JhcGggPSBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jaGlsZHJlbilbMF07XG4gICAgICAgIFxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHBhcmFncmFwaCwgXCJ0aGUgY3VycmVudCBwYXJhZ3JhcGhcIilcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiaGlnaFRleHRcIikge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgICAgICAgICAgY2hhbmdlTGlzdEVkaXRvclByaW9yaXR5KFwiSGlnaFwiKVxuXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwibWVkaXVtVGV4dFwiKXtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmY5ODAwXCI7XG4gICAgICAgICAgICBjaGFuZ2VMaXN0RWRpdG9yUHJpb3JpdHkoXCJNZWRpdW1cIilcblxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImxvd1RleHRcIil7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgIGNoYW5nZUxpc3RFZGl0b3JQcmlvcml0eShcIkxvd1wiKVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImJ1dHRvbiBoaWdoXCIpe1xuICAgICAgICAgICAgcGFyYWdyYXBoLnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgICAgICAgICAgY2hhbmdlTGlzdEVkaXRvclByaW9yaXR5KFwiSGlnaFwiKVxuXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwiYnV0dG9uIG1lZGl1bVwiKXtcbiAgICAgICAgICAgIHBhcmFncmFwaC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmY5ODAwXCI7XG4gICAgICAgICAgICBjaGFuZ2VMaXN0RWRpdG9yUHJpb3JpdHkoXCJNZWRpdW1cIilcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJidXR0b24gbG93XCIpe1xuICAgICAgICAgICAgcGFyYWdyYXBoLnN0eWxlLmJhY2tncm91bmQgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICBjaGFuZ2VMaXN0RWRpdG9yUHJpb3JpdHkoXCJMb3dcIilcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBkZWxldGVCb2FyZCA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHN0YXRpY0xpc3RUYXNrcywgXCIgdGhlIHN0YXRpYyBsaXN0IHRhc2tzXCIpO1xuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHNlbmQucmV0cmlldmVEYXRhKGluZGV4KSwgXCJzZW5kIHJldHJpZXZlIGluZGV4XCIpXG5cbiAgICAgICAgc3RhdGljTGlzdFRhc2tzID0gcmVtb3ZlSXRlbShzdGF0aWNMaXN0VGFza3MsIGV2ZW50LnRhcmdldC5ib2FyZEluZGV4KTtcbiAgICBcblxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHN0YXRpY0xpc3RUYXNrcywgXCJzdGF0aWMgbGlzdCB0YXNrc1wiKTtcbiAgICAgICAgY2hhbmdlZExpc3RUYXNrcyA9IHN0YXRpY0xpc3RUYXNrc1xuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKGNoYW5nZWRMaXN0VGFza3MsIFwidGhlIGNoYW5nZWQgbGlzdCB0YXNrc1wiKTtcbiAgICAgICAgcmVuZGVyTGlzdFRhc2tzKCk7XG5cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVFZGl0VGl0bGVNZW51ID0gKCkgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdUYXNrcyA9IHRhc2suY2hhbmdlZEJvYXJkTGlzdHM7XG4gICAgICAgICAgICBuZXdUYXNrcyA9IG5ld1Rhc2tzLmZpbHRlcihsaXN0ID0+IGxpc3QuZWRpdEJvYXJkICE9IHRydWUpO1xuICAgICAgICAgICAgdGFzay5jaGFuZ2VkQm9hcmRMaXN0cyA9IG5ld1Rhc2tzO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cblxuICAgIFxuXG5cblxuICAgIGNvbnN0IGVkaXRCb2FyZCA9IChldmVudCkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSBldmVudC50YXJnZXQuYm9hcmRJbmRleDtcblxuXG4gICAgICAgIHJlbW92ZUVkaXRUaXRsZU1lbnUoKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhpbmRleCwgXCIgdGhlIGluZGV4XCIpXG4gICAgICAgIGxldCBjaGFuZ2VkQm9hcmRMaXN0cyA9IHN0YXRpY0xpc3RUYXNrc1tpbmRleF0uY2hhbmdlZEJvYXJkTGlzdHNcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhjaGFuZ2VkQm9hcmRMaXN0cywgXCIgdGhlIGNoYW5nZWQgYm9hcmQgbGlzdHNcIilcbiAgICBcbiAgICAgICAgbGV0IGN1cnJlbnRUZXh0ID0gZ2V0RWxlbWVudEJ5Qm9hcmRJbmRleChpbmRleCxcImV4YW1wbGVCb2FyZFRleHRcIikudGV4dENvbnRlbnQ7XG5cblxuICAgICAgICBsZXQgZWRpdEJvYXJkVGVtcGxhdGUgPSB7ZWRpdEJvYXJkOiB0cnVlLCB0ZXh0OmN1cnJlbnRUZXh0fTtcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgICAgIG5ld0FycmF5LnB1c2goZWRpdEJvYXJkVGVtcGxhdGUpO1xuICAgICAgICBsZXQgZmluYWxBcnJheSA9IG5ld0FycmF5LmNvbmNhdChjaGFuZ2VkQm9hcmRMaXN0cyk7XG5cbiAgICAgICAgc3RhdGljTGlzdFRhc2tzW2luZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyA9IGZpbmFsQXJyYXk7XG5cbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhzdGF0aWNMaXN0VGFza3NbaW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzLCBcImNoYW5nZWQgYm9hciBsaXN0XCIpXG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICByZW5kZXJCb2FyZExpc3RzKHRydWUpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBhZGRMaXN0RWRpdG9yQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSBldmVudC50YXJnZXQuYm9hcmRJbmRleDtcbiAgICAgICAgYWRkTGlzdEVkaXRvcihib2FyZEluZGV4KVxuXG5cbiAgICB9XG5cbiAgICBcblxuXG4gICAgY29uc3QgYWRkTGlzdEVkaXRvciA9IChib2FyZEluZGV4LGluZGV4LHRleHQsZGF0ZSxwcmlvcml0eSkgPT4ge1xuXG5cbiAgICAgICAgcmVtb3ZlTGlzdEVkaXRvcigpXG4gICAgXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJhZGRpbmcgbGlzdCBlZGl0b3JcIilcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhib2FyZEluZGV4LCBcInRoZSBjdXJyZW50IGJvYXJkIGluZGV4XCIpXG5cblxuICAgIFxuICAgICAgICBsZXQgZmluYWxBcnJheTtcbiAgICAgICAgbGV0IGxpc3RFZGl0b3JUZW1wbGF0ZTtcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKGluZGV4LCBcInRoZSBjdXJyZW50IGluZGV4XCIpXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codHlwZW9mIGluZGV4ICE9IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2cocHJpb3JpdHksIFwidGhlIGN1cnJlbnQgcHJpb3JpdHlcIilcblxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKGluZGV4LCBcInRoZSBjdXJyZW50IGluZGV4XCIpXG4gICAgICAgLy8gIC8vY29uc29sZS5sb2coZGF0ZSwgXCJ0aGUgY3VycmVudCBkYXRlXCIpXG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIGluZGV4ICE9IFwidW5kZWZpbmVkXCIpICBsaXN0RWRpdG9yVGVtcGxhdGUgPSB7bGlzdEVkaXRvcjogdHJ1ZSwgdGV4dDp0ZXh0LGRhdGU6IGRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6cHJpb3JpdHksIGJvYXJkSW5kZXg6Ym9hcmRJbmRleCwgaW5kZXg6IGluZGV4fTtcbiAgICAgICAgZWxzZSBsaXN0RWRpdG9yVGVtcGxhdGUgPSB7bGlzdEVkaXRvcjogdHJ1ZSwgdGV4dDpcIlwiLGRhdGU6Y3VycmVudERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJIaWdoXCIsYm9hcmRJbmRleDpib2FyZEluZGV4LCBjcmVhdGluZ1Rhc2s6IHRydWV9O1xuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgLy8gIC8vY29uc29sZS5sb2cobGlzdEVkaXRvclRlbXBsYXRlLnByaW9yaXR5LCBcImxpc3QgZWRpdG9yIHByaW9yaXR5XCIpXG5cbiAgICBcblxuICAgICAgICBpZiAodHlwZW9mIGluZGV4ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgXG4gICAgICAgICAgICBsZXQgbmV3VGFza3MgPSBzdGF0aWNMaXN0VGFza3NbYm9hcmRJbmRleF0uY2hhbmdlZEJvYXJkTGlzdHM7XG4gICAgICAgICAgICBuZXdUYXNrcy5zcGxpY2UoaW5kZXggKzEsMCxsaXN0RWRpdG9yVGVtcGxhdGUpO1xuICAgICAgICAgICAgZmluYWxBcnJheSA9IG5ld1Rhc2tzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGlzdEJvYXJkQXJyYXkgPSBbbGlzdEVkaXRvclRlbXBsYXRlXTtcbiAgICAgICAgICAgIGxldCBuZXdUYXNrcyA9IHN0YXRpY0xpc3RUYXNrc1tib2FyZEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cztcbiAgICAgICAgICAgIGZpbmFsQXJyYXkgPSBuZXdUYXNrcy5jb25jYXQobGlzdEJvYXJkQXJyYXkpO1xuXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgc3RhdGljTGlzdFRhc2tzW2JvYXJkSW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzID0gZmluYWxBcnJheTtcblxuICAgICAgICByZW5kZXJCb2FyZExpc3RzKCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjaGFuZ2VOYW1lID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgICAgICBsZXQgYm9hcmRUZXh0ID0gZWxlbWVudHMuYm9hcmRDb250ZW50VGV4dEJveFswXS52YWx1ZTtcbiAgICAgICAgaWYgKGJvYXJkVGV4dC5sZW5ndGggPT0gMCApe1xuICAgICAgICAgICAgcmVtb3ZlRWRpdFRpdGxlTWVudSgpO1xuICAgICAgICAgICAgcmVuZGVyQm9hcmRMaXN0cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ICAgXG4gLy8gICAgICAgLy9jb25zb2xlLmxvZyhleGFtcGxlVGV4dCwgXCJ0aGUgZXhhbXBsZSB0ZXh0XCIpXG5cbiAgICAgICAgXG4gICAgICAvLyAgLy9jb25zb2xlLmxvZyhib2FyZFRleHQsIFwiIGN1cnJlbnQgYm9hcmQgdGV4dFwiKVxuICAgICAvLyAgIGNvbnNvbGUuZnJlbmRsb2coZXhhbXBsZVRleHQsIFwidGhlIGV4YW1wbGUgdGV4dCBjb250ZW50XCIpXG4gICAgICAgIGxldCBuZXdUYXNrcyA9IHN0YXRpY0xpc3RUYXNrc1tjdXJyZW50SW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzO1xuICAgICAgICBuZXdUYXNrcyA9IG5ld1Rhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suZWRpdEJvYXJkICE9IHRydWUpXG4gICAgICAgIFxuICAgICAgICBzdGF0aWNMaXN0VGFza3NbY3VycmVudEluZGV4XS5jaGFuZ2VkQm9hcmRMaXN0cyA9IG5ld1Rhc2tzO1xuICAgICAgICBzdGF0aWNMaXN0VGFza3NbY3VycmVudEluZGV4XS50ZXh0ID0gYm9hcmRUZXh0O1xuXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2coc3RhdGljTGlzdFRhc2tzLCBcInRoZSBzdGF0aWMgbGlzdCB0YXNrc1wiKVxuXG4gICAgICAgIHJlbmRlckxpc3RUYXNrcygpO1xuICAgIFxuXG4gICAgfVxuXG5cbi8vZG9tIGVsZW1lbnQgbmFtZXMgY29tZSBmcm9tIHRoZSB1cGRhdGVkIGVsZW1lbnQgdHlwZXNcblxuXG5cbiAgICBjb25zdCByZW5kZXJFZGl0Qm9hcmRUZXh0VmFsdWVzICA9ICgpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgdGFzay5jaGFuZ2VkQm9hcmRMaXN0cy5mb3JFYWNoKGxpc3QgPT57XG4gICAgICAgICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhpbmRleCwgXCIgdGhlIGN1cnJlbnQgaW5kZXhcIilcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5lZGl0Qm9hcmQpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRleHQgPSBmaW5kQm9hcmRUZXh0Qm94KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhjdXJyZW50VGV4dCwgXCIgdGhlIGN1cnJlbnQgdGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICBsaXN0LnRleHQgPSBjdXJyZW50VGV4dDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9KVxuICAgIH1cblxuXG5cblxuXG4gICAgY29uc3QgcmVuZGVyQm9hcmRMaXN0cyA9IChpc0NoYW5nZWROYW1lKSA9PiB7XG5cblxuICAgICAgICByZW1vdmVMaXN0QmluZGluZ3MoKTtcbiAgICAgICAgcmVtb3ZlQm9hcmRPdmVybGF5KCk7XG4gICAgICAgIGxldCBpbmRleGVzTGVuZ3RoID0gc3RhdGljTGlzdFRhc2tzLmxlbmd0aDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzdGF0aWNMaXN0VGFza3MsIFwidGhlIHN0YXRpYyBsaXN0IHRhc2tzXCIpXG5cbiAgICAgICAgY29uc29sZS5sb2coc3RhdGljTGlzdFRhc2tzLCBcInRoZSBzdGF0aWMgbGlzdCB0YXNrXCIpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpLCBcInRoZSBpbmRleFwiKVxuICAgICAgICAgICAgaWYgKHN0YXRpY0xpc3RUYXNrcy5sZW5ndGggIT0gMClyZW5kZXJTaW5nbGVCb2FyZExpc3QoaSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNDaGFuZ2VkTmFtZSlhZGRMaXN0QmluZGluZ3MoKTtcbiAgICAgICAgZWxzZSBhZGRDaGFuZ2VOYW1lQmluZGluZygpO1xuICAgIH1cblxuXG5cblxuICAgIGNvbnN0IHJlbW92ZUJvYXJkT3ZlcmxheSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIGVsZW1lbnRzLmJvYXJkT3ZlcmxheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBjb25zdCBhZGRCb2FyZE92ZXJsYXkgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkT3ZlcmxheSA9IGdldEVsZW1lbnRCeUJvYXJkSW5kZXgoaW5kZXgsXCJib2FyZE92ZXJsYXlcIik7XG4gICAgICAgIGJvYXJkT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgfVxuXG5cblxuICAgIGNvbnN0IHJlbmRlclNpbmdsZUJvYXJkTGlzdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZW5kZXJTaW5nbGVCb2FyZExpc3QsIFwicmVuZGVyIHNpbmdsZSBib2FyZCBsaXN0XCIpXG4gICAgICAgIGxldCB0YXNrTGlzdCA9IGdldEVsZW1lbnRCeUJvYXJkSW5kZXgoaW5kZXgsIFwidGFza0xpc3RzXCIpO1xuICAgICAgICBsZXQgYWRkRGF0ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgZGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QsIFwidGhlIGN1cnJlbnQgdGFzayBsaXN0XCIpXG5cbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRhc2tIb2xkZXIsIFwidGhlIHRhc2sgaG9sZGVyXCIpXG4gICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIC8vLy8gICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCwgXCJ0aGUgY3VycmVudCB0YXNrIGxpc3RcIilcbiAvLyAgICAgICAvL2NvbnNvbGUubG9nKGluZGV4LCBcInRoZSBpbmRleFwiKTtcbi8vICAgICAgICAvL2NvbnNvbGUubG9nKHN0YXRpY0xpc3RUYXNrc1tpbmRleF0sIFwic3RhdGljIGxpc3QgY3VycmVudCBpbmRleFwiKTtcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhzdGF0aWNMaXN0VGFza3NbaW5kZXhdLCBcInN0YXRpYyBsaXN0IHRhc2tzIGluZGV4ZXNcIilcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhzdGF0aWNMaXN0VGFza3NbaW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzLCBcInN0YXRpYyBjaGFuZ2UgYm9hcmQgbGlzdHNcIilcblxuICAgICAgICBzdGF0aWNMaXN0VGFza3NbaW5kZXhdLmNoYW5nZWRCb2FyZExpc3RzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrLCBcImVhY2ggaW5kaXZpZHVhbCB0YXNrXCIpXG4gICAgICAgICAgICBpZiAodGFzay5lZGl0Qm9hcmQpe1xuICAgICAgICAgICAgICAgIGxldCBib2FyZFRleHQgPSBjcmVhdGVCb2FyZEVkaXRvcih0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgKz0gYm9hcmRUZXh0O1xuICAgICAgICAgICAgICAgIGFkZEJvYXJkT3ZlcmxheShpbmRleCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2subGlzdEVkaXRvcil7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBsZXQgbGlzdFRleHQ9IGNyZWF0ZUxpc3RFZGl0b3IodGFzayk7XG4gICAgICAgICAgICAgICAgdGFza0xpc3QuaW5uZXJIVE1MICs9IGxpc3RUZXh0O1xuICAgICAgICAgICAgICAgIC8vIC8vY29uc29sZS5sb2codGFzay5saXN0RWRpdG9yLCBcInRhc2sgbGlzdCBlZGl0b3IgZGF0ZVwiKVxuICAgICAgICAgICAgICAgIC8vIC8vY29uc29sZS5sb2codGFzay5wcmlvcml0eSwgXCJ0YXNrIHByaW9yaXR5XCIpXG4gICAgICAgICAgICAgICAgc2hhZGVCdXR0b25CeVByaW9yaXR5KHRhc2sucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIGRhdGUgPSB0YXNrLmRhdGU7XG4gICAgICAgICAgICAgICAgYWRkRGF0ZSA9IHRydWU7XG5cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmxpc3RUYXNrKXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrLCBcInRoZSBjdXJyZW50IHRhc2tcIilcbiAgICAgICAgICAgICAgICBsZXQgdGFza1RleHQgPSBjcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tUZXh0LCBcInRoZSBjdXJyZW50IHRhc2sgdGV4dFwiKTtcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgKz0gdGFza1RleHQ7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFza0xpc3QsXCIgdGhlIHRleHQgbGlzdFwiKVxuXG5cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgIFxuXG5cbiAgICAgICAgaWYgKGFkZERhdGUpIHNldFRhc2tEYXRlKGRhdGUpO1xuICAgICAgICBsZXQgdGFza0xpc3RDaGlsZHJlbiA9IEFycmF5LmZyb20odGFza0xpc3QuY2hpbGRyZW4pXG4gICAgICAgY29uc29sZS5sb2codGFza0xpc3QsIFwiY3VycmVudCB0YXNrIGxpc3RcIilcbiAgICAgICAgbGV0IGJvYXJkSW5kZXggPSB0YXNrTGlzdC5ib2FyZEluZGV4O1xuICAgICAgICBhc3NpZ25UYXNrSW5kZXgodGFza0xpc3RDaGlsZHJlbixib2FyZEluZGV4KTtcblxuXG5cbiAgICB9XG5cblxuICAgIGNvbnN0IHNldFRhc2tEYXRlID0gKGRhdGUpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSBlbGVtZW50LmRhdGVQaWNrZXJbMF07XG4gICAgICAgIGRhdGVQaWNrZXIudmFsdWVBc0RhdGUgPSBkYXRlO1xuICAgIH1cbiAgICAgXG5cbiAgICBjb25zdCBhZGRCb2FyZFRhc2tLZXlzID0gKGV2ZW50KSA9PiB7XG4gICAgIC8vICAgLy9jb25zb2xlLmxvZyhldmVudC5rZXkpO1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgYWRkQm9hcmRUYXNrcygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCByZW5kZXJMaXN0RWRpdG9yVmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBsaXN0RWRpdG9yID0gZmluZE9iamVjdEJ5TmFtZShcImxpc3RFZGl0b3JcIixzdGF0aWNMaXN0VGFza3MpO1xuICAgICAgICBpZiAoIWxpc3RFZGl0b3IpIHJldHVybjtcblxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKGxpc3RFZGl0b3IsIFwidGhlIGN1cnJlbnQgbGlzdCBlZGl0b3JcIilcblxuXG4gICAgICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IGVsZW1lbnRzLmRhdGVQaWNrZXJbMF07XG4gICAgICAgIGxldCB0YXNrVGV4dEJveCA9IGVsZW1lbnRzLnRhc2tUZXh0Qm94WzBdO1xuXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2coZGF0ZVBpY2tlcik7XG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codGFza1RleHRCb3gpO1xuICAgICAgICAvLyBpZihkYXRlUGlja2VyKSAvL2NvbnNvbGUubG9nKGRhdGVQaWNrZXIudmFsdWVBc0RhdGUsIFwiZGF0ZSBwaWNrZXIgY3VycmVudCBkYXRlXCIpO1xuICAgICAgICAvLyBpZiAodGFza1RleHRCb3gpLy9jb25zb2xlLmxvZyh0YXNrVGV4dEJveC52YWx1ZSwgXCJ0ZXh0Ym94XCIpXG4gICAgICAgIGlmIChkYXRlUGlja2VyKSAgbGlzdEVkaXRvci5kYXRlID0gZGF0ZVBpY2tlci52YWx1ZUFzRGF0ZTtcbiAgICAgICAgaWYgKHRhc2tUZXh0Qm94KSBsaXN0RWRpdG9yLnRleHQgPSB0YXNrVGV4dEJveC52YWx1ZTtcblxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgY29uc3QgYWRkQm9hcmRUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhcImFkZGluZyBib2FyZCB0YXNrc1wiKVxuXG5cbiAgICAgICAgcmVuZGVyTGlzdEVkaXRvclZhbHVlKCk7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgICAgICBsZXQgdGV4dCA9IGVsZW1lbnRzLmJvYXJkVGV4dEJveFswXS52YWx1ZTtcbiAgICAgICAgaWYodGV4dC5sZW5ndGggPT0gMCkgdGV4dCA9IFwiTmV3IEJvYXJkXCI7XG4gICAgICAgIGxldCB0YXNrID0gY3JlYXRlQm9hcmRUZW1wbGF0ZSh0ZXh0KTtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIGNoYW5nZWRMaXN0VGFza3MgPSBzZXRBcnJheShzdGF0aWNMaXN0VGFza3MpXG5cbiAgICAvLyAgICAvL2NvbnNvbGUubG9nKHN0YXRpY0xpc3RUYXNrcywgXCJ0aGUgc3RhdGljIGxpc3QgdGFza3NcIilcblxuICAgICAgICByZW5kZXJMaXN0VGFza3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUb0RvVGFza3MgPSAoY3VycmVudEluZGV4KSA9PiB7XG4gICAgICAgIFxuXG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkVGVtcGxhdGUgPShjdXJyZW50VGV4dCx0YXNrcykgPT4ge1xuICAgICAgICBsZXQgY3VycmVudFRhc2tzID0gW107XG4gICAgICAgIGlmICh0eXBlb2YgdGFza3MgIT0gXCJ1bmRlZmluZWRcIikgY3VycmVudFRhc2tzID0gdGFza3M7IFxuXG4gICAgICAgIGxldCBib2FyZCA9IHtib2FyZDogdHJ1ZSwgdGV4dDpjdXJyZW50VGV4dCwgdGFza3M6IGN1cnJlbnRUYXNrcywgY2hhbmdlZEJvYXJkTGlzdHM6IFtdLCB9O1xuXG5cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cbiAgICBcblxuICAgIGNvbnN0IGNyZWF0ZVVwQ29taW5nVGVtcGxhdGUgPSAoY3VycmVudFRleHQsIHRhc2tzKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50VGFza3MgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrcyAhPSBcInVuZGVmaW5lZFwiKSBjdXJyZW50VGFza3MgPSB0YXNrczsgXG5cbiAgICAgICAgbGV0IGJvYXJkID0ge2lzVXBDb21pbmdCb2FyZDogdHJ1ZSx0ZXh0OmN1cnJlbnRUZXh0LCB0YXNrczogY3VycmVudFRhc2tzLCBjaGFuZ2VkQm9hcmRMaXN0czogW10sIH07XG4gICAgICAgIHJldHVybiBib2FyZDtcblxuXG4gICAgfVxuXG5cblxuICAgIGNvbnN0IHNvcnREYXRlc0J5TGF0ZXN0RGF5ID0gKHRpbWVUYXNrcykgPT4ge1xuICAgICAgICBsZXQgbmV3VGltZVRhc2tzID0gdGltZVRhc2tzO1xuICAgICAgICBuZXdUaW1lVGFza3Muc29ydCgodGltZVRhc2sxLCB0aW1lVGFzazIpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXlzMiA9IGdldERheU9mWWVhcih0aW1lVGFzazIuZGF0ZSk7XG4gICAgICAgICAgICBsZXQgZGF5czEgPSBnZXREYXlPZlllYXIodGltZVRhc2sxLmRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGRheXMyIC0gZGF5czE7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdUaW1lVGFza3M7XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGdldFRhc2tUaW1lVmFsdWVzID0gKCkgPT4ge1xuICAgICAgICBsZXQgbmF2cyA9IHNlbmQuZ2V0QWxsRGF0YSgpO1xuICAgICAgICBsZXQgbmF2S2V5cyA9IE9iamVjdC5rZXlzKG5hdnMpO1xuXG5cbiAgICAgICAgY29uc29sZS5sb2cobmF2cywgXCJ0aGUgbmF2c1wiKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0b2RheVRhc2tzID0gW107XG4gICAgICAgIGxldCB3ZWVrVGFza3MgPSBbXVxuICAgICAgICBcblxuXG4gICAgICAgIG5hdktleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgbGV0IGJvYXJkSW5kZXggPSAwO1xuICAgICAgICAgICAgbmF2c1trZXldLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGJvYXJkLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sudGFza0luZGV4ID0gdGFza0luZGV4O1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmJvYXJkSW5kZXggPSBib2FyZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0YXNrLm5hdkluZGV4ID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICB0YXNrLm5hdk5hbWUgPSBzZW5kLnJldHJpZXZlVGl0bGUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFzay5uYXZOYW1lLFwiY3VycmVudCBuYXYgbmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb2RheSh0YXNrLmRhdGUpKSB0b2RheVRhc2tzLnB1c2godGFzaylcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGhpc1dlZWsodGFzay5kYXRlKSkgd2Vla1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbmRleCsrO1xuICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBib2FyZEluZGV4Kys7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG5cblxuICAgICAgICBjb25zb2xlLmxvZyhuYXZzLCBcInRoZSBhZnRlciBuYXZzXCIpXG5cblxuICAgICAgICB0b2RheVRhc2tzID0gc29ydERhdGVzQnlMYXRlc3REYXkodG9kYXlUYXNrcyk7XG4gICAgICAgIHdlZWtUYXNrcyA9IHNvcnREYXRlc0J5TGF0ZXN0RGF5KHdlZWtUYXNrcyk7XG5cbiAgICAgICAgcmV0dXJuIHt0b2RheVRhc2tzLCB3ZWVrVGFza3N9O1xuICAgIH1cblxuXG5cblxuXG5cbiAgICBjb25zdCBhZGRVcENvbWluZ0JvYXJkcyA9IChhcnJheSkgPT4ge1xuICAgICAgICBsZXQgbmV3QXJyYXkgPSBhcnJheTtcbiAgICAgICAgbGV0IHRvZGF5Qm9hcmQgPSBjcmVhdGVVcENvbWluZ1RlbXBsYXRlKFwiVG9kYXlcIiwgW10pO1xuICAgICAgICBsZXQgd2Vla0JvYXJkID0gY3JlYXRlVXBDb21pbmdUZW1wbGF0ZShcIldlZWtcIixbXSk7XG4gICAgICAgIGxldCB0aW1lQm9hcmRzID0gW3RvZGF5Qm9hcmQsd2Vla0JvYXJkXTtcbiAgICAgICAgdGltZUJvYXJkcy5mb3JFYWNoKGJvYXJkID0+IG5ld0FycmF5LnB1c2goYm9hcmQpKTtcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuXG5cblxuICAgIH1cblxuXG4gICAgY29uc3QgcmVuZGVyTGlzdFRhc2tzID0gKGlzRW1wdHkpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlbmRlcmluZyBsaXN0IHRhc2tzXCIpXG4gICAgICAgIHJlbmRlckVkaXRCb2FyZFRleHRWYWx1ZXMoKTtcbiAgICAgICAgcmVtb3ZlQ29udGVudEJpbmRpbmdzKCk7XG4gICAgICAgIHJlbW92ZUxpc3RCaW5kaW5ncygpOyBcblxuXG4gICAgICAgIFxuXG4gICAgICAgIGlmICghaXNFbXB0eSAmJiAgIWlzVXBDb21pbmcpe1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2tzID0gY2hhbmdlZExpc3RUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmFkZEJvYXJkICE9IHRydWUpO1xuICAgICAgICAgICAgY2hhbmdlZExpc3RUYXNrcyA9IG5ld1Rhc2tzO1xuICAgICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzLnB1c2goe2FkZEJvYXJkOiB0cnVlfSk7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGRvbS5wYWdlQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5ib2FyZCl7XG4gICAgICAgICAgICAgICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQodGFzayk7XG4gICAgICAgICAgICAgICAgZG9tLnBhZ2VDb250ZW50LmlubmVySFRNTCArPSBib2FyZFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXNrLmFkZEJvYXJkKXtcbiAgICAgICAgICAgICAgICBsZXQgYWRkQm9hcmQgPSBjcmVhdGVBZGRCb2FyZCgpO1xuICAgICAgICAgICAgICAgIGRvbS5wYWdlQ29udGVudC5pbm5lckhUTUwgKz0gYWRkQm9hcmQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2suaXNVcENvbWluZ0JvYXJkKXtcbiAgICAgICAgICAgICAgICBsZXQgdXBDb21pbmdCb2FyZCA9IGNyZWF0ZVVwQ29taW5nQm9hcmQodGFzayk7XG4gICAgICAgICAgICAgICAgZG9tLnBhZ2VDb250ZW50LmlubmVySFRNTCArPSB1cENvbWluZ0JvYXJkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgYWRkQ29udGVudEJpbmRpbmdzKCk7XG4gICAgICAgIGFzc2lnbkJvYXJkRWxlbWVudHMoKTtcbiAgICAgICAgcmVuZGVyQm9hcmRMaXN0cygpO1xuICAgIH1cblxuXG5cblxuICAgIGNvbnN0IHNldENoYW5nZWRUb0RvTGlzdHNFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgc3RhdGljTGlzdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICB0YXNrLmNoYW5nZWRCb2FyZExpc3RzID0gW107XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzZXRDaGFuZ2VkVG9Eb0xpc3RzID0gKCkgPT4ge1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIHRhc2suY2hhbmdlZEJvYXJkTGlzdHMgPSAgdGFzay50YXNrcztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUaW1lVGFza3MgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gYWRkVXBDb21pbmdCb2FyZHMoYXJyYXkpO1xuICAgICAgICBsZXQgdGltZXMgPSBnZXRUYXNrVGltZVZhbHVlcygpO1xuICAgICAgICBuZXdBcnJheS5mb3JFYWNoKGJvYXJkPT4ge1xuICAgICAgICAgICAgaWYgKGJvYXJkLnRleHQgPT0gXCJUb2RheVwiKXtcbiAgICAgICAgICAgICAgICBib2FyZC50YXNrcyA9IHRpbWVzLnRvZGF5VGFza3M7XG4gICAgICAgICAgICAgICAgYm9hcmQuY2hhbmdlZEJvYXJkTGlzdHMgPSBib2FyZC50YXNrcztcblxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChib2FyZC50ZXh0ID09IFwiV2Vla1wiKXtcbiAgICAgICAgICAgICAgICBib2FyZC50YXNrcyA9IHRpbWVzLndlZWtUYXNrcztcbiAgICAgICAgICAgICAgICBib2FyZC5jaGFuZ2VkQm9hcmRMaXN0cyA9IGJvYXJkLnRhc2tzO1xuXG4gICAgICAgICAgICB9IFxuXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlTmF2Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5ld1Rhc2tzID0gc2VuZC5yZXRyaWV2ZURhdGEoaW5kZXgpO1xuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKG5ld1Rhc2tzLCBcIiB0aGUgbmV3IHRhc2tcIilcbiAgICAgICAgLy9jb25zb2xlLmxvZyhuZXdUYXNrcyxcImN1cnJlbnQgbmV3IHRhc2tcIilcbiAgICAgICAgaWYgKCFuZXdUYXNrcyl7XG4gICAgICAgICAgICBzZW5kLnNlbmREYXRhKFtdLGluZGV4LG5hbWUpXG4gICAgICAgICAgICBuZXdUYXNrcyA9IHNlbmQucmV0cmlldmVEYXRhKGluZGV4KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhuZXdUYXNrcywgXCJjdXJyZW50IG5ldyB0YXNrXCIpXG5cbiAgICAgICAgc3RhdGljTGlzdFRhc2tzID0gbmV3VGFza3M7XG5cblxuICAgICAgICAvL2NvbnNvbGUubG9nKHN0YXRpY0xpc3RUYXNrcywgXCJ0aGUgc3RhdGljIGxpc3QgdGFza3NcIilcbiAgICAgICAgY2hhbmdlZExpc3RUYXNrcyA9IHNldEFycmF5KHN0YXRpY0xpc3RUYXNrcylcbiAgICAgICAgc2V0Q2hhbmdlZFRvRG9MaXN0cygpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVVcENvbWluZ0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcyA9IFtdO1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MgPSByZW5kZXJUaW1lVGFza3Moc3RhdGljTGlzdFRhc2tzKTtcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGljTGlzdFRhc2tzLCBcInRoZSBzdGF0aWMgbGlzdCB0YXNrc1wiKTtcblxuICAgICAgICBpc1VwQ29taW5nID0gdHJ1ZTtcbiAgICAgICAgY2hhbmdlZExpc3RUYXNrcyA9IHNldEFycmF5KHN0YXRpY0xpc3RUYXNrcylcbiAgICAgIFxuICAgIH1cblxuXG5cblxuICAgIGNvbnN0IGRpc3J1cHRDb250ZW50ID0gKG9iamVjdEluZGV4KSA9PiB7XG4gICAgICAgICAgICBzdGF0aWNMaXN0VGFza3MgPSBbXTtcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChvYmplY3RJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICByZW5kZXJMaXN0VGFza3ModHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2FuRGlzcnVwdCA9IHRydWU7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgIH1cblxuXG4gICAgY29uc3QgYWN0aXZhdGVDb250ZW50ID0gKG9iamVjdEluZGV4LCBkaXNydXB0RmxvdyxvYmplY3ROYW1lKSA9PiB7XG4gICAgICAgIGNoYW5nZWRMaXN0VGFza3MgPSBbXTtcbiAgICAgICAgc2V0Q2hhbmdlZFRvRG9MaXN0c0VtcHR5KCk7XG4gICAgICAgIGlzVXBDb21pbmcgPSBmYWxzZTtcbiAgICAgICAgY2FuRGlzcnVwdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChkaXNydXB0Rmxvdykge1xuICAgICAgICAgICAgZGlzcnVwdENvbnRlbnQob2JqZWN0SW5kZXgpXG4gICAgICAgICAgICBpZiAoY2FuRGlzcnVwdCkgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcIm51bWJlclwiKXtcbiAgICAgICAgICAgIHNlbmQuc2VuZERhdGEoc3RhdGljTGlzdFRhc2tzLGluZGV4LG5hbWUpOyAgXG4gICAgICAgIH0gXG4gICAgICAgIGluZGV4ID0gb2JqZWN0SW5kZXg7XG4gICAgICAgIG5hbWUgPSBvYmplY3ROYW1lO1xuXG4gICAgICAgIGlmIChpbmRleCA9PSBcInVwY29taW5nXCIpe1xuICAgICAgICAgICAgYWN0aXZhdGVVcENvbWluZ0NvbnRlbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2YXRlTmF2Q29udGVudCgpO1xuXG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRpY0xpc3RUYXNrcywgXCJuZXcgdGltZXNcIilcbiAgICAgICAgcmVuZGVyTGlzdFRhc2tzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthY3RpdmF0ZUNvbnRlbnQscmVtb3ZlVGFza0JpbmRpbmdzLCBhZGRUYXNrQmluZGluZ3MgfTtcbiAgICBcblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=