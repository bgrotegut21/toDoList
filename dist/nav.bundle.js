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
___CSS_LOADER_EXPORT___.push([module.id, "/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n  }\n\n\n\n\n\n  .pageContent {\n    display:flex;\n    overflow:auto;\n}\n\n.addBoard {\n    width: 250px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    background:rgb(198, 198, 198);\n    margin:10px;\n    padding-bottom:10px;\n    \n  \n}\n\n\n\n\ninput {\n    outline: none;\n}\n\n\n.boardContent {\n\n    font-family: 'Roboto', sans-serif;\n}\n\n.board {\n    position: relative;\n    text-align:center;\n    background:rgb(198, 198, 198);\n    width: 290px;\n    margin:10px;\n\n\n    \n    padding-bottom:5px;\n}\n\n.boardOverlay {\n    background:rgba(0, 0, 0, 0.299);\n    position:absolute;\n    width:100%;\n    height:100%;\n    top:0;\n    z-index:1;\n    display:none;\n}\n\n.deleteBoard, .editBoard {\n    cursor: pointer;\n}\n\n\n.taskHolder {\n    display:flex;\n    align-items:center;\n}\n\n.taskTextBox {\n    width:135px;\n}\n.exampleBoardText {\n    position:relative;\n    top:4px;\n    font-size: large\n}\n\n\n.addBoardText {\n    margin-top:5px;\n    font-size: large;\n\n\n}\n\n\n\n.task {\n    background:rgb(237, 230, 230);\n    border-left: 8px solid red;\n    margin:10px;\n}\n\n.taskTools {\n    display:flex;\n    justify-content:space-between;\n    padding-left:10px;\n    padding-right:10px;\n    margin-top:10px;\n\n}\n.tools {\n    display:flex;\n}\n\n\n.taskLabel {\n    position: relative;\n    top:5px;\n    word-wrap: break-word;\n    margin-bottom:10px;\n    font-size: smaller;\n\n    border: 0;\n\n}\n.generalText {\n    font-size:10px;\n    margin-right: 20px;\n\n}\n\n.generalTextHolder {\n    display:flex;\n}\n\n\n\n\n.circleIcon {\n    width:10px;\n    height:10px;\n    border-radius:20px;\n    border: 3px solid black;\n    cursor:pointer;\n}\n.edit {\n    width:20px;\n    cursor:pointer;\n    margin-right:6px;\n}\n\n.circleIcon:hover {\n    background:black;\n}\n\n\n\n.taskAdder {\n    margin-top:10px;\n}\n\n\n.taskAdder:hover {\n   cursor:pointer;\n   background:rgb(178, 178, 178)\n}\n\n\n\n\n\n\n\n\n.priority {\n    display:flex;\n    margin:5px;\n\n}\n.editTools {\n    display:flex;\n    width:50px;\n\n}\n.dateTool {\n    margin:5px;\n    margin-right:14px;\n    display:flex;\n}\n.taskTextBox {\n    height:20px;\n    font-family: 'Roboto', sans-serif;\n    margin:5px;\n}\n\n.editToolHolder {\n\n    display:flex;\n    justify-content:space-between;\n    \n}\n\n.buttons {\n    margin-left: 5px;\n}\n\n.datePicker {\n    margin-left:5px;\n    width:135px;\n    height:20px;\n    border:0;\n}\n\n\n\n.taskEditor {\n    background: rgb(237, 230, 230);\n    margin:10px;\n    margin-left:20px;\n    display:flex;\n    align-items: center;\n    border-left: 8px blue solid;\n    flex-direction: column;\n\n\n}\n\n\n.taskTextBox{\n    border:0;\n    margin:5px;\n\n}\n\n\n\n\n.buttons .button {\n\n    cursor: pointer;\n}\n\n.high {\n    border:5px solid red;\n}\n\n.medium {\n    border: 5px solid rgb(255,202,10);\n}\n\n\n.low {\n\n    border:5px solid green;\n}\n\n.low:hover {\n    background:green;\n}\n\n.high:hover {\n    background:red;\n}\n\n.medium:hover {\n    background: rgb(255,202,10);\n}\n\n.button {\n    color:black;\n    height:15px;\n    width:35px;\n    line-height: 15px;\n    font-size: x-small;\n    margin:2px; \n\n}\n\n\n.buttons {\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n\n}\n\n.trashIt, .finished {\n    cursor: pointer;\n}\n\n\n.projectTypeText {\n    position:relative;\n    bottom:2px;\n}\n\n.addBoarderButton {\n    background:0;\n    width:100%;\n    border:0;\n    margin-top: 5px;\n    height:20px;\n    cursor:pointer;\n}\n\n.addBoarderButton:hover {\n    background:rgb(178, 178, 178);\n}\n\n\n\n.addBoarderTextBox {\n    font-family: 'Roboto', sans-serif;\n    border:0;\n    margin-top:5px;\n    height:20px;\n    width:220px;\n}\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n.editBoard, .deleteBoard {\n    width:20px;\n}\n\n.editExampleIcons {\n\n    height:25px;\n    \n    display:flex;\n\n\n}\n\n.emptyrow {\n   \n    height:25px;\n    width:100%;\n    text-indent: -9999px;\n    \n}\n\n.editBoard, .deleteBoard {\n    margin-left:10px;\n\n\n}\n\n.boardtextBox {\n    font-family: 'Roboto', sans-serif;\n    text-align: center;\n    font-size: large;\n    width:100%;\n    height:20px;\n    border:0;\n    background:none;\n    \n \n}\n\n.boardTextEditor {\n    background:rgb(215, 213, 213);\n    position:relative;\n    z-index:3;\n    display:flex;\n    justify-content:center;\n    display:none;\n\n \n}\n\n.changeBoardTitleButton {\n    cursor: pointer;\n}\n\n\n\n\n\n\n\n@media only screen and (max-width: 300px){\n\n    .editExampleIcons {\n        height:15px;\n    }\n\n    .emptyrow {\n        height:15px;\n    }\n\n    .deleteBoard, .editBoard {\n        width:12px;\n    }\n\n\n\n    .board{\n        width:185px;\n    }\n\n    .taskLabel {\n        font-size:xx-small\n    }\n\n    .edit {\n\n        width:10px;\n        \n\n    }\n\n    .generalText {\n        font-size:6px;\n        \n    }\n\n    \n    .exampleBoardText {\n        word-wrap: break-word;\n        font-size: x-small;\n    }\n\n    .boardtextBox {\n        font-size: x-small;\n        height:12px;\n    }\n\n    .addBoard {\n    \n        width:185px;\n      \n    }\n    .changeBoardTitleButton {\n        font-size: x-small;\n    }\n\n    .addBoardText {\n        font-size:x-small;\n    }\n\n    .addBoarderTextBox {\n        height:12px;\n        font-size: xx-small;\n        width:160px;\n    }\n    \n    .addBoarderButton {\n        font-size: x-small;\n    }\n\n    .task {\n        margin:5px; \n    }\n    .circleIcon {\n        width:2px;\n        height:2px\n    }\n\n    .taskHolderText, .dateText, .buttonText {\n        font-size:xx-small;\n        \n    }\n\n    .taskTools {\n        \n        padding-right:5px;\n        padding-left:5px;\n        margin-top:5px;\n\n    }\n\n    .taskTextBox {\n        width:80px;\n        height:12px;\n        font-size: xx-small;\n    }\n\n    .datePicker {\n        width:80px;\n        font-size: 6px;\n        height:12px;\n    }\n\n\n    \n    .high {\n        border: 3px solid red;\n    }\n\n    .medium {\n        border: 3px solid rgb(255,202,10);\n    }\n\n    .low {\n        border: 3px solid green;\n   \n    }\n\n    .task {\n        border-left: 4px solid red;\n    }\n\n    .taskEditor {\n        border-left:  4px solid blue;\n    }\n\n\n\n\n    .button {\n\n        height:10px;\n        line-height: 10px;\n        width:20px;\n        font-size: 6px;\n    }\n\n    .editTools {\n        margin-left: 30px;\n    }\n\n    .trashIt, .finished {\n        width:15px;\n\n    }\n\n    .taskAdder {\n        font-size: xx-small;\n    }\n\n\n\n}\n", "",{"version":3,"sources":["webpack://./src/styles/board.css"],"names":[],"mappings":"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","sourcesContent":["/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n  }\n\n\n\n\n\n  .pageContent {\n    display:flex;\n    overflow:auto;\n}\n\n.addBoard {\n    width: 250px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    background:rgb(198, 198, 198);\n    margin:10px;\n    padding-bottom:10px;\n    \n  \n}\n\n\n\n\ninput {\n    outline: none;\n}\n\n\n.boardContent {\n\n    font-family: 'Roboto', sans-serif;\n}\n\n.board {\n    position: relative;\n    text-align:center;\n    background:rgb(198, 198, 198);\n    width: 290px;\n    margin:10px;\n\n\n    \n    padding-bottom:5px;\n}\n\n.boardOverlay {\n    background:rgba(0, 0, 0, 0.299);\n    position:absolute;\n    width:100%;\n    height:100%;\n    top:0;\n    z-index:1;\n    display:none;\n}\n\n.deleteBoard, .editBoard {\n    cursor: pointer;\n}\n\n\n.taskHolder {\n    display:flex;\n    align-items:center;\n}\n\n.taskTextBox {\n    width:135px;\n}\n.exampleBoardText {\n    position:relative;\n    top:4px;\n    font-size: large\n}\n\n\n.addBoardText {\n    margin-top:5px;\n    font-size: large;\n\n\n}\n\n\n\n.task {\n    background:rgb(237, 230, 230);\n    border-left: 8px solid red;\n    margin:10px;\n}\n\n.taskTools {\n    display:flex;\n    justify-content:space-between;\n    padding-left:10px;\n    padding-right:10px;\n    margin-top:10px;\n\n}\n.tools {\n    display:flex;\n}\n\n\n.taskLabel {\n    position: relative;\n    top:5px;\n    word-wrap: break-word;\n    margin-bottom:10px;\n    font-size: smaller;\n\n    border: 0;\n\n}\n.generalText {\n    font-size:10px;\n    margin-right: 20px;\n\n}\n\n.generalTextHolder {\n    display:flex;\n}\n\n\n\n\n.circleIcon {\n    width:10px;\n    height:10px;\n    border-radius:20px;\n    border: 3px solid black;\n    cursor:pointer;\n}\n.edit {\n    width:20px;\n    cursor:pointer;\n    margin-right:6px;\n}\n\n.circleIcon:hover {\n    background:black;\n}\n\n\n\n.taskAdder {\n    margin-top:10px;\n}\n\n\n.taskAdder:hover {\n   cursor:pointer;\n   background:rgb(178, 178, 178)\n}\n\n\n\n\n\n\n\n\n.priority {\n    display:flex;\n    margin:5px;\n\n}\n.editTools {\n    display:flex;\n    width:50px;\n\n}\n.dateTool {\n    margin:5px;\n    margin-right:14px;\n    display:flex;\n}\n.taskTextBox {\n    height:20px;\n    font-family: 'Roboto', sans-serif;\n    margin:5px;\n}\n\n.editToolHolder {\n\n    display:flex;\n    justify-content:space-between;\n    \n}\n\n.buttons {\n    margin-left: 5px;\n}\n\n.datePicker {\n    margin-left:5px;\n    width:135px;\n    height:20px;\n    border:0;\n}\n\n\n\n.taskEditor {\n    background: rgb(237, 230, 230);\n    margin:10px;\n    margin-left:20px;\n    display:flex;\n    align-items: center;\n    border-left: 8px blue solid;\n    flex-direction: column;\n\n\n}\n\n\n.taskTextBox{\n    border:0;\n    margin:5px;\n\n}\n\n\n\n\n.buttons .button {\n\n    cursor: pointer;\n}\n\n.high {\n    border:5px solid red;\n}\n\n.medium {\n    border: 5px solid rgb(255,202,10);\n}\n\n\n.low {\n\n    border:5px solid green;\n}\n\n.low:hover {\n    background:green;\n}\n\n.high:hover {\n    background:red;\n}\n\n.medium:hover {\n    background: rgb(255,202,10);\n}\n\n.button {\n    color:black;\n    height:15px;\n    width:35px;\n    line-height: 15px;\n    font-size: x-small;\n    margin:2px; \n\n}\n\n\n.buttons {\n    display:flex;\n    justify-content:center;\n    align-items: center;\n\n\n}\n\n.trashIt, .finished {\n    cursor: pointer;\n}\n\n\n.projectTypeText {\n    position:relative;\n    bottom:2px;\n}\n\n.addBoarderButton {\n    background:0;\n    width:100%;\n    border:0;\n    margin-top: 5px;\n    height:20px;\n    cursor:pointer;\n}\n\n.addBoarderButton:hover {\n    background:rgb(178, 178, 178);\n}\n\n\n\n.addBoarderTextBox {\n    font-family: 'Roboto', sans-serif;\n    border:0;\n    margin-top:5px;\n    height:20px;\n    width:220px;\n}\n\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(../images/hamburgerMenu.svg);\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n.editBoard, .deleteBoard {\n    width:20px;\n}\n\n.editExampleIcons {\n\n    height:25px;\n    \n    display:flex;\n\n\n}\n\n.emptyrow {\n   \n    height:25px;\n    width:100%;\n    text-indent: -9999px;\n    \n}\n\n.editBoard, .deleteBoard {\n    margin-left:10px;\n\n\n}\n\n.boardtextBox {\n    font-family: 'Roboto', sans-serif;\n    text-align: center;\n    font-size: large;\n    width:100%;\n    height:20px;\n    border:0;\n    background:none;\n    \n \n}\n\n.boardTextEditor {\n    background:rgb(215, 213, 213);\n    position:relative;\n    z-index:3;\n    display:flex;\n    justify-content:center;\n    display:none;\n\n \n}\n\n.changeBoardTitleButton {\n    cursor: pointer;\n}\n\n\n\n\n\n\n\n@media only screen and (max-width: 300px){\n\n    .editExampleIcons {\n        height:15px;\n    }\n\n    .emptyrow {\n        height:15px;\n    }\n\n    .deleteBoard, .editBoard {\n        width:12px;\n    }\n\n\n\n    .board{\n        width:185px;\n    }\n\n    .taskLabel {\n        font-size:xx-small\n    }\n\n    .edit {\n\n        width:10px;\n        \n\n    }\n\n    .generalText {\n        font-size:6px;\n        \n    }\n\n    \n    .exampleBoardText {\n        word-wrap: break-word;\n        font-size: x-small;\n    }\n\n    .boardtextBox {\n        font-size: x-small;\n        height:12px;\n    }\n\n    .addBoard {\n    \n        width:185px;\n      \n    }\n    .changeBoardTitleButton {\n        font-size: x-small;\n    }\n\n    .addBoardText {\n        font-size:x-small;\n    }\n\n    .addBoarderTextBox {\n        height:12px;\n        font-size: xx-small;\n        width:160px;\n    }\n    \n    .addBoarderButton {\n        font-size: x-small;\n    }\n\n    .task {\n        margin:5px; \n    }\n    .circleIcon {\n        width:2px;\n        height:2px\n    }\n\n    .taskHolderText, .dateText, .buttonText {\n        font-size:xx-small;\n        \n    }\n\n    .taskTools {\n        \n        padding-right:5px;\n        padding-left:5px;\n        margin-top:5px;\n\n    }\n\n    .taskTextBox {\n        width:80px;\n        height:12px;\n        font-size: xx-small;\n    }\n\n    .datePicker {\n        width:80px;\n        font-size: 6px;\n        height:12px;\n    }\n\n\n    \n    .high {\n        border: 3px solid red;\n    }\n\n    .medium {\n        border: 3px solid rgb(255,202,10);\n    }\n\n    .low {\n        border: 3px solid green;\n   \n    }\n\n    .task {\n        border-left: 4px solid red;\n    }\n\n    .taskEditor {\n        border-left:  4px solid blue;\n    }\n\n\n\n\n    .button {\n\n        height:10px;\n        line-height: 10px;\n        width:20px;\n        font-size: 6px;\n    }\n\n    .editTools {\n        margin-left: 30px;\n    }\n\n    .trashIt, .finished {\n        width:15px;\n\n    }\n\n    .taskAdder {\n        font-size: xx-small;\n    }\n\n\n\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg'); /* Legacy iOS */\n  }\n\n  /* cutive-mono-regular - latin */\n@font-face {\n    font-family: 'Cutive Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "); /* IE9 Compat Modes */\n    src: local(''),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('embedded-opentype'), /* IE6-IE8 */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('woff'), /* Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('truetype'), /* Safari, Android, iOS */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('svg'); /* Legacy iOS */\n  }\n\n\n  .navigation {\n    width:250px;\n    flex-shrink: 0;\n    font-family: 'Roboto', sans-serif;\n    background:rgb(19, 75, 205);\n    overflow:auto;\n\n\n}\n\n.projectButton, .upComingButton {\n\n    height:30px;\n    line-height:28px;\n\n    width:100%;\n\n    font-size: small;\n\n    \n    \n}\n\n.deleteItem, .editProject {\n    cursor: pointer;\n}\n\n.mobileMenu {\n    display:none;\n}\n\n.listTitle, .projectText, .plusSign {\n    font-family: 'Cutive Mono', monospace;\n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n    cursor:pointer;\n    text-align: center;\n}\n\n.projectTaskHolder {\n    width:100%;\n    z-index:3;\n}\n\n.projectContainer {\n    white-space: nowrap;\n    width:75%;\n    text-align: center;\n\n}\n\n.projectContainerText {\n    cursor: pointer;\n}\n\n.projectContainer p {\n    margin-right:40px;\n}\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n.wholeOverlay {\n    background:none;\n    position:absolute;\n    height:100%;\n    width:100%;\n    z-index:3;\n    cursor: pointer;\n    display:none;\n \n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n\n    text-align: center;\n}\n\n\n.projectContainer {\n    width:75%;\n    text-align: center;\n\n}\n\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n\n\n.editProjectButton{\n\n    width:100%;\n    display:flex;\n    z-index:3;\n \n    justify-content:flex-end;\n    background:rgb(22, 83, 227);\n \n\n \n }\n \n \n .addProjectLabel {\n     line-height: 28px;\n     position:relative;\n     right:3px;\n\n     \n     cursor: pointer;\n \n \n }\n \n .editText {\n     background:none;\n \n     color:white;\n     outline:none;\n     border:none;\n     height:30px;\n     margin-right:5px;\n    font-size:small;\n }\n \n\n .elements{\n    margin-top: 20px;\n    color:white;\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n\n\n}\n\n.plusSign {\n    margin-left: 5px;\n}\n\n.projectButtonHover:hover, .projectAdder:hover, .upComingButton:hover{\n    background:rgb(22, 83, 227);\n    \n}\n\n \n \n \n.editText::placeholder {\n     \n \n     color:white;\n}\n \n \n .overlay {\n     background:rgba(0, 0, 0, 0.299);\n     height:100%;\n     width:250px;\n     z-index:1;\n     \n     text-indent: -9999px;\n     position:absolute;\n     top:0px;\n\n\n     display:none;\n \n   \n \n}\n\n.projectAdder {\n\n    margin-top:20px;\n    margin-bottom: 20px;\n    justify-content: center;\n    display:flex;\n    cursor:pointer;\n\n    width:100%\n    \n}\n\n.exit {\n    display:none;\n}\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n\n@media only screen and (max-width:550px){\n\n \n    .overlay {\n        width:100%;\n        display:none;\n    }\n\n    .navigation {\n        display:none;\n    }\n\n    .mobileMenu {\n        display:flex;\n    }\n\n    .pageContent {\n        display:none;\n    }\n\n    .sections {\n        flex-direction: column;\n    }\n\n    .navigation {\n        width:100%;\n        height:100%;\n        \n        \n       \n    }\n\n    .projectButton{\n        justify-content: center;\n    }\n\n    .projectContainer {\n        justify-content: flex-start;\n    }\n\n    .projectContainer p {\n    \n        text-align: center;\n        margin-right:50px;\n    }\n    .projectTools {\n        width:15%;\n\n    }\n\n    .editProjectButton{\n        justify-content: center;\n    }\n\n    .editText{\n        margin-left: 100px;\n\n    }\n\n\n\n\n\n    .exit {\n        display:block;\n        text-align: left;\n        color:white;\n        margin:10px;\n        cursor: pointer;\n    }\n}\n\n@media only screen and (max-width: 350px){\n    .deleteItem, .editProject {\n        width:15px;\n    }\n}\n\n@media only screen and (max-width: 225px){\n    .deleteItem, .editProject {\n        width:11.5px;\n    }\n}\n\n@media only screen and (max-width:200px){\n    .listTitle {\n        font-size: x-large;\n    }\n}\n\n\n\n@media only screen and (max-width: 300px){\n\n\n\n    .projectContainer p{\n        margin-right:30px;\n    }\n\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles/navigation.css"],"names":[],"mappings":"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","sourcesContent":["\n\n/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n  }\n\n  /* cutive-mono-regular - latin */\n@font-face {\n    font-family: 'Cutive Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../fonts/cutive-mono-v9-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local(''),\n         url('../fonts/cutive-mono-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n         url('../fonts/cutive-mono-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('../fonts/cutive-mono-v9-latin-regular.woff') format('woff'), /* Modern Browsers */\n         url('../fonts/cutive-mono-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n         url('../fonts/cutive-mono-v9-latin-regular.svg#CutiveMono') format('svg'); /* Legacy iOS */\n  }\n\n\n  .navigation {\n    width:250px;\n    flex-shrink: 0;\n    font-family: 'Roboto', sans-serif;\n    background:rgb(19, 75, 205);\n    overflow:auto;\n\n\n}\n\n.projectButton, .upComingButton {\n\n    height:30px;\n    line-height:28px;\n\n    width:100%;\n\n    font-size: small;\n\n    \n    \n}\n\n.deleteItem, .editProject {\n    cursor: pointer;\n}\n\n.mobileMenu {\n    display:none;\n}\n\n.listTitle, .projectText, .plusSign {\n    font-family: 'Cutive Mono', monospace;\n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n    cursor:pointer;\n    text-align: center;\n}\n\n.projectTaskHolder {\n    width:100%;\n    z-index:3;\n}\n\n.projectContainer {\n    white-space: nowrap;\n    width:75%;\n    text-align: center;\n\n}\n\n.projectContainerText {\n    cursor: pointer;\n}\n\n.projectContainer p {\n    margin-right:40px;\n}\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n.wholeOverlay {\n    background:none;\n    position:absolute;\n    height:100%;\n    width:100%;\n    z-index:3;\n    cursor: pointer;\n    display:none;\n \n}\n\n\n.projectButton{\n    display:flex;\n}\n\n.upComingButton {\n\n    text-align: center;\n}\n\n\n.projectContainer {\n    width:75%;\n    text-align: center;\n\n}\n\n\n.projectTools {\n        width:25%;\n    \n}\n\n\n\n\n.editProjectButton{\n\n    width:100%;\n    display:flex;\n    z-index:3;\n \n    justify-content:flex-end;\n    background:rgb(22, 83, 227);\n \n\n \n }\n \n \n .addProjectLabel {\n     line-height: 28px;\n     position:relative;\n     right:3px;\n\n     \n     cursor: pointer;\n \n \n }\n \n .editText {\n     background:none;\n \n     color:white;\n     outline:none;\n     border:none;\n     height:30px;\n     margin-right:5px;\n    font-size:small;\n }\n \n\n .elements{\n    margin-top: 20px;\n    color:white;\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n\n\n}\n\n.plusSign {\n    margin-left: 5px;\n}\n\n.projectButtonHover:hover, .projectAdder:hover, .upComingButton:hover{\n    background:rgb(22, 83, 227);\n    \n}\n\n \n \n \n.editText::placeholder {\n     \n \n     color:white;\n}\n \n \n .overlay {\n     background:rgba(0, 0, 0, 0.299);\n     height:100%;\n     width:250px;\n     z-index:1;\n     \n     text-indent: -9999px;\n     position:absolute;\n     top:0px;\n\n\n     display:none;\n \n   \n \n}\n\n.projectAdder {\n\n    margin-top:20px;\n    margin-bottom: 20px;\n    justify-content: center;\n    display:flex;\n    cursor:pointer;\n\n    width:100%\n    \n}\n\n.exit {\n    display:none;\n}\n\n.hamburgerMenu {\n    width:40px;\n    height:40px;\n    border :0;\n    background:none;\n    background-image: url(../images/hamburgerMenu.svg);\n    background-repeat:no-repeat;\n    background-size: 40px;\n    \n\n}\n\n.mobileMenu {\n    background:rgb(19, 75, 205);\n    color:white;\n    font-family: 'Roboto', sans-serif;\n    height:50px;\n    line-height: 40px;\n\n\n}\n\n\n.hamburgerMenu {\n    cursor: pointer;\n\n    margin-top :5px;\n}\n\n\n\n.mobileMenuTitle {\n    font-family: 'Cutive Mono', monospace;\n    margin:auto;\n}\n\n\n@media only screen and (max-width:550px){\n\n \n    .overlay {\n        width:100%;\n        display:none;\n    }\n\n    .navigation {\n        display:none;\n    }\n\n    .mobileMenu {\n        display:flex;\n    }\n\n    .pageContent {\n        display:none;\n    }\n\n    .sections {\n        flex-direction: column;\n    }\n\n    .navigation {\n        width:100%;\n        height:100%;\n        \n        \n       \n    }\n\n    .projectButton{\n        justify-content: center;\n    }\n\n    .projectContainer {\n        justify-content: flex-start;\n    }\n\n    .projectContainer p {\n    \n        text-align: center;\n        margin-right:50px;\n    }\n    .projectTools {\n        width:15%;\n\n    }\n\n    .editProjectButton{\n        justify-content: center;\n    }\n\n    .editText{\n        margin-left: 100px;\n\n    }\n\n\n\n\n\n    .exit {\n        display:block;\n        text-align: left;\n        color:white;\n        margin:10px;\n        cursor: pointer;\n    }\n}\n\n@media only screen and (max-width: 350px){\n    .deleteItem, .editProject {\n        width:15px;\n    }\n}\n\n@media only screen and (max-width: 225px){\n    .deleteItem, .editProject {\n        width:11.5px;\n    }\n}\n\n@media only screen and (max-width:200px){\n    .listTitle {\n        font-size: x-large;\n    }\n}\n\n\n\n@media only screen and (max-width: 300px){\n\n\n\n    .projectContainer p{\n        margin-right:30px;\n    }\n\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/scripts/content.js":
/*!********************************!*\
  !*** ./src/scripts/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/trash.svg */ "./src/images/trash.svg");
/* harmony import */ var _images_editOff_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/editOff.svg */ "./src/images/editOff.svg");
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");
/* harmony import */ var _send_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send.js */ "./src/scripts/send.js");
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");












const Content = () => {

    let staticListTasks = [];
    let changedListTasks = []; 
    let index;


    let dom = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_4__.getDomElements)();

    const assignBoardBindings = () => {
        return
    }

    const activateAddBoard =() => {
        return
    }

    const getUpdatedElements = () => {
        let boardTextBox = Array.from(document.getElementsByClassName("addBoarderTextBox"))
        let boarderButton = Array.from(document.getElementsByClassName("addBoarderButton"))
        return {boardTextBox, boarderButton}
    }

    const removeContentBindings = () => {
        let elements = getUpdatedElements();
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.removeBindings)(elements.boarderButton, addBoardTasks,"click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.removeBindings)(elements.boarderButton, addBoardTaskKeys,"keydown")

    }

    const addContentBindings = () => {
        let elements = getUpdatedElements();
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.addBindings)(elements.boarderButton, addBoardTasks,"click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.addBindings)(elements.boarderButton, addBoardTaskKeys, "keydown")
        
    }


    const addBoardTaskKeys = (event) => {
        if (event.key == "Enter") {
            addBoardTasks();
        }
    }


    const addBoardTasks = () => {
        let elements = getUpdatedElements();
        let text = elements.boardTextBox[0].value;
        if(text.length == 0) return;
        let task = createBoardTemplate(text);
        staticListTasks.push(task);
        changedListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.setArray)(staticListTasks)
        console.log(changedListTasks);
        renderListTasks();
    }

    const createTask = (task) => {
        let taskText = `<div class = "task">
                            <p class = "taskLabel">Doing Laundary</p>
                            <div class = "taskTools">
                                <div class = "generalTextHolder">
                                    <p class = "generalText">Due Nov 15 2021</p>
                                    <p class = "generalText">Priority: High</p>

                                </div>

                                <div class = "tools">
                                    <img class = "edit" src="src/images/editOff.svg" alt="">
                                    <div class = "circleIcon"></div>
                                </div>
                            </div>`
        
    }

    const createBoardEditor = () => {
        let boardText = `<div class = "boardTextEditor">
        <input class = "boardtextBox" type="text">
        <p class = "changeBoardTitleButton">+</p>
    </div>`
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

                                                    <div class = "boardTextEditor">
                                                        <input class = "boardtextBox" type="text">
                                                        <p class = "changeBoardTitleButton">+</p>
                                                    </div>

                                                    <div class = "taskHolder"></div>

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



    const renderListTasks = (bool) => {
        removeContentBindings();
        dom.pageContent.innerHTML = "";
        if (!bool)changedListTasks.push({addBoard:true});
        changedListTasks.forEach(task => {
            console.log(task, "current task")
            if (task.board){
                let board = createBoard(task);
                dom.pageContent.innerHTML += board
            } else if (task.addBoard){
                let addBoard = createAddBoard();
                dom.pageContent.innerHTML += addBoard;
            }
        })    
    


        
        addContentBindings();


    }


    const createBoardTemplate =(currentText,tasks) => {
        let currentTasks = [];
        if (typeof tasks != "undefined") currentTasks = tasks; 

        let board = {board: true, text:currentText, tasks: []};
        return board;


    }

    const deleteContent = () => {
        console.log("deleting content")
        staticListTasks = [];
        renderListTasks();
    }



    const activateContent = (currentIndex) => {
        changedListTasks = [];
        if (typeof index != "undefined") _send_js__WEBPACK_IMPORTED_MODULE_3__.send.sendData(staticListTasks,index);   
        index = currentIndex;
        if (typeof index == "undefined") return deleteContent();

        let newTasks = _send_js__WEBPACK_IMPORTED_MODULE_3__.send.retrieveData(index);
        if (!newTasks){
            _send_js__WEBPACK_IMPORTED_MODULE_3__.send.sendData([],index)
            newTasks = _send_js__WEBPACK_IMPORTED_MODULE_3__.send.retrieveData(index);
        }
        staticListTasks = newTasks;
        changedListTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_2__.setArray)(staticListTasks);

        renderListTasks();
    
    }

    return {activateContent};
    




}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);






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
/* harmony export */   "getDomElements": () => (/* binding */ getDomElements),
/* harmony export */   "createDomElements": () => (/* binding */ createDomElements)
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



const getDomElements = () => {
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
        const sendData = (data,index) => {
            items[index] = data;
        }
    
        const retrieveData = (index) => {
            if (items[index]){
                return items[index]
            } else {
                return false;
            }
        }

        const deleteData = (index) => {
            if (items[index]){
                let currentItems = items;
                let currentItemsKeys = Object.keys(items).filter(key => key != index);
                let newItems = currentItemsKeys.map(key => currentItems[key]  = currentItems[key]);
                let newItemsKeys = Object.keys(newItems)

                let newerItems = {};

                for (let i =0; i < newItemsKeys.length; i++) {
                    newerItems[i] = newItems[newItemsKeys[i]]
                }
                items = newerItems;
                console.log(items, "the items")
            }


        }
        
        return {sendData, retrieveData, deleteData};

    }
)()



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
/******/ 			"nav": 0
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
/*!****************************!*\
  !*** ./src/scripts/nav.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");
/* harmony import */ var _pageLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLayout.js */ "./src/scripts/pageLayout.js");
/* harmony import */ var _send__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send */ "./src/scripts/send.js");
/* harmony import */ var _images_trash_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/trash.svg */ "./src/images/trash.svg");
/* harmony import */ var _images_editOff_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/editOff.svg */ "./src/images/editOff.svg");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content.js */ "./src/scripts/content.js");














const nav = () => {

    let domElements;
    let changedTasks = [];
    let staticTasks = [];
    let content = (0,_content_js__WEBPACK_IMPORTED_MODULE_5__["default"])();

    const getUpdatedElements = () => {
        let editItems = Array.from(document.getElementsByClassName("editProject"));
        let deleteItems = Array.from(document.getElementsByClassName("deleteItem"));
        let projectContainerText = Array.from(document.getElementsByClassName("projectContainerText"));
        let addProjectLabels = Array.from(document.getElementsByClassName("addProjectLabel"));
        let projectButton = Array.from(document.getElementsByClassName("projectButton"));
        let projectTaskHolder = document.querySelector(".projectTaskHolder");
        let projectTaskHolderChildren = Array.from(projectTaskHolder.children);


        return {editItems, deleteItems, addProjectLabels, projectButton,
                projectTaskHolderChildren, projectContainerText
        };
    }

    const removeNavigationBindings = (notRemoveAddProjectLabel) => {
        let updatedItems = getUpdatedElements();
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(updatedItems.editItems,editItem,"click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(updatedItems.deleteItems, deleteItem, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(updatedItems.projectButton, switchPage, "click");
       if (!notRemoveAddProjectLabel) (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(updatedItems.addProjectLabels,createProjectTasksClick, "click");
       if (!notRemoveAddProjectLabel && updatedItems.addProjectLabels.length != 0) (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(window, createProjectTasksKeys, "keydown")


    }


    const lookUpTask = (index) => {
        return staticTasks[index];
    }



    const addNavigationBindings = () => {
        let updatedItems = getUpdatedElements()
        ;(0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(updatedItems.editItems,editItem,"click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(updatedItems.deleteItems, deleteItem, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(updatedItems.addProjectLabels,createProjectTasksClick, "click");
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(updatedItems.projectButton,switchPage, "click")
        if (updatedItems.addProjectLabels.length != 0) (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(window, createProjectTasksKeys, "keydown");

    } 

    const addProjectButtonWholeOverayBindings = () => {
        let updatedItems = getUpdatedElements();
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(updatedItems.projectButton,createProjectTasksClick, "click");
    }

    const removeProjectWholeOverlayBindings = () => {
        let updatedItems = getUpdatedElements();
        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(updatedItems.projectButton, createProjectTasksClick, "click");
    }


    const switchPage = (event) => {
        console.log(event.target, "event target current index")

        content.activateContent(event.target.currentIndex);
    }



    const getCurrentIndex = ()=> {
        let updatedItems = getUpdatedElements()
        let projectLabel = updatedItems.addProjectLabels[0];
        let currentIndex = projectLabel.currentIndex;
        return currentIndex
        
    }


    const createProjectTasksKeys = (event)  => {
        let currentIndex = getCurrentIndex();
        if (event.key == "Enter") {
            createProjectTasks(currentIndex);
        }
    }

    const createProjectTasksClick = () => {
        console.log("create project tasks")
        let currentIndex = getCurrentIndex();
        createProjectTasks(currentIndex);
    }




    const createProjectTasks = (index) => {
        let taskText = getTextBoxValues()
        let task = {task: taskText};   

        if (taskText.length != 0) {
            if(staticTasks[index]) staticTasks[index] = task;
            else staticTasks.push(task)
        }


     
        changedTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(staticTasks);
        

        renderProjectTasks();
        renderOverlay();

    }



    

    const deleteItem = (event) => {
        let index = event.target.currentIndex;
        staticTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeItem)(staticTasks,index);
        _send__WEBPACK_IMPORTED_MODULE_2__.send.deleteData(index);
        content.activateContent();

        changedTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.setArray)(staticTasks);
        
        renderProjectTasks();
    }

    const editItem = (event) => {
        let projectTask = lookUpTask(event.target.currentIndex);
        let text = projectTask.task;
        createEditor(text,event.target.currentIndex)
    }



    const getTextBoxValues = () => {
        let editText = document.querySelector(".editText")
        let text = editText.value;
        return text;
    }
   
    const createProjectEditor = (template) => {
        let text = "";
        if (typeof template.value != "undefined") text = template.value;

        let editorText = ` <div class = "editProjectButton">
        <input class = "editText" type="text" value="${text}">
        <p class = "addProjectLabel"> +</p>
    </div>`
        return editorText;

    }


    


    const createTask = (task) => {
        let taskText = `                             <div class  = "projectButton projectButtonHover">
        <div class = "projectTools">
                <img  class = "deleteItem" src="${_images_trash_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="">
                <img class = "editProject" src="${_images_editOff_svg__WEBPACK_IMPORTED_MODULE_4__}" alt="">
            </div> 

            <div class = "projectContainer">
                <p class = "projectContainerText">${task.task}</p>
            </div>
        </div>`
        return taskText;
    }

    const assignTaskActions = (index,childElement) => {
        let childElements = Array.from(childElement.children);
        childElements.forEach(newElement => {
            if (newElement.getAttribute("class") == "deleteItem") {
                newElement.currentIndex = index;
            } else if (newElement.getAttribute("class") == "editProject"){
                newElement.currentIndex = index;

            }
        })

    }

    const assignValueElements = () => {
        let updatedItems = getUpdatedElements();
        let index = 0
        updatedItems.projectTaskHolderChildren.forEach(element => {
            element.currentIndex = index;
            let elementChildren = Array.from(element.children);
            elementChildren.forEach(childElement => {
                if (childElement.getAttribute("class") == "projectTools"){
                    assignTaskActions(index, childElement)
                } else if (childElement.getAttribute("class") == "addProjectLabel"){
                    childElement.currentIndex = index;
                }
                if (childElement.getAttribute("class") == "projectContainer"){
                    let childArray = Array.from(childElement.children);
                    childArray[0].currentIndex = index;
                }
            })
            index ++;
        })

    }



    const renderProjectTasks = () => {
        removeNavigationBindings();

        domElements.projectTaskHolder.innerHTML = "";
        changedTasks.forEach(task => {

            if (task.edit){
                let editorText  = createProjectEditor(task);
                domElements.projectTaskHolder.innerHTML += editorText

            } else {
                let taskText = createTask(task);
                domElements.projectTaskHolder.innerHTML += taskText

                
            }
        })
        assignValueElements();
        addNavigationBindings();

    }



    const renderOverlay =() => {
        if (checkProjectEditor()){
            domElements.overlay.style.display = "block";
            domElements.wholeOverlay.style.display = "block";
            (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(domElements.wholeOverlay,createProjectTasksClick,"click");
            addProjectButtonWholeOverayBindings()
            
        } else {
            domElements.overlay.style.display = "none";
            (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.removeBindings)(domElements.wholeOverlay, createProjectTasksClick,"click");
            domElements.wholeOverlay.style.display = "none";
            removeProjectWholeOverlayBindings();
        
        }
    }

    const checkProjectEditor = () => {
        let bool = false;
        changedTasks.forEach( task => {
            if (task.edit) bool = true;
        })
        return bool;
    }
    const disablePageContentElements = () => {
        removeNavigationBindings(true);
        let updatedElement = getUpdatedElements();
        if (updatedElement.projectButton.length == 0) return;
        updatedElement.projectButton.forEach( button =>{
            button.classList.remove("projectButtonHover")
            button.style.color = "rgb(157,162,175)";
            button.style.cursor = "pointer"

        })

    }

    const createEditor = (text,index) => {
        let editorText = "";
        if (typeof text != "undefined") editorText = text;

        if (!checkProjectEditor()) {
            typeof index != "undefined" ? changedTasks = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addItem)(changedTasks,index,{edit:true, value:editorText}): changedTasks.push({edit: true})
        }
        console.log(changedTasks, "the changed tasks");
        console.log(staticTasks, "the static tasks");

   
        renderProjectTasks();
        renderOverlay();

        disablePageContentElements();

    }

    const activateProjectTask = () => {
        createEditor();

    }

    // when dom is called it will create the default elements
    const activateNavigation = () => {
        domElements = (0,_pageLayout_js__WEBPACK_IMPORTED_MODULE_1__.getDomElements)();

        (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.addBindings)(domElements.projectAdder,activateProjectTask,"click");
    

 
    }

    return {activateNavigation};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxZQUFZLGFBQWEsZUFBZSxRQUFRLEtBQUssVUFBVSxXQUFXLFNBQVMsTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGVBQWUsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxjQUFjLFFBQVEsS0FBSyxXQUFXLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFV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OztBQUVBLFlBQVk7QUFDWjs7QUFFQSxpRUFBZSxHQUFHLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvYm9hcmQuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9uYXZpZ2F0aW9uLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzL2JvYXJkLmNzcz9hNjFlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9uYXZpZ2F0aW9uLmNzcz84MjAyIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9lbGVtZW50RXZlbnRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvZW1pdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3JpcHRzL3BhZ2VMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9zZW5kLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2NyaXB0cy9uYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hhbWJ1cmdlck1lbnUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fLCB7IGhhc2g6IFwiI1JvYm90b1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG5cXG5cXG5cXG5cXG4gIC5wYWdlQ29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG59XFxuXFxuLmFkZEJvYXJkIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5OCwgMTk4LCAxOTgpO1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206MTBweDtcXG4gICAgXFxuICBcXG59XFxuXFxuXFxuXFxuXFxuaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4uYm9hcmRDb250ZW50IHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOTgsIDE5OCwgMTk4KTtcXG4gICAgd2lkdGg6IDI5MHB4O1xcbiAgICBtYXJnaW46MTBweDtcXG5cXG5cXG4gICAgXFxuICAgIHBhZGRpbmctYm90dG9tOjVweDtcXG59XFxuXFxuLmJvYXJkT3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgdG9wOjA7XFxuICAgIHotaW5kZXg6MTtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4uZGVsZXRlQm9hcmQsIC5lZGl0Qm9hcmQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50YXNrSG9sZGVyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcblxcbi50YXNrVGV4dEJveCB7XFxuICAgIHdpZHRoOjEzNXB4O1xcbn1cXG4uZXhhbXBsZUJvYXJkVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB0b3A6NHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlXFxufVxcblxcblxcbi5hZGRCb2FyZFRleHQge1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG5cXG5cXG59XFxuXFxuXFxuXFxuLnRhc2sge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZWQ7XFxuICAgIG1hcmdpbjoxMHB4O1xcbn1cXG5cXG4udGFza1Rvb2xzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcblxcbn1cXG4udG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcblxcbi50YXNrTGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDo1cHg7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuXFxuICAgIGJvcmRlcjogMDtcXG5cXG59XFxuLmdlbmVyYWxUZXh0IHtcXG4gICAgZm9udC1zaXplOjEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG5cXG59XFxuXFxuLmdlbmVyYWxUZXh0SG9sZGVyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG5cXG5cXG5cXG4uY2lyY2xlSWNvbiB7XFxuICAgIHdpZHRoOjEwcHg7XFxuICAgIGhlaWdodDoxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuLmVkaXQge1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OjZweDtcXG59XFxuXFxuLmNpcmNsZUljb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOmJsYWNrO1xcbn1cXG5cXG5cXG5cXG4udGFza0FkZGVyIHtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbn1cXG5cXG5cXG4udGFza0FkZGVyOmhvdmVyIHtcXG4gICBjdXJzb3I6cG9pbnRlcjtcXG4gICBiYWNrZ3JvdW5kOnJnYigxNzgsIDE3OCwgMTc4KVxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIG1hcmdpbjo1cHg7XFxuXFxufVxcbi5lZGl0VG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOjUwcHg7XFxuXFxufVxcbi5kYXRlVG9vbCB7XFxuICAgIG1hcmdpbjo1cHg7XFxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi50YXNrVGV4dEJveCB7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjo1cHg7XFxufVxcblxcbi5lZGl0VG9vbEhvbGRlciB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5kYXRlUGlja2VyIHtcXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xcbiAgICB3aWR0aDoxMzVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGJvcmRlcjowO1xcbn1cXG5cXG5cXG5cXG4udGFza0VkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBibHVlIHNvbGlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcbn1cXG5cXG5cXG4udGFza1RleHRCb3h7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW46NXB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG4uYnV0dG9ucyAuYnV0dG9uIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDI1NSwyMDIsMTApO1xcbn1cXG5cXG5cXG4ubG93IHtcXG5cXG4gICAgYm9yZGVyOjVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmxvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6Z3JlZW47XFxufVxcblxcbi5oaWdoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZWQ7XFxufVxcblxcbi5tZWRpdW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDIwMiwxMCk7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgaGVpZ2h0OjE1cHg7XFxuICAgIHdpZHRoOjM1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIG1hcmdpbjoycHg7IFxcblxcbn1cXG5cXG5cXG4uYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnRyYXNoSXQsIC5maW5pc2hlZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RUeXBlVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBib3R0b206MnB4O1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6MDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYm9yZGVyOjA7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG4uYWRkQm9hcmRlclRleHRCb3gge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOjIyMHB4O1xcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIHdpZHRoOjQwcHg7XFxuICAgIGhlaWdodDo0MHB4O1xcbiAgICBib3JkZXIgOjA7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcbi5lZGl0Qm9hcmQsIC5kZWxldGVCb2FyZCB7XFxuICAgIHdpZHRoOjIwcHg7XFxufVxcblxcbi5lZGl0RXhhbXBsZUljb25zIHtcXG5cXG4gICAgaGVpZ2h0OjI1cHg7XFxuICAgIFxcbiAgICBkaXNwbGF5OmZsZXg7XFxuXFxuXFxufVxcblxcbi5lbXB0eXJvdyB7XFxuICAgXFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgXFxufVxcblxcbi5lZGl0Qm9hcmQsIC5kZWxldGVCb2FyZCB7XFxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XFxuXFxuXFxufVxcblxcbi5ib2FyZHRleHRCb3gge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGJvcmRlcjowO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIFxcbiBcXG59XFxuXFxuLmJvYXJkVGV4dEVkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIxNSwgMjEzLCAyMTMpO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgei1pbmRleDozO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG5cXG4gXFxufVxcblxcbi5jaGFuZ2VCb2FyZFRpdGxlQnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcXG5cXG4gICAgLmVkaXRFeGFtcGxlSWNvbnMge1xcbiAgICAgICAgaGVpZ2h0OjE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmVtcHR5cm93IHtcXG4gICAgICAgIGhlaWdodDoxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGVCb2FyZCwgLmVkaXRCb2FyZCB7XFxuICAgICAgICB3aWR0aDoxMnB4O1xcbiAgICB9XFxuXFxuXFxuXFxuICAgIC5ib2FyZHtcXG4gICAgICAgIHdpZHRoOjE4NXB4O1xcbiAgICB9XFxuXFxuICAgIC50YXNrTGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOnh4LXNtYWxsXFxuICAgIH1cXG5cXG4gICAgLmVkaXQge1xcblxcbiAgICAgICAgd2lkdGg6MTBweDtcXG4gICAgICAgIFxcblxcbiAgICB9XFxuXFxuICAgIC5nZW5lcmFsVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6NnB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgXFxuICAgIC5leGFtcGxlQm9hcmRUZXh0IHtcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYm9hcmR0ZXh0Qm94IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZCB7XFxuICAgIFxcbiAgICAgICAgd2lkdGg6MTg1cHg7XFxuICAgICAgXFxuICAgIH1cXG4gICAgLmNoYW5nZUJvYXJkVGl0bGVCdXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOngtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmFkZEJvYXJkZXJUZXh0Qm94IHtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgICAgIHdpZHRoOjE2MHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLnRhc2sge1xcbiAgICAgICAgbWFyZ2luOjVweDsgXFxuICAgIH1cXG4gICAgLmNpcmNsZUljb24ge1xcbiAgICAgICAgd2lkdGg6MnB4O1xcbiAgICAgICAgaGVpZ2h0OjJweFxcbiAgICB9XFxuXFxuICAgIC50YXNrSG9sZGVyVGV4dCwgLmRhdGVUZXh0LCAuYnV0dG9uVGV4dCB7XFxuICAgICAgICBmb250LXNpemU6eHgtc21hbGw7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAudGFza1Rvb2xzIHtcXG4gICAgICAgIFxcbiAgICAgICAgcGFkZGluZy1yaWdodDo1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6NXB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDo1cHg7XFxuXFxuICAgIH1cXG5cXG4gICAgLnRhc2tUZXh0Qm94IHtcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmRhdGVQaWNrZXIge1xcbiAgICAgICAgd2lkdGg6ODBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgIH1cXG5cXG5cXG4gICAgXFxuICAgIC5oaWdoIHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gICAgfVxcblxcbiAgICAubWVkaXVtIHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsMjAyLDEwKTtcXG4gICAgfVxcblxcbiAgICAubG93IHtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xcbiAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xcbiAgICB9XFxuXFxuICAgIC50YXNrRWRpdG9yIHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAgNHB4IHNvbGlkIGJsdWU7XFxuICAgIH1cXG5cXG5cXG5cXG5cXG4gICAgLmJ1dHRvbiB7XFxuXFxuICAgICAgICBoZWlnaHQ6MTBweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcbiAgICAgICAgd2lkdGg6MjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xcbiAgICB9XFxuXFxuICAgIC5lZGl0VG9vbHMge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRyYXNoSXQsIC5maW5pc2hlZCB7XFxuICAgICAgICB3aWR0aDoxNXB4O1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrQWRkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgfVxcblxcblxcblxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0Q0FBaUQsRUFBRSxxQkFBcUI7SUFDeEU7Ozs7OzhEQUtzRSxFQUFFLGVBQWU7RUFDekY7Ozs7OztFQU1BO0lBQ0UsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxtQkFBbUI7OztBQUd2Qjs7Ozs7QUFLQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBOztJQUVJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFX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OztJQUVsQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGNBQWM7UUFDZCxXQUFXO0lBQ2Y7Ozs7SUFJQTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGlDQUFpQztJQUNyQzs7SUFFQTtRQUNJLHVCQUF1Qjs7SUFFM0I7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7Ozs7O0lBS0E7O1FBRUksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFVBQVU7O0lBRWQ7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7Ozs7QUFJSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiByb2JvdG8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICAgIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuc3ZnI1JvYm90bycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG5cXG5cXG5cXG5cXG4gIC5wYWdlQ29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG59XFxuXFxuLmFkZEJvYXJkIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5OCwgMTk4LCAxOTgpO1xcbiAgICBtYXJnaW46MTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206MTBweDtcXG4gICAgXFxuICBcXG59XFxuXFxuXFxuXFxuXFxuaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4uYm9hcmRDb250ZW50IHtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOTgsIDE5OCwgMTk4KTtcXG4gICAgd2lkdGg6IDI5MHB4O1xcbiAgICBtYXJnaW46MTBweDtcXG5cXG5cXG4gICAgXFxuICAgIHBhZGRpbmctYm90dG9tOjVweDtcXG59XFxuXFxuLmJvYXJkT3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgdG9wOjA7XFxuICAgIHotaW5kZXg6MTtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4uZGVsZXRlQm9hcmQsIC5lZGl0Qm9hcmQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50YXNrSG9sZGVyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcblxcbi50YXNrVGV4dEJveCB7XFxuICAgIHdpZHRoOjEzNXB4O1xcbn1cXG4uZXhhbXBsZUJvYXJkVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB0b3A6NHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlXFxufVxcblxcblxcbi5hZGRCb2FyZFRleHQge1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG5cXG5cXG59XFxuXFxuXFxuXFxuLnRhc2sge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZWQ7XFxuICAgIG1hcmdpbjoxMHB4O1xcbn1cXG5cXG4udGFza1Rvb2xzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcblxcbn1cXG4udG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcblxcbi50YXNrTGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDo1cHg7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuXFxuICAgIGJvcmRlcjogMDtcXG5cXG59XFxuLmdlbmVyYWxUZXh0IHtcXG4gICAgZm9udC1zaXplOjEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG5cXG59XFxuXFxuLmdlbmVyYWxUZXh0SG9sZGVyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG5cXG5cXG5cXG4uY2lyY2xlSWNvbiB7XFxuICAgIHdpZHRoOjEwcHg7XFxuICAgIGhlaWdodDoxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuLmVkaXQge1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OjZweDtcXG59XFxuXFxuLmNpcmNsZUljb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOmJsYWNrO1xcbn1cXG5cXG5cXG5cXG4udGFza0FkZGVyIHtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbn1cXG5cXG5cXG4udGFza0FkZGVyOmhvdmVyIHtcXG4gICBjdXJzb3I6cG9pbnRlcjtcXG4gICBiYWNrZ3JvdW5kOnJnYigxNzgsIDE3OCwgMTc4KVxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIG1hcmdpbjo1cHg7XFxuXFxufVxcbi5lZGl0VG9vbHMge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOjUwcHg7XFxuXFxufVxcbi5kYXRlVG9vbCB7XFxuICAgIG1hcmdpbjo1cHg7XFxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi50YXNrVGV4dEJveCB7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjo1cHg7XFxufVxcblxcbi5lZGl0VG9vbEhvbGRlciB7XFxuXFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5kYXRlUGlja2VyIHtcXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xcbiAgICB3aWR0aDoxMzVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGJvcmRlcjowO1xcbn1cXG5cXG5cXG5cXG4udGFza0VkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzcsIDIzMCwgMjMwKTtcXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBibHVlIHNvbGlkO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcbn1cXG5cXG5cXG4udGFza1RleHRCb3h7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW46NXB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG4uYnV0dG9ucyAuYnV0dG9uIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJvcmRlcjo1cHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDI1NSwyMDIsMTApO1xcbn1cXG5cXG5cXG4ubG93IHtcXG5cXG4gICAgYm9yZGVyOjVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmxvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6Z3JlZW47XFxufVxcblxcbi5oaWdoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZWQ7XFxufVxcblxcbi5tZWRpdW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDIwMiwxMCk7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgaGVpZ2h0OjE1cHg7XFxuICAgIHdpZHRoOjM1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIG1hcmdpbjoycHg7IFxcblxcbn1cXG5cXG5cXG4uYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59XFxuXFxuLnRyYXNoSXQsIC5maW5pc2hlZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RUeXBlVGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBib3R0b206MnB4O1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6MDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYm9yZGVyOjA7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uYWRkQm9hcmRlckJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE3OCwgMTc4LCAxNzgpO1xcbn1cXG5cXG5cXG5cXG4uYWRkQm9hcmRlclRleHRCb3gge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW4tdG9wOjVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOjIyMHB4O1xcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIHdpZHRoOjQwcHg7XFxuICAgIGhlaWdodDo0MHB4O1xcbiAgICBib3JkZXIgOjA7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9oYW1idXJnZXJNZW51LnN2Zyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigxOSwgNzUsIDIwNSk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDo1MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG5cXG5cXG59XFxuXFxuXFxuLmhhbWJ1cmdlck1lbnUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3AgOjVweDtcXG59XFxuXFxuXFxuXFxuLm1vYmlsZU1lbnVUaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIG1hcmdpbjphdXRvO1xcbn1cXG5cXG4uZWRpdEJvYXJkLCAuZGVsZXRlQm9hcmQge1xcbiAgICB3aWR0aDoyMHB4O1xcbn1cXG5cXG4uZWRpdEV4YW1wbGVJY29ucyB7XFxuXFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICBcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcblxcbn1cXG5cXG4uZW1wdHlyb3cge1xcbiAgIFxcbiAgICBoZWlnaHQ6MjVweDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxuICAgIFxcbn1cXG5cXG4uZWRpdEJvYXJkLCAuZGVsZXRlQm9hcmQge1xcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xcblxcblxcbn1cXG5cXG4uYm9hcmR0ZXh0Qm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBib3JkZXI6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBcXG4gXFxufVxcblxcbi5ib2FyZFRleHRFZGl0b3Ige1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMTUsIDIxMywgMjEzKTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHotaW5kZXg6MztcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuXFxuIFxcbn1cXG5cXG4uY2hhbmdlQm9hcmRUaXRsZUJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XFxuXFxuICAgIC5lZGl0RXhhbXBsZUljb25zIHtcXG4gICAgICAgIGhlaWdodDoxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5lbXB0eXJvdyB7XFxuICAgICAgICBoZWlnaHQ6MTVweDtcXG4gICAgfVxcblxcbiAgICAuZGVsZXRlQm9hcmQsIC5lZGl0Qm9hcmQge1xcbiAgICAgICAgd2lkdGg6MTJweDtcXG4gICAgfVxcblxcblxcblxcbiAgICAuYm9hcmR7XFxuICAgICAgICB3aWR0aDoxODVweDtcXG4gICAgfVxcblxcbiAgICAudGFza0xhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTp4eC1zbWFsbFxcbiAgICB9XFxuXFxuICAgIC5lZGl0IHtcXG5cXG4gICAgICAgIHdpZHRoOjEwcHg7XFxuICAgICAgICBcXG5cXG4gICAgfVxcblxcbiAgICAuZ2VuZXJhbFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOjZweDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIFxcbiAgICAuZXhhbXBsZUJvYXJkVGV4dCB7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkdGV4dEJveCB7XFxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmQge1xcbiAgICBcXG4gICAgICAgIHdpZHRoOjE4NXB4O1xcbiAgICAgIFxcbiAgICB9XFxuICAgIC5jaGFuZ2VCb2FyZFRpdGxlQnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgfVxcblxcbiAgICAuYWRkQm9hcmRUZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTp4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5hZGRCb2FyZGVyVGV4dEJveCB7XFxuICAgICAgICBoZWlnaHQ6MTJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgICAgICB3aWR0aDoxNjBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmFkZEJvYXJkZXJCdXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC50YXNrIHtcXG4gICAgICAgIG1hcmdpbjo1cHg7IFxcbiAgICB9XFxuICAgIC5jaXJjbGVJY29uIHtcXG4gICAgICAgIHdpZHRoOjJweDtcXG4gICAgICAgIGhlaWdodDoycHhcXG4gICAgfVxcblxcbiAgICAudGFza0hvbGRlclRleHQsIC5kYXRlVGV4dCwgLmJ1dHRvblRleHQge1xcbiAgICAgICAgZm9udC1zaXplOnh4LXNtYWxsO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2tUb29scyB7XFxuICAgICAgICBcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OjVweDtcXG4gICAgICAgIG1hcmdpbi10b3A6NXB4O1xcblxcbiAgICB9XFxuXFxuICAgIC50YXNrVGV4dEJveCB7XFxuICAgICAgICB3aWR0aDo4MHB4O1xcbiAgICAgICAgaGVpZ2h0OjEycHg7XFxuICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xcbiAgICB9XFxuXFxuICAgIC5kYXRlUGlja2VyIHtcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgICAgIGhlaWdodDoxMnB4O1xcbiAgICB9XFxuXFxuXFxuICAgIFxcbiAgICAuaGlnaCB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICAgIH1cXG5cXG4gICAgLm1lZGl1bSB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LDIwMiwxMCk7XFxuICAgIH1cXG5cXG4gICAgLmxvdyB7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcXG4gICBcXG4gICAgfVxcblxcbiAgICAudGFzayB7XFxuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJlZDtcXG4gICAgfVxcblxcbiAgICAudGFza0VkaXRvciB7XFxuICAgICAgICBib3JkZXItbGVmdDogIDRweCBzb2xpZCBibHVlO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuICAgIC5idXR0b24ge1xcblxcbiAgICAgICAgaGVpZ2h0OjEwcHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcXG4gICAgICAgIHdpZHRoOjIwcHg7XFxuICAgICAgICBmb250LXNpemU6IDZweDtcXG4gICAgfVxcblxcbiAgICAuZWRpdFRvb2xzIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC50cmFzaEl0LCAuZmluaXNoZWQge1xcbiAgICAgICAgd2lkdGg6MTVweDtcXG5cXG4gICAgfVxcblxcbiAgICAudGFza0FkZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XFxuICAgIH1cXG5cXG5cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hhbWJ1cmdlck1lbnUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fLCB7IGhhc2g6IFwiI1JvYm90b1wiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXywgeyBoYXNoOiBcIj8jaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fLCB7IGhhc2g6IFwiI0N1dGl2ZU1vbm9cIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG4gIC8qIGN1dGl2ZS1tb25vLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSwgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG5cXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgd2lkdGg6MjUwcHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG5cXG5cXG59XFxuXFxuLnByb2plY3RCdXR0b24sIC51cENvbWluZ0J1dHRvbiB7XFxuXFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBsaW5lLWhlaWdodDoyOHB4O1xcblxcbiAgICB3aWR0aDoxMDAlO1xcblxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcblxcbiAgICBcXG4gICAgXFxufVxcblxcbi5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4ubGlzdFRpdGxlLCAucHJvamVjdFRleHQsIC5wbHVzU2lnbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcblxcbi5wcm9qZWN0QnV0dG9ue1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi51cENvbWluZ0J1dHRvbiB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0VGFza0hvbGRlciB7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MztcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB3aWR0aDo3NSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLnByb2plY3RDb250YWluZXJUZXh0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciBwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OjQwcHg7XFxufVxcblxcbi5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MjUlO1xcbiAgICBcXG59XFxuXFxuXFxuLndob2xlT3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OjM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTpub25lO1xcbiBcXG59XFxuXFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnVwQ29taW5nQnV0dG9uIHtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIHdpZHRoOjc1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG5cXG4ucHJvamVjdFRvb2xzIHtcXG4gICAgICAgIHdpZHRoOjI1JTtcXG4gICAgXFxufVxcblxcblxcblxcblxcbi5lZGl0UHJvamVjdEJ1dHRvbntcXG5cXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICB6LWluZGV4OjM7XFxuIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcXG4gXFxuXFxuIFxcbiB9XFxuIFxcbiBcXG4gLmFkZFByb2plY3RMYWJlbCB7XFxuICAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICAgcmlnaHQ6M3B4O1xcblxcbiAgICAgXFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuIFxcbiBcXG4gfVxcbiBcXG4gLmVkaXRUZXh0IHtcXG4gICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gXFxuICAgICBjb2xvcjp3aGl0ZTtcXG4gICAgIG91dGxpbmU6bm9uZTtcXG4gICAgIGJvcmRlcjpub25lO1xcbiAgICAgaGVpZ2h0OjMwcHg7XFxuICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xcbiAgICBmb250LXNpemU6c21hbGw7XFxuIH1cXG4gXFxuXFxuIC5lbGVtZW50c3tcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbn1cXG5cXG4ucGx1c1NpZ24ge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbkhvdmVyOmhvdmVyLCAucHJvamVjdEFkZGVyOmhvdmVyLCAudXBDb21pbmdCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcXG4gICAgXFxufVxcblxcbiBcXG4gXFxuIFxcbi5lZGl0VGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgXFxuIFxcbiAgICAgY29sb3I6d2hpdGU7XFxufVxcbiBcXG4gXFxuIC5vdmVybGF5IHtcXG4gICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgIHdpZHRoOjI1MHB4O1xcbiAgICAgei1pbmRleDoxO1xcbiAgICAgXFxuICAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgdG9wOjBweDtcXG5cXG5cXG4gICAgIGRpc3BsYXk6bm9uZTtcXG4gXFxuICAgXFxuIFxcbn1cXG5cXG4ucHJvamVjdEFkZGVyIHtcXG5cXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG5cXG4gICAgd2lkdGg6MTAwJVxcbiAgICBcXG59XFxuXFxuLmV4aXQge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgd2lkdGg6NDBweDtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIGJvcmRlciA6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NTBweCl7XFxuXFxuIFxcbiAgICAub3ZlcmxheSB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlTWVudSB7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2VDb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbnMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdENvbnRhaW5lciBwIHtcXG4gICAgXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6NTBweDtcXG4gICAgfVxcbiAgICAucHJvamVjdFRvb2xzIHtcXG4gICAgICAgIHdpZHRoOjE1JTtcXG5cXG4gICAgfVxcblxcbiAgICAuZWRpdFByb2plY3RCdXR0b257XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZWRpdFRleHR7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuXFxuICAgIH1cXG5cXG5cXG5cXG5cXG5cXG4gICAgLmV4aXQge1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBjb2xvcjp3aGl0ZTtcXG4gICAgICAgIG1hcmdpbjoxMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpe1xcbiAgICAuZGVsZXRlSXRlbSwgLmVkaXRQcm9qZWN0IHtcXG4gICAgICAgIHdpZHRoOjE1cHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMjVweCl7XFxuICAgIC5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6MTEuNXB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoyMDBweCl7XFxuICAgIC5saXN0VGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICB9XFxufVxcblxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xcblxcblxcblxcbiAgICAucHJvamVjdENvbnRhaW5lciBwe1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjMwcHg7XFxuICAgIH1cXG5cXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9uYXZpZ2F0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRDQUFpRCxFQUFFLHFCQUFxQjtJQUN4RTs7Ozs7OERBS3NFLEVBQUUsZUFBZTtFQUN6Rjs7RUFFQSxnQ0FBZ0M7QUFDbEM7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0Q0FBcUQsRUFBRSxxQkFBcUI7SUFDNUU7Ozs7OytEQUs4RSxFQUFFLGVBQWU7RUFDakc7OztFQUdBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLGFBQWE7OztBQUdqQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCOztJQUVoQixVQUFVOztJQUVWLGdCQUFnQjs7OztBQUlwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOzs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7UUFDUSxTQUFTOztBQUVqQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixZQUFZOztBQUVoQjs7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCOztBQUV0Qjs7O0FBR0E7UUFDUSxTQUFTOztBQUVqQjs7Ozs7QUFLQTs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7O0lBRVQsd0JBQXdCO0lBQ3hCLDJCQUEyQjs7OztDQUk5Qjs7O0NBR0E7S0FDSSxpQkFBaUI7S0FDakIsaUJBQWlCO0tBQ2pCLFNBQVM7OztLQUdULGVBQWU7OztDQUduQjs7Q0FFQTtLQUNJLGVBQWU7O0tBRWYsV0FBVztLQUNYLFlBQVk7S0FDWixXQUFXO0tBQ1gsV0FBVztLQUNYLGdCQUFnQjtJQUNqQixlQUFlO0NBQ2xCOzs7Q0FHQTtJQUNHLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7OztBQUd2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjs7QUFFL0I7Ozs7O0FBS0E7OztLQUdLLFdBQVc7QUFDaEI7OztDQUdDO0tBQ0ksK0JBQStCO0tBQy9CLFdBQVc7S0FDWCxXQUFXO0tBQ1gsU0FBUzs7S0FFVCxvQkFBb0I7S0FDcEIsaUJBQWlCO0tBQ2pCLE9BQU87OztLQUdQLFlBQVk7Ozs7QUFJakI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7O0lBRWQ7O0FBRUo7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtJQUNmLDBEQUFrRDtJQUNsRCwyQkFBMkI7SUFDM0IscUJBQXFCOzs7QUFHekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsaUJBQWlCOzs7QUFHckI7OztBQUdBO0lBQ0ksZUFBZTs7SUFFZixlQUFlO0FBQ25COzs7O0FBSUE7SUFDSSxxQ0FBcUM7SUFDckMsV0FBVztBQUNmOzs7QUFHQTs7O0lBR0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixXQUFXOzs7O0lBSWY7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7O1FBRUksa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksU0FBUzs7SUFFYjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGtCQUFrQjs7SUFFdEI7Ozs7OztJQU1BO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsV0FBVztRQUNYLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7Ozs7QUFJQTs7OztJQUlJO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90Jyk7IC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gICAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9yb2JvdG8tdjI5LWxhdGluLXJlZ3VsYXIuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvcm9ib3RvLXYyOS1sYXRpbi1yZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL3JvYm90by12MjktbGF0aW4tcmVndWxhci5zdmcjUm9ib3RvJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xcbiAgfVxcblxcbiAgLyogY3V0aXZlLW1vbm8tcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICAgIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXFxuICAgICAgICAgdXJsKCcuLi9mb250cy9jdXRpdmUtbW9uby12OS1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoJy4uL2ZvbnRzL2N1dGl2ZS1tb25vLXY5LWxhdGluLXJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbiAgICAgICAgIHVybCgnLi4vZm9udHMvY3V0aXZlLW1vbm8tdjktbGF0aW4tcmVndWxhci5zdmcjQ3V0aXZlTW9ubycpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cXG4gIH1cXG5cXG5cXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgd2lkdGg6MjUwcHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG5cXG5cXG59XFxuXFxuLnByb2plY3RCdXR0b24sIC51cENvbWluZ0J1dHRvbiB7XFxuXFxuICAgIGhlaWdodDozMHB4O1xcbiAgICBsaW5lLWhlaWdodDoyOHB4O1xcblxcbiAgICB3aWR0aDoxMDAlO1xcblxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcblxcbiAgICBcXG4gICAgXFxufVxcblxcbi5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2JpbGVNZW51IHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4ubGlzdFRpdGxlLCAucHJvamVjdFRleHQsIC5wbHVzU2lnbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcblxcbi5wcm9qZWN0QnV0dG9ue1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi51cENvbWluZ0J1dHRvbiB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0VGFza0hvbGRlciB7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHotaW5kZXg6MztcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB3aWR0aDo3NSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLnByb2plY3RDb250YWluZXJUZXh0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciBwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OjQwcHg7XFxufVxcblxcbi5wcm9qZWN0VG9vbHMge1xcbiAgICAgICAgd2lkdGg6MjUlO1xcbiAgICBcXG59XFxuXFxuXFxuLndob2xlT3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB6LWluZGV4OjM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTpub25lO1xcbiBcXG59XFxuXFxuXFxuLnByb2plY3RCdXR0b257XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnVwQ29taW5nQnV0dG9uIHtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIHdpZHRoOjc1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG5cXG4ucHJvamVjdFRvb2xzIHtcXG4gICAgICAgIHdpZHRoOjI1JTtcXG4gICAgXFxufVxcblxcblxcblxcblxcbi5lZGl0UHJvamVjdEJ1dHRvbntcXG5cXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICB6LWluZGV4OjM7XFxuIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcXG4gXFxuXFxuIFxcbiB9XFxuIFxcbiBcXG4gLmFkZFByb2plY3RMYWJlbCB7XFxuICAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICAgcmlnaHQ6M3B4O1xcblxcbiAgICAgXFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuIFxcbiBcXG4gfVxcbiBcXG4gLmVkaXRUZXh0IHtcXG4gICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gXFxuICAgICBjb2xvcjp3aGl0ZTtcXG4gICAgIG91dGxpbmU6bm9uZTtcXG4gICAgIGJvcmRlcjpub25lO1xcbiAgICAgaGVpZ2h0OjMwcHg7XFxuICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xcbiAgICBmb250LXNpemU6c21hbGw7XFxuIH1cXG4gXFxuXFxuIC5lbGVtZW50c3tcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbn1cXG5cXG4ucGx1c1NpZ24ge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbkhvdmVyOmhvdmVyLCAucHJvamVjdEFkZGVyOmhvdmVyLCAudXBDb21pbmdCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIyLCA4MywgMjI3KTtcXG4gICAgXFxufVxcblxcbiBcXG4gXFxuIFxcbi5lZGl0VGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgXFxuIFxcbiAgICAgY29sb3I6d2hpdGU7XFxufVxcbiBcXG4gXFxuIC5vdmVybGF5IHtcXG4gICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjI5OSk7XFxuICAgICBoZWlnaHQ6MTAwJTtcXG4gICAgIHdpZHRoOjI1MHB4O1xcbiAgICAgei1pbmRleDoxO1xcbiAgICAgXFxuICAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgdG9wOjBweDtcXG5cXG5cXG4gICAgIGRpc3BsYXk6bm9uZTtcXG4gXFxuICAgXFxuIFxcbn1cXG5cXG4ucHJvamVjdEFkZGVyIHtcXG5cXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG5cXG4gICAgd2lkdGg6MTAwJVxcbiAgICBcXG59XFxuXFxuLmV4aXQge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5oYW1idXJnZXJNZW51IHtcXG4gICAgd2lkdGg6NDBweDtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIGJvcmRlciA6MDtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2hhbWJ1cmdlck1lbnUuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDE5LCA3NSwgMjA1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcblxcbn1cXG5cXG5cXG4uaGFtYnVyZ2VyTWVudSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcCA6NXB4O1xcbn1cXG5cXG5cXG5cXG4ubW9iaWxlTWVudVRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NTBweCl7XFxuXFxuIFxcbiAgICAub3ZlcmxheSB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlTWVudSB7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2VDb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbnMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdEJ1dHRvbntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdENvbnRhaW5lciBwIHtcXG4gICAgXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6NTBweDtcXG4gICAgfVxcbiAgICAucHJvamVjdFRvb2xzIHtcXG4gICAgICAgIHdpZHRoOjE1JTtcXG5cXG4gICAgfVxcblxcbiAgICAuZWRpdFByb2plY3RCdXR0b257XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZWRpdFRleHR7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuXFxuICAgIH1cXG5cXG5cXG5cXG5cXG5cXG4gICAgLmV4aXQge1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBjb2xvcjp3aGl0ZTtcXG4gICAgICAgIG1hcmdpbjoxMHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpe1xcbiAgICAuZGVsZXRlSXRlbSwgLmVkaXRQcm9qZWN0IHtcXG4gICAgICAgIHdpZHRoOjE1cHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMjVweCl7XFxuICAgIC5kZWxldGVJdGVtLCAuZWRpdFByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6MTEuNXB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoyMDBweCl7XFxuICAgIC5saXN0VGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICB9XFxufVxcblxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xcblxcblxcblxcbiAgICAucHJvamVjdENvbnRhaW5lciBwe1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjMwcHg7XFxuICAgIH1cXG5cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGJveC1zaXppbmc6IG5vbmU7XFxufVxcbi5zZWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjM2LCAyMzYsIDI1NSk7XFxuICAgIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuLmVycm9yTWVzc2FnZSB7XFxuXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC4yOTkpO1xcblxcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozMDtcXG4gICAgZGlzcGxheTpub25lO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ubWVzc2FnZUhvbGRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpzaWx2ZXI7XFxuICAgIGhlaWdodDoxNTBweDtcXG4gICAgd2lkdGg6MjAwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5jb250ZW50SG9sZGVyIHtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDoyMDBweDtcXG59XFxuXFxuLmV4aXRCdXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICBoZWlnaHQ6MzBweDtcXG4gICAgYm9yZGVyOjA7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6cm95YWxibHVlO1xcblxcbn1cXG5cXG4uZXhpdEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDpyZ2IoNTUsIDg4LCAxODgpO1xcbn1cXG5cXG5cXG4uY29udGVlbnRIb2xkZXIgaDIsIC5jb250ZWVudEhvbGRlciBwLCAuZXhpdEJ1dHRvbiB7XFxuICAgIG1hcmdpbjoxMHB4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQiwrQkFBK0I7O0lBRS9CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7O0lBRVosc0JBQXNCO0lBQ3RCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7OztJQUd2QixtQkFBbUI7OztBQUd2Qjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7O0FBR0E7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGJveC1zaXppbmc6IG5vbmU7XFxufVxcbi5zZWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjM2LCAyMzYsIDI1NSk7XFxuICAgIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuLmVycm9yTWVzc2FnZSB7XFxuXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC4yOTkpO1xcblxcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgei1pbmRleDozMDtcXG4gICAgZGlzcGxheTpub25lO1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ubWVzc2FnZUhvbGRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDpzaWx2ZXI7XFxuICAgIGhlaWdodDoxNTBweDtcXG4gICAgd2lkdGg6MjAwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcbi5jb250ZW50SG9sZGVyIHtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDoyMDBweDtcXG59XFxuXFxuLmV4aXRCdXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICBoZWlnaHQ6MzBweDtcXG4gICAgYm9yZGVyOjA7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6cm95YWxibHVlO1xcblxcbn1cXG5cXG4uZXhpdEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDpyZ2IoNTUsIDg4LCAxODgpO1xcbn1cXG5cXG5cXG4uY29udGVlbnRIb2xkZXIgaDIsIC5jb250ZWVudEhvbGRlciBwLCAuZXhpdEJ1dHRvbiB7XFxuICAgIG1hcmdpbjoxMHB4O1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2aWdhdGlvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmlnYXRpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRyYXNoSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy90cmFzaC5zdmdcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2VkaXRPZmYuc3ZnXCI7XG5cblxuXG5pbXBvcnQge3JlbW92ZUl0ZW0sIGFkZEl0ZW0sIGFkZEJpbmRpbmdzLCByZW1vdmVCaW5kaW5ncywgc2V0QXJyYXl9IGZyb20gXCIuL2VsZW1lbnRFdmVudHMuanNcIlxuaW1wb3J0IHtzZW5kfSBmcm9tIFwiLi9zZW5kLmpzXCJcbmltcG9ydCB7IGdldERvbUVsZW1lbnRzIH0gZnJvbSBcIi4vcGFnZUxheW91dC5qc1wiO1xuXG5cblxuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuXG4gICAgbGV0IHN0YXRpY0xpc3RUYXNrcyA9IFtdO1xuICAgIGxldCBjaGFuZ2VkTGlzdFRhc2tzID0gW107IFxuICAgIGxldCBpbmRleDtcblxuXG4gICAgbGV0IGRvbSA9IGdldERvbUVsZW1lbnRzKCk7XG5cbiAgICBjb25zdCBhc3NpZ25Cb2FyZEJpbmRpbmdzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUFkZEJvYXJkID0oKSA9PiB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGdldFVwZGF0ZWRFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkVGV4dEJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZEJvYXJkZXJUZXh0Qm94XCIpKVxuICAgICAgICBsZXQgYm9hcmRlckJ1dHRvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZEJvYXJkZXJCdXR0b25cIikpXG4gICAgICAgIHJldHVybiB7Ym9hcmRUZXh0Qm94LCBib2FyZGVyQnV0dG9ufVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNvbnRlbnRCaW5kaW5ncyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKGVsZW1lbnRzLmJvYXJkZXJCdXR0b24sIGFkZEJvYXJkVGFza3MsXCJjbGlja1wiKTtcbiAgICAgICAgcmVtb3ZlQmluZGluZ3MoZWxlbWVudHMuYm9hcmRlckJ1dHRvbiwgYWRkQm9hcmRUYXNrS2V5cyxcImtleWRvd25cIilcblxuICAgIH1cblxuICAgIGNvbnN0IGFkZENvbnRlbnRCaW5kaW5ncyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIGFkZEJpbmRpbmdzKGVsZW1lbnRzLmJvYXJkZXJCdXR0b24sIGFkZEJvYXJkVGFza3MsXCJjbGlja1wiKTtcbiAgICAgICAgYWRkQmluZGluZ3MoZWxlbWVudHMuYm9hcmRlckJ1dHRvbiwgYWRkQm9hcmRUYXNrS2V5cywgXCJrZXlkb3duXCIpXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgY29uc3QgYWRkQm9hcmRUYXNrS2V5cyA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgYWRkQm9hcmRUYXNrcygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBhZGRCb2FyZFRhc2tzID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgbGV0IHRleHQgPSBlbGVtZW50cy5ib2FyZFRleHRCb3hbMF0udmFsdWU7XG4gICAgICAgIGlmKHRleHQubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgbGV0IHRhc2sgPSBjcmVhdGVCb2FyZFRlbXBsYXRlKHRleHQpO1xuICAgICAgICBzdGF0aWNMaXN0VGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgY2hhbmdlZExpc3RUYXNrcyA9IHNldEFycmF5KHN0YXRpY0xpc3RUYXNrcylcbiAgICAgICAgY29uc29sZS5sb2coY2hhbmdlZExpc3RUYXNrcyk7XG4gICAgICAgIHJlbmRlckxpc3RUYXNrcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgdGFza1RleHQgPSBgPGRpdiBjbGFzcyA9IFwidGFza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJ0YXNrTGFiZWxcIj5Eb2luZyBMYXVuZGFyeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJ0YXNrVG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiZ2VuZXJhbFRleHRIb2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJnZW5lcmFsVGV4dFwiPkR1ZSBOb3YgMTUgMjAyMTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJnZW5lcmFsVGV4dFwiPlByaW9yaXR5OiBIaWdoPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCJlZGl0XCIgc3JjPVwic3JjL2ltYWdlcy9lZGl0T2ZmLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiY2lyY2xlSWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkRWRpdG9yID0gKCkgPT4ge1xuICAgICAgICBsZXQgYm9hcmRUZXh0ID0gYDxkaXYgY2xhc3MgPSBcImJvYXJkVGV4dEVkaXRvclwiPlxuICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImJvYXJkdGV4dEJveFwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxwIGNsYXNzID0gXCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9uXCI+KzwvcD5cbiAgICA8L2Rpdj5gXG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGxldCB0ZXh0ID0gdGVtcGxhdGUudGV4dDtcbiAgICAgICAgbGV0IGJvYXJkVGV4dCA9IGAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYm9hcmRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJib2FyZE92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJlZGl0RXhhbXBsZUljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3MgPVwiZGVsZXRlQm9hcmRcIiAgc3JjPVwiJHt0cmFzaEltYWdlfVwiIGFsdD1cInRyYXNoIGljb24gZm9yIGRlbGV0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3MgPSBcImVkaXRCb2FyZFwiIHNyYz1cIiR7ZWRpdEljb259XCIgYWx0PVwiZWRpdGluZyBpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcImV4YW1wbGVCb2FyZFRleHRcIj4ke3RleHR9PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImJvYXJkVGV4dEVkaXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImJvYXJkdGV4dEJveFwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzID0gXCJjaGFuZ2VCb2FyZFRpdGxlQnV0dG9uXCI+KzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tIb2xkZXJcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInRhc2tBZGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rIEFkZCBUYXNrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgcmV0dXJuIGJvYXJkVGV4dDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVBZGRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFkZEJvYXJkVGV4dCA9IGA8ZGl2IGNsYXNzID0gXCJib2FyZENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYWRkQm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVtcHR5cm93XCI+ZW1wdHkgcm93PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcImFkZEJvYXJkVGV4dFwiPkFkZCBCb2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImFkZEJvYXJkZXJUZXh0Qm94XCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImFkZEJvYXJkZXJCdXR0b25cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBhZGRCb2FyZFRleHQ7XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IHJlbmRlckxpc3RUYXNrcyA9IChib29sKSA9PiB7XG4gICAgICAgIHJlbW92ZUNvbnRlbnRCaW5kaW5ncygpO1xuICAgICAgICBkb20ucGFnZUNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgaWYgKCFib29sKWNoYW5nZWRMaXN0VGFza3MucHVzaCh7YWRkQm9hcmQ6dHJ1ZX0pO1xuICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLCBcImN1cnJlbnQgdGFza1wiKVxuICAgICAgICAgICAgaWYgKHRhc2suYm9hcmQpe1xuICAgICAgICAgICAgICAgIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKHRhc2spO1xuICAgICAgICAgICAgICAgIGRvbS5wYWdlQ29udGVudC5pbm5lckhUTUwgKz0gYm9hcmRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5hZGRCb2FyZCl7XG4gICAgICAgICAgICAgICAgbGV0IGFkZEJvYXJkID0gY3JlYXRlQWRkQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBkb20ucGFnZUNvbnRlbnQuaW5uZXJIVE1MICs9IGFkZEJvYXJkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSAgICBcbiAgICBcblxuXG4gICAgICAgIFxuICAgICAgICBhZGRDb250ZW50QmluZGluZ3MoKTtcblxuXG4gICAgfVxuXG5cbiAgICBjb25zdCBjcmVhdGVCb2FyZFRlbXBsYXRlID0oY3VycmVudFRleHQsdGFza3MpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrcyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIHRhc2tzICE9IFwidW5kZWZpbmVkXCIpIGN1cnJlbnRUYXNrcyA9IHRhc2tzOyBcblxuICAgICAgICBsZXQgYm9hcmQgPSB7Ym9hcmQ6IHRydWUsIHRleHQ6Y3VycmVudFRleHQsIHRhc2tzOiBbXX07XG4gICAgICAgIHJldHVybiBib2FyZDtcblxuXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGluZyBjb250ZW50XCIpXG4gICAgICAgIHN0YXRpY0xpc3RUYXNrcyA9IFtdO1xuICAgICAgICByZW5kZXJMaXN0VGFza3MoKTtcbiAgICB9XG5cblxuXG4gICAgY29uc3QgYWN0aXZhdGVDb250ZW50ID0gKGN1cnJlbnRJbmRleCkgPT4ge1xuICAgICAgICBjaGFuZ2VkTGlzdFRhc2tzID0gW107XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT0gXCJ1bmRlZmluZWRcIikgc2VuZC5zZW5kRGF0YShzdGF0aWNMaXN0VGFza3MsaW5kZXgpOyAgIFxuICAgICAgICBpbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZGVsZXRlQ29udGVudCgpO1xuXG4gICAgICAgIGxldCBuZXdUYXNrcyA9IHNlbmQucmV0cmlldmVEYXRhKGluZGV4KTtcbiAgICAgICAgaWYgKCFuZXdUYXNrcyl7XG4gICAgICAgICAgICBzZW5kLnNlbmREYXRhKFtdLGluZGV4KVxuICAgICAgICAgICAgbmV3VGFza3MgPSBzZW5kLnJldHJpZXZlRGF0YShpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljTGlzdFRhc2tzID0gbmV3VGFza3M7XG4gICAgICAgIGNoYW5nZWRMaXN0VGFza3MgPSBzZXRBcnJheShzdGF0aWNMaXN0VGFza3MpO1xuXG4gICAgICAgIHJlbmRlckxpc3RUYXNrcygpO1xuICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7YWN0aXZhdGVDb250ZW50fTtcbiAgICBcblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuXG5cblxuXG4iLCJpbXBvcnQgZW1pdCBmcm9tIFwiLi9lbWl0LmpzXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9ib2FyZC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9uYXZpZ2F0aW9uLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5jc3NcIlxuXG4gICAgXG5jb25zdCByZW1vdmVJdGVtID0oYXJyYXksIGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChpICE9IGluZGV4KXtcbiAgICAgICAgICAgIG5ld1Rhc2tzLnB1c2goYXJyYXlbaV0pXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEluZGV4ICsrXG4gICAgfVxuICAgIHJldHVybiBuZXdUYXNrcztcbn1cblxuXG5jb25zdCBhZGRJdGVtID0gKGFycmF5LGluZGV4LCBpdGVtKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKyspe1xuICAgICAgICBpZiAoaSA9PSBpbmRleCl7XG4gICAgICAgICAgICBuZXdUYXNrcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGFza3MucHVzaChhcnJheVtpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3VGFza3M7XG59XG5cblxuY29uc3Qgc2V0QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgbmV3QXJyYXkgPSBhcnJheTtcbiAgICBsZXQgbmV3VGFza3MgPSBbXTtcbiAgICBuZXdBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBuZXdUYXNrcy5wdXNoKHRhc2spO1xuICAgIH0pXG4gICAgcmV0dXJuIG5ld1Rhc2tzO1xufVxuXG5cbmNvbnN0IGFkZEJpbmRpbmdzID0gKGVsZW1lbnRzLGZ1bmMsYmluZGluZykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKTtcbiAgICBlbHNlIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKSk7XG59XG5cbmNvbnN0IHJlbW92ZUJpbmRpbmdzID0gKGVsZW1lbnRzLGZ1bmMsYmluZGluZykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpIGVsZW1lbnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKTtcbiAgICBlbHNlIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoYmluZGluZyxmdW5jKSk7XG59XG5cblxuXG5leHBvcnQge3JlbW92ZUl0ZW0sIGFkZEl0ZW0sIGFkZEJpbmRpbmdzLCByZW1vdmVCaW5kaW5ncywgc2V0QXJyYXl9XG4iLCJsZXQgZW1pdCA9IChcbiAgICBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZXZlbnRzID0ge307XG5cbiAgICAgICAgZnVuY3Rpb24gc3Vic2NyaWJlKG5hbWUsZnVuYyl7XG4gICAgICAgICAgICBpZiAoZXZlbnRzW25hbWVdKXtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmdW5jKSkgZnVuYy5mb3JFYWNoKGYgPT4gZXZlbnRzW25hbWVdLnB1c2goZikpO1xuICAgICAgICAgICAgICAgIGVsc2UgZXZlbnRzW25hbWVdLnB1c2goZnVuYylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzW25hbWVdID0gW107XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlKG5hbWUsZnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1bnN1YnNjcmliZShuYW1lLGZ1bmMpe1xuICAgICAgICAgICAgaWYgKGV2ZW50c1tuYW1lXSl7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0FycmF5ID0gZXZlbnRzW25hbWVdO1xuICAgICAgICAgICAgICAgIG5ld0FycmF5ID0gbmV3QXJyYXkuZmlsdGVyKGYgPT4gZiAhPSBmdW5jKTtcbiAgICAgICAgICAgICAgICBldmVudHNbbmFtZV0gPSBuZXdBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN1c3BlbmQobmFtZSl7XG4gICAgICAgICAgICBsZXQgbmV3RXZlbnRzID0ge307XG4gICAgICAgICAgICBsZXQgY3VycmVudEV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgICAgIGxldCBjdXJyZW50RXZlbnRLZXlzID0gT2JqZWN0LmtleXMoY3VycmVudEV2ZW50cyk7XG4gICAgICAgICAgICBjdXJyZW50RXZlbnRLZXlzID0gY3VycmVudEV2ZW50S2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPSBuYW1lKTtcblxuICAgICAgICAgICAgY3VycmVudEV2ZW50S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3RXZlbnRzW2tleV0gPSBjdXJyZW50RXZlbnRzW2tleV07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZXZlbnRzID0gbmV3RXZlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmlyZShuYW1lLGRhdGEpe1xuICAgICAgICAgICAgaWYgKGV2ZW50c1tuYW1lXSl7XG4gICAgICAgICAgICAgICAgZXZlbnRzW25hbWVdLmZvckVhY2goZnVuYyA9PiBmdW5jKGRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7c3Vic2NyaWJlLHVuc3Vic2NyaWJlLHN1c3BlbmQsZmlyZX07XG4gICAgfVxuKSgpXG5cblxuZXhwb3J0IGRlZmF1bHQgZW1pdDsiLCJcblxuXG4vL2NyZWF0ZWluZyBuZXcgZWxtZW50IGludm9sdmVzIHVzaW5nIGEgdGVtcGxhdGUgd2hpY2ggaXMge2VsZW1lbnQ6XCJcIiwgIGNsYXNzTmFtZTogXCJcIiwgc291cmNlOlwiXCIsdHlwZTpcIlwifTtcblxuY29uc3QgY3JlYXRlRG9tRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgbGV0IHBhZ2VUZXh0ID0gYCAgICA8ZGl2IGNsYXNzID0gXCJjb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcyA9IFwid2hvbGVPdmVybGF5XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcyA9IFwiZXJyb3JNZXNzYWdlXCI+XG4gICAgPGRpdiBjbGFzcyA9IFwibWVzc2FnZUhvbGRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJjb250ZW50SG9sZGVyXCI+XG4gICAgICAgICAgICA8aDI+RXJyb3I8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3MgPSBcImVycm9yTWVzc2FnZVRleHRcIj5UZXh0IENhbm5vdCBiZSBvdmVyIDEwIGNocmFjdGVyczwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImV4aXRCdXR0b25cIj5FeGl0PC9idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuXG48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzID0gXCJtb2JpbGVNZW51XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3MgPSBcImhhbWJ1cmdlck1lbnVcIj48L2J1dHRvbj5cbiAgICAgICAgPGgyIGNsYXNzID0gXCJtb2JpbGVNZW51VGl0bGVcIj5UbyBEbyBMaXN0PC9oMj5cblxuICAgIDwvZGl2PiBcbiAgICA8ZGl2IGNsYXNzID0gXCJzZWN0aW9uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJvdmVybGF5XCI+Y3VycmVudCBvdmVybGF5PC9kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3MgPSBcImV4aXRcIj5YPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVsZW1lbnRzXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcyA9IFwibGlzdFRpdGxlXCIgPlRvIERvIExpc3Q8L2gxPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidXBDb21pbmdCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VXBjb21pbmc8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3RBZGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcInByb2plY3RUZXh0XCI+UHJvamVjdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwicGx1c1NpZ25cIj4rPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0VGFza0hvbGRlclwiPjwvZGl2PiBcbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInBhZ2VDb250ZW50XCI+IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gXG5cbiAgICBib2R5LmlubmVySFRNTCA9IHBhZ2VUZXh0O1xuXG59XG5cblxuXG5jb25zdCBnZXREb21FbGVtZW50cyA9ICgpID0+IHtcbiAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbnNcIik7XG4gICAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIik7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gICAgbGV0IGV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4aXRcIik7XG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c1wiKTtcbiAgICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0VGl0bGVcIik7XG4gICAgbGV0IHVwQ29taW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cENvbWluZ0J1dHRvblwiKTtcbiAgICBsZXQgcHJvamVjdEFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QWRkZXJcIik7XG4gICAgbGV0IHByb2plY3RUZXh0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFRleHRcIik7XG4gICAgbGV0IHBsdXNTaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbHVzU2lnblwiKTtcbiAgICBsZXQgcHJvamVjdFRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUYXNrSG9sZGVyXCIpO1xuICAgIGxldCBlZGl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFByb2plY3RCdXR0b25cIik7XG4gICAgbGV0IGVkaXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0VGV4dFwiKTtcbiAgICBsZXQgYWRkUHJvamVjdExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0TGFiZWxcIik7XG4gICAgbGV0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlQ29udGVudFwiKTtcbiAgICBsZXQgd2hvbGVPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9sZU92ZXJsYXlcIilcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvck1lc3NhZ2VcIilcbiAgICBsZXQgZXJyb3JNZXNzYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JNZXNzYWdlVGV4dFwiKTtcbiAgICBsZXQgZXhpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhpdEJ1dHRvblwiKTtcblxuICAgIHJldHVybiB7c2VjdGlvbiwgbmF2aWdhdGlvbiwgb3ZlcmxheSwgZXhpdCwgZWxlbWVudHMsXG4gICAgICAgICAgICBsaXN0VGl0bGUsIHVwQ29taW5nQnV0dG9uLCBwcm9qZWN0QWRkZXIsIHByb2plY3RUZXh0LFxuICAgICAgICAgICAgcGx1c1NpZ24sIHByb2plY3RUYXNrSG9sZGVyLCBlZGl0UHJvamVjdEJ1dHRvbiwgZWRpdFRleHQsXG4gICAgICAgICAgICBhZGRQcm9qZWN0TGFiZWwscGFnZUNvbnRlbnQsIHdob2xlT3ZlcmxheSwgZXhpdEJ1dHRvbiwgZXJyb3JNZXNzYWdlLCBlcnJvck1lc3NhZ2VUZXh0fVxuICAgIH1cblxuXG5leHBvcnQgIHtnZXREb21FbGVtZW50cywgY3JlYXRlRG9tRWxlbWVudHN9XG4gICAgXG4iLCJcblxuY29uc3Qgc2VuZCA9IChcbiAgICAoKSA9PiB7XG4gICAgICAgIGxldCBpdGVtcyA9IHt9O1xuICAgICAgICBjb25zdCBzZW5kRGF0YSA9IChkYXRhLGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpdGVtc1tpbmRleF0gPSBkYXRhO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHJldHJpZXZlRGF0YSA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW1zW2luZGV4XSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zW2luZGV4XVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVEYXRhID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaW5kZXhdKXtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEl0ZW1zID0gaXRlbXM7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJdGVtc0tleXMgPSBPYmplY3Qua2V5cyhpdGVtcykuZmlsdGVyKGtleSA9PiBrZXkgIT0gaW5kZXgpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdJdGVtcyA9IGN1cnJlbnRJdGVtc0tleXMubWFwKGtleSA9PiBjdXJyZW50SXRlbXNba2V5XSAgPSBjdXJyZW50SXRlbXNba2V5XSk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0l0ZW1zS2V5cyA9IE9iamVjdC5rZXlzKG5ld0l0ZW1zKVxuXG4gICAgICAgICAgICAgICAgbGV0IG5ld2VySXRlbXMgPSB7fTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPTA7IGkgPCBuZXdJdGVtc0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3ZXJJdGVtc1tpXSA9IG5ld0l0ZW1zW25ld0l0ZW1zS2V5c1tpXV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBuZXdlckl0ZW1zO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zLCBcInRoZSBpdGVtc1wiKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtzZW5kRGF0YSwgcmV0cmlldmVEYXRhLCBkZWxldGVEYXRhfTtcblxuICAgIH1cbikoKVxuXG5leHBvcnQge3NlbmR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJuYXZcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7cmVtb3ZlSXRlbSwgYWRkSXRlbSwgYWRkQmluZGluZ3MsIHJlbW92ZUJpbmRpbmdzLCBzZXRBcnJheX0gZnJvbSBcIi4vZWxlbWVudEV2ZW50cy5qc1wiXG5pbXBvcnQge2dldERvbUVsZW1lbnRzfSBmcm9tIFwiLi9wYWdlTGF5b3V0LmpzXCI7XG5pbXBvcnQge3NlbmR9IGZyb20gXCIuL3NlbmRcIlxuXG5pbXBvcnQgdHJhc2hJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL3RyYXNoLnN2Z1wiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuLi9pbWFnZXMvZWRpdE9mZi5zdmdcIjtcblxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuXG5cblxuXG5cblxuY29uc3QgbmF2ID0gKCkgPT4ge1xuXG4gICAgbGV0IGRvbUVsZW1lbnRzO1xuICAgIGxldCBjaGFuZ2VkVGFza3MgPSBbXTtcbiAgICBsZXQgc3RhdGljVGFza3MgPSBbXTtcbiAgICBsZXQgY29udGVudCA9IENvbnRlbnQoKTtcblxuICAgIGNvbnN0IGdldFVwZGF0ZWRFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVkaXRJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImVkaXRQcm9qZWN0XCIpKTtcbiAgICAgICAgbGV0IGRlbGV0ZUl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlSXRlbVwiKSk7XG4gICAgICAgIGxldCBwcm9qZWN0Q29udGFpbmVyVGV4dCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RDb250YWluZXJUZXh0XCIpKTtcbiAgICAgICAgbGV0IGFkZFByb2plY3RMYWJlbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRQcm9qZWN0TGFiZWxcIikpO1xuICAgICAgICBsZXQgcHJvamVjdEJ1dHRvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RCdXR0b25cIikpO1xuICAgICAgICBsZXQgcHJvamVjdFRhc2tIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUYXNrSG9sZGVyXCIpO1xuICAgICAgICBsZXQgcHJvamVjdFRhc2tIb2xkZXJDaGlsZHJlbiA9IEFycmF5LmZyb20ocHJvamVjdFRhc2tIb2xkZXIuY2hpbGRyZW4pO1xuXG5cbiAgICAgICAgcmV0dXJuIHtlZGl0SXRlbXMsIGRlbGV0ZUl0ZW1zLCBhZGRQcm9qZWN0TGFiZWxzLCBwcm9qZWN0QnV0dG9uLFxuICAgICAgICAgICAgICAgIHByb2plY3RUYXNrSG9sZGVyQ2hpbGRyZW4sIHByb2plY3RDb250YWluZXJUZXh0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlTmF2aWdhdGlvbkJpbmRpbmdzID0gKG5vdFJlbW92ZUFkZFByb2plY3RMYWJlbCkgPT4ge1xuICAgICAgICBsZXQgdXBkYXRlZEl0ZW1zID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIHJlbW92ZUJpbmRpbmdzKHVwZGF0ZWRJdGVtcy5lZGl0SXRlbXMsZWRpdEl0ZW0sXCJjbGlja1wiKTtcbiAgICAgICAgcmVtb3ZlQmluZGluZ3ModXBkYXRlZEl0ZW1zLmRlbGV0ZUl0ZW1zLCBkZWxldGVJdGVtLCBcImNsaWNrXCIpO1xuICAgICAgICByZW1vdmVCaW5kaW5ncyh1cGRhdGVkSXRlbXMucHJvamVjdEJ1dHRvbiwgc3dpdGNoUGFnZSwgXCJjbGlja1wiKTtcbiAgICAgICBpZiAoIW5vdFJlbW92ZUFkZFByb2plY3RMYWJlbCkgcmVtb3ZlQmluZGluZ3ModXBkYXRlZEl0ZW1zLmFkZFByb2plY3RMYWJlbHMsY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2ssIFwiY2xpY2tcIik7XG4gICAgICAgaWYgKCFub3RSZW1vdmVBZGRQcm9qZWN0TGFiZWwgJiYgdXBkYXRlZEl0ZW1zLmFkZFByb2plY3RMYWJlbHMubGVuZ3RoICE9IDApIHJlbW92ZUJpbmRpbmdzKHdpbmRvdywgY3JlYXRlUHJvamVjdFRhc2tzS2V5cywgXCJrZXlkb3duXCIpXG5cblxuICAgIH1cblxuXG4gICAgY29uc3QgbG9va1VwVGFzayA9IChpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gc3RhdGljVGFza3NbaW5kZXhdO1xuICAgIH1cblxuXG5cbiAgICBjb25zdCBhZGROYXZpZ2F0aW9uQmluZGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIGxldCB1cGRhdGVkSXRlbXMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKVxuICAgICAgICBhZGRCaW5kaW5ncyh1cGRhdGVkSXRlbXMuZWRpdEl0ZW1zLGVkaXRJdGVtLFwiY2xpY2tcIik7XG4gICAgICAgIGFkZEJpbmRpbmdzKHVwZGF0ZWRJdGVtcy5kZWxldGVJdGVtcywgZGVsZXRlSXRlbSwgXCJjbGlja1wiKTtcbiAgICAgICAgYWRkQmluZGluZ3ModXBkYXRlZEl0ZW1zLmFkZFByb2plY3RMYWJlbHMsY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2ssIFwiY2xpY2tcIik7XG4gICAgICAgIGFkZEJpbmRpbmdzKHVwZGF0ZWRJdGVtcy5wcm9qZWN0QnV0dG9uLHN3aXRjaFBhZ2UsIFwiY2xpY2tcIilcbiAgICAgICAgaWYgKHVwZGF0ZWRJdGVtcy5hZGRQcm9qZWN0TGFiZWxzLmxlbmd0aCAhPSAwKSBhZGRCaW5kaW5ncyh3aW5kb3csIGNyZWF0ZVByb2plY3RUYXNrc0tleXMsIFwia2V5ZG93blwiKTtcblxuICAgIH0gXG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uV2hvbGVPdmVyYXlCaW5kaW5ncyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHVwZGF0ZWRJdGVtcyA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgICAgICBhZGRCaW5kaW5ncyh1cGRhdGVkSXRlbXMucHJvamVjdEJ1dHRvbixjcmVhdGVQcm9qZWN0VGFza3NDbGljaywgXCJjbGlja1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0V2hvbGVPdmVybGF5QmluZGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIGxldCB1cGRhdGVkSXRlbXMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKTtcbiAgICAgICAgcmVtb3ZlQmluZGluZ3ModXBkYXRlZEl0ZW1zLnByb2plY3RCdXR0b24sIGNyZWF0ZVByb2plY3RUYXNrc0NsaWNrLCBcImNsaWNrXCIpO1xuICAgIH1cblxuXG4gICAgY29uc3Qgc3dpdGNoUGFnZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQsIFwiZXZlbnQgdGFyZ2V0IGN1cnJlbnQgaW5kZXhcIilcblxuICAgICAgICBjb250ZW50LmFjdGl2YXRlQ29udGVudChldmVudC50YXJnZXQuY3VycmVudEluZGV4KTtcbiAgICB9XG5cblxuXG4gICAgY29uc3QgZ2V0Q3VycmVudEluZGV4ID0gKCk9PiB7XG4gICAgICAgIGxldCB1cGRhdGVkSXRlbXMgPSBnZXRVcGRhdGVkRWxlbWVudHMoKVxuICAgICAgICBsZXQgcHJvamVjdExhYmVsID0gdXBkYXRlZEl0ZW1zLmFkZFByb2plY3RMYWJlbHNbMF07XG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBwcm9qZWN0TGFiZWwuY3VycmVudEluZGV4O1xuICAgICAgICByZXR1cm4gY3VycmVudEluZGV4XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdFRhc2tzS2V5cyA9IChldmVudCkgID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGdldEN1cnJlbnRJbmRleCgpO1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdFRhc2tzKGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0VGFza3NDbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgcHJvamVjdCB0YXNrc1wiKVxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gZ2V0Q3VycmVudEluZGV4KCk7XG4gICAgICAgIGNyZWF0ZVByb2plY3RUYXNrcyhjdXJyZW50SW5kZXgpO1xuICAgIH1cblxuXG5cblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RUYXNrcyA9IChpbmRleCkgPT4ge1xuICAgICAgICBsZXQgdGFza1RleHQgPSBnZXRUZXh0Qm94VmFsdWVzKClcbiAgICAgICAgbGV0IHRhc2sgPSB7dGFzazogdGFza1RleHR9OyAgIFxuXG4gICAgICAgIGlmICh0YXNrVGV4dC5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgaWYoc3RhdGljVGFza3NbaW5kZXhdKSBzdGF0aWNUYXNrc1tpbmRleF0gPSB0YXNrO1xuICAgICAgICAgICAgZWxzZSBzdGF0aWNUYXNrcy5wdXNoKHRhc2spXG4gICAgICAgIH1cblxuXG4gICAgIFxuICAgICAgICBjaGFuZ2VkVGFza3MgPSBzZXRBcnJheShzdGF0aWNUYXNrcyk7XG4gICAgICAgIFxuXG4gICAgICAgIHJlbmRlclByb2plY3RUYXNrcygpO1xuICAgICAgICByZW5kZXJPdmVybGF5KCk7XG5cbiAgICB9XG5cblxuXG4gICAgXG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IGV2ZW50LnRhcmdldC5jdXJyZW50SW5kZXg7XG4gICAgICAgIHN0YXRpY1Rhc2tzID0gcmVtb3ZlSXRlbShzdGF0aWNUYXNrcyxpbmRleCk7XG4gICAgICAgIHNlbmQuZGVsZXRlRGF0YShpbmRleCk7XG4gICAgICAgIGNvbnRlbnQuYWN0aXZhdGVDb250ZW50KCk7XG5cbiAgICAgICAgY2hhbmdlZFRhc2tzID0gc2V0QXJyYXkoc3RhdGljVGFza3MpO1xuICAgICAgICBcbiAgICAgICAgcmVuZGVyUHJvamVjdFRhc2tzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdEl0ZW0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RUYXNrID0gbG9va1VwVGFzayhldmVudC50YXJnZXQuY3VycmVudEluZGV4KTtcbiAgICAgICAgbGV0IHRleHQgPSBwcm9qZWN0VGFzay50YXNrO1xuICAgICAgICBjcmVhdGVFZGl0b3IodGV4dCxldmVudC50YXJnZXQuY3VycmVudEluZGV4KVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBnZXRUZXh0Qm94VmFsdWVzID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWRpdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRUZXh0XCIpXG4gICAgICAgIGxldCB0ZXh0ID0gZWRpdFRleHQudmFsdWU7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgIFxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RFZGl0b3IgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlLnZhbHVlICE9IFwidW5kZWZpbmVkXCIpIHRleHQgPSB0ZW1wbGF0ZS52YWx1ZTtcblxuICAgICAgICBsZXQgZWRpdG9yVGV4dCA9IGAgPGRpdiBjbGFzcyA9IFwiZWRpdFByb2plY3RCdXR0b25cIj5cbiAgICAgICAgPGlucHV0IGNsYXNzID0gXCJlZGl0VGV4dFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3RleHR9XCI+XG4gICAgICAgIDxwIGNsYXNzID0gXCJhZGRQcm9qZWN0TGFiZWxcIj4gKzwvcD5cbiAgICA8L2Rpdj5gXG4gICAgICAgIHJldHVybiBlZGl0b3JUZXh0O1xuXG4gICAgfVxuXG5cbiAgICBcblxuXG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCB0YXNrVGV4dCA9IGAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgID0gXCJwcm9qZWN0QnV0dG9uIHByb2plY3RCdXR0b25Ib3ZlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0VG9vbHNcIj5cbiAgICAgICAgICAgICAgICA8aW1nICBjbGFzcyA9IFwiZGVsZXRlSXRlbVwiIHNyYz1cIiR7dHJhc2hJbWFnZX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzID0gXCJlZGl0UHJvamVjdFwiIHNyYz1cIiR7ZWRpdEljb259XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8L2Rpdj4gXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3RDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwicHJvamVjdENvbnRhaW5lclRleHRcIj4ke3Rhc2sudGFza308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuICAgICAgICByZXR1cm4gdGFza1RleHQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNzaWduVGFza0FjdGlvbnMgPSAoaW5kZXgsY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCBjaGlsZEVsZW1lbnRzID0gQXJyYXkuZnJvbShjaGlsZEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2gobmV3RWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAobmV3RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImRlbGV0ZUl0ZW1cIikge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT0gXCJlZGl0UHJvamVjdFwiKXtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmN1cnJlbnRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBjb25zdCBhc3NpZ25WYWx1ZUVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBsZXQgdXBkYXRlZEl0ZW1zID0gZ2V0VXBkYXRlZEVsZW1lbnRzKCk7XG4gICAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgICAgdXBkYXRlZEl0ZW1zLnByb2plY3RUYXNrSG9sZGVyQ2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICBsZXQgZWxlbWVudENoaWxkcmVuID0gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGVsZW1lbnRDaGlsZHJlbi5mb3JFYWNoKGNoaWxkRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcInByb2plY3RUb29sc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduVGFza0FjdGlvbnMoaW5kZXgsIGNoaWxkRWxlbWVudClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PSBcImFkZFByb2plY3RMYWJlbFwiKXtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRFbGVtZW50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09IFwicHJvamVjdENvbnRhaW5lclwiKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkQXJyYXkgPSBBcnJheS5mcm9tKGNoaWxkRWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQXJyYXlbMF0uY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGluZGV4ICsrO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG5cblxuICAgIGNvbnN0IHJlbmRlclByb2plY3RUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlTmF2aWdhdGlvbkJpbmRpbmdzKCk7XG5cbiAgICAgICAgZG9tRWxlbWVudHMucHJvamVjdFRhc2tIb2xkZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY2hhbmdlZFRhc2tzLmZvckVhY2godGFzayA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0YXNrLmVkaXQpe1xuICAgICAgICAgICAgICAgIGxldCBlZGl0b3JUZXh0ICA9IGNyZWF0ZVByb2plY3RFZGl0b3IodGFzayk7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudHMucHJvamVjdFRhc2tIb2xkZXIuaW5uZXJIVE1MICs9IGVkaXRvclRleHRcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFza1RleHQgPSBjcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnRzLnByb2plY3RUYXNrSG9sZGVyLmlubmVySFRNTCArPSB0YXNrVGV4dFxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGFzc2lnblZhbHVlRWxlbWVudHMoKTtcbiAgICAgICAgYWRkTmF2aWdhdGlvbkJpbmRpbmdzKCk7XG5cbiAgICB9XG5cblxuXG4gICAgY29uc3QgcmVuZGVyT3ZlcmxheSA9KCkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tQcm9qZWN0RWRpdG9yKCkpe1xuICAgICAgICAgICAgZG9tRWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZG9tRWxlbWVudHMud2hvbGVPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBhZGRCaW5kaW5ncyhkb21FbGVtZW50cy53aG9sZU92ZXJsYXksY3JlYXRlUHJvamVjdFRhc2tzQ2xpY2ssXCJjbGlja1wiKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b25XaG9sZU92ZXJheUJpbmRpbmdzKClcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tRWxlbWVudHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICByZW1vdmVCaW5kaW5ncyhkb21FbGVtZW50cy53aG9sZU92ZXJsYXksIGNyZWF0ZVByb2plY3RUYXNrc0NsaWNrLFwiY2xpY2tcIik7XG4gICAgICAgICAgICBkb21FbGVtZW50cy53aG9sZU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdFdob2xlT3ZlcmxheUJpbmRpbmdzKCk7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tQcm9qZWN0RWRpdG9yID0gKCkgPT4ge1xuICAgICAgICBsZXQgYm9vbCA9IGZhbHNlO1xuICAgICAgICBjaGFuZ2VkVGFza3MuZm9yRWFjaCggdGFzayA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5lZGl0KSBib29sID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGJvb2w7XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVQYWdlQ29udGVudEVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVOYXZpZ2F0aW9uQmluZGluZ3ModHJ1ZSk7XG4gICAgICAgIGxldCB1cGRhdGVkRWxlbWVudCA9IGdldFVwZGF0ZWRFbGVtZW50cygpO1xuICAgICAgICBpZiAodXBkYXRlZEVsZW1lbnQucHJvamVjdEJ1dHRvbi5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICB1cGRhdGVkRWxlbWVudC5wcm9qZWN0QnV0dG9uLmZvckVhY2goIGJ1dHRvbiA9PntcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdEJ1dHRvbkhvdmVyXCIpXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuY29sb3IgPSBcInJnYigxNTcsMTYyLDE3NSlcIjtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIlxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVFZGl0b3IgPSAodGV4dCxpbmRleCkgPT4ge1xuICAgICAgICBsZXQgZWRpdG9yVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dCAhPSBcInVuZGVmaW5lZFwiKSBlZGl0b3JUZXh0ID0gdGV4dDtcblxuICAgICAgICBpZiAoIWNoZWNrUHJvamVjdEVkaXRvcigpKSB7XG4gICAgICAgICAgICB0eXBlb2YgaW5kZXggIT0gXCJ1bmRlZmluZWRcIiA/IGNoYW5nZWRUYXNrcyA9IGFkZEl0ZW0oY2hhbmdlZFRhc2tzLGluZGV4LHtlZGl0OnRydWUsIHZhbHVlOmVkaXRvclRleHR9KTogY2hhbmdlZFRhc2tzLnB1c2goe2VkaXQ6IHRydWV9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYW5nZWRUYXNrcywgXCJ0aGUgY2hhbmdlZCB0YXNrc1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGljVGFza3MsIFwidGhlIHN0YXRpYyB0YXNrc1wiKTtcblxuICAgXG4gICAgICAgIHJlbmRlclByb2plY3RUYXNrcygpO1xuICAgICAgICByZW5kZXJPdmVybGF5KCk7XG5cbiAgICAgICAgZGlzYWJsZVBhZ2VDb250ZW50RWxlbWVudHMoKTtcblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlUHJvamVjdFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUVkaXRvcigpO1xuXG4gICAgfVxuXG4gICAgLy8gd2hlbiBkb20gaXMgY2FsbGVkIGl0IHdpbGwgY3JlYXRlIHRoZSBkZWZhdWx0IGVsZW1lbnRzXG4gICAgY29uc3QgYWN0aXZhdGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgICAgICBkb21FbGVtZW50cyA9IGdldERvbUVsZW1lbnRzKCk7XG5cbiAgICAgICAgYWRkQmluZGluZ3MoZG9tRWxlbWVudHMucHJvamVjdEFkZGVyLGFjdGl2YXRlUHJvamVjdFRhc2ssXCJjbGlja1wiKTtcbiAgICBcblxuIFxuICAgIH1cblxuICAgIHJldHVybiB7YWN0aXZhdGVOYXZpZ2F0aW9ufTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==