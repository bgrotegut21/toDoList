//if you want to clear data write localStorage.clear() in the console

import {navigation} from "./nav.js";
import {createDomElements} from "./pageLayout.js";
import {mobile} from "./mobile.js";


createDomElements();



//mobile.js, content.js,  nav.js all call there class before we have activated 
//any of the elements so makesure to set elements once has everything activated
//or else you will get an error.
// content does not acess navigation or mobile so you do not have to worry that
// much about content however navigation activates before mobile.
navigation.activateNavigation();
mobile.activateMobileMenu();