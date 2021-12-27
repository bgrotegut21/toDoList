import { addBindings, removeBindings} from "./elementEvents.js"
import  {getInitialElements, getUpdatedElements} from "./pageLayout.js"
import {navigation} from "./nav.js";



import {contentMenu} from "./content.js";



const Mobile = () => {
    let dom ;
    let isMobile = false;


    let mobileMenuOn = false;

    
    let removeMobileMenu = false;

    let media = window.matchMedia("(max-width: 550px)");
    let content;
    let nav;
    

    const removeMobileBindings = () => {
        let elements = getUpdatedElements();



        removeBindings(dom.hamburgerMenu, openNavigation, "click");
        removeBindings(dom.exit,openNavigation, "click");
        removeBindings(dom.projectAdder, addRenderProjectBindings, "click")
        removeBindings(elements.projectContainer,openNavigation, "click")
        removeBindings(dom.upComingButton, openNavigation,"click");




    }

    const addMobileBindings = () => {
        let elements = getUpdatedElements();
        console.log(elements, "the current elements")

        addBindings(dom.hamburgerMenu, openNavigation, "click");
        addBindings(dom.exit,openNavigation, "click");
        addBindings(dom.projectAdder, addRenderProjectBindings, "click")
        addBindings(elements.projectContainer,openNavigation, "click")
        addBindings(dom.upComingButton, openNavigation,"click");



    }

    const openNavigation = () => {
        mobileMenuOn = !mobileMenuOn;
        renderMobileMenu()    
    }




    const resetMobileMenu = () => {
       dom.exit.style.display = "none";
       dom.mobileMenu.style.display = "flex";
       dom.pageContent.style.display = "flex";
       dom.navigation.style.display = "none";
    }





    const addRenderProjectBindings = () => {
        console.log("adding render project bindings!!!!!")
        nav.activateProjectTask();
        nav.removeSpecialMobileBindings();

        let elements = getUpdatedElements();
        addBindings(elements.addProjectLabels,renderMobileMenuClick,"click");
        addBindings(dom.wholeOverlay, renderMobileMenuClick, "click");
        addBindings(window, renderMobileMenuKeys, "keydown");
    }

    const renderMobileMenuKeys = (event) => {
        nav.createProjectTasksKeys(event);

        if (event.key == "Enter"){
            nav.removeSpecialMobileBindings();
            removeRenderMobileEvents();
            renderMobileMenu();
        }

    }

    const removeRenderMobileEvents = () => {
        let elements = getUpdatedElements();

        removeBindings(elements.addProjectLabels,renderMobileMenuClick,"click");
        removeBindings(dom.wholeOverlay, renderMobileMenuClick, "click");
        removeBindings(window,renderMobileMenuKeys,"keydown");

    }


    const renderMobileMenuClick = (event) => {
        nav.createProjectTasksClick();
        nav.removeSpecialMobileBindings();
        removeRenderMobileEvents();
        renderMobileMenu();
    }

    const renderMobileMenu = (canRemoveMobileMenu) => {
        dom = getInitialElements();
        removeMobileBindings();
        nav.removeNavigationBindings();
        content.removeTaskBindings();
        resetMobileMenu();

        if (mobileMenuOn){
            dom.navigation.style.display = "block";
            dom.exit.style.display = "block";
            dom.mobileMenu.style.display = "none";
        } 

        if (removeMobileMenu && canRemoveMobileMenu){
            dom.navigation.style.display = "block";
            dom.mobileMenu.style.display = "none";
            dom.pageContent.style.display  = "flex";
            dom.exit.style.display = "none";

            nav.addNavigationBindings();
            content.addTaskBindings();
            return;
        }


        if (!mobileMenuOn) content.addTaskBindings();
        addNavigationBindings();
        addMobileBindings();

    }



    const addNavigationBindings = () => {
        nav.addNavigationBindings();
        nav.removeSpecialMobileBindings();;
        
    }


    const watchMedia = (mediaQuery) => {       
        if(media.matches || mediaQuery.matches){
            if (!removeMobileMenu){
                renderMobileMenu();
                removeMobileMenu = true;
                isMobile = true;
            } 




        } else {
            if (removeMobileMenu) {
                renderMobileMenu(true);
                removeMobileBindings();
                removeMobileMenu = false;
                isMobile = false;
                mobileMenuOn = false;
            }
        }
        

    }


    const activateMobileMenu = () => {
        content = contentMenu;
        nav  = navigation;

        addBindings(media,watchMedia,"change");
        watchMedia(media);
    }

    return {activateMobileMenu};

}



let  mobile = Mobile();
export {mobile};
