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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });



//createing new elment involves using a template which is {element:"",  className: "", source:"",type:""};

const createDomElements = () => {
    let body = document.body;

    let pageText = `    <div class = "content">
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

    return {section, navigation, overlay, exit, elements,
            listTitle, upComingButton, projectAdder, projectText,
            plusSign, projectTaskHolder, editProjectButton, editText,
            addProjectLabel,pageContent}
    }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDomElements);
    

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLDJEQUEyRDs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7QUFDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NjcmlwdHMvcGFnZUxheW91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuXG5cbi8vY3JlYXRlaW5nIG5ldyBlbG1lbnQgaW52b2x2ZXMgdXNpbmcgYSB0ZW1wbGF0ZSB3aGljaCBpcyB7ZWxlbWVudDpcIlwiLCAgY2xhc3NOYW1lOiBcIlwiLCBzb3VyY2U6XCJcIix0eXBlOlwiXCJ9O1xuXG5jb25zdCBjcmVhdGVEb21FbGVtZW50cyA9ICgpID0+IHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICBsZXQgcGFnZVRleHQgPSBgICAgIDxkaXYgY2xhc3MgPSBcImNvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzID0gXCJtb2JpbGVNZW51XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3MgPSBcImhhbWJ1cmdlck1lbnVcIj48L2J1dHRvbj5cbiAgICAgICAgPGgyIGNsYXNzID0gXCJtb2JpbGVNZW51VGl0bGVcIj5UbyBEbyBMaXN0PC9oMj5cblxuICAgIDwvZGl2PiBcbiAgICA8ZGl2IGNsYXNzID0gXCJzZWN0aW9uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJvdmVybGF5XCI+Y3VycmVudCBvdmVybGF5PC9kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3MgPSBcImV4aXRcIj5YPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImVsZW1lbnRzXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcyA9IFwibGlzdFRpdGxlXCIgPlRvIERvIExpc3Q8L2gxPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwidXBDb21pbmdCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VXBjb21pbmc8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInByb2plY3RBZGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3MgPSBcInByb2plY3RUZXh0XCI+UHJvamVjdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcyA9IFwicGx1c1NpZ25cIj4rPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0VGFza0hvbGRlclwiPjwvZGl2PiBcbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MgPSBcInBhZ2VDb250ZW50XCI+IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gXG5cbiAgICBib2R5LmlubmVySFRNTCA9IHBhZ2VUZXh0O1xuXG4gICAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25zXCIpO1xuICAgIGxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpO1xuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgIGxldCBleGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leGl0XCIpO1xuICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNcIik7XG4gICAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFRpdGxlXCIpO1xuICAgIGxldCB1cENvbWluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBDb21pbmdCdXR0b25cIik7XG4gICAgbGV0IHByb2plY3RBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEFkZGVyXCIpO1xuICAgIGxldCBwcm9qZWN0VGV4dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RUZXh0XCIpO1xuICAgIGxldCBwbHVzU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGx1c1NpZ25cIik7XG4gICAgbGV0IHByb2plY3RUYXNrSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0VGFza0hvbGRlclwiKTtcbiAgICBsZXQgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRQcm9qZWN0QnV0dG9uXCIpO1xuICAgIGxldCBlZGl0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFRleHRcIik7XG4gICAgbGV0IGFkZFByb2plY3RMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdExhYmVsXCIpO1xuICAgIGxldCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZUNvbnRlbnRcIik7XG5cbiAgICByZXR1cm4ge3NlY3Rpb24sIG5hdmlnYXRpb24sIG92ZXJsYXksIGV4aXQsIGVsZW1lbnRzLFxuICAgICAgICAgICAgbGlzdFRpdGxlLCB1cENvbWluZ0J1dHRvbiwgcHJvamVjdEFkZGVyLCBwcm9qZWN0VGV4dCxcbiAgICAgICAgICAgIHBsdXNTaWduLCBwcm9qZWN0VGFza0hvbGRlciwgZWRpdFByb2plY3RCdXR0b24sIGVkaXRUZXh0LFxuICAgICAgICAgICAgYWRkUHJvamVjdExhYmVsLHBhZ2VDb250ZW50fVxuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRG9tRWxlbWVudHM7XG4gICAgXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=