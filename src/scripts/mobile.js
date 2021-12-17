import {removeItem, addBindings, removeBindings, setArray, setObject} from "./elementEvents.js"
import  {getInitialElements, getUpdatedElements} from "./pageLayout.js"
import {navigation} from "./nav.js";




import {contentMenu} from "./content.js";



const Mobile = () => {
    let dom ;
    let isMobile = false;


    let mobileMenuOn = false;



    let removeMobileMenu = false;

    let media = window.matchMedia("(max-width: 550px)");
    let content = contentMenu;

    let nav = navigation;
    

    const removeMobileBindings = () => {
        removeBindings(dom.hamburgerMenu, openNavigation, "click");

    }

    const addMobileBindings = () => {
        addBindings(dom.hamburgerMenu, openNavigation, "click");
        addBindings(dom.exit,openNavigation, "click");
    }

    const openNavigation = () => {
        console.log("opening the navigation")

        mobileMenuOn = !mobileMenuOn;
        renderMobileMenu()    
    }

    const resetMobileMenu = () => {
       content.removeTaskBindings();

       console.log(dom, "the current dom elements")
    //   dom.navigation.style.display = "none";
       dom.exit.style.display = "none";
       dom.mobileMenu.style.display = "flex";
       dom.pageContent.style.display = "flex";

    }




    const renderMobileMenu = (canRemoveMobileMenu) => {
        dom = getInitialElements();
        resetMobileMenu();
        removeMobileBindings();


        if (mobileMenuOn){

            dom.navigation.style.display = "block";
            dom.exit.style.display = "block";
            dom.mobileMenu.style.display = "none";
        } 

        if (removeMobileMenu && canRemoveMobileMenu){
            dom.navigation.style.display = "block";
            dom.mobileMenu.style.display = "none";
            dom.pageContent.style.display  = "flex";

            nav.addNavigationBindings();
            content.addTaskBindings();


        }

        addMobileBindings();

    }



    const watchMedia = (mediaQuery) => {
        console.log("watching media")
       

        if(media.matches || mediaQuery.matches){
            console.log("the window matches")

            if (!removeMobileMenu){

                content.removeTaskBindings();
                nav.removeNavigationBindings();
                renderMobileMenu();


            } 

            removeMobileMenu = true;
            isMobile = true;



        } else {

            console.log("the media does not match");

            if (removeMobileMenu) {
                renderMobileMenu(true);
                removeMobileBindings();
                removeMobileMenu = false;
                isMobile = false;
            }
        }
        

    }

    const closeMobileMenu = () => {
        if (isMobile) openNavigation();
    }


    const activateMobileMenu = () => {

        addBindings(media,watchMedia,"change");
        watchMedia(media);

  //    addBindings(window,randomFunction,"change")
    }

    return {activateMobileMenu, closeMobileMenu};

}



let  mobile = Mobile();
mobile.activateMobileMenu();


function randomFunction (){
    console.log("random function")
}

export {randomFunction};

