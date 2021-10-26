import element from "./elementEvents";
import trashIcon from "../images/trash.svg";
import editIcon from "../images/editOff.svg";


//createing new elment involves using a template which is {element:"",  className: "", source:"",type:""};

const createDomElements = () => {
    let body = document.body;
    let content = makeElement({element:"div",className:"content"});
    body.appendChild(content);

    let pageContent = `        <div class = "mobileMenu">
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
            <div class = "projectContainter">
                <h2 class = "projectText">Project</h2>
                <h2 class = "plusSign">+</h2>
            </div>
            <div class = "projectTaskHolder"></div> 
            <div class = "editProjectButton">
                <input class = "editText" type="text" placeholder="New Project">
                <p class = "addProjectLabel"> +</p>
            </div>
        </div>
    </div>
    <div class = "pageContent"></div>
    </div>`

    const createPage = () => {
        content.innerHTML = pageContent;
    }

    const createDomElement = () => {
        
        let section = document.querySelector(".sections");
        let navigation = document.querySelector(".navigation");
        let overlay = document.querySelector(".overlay");
        let exit = document.querySelector(".exit");
        let elements = document.querySelector(".elements");
        let listTitle = document.querySelector(".listTitle");
        let upComingButton = document.querySelector(".upComingButton");
        let projectContainer = document.querySelector(".projectContainer");
        let projectText =  document.querySelector(".projectText");
        let plusSign = document.querySelector(".plusSign");
        let projectTaskHolder = document.querySelector(".projectTaskHolder");
        let editProjectButton = document.querySelector(".editProjectButton");
        let editText = document.querySelector(".editText");
        let addProjectLabel = document.querySelector(".addProjectLabel");
        let pageContent = document.querySelector(".pageContent");
    

    }










    }
